/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from './Button.module.css';

const Buttons = ({ type, onClose, onSubmit }) => {
const [title, setTitle] = useState('');
const [amount, setAmount] = useState('');
const [price, setPrice] = useState('');
const [date, setDate] = useState('');
const [selectCategory, setSelectCategory] = useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
     if(type === 'income'){
      onSubmit(amount)
     }else if(type=== 'expense'){
      onSubmit(price)
     }
  }
  return (
    <div className={styles.backgroundBody}>
        <form className={styles.formBox} onSubmit={handleSubmit}>
          {type==='income' && (
            <div>
            <h1>Add Balance</h1>
            <input type="number"
             placeholder="Income Amount" 
             value={amount} 
             onChange={(e)=>setTitle(e.target.value)}  
             required />
             <button className={styles.btn}>Add Balance</button>
             </div>
           )}
           { type ==='expense' && (
            <div>
             <h1>Add Expenses</h1>
             <input type="text" placeholder="Title" value={title} required/>
             <input type="number" placeholder="Price" value={price} required/>
             <input type="text" placeholder="Select Category" value={selectCategory} />
             <input type="date" placeholder="month/dd/yyyy" value={date}/>
             <button className={styles.btn}>Add Expenses</button>
             <button>Cancel</button>
             </div>
           )}
            <button type='button' onClick={onClose}>Cancel</button>
          </form>
          
    </div>
  )
}

export default Buttons