import Button from '../Button/Buttons';
import styles from './Card.module.css';

  const Card=({ title, money, buttonText, buttonType ,handleClick, success=true }) =>{
    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>
                {`${title}: `}
                <span className={success ? styles.success : styles.failure}>
                    {`₹${money}`}
                </span>
            </h3>
            <Button handleClick={handleClick} style={buttonType}>{buttonText}</Button>
        </div>
    )
}
export default Card