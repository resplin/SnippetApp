import {
    getTagRecords,
    getTagRecord,
    createTagRecord,
    updateTagRecord,
    deleteTagRecord
} from '../services/tag.js';

export const getTags = async (req, res) => {
    try {
        const tags = await getTagRecords();
        res.json(tags);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const getTag = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error(`Non-numeric value: ${id}`);

    try {
        const tag = await getTagRecord(id)
        res.json(tag);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

export const createTag = async (req, res) => {
    try {
        const tag = await createTagRecord(req.body);
        res.status(201).json(tag);
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(409).json({ error: err });
        } else {
            res.status(500).json({ error: err });
        }
    }
};

export const updateTag = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error(`Non-numeric value: ${id}`);

    try {
        const tag = await updateTagRecord(id, req.body);
        res.json(tag);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deleteTag = async (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error(`Non-numeric value: ${id}`);

    try {
        await deleteTagRecord(id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
