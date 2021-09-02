import React, { useState } from 'react';
import { Container, InputLabel, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const useContactStyles = makeStyles((theme) => ({
  root: {
    '& .MuiGrid-container': {
      marginBottom: '10px',
    },
    '& .MuiGrid-item': {
      paddingTop: '3px',
      paddingBottom: '3px',
    },
    '& fieldset': {
      borderRadius: 0,
    },
  },
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  label: {
    color: 'black',
    fontWeight: 600,
    padding: '10.5px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '15px 0 0 0',
    },
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
  input: {
    width: '100%',
  },
}));

const MySwal = withReactContent(Swal);

export default function Contact() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [nameHelperText, setNameHelperText] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const classes = useContactStyles();


  const onContact = (e) => {
    e.preventDefault();
    setNameError(false);
    setNameHelperText("");
    setEmailError(false);
    setEmailHelperText("");
    if (name === "") {
      setNameError(true);
      setNameHelperText("Required field");
    } else if (emailAddress === "") {
      setEmailError(true);
      setEmailHelperText("Required field");
    } else {
      emailjs.send(
        'service_9ewdy8n', 'template_hr848up',
        {}
      )
        .then((res) => {
          MySwal.fire({
            title: 'Success!',
            text: 'Success',
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false, 
          })
        })
        .catch((err) => {
          console.log(err);
          MySwal.fire({
            title: 'Error!',
            text: err.text,
            icon: 'error',
            showConfirmButton: false, 
          });
          setNameError(false);
          setNameHelperText("");
          setEmailError(false);
          setEmailHelperText("");
        });
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.pageTitle}>Contact</div>
      <Container maxWidth="sm">
        <form noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <InputLabel className={classes.label}>Name</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                className={classes.input}
                label="Name"
                id=""
                variant="outlined"
                size="small"
                required
                error={nameError}
                helperText={nameHelperText}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <InputLabel className={classes.label}>Email Address</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                className={classes.input}
                label="Email Address"
                id=""
                variant="outlined"
                size="small"
                required
                error={emailError}
                helperText={emailHelperText}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <InputLabel className={classes.label}>Message</InputLabel>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                className={classes.input}
                label="Message"
                id=""
                variant="outlined"
                size="small"
                multiline rows={12}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={1} sm={4}>
            </Grid>
            <Grid item xs={10} sm={4}>
              <Button className={classes.button} onClick={onContact}>Enter</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}
