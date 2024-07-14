import { useState } from 'react'
import PieChartus from './Piechartus'
import styles from './TopSection.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
const TopSection = () => {
  const [balance, setBalance] = useState(4500);
  const [expenseAmount, setExpenseAmount] = useState(500);
  // local storage function implementation
  const handleBalance =()=>{
   const newBalance = localStorage.getItem(balance)
   console.log(newBalance)
  }
 return (
    
    <div className={styles.container}>
    <div className='row w-100'>
       <div className='col-sm-12 col-md-6 col-lg-4 mb-3'>
        <div className={styles.wallatBalnce}>
            <h3>Wallet Balance:<span className={styles.spantextBalance}> ₹{balance}</span></h3>
            <button className={styles.btnBalance} onClick={handleBalance}>+ Add Income</button>
         </div>
        </div>
         <div className='col-sm-12 col-md-6 col-lg-4 mb-3'> 
        <div className={styles.addExpenses}>
            <h3>Expenses:<span className={styles.spantextExpanse}> ₹{expenseAmount}</span></h3>
            <button className={styles.btnExpense}>+ Add Expense</button>
        </div> 
       </div>
      <div className='col-sm-12 col-md-6 col-lg-4 mb-3'> 
       <div className={styles.PieChartus}>
       <PieChartus/>
       <div className={styles.legend}> 
          <p><span style={{background:'#A000FF'}}></span>Food</p>
          <p><span style={{background:'#FF9304'}}></span>Entertainment</p>
          <p><span style={{background:'#FDE006'}}></span>Travel</p>
          </div>
       </div>
        </div>
       </div>
    </div>
    
  )
}

export default TopSection