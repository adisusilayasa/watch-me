'use client'
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StreamingModal from './StreamingModal';

interface VideoCardProps {
    videoId: string;
    title: string;
    description: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, description }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    return (
        <Card
            sx={{ maxWidth: 345, marginBottom: '12px', bgcolor: '#292929', color: '#ffffff', cursor: 'pointer' }}
            onClick={toggleModal}
        >
            <CardMedia
                sx={{ height: 140 }}
                image="https://img.youtube.com/vi/HwAweFl8xmg/default.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    {description}
                </Typography>
                <StreamingModal videoId={videoId} isOpen={isModalOpen} />
            </CardContent>
        </Card>
    );
};

export default VideoCard;
