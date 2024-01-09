import styles from './Footer.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

const iconeProps = {
  color: 'white',
  size: 24,
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconeProps} />
        <FaTwitter {...iconeProps} />
        <FaInstagram {...iconeProps} />
      </div>
      <span>
        Created by Vini Bretzke
        <br/>
        <small style={{fontSize: "12px"}}>
          During Alura Course
        </small>
      </span>
    </footer>
  )
}