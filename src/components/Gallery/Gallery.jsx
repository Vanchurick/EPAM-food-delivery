import React, { Component } from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import style from './Gallery.module.css';

import ukrainianCuisine from '../../assets/images/slider/ukrainian-cuisine.jpg';
import italianCuisine from '../../assets/images/slider/italian-cuisine.jpg';
import georgianCuisine from '../../assets/images/slider/georgian-cuisine.jpg';
import japaneseCuisine from '../../assets/images/slider/japanese-cuisine.jpeg';
import pizzaCuisine from '../../assets/images/slider/pizza-cuisine.jpg';

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
      <Carousel defaultWait={4000} forever>
        <Slide right>
          <div className={style.imageContainer}>
            <img src={ukrainianCuisine} alt="" className={style.image} />
          </div>
        </Slide>
        <Slide right>
          <div>
            <img src={pizzaCuisine} alt="" className={style.image} />
          </div>
        </Slide>
        <Slide right>
          <div>
            <img src={georgianCuisine} alt="" className={style.image} />
          </div>
        </Slide>
        <Slide right>
          <div>
            <img src={japaneseCuisine} alt="" className={style.image} />
          </div>
        </Slide>
        <Slide right>
          <div>
            <img src={italianCuisine} alt="" className={style.image} />
          </div>
        </Slide>
      </Carousel>
    );
  }
}

export default Slider;
