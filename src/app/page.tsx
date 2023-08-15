'use client'
import React, { useEffect, useState } from 'react';
import { Container, Button, Grid } from '@mui/material';
import VideoCard from '../components/VideoCard';
import { request } from '../api/apiService';
import Link from 'next/link';

const PAGE_SIZE = 3; // Number of videos to load per page

interface VideoData {
    videoID: string;
    videoTitle: string;
    videoDesc: string;
}

const InitialPage: React.FC = () => {
    const [videos, setVideos] = useState<VideoData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetchVideos();
    }, [currentPage]);

    const fetchVideos = async () => {
        try {
            const response = await request('/videos/thumbnail-list', {
                params: {
                    page: currentPage,
                    per_page: PAGE_SIZE,
                },
            });
            setVideos(prevVideos => [...prevVideos, ...response.data]);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    return (
        <Container>
            <h1 style={{ color: '#ffa31a' }}>Watch the Videos</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {videos.slice(0, 3).map((video) => (
                    <Grid key={video.videoID} item xs={4}>
                        <VideoCard
                            videoId={video.videoID}
                            title={video.videoTitle}
                            description={video.videoDesc}
                        />
                    </Grid>
                ))}
            </Grid>
            <Link legacyBehavior href="/videos">
                <a>
                    <button
                        type="button"
                        style={{
                            marginTop: '20px',
                            color: 'white',
                            backgroundColor: '#292929',
                            border: 'none',
                            padding: '8px 16px',
                            cursor: 'pointer',
                        }}
                    >
                        Show More
                    </button>
                </a>
            </Link>
        </Container>
    );
};

export default InitialPage;
