import React, { useState } from 'react';
import { Container, InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useDrustStyles = makeStyles((theme) => ({
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
  checkbox: {
    // display: 'none',
  },
}))

export default function DrustForm(props) {
  const classes = useDrustStyles()
  const [changeBWA, setChangeBWA] = useState(true)
  const [changeSDS, setChangeSDS] = useState(true)
  const [changeTDS, setChangeTDS] = useState(true)
  const [revokeD, setRevokeD] = useState(true)
  const [swapA, setSwapA] = useState(true)
  const [transactA, setTransactA] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault()
    props.setDruststate('success')
  }
  return (
    <div>
      <div className={classes.pageTitle}>Form a Drust</div>
      <Container className={classes.container}>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>
                Which email addresses should recieve information about this
                dtrust?
              </InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField
                className={classes.input}
                label="Email Address"
                id=""
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>
                What is the settlor’s wallet address?
              </InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField
                className={classes.input}
                label="Settlor's Wallet"
                id=""
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>
                What is/are the beneficiary wallet addresses?{' '}
              </InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField
                className={classes.input}
                label="Beneficiary Wallet"
                id=""
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>
                If there is a trustee, what is the trustee’s wallet address?
              </InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField
                className={classes.input}
                label="Trustee's Wallet"
                id=""
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>
                May the settlor change the beneficiary wallet address(es)?
              </InputLabel>
            </Grid>
            <Grid item xs={6} md={2}>
              <Button
                className={classes.buttonYes}
                choosen={changeBWA.toString()}
                onClick={(e) => {
                  setChangeBWA(true)
                }}
              >
                Yes
              </Button>
            </Grid>
            <Grid item xs={6} md={2}>
              <Button
                className={classes.buttonNo}
                choosen={changeBWA.toString()}
                onClick={(e) => {
                  setChangeBWA(false)
                }}
              >
                No
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>
                What will be distributed and when will it be distributed?
              </InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField
                className={classes.input}
                label="Trustee's Wallet"
                id=""
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          {[
            {
              desc: 'May the settlor change the distribution schedule?',
              value: changeSDS,
              func: setChangeSDS,
            },
            {
              desc: 'May the trustee change the distribution schedule?',
              value: changeTDS,
              func: setChangeTDS,
            },
            {
              desc: 'May the settlor revoke the dtrust?',
              value: revokeD,
              func: setRevokeD,
            },
            {
              desc: 'May the settlor swap the assets in the dtrust for assets of equivalent value?',
              value: swapA,
              func: setSwapA,
            },
            {
              desc: 'May the trustee transact with the assets?',
              value: transactA,
              func: setTransactA,
            },
          ].map((item, index) => (
            <Grid key={index} container spacing={3}>
              <Grid item xs={12} md={6}>
                <InputLabel className={classes.label}>{item.desc}</InputLabel>
              </Grid>
              <Grid item xs={6} md={2}>
                <Button
                  className={classes.buttonYes}
                  choosen={item.value.toString()}
                  onClick={(e) => {
                    item.func(true)
                  }}
                >
                  Yes
                </Button>
              </Grid>
              <Grid item xs={6} md={2}>
                <Button
                  className={classes.buttonNo}
                  choosen={item.value.toString()}
                  onClick={(e) => {
                    item.func(false)
                  }}
                >
                  No
                </Button>
              </Grid>
            </Grid>
          ))}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <InputLabel className={classes.label}>
                What annual fee should the trustee recieve? (percentage of
                assets)
              </InputLabel>
            </Grid>
            <Grid item xs={8} md={4}>
              <TextField
                className={classes.input}
                label="Annual Fee"
                id=""
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4} md={2}>
              <Button className={classes.button}>Enter</Button>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={1} md={4}></Grid>
            <Grid item xs={10} md={4}>
              <Button className={classes.button} onClick={onSubmit}>
                Form Drust
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}
