import tarefaModel from '../models/tarefaModel.js';

class TarefaController{
    getAll = (req, res) => {
        const tarefas = tarefaModel.getAll();
        res.json(tarefas);
    };
    create = ({ body: { descricao}}, res) => {
        if(!descricao){
            res.status(400).json({message: 'Descricao é obrigatoria'});
        }
        const novaTarefa = tarefaModel.create(descricao);
        res.status(201).json(novaTarefa);
    };
    update = ({ params: { id }, body: { concluida } }, res) => {
        const tarefaAtualizada = tarefaModel.update(id, concluida);
        if (!tarefaAtualizada) {
            return res.status(404).json({ erro: "Não encontrado filhão!"});
        }
        res.json(tarefaAtualizada);
    };
    delete = ({params: { id } }, res) => {
        const sucesso = tarefaModel.delete(id);
        if (!sucesso) {
            return res.status(404).json({ erro: "Vixe fi, não encontrei"});
        }
        res.status(204).send();
    };
}

export default new TarefaController();