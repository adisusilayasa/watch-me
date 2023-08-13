'use client'
import React, { useEffect, useState } from 'react';
import { Container, Button, Grid } from '@mui/material';
import VideoCard from '../components/VideoCard';
import { Link, Routes, BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import apiService from '../api/apiService'; // Import the API service instance
import { BrowserRouter } from 'react-router-dom'

interface VideoData {
    id: number;
    videoID: string;
    videoTitle: string;
    videoDesc: string;
}

const InitialPage: React.FC = () => {
    const [videos, setVideos] = useState<VideoData[]>([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
            const response = await apiService<VideoData[]>('/videos/thumbnail-list');
            setVideos(response.data as VideoData[]);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    return (
        <Container>
            <h1 style={{ color: '#ffa31a' }}>Watch the Videos</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {videos.slice(0, 3).map((video) => (
                    <Grid key={video.id} xs={4}>
                        <VideoCard
                            videoId={video.videoID}
                            title={video.videoTitle}
                            description={video.videoDesc}
                        />
                    </Grid>
                ))}
            </Grid>
            <BrowserRouter>

                <Button
                    variant="outlined"
                    color="primary"
                    component={Link}
                    to="/videos"
                    style={{ marginTop: '20px' }}
                    sx={{
                        color: 'white',
                        backgroundColor: '#292929',
                        border: 'none',
                        ':hover': {
                            outline: 'none', // Remove outline on hover
                        },
                    }}
                >
                    Show More
                </Button>
            </BrowserRouter>
        </Container>
    );
};

export default InitialPage;
