import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Link, TextField } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const usePromoteAlarmtyles = makeStyles((theme) => ({
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  container: {
    paddingTop: '20vh',
    paddingBottom: '20vh',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '10vh',
      paddingBottom: '10vh',
    },
  },
  content: {
    fontWeight: 700,
  },
  input: {
    marginTop: '10px',
    width: '100%',
    marginBottom: '30px',
  },
  link: {
    color: '#000000',
    transition: 'color .3s ease',
    margin: 'auto',
    display: 'block',
    width: 'fit-content',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 500,
    '&:hover': {
      color: '#666666',
    },
  },
}))

export default function PromoteAlarm(props) {
  const classes = usePromoteAlarmtyles()

  return (
    <div>
      <div className={classes.pageTitle}>Promote</div>
      <Container className={classes.container} maxWidth="sm">
        {props.promotestate === 'get' && (
          <div className={classes.content}>
            "Congratulations. DTrust has sent a Promote token to your wallet
            address. Use it to create dtrusts and earn fees."
          </div>
        )}
        {props.promotestate === 'use' && (
          <>
            <div className={classes.content}>
              "If a dtrust is formed with this link, then the first two years of
              0.5% fees from that dtrust will go to your Promote token."
            </div>
            <TextField
              className={classes.input}
              label=""
              id=""
              variant="outlined"
              size="small"
            />
            <Link
              className={classes.link}
              component={RouterLink}
              to="/formdtrust"
            >
              The link here would go to a page identical to the “Form a dtrust”
              page.
            </Link>
          </>
        )}
      </Container>
    </div>
  )
}
