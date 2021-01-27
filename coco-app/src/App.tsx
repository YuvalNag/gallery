import React, { useState, useEffect } from 'react';
import './App.css';
import Gallery from './containers/Gallery/Gallery';
import { ImageMeta } from './types/types';
import Alert from './components/UI/Alert/Alert';
import Spinner from './components/UI/Spinner/Spinner';



function App() {
  const [imagesList, setImagesList] = useState<ImageMeta[]>([]);
  const [loading, setIsLoading]=useState(true);
  const [error, setError]=useState('');

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setImagesList(result);
        },
        (e) => {
          setIsLoading(false);
          setError(e.msg || e.massage);
        }
      );
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        Gallery
      </header>
      <main>
        {error && error !== '' &&
          <Alert handleClose={()=>setError('')} msg={error} />}
        {loading? <Spinner />
          :<Gallery imagesList={imagesList} />}
      </main>
    </div>
  );
}

export default App;
