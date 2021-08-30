import React from "react";
import { Link as RouterLink } from 'react-router-dom'
import {
    Grid,
    Card,
    CardHeader,
    Avatar,
    CardContent,
    Typography,
    Container
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'

import background from '../../img/background.jpg'
import avatar from '../../img/avatar.png'
import avatar2 from '../../img/avatar2.jpg'

const useHometyles = makeStyles((theme) => ({
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
    },
    container: {
        maxWidth: '82em', 
        paddingRight: '1.33rem',
        paddingLeft: '1.33rem',
        marginTop: '60px',
        marginBottom: '2rem',
    },
    grid: {
        justifyContent: "space-around"
    },
    cardRoot: {
        maxWidth: '30%',
        height: '250px',
        padding: '30px',
    },
    avatar: {
        width: '7rem',
        height: '7rem',
    },
    avatarImage: {
        height: '7rem'
    },
    name: {
        color: '#141E27',
    },
    role: {
        color: '#AAB8C1', 
        fontFamily: "Haas Grot Text R",
    },
}))

const cards = [
    {
        image: avatar,
        name: "David Newman Brunk",
        role: "Creator",
        content: `David Newman Brunk created DTrust
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
        .`
    },
    {
        image: null,
        name: "Michael",
        role: "Webapp Developer",
        content: `Michael was the main webapp
        developer behind the project.&nbsp;`
    },
    {
        image: avatar2,
        name: "Aoi",
        role: "Solidity Developer",
        content: `Aoi Kurokawa was the main solidity
        developer behind the project.&nbsp;`
    }
]

const AboutUs = () => {
    const classes = useHometyles();

    return (
        <>
            <div className={classes.about}>
                <div>Our Team</div>
                <Container className={classes.container}>
                    <Grid container spacing={2} className={classes.grid}>
                        {cards.map((card) => (
                            <>
                                <Card className={classes.cardRoot}>
                                    <CardHeader
                                        className={classes.cardHeader}
                                        avatar={
                                            <Avatar aria-label="recipe" className={classes.avatar}>
                                                <img alt="" src={card.image} className={classes.avatarImage} />
                                            </Avatar>
                                        }
                                    />
                                    <CardContent>
                                        <Typography 
                                            variant="subtitle1" 
                                            component="h2"
                                            className={classes.name}
                                        >{card.name}</Typography>
                                        <Typography 
                                            variant="subtitle1" 
                                            component="h2" 
                                            className={classes.role}
                                        >{card.role}</Typography>
                                        {/* <Typography variant="body2" color="textSecondary" component="p">
                                            <div className={classes.avatar_text}>
                                                {card.content}
                                            </div>
                                        </Typography> */}
                                    </CardContent>
                                </Card>
                            </>
                        ))}

                    </Grid>
                </Container>
            </div>

        </>
    )
}

export default AboutUs;
