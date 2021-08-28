import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ImgAdmin from '../../../assets/img/banco-curriculo-menor.jpg';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import { TextField } from '@material-ui/core';
import { borderLeft } from '@material-ui/system';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core';
import { cpfMask } from './mask'

import api from '../../../services/api';

function cpfMascara(e) {
  this.setState({ documentId: cpfMask(e.target.value) })
}

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function UsuarioCadastrar() {
  const classes = useStyles();

  const [nome, setNome] = useState('');
  const [cargo_pretendido, setCargo_pretendido] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');
  const [dia_nasc, setDia_nasc] = useState('');
  const [mes_nasc, setMes_nasc] = useState('');
  const [ano_nasc, setAno_nasc] = useState('');
  const [estado_civil, setEstado_civil] = useState('');
  const [sexo, setSexo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [tel_1, setTel_1] = useState('');
  const [tel_2, setTel_2] = useState('');
  const [celular, setCelular] = useState('');
  const [contato, setContato] = useState('');
  const [identidade, setIdentidade] = useState('');
  const [cpf, setCpf] = useState('');
  const [possui_veiculo, setPossui_veiculo] = useState('');
  const [habilitacao, setHabilitacao] = useState('');

  async function handleSubmit(){
    const data = {
      nome_usuario: nome,
      cargo_pretendido: cargo_pretendido,
      email_usuario: email,
      senha_usuario: senha,
      tipo_usuario: tipo,
      dia_nasc: dia_nasc,
      mes_nasc: mes_nasc,
      ano_nasc: ano_nasc,
      estado_civil: estado_civil,
      sexo: sexo,
      endereco: endereco,
      bairro: bairro,
      cidade: cidade,
      cep: cep,
      tel_1: tel_1,
      tel_2: tel_2,
      celular: celular,
      contato: contato,
      identidade: identidade,
      cpf_usuario: cpf,
      possui_veiculo: possui_veiculo,
      habilitacao: habilitacao
    }

    if(nome !== '' && email !== '' && tipo !== ''){
      const response = await api.post('/api/usuarios', data);

      if(response.status===200){
        window.location.href='/admin/usuarios';
      }else{
      alert('Erro ao cadastrar o usuário!');
      }
    } else{
      alert('Por favor, preencha todos os dados obrigatórios!')
    }
  }

  return (
    <div className={classes.root}>
      {/*Chamar o menu admin implementado*/ }
      <MenuAdmin title={'Banco de Currículos'}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
            <Grid item sm={12}>
              <Paper className = {classes.paper}>
                <h2>Formulário de Cadastro Banco de Currículos</h2>
                <Grid container spacing={3}>

                  <Grid container item xs={12} sm={12}>
                    <img src={ImgAdmin} />
                  </Grid>

                  <Grid container item xs={12} sm={12}>
                    <h2>Dados Pessoais</h2>
                  </Grid>

                  <Grid item xs={6} sm={6}>
                    <TextField
                      required
                      id="nome"
                      name="nome"
                      label="Nome completo"
                      fullWidth
                      autoComplete="nome"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={6} sm={6}>
                    <TextField
                      id="cargo_pretendido"
                      name="cargo_pretendido"
                      label="Cargo Pretendido"
                      fullWidth
                      autoComplete=""
                      value={cargo_pretendido}
                      onChange={e => setCargo_pretendido(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                  <TextField
                    id="filled-textarea"
                    label="E-mail"
                    placeholder="ex:myname@example.com"
                    multiline
                    variant="filled"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  </Grid>   

                  <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-native-simple">Tipo</InputLabel>
                      <Select
                        native
                        value={tipo}
                        onChange={e => setTipo(e.target.value)}
                        inputProps={{
                          name: 'labelTipo',
                          id: 'tipo',
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={1}>Administrador</option>
                        <option value={2}>Funcionário</option>
                      </Select>
                    </FormControl>
                  </Grid>   

                  {/*<Grid item xs={12} sm={3}>
                    <TextField
                      type="password"
                      required
                      id="senha"
                      name="senha"
                      label="Senha"
                      fullWidth
                      autoComplete="senha"
                      value={senha}
                      onChange={e => setSenha(e.target.value)}
                    />
                      </Grid>*/}
                  <Grid item xs={6} sm={2}>
                    <h4>Data de Nascimento:</h4>
                  </Grid>
                  <Grid item xs={2} sm={1}>
                    <TextField
                      required
                      id="dia_nasc"
                      label="Dia"
                      type="number"
                      InputLabelProps={{
                      shrink: true,
                      }}
                      variant="outlined"
                      value={dia_nasc}
                      onChange={e => setDia_nasc(e.target.value)}
                      />
                  </Grid>
                  <Grid item xs={2} sm={1}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Mês</InputLabel>
                        <Select
                          required
                          native
                          value={mes_nasc}
                          onChange={e => setMes_nasc(e.target.value)}
                          inputProps={{
                            name: 'labelTipo',
                            id: 'mes_nasc',
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={1}>Janeiro</option>
                          <option value={2}>Fevereiro</option>
                          <option value={3}>Março</option>
                          <option value={4}>Abril</option>
                          <option value={5}>Maio</option>
                          <option value={6}>Junho</option>
                          <option value={7}>Julho</option>
                          <option value={8}>Agosto</option>
                          <option value={9}>Setembro</option>
                          <option value={10}>Outubro</option>
                          <option value={11}>Novembro</option>
                          <option value={12}>Dezembro</option>
                        </Select>
                      </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={2}>
                    <TextField
                      required
                      id="ano_nasc"
                      label="Ano"
                      type="number"
                      InputLabelProps={{
                      shrink: true,
                      }}
                      variant="outlined"
                      value={ano_nasc}
                      onChange={e => setAno_nasc(e.target.value)}
                      />
                  </Grid>

                  <Grid item xs={8} sm={2}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-native-simple">Estado Civil</InputLabel>
                      <Select
                        native
                        value={estado_civil}
                        onChange={e => setEstado_civil(e.target.value)}
                        inputProps={{
                          name: 'labelEstado_civil',
                          id: 'estado_civil',
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={1}>Solteira(o)</option>
                        <option value={2}>Casada(o)</option>
                        <option value={3}>Viúva(o)</option>
                        <option value={4}>Divorciada(o)</option>
                      </Select>
                    </FormControl>
                  </Grid>   

                  <Grid item xs={12} sm={3}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-native-simple">Sexo</InputLabel>
                      <Select
                        native
                        value={sexo}
                        onChange={e => setSexo(e.target.value)}
                        inputProps={{
                          name: 'labelSexo',
                          id: 'sexo',
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={1}>Masculino</option>
                        <option value={2}>Feminino</option>
                        <option value={3}>Não Binário</option>
                        <option value={4}>Prefiro Não Informar</option>
                      </Select>
                    </FormControl>
                  </Grid>   

                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="endereco"
                      name="endereco"
                      label="Endereço"
                      fullWidth
                      autoComplete="nome"
                      value={endereco}
                      onChange={e => setEndereco(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={6} sm={6}>
                    <TextField
                      required
                      id="bairro"
                      name="bairro"
                      label="Bairro"
                      fullWidth
                      autoComplete="bairro"
                      value={bairro}
                      onChange={e => setBairro(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={6} sm={6}>
                    <TextField
                      required
                      id="cidade"
                      name="cidade"
                      label="Cidade"
                      fullWidth
                      autoComplete=""
                      value={cidade}
                      onChange={e => setCidade(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <TextField
                      id="cep"
                      name="cep"
                      label="Cep"
                      fullWidth
                      autoComplete=""
                      value={cep}
                      onChange={e => setCep(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <TextField
                      placeholder="9999-9999 ou 9999-99999" 
                      id="tel_1"
                      name="tel_1"
                      label="Telefone Fixo 1"
                      fullWidth
                      autoComplete=""
                      value={tel_1}
                      onChange={e => setTel_1(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <TextField
                      placeholder="9999-9999 ou 9999-99999"
                      id="tel_2"
                      name="tel_2"
                      label="Telefone Fixo 2"
                      fullWidth
                      autoComplete=""
                      value={tel_2}
                      onChange={e => setTel_2(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <TextField
                      placeholder="9999-9999 ou 9999-99999"
                      id="celular"
                      name="celular"
                      label="Celular"
                      fullWidth
                      autoComplete=""
                      value={celular}
                      onChange={e => setCelular(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="contato"
                      name="contato"
                      label="Contato"
                      fullWidth
                      autoComplete=""
                      value={contato}
                      onChange={e => setContato(e.target.value)}
                    />
                  </Grid>
                  
                  <Grid container item xs={12} sm={12}>
                    <h2>Documentos</h2>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="identidade"
                      name="identidade"
                      label="Identidade"
                      fullWidth
                      autoComplete=""
                      value={identidade}
                      onChange={e => setIdentidade(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="cpf"
                      name="cpf"
                      label="CPF"
                      fullWidth
                      autoComplete=""
                      value={cpf}
                      onChange={e => setCpf(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-native-simple">Possui Veículo</InputLabel>
                      <Select
                        native
                        value={possui_veiculo}
                        onChange={e => setPossui_veiculo(e.target.value)}
                        inputProps={{
                          name: 'labelPossuiveiculo',
                          id: 'possuiVeiculo',
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={1}>Não</option>
                        <option value={2}>Camelo</option>
                        <option value={3}>Carro</option>
                        <option value={4}>Moto</option>
                        <option value={5}>Caminhão</option>
                        <option value={6}>Ônibus</option>
                        <option value={7}>Avião</option>
                        <option value={8}>Nave B)</option>
                      </Select>
                    </FormControl>
                  </Grid> 

                  <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="age-native-simple">Habilitação</InputLabel>
                      <Select
                        native
                        value={habilitacao}
                        onChange={e => setHabilitacao(e.target.value)}
                        inputProps={{
                          name: 'labelHabilitacao',
                          id: 'habilitacao',
                        }}
                      >
                        <option aria-label="None" value="" />
                        <option value={1}>Não</option>
                        <option value={2}>ACC</option>
                        <option value={3}>A</option>
                        <option value={4}>B</option>
                        <option value={5}>C</option>
                        <option value={6}>D</option>
                        <option value={7}>E</option>
                      </Select>
                    </FormControl>
                  </Grid> 
                 



                  <Grid item xs={12} sm={12}>
                    <Button variant="contained" onClick={handleSubmit} color="primary">
                      Enviar
                    </Button>
                  </Grid>   
               </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
      
    </div>
  );
}