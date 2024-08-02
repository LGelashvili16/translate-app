import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import classes from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <main className={classes.main}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
