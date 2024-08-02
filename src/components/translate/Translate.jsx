import LanguagePicker from './LanguagePicker';
import classes from './Translate.module.css';
import Input from './Input';

const Translate = () => {
  return (
    <section className={classes['translate-card']}>
      <h3>შეარჩიე სასურველი ენა</h3>

      <LanguagePicker />
      <Input />
    </section>
  );
};

export default Translate;
