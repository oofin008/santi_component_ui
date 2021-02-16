import styled from 'styled-components';

export const MiniCardGridContainer = styled.div`

  height: 100vh;
  margin: 0;
  place-items: center;
  overflow: hidden;
  display: flex;

  position: relative;
  :after {
    content: "";
    position: absolute;
    right: 0;
    top: 3rem;
    bottom: 3.6rem;
    width: 5px;
    border-radius: 5px;
    background: linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%);
    box-shadow: -10px 0 20px 3px #000;
  }
`;

export const MiniCardGridBox = styled.div`
  padding: 3rem 0 3rem 2rem;
  margin: 0;
  display: flex;
  overflow-x: scroll;
  positon: relative;
`;

export const MiniCardBox = styled.div`
  width: 250px;
  height: 350px;

  background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.2) 0%, rgba(21, 21, 21, 0) 100%);
  backdrop-filter: blur(10px);
  color: black;

  border-radius: 1rem;
  padding: 2rem;

  transition: 0.2s;

  :not(:first-child) {
    margin-left: -4rem;
  }
  
  :hover {
    transform: translateY(-2rem) rotate(3deg);
  }

  :hover ~ .MiniCardBox {
    transform: translateX(4rem);
  }
`;