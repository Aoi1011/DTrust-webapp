import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import background from '../../img/background.jpg';
import avatar from '../../img/avatar.png';
import avatar2 from '../../img/avatar2.jpg';

const useAboutUsStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
    backgroundImage: `url(${background})`,
  },
  title: {
    fontSize: '36px',
    textAlign: 'center',
  },
  card: {
    flexGrow: 1,
    maxWidth: 345,
    [theme.breakpoints.up('xs')]: {
      flexBasis: 345,
    },
    margin: 10,
    '& .MuiCardHeader-root': {
      paddingBottom: 0,
    },
  },
  avatar: {
    width: 60,
    height: 60,
  },
}));

export default function AboutUs() {
  const classes = useAboutUsStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>About Us</div>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {[
          {
            name: 'David Newman Brunk',
            avatar: avatar,
            role: 'Creator',
            desc: (
              <span>
                David Newman Brunk created DTrust after studying law at New York
                Univeristy. You can download the initial whitepaper&nbsp;
                <Link to="docs/DTrust_WhitePaper.docx" target="_blank" download>
                  here
                </Link>
                .
              </span>
            ),
          },
          {
            name: 'Aoi Kurokawa',
            avatar: avatar2,
            role: 'Solidity Developer',
            desc:
              'Aoi Kurokawa was the main solidity developer behind the project.',
          },
          {
            name: 'Michael',
            avatar: null,
            role: 'Webapp Developer',
            desc: '',
          },
          {
            name: 'Hacken',
            avatar: null,
            role: 'Audits',
            desc: '',
          },
        ].map((item, index) => {
          return (
            <Card className={classes.card} key={index}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    className={classes.avatar}
                    src={item.avatar}
                  ></Avatar>
                }
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  component="h2"
                >
                  {item.role}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className={classes.subsec}>
          <img src={avatar} alt="avatar"></img>
          <div>
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
          <div>
            Aoi Kurokawa was the main solidity developer behind the
            project.&nbsp;
          </div>
        </Grid>
      </Grid> */}
    </div>
  );
}
