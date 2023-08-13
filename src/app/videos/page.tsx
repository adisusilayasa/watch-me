'use client'
import * as React from 'react';
import { Container, Button, Grid } from '@mui/material';
import VideoCard from '../../components/VideoCard';

interface VideoData {
  id: number;
  videoId: string;
  title: string;
  description: string;
}

export default function VideosPage() {
  // Create an array of dummy data
  const dummyData: VideoData[] = Array.from({ length: 180 }, (_, index) => ({
    id: index + 1,
    videoId: `VideoId${index + 1}`,
    title: `Video Title ${index + 1}`,
    description: `Description for Video ${index + 1}`,
  }));

  // Paginate the dummy data
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  // Handle pagination buttons
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const paginationButtons = [];
    if (currentPage > 1) {
      paginationButtons.push(
        <Button
          key="prev"
          variant="outlined"
          color="primary"
          onClick={() => handlePageChange(currentPage - 1)}
          sx={{
            color: 'white',
            border: '1px solid white', // Add white outline for active page
            ':hover': {
              outline: 'none', // Remove outline on hover
            },
          }}
        >
          Prev Page
        </Button>
      );
    }

    for (let page = currentPage - 1; page <= currentPage + 1; page++) {
      if (page > 0 && page <= totalPages) {
        paginationButtons.push(
          <Button
            key={page}
            variant="outlined"
            color={page === currentPage ? 'primary' : 'inherit'}
            onClick={() => handlePageChange(page)}
            sx={{
              color: 'white',
              border: page === currentPage ? '1px solid white' : 'none', // Add white outline for active page
              ':hover': {
                outline: 'none', // Remove outline on hover
              },
            }}
          >
            {page}
          </Button>
        );
      }
    }


    if (currentPage < totalPages) {
      paginationButtons.push(
        <Button
          key="next"
          variant="outlined"
          color="primary"
          onClick={() => handlePageChange(currentPage + 1)}
          sx={{
            color: 'white',
            border: '1px solid white', // Add white outline for active page
            ':hover': {
              outline: 'none', // Remove outline on hover
            },
          }}
        >
          Next Page
        </Button>
      );
    }

    return paginationButtons;
  };

  return (
    <Container>
      <h1 style={{ color: '#ffa31a' }}>Watch the Videos</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {dummyData
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item) => (
            <Grid key={item.id} xs={4}>
              <VideoCard
                videoId={item.videoId}
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
      </Grid>
      <div style={{ marginTop: '20px', textAlign: 'center', color: 'white' }}>
        {renderPaginationButtons()}
      </div>
    </Container>
  );
}
