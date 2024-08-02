import { Link } from 'react-router-dom';
import { buyOnlineData } from '../data/buyOnline';
import classes from './BuyOnline.module.css';

const BuyOnline = () => {
  return (
    <div className={classes['buy-online']}>
      <h3>შეიძინე ონლაინ</h3>
      <div className={classes['images-list']}>
        {buyOnlineData.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            target="_blank"
            className={classes.image}
          >
            <img src={item.img} alt={item.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BuyOnline;
