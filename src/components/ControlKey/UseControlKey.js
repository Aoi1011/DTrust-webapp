import React, { useState } from 'react';
import { InputLabel, TextField, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Link, Modal, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';

const useUsekeyStyles = makeStyles((theme) => ({
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  container: {
    paddingTop: '5vh',
    paddingBottom: '5vh',
    '& .MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
    },
    '& fieldset': {
      borderRadius: 0,
    },
  },
  label: {
    color: 'black',
    fontWeight: 600,
  },
  button: {
    backgroundColor: '#ffffff',
    textTransform: 'none',
    border: '4px solid #fe8d4a',
    borderRadius: 0,
    color: '#fe8d4a',
    width: '100%',
    '&:hover': {
      backgroundColor: '#ffffffdd',
    },
  },
  input: {
    width: '100%',
  },
  tableContainer: {
    marginBottom: '5vh',
  },
  table: {
    minWidth: 650,
  },
  tableItem: {
    cursor: 'pointer',
    color: 'black',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '60vw',
  },
}));

function createData(name) {
  return { name };
}

const rows = [
  createData(`Settlor's beneficiary address key`),
  createData(`Trustee's beneficiary address key`),
  createData(`Settlor's distribution schedule key`),
  createData(`Trustee's distribution schedule key`),
  createData(`Settlor's revocation key`),
  createData(`Trustee's revocation key`),
  createData(`Settlor's asset swap key`),
  createData(`Trustee's transaction key`),
];

export default function UseControlKey() {
  const classes = useUsekeyStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrivateKey = () => {
    alert("InCorrect");
    handleClose();
  }

  return (
    <div>
      <div className={classes.pageTitle}>Use a Control Key</div>
      <Container className={classes.container}>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputLabel className={classes.label}>Enter the dtrust identification number</InputLabel>
            </Grid>
            <Grid item xs={10} sm={5}>
              <TextField className={classes.input} label="The dtrust address" id="" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={4} sm={1}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Container style={{ width: "80%" }}>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Relevant control keys</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row" align="center">
                    <Link type="button" onClick={handleOpen} className={classes.tableItem}>
                      {row.name}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form noValidate autoComplete="off">
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Enter private key</h2>
              <Grid container spacing={4}>
                <Grid item xs={10} sm={9}>
                  <TextField className={classes.input} label="Private Key" id="" variant="outlined" size="small" />
                </Grid>
                <Grid item xs={2} sm={3}>
                  <Button className={classes.button} onClick={handlePrivateKey}>Enter</Button>
                </Grid>
              </Grid>
            </div>
          </form>
        </Fade>
      </Modal>
    </div>
  );
}
