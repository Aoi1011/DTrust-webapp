import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
// import { MemoryRouter as Router } from "react-router";
import { AppBar, Button, Grid, Link, MenuItem, Menu, Toolbar } from '@material-ui/core';

// import FormDtrust from './FormDtrust.js';
import logo from '../img/logo.jpg';
import background from '../img/background.jpg';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '& .MuiLink-root': {
      color: '#fe8d4a',
      textDecoration: 'none',
    },
  },
}))(MenuItem);

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Button className={classes.menuButton} component={RouterLink} to="/">
            <img src={logo} alt="Logo" />
          </Button>
          {/* <Router> */}
          <Link
            href="#"
            onClick={handleClick}
            className={classes.link}
          >
            Begin&nbsp;&#9660;
          </Link>
          <StyledMenu
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
          </StyledMenu>
          <Link component={RouterLink} to="/tokenomics" className={classes.link}>Tokenomics</Link>
          <Link component={RouterLink} to="/legal" className={classes.link}>Legal</Link>
          <Link component={RouterLink} to="/" className={classes.link}>About Us</Link>
          <Link component={RouterLink} to="/" className={classes.link}>Docs</Link>
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
