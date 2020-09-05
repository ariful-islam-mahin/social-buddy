import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      padding: 5,
      margin: 20,
      maxWidth: 500
    },
  });

const Comment = (props) => {
    const {email, body} = props.comment;

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => setUser(data.results[0].picture))
    }, []);

    const img = user.large
    
    const imgStyle = {
        borderRadius:'50%', 
        width:'70px', 
        float:'left', 
        margin:'20px',
        border: '3px solid #ececec'
    }

    const classes = useStyles();
    return (
        <div >
            <img style={imgStyle} src={img} alt=""/>
            <Card className={classes.root} variant="outlined">
                <CardActionArea >
                    <CardContent>
                    <Typography gutterBottom variant="h6" >
                        {email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Comment;