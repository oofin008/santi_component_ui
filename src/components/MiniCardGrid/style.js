import styled from 'styled-components';

export const MiniCardGridContainer = styled.div`
  margin: 0;
  place-items: center;
  overflow: hidden;
  display: flex;
  background: ${props => (props.background ? props.background : '')};
  box-sizing: content-box;
  position: relative;
  :after {
    content: '';
    position: absolute;
    right: 0;
    top: 3rem;
    bottom: 4rem;
    width: 5px;
    border-radius: 5px;
    background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
    box-shadow: -10px 0 20px 3px #000;
  }
`;

export const MiniCardGridBox = styled.div`
  padding: 3rem 0 3rem 2rem;
  margin: 0;
  display: flex;
  overflow-x: scroll;
  positon: relative;
  .MiniCardGrid :-webkit-scrollbar-thumb {
    background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.2) 0%, rgba(21, 21, 21, 0) 100%);
  }
  .MiniCardGrid :-webkit-scrollbar-track {
    background: red;
  }
`;

export const MiniCardBox = styled.article`
  min-width: 250px;
  min-height: 350px;

  box-shadow: -10px 0 20px 3px rgba(21,21,21,0.2);
  background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.2) 0%, rgba(21, 21, 21, 0) 100%);
  backdrop-filter: blur(10px);
  color: #fff;

  border-radius: 1rem;
  padding: 2rem;

  transition: 0.2s;

  :not(:first-child) {
    margin-left: -5rem;
  }
  
  :hover {
    box-shadow: -10px 0 20px 3px rgba(21,21,21,0.1);
    background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(21, 21, 21, 0) 100%);
    transform: translateY(-2rem) rotate(3deg); 

  }

  :hover ~ .MiniCardBox {
    transform: translateX(4.5rem);
  }

  time {

  }

  .thumb {
    display: block;
    img {
      width: 100%;
    }
  }

  h3 {
    display: block;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
  }

  .tags {

  }

  .contents {

  }

`;
