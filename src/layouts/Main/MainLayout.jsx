import Container from '@mui/material/Container';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function MainLayout( { children, ...rest } ) {
  return (
    <div className='layout-page'>
      <Header />
        { children }
      <Footer />
    </div>
  )
}
