import React, { useState, useEffect } from 'react';
import { InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid } from '@material-ui/core';
import Web3 from "web3";

import PromoteAlarm from './PromoteAlarm';
import { DTRUSTFACTORY_ADDRESS, DTRUST_ABI } from "../../dtrustFactroyConfig";

const useUsePromoteStyles = makeStyles((theme) => ({
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

export default function UsePromote() {
  const classes = useUsePromoteStyles();
  const [promotestate, setPromotestate] = useState('none');
  const [dtrust, setDtrust] = useState("");
  const [address, setAddress] = useState("");
  const [dtrustContract, setDtrustContract] = useState({});
  const [tokenKey, setTokenKey] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    async function getDTrustFactroyContract() {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const accounts = await web3.eth.getAccounts();
      setAddress(accounts[0]);
      const DTRUSTContractInstance = new web3.eth.Contract(DTRUST_ABI, DTRUSTFACTORY_ADDRESS, {
        from: accounts[0],
      });
      setDtrustContract(DTRUSTContractInstance);
    }
    getDTrustFactroyContract();
  }, []);

  const onSubmit = () => {
    dtrustContract.methods
      .usePrToken(dtrust, tokenKey)
      .call()
      .then((res) => {
        if (res !== "") {
          setLink(res);
          setPromotestate('use');
        }
      })
  }
  return (
    promotestate === 'none' ?
      <div>
        <div className={classes.pageTitle}>Promote</div>
        <Container className={classes.container}>
          <form noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={7}>
                <InputLabel className={classes.label}>Enter your DTRUST.</InputLabel>
              </Grid>
              <Grid item xs={8} sm={4}>
                <TextField className={classes.input} label="DTrust" id="" variant="outlined" size="small" value={dtrust} onChange={(e) => setDtrust(e.target.value)} />
              </Grid>
              <Grid item xs={12} sm={7}>
                <InputLabel className={classes.label}>Enter your Promote token key.</InputLabel>
              </Grid>
              <Grid item xs={8} sm={4}>
                <TextField className={classes.input} label="Token key" id="" variant="outlined" size="small" value={tokenKey} onChange={(e) => setTokenKey(e.target.value)} />
              </Grid>
              <Grid item xs={4} sm={1}>
                <Button className={classes.button} onClick={onSubmit}>Enter</Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div> :
      <PromoteAlarm promotestate={promotestate} link={link} />
  );
}
