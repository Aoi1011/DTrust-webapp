import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
// import { MemoryRouter as Router } from "react-router";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

// import FormDtrust from './FormDtrust.js';
import logo from '../img/logo.jpg';
import background from '../img/background.jpg';

const useTemplateStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  appBar: {
    backgroundColor: '#fe8d4a',
  },
  toolBar: {
    minHeight: '50px',
    flexWrap: 'wrap',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '& img': {
      maxHeight: '20px',
    },
  },
  link: {
    flexGrow: 1,
    color: '#ffffff',
    transition: 'color .3s ease',
    fontWeight: 500,
    textShadow: '0 2px rgba(0,0,0,0.5)',
    '&:hover': {
      textDecoration: 'none',
      color: '#efefef',
    },
  },
  bottomBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#ffffff',
  },
  bottomArrow: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: '23px',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    '& div': {
      flex: '0 0 20%',
      height: '100px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fe8d4a',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: '100%',
        top: 0,
        zIndex: 1,
        width: '23px',
        backgroundColor: '#ffffff',
        height: '100%',
        clipPath: 'polygon(0 0, 3px 50%, 0 100%, 3px 100%, 100% 50%, 3px 0)',
      },
      '&:after': {
        content: '""',
        position: 'absolute',
        left: '100%',
        top: 0,
        zIndex: 10,
        width: '20px',
        backgroundColor: '#fe8d4a',
        height: '100%',
        clipPath: 'polygon(0 0, 0 100%, 100% 50%)',
      },
      '& span': {
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: 1,
        color: '#ffffff',
        marginLeft: '30px',
        display: 'block'
      },
    },
  },
  bottomContact: {
    padding: '20px',
    '& h2': {
      fontWeight: 500,
      textShadow: '0 3px rgba(0,0,0,0.3)',
    },
    '& .MuiGrid-item': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  contactButton: {
    fontSize: '12px',
    padding: '10px 0 10px 0',
    width: '100%',
    color: '#ffffff',
    textTransform: 'none',
    backgroundColor: '#fe8d4a',
    '&:hover': {
      backgroundColor: '#fe8d4acc',
    }
  },
}));

export default function Template(props) {
  const classes = useTemplateStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Button className={classes.menuButton} component={RouterLink} to="/">
            <img src={logo} alt="Logo" />
          </Button>
          {/* <Router> */}
          <Link component={RouterLink} to="/formdtrust" className={classes.link}>Form a dtrust</Link>
          <Link component={RouterLink} to="/usecontrolkey" className={classes.link}>Use Control Key</Link>
          <Link component={RouterLink} to="/destroycontrolkey" className={classes.link}>Destroy Control Key</Link>
          <Link component={RouterLink} to="/promote" className={classes.link}>Promote</Link>
          <Link component={RouterLink} to="/tokenomics" className={classes.link}>Tokenomics</Link>
          <Link component={RouterLink} to="/legal" className={classes.link}>Legal</Link>
          {/* </Router> */}
        </Toolbar>
      </AppBar>
      {props.children}
      <div className={classes.bottomBar}>
        <div className={classes.bottomArrow}>
          <div><span>Settlor and Trustee specify the dtrust at dtrust.io</span></div>
          <div><span>DTrust delivers the keys and information to wallets and emails</span></div>
          <div><span>Settlor funds the dtrust</span></div>
          <div><span>Settlor and Trustee use, retain, or destroy keys during the life of the dtrust</span></div>
          <div><span>All assets are distributed to beneficiaries</span></div>
        </div>
        <div className={classes.bottomContact}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <h2>DTrust is about solving legal problems with technology. Contact us to request the whitepaper.</h2>
            </Grid>
            <Grid item xs />
            <Grid item xs={8} sm={4}>
              <Button className={classes.contactButton} component={RouterLink} to="/contact">Contact</Button>
            </Grid>
            <Grid item xs />
          </Grid>
        </div>
      </div>
    </div>
  );
}
