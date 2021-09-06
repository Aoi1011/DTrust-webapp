import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useDTTokensStyles = makeStyles((theme) => ({
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

export default function DTTokens() {
  const classes = useDTTokensStyles();

  return (
    <div className={classes.root}>
      <div className={classes.pageTitle}>Gov</div>
      <Container>
        <div className={classes.content}>The DTrust protocol is governed by a DAO made up of DT Tokens. DT Tokens vote and earn fees. Votes to change the protocol require more than 2/3 approval. DTrust takes 0.5% of all assets held in dtrusts each year in semiannual charges, which are paid out proportionally to the wallets that hold DT tokens. If a promoter arranged the dtrust, then fees for the first two years go to the promoter and all subsequent fees go to DT tokens. If there was no promoter, then all fees go to DT token holders. NFTs and other non-divisible assets do not pay fees. </div>
        <div className={classes.content}>Example: If a particular dtrust holds $10,000,000 worth of assets during a year, then the total fees paid that year would be $50,000 (two $25,000 distributions). Each DT token would receive $50 worth of assets (two $25 distributions).</div>
        <div className={classes.content}>If you are interested in purchasing DT tokens, fill out the contact form with the button at the bottom of the page.</div>
      </Container>
    </div>
  );
}
