import { useSelector } from 'react-redux';

import FileUploader from './components/FileUploader';
import LastFoto from './components/LastFoto';
import FotoList from './components/FotoList';

function App() {
  const fotoName = useSelector((state) => state.lastFotoName);
  const fotoURL = useSelector((state) => state.lastFotoURL);

  const isFotoFile = fotoName && fotoURL ? true : false;

  return (
    <div className="App">
      <h1 className="file-uploader__title">File Uploader</h1>
      <FileUploader />
      {!isFotoFile && <img className="file-uploader__no-foto-img" src="./images/no-image.jpg" alt="No foto" />}
      {isFotoFile && <div className="file-uploader__list-wrapper">
        <LastFoto />
        <FotoList />
      </div>}
    </div>
  );
}

export default App;
