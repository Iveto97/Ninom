
let img = ['Vratsa.jpg', 'Troyan Monastery.jpg', 'Tylenovo.jpg'];

export default function ImgCarousel({ index }) {

    return (
        <div className="img-box">
          <img src={`/public/images/${img[index]}`} alt="" />
        </div>
    );
  }