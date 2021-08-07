import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
// import { MemoryRouter as Router } from "react-router";
import { AppBar, Button, Grid, Link, Toolbar } from '@material-ui/core';

// import FormDtrust from './FormDtrust.js';
import logo from '../img/favicon.ico';
// import background from '../img/background.jpg';

const useTemplateStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundImage: `url(${background})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    backgroundColor: '#ffffff',
  },
  appBar: {
    backgroundColor: '#fe8d4a',
  },
  toolBar: {
    paddingLeft: '0',
    flexWrap: 'wrap',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '& img': {
      maxHeight: '30px',
    },
    textTransform: 'none',
    color: '#ffffff',
    backgroundColor: '#fe7e34',
    fontSize: '24px',
    fontWeight: '600',
    padding: '10px 20px',
  },
  linksBar: {
    flexGrow: 1,
    textAlign: 'center',
  },
  link: {
    // flexGrow: 1,
    margin: '0 30px',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: '0 10px',
    },
    color: '#ffffff',
    whiteSpace: 'nowrap',
    transition: 'color .3s ease',
    fontWeight: 500,
    textShadow: '0 2px rgba(0,0,0,0.5)',
    '&:hover': {
      textDecoration: 'none',
      color: '#efefef',
    },
  },
  startButton: {
    color: '#ffffff',
    backgroundColor: '#fe8d4a',
    '&:hover': {
      backgroundColor: '#fe8d4acc',
    },
    border: '1px solid #ffffff',
    padding: '3px 30px 3px 30px',
    borderRadius: '30px',
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
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '0',
    border: '4px solid #fe8d4a',
    padding: '3px 0 3px 0',
    width: '200px',
    textTransform: 'none',
    color: '#fe8d4a',
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#ffffffdd',
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
            <img src={logo} alt="Logo" />&nbsp;DTrust
          </Button>
          {/* <Router> */}
          {/* <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={handleClose}>
              <Link component={RouterLink} to="/formdtrust">Form a dtrust</Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <Link component={RouterLink} to="/usecontrolkey">Use Control Key</Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <Link component={RouterLink} to="/destroycontrolkey">Destroy Control Key</Link>
            </StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>
              <Link component={RouterLink} to="/promote">Promote</Link>
            </StyledMenuItem>
          </StyledMenu> */}
          <div className={classes.linksBar}>
            <Link
              component={RouterLink}
              to={{
                pathname: "/docs",
                state: {
                  tabIndex: 0,
                },
              }}
              className={classes.link}>Docs</Link>
            <Link component={RouterLink} to="/legal" className={classes.link}>Legal</Link>
            <Link component={RouterLink} to="/dttokens" className={classes.link}>DT Tokens</Link>
          </div>
          <Button className={classes.startButton} component={RouterLink} to="/start">
            Start
          </Button>
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
            <Grid item xs={12}>
              <h2>DTrust is about solving legal problems with technology.</h2>
            </Grid>
            <Grid item xs />
            <Grid item xs={12}>
              <Button className={classes.contactButton} component={RouterLink} to="/contact">Contact</Button>
            </Grid>
            <Grid item xs />
          </Grid>
        </div>
      </div>
    </div>
  );
}
