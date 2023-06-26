const FotoListItem = (props) => {
  return (
    <div className="file-uploader__preview">
      <img
        src={props.link}
        className="file-uploader__preview-img"
        alt="preview"
      />
      <div className="file-uploader__file-name">{props.name}</div>
    </div>
  );
};

export default FotoListItem;
