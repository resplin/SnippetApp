import {
    getSnippetRecords,
    getSnippetRecord,
    createSnippetRecord,
    updateSnippetRecord,
    deleteSnippetRecord
} from '../services/snippet.js';

export const getSnippets = async (req, res) => {
    try {
        const snippets = await getSnippetRecords();
        res.json(snippets);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getSnippet = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error(`Non-numeric value: ${id}`);

    try {
        const snippet = await getSnippetRecord(id)
        res.json(snippet);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const createSnippet = async (req, res) => {
    try {
        const snippet = await createSnippetRecord(req.body);
        res.status(201).json(snippet);
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(409).json({ error: err });
        } else {
            res.status(500).json({ error: err });
        }
    }
};

export const updateSnippet = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error(`Non-numeric value: ${id}`);

    try {
        const snippet = await updateSnippetRecord(id, req.body);
        res.json(snippet);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deleteSnippet = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error(`Non-numeric value: ${id}`);

    try {
        await deleteSnippetRecord(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
