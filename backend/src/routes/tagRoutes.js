import express from 'express';
import {
    createTag,
    getTags,
    getTag,
    updateTag,
    deleteTag
} from '../controllers/tagController.js';

const router = express.Router();

router.get('/', getTags);
router.post('/', createTag);
router.get('/:id', getTag);
router.put('/:id', updateTag);
router.delete('/:id', deleteTag);

export default router;
