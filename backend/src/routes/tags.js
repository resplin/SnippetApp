const express = require('express');
const router = express.Router();
const prisma = require('../db');


// List tags
router.get('/', async (req, res) => {
    const tags = await prisma.tag.findMany({ orderBy: { name: 'asc' } });
    res.json(tags);
});


// Create tag
router.post('/', async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'name required' });
    try {
        const tag = await prisma.tag.create({ data: { name } });
        res.status(201).json(tag);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});


// Get tag
router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const tag = await prisma.tag.findUnique({ where: { id } });
    if (!tag) return res.status(404).json({ error: 'not found' });
    res.json(tag);
});


// Update tag
router.put('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    try {
        const tag = await prisma.tag.update({ where: { id }, data: { name } });
        res.json(tag);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});


// Delete tag
router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await prisma.tag.delete({ where: { id } });
        res.status(204).end();
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});


module.exports = router;