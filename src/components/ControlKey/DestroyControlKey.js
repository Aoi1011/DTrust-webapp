import React, { useState } from 'react';
import { InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Link, 
  Modal, 
  Fade, 
  Backdrop
} from '@material-ui/core';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import { useHistory } from 'react-router-dom';

const MySwal = withReactContent(Swal)

const useDestroykeyStyles = makeStyles((theme) => ({
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

export default function DestroyControlKey() {
  const history = useHistory()
  const classes = useDestroykeyStyles();
  const [correctDtrust, setCorrectDtrust] = useState(false);
  const [open, setOpen] = useState(false);
  const [dtrustAddress, setDtrustAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const checkDTrustAddress = () => {
    if (dtrustAddress === "abc123") {
      setCorrectDtrust(true);
    } else {
      handleDtrustaddress(false);
    }

  }

  const handleDtrustaddress = (valid) => {
    console.log(correctDtrust);
    if (valid) {
      console.log("DTrust is correct!")
    } else {
      MySwal.fire({
        title: 'Error!',
        text: 'We can not find',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
    }
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrivateKey = () => {
    if (privateKey === "abc123") {
      handleClose();
      MySwal.fire({
        title: 'Are you sure that you want to destroy this key?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      setPrivateKey("");
    } else {
      setPrivateKey("");
      handleClose();
      MySwal.fire({
        title: 'Error!',
        text: 'We can not find',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
    }

  }

  return (
    <div>
      <div className={classes.pageTitle}>Destroy Control Key</div>
      <Container className={classes.container}>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <InputLabel className={classes.label}>Enter the dtrust identification number</InputLabel>
            </Grid>
            <Grid item xs={8} sm={4}>
              <TextField 
                className={classes.input} 
                label="The dtrust address" 
                id="" 
                variant="outlined" 
                size="small"
                value={dtrustAddress}
                onChange={(e) => setDtrustAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={4} sm={1}>
              <Button className={classes.button} onClick={checkDTrustAddress}>Enter</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      {
        correctDtrust &&
        <Container style={{ width: "80%" }}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead style={{ backgroundColor: '#FE8D49' }}>
                <TableRow>
                  <TableCell className={classes.label} align="center">
                    <InputLabel className={classes.label}>Relevant control keys</InputLabel>
                  </TableCell>
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
      }
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
                  <TextField
                    className={classes.input}
                    label="Private Key"
                    id="" variant="outlined"
                    size="small"
                    value={privateKey}
                    onChange={(e) => setPrivateKey(e.target.value)}
                  />
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
