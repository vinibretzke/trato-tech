import Navbar from 'Components/Navbar';
import styles from './HomePage.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from 'Components/Footer';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}