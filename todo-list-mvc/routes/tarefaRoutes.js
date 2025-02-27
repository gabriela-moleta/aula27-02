import express from 'express';
import tarefaController from '../models/tarefaController';

const router = express.Router();

router.get('/', tarefaController.getAll);
router.post('/', tarefaController.create);
router.put('/', tarefaController.update);
router.delete('/', tarefaController.delete);

export default router;