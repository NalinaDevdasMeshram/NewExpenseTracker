import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './BottomSection.module.css';
const BottomSection = () => {
  return (
    <div className={styles.BottomSectionContainer}>
        {/* <div className='row w-100'>
        <div className='col-sm-12 col-md-6 col-lg-4 mb-3'> */}
            <div className={styles.recentExpenses}>
            <h3 className={styles.headingRecent}>Recent Transaction</h3>
            <h3 className={styles.headingExpense}>Top Expenses</h3>
        </div>
        <div className='row w-100'>
        <div className='col-sm-12 col-md-6 col-lg-4 mb-3'>
        <div className={styles.recentTransaction}>
        <div>
              <div>
                <span>Samosa</span>
                <span>March 20, 2024</span>
              </div>
              <span>₹150</span>
            </div>
        </div>
        </div>
        
        <div className='col-sm-12 col-md-6 col-lg-4 mb-3'>
        <div>
           
        <div className={styles.topExpense}>
        <div className={styles.expenseItem}>
              <span className={styles.expenseCategory}>Entertainment</span>
              <div className={styles.expenseBar} style={{ width: '100%' }}></div>
            </div>
            <div className={styles.expenseItem}>
              <span className={styles.expenseCategory}>Food</span>
              <div className={styles.expenseBar} style={{ width: '50%' }}></div>
            </div>
             <div className={styles.expenseItem}>
              <span className={styles.expenseCategory}>Travel</span>
              <div className={styles.expenseBar} style={{ width: '20%' }}></div>
          </div>
        </div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default BottomSection