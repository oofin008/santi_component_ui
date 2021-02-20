import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { MiniCardGridContainer, MiniCardGridBox, MiniCardBox} from './style';

const MiniCard = (props) => {
  const {title, content} = props;
  return (
    <MiniCardBox className="MiniCardBox">
      <time dateTime={Date.now()} title="test"><strong>Job</strong> on Jan 2020</time>
      <h2>{title}</h2>
      <p>{content}</p>
    </MiniCardBox>
  )
}

const MiniCardGrid = (props) => {
  const {data, theme} = props
  return (
    <MiniCardGridContainer>
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

const { string, number, arrayOf, exact } = PropTypes;

const dataObject = exact({
  title: string,
  content: string,
  startDate: string,
  endDate: string,
  clientName: string,
  teamSize: number
});

MiniCardGrid.propTypes = {
  data: arrayOf(dataObject).isRequired,
  theme: string
}
export default MiniCardGrid
