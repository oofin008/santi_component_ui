import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { CardImage } from '@styled-icons/bootstrap';
import { MiniCardGridContainer, MiniCardGridBox, MiniCardBox } from './style';

const MiniCard = props => {
  const { title, content, imageSrc, startDate, endDate, clientName } = props;
  const [isPlaceholder, setIsPlaceholder] = useState(false);

  return (
    <MiniCardBox className="MiniCardBox">
      <time dateTime={Date.now()} title="test">
        From {startDate} to {endDate}
      </time>
      <div className="thumb">
        <LazyLoad debounce={false}>
          <>
            {imageSrc ? <img
              alt={title}
              src={imageSrc}
              onError={e => {
                e.preventDefault();
                e.target.onerror = null;
                e.target.parentNode.removeChild(e.target);
                setIsPlaceholder(true);
              }}
            /> : null}
            {isPlaceholder ? <CardImage title={title} size={"80px"}/> : null}
          </>
        </LazyLoad>
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
