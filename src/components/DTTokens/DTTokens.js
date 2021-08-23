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
      <div className={classes.pageTitle}>DT Tokens</div>
      <Container>
        <div className={classes.content}>The DTrust protocol is governed by a decetralized autonomous organization (DAO) that votes on changes to the protocol and also receives the fees collected by the protocol. DTrust takes 0.5% of the value of all divisible assets held in dtrusts. Those fees are then distributed proportionally to the holders of the 1000 DT tokens, which all have equal voting power. NFT assets pay no DTrust fees.</div>
        <div className={classes.content}>Example: If there are assets worth $1 million in a particular dtrust, then DTrust would take assets worth $5000 during that year from that dtrust. Each DT token would receive $5 worth of assets.</div>
      </Container>
    </div>
  );
}
