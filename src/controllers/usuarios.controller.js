const Usuario = require('../models/usuario.model');

const to = promise => (
    promise
        .then(data => ({ data, error: null}))
        .catch(error => ({ error, data: null}))
);

module.exports = {
    // Listar todos os usuarios
    async index(req, res) {
        const user = await to(Usuario.find());
        if (error) {
            console.log(error);
            return;
        }
        res.json(user);
    },
    // Criar Usuário
    async create(req, res) {
        const {nome_usuario, email_usuario, tipo_usuario, senha_usuario} = req.body;

        let data = {};

        let user = await Usuario.findOne({email_usuario});
        if(!user){
            data = {nome_usuario, email_usuario, tipo_usuario, senha_usuario};
            user = await Usuario.create(data);
            return res.status(200).json(user);
        } else{
            return res.status(500).json(user);
        }
    }, 

    // Listar o usuario selecionado pelo id
    async details(req, res) {
        const {_id} = req.params;
        const user = await Usuario.findOne({_id});
        res.json(user);
    },
    // Deletar o usuario pelo seu id
    async delete(req, res){
        const { _id } = req.params;
        const user = await Usuario.findByIdAndDelete({ _id });
        return res.json(user);
    },
    // Atualizar o usuario pelo seu id
    async update(req,res){
        const { _id, nome_usuario, email_usuario, senha_usuario,tipo_usuario } = req.body;
        const data = {nome_usuario,email_usuario,senha_usuario,tipo_usuario};
        const user = await Usuario.findOneAndUpdate({_id},data,{new:true});
        res.json(user);
    },
}