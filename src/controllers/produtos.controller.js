const Produto = require('../models/produto.model');

module.exports = {
    // Listar todos os usuarios
    async index(req, res) {
        const product = await Produto.find();
        res.json(product);
    },
    // Criar produto
    async create(req, res) {
        const {nome_produto, descricao_produto, preco_produto, qtd_produto} = req.body;

        let data = {};

        let product = await Produto.findOne({nome_produto});
        if(!product){
            data = {nome_produto, descricao_produto, preco_produto, qtd_produto};
            product = await Produto.create(data);
            return res.status(200).json(product);
        } else{
            return res.status(500).json(product);
        }
    }, 

    // Listar o usuario selecionado pelo id
    async details(req, res) {
        const {_id} = req.params;
        const product = await Produto.findOne({_id});
        res.json(product);
    },
    // Deletar o produto pelo seu id
    async delete(req, res){
        const { _id } = req.params;
        const product = await Produto.findByIdAndDelete({ _id });
        return res.json(product);
    },
    // Atualizar o produto pelo seu id
    async update(req,res){
        const { _id, nome_produto, descricao_produto, preco_produto, qtd_produto } = req.body;
        const data = {nome_produto, descricao_produto, preco_produto, qtd_produto};
        const product = await Produto.findOneAndUpdate({_id},data,{new:true});
        res.json(product);
    },
}