import React from 'react';
import { Typography, Card, CardActionArea, CardContent } from '@material-ui/core';

const NoMatch = () => {
    return (
        <div>
            <Card  variant="outlined">
                <CardActionArea >
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h1">
                        Page is not found
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="p">
                        404 Error!!
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default NoMatch;