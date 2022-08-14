import * as React from 'react';
import Container from '@mui/material/Container';
import HeroSection from '../src/pages/Home/Hero/HeroSection';

export default function Index() {
  return (
    <section className='hero'>
        <Container maxWidth="md">
          <HeroSection />
        </Container>
    </section>
   
  );
}
