const express = require('express');
const router = express.Router();
const prisma = require('../db');


// Helper to include tags
const includeTags = {
    include: {
        tags: {
            include: { tag: true }
        }
    }
};


// List snippets (supports ?search=)
router.get('/', async (req, res) => {
    const { search } = req.query;
    const where = search
        ? {
            OR: [
                { code: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } },
                { tags: { some: { tag: { name: { contains: search, mode: 'insensitive' } } } } }
            ]
        }
        : {};
    const snippets = await prisma.snippet.findMany({ where, ...includeTags, orderBy: { createdAt: 'desc' } });
// map tags to array of tag objects
    const out = snippets.map(s => ({
        id: s.id,
        code: s.code,
        description: s.description,
        createdAt: s.createdAt,
        tags: s.tags.map(st => st.tag)
    }));
    res.json(out);
});


// Create snippet (accepts tags: [tagId])
router.post('/', async (req, res) => {
    const { code, description, tags = [] } = req.body;
    if (!code) return res.status(400).json({ error: 'code required' });
    try {
        const created = await prisma.snippet.create({
            data: {
                code,
                description,
                tags: {
                    create: tags.map(tagId => ({ tag: { connect: { id: tagId } } }))
                }
            },
            ...includeTags
        });
        const out = { ...created, tags: created.tags.map(st => st.tag) };
        res.status(201).json(out);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});


// Get snippet
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const s = await prisma.snippet.findUnique({ where: { id }, ...includeTags });
    if (!s) return res.status(404).json({ error: 'not found' });
    res.json({ ...s, tags: s.tags.map(st => st.tag) });
});


// Update snippet (replace tag list if provided)
module.exports = router;