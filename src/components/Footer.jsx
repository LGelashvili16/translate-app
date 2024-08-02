import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.ad}>
        <h4>Advertise</h4>
        <ul className={classes['ad-list']}>
          <li>Phone: +995 32 2387870, +995 32 2377807</li>
          <li>
            <span>Email:</span>{' '}
            <Link to="mailto:info@adline.ge">info@adline.ge</Link>
          </li>
        </ul>
        <Link
          className={classes['top-ge']}
          to={'https://www.top.ge/index.php?h=2725#2725'}
          target="_blank"
        >
          <span>TOP.GE</span>
          <img src="/public/icons/topge.svg" alt="top.ge stats logo" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
