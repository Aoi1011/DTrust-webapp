import React from 'react'
import { Button, Container, Grid } from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import background from '../../img/background.jpg'
import avatar from '../../img/avatar.png'
import avatar2 from '../../img/avatar2.jpg'
import { makeStyles } from '@material-ui/core/styles'
import { Link as RouterLink } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const useHometyles = makeStyles((theme) => ({
  root: {
    padding: '0',
    overflow: 'hidden',
  },
  cover: {
    padding: '30vh  0 10vh 0',
    backgroundColor: '#fe8d4a',
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
    padding: '150px 5vw 150px 5vw',
    backgroundColor: '#fe8d4a',
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
  about: {
    padding: '20px 0',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    '& > div:first-child': {
      margin: '0 auto',
      maxWidth: '400px',
      fontSize: '36px',
    },
    '& img': {
      height: '150px',
      '& + div > a': {
        color: '#000000',
      },
    },
  },
}))

export default function Home() {
  const classes = useHometyles()

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
          DTrust does decentralized trust agreements on the ethereum virtual
          machine.&nbsp;
          <RouterLink to="/docs">See Docs</RouterLink>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.desc}>
          Trust law enables estate administration, probate avoidance, asset
          protection, tax planning, and other crucial legal functions. Now you
          can do digital asset trusts on the etheruem virtual machine with
          DTrust. On this site you can access the DTrust decentralized
          application to form customized dtrusts, use control keys on existing
          dtrusts, permanently destroy control keys and earn income as a dtrust
          pomoter.
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.subsec}>
            <div className={classes.subtitle}>Form a dtrust</div>
            <div className={classes.subdesc}>
              A series of input questions allow settlors and trustees to form
              customized dtrusts for specific goals under different rules. Click
              "Form a dtrust" to see the customization options and follow the
              prompts to form your dtrust.
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
              Anyone can earn income with DTrust as a promoter. If you arrange
              the formation of a dtrust, then you can recieve the first two
              years 0.5%fee as a promoter. You can use this site to form receive
              your Promote token or to use your Promote token.
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
          DTrust uses proven openzeppelin smart contrcats.&nbsp;
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
      </div>
      <div className={classes.about}>
        <div>About Us</div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} className={classes.subsec}>
            <img src={avatar} alt="avatar"></img>
            <div className={classes.avatar_text}>
              David Newman Brunk created DTrust after studying law at New York
              Univeristy. You can download the initial whitepaper&nbsp;
              <RouterLink
                to="docs/DTrust_WhitePaper.docx"
                target="_blank"
                download
              >
                here
              </RouterLink>
              .
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.subsec}>
            <img src={avatar2} alt="avatar2"></img>
            <div className={classes.avatar_text}>
              Aoi Kurokawa was the main solidity developer behind the
              project.&nbsp;
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
