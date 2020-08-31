import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
    console.log(video);
    return(
        <Grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
                <img src={video.snippet.thumbnails.medium.url} style={{ marginRight: '8px'}} alt="Thumbnail" />
                <Typography variant="subtitle1"><strong>{video.snippet.title}</strong></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem;