import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useLegaltyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '30vh',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '10vh',
    },
  },
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  content: {
    padding: '5px 23vw 10px 3vw',
    [theme.breakpoints.down('sm')]: {
      padding: '5px 6vw 10px 3vw',
    },
  }
}));

export default function Legal() {
  const classes = useLegaltyles();

  return (
    <div className={classes.root}>
      <div className={classes.pageTitle}>Legal</div>
      <Container>
        <div className={classes.content}>Coming soon. DTrust enables a variety of novel legal strategies for asset protection, estate administration, probate avoidance, and tax planning. The legal applications are in the earliest stages of development. Fill out the contact form if you would like to participate.</div>
      </Container>
    </div>
  );
}
