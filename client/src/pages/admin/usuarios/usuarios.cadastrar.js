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

import api from '../../../services/api';


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
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');

  async function handleSubmit(){
    const data = {
      nome_usuario:nome,
      email_usuario:email,
      senha_usuario:senha,
      tipo_usuario:tipo
    }

    const response = await api.post('/api/usuarios', data);

    if(response.status==200){
      window.location.href='/usuarios';
    }else{
      alert('Erro ao cadastrar o usuário!');
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

                  <Grid item xs={12} sm={12}>
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

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="E-mail"
                      fullWidth
                      autoComplete="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Grid>   

                  <Grid item xs={12} sm={3}>
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

                  <Grid item xs={12} sm={3}>
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