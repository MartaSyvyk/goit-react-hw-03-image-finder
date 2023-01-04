import css from '../../styles.module.css';

import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({data, handleClick}) => {
    return (<ul className={css.ImageGallery}>
   { data.map(object => ( <ImageGalleryItem key={object.id}  url={object.webformatURL}  handleClick={() => handleClick(object.id)}/>
   ))  }
  </ul>)
}