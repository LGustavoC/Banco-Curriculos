const Usuario = require('../models/usuario.model');

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
        const {
            nome_usuario, 
            cargo_pretendido, 
            dia_nasc, 
            mes_nasc, 
            ano_nasc, 
            estado_civil,
            sexo,
            endereco,
            bairro,
            cidade,
            cep,
            tel_1,
            tel_2,
            celular,
            contato,
            email_usuario, 
            tipo_usuario,
            identidade,
            cpf_usuario,
            possui_veiculo,
            habilitacao, 
            senha_usuario} = req.body;

        let data = {};

        let user = await Usuario.findOne({email_usuario});
        
        data = {
            nome_usuario, 
            cargo_pretendido, 
            dia_nasc, 
            mes_nasc, 
            ano_nasc, 
            estado_civil,
            sexo,
            endereco,
            bairro,
            cidade,
            cep,
            tel_1,
            tel_2,
            celular,
            contato,
            email_usuario, 
            tipo_usuario,
            identidade,
            cpf_usuario,
            possui_veiculo,
            habilitacao, 
            senha_usuario};
        user = await Usuario.create(data);
        return res.status(200).json(user);
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
        const { 
            _id, 
            nome_usuario, 
            cargo_pretendido, 
            dia_nasc, 
            mes_nasc, 
            ano_nasc, 
            estado_civil,
            sexo,
            endereco,
            bairro,
            cidade,
            cep,
            tel_1,
            tel_2,
            celular,
            contato,
            email_usuario, 
            tipo_usuario,
            identidade,
            cpf_usuario,
            possui_veiculo,
            habilitacao, 
            senha_usuario} = req.body;
        const data = {
            nome_usuario, 
            cargo_pretendido, 
            dia_nasc, 
            mes_nasc, 
            ano_nasc, 
            estado_civil,
            sexo,
            endereco,
            bairro,
            cidade,
            cep,
            tel_1,
            tel_2,
            celular,
            contato,
            email_usuario, 
            tipo_usuario,
            identidade,
            cpf_usuario,
            possui_veiculo,
            habilitacao, 
            senha_usuario};
        const user = await Usuario.findOneAndUpdate({_id},data,{new:true});
        res.json(user);
    },
}