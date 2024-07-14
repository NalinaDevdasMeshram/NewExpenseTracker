import { useState } from "react";
import styles from './Button.module.css';

const Button = () => {
const [title, setTitle] = useState('');
const [amount, setAmount] = useState('');
const [price, setPrice] = useState('');
const [date, setDate] = useState('');
const [selectCategory, setSelectCategory] = useState('');
  return (
    <div className={styles.backgroundBody}>
        <form className={styles.formBox}>
            <h1>Add Balance</h1>
            <input type="number" placeholder="Income Amount" value={amount}/>
             <button className={styles.btn}>Add Balance</button>
             <button>Cancel</button>
             <h1>Add Expenses</h1>
             <input type="text" placeholder="Title" value={title} required/>
             <input type="number" placeholder="Price" value={price} required/>
             <input type="text" placeholder="Select Category" value={selectCategory} />
             <input type="date" placeholder="month/dd/yyyy" value={date}/>
             <button className={styles.btn}>Add Expense</button>
             <button>Cancel</button>
            
        </form>
    </div>
  )
}

export default Button