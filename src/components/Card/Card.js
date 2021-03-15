import React from 'react';
import PropsTypes from 'prop-types';
import Image from '../../common/Image/Image';
import { CardBox, ImageBox, Title, Content } from './style';

const Card = props => {
  const { title, imageSrc, content } = props;

  return (
    <CardBox>
      <ImageBox>
        <Image imageSrc={imageSrc} imageAlt={title} imagePlaceholder />
      </ImageBox>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </CardBox>
  );
};

const { string } = PropsTypes;

Card.propsTypes = {
  title: string,
  imageSrc: string,
  content: string
};

export default Card;
