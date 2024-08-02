import { useState } from 'react';
import classes from './LanguagePicker.module.css';

const languagesInGeorgian = ['ქართული', 'ინგლისური', 'გერმანული'];
const languagesInEnglish = ['Georgian', 'English', 'German'];

const LanguagePicker = () => {
  const [translateFrom, setTranslateFrom] = useState(languagesInGeorgian[0]);
  const [translateTo, setTranslateTo] = useState(languagesInEnglish[1]);

  let indexForFilter = languagesInGeorgian.findIndex(
    (element) => element === translateFrom
  );

  let indexForTranslateTo = languagesInEnglish.findIndex(
    (element) => element === translateTo
  );

  const [showTranslateFromList, setShowTranslateFromList] = useState(false);
  const [showTranslateToList, setShowTranslateToList] = useState(false);
  const [changeLanguages, setChangeLanguages] = useState(false);

  const filteredLanguagesInGeorgian = languagesInGeorgian.filter(
    (lang, index) => index !== indexForTranslateTo && lang !== translateFrom
  );

  const filteredLanguagesInEnglish = languagesInEnglish.filter(
    (lang, index) => index !== indexForFilter && lang !== translateTo
  );

  function translateFromSelectHandler(lang) {
    setTranslateFrom(lang);
    setShowTranslateFromList(false);
  }

  function translateToSelectHandler(lang) {
    setTranslateTo(lang);
    setShowTranslateToList(false);
  }

  function showTranslateFromListHandler() {
    setShowTranslateFromList((prev) => !prev);
  }

  function showTranslateToListHandler() {
    setShowTranslateToList((prev) => !prev);
  }

  function changeLanguagesHandler() {
    setChangeLanguages((prev) => !prev);
  }

  let translateFromContent;
  let translateToContent;

  if (!changeLanguages) {
    translateFromContent = (
      <div className={classes['translate-from']}>
        <p
          className={classes['translate-selected']}
          onClick={showTranslateFromListHandler}
        >
          {translateFrom}
          <img
            src="../../../public/icons/angle-down.svg"
            alt=""
            className={`${
              showTranslateFromList
                ? classes['up-arrow']
                : classes['down-arrow']
            }`}
          />
        </p>

        <div className={classes['list-wrapper']}>
          <ul
            className={`${classes['translate-list']} ${
              showTranslateFromList ? classes['show-list'] : ''
            }`}
          >
            {filteredLanguagesInGeorgian.map((language) => (
              <li
                key={language}
                onClick={() => translateFromSelectHandler(language)}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    translateToContent = (
      <div className={classes['translate-to']}>
        <p
          className={classes['translate-selected']}
          onClick={showTranslateToListHandler}
        >
          {translateTo}
          <img
            src="../../../public/icons/angle-down.svg"
            alt=""
            className={`${
              showTranslateToList ? classes['up-arrow'] : classes['down-arrow']
            }`}
          />
        </p>

        <div className={classes['list-wrapper']}>
          <ul
            className={`${classes['translate-list']} ${
              showTranslateToList ? classes['show-list'] : ''
            }`}
          >
            {filteredLanguagesInEnglish.map((language) => (
              <li
                key={language}
                onClick={() => translateToSelectHandler(language)}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    translateFromContent = (
      <div className={classes['translate-to']}>
        <p
          className={classes['translate-selected']}
          onClick={showTranslateToListHandler}
        >
          {translateTo}
          <img
            src="../../../public/icons/angle-down.svg"
            alt=""
            className={`${
              showTranslateToList ? classes['up-arrow'] : classes['down-arrow']
            }`}
          />
        </p>

        <div className={classes['list-wrapper']}>
          <ul
            className={`${classes['translate-list']} ${
              showTranslateToList ? classes['show-list'] : ''
            }`}
          >
            {filteredLanguagesInEnglish.map((language) => (
              <li
                key={language}
                onClick={() => translateToSelectHandler(language)}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    translateToContent = (
      <div className={classes['translate-from']}>
        <p
          className={classes['translate-selected']}
          onClick={showTranslateFromListHandler}
        >
          {translateFrom}
          <img
            src="../../../public/icons/angle-down.svg"
            alt=""
            className={`${
              showTranslateFromList
                ? classes['up-arrow']
                : classes['down-arrow']
            }`}
          />
        </p>

        <div className={classes['list-wrapper']}>
          <ul
            className={`${classes['translate-list']} ${
              showTranslateFromList ? classes['show-list'] : ''
            }`}
          >
            {filteredLanguagesInGeorgian.map((language) => (
              <li
                key={language}
                onClick={() => translateFromSelectHandler(language)}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={classes['translate-picker']}>
      {translateFromContent}

      <div className={classes.switch} onClick={changeLanguagesHandler}>
        <img
          src="../../../public/icons/arrow-right-left.svg"
          alt=""
          className={`${
            changeLanguages ? classes['up-arrow'] : classes['down-arrow']
          }`}
        />
      </div>

      {translateToContent}
    </div>
  );
};

export default LanguagePicker;
