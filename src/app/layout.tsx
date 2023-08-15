import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from 'next/link'; // Import Link from Next.js
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

// Define the links for the navbar
const navbarLinks = [
  { label: 'Dashboard', href: '/' },
  { label: 'About Me', href: '/about' }, // Change '/about' to your actual about page route
  { label: 'Profile', href: '/profile' }, // Change '/profile' to your actual profile page route
  { label: 'More', href: '/more' }, // Change '/more' to your actual more page route
];

export const metadata = {
  title: 'WatchMe!',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#1b1b1b' }}>
        <ThemeRegistry>
          <AppBar position="fixed">
            <Toolbar sx={{ backgroundColor: '#292929' }}>
              <Link href="/" passHref>
                <DashboardIcon sx={{ color: '#ffa31a', mr: 2, transform: 'translateY(-2px)' }} />
              </Link>
              <Box sx={{ marginLeft: 'auto' }}>
                {/* Render the navbar links */}
                {navbarLinks.map(link => (
                  <Link legacyBehavior key={link.label} href={link.href} passHref>
                    <Typography
                      variant="body1"
                      component="a"
                      sx={{
                        color: 'white',
                        textDecorationStyle: 'none',
                        textDecoration: 'none',
                        marginLeft: 2,
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </AppBar>

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
