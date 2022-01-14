import './Trailer.css';

const Trailer = ({ trailerKey }) => {
  return (
    <div className={trailerKey ? 'trailer' : 'trailer--none'}>
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${trailerKey}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  );
};

export default Trailer;
