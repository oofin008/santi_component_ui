import styled from 'styled-components';

export const SkeletonCard = styled.div`
  width: 210px;
  height: 350px;
  padding: 1rem;
  background: radial-gradient(circle at 0% 0.5%, rgb(241, 241, 242) 0.1%, rgb(224, 226, 228) 100.2%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: 0 1px 1px rgba(0,0,0,0.1), 
    0 2px 2px rgba(0,0,0,0.1), 
    0 4px 4px rgba(0,0,0,0.1), 
    0 8px 8px rgba(0,0,0,0.1),
    0 16px 16px rgba(0,0,0,0.1);
  &:after {
    content: 'Loading...';
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.2;
    text-align: center;
    color: whitesmoke;
    width: 100px;
  }
`
export const Shelf = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`;

export const Card = styled.div`
  margin: 10px;
  @media (hover: hover) and (min-width: 600px) {
    &:after {
      transform: translateY(0);
    }
    
    .content {
      transform: translateY(calc(100% - 4.5rem));
      
      > *:not(.title) {
        opacity: 0;
        transform: translateY(1rem);
        transition:
          transform 700ms cubic-bezier(0.19, 1, 0.22, 1);,
          opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);;
      }
    }
    
    &:hover,
    &:focus-within {
      align-items: center;
      &:before { transform: translateY(-4%); }
      &:after { 
        transform: translateY(-50%);
        background-image: linear-gradient(
          to bottom,
          hsla(0, 0%, 0%, 0) 0%,
          hsla(0, 0%, 0%, 0.009) 11.7%,
          hsla(0, 0%, 0%, 0.034) 22.1%,
          hsla(0, 0%, 0%, 0.072) 31.2%,
          hsla(0, 0%, 0%, 0.123) 39.4%,
          hsla(0, 0%, 0%, 0.182) 46.6%,
          hsla(0, 0%, 0%, 0.249) 53.1%,
          hsla(0, 0%, 0%, 0.320) 58.9%,
          hsla(0, 0%, 0%, 0.394) 64.3%,
          hsla(0, 0%, 0%, 0.468) 69.3%,
          hsla(0, 0%, 0%, 0.540) 74.1%,
          hsla(0, 0%, 0%, 0.607) 78.8%,
          hsla(0, 0%, 0%, 0.668) 83.6%,
          hsla(0, 0%, 0%, 0.721) 88.7%,
          hsla(0, 0%, 0%, 0.762) 94.1%,
          hsla(0, 0%, 0%, 0.790) 100%
        );
      }

      .content {
        transform: translateY(0);

        > *:not(.title) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: calc(700ms / 8);
        }
      }
    }
    
    .card:focus-within {
      &:before,
      &:after,
      .content,
      .content > *:not(.title) {
        transition-duration: 0s;
      }
    }
  }

  box-shadow: 0 1px 1px rgba(0,0,0,0.1), 
    0 2px 2px rgba(0,0,0,0.1), 
    0 4px 4px rgba(0,0,0,0.1), 
    0 8px 8px rgba(0,0,0,0.1),
    0 16px 16px rgba(0,0,0,0.1);
  max-width: 210px;
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;

  @media (min-width: 600px) {
    height: 350px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 110%;
    background-size: cover;
    background-position: 0 0;
    transition: transform calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);;
    pointer-events: none;
    background-image: url(${props => (props.backgroundImg ? props.backgroundImg : '')});
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200%;
    pointer-events: none;
    transform: translateY(-50%);
    transition: transform calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);;
  }

`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);;
  z-index: 1;

  > * + * {
    margin-top: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.2;
`;

export const Desc = styled.p`
  font-family: 'Cardo', serif;
  font-size: 1.125rem;
  font-style: italic;
  line-height: 1.35;
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;

  &:hover {
    background-color: lighten(black, 5%);
  }

  &:focus {
    outline: 1px dashed yellow;
    outline-offset: 3px;
  }
`;