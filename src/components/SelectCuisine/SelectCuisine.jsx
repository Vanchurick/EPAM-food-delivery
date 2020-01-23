import React from 'react';
import { Link } from 'react-router-dom';

// components

import CuisineButton from '../CuisineButton/CuisineButton';
import Button from '../Button/Button';

// css

import styles from './SelectCuisine.module.css';

// images

import ukraine from '../../assets/images/cuisine buttons/ukraine.jpg';
import georgia from '../../assets/images/cuisine buttons/georgia.jpg';
import italia from '../../assets/images/cuisine buttons/italia.jpg';
import pizza from '../../assets/images/cuisine buttons/pizza.jpg';
import japan from '../../assets/images/cuisine buttons/japan.png';

const images = [
  { src: ukraine, name: 'ukraine' },
  { src: georgia, name: 'georgia' },
  { src: italia, name: 'italia' },
  { src: pizza, name: 'pizza' },
  { src: japan, name: 'japan' },
];

const SelectCuisine = () => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>What would you like today?</h2>

    <div className={styles.container}>
      {images.map(img => {
        const path = `/menu/?category=${img.name}`;
        const title = `${img.name} cuisine`;
        return (
          <Link to={path} key={img.name}>
            <CuisineButton img={img.src} alt={img.name} title={title} />
          </Link>
        );
      })}
    </div>
    <Link to="/lunches">
      <Button text="Lunches" type="button" className={styles.button} />
    </Link>
  </div>
);

export default SelectCuisine;
