import React,{ useState } from 'react';
import PropsTypes from 'prop-types';
import { CardImage } from '@styled-icons/bootstrap';
import Lazyload from 'react-lazy-load';

const Image = props => {
  const { imageSrc, imageAlt, imagePlaceholder=false} = props;
  const [isPlaceholder, setIsPlaceholder ] = useState(false);
  return (
    <Lazyload debounce={false}>
      <>
        {imageSrc ? (
          <img
            alt={imageAlt}
            src={imageSrc}
            onError={e => {
              e.preventDefault();
              e.target.onerror = null;
              e.target.parentNode.removeChild(e.target);
              setIsPlaceholder(true);
            }}
          />
        ) : null}
        {imagePlaceholder && isPlaceholder ? <CardImage title={imageAlt} /> : null}
      </>
    </Lazyload>
  );
};

const { string, bool } = PropsTypes;
Image.propsTypes = {
  imageSrc: string.isRequired,
  imageAlt: string.isRequired,
  imagePlaceholder: bool
};

export default Image;
