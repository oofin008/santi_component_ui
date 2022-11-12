import React from 'react';
import { string, func, bool }from 'prop-types';
import { Card, Content, Title, Desc, Button, SkeletonCard} from './style';

const CardHover = props => {
  const { backgroundImg, title, description, buttonText, onClick, isLoading } = props;

  if(isLoading) {
    return (<SkeletonCard >Test</SkeletonCard>);
  } else {
    return (
      <Card backgroundImg={backgroundImg}>
        <Content className='content'>
          <Title className='title'>{title}</Title>
          <Desc className='desc'>{description}</Desc>
          <Button onClick={onClick}>{buttonText}</Button>
        </Content>
      </Card>
    );
  }
};

CardHover.propTypes = {
  isLoading: bool,
  backgroundImg: string,
  title: string.isRequired,
  description: string,
  buttonText: string.isRequired,
  onClick: func.isRequired,
};
export default CardHover;
