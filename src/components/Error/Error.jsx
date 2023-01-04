import css from '../../styles.module.css';
export const FetchError = ({errorMessage}) => {
    return (
        <div className={css.ErrorContainer}><p>No results found on your request '{errorMessage}'</p></div>
    )
}