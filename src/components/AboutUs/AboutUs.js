import React from "react";
import { Link as RouterLink } from 'react-router-dom'
import {
    Grid,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
    CardContent,
    Typography,
    CardActions, Collapse
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

import background from '../../img/background.jpg'
import avatar from '../../img/avatar.png'
import avatar2 from '../../img/avatar2.jpg'

const useHometyles = makeStyles((theme) => ({
    cardRoot: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    avatarImage: {
        height: '8vh'
    },
    avatar: {
        width: '6vw',
        height: '8vh',
    },
    cardHeader: {
        // width: '6vw',
        // height: '8vh',
    }
}))

const AboutUs = () => {
    const classes = useHometyles();

    return (
        <>
            <div className={classes.about}>
                <div>Our Team</div>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} className={classes.subsec}>
                        <img src={avatar} alt="avatar"></img>
                        <div className={classes.avatar_text}>
                            David Newman Brunk created DTrust
                            after studying law at New York
                            Univeristy. You can download the
                            initial whitepaper&nbsp;
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
                            Aoi Kurokawa was the main solidity
                            developer behind the project.&nbsp;
                        </div>  
                    </Grid>
                </Grid>
            </div>
            <Card className={classes.cardRoot}>
                <CardHeader
                    className={classes.cardHeader}
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            <img alt="" src={avatar} className={classes.avatarImage} />
                        </Avatar>
                    }
                />
                <CardContent>
                <Typography variant="h5" component="h2">David Newman Brunk</Typography>
                    <Typography variant="h6" component="h2">Creator</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <div className={classes.avatar_text}>
                            David Newman Brunk created DTrust
                            after studying law at New York
                            Univeristy. You can download the
                            initial whitepaper&nbsp;
                            <RouterLink
                                to="docs/DTrust_WhitePaper.docx"
                                target="_blank"
                                download
                            >
                                here
                            </RouterLink>
                            .
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default AboutUs;
