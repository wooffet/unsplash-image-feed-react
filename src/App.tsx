import './App.css';

const App = () => {
  const getImages = () => {
    let images = [];
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
      <h1 className='title'>Unsplash Image Feed</h1>
      <h2 className='title'>Instagram-like feed of images :)</h2>
      <div className='feed-container'>
        {getImages().map((image, index) => {
          return <img key={index} src={image} alt='' />;
        })}
      </div>
    </>
  );
};

export default App;
