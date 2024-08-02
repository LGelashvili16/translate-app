import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Container from './Container';

const Header = () => {
  return (
    <header>
      {/* <Container> */}
      <div className={classes.container}>
        <div className={classes.logo}>Logo Goes Here</div>

        <nav>
          <ul className={classes['nav-list']}>
            <li>
              <NavLink to={''}>ბლოგი</NavLink>
            </li>
            <li>
              <NavLink to={''}>ქვიზი</NavLink>
            </li>
          </ul>
        </nav>
        {/* </Container> */}
      </div>
    </header>
  );
};

export default Header;
