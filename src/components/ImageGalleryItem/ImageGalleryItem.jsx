import css from '../../styles.module.css';

export const ImageGalleryItem = ({url, id, handleClick}) => {


    return(
        
        <li key={id} onClick={handleClick} className={css.ImageGalleryItem}>
  <img className={css.ImageGalleryItemImage } src={url} alt='' />
</li>
    )

}