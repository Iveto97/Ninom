import { Link } from 'react-router-dom';
import styles from './DestinationList.module.css'

export default function DestinationList({ destination }) {
    return (
        <div className={styles['box']}>
            <img src={destination.img} alt="" />
            <div className={styles['link_box']}>
              <h5>{destination.title}</h5>
              <Link to={`/destination/${destination.id}/details`}>Виж</Link>
            </div>
          </div>
    );
}