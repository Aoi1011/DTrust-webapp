import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const usePromoteMainStyles = makeStyles((theme) => ({
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  container: {
    padding: '20vh 0 20vh 0',
    [theme.breakpoints.down('sm')]: {
      padding: '10vh 0 10vh 0',
    },
    '& .MuiGrid-container': {
      marginBottom: '20px',
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
}));

export default function PromoteMain() {
  const classes = usePromoteMainStyles();

  return (
    <div>
      <div className={classes.pageTitle}>Promote</div>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={1} sm={4}></Grid>
          <Grid item xs={10} sm={4}>
            <Button
              className={classes.button}
              component={RouterLink}
              to="/promote/get"
            >
              Get a Promote Token
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={1} sm={4}></Grid>
          <Grid item xs={10} sm={4}>
            <Button
              className={classes.button}
              component={RouterLink}
              to="/promote/use"
            >
              Use a Promote Token
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
