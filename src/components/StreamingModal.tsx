'use client'
import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Container, Grid, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import YouTubeEmbed from './YouTubeEmbed'; // Import YouTubeEmbed component
import SendIcon from '@mui/icons-material/Send';

interface CommentProps {
    username: string;
    text: string;
}

interface StreamingModalProps {
    videoId: string;
    isOpen: boolean;
}

const Comment: React.FC<CommentProps> = ({ username, text }) => (
    <div style={{ marginBottom: '10px' }}>
        <strong>{username}:</strong> {text}
    </div>
);

const StreamingModal: React.FC<StreamingModalProps> = ({ videoId, isOpen }) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);
    const [liveComments, setLiveComments] = useState<CommentProps[]>([]);
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const toggleModal = () => {
        setIsModalOpen((prevState) => !prevState);
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentText(event.target.value);
    };

    const handleSubmitComment = () => {
        if (username && commentText) {
            const newComment: CommentProps = {
                username,
                text: commentText,
            };
            setLiveComments((prevComments) => [...prevComments, newComment]);
            setUsername('');
            setCommentText('');
        }
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isModalOpen) {
            timer = setInterval(() => {
                const newComment: CommentProps = {
                    username: 'User' + (liveComments.length + 1),
                    text: 'New comment at ' + new Date().toLocaleTimeString(),
                };
                setLiveComments((prevComments) => [...prevComments, newComment]);
            }, 2000);
        }
        return () => clearInterval(timer);
    }, [isModalOpen, liveComments.length]);

    return (
        <Container sx={{ marginTop: '20%', justifyContent: 'center' }}>
            <Grid container spacing={1} columns={16}>
                <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Modal open={isModalOpen} onClose={toggleModal}>
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <Box
                                sx={{
                                    boxShadow: '10px',
                                    position: 'absolute',
                                    width: '90%',
                                    height: '90%',
                                    marginTop: '5vh',
                                    marginLeft: '10vh',
                                    borderRadius: '20px',
                                    outline: 'none',
                                    '&:focus': {
                                        outline: 'none',
                                    },
                                    zIndex: 9999,
                                }}
                            >
                                <div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: '#1b1b1b',
                                        color: 'white',
                                        borderRadius: '14px',
                                        display: 'flex',
                                    }}
                                >
                                    <Grid item xs={11}>
                                        <YouTubeEmbed videoId={videoId} />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <h2 style={{ textAlign: 'center' }}>Live Comments</h2>
                                        <div
                                            style={{
                                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                                                padding: '20px',
                                                boxSizing: 'border-box',
                                                overflowY: 'scroll',
                                                height: '75%',
                                            }}
                                        >
                                            {liveComments.map((comment, index) => (
                                                <Comment key={index} username={comment.username} text={comment.text} />
                                            ))}
                                        </div>
                                        <div
                                            style={{
                                                padding: '10px',
                                                marginTop: '2vh',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    color: 'white',
                                                }}
                                            >
                                                <TextField
                                                    label="Username"
                                                    variant="outlined"
                                                    size="small"
                                                    value={username}
                                                    onChange={handleUsernameChange}
                                                    style={{ borderRadius: '12px', marginRight: '10px', backgroundColor: '#808080' }}
                                                    InputLabelProps={{
                                                        style: { color: '#fff' },
                                                    }}
                                                    sx={{
                                                        "& fieldset": { border: 'none' },
                                                    }}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: '10px',
                                                        },
                                                    }}
                                                />
                                                <TextField
                                                    label="Comment"
                                                    variant="outlined"
                                                    size="small"
                                                    value={commentText}
                                                    onChange={handleCommentChange}
                                                    style={{ borderRadius: '12px', marginRight: '10px', backgroundColor: '#808080' }}
                                                    InputLabelProps={{
                                                        style: { color: '#fff' },
                                                    }}
                                                    sx={{
                                                        "& fieldset": { border: 'none' },
                                                    }}
                                                    multiline
                                                    rows={1}
                                                />
                                                <IconButton onClick={handleSubmitComment}>
                                                    <SendIcon style={{ color: '#808080' }} />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </Grid>
                                </div>
                            </Box>
                        </div>
                    </Modal>
                </div>
            </Grid>
        </Container>
    );
};

export default StreamingModal;
