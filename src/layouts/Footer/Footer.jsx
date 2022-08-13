import Stack from '@mui/material/Stack';
import { Container } from '@mui/system';
import Copyright from '../../Copyright';
import ProTip from '../../ProTip';

export default function Footer() {
  return (
    <footer>
      <Container maxWidth="md">
        <Stack direction="row" spacing={2}>
            <Copyright />
            <ProTip />
        </Stack>
      </Container>
    </footer>
  )
}
