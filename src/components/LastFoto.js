import { useSelector } from 'react-redux';

import FotoListItem from './FotoListItem';

const LastFoto = () => {
  const fotoName = useSelector((state) => state.lastFotoName);
  const fotoURL = useSelector((state) => state.lastFotoURL);

  return (
    <div className="file-uploader__last-foto">
      <FotoListItem name={fotoName} link={fotoURL}/>
    </div>
  );
};

export default LastFoto;
