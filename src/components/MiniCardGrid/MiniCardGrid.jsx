import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from '../../common/Image/Image';
import { MiniCardGridContainer, MiniCardGridBox, MiniCardBox } from './style';

const MiniCard = props => {
  const { title, content, imageSrc, clientName } = props;

  return (
    <MiniCardBox className="MiniCardBox">
      <div className="thumb">
        <Image imageSrc={imageSrc} imageAlt={title} imagePlaceholder />
      </div>
      <h3 title={title}>{title}</h3>
      <div className="tags">{clientName}</div>
      <div className="contents">
        <p>{content}</p>
      </div>
    </MiniCardBox>
  );
};

const MiniCardGrid = props => {
  const { data, background } = props;

  return (
    <MiniCardGridContainer background={background}>
      <MiniCardGridBox className="MiniCardGrid">
        {data.map((item, index) => {
          return (
            <Fragment key={index}>
              <MiniCard {...item} />
            </Fragment>
          );
        })}
      </MiniCardGridBox>
    </MiniCardGridContainer>
  );
};

const { string, arrayOf, exact, oneOf } = PropTypes;

const dataObject = exact({
  title: string,
  content: string,
});

const themeObj = oneOf(['light', 'dark']);

MiniCardGrid.propTypes = {
  data: arrayOf(dataObject).isRequired,
  background: string,
  theme: themeObj
};
export default MiniCardGrid;
