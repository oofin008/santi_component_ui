import React from 'react'
import PropsTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { CardBox, Title } from './style';
const Card = props => {
  return (
    <CardBox>
      <LazyLoad debounce={false}>
        <>
        </>
      </LazyLoad>
      <Title>Test</Title>
    </CardBox>
  )
}

const { string } = PropsTypes;

Card.propsTypes = {
  title: string,
  imageSrc: string,
  content: string
}

export default Card;