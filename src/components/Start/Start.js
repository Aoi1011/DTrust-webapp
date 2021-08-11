import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStarttyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    padding: '60px 5vw 100px 5vw',
  },
  title: {
    fontSize: '36px',
    marginBottom: '100px',
  },
  sublink: {
    width: '150px',
    height: '150px',
    display: 'flex',
    margin: '0 auto',
    textAlign: 'center',
    textTransform: 'none',
    borderRadius: '0',
    border: '6px solid #fe8d4a',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#fe8d4a',
  },
}));

export default function Start() {
  const classes = useStarttyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>Start the decentralized application...</div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Button className={classes.sublink} variant="outlined" component={RouterLink} to="/formdtrust">Form a<br />dtrust</Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button className={classes.sublink} variant="outlined" component={RouterLink} to="/usecontrolkey">Use a<br />Control Key</Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button className={classes.sublink} variant="outlined" component={RouterLink} to="/destroycontrolkey">Destroy a<br />Control Key</Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <Button className={classes.sublink} variant="outlined" component={RouterLink} to="/promote">Promote</Button>
        </Grid>
      </Grid>
    </div>
  );
}
