import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from '../../common/Image/Image';
import { MiniCardGridContainer, MiniCardGridBox, MiniCardBox } from './style';

const MiniCard = props => {
  const { title, content, imageSrc, startDate, endDate, clientName } = props;

  return (
    <MiniCardBox className="MiniCardBox">
      <time dateTime={Date.now()} title="test">
        From {startDate} to {endDate}
      </time>
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

const { string, number, arrayOf, exact, oneOf } = PropTypes;

const dataObject = exact({
  title: string,
  content: string,
  imageSrc: string,
  startDate: string,
  endDate: string,
  clientName: string,
  teamSize: number
});

const themeObj = oneOf(['light', 'dark']);

MiniCardGrid.propTypes = {
  data: arrayOf(dataObject).isRequired,
  background: string,
  theme: themeObj
};
export default MiniCardGrid;
