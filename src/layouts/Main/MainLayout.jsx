import Container from '@mui/material/Container';

export default function MainLayout( { children, ...rest } ) {
  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#cfe8fc' }} { ...rest }>
        { children }
    </Container>
  )
}
