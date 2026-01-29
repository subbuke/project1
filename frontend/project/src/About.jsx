import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
      {/* Title */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 600,
          '&::after': {
            content: '""',
            display: 'block',
            width: '80px',
            height: '4px',
            backgroundColor: '#1976d2',
            margin: '12px auto 0',
          },
        }}
      >
        About Us
      </Typography>

      {/* Content */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* Left text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Who We Are
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            We are a passionate team focused on building modern, reliable, and
            user-friendly web applications. Our goal is to create clean designs
            combined with powerful functionality.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Using technologies like React and Material UI, we aim to deliver
            fast, responsive, and scalable digital experiences.
          </Typography>
        </Grid>

        {/* Right card */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              What We Do
            </Typography>
            <Typography variant="body2" color="text.secondary">
              • Frontend development with React<br />
              • Modern UI/UX using Material UI<br />
              • Responsive design for all devices<br />
              • Performance-focused web apps
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Bottom section */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: 'auto' }}
        >
          Our mission is to build applications that are not only visually
          appealing but also efficient, maintainable, and enjoyable to use.
        </Typography>
      </Box>
    </Container>
  );
}
