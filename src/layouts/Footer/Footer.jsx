import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import Copyright from '../../Copyright';
import ProTip from '../../ProTip';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="md">
        <Stack direction={{ xs: 'column', sm: 'row' }} sx={{justifyContent: 'space-between'}}>
            <Copyright />
            <ProTip />
        </Stack>
      </Container>
    </footer>
  )
}
