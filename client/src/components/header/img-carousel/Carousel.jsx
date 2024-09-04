
let img = ['Vratsa.jpg', 'Troyan Monastery.jpg', 'Tylenovo.jpg'];

export default function ImgCarousel({ index }) {

    return (
      <div > 
        <div className="img-box">
          <img src={`./images/${img[index]}`} alt="" />
        </div>
      </div>
    );
  }