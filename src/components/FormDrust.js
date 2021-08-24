import React from 'react'
import { InputLabel, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useDrustStyles = makeStyles((theme) => ({}))

export default function FormDrust() {
  const classes = useDrustStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputLabel>
              Which email addresses should recieve information about this
              dtrust?
            </InputLabel>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-search"
              label="Email Address"
              type="search"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </div>
    </form>
  )
}
