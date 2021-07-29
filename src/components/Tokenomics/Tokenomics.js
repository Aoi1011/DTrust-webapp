import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useTokenomicsStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '15vh',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '5vh',
    },
  },
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  content: {
    padding: '5px 23vw 10px 4vw',
    [theme.breakpoints.down('sm')]: {
      padding: '5px 6vw 10px 3vw',
    },
  },
}));

export default function Tokenomics() {
  const classes = useTokenomicsStyles();

  return (
    <div className={classes.root}>
      <div className={classes.pageTitle}>Tokenomics</div>
      <Container>
        <div className={classes.content}>DTrust takes 0.5% of all assets held in dtrusts each year in semiannual charges. If a promoter arranged the dtrust, then fees for the first two years go to the promoter and all subsequent fees go to DT tokens. If there was no promoter, then all fees go to DT tokens. The fees are split evenly among 1,000 DT tokens. There will never be any more DT tokens.</div>
        <div className={classes.content}>Example: If there are assets worth $10 million in all the dtrusts, then all the DT tokens would receive assets worth $50,000 in aggregate each year (two $25,000 distributions). Each DT token would receive $50 worth of assets (two $25 distributions).</div>
        <div className={classes.content}>If you are interested in purchasing DT tokens, fill out the contact form with the button at the bottom of the page.</div>
      </Container>
    </div>
  );
}
