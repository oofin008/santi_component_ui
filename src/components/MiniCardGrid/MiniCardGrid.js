import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { MiniCardGridContainer, MiniCardGridBox, MiniCardBox} from './style';

const MiniCard = (props) => {
  const {title, content} = props;
  return (
    <MiniCardBox className="MiniCardBox">
      <time dateTime={Date.now()} title="test"><strong>Job</strong> on Jan 2020</time>
      <h3>{title}</h3>
      <div className="tags"></div>
      <div className="contents">
        <p>{content}</p>
      </div>
    </MiniCardBox>
  )
}

const MiniCardGrid = (props) => {
  const {data, background } = props

  return (
    <MiniCardGridContainer background={background}>
      <MiniCardGridBox className="MiniCardGrid">
        {data.map((item, index) => {
          return (<Fragment key={index}>
            <MiniCard title={item.title} content={item.content} />
          </Fragment>)
        })}
      </MiniCardGridBox>
    </MiniCardGridContainer>
  )
}

const { string, number, arrayOf, exact, oneOf } = PropTypes;

const dataObject = exact({
  title: string,
  content: string,
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
  
}
export default MiniCardGrid
