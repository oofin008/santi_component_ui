import styled from 'styled-components';

export const CardBox = styled.div`
  width: 250px;
  height: 350px;

  background: linear-gradient(152.97deg, rgba(21, 21, 21, 0.2) 0%, rgba(21, 21, 21, 0) 100%);
  backdrop-filter: blur(4l0px);

  border-radius: 16px;
  color: white;
  position: relative;

  .thumb {
    width: 100px;
    height: auto;
  }
`;

export const ImageBox = styled.div`
  width: 100px;
  height: 100px;
  display: block;
`;

export const Title = styled.p`
  color: white;

`;

export const Content = styled.article``;
