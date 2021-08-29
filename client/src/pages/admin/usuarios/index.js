import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ImgAdmin from '../../../assets/img/banco-curriculo-menor.jpg';
import MenuAdmin from '../../../components/menu-admin';
import Footer from '../../../components/footer-admin';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export default function UsuariosListagem() {
  const classes = useStyles();

  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function loadUsuarios(){
      const response = await api.get("/api/usuarios");
      console.log(response.data);
      setUsuarios(response.data);
    }
    loadUsuarios();
    },[])

  return (
    <div className={classes.root}>
      {/*Chamar o menu admin implementado*/ }
      <MenuAdmin title={'Listagem de Currículos'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <img src={ImgAdmin} />
           </Grid>
           <Grid item sm={12}>
            <Paper className = {classes.paper}>
              <h2>Listagem de Currículos</h2>
              <Grid container spacing={3}>
              <TableContainer component={Paper}>
              <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell> Nome Completo </TableCell>
                    <TableCell align="center">Cargo Pretendido</TableCell>
                    <TableCell align="center">Ano de Nascimento</TableCell>
                    <TableCell align="center">Estado Civil</TableCell>
                    <TableCell align="center">Sexo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                 {usuarios.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell component="th" scope="row">
                        {row.nome_usuarios}
                      </TableCell>
                      <TableCell align="right">{row.cargo_pretendido}</TableCell>
                      <TableCell align="right">{row.ano_nasc}</TableCell>
                      <TableCell align="right">{row.estado_civil}</TableCell>
                      <TableCell align="right">{row.sexo}</TableCell>
                    </TableRow>
                 ))}
                </TableBody>
              </Table>
            </TableContainer>
              </Grid>
            </Paper>
           </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}