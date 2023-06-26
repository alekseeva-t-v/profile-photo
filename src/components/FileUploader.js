import { useDispatch, useSelector } from 'react-redux';

import { fotoActions } from '../store/fotoSlice';

const FileUploader = () => {
  const dispatchFunction = useDispatch();
  const fotoName = useSelector((state) => state.lastFotoName);
  const fotoURL = useSelector((state) => state.lastFotoURL);

  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    const imageURL = fileReader.result;
    dispatchFunction(fotoActions.addLastFotoURL(imageURL));
  };

  const onChangeHandler = (event) => {
    event.preventDefault();
    if (fotoName && fotoURL) {
      dispatchFunction(fotoActions.addLastFotoItem());
    }
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;
    dispatchFunction(fotoActions.addLastFotoName(fileName));
    fileReader.readAsDataURL(file);
  };

  return (
    <form className="file-uploader">
      <label
        htmlFor="file-loader-button"
        className="file-uploader__custom-button"
      >
        Загрузить файл
      </label>
      <input
        id="file-loader-button"
        type="file"
        className="file-uploader__upload-button"
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default FileUploader;
