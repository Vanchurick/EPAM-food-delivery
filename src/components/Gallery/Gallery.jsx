import React, { Component } from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';

// images

import ukrainianCuisine from '../../assets/images/slider/ukrainian-cuisine(1).jpg';
import italianCuisine from '../../assets/images/slider/italian-cuisine(1).jpg';
import georgianCuisine from '../../assets/images/slider/georgian-cuisine(1).jpg';
import japaneseCuisine from '../../assets/images/slider/japanese-cuisine(1).jpeg';
import pizzaCuisine from '../../assets/images/slider/pizza-cuisine(1).jpg';

// css

import style from './Gallery.module.css';

class Slider extends Component {
  state = {};

  render() {
    const Container = styled.div`
      position: relative;
      overflow: hidden;
      height: 400px;
    `;
    const CarouselUI = ({ children }) => <Container>{children}</Container>;
    const Carousel = makeCarousel(CarouselUI);

    return (
      <Carousel defaultWait={6000} maxTurns={10}>
        <Slide right duration={3000}>
          <div className={style.imageContainer}>
            <img src={ukrainianCuisine} alt="" className={style.image} />
          </div>
        </Slide>
        <Slide right duration={3000}>
          <div>
            <img src={pizzaCuisine} alt="" className={style.image} />
          </div>
        </Slide>
        <Slide right duration={3000}>
          <div>
            <img src={georgianCuisine} alt="" className={style.image} />
          </div>
        </Slide>
        <Slide right duration={3000}>
          <div>
            <img src={japaneseCuisine} alt="" className={style.image} />
          </div>
        </Slide>
        <Slide right duration={3000}>
          <div>
            <img src={italianCuisine} alt="" className={style.image} />
          </div>
        </Slide>
      </Carousel>
    );
  }
}

export default Slider;
