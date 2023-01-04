import css from '../../styles.module.css';



export const Button = ({handleClick}) => {
    return (<button id="loadBtn" type="submit" className={css.Button} onClick={handleClick}>
    Load more
  </button>)
}