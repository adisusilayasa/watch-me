'use client'
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import StreamingModal from './StreamingModal';
import dynamic from 'next/dynamic'

const StreamingModal = dynamic(() => import('./StreamingModal'))


interface VideoCardProps {
    videoId: string;
    title: string;
    description: string;
}

const style = {
    maxWidth: 300,         // Adjust the maximum width as needed
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
};

const VideoCard: React.FC<VideoCardProps> = ({ videoId, title, description }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    return (
        <Card
            sx={{ maxWidth: 345, minHeight: 360, maxHeight: 360, marginBottom: '12px', bgcolor: '#292929', color: '#ffffff', cursor: 'pointer' }}
            onClick={toggleModal}
        >
            <CardMedia
                sx={{ height: 180 }}
                image={`https://img.youtube.com/vi/${videoId}/default.jpg`}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={style}>
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    component="div"
                    sx={style}
                >
                    {description}
                </Typography>
                <StreamingModal videoId={videoId} isOpen={isModalOpen} />
            </CardContent>
        </Card>
    );
};

export default VideoCard;
