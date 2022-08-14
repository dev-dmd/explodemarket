import * as React from 'react'
import { Box, Fab, Typography } from '@mui/material'
import styles from './hero.module.css'
import Grid from '@mui/material/Unstable_Grid2'
import EastIcon from '@mui/icons-material/East'
import { styled } from '@mui/material/styles';

const Label = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}))

export default function HeroSection() {
  return (
    <React.Fragment>
      <Box className={styles.hero}></Box>
      <Grid container sx={{mt: 6}} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={8}>
          <Typography sx={{ fontFamily: 'Poppins'}} color="primary.text" component="h1" variant="h3">
          Zamislite <Label>digitalnu budućnost</Label> vaše kompanije i pretvorite je u <Label>stvarnost</Label>.
          </Typography>
          <Box sx={{mt: 5, mr: 3, display: 'flex', alingItems: 'center'}}>
            <Fab color="secondary" aria-label="add">
              <EastIcon />
            </Fab>
            <Typography color="primary.text" component="p" variant="p" sx={{mr: 2, display: 'flex', alignItems: 'center'}}>upoznajte nas bliže</Typography>
          </Box>
        </Grid>
        <Grid xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src='/images/mobile.svg' width={300} alt="mobile phone" />
        </Grid>
      </Grid>
    </React.Fragment>

  )
}
