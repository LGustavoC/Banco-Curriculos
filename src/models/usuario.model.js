const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Definindo informacoes que serao salvas
const DataSchema = new mongoose.Schema({
    nome_usuario:String,
    cargo_pretendido:String,
    dia_nasc:Number,
    mes_nasc:Number,
    ano_nasc:Number,
    estado_civil:Number,
    sexo:Number,
    endereco:String,
    bairro:String,
    cidade:String,
    cep:String,
    tel_1:String,
    tel_2:String,
    celular:String,
    contato:String,
    email_usuario:String,
    tipo_usuario:String,
    identidade:String,
    cpf_usuario:String,
    possui_veiculo:Number,
    habilitacao:Number,
    senha_usuario:String,  
},{
    timestamps:true
})

// Salvar senha do usuario criptografada
DataSchema.pre('save', function(next){
    if(!this.isModified("senha_usuario")){
        return next();
    }
    this.senha_usuario = bcrypt.hashSync(this.senha_usuario, 10);
    next();
});

// Salvar senha do update criptografada
DataSchema.pre('findOneAndUpdate', function(next){
    let password = this.getUpdate().senha_usuario + '';
    if(password.length<55){
        this.getUpdate().senha_usuario = bcrypt.hashSync(password, 10);
    }
    next();
});

const usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;