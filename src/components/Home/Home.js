import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid } from '@material-ui/core';
import { Link, Link as RouterLink } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import background from '../../img/background.jpg';

const useHometyles = makeStyles((theme) => ({
  root: {
    padding: '0',
    overflow: 'hidden',
  },
  cover: {
    padding: '30vh  0 10vh 0',
    backgroundColor: '#fe7e34',
  },
  carouselContainer: {
    textAlign: 'center',
    fontSize: '72px',
    maxWidth: '880px',
    whiteSpace: 'pre-line',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      fontSize: '54px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px',
    },
  },
  docsPart: {
    margin: '25vh auto 0 auto',
    textAlign: 'center',
    '& > a': {
      color: '#000000',
    },
  },
  content: {
    margin: '30px 5vw 30px 5vw',
  },
  desc: {
    fontSize: '14px',
    marginBottom: '40px',
  },
  subsec: {
    marginBottom: '5px',
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: 700,
    margin: '5px 0 5px 0',
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
    borderColor: 'transparent',
    borderRadius: '30px',
    color: '#ffffff',
    backgroundColor: '#fe8d4a',
    '&:hover': {
      backgroundColor: '#fe8d4acc',
    },
    fontWeight: 600,
    padding: '3px 50px 3px 50px',
    width: 'fit-content',
    marginTop: '30px',
    marginBottom: '40px',
  },
  acknowledge: {
    padding: '100px 5vw 0px 5vw',
    backgroundImage: `url(${background})`,
    '& > div:first-child': {
      fontSize: '36px',
    },
    '& > div:not(:first-child)': {
      marginTop: '10px',
      '& > a': {
        color: '#000000',
      },
    },
  },
  aboutus: {
    textAlign: 'center', 
    padding: '50px',
    fontSize: 'large'
  }
}));

export default function Home() {
  const classes = useHometyles();

  return (
    <Container className={classes.root} maxWidth={false}>
      <div className={classes.cover}>
        <div className="carousel-wrapper">
          <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            interval={4000}
            stopOnHover={false}
            className={classes.carouselContainer}
          >
            {[
              'Code is law.',
              'Ethereum is a jurisdiction.',
              'Use a dtrust for asset protection.',
              'Use a dtrust for probate avoidance.',
              'Use a dtrust for estate administration.',
              'Use a dtrust for tax planning.',
              'Use a dtrust for structured giving.',
              'Use a dtrust for asset management.',
            ].map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </Carousel>
        </div>
        <div className={classes.docsPart}>
          DTrust generates decentralized trust agreements on the ethereum virtual
          machine.&nbsp;
          <RouterLink to="/docs">See Docs</RouterLink>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.desc}>
          Trust law enables asset protection, probate avoidance, estate
          administration, tax planning, structured giving, asset management, and
          other crucial legal functions. Now you can do digital asset trusts on
          the etheruem virtual machine with DTrust. On this site you can access
          the DTrust decentralized application to form customized dtrusts, use
          control keys on existing dtrusts, permanently destroy control keys and
          earn income as a dtrust promoter.
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.subsec}>
            <div className={classes.subtitle}>Form a dtrust</div>
            <div className={classes.subdesc}>
              A series of input questions allow settlors and trustees to form
              more than 500 different customized dtrusts to achieve different
              goals in compliance with different rules and regulations. Follow
              the prompts to form your dtrust.
              <Button
                className={classes.sublink}
                variant="outlined"
                component={RouterLink}
                to="/formdtrust"
              >
                Start
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.subsec}>
            <div className={classes.subtitle}>Use a Control Key</div>
            <div className={classes.subdesc}>
              When a settlor forms a dtrust, the settlor decides what control
              keys will be created for that dtrust. Control keys enable
              key-holders to exercise revocation, amendment, management, or
              other rights with respect to existing dtrusts.
              <Button
                className={classes.sublink}
                variant="outlined"
                component={RouterLink}
                to="/usecontrolkey"
              >
                Start
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.subsec}>
            <div className={classes.subtitle}>Destroy Control Key</div>
            <div className={classes.subdesc}>
              DTrust has a burn function to permanently destroy control keys.
              For example, a settlor may want to turn a revocable dtrust into an
              irrevocable dtrust by destroying the revocation key.
              <Button
                className={classes.sublink}
                variant="outlined"
                component={RouterLink}
                to="/destroycontrolkey"
              >
                Start
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.subsec}>
            <div className={classes.subtitle}>Promote</div>
            <div className={classes.subdesc}>
              Anyone can earn income with DTrust as a promoter. If someone forms
              a dtrust associated with your promote token, then you will recieve
              the first two years 0.5% fee as a promoter. You can use this site
              to receive your Promote token or to use your Promote token.
            </div>
            <Button
              className={classes.sublink}
              variant="outlined"
              component={RouterLink}
              to="/promote"
            >
              Start
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.acknowledge}>
        <div>Audited and Verified</div>
        <div>
          DTrust uses proven openzeppelin smart contracts.&nbsp;
          <RouterLink
            to={{
              pathname: '/docs',
              state: {
                tabIndex: 2,
              },
            }}
          >
            See contracts
          </RouterLink>
        </div>
        <div>
          DTrust underwent rigorous security analysis.&nbsp;
          <RouterLink
            to={{
              pathname: '/docs',
              state: {
                tabIndex: 3,
              },
            }}
          >
            See testing
          </RouterLink>
        </div>
        <div>
          DTrust received an audit from Hacken.io.&nbsp;
          <RouterLink
            to={{
              pathname: '/docs',
              state: {
                tabIndex: 4,
              },
            }}
          >
            See audit
          </RouterLink>
        </div>
        <div className={classes.aboutus}>
          <Link to="/aboutus">
            About Us
          </Link>
        </div>

      </div>
    </Container>
  );
}
