'use client'

import React from 'react';

interface YouTubeEmbedProps {
    videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
    return (
        <div style={{
            position: 'relative', height: '100%',
            width: '100%', overflow: 'hidden',
            alignItems: 'center', // Vertically center the content
        }}>
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default YouTubeEmbed;
