import { useEffect, useRef, useState } from 'react';
import lazysizes from 'lazysizes';
import './App.css';

const App = () => {
  const [useLazysizes, setUseLazysizes] = useState(false);

  lazysizes.cfg.init = false;

  useEffect(() => {
    if ('loading' in HTMLImageElement.prototype) {
      setUseLazysizes(false);
    } else {
      setUseLazysizes(true);
    }
  }, []);

  const getImages = () => {
    let images: string[] = [];
    const size = 300;
    const rows = 10;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < 3; j++) {
        images.push(
          `https://source.unsplash.com/random/${
            size + Math.floor(Math.random() * 10)
          }x${size + Math.floor(Math.random() * 10)}`
        );
      }
    }
    return images;
  };

  return (
    <>
      <h1 className='title'>Unsplash Image Feed 😀</h1>
      <h2 className='sub-title'>
        Instagram-like feed of images, made in React (☞ﾟヮﾟ)☞
      </h2>
      <div className='feed-container'>
        {getImages().map((image, index) => (
          <FeedImage key={index} src={image} isLazysize={useLazysizes} />
        ))}
      </div>
    </>
  );
};

const FeedImage = (props: { src: string; isLazysize: boolean }) => {
  const [usePlaceholder, setUsePlaceholder] = useState(false);
  const { src, isLazysize } = props;
  const imgElementRef = useRef();

  useEffect(() => {
    const imgElement: HTMLImageElement | undefined = imgElementRef.current;
    if (imgElement) {
      setUsePlaceholder(imgElement.complete);
    } else {
      setUsePlaceholder(false);
    }
  }, []);

  return (
    <>
      {isLazysize ? (
        <img
          ref={imgElementRef}
          data-src={usePlaceholder ? 'placeholderrrrrrr!' : src}
          alt=''
          loading='lazy'
          className='lazyload'
        />
      ) : (
        <img
          ref={imgElementRef}
          src={usePlaceholder ? 'placeholderrrrrrr!' : src}
          alt=''
          loading='lazy'
        />
      )}
    </>
  );
};

export default App;
