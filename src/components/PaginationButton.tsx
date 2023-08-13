// PaginationButton.tsx
import React from 'react';
import Button from '@mui/material/Button';

interface PaginationButtonProps {
    label: string | number;
    color: 'primary' | 'inherit';
    onClick: () => void;
}
const paginationButtonStyles = {
    color: 'white',
    backgroundColor: '#292929',
    border: 'none',
    cursor: 'pointer',
    marginRight: '10px',
    ':hover': {
        outline: 'none',
    },
};

const PaginationButton: React.FC<PaginationButtonProps> = ({ label, color, onClick }) => (
    <Button
        variant="outlined"
        color={color}
        onClick={onClick}
        sx={{ ...paginationButtonStyles }}
    >
        {label}
    </Button>
);
