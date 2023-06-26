import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import FotoListItem from './FotoListItem';

const FotoList = () => {
  const fotoList = useSelector((state) => state.fotoList);
  const elements = fotoList.map((item) => {
    return (
      <FotoListItem key={nanoid()} name={item.fotoName} link={item.fotoURL} />
    );
  });

  return (
    <div className="file-uploader__foto-list">
      {elements}
    </div>
  );
};

export default FotoList;
