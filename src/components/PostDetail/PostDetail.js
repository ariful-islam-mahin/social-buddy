import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { Card, CardActionArea, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      padding: 10,
      margin: 20
    },
    detail: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#ececec'
    }
  });

const PostDetail = () => {
    const {postId} = useParams();
    const classes = useStyles();

    const [details, setDetails] = useState([]);
    const [comments, setComments] = useState([]);

    // post details api
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setDetails(data))
    }, []);
    
    // comments api
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    const {title, body} = details

    return (
        <div>
            <Typography variant="h5" className={classes.detail} gutterBottom>
                    Post Details
            </Typography>
            <Card className={classes.root} variant="outlined">
                <CardActionArea >
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                        {title}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="p">
                        {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Typography variant="h6" className={classes.detail} gutterBottom>
                        Comments
            </Typography>
            {
                 comments.map(comment => <Comment comment={comment}/>)
            }
        </div>
    );
};

export default PostDetail;