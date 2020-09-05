import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#ececec'
    },
  });

const Home = () => {
    const [posts, setPosts] = useState([]);

    // posts api
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Typography variant="h4" gutterBottom>
                Social Buddy
                </Typography>
            </div>
            {
                posts.map(post => <Post post={post}/>)
            }
        </div>
    );
};

export default Home;