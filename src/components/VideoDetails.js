import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({ video }) => {

    if(!video) return <div>Loading</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <React.Fragment>
            <Paper elevation={6}>
                <iframe 
                    src={videoSrc}
                    frameBorder="0"
                    height="500px"
                    width="100%"
                    title="Video Player"
                />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px'}}>
                <Typography variant="h4">
                    {video.snippet.title} - {video.snippet.channelTitle}
                </Typography>

                <Typography variant="overline">
                    {video.snippet.channelTitle}
                </Typography>

                <Typography variant="subtitle2">
                    {video.snippet.description}
                </Typography>
            </Paper>
        </React.Fragment>
    )
} 

export default VideoDetail;