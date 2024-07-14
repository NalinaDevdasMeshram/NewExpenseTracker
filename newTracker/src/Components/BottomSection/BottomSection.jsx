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
        <div className={styles.recentTransaction}></div>
        </div>
        
        <div className='col-sm-12 col-md-6 col-lg-4 mb-3'>
        <div>
           
        <div className={styles.topExpense}></div>
        </div>
     </div>
    </div>
    </div>
  )
}

export default BottomSection