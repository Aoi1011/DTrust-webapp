import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useDrustAlarmtyles = makeStyles((theme) => ({
  pageTitle: {
    padding: '10px 0 0 20px',
    fontSize: '30px',
  },
  container: {
    padding: '20vh 0 20vh 0',
    [theme.breakpoints.down('sm')]: {
      padding: '10vh 0 10vh 0',
    },
  },
  content: {
    fontWeight: 700,
  }
}));

export default function DrustAlarm(props) {
  const classes = useDrustAlarmtyles();

  return (
    <div>
      <div className={classes.pageTitle}>Form a Drust</div>
      <Container className={classes.container} maxWidth="sm">
        <div className={classes.content}>
          {props.druststate === 'success' ? "Congratulations. Your dtrust is sent to the ethereum network. After several confirmations, the email addresses that you provided will receive information regarding this dtrust. The associated wallet addresses will also recieve tokens with the specified control keys." : "Unfortunately there has been a problem forming your dtrust. Please double check the emails, addresses, and other information to make sure that its format and content is correct. If you cannot fix the problem, contact us with the button on the bottom of the screen."}
        </div>
      </Container>
    </div>
  );
}
