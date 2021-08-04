import React, { useState } from 'react';
import { InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid } from '@material-ui/core';
import Web3 from "web3";

import { CONTROLKEY_ABI, CONTROLKEY_ADDRESS } from "../../controlKeyConfig";

const useUsekeyStyles = makeStyles((theme) => ({
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  container: {
    paddingTop: '5vh',
    paddingBottom: '30vh',
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
}));

export default function UseControlKey() {
  const classes = useUsekeyStyles();
  const [idNumber, setIdNumber] = useState("");

  const handleControlKey = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    let config = {
      from: accounts[0],
    };
    const contractInstance = new web3.eth.Contract(CONTROLKEY_ABI, CONTROLKEY_ADDRESS, {
      from: accounts[0],
    });
    contractInstance.methods
      .handleUsableControlKey(idNumber)
      .send(config)
      .on('receipt', (res) => {
        alert("Success!");
      })
      .on('error', (error) => {
        alert("Failed..")
      });;

    setIdNumber("");
  }

  return (
    <div>
      <div className={classes.pageTitle}>Use a Control Key</div>
      <Container className={classes.container}>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <InputLabel className={classes.label}>Enter the identification number (the wallet addres) for the dtrust.</InputLabel>
            </Grid>
            <Grid item xs={8} sm={4}>
              <TextField className={classes.input} label="ID number" id="" variant="outlined" size="small" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
            </Grid>
            <Grid item xs={4} sm={1}>
              <Button className={classes.button} onClick={handleControlKey}>Enter</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>

  );
}
