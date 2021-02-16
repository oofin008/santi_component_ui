import React from 'react'
import { MiniCardGridContainer, MiniCardGridBox, MiniCardBox} from './style';

const MiniCard = (props) => {
  const {title, content} = props;
  return (
    <MiniCardBox className="MiniCardBox">
      <h2>{title}</h2>
      <p>{content}</p>
    </MiniCardBox>
  )
}

const MiniCardGrid = () => {
  return (
    <MiniCardGridContainer>
      <MiniCardGridBox>
        <MiniCard title="test" content="lorem ipsum"/>
        <MiniCard title="test" content="lorem ipsum"/>
        <MiniCard title="test" content="lorem ipsum"/>
        <MiniCard title="test" content="lorem ipsum"/>
        <MiniCard title="test" content="lorem ipsum"/>
        <MiniCard title="test" content="lorem ipsum"/>
        <MiniCard title="test" content="lorem ipsum"/>
        <MiniCard title="test" content="lorem ipsum"/>
        <MiniCard title="test" content="lorem ipsum"/>
        <MiniCard title="test" content="lorem ipsum"/>
        <MiniCard title="test" content="lorem ipsum"/>
      </MiniCardGridBox>
    </MiniCardGridContainer>
  )
}

export default MiniCardGrid
