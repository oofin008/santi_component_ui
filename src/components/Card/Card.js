import React, { useState, useEffect} from 'react';
import PropsTypes from 'prop-types';
import Image from '../../common/Image/Image';
import { CardWrap, CardDiv, CardBG, CardInfo } from './style';

const Card = props => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [[x, y], setXY] = useState([0, 0]);
  let range = 20;

  const { title, imageSrc, content } = props;

  useEffect(() => {
    let handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    let handleMouseMove = event => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let originX = width / 2;
      let originY = height / 2;
      let totalX = width / 2;
      let totalY = height / 2;

      let mouseX = event.clientX;
      let mouseY = event.clientY;
      let positionX = mouseX - originX;
      let positionY = mouseY - originY;
      let x = Math.min(positionX / totalX, 1) * range;
      let y = -Math.min(positionY / totalY, 1) * range;

      setXY([x, y]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [range]);

  let frameStyle = {
    transform: `rotateX(${y}deg) rotateY(${x}deg)`
  };
  let imageStyle = {
    transform: `translateX(${-x * 1.5}px) translateY(${y * 1.5}px)`
  };
  let backgroundStyle = {
    backgroundPosition: `${-x * 2.5}px ${y * 2.5}px`
  };

  return (
    <CardWrap>
      <CardDiv className="card-div" style={{...frameStyle}}>
        <CardBG className="card-bg" imageSrc={imageSrc} style={{...imageStyle}}></CardBG>
        <CardInfo className="card-info">
          <slot name="header">test parallex card</slot>
          <slot name="content">test parallex card</slot>
        </CardInfo>
      </CardDiv>
    </CardWrap>
  );
};

const { string } = PropsTypes;

Card.propsTypes = {
  title: string,
  imageSrc: string,
  content: string
};

export default Card;
