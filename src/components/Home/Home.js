import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useHometyles = makeStyles((theme) => ({
  root: {
    padding: '10px 5vw 30px 5vw',
  },
  title: {
    fontSize: '36px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  desc: {
    fontSize: '14px',
    marginBottom: '40px'
  },
  subsec: {
    marginBottom: '5px',
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: 700,
    margin: '5px 0 5px 0'
  },
  subdesc: {
    fontSize: '14px',
    paddingRight: '7vw',
    [theme.breakpoints.down('xs')]: {
      paddingRight: '0',
    },
  },
  sublink: {
    display: 'block',
    borderColor: '#fe8d4a',
    color: '#fe8d4a',
    textTransform: 'none',
    fontWeight: 600,
    padding: '3px 30px 3px 30px',
    width: 'fit-content',
    marginTop: '5px',
  },
}));

export default function Home() {
  const classes = useHometyles();

  return (
    <Container className={classes.root}>
      <div className={classes.title}>
        DTrust does decentralized trust agreements on the ethereum virtual machine.
        </div>
      <div className={classes.desc}>
        Trust law enables estate administration, probate avoidance, asset protection, tax planning, and other crucial legal functions. Now you can do digital asset trusts on the ethereum virtual machine with DTrust. On this site you can form customized dtrusts, use control keys on existing dtrusts, permanently destroy control keys, earn income as a dtrust promoter, invest in DTrust, and discuss dtrust legal functions.
        </div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className={classes.subsec}>
          <div className={classes.subtitle}>Form a dtrust</div>
          <div className={classes.subdesc}>
            A series of input questions allow settlors and trustees to form customized dtrusts for specific goals under different rules. Click "Form a dtrust" to see the customization options and follow the prompts to form your dtrust.
              <Button className={classes.sublink} variant="outlined" component={RouterLink} to="/formdtrust">Form</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.subsec}>
          <div className={classes.subtitle}>Use a Control Key</div>
          <div className={classes.subdesc}>
            Control keys enable key-holders to exercise revocation, amendment, management, or other powers with respect to existing dtrusts. If you have received a control key for an existing dtrust, click “Use Control Key” to exercise your powers.
              <Button className={classes.sublink} variant="outlined" component={RouterLink} to="/usecontrolkey">Use</Button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className={classes.subsec}>
          <div className={classes.subtitle}>Destroy a Control Key</div>
          <div className={classes.subdesc}>
            DTrust includes a burn function to permanently destroy control keys. For example, a settlor may want to turn a revocable dtrust into an irrevocable dtrust by destroying the revocation key. Click "Destroy a Control Key” to use the control key burn function.
              <Button className={classes.sublink} variant="outlined" component={RouterLink} to="/destroycontrolkey">Destroy</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.subsec}>
          <div className={classes.subtitle}>Promote</div>
          <div className={classes.subdesc}>
            Anyone can earn income with DTrust as a promoter. If you arrange the formation of a dtrust, then you can recieve the first two years 0.5% fee as a promoter. Click “Promote” to mint your Promote token or to use your Promote token to form an associated dtrust.
              </div>
          <Button className={classes.sublink} variant="outlined" component={RouterLink} to="/promote">Promote</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className={classes.subsec}>
          <div className={classes.subtitle}>Tokenomics</div>
          <div className={classes.subdesc}>
            DT tokens in aggregate receive 0.5% of all assets held in dtrusts. If you would like to participate in DTrust as an investor, click “Tokenomics” to learn more about DT tokens.
              </div>
          <Button className={classes.sublink} variant="outlined" component={RouterLink} to="/tokenomics">Tokenomics</Button>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.subsec}>
          <div className={classes.subtitle}>Legal</div>
          <div className={classes.subdesc}>
            Code is law. Click “Legal” for information about the legal treatment of dtrusts.
              </div>
          <Button className={classes.sublink} variant="outlined" component={RouterLink} to="/legal">Legal</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <video width="100%" controls>
            <source src="./DTrust_Explainer.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </Grid>
      </Grid>
    </Container>
  );
}
