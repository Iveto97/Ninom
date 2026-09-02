
let img = [
  '/images/Vratsa.jpg',
  '/images/Troyan Monastery.jpg',
  '/images/Tylenovo.jpg'
];

export default function ImgCarousel({ index }) {

  const name = img[index].split('/').pop().split(".")[0].replace(/_/g, " ");
  
    return (
        <div className="img-box">
          <img src={img[index]} alt={`${name}`} />
        </div>
    );
  }