import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      padding: 10,
      margin: 20
    },
  });

const Post = (props) => {
    const {title, id} = props.post;
    const classes = useStyles();

    const history = useHistory();
    const handleClick = () => {
        history.push(`/post/${id}`)
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea >
                <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                    {title}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={handleClick} size='small' variant="contained" color="primary">
                See Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default Post;