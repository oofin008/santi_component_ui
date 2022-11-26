import React, { Fragment } from 'react';
import { string, func, arrayOf }from 'prop-types';
import { Shelf, Card, Content, Title, Desc, Button} from './style';

const HoverCard = props => {
  const { backgroundImg, title, description, buttonText, onClick } = props;
  return (
    <Card backgroundImg={backgroundImg}>
      <Content className='content'>
        <Title className='title'>{title}</Title>
        <Desc className='desc'>{description}</Desc>
        <Button onClick={onClick}>{buttonText}</Button>
      </Content>
    </Card>
  );
};

const HoverCardGrid = props => {
  const { data } = props;
  return (
    <Shelf>
      {data.map((item, index) => {
        return (
          <Fragment key={index}>
            <HoverCard {...item} />
          </Fragment>
        )
      })}
    </Shelf>
  )
}

HoverCard.propTypes = {
  backgroundImg: string,
  title: string.isRequired,
  description: string,
  buttonText: string.isRequired,
  onClick: func.isRequired,
};

HoverCardGrid.propTypes = {
  data: arrayOf(HoverCard.propTypes).isRequired,
}

export default HoverCardGrid;
