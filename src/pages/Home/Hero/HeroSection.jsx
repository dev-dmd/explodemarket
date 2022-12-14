import * as React from 'react'
import { Box, Fab, IconButton, Typography } from '@mui/material'
import styles from './hero.module.css'
import Grid from '@mui/material/Unstable_Grid2'
import EastIcon from '@mui/icons-material/East'
import DialpadIcon from '@mui/icons-material/Dialpad'
import { styled } from '@mui/material/styles';
import MobileImg from '../../../assets/icons/MobileImg'

const Label = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}))

export default function HeroSection() {
  return (
    <React.Fragment>
      <Box className={styles.hero}></Box>
      <Grid container sx={{mt: 6}} spacing={3}>
        <Grid xs={12} md={8}>
          <Typography sx={{ fontFamily: 'Poppins'}} color="primary.text" component="h1" variant="h3">
          Zamislite <Label>digitalnu budućnost</Label> vaše kompanije i pretvorite je u <Label>stvarnost</Label>.
          </Typography>
          <Box sx={{mt: 5, mr: 3, display: 'flex', alingItems: 'center'}}>
            <Fab variant="outlined" color="secondary" aria-label="add">
              <EastIcon />
            </Fab>
            <Typography color="primary.text" component="p" variant="p" sx={{ml: 2, display: 'flex', alignItems: 'center'}}>upoznajte nas bliže</Typography>
          </Box>
          <Box sx={{mt: 5, mr: 3, display: 'flex', alingItems: 'center'}}>
            <IconButton color="secondary" sx={{border: '3px solid', width: '56px', height: '56px'}}>
              <DialpadIcon sx={{
                path: {
                  stroke: '#b0b0b0'
                }
              }} />
            </IconButton>
            <Box sx={{ display: 'flex', alingItems: 'center', flexWrap: 'wrap'}}>
              <Typography color="secondary.text" variant="caption" component="p" sx={{ml: 2, display: 'flex', alignItems: 'center'}}>Ne oklevaj te kontaktirajte nas</Typography>
              <Typography color="primary.text" component="p" variant="h5" sx={{ml: 2, display: 'flex', alignItems: 'center', width: '100%'}}>+38162201787</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <MobileImg viewBox= '0 0 610 733' sx={{ verticalAlign: 'middle', width: '300px', height: 'auto' }} />
        </Grid>
      </Grid>
    </React.Fragment>

  )
}
