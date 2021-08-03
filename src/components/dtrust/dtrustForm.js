import React, { useEffect, useState } from 'react';
import { Container, InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Web3 from "web3";
import emailjs from 'emailjs-com';

import { DTRUSTFACTORY_ADDRESS, DTRUST_ABI } from "../../dtrustFactroyConfig";
import { CONTROLKEY_ABI, CONTROLKEY_ADDRESS } from "../../controlKeyConfig";

const usedtrustStyles = makeStyles((theme) => ({
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  container: {
    paddingTop: '10vh',
    paddingBottom: '5vh',
    '& .MuiGrid-container': {
      marginBottom: '20px',
    },
    '& .MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '3px',
      paddingBottom: '3px',
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
    fontWeight: 600,
    border: '4px solid #fe8d4a',
    borderRadius: 0,
    color: '#fe8d4a',
    width: '100%',
    '&:hover': {
      backgroundColor: '#ffffffdd',
    },
  },
  buttonYes: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
    backgroundColor: '#ffffff',
    textTransform: 'none',
    fontWeight: 600,
    border: '4px solid #0acf83',
    borderRadius: 0,
    color: '#0acf83',
    width: '100px',
    '&:hover': {
      backgroundColor: '#ffffffdd',
    },
    '&[choosen="true"]': {
      color: '#ffffff',
      backgroundColor: '#0acf8388',
    },
  },
  buttonNo: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto',
    },
    backgroundColor: '#ffffff',
    textTransform: 'none',
    fontWeight: 600,
    border: '4px solid #fe3232',
    borderRadius: 0,
    color: '#fe3232',
    width: '100px',
    '&:hover': {
      backgroundColor: '#ffffffdd',
    },
    '&[choosen="false"]': {
      color: '#ffffff',
      backgroundColor: '#fe323288',
    },
  },
  input: {
    width: '100%',
  },
}));

export default function DTrustForm(props) {
  const classes = usedtrustStyles();
  const [emailAddress, setEmailAddress] = useState("");
  const [settlorAddress, setSettlorAddress] = useState("");
  const [beneficiaryAddress, setBeneficiaryAddress] = useState("");
  const [trusteeAddress, setTrusteeAddress] = useState("");
  const [settlorCBWA, setSettlorCBWA] = useState(true);
  const [settlorCDS, setSettlorCDS] = useState(true);
  const [trusteeCDS, setTrusteeCDS] = useState(true);
  const [settlorRD, setSettlorRD] = useState(true);
  const [settlorSA, setSettlorSA] = useState(true);
  const [trusteeTA, setTrusteeTA] = useState(true);
  const [trusteeRD, setTrusteeRD] = useState(true);
  const [trusteeCBWA, setTrusteeCBWA] = useState(true);
  const [settlorILT, setSettlorILT] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    const selectedAccount = window.ethereum.selectedAddress;
    let config = {
      from: accounts[0],
    };
    const DTRUSTContractInstance = new web3.eth.Contract(DTRUST_ABI, DTRUSTFACTORY_ADDRESS, {
      from: accounts[0],
    });
    const controlKeyContractInstance = new web3.eth.Contract(CONTROLKEY_ABI, CONTROLKEY_ADDRESS, {
      from: accounts[0],
    });
    if (emailAddress === "" || settlorAddress === "" || beneficiaryAddress === "" || trusteeAddress === "") {
      alert("Please input address");
    }
    else {
      var templateParams = {
        to_email: emailAddress,
        from_name: 'DTRUST',
        dtrust: "",
        control_key: "",
      };

      // dtrust contract
      DTRUSTContractInstance.methods
        .createDTRUST("", "", "", settlorAddress, beneficiaryAddress, trusteeAddress)
        .send(config)
        .on("receipt", (res) => {
          console.log(res);
          templateParams.dtrust = res.events.CreateDTRUST.returnValues[0];
          DTRUSTContractInstance.methods
            .getAllDeployedDTRUSTs()
            .call()
            .then((result) => {
              console.log(result);

               // control key contract
              let secretKey = "Hello";
              controlKeyContractInstance.methods
                .generateControlKey(secretKey, settlorAddress, beneficiaryAddress, trusteeAddress)
                .send(config)
                .on("receipt", (res) => {
                  console.log(res);
                  templateParams.control_key = res.events.GenerateControlKey.returnValues[0];
                  emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAIL_USER_ID)
                    .then((result) => {
                      console.log('Success!', result.status, result.text);
                    }, (error) => {
                      console.log("Failed..", error.status);
                    });
                })
            });
        });
        
      props.setdtruststate('success');
    }

  };
  return (
    <div>
      <div className={classes.pageTitle}>Form a dtrust</div>
      <Container className={classes.container}>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>Which email address(es) should recieve information about this dtrust?</InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField className={classes.input} label="Email Address(es)" id="" variant="outlined" size="small" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>What is the settlor’s wallet address?</InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField className={classes.input} label="Settlor's Wallet" id="" variant="outlined" size="small" value={settlorAddress} onChange={(e) => setSettlorAddress(e.target.value)} />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>What is/are the beneficiary wallet addresses? </InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField className={classes.input} label="Beneficiary Wallet" id="" variant="outlined" size="small" value={beneficiaryAddress} onChange={(e) => setBeneficiaryAddress(e.target.value)} />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>If there is a trustee, what is the trustee’s wallet address?</InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField className={classes.input} label="Trustee's Wallet" id="" variant="outlined" size="small" value={trusteeAddress} onChange={(e) => setTrusteeAddress(e.target.value)} />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>May the settlor change the beneficiary wallet address(es)?</InputLabel>
            </Grid>
            <Grid item xs={6} md={2}>
              <Button className={classes.buttonYes} choosen={settlorCBWA.toString()} onClick={e => { setSettlorCBWA(true) }}>Yes</Button>
            </Grid>
            <Grid item xs={6} md={2}>
              <Button className={classes.buttonNo} choosen={settlorCBWA.toString()} onClick={e => { setSettlorCBWA(false) }}>No</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>What assets will be distributed and when will the assets be distributed?</InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField className={classes.input} label="Distribution Schedule" id="" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          {
            [
              {
                desc: "May the settlor change the distribution schedule?",
                value: settlorCDS,
                func: setSettlorCDS,
              },
              {
                desc: "May the trustee change the distribution schedule?",
                value: trusteeCDS,
                func: setTrusteeCDS,
              },
              {
                desc: "May the settlor revoke the dtrust? (assets return to settlor wallet)",
                value: settlorRD,
                func: setSettlorRD,
              },
              {
                desc: "May the settlor swap the assets in the dtrust for assets of equivalent value?",
                value: settlorSA,
                func: setSettlorSA,
              },
              {
                desc: "May the trustee transact with the assets?",
                value: trusteeTA,
                func: setTrusteeTA,
              },
              {
                desc: "May the trustee revoke the dtrust?",
                value: trusteeRD,
                func: setTrusteeRD,
              },
              {
                desc: "May the trustee change the beneficiary wallet address(es)?",
                value: trusteeCBWA,
                func: setTrusteeCBWA,
              },
              {
                desc: "Does the settlor intend that this dtrust is a legal trust?",
                value: settlorILT,
                func: setSettlorILT,
              },
            ].map((item, index) =>
              <Grid key={index} container spacing={3}>
                <Grid item xs={12} md={6}>
                  <InputLabel className={classes.label}>{item.desc}</InputLabel>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Button className={classes.buttonYes} choosen={item.value.toString()} onClick={e => { item.func(true) }}>Yes</Button>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Button className={classes.buttonNo} choosen={item.value.toString()} onClick={e => { item.func(false) }}>No</Button>
                </Grid>
              </Grid>
            )
          }
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>Under what jurisdiction does the settlor intend that this dtrust be a legal trust?</InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField className={classes.input} label="Jurisdiction" id="" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>What annual fee should the trustee recieve? (for one percent, enter 1 not 0.01)</InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField className={classes.input} label="Annual Fee" id="" variant="outlined" size="small" />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={1} md={4}>
            </Grid>
            <Grid item xs={10} md={4}>
              <Button className={classes.button} onClick={onSubmit}>Form dtrust</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div >
  );
}
