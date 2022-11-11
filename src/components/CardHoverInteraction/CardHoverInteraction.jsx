import React from 'react';
import PropTypes from 'prop-types';
import { Shelf, Card, Content, Title, Desc, Button} from './style';

const CardHover = props => {

  return (
    <Card>
      <Content className='content'>
        <Title className='title'> This is Title </Title>
        <Desc className='desc'>This is content </Desc>
        <Button>Call to Action </Button>
      </Content>
    </Card>
  );
};

const { string, arrayOf, exact, oneOf } = PropTypes;

const dataObject = exact({
  title: string,
  content: string,
});

const themeObj = oneOf(['light', 'dark']);

CardHover.propTypes = {
  data: arrayOf(dataObject).isRequired,
  background: string,
  theme: themeObj
};
export default CardHover;
