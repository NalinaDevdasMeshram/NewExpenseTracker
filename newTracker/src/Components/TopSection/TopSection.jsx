/* eslint-disable react/prop-types */
// import { useState } from 'react'
import {Box, Card, Typography,Stack, Button} from '@mui/material';
import PieChartus from './Piechartus';
 import styles from './TopSection.module.css'
import { useState } from 'react';

import Buttons from '../Button/Buttons';
const TopSection = ({ balance, expenseAmount, onAddIncome, onAddExpense }) => {
  const [showAddIncomeForm, setShowAddIncomeForm] = useState(false)
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false)
   const handleAddIncome=()=>{
     setShowAddIncomeForm(true)
   }
   const handleAddExpense = ()=>{
    setShowAddExpenseForm(true)
   }
   const handlecancelform=()=>{
    setShowAddExpenseForm(true);
    setShowAddIncomeForm(true);
   }
 return (
    <Box>
      <Box className={styles.topcontainer} sx={{ p: 2, height:'auto', bgcolor: '#636363'}}>
       <Stack direction={{xs:"column", md:"row"}}
         spacing={5}
         display='flex'
         justifyContent='space-between'
         alignItems= 'center'
        >
       <Card className={styles.cards} sx={{ bgcolor:'#9B9B9B'}}>
       <Box textAlign='center' style={{margin:'50px'}}>
       <Typography variant='h5' textAlign='center'  color='#ffffff' fontWeight='800'>
        Wallet Balance:<span className={styles.spantext}> ₹{balance}</span>
        <Button className={styles.btnIncome}  variant="contained"  size='large'sx={{borderRadius: 5,  margin:'22px'}} onClick={handleAddIncome}>+ Add Income</Button>
        </Typography>
        </Box>
       </Card>
      
      <Card  className={styles.cards} sx={{ bgcolor:'#9B9B9B'}}>
         <Box textAlign='center' style={{margin:'50px'}}>
      <Typography variant='h5' textAlign='center' color='#ffffff' fontWeight='800'>
        Expenses: <span className={styles.spantext1}>₹{expenseAmount}</span>
       
      </Typography>
      <Button className={styles.btnExpense}  variant="contained"  size='large' sx={{borderRadius: 5, margin:'22px'}} onClick={handleAddExpense}>+ Add Expense</Button>
      </Box>
      </Card>
      <Card className={`${styles.cards} ${styles.pieCard}`} sx={{bgcolor:'#636363'}}>
      <PieChartus/>
      
      <div className={styles.legend}> 
      <p><span style={{background:'#A000FF'}}></span>Food</p>
      <p><span style={{background:'#FF9304'}}></span>Entertainment</p>
      <p><span style={{background:'#FDE006'}}></span>Travel</p>
     </div>
     </Card>
     </Stack>
    </Box> 
    {showAddIncomeForm && <Buttons type='income' onClose={handlecancelform} onSubmit={onAddIncome} />}
      {showAddExpenseForm && <Buttons type='expense' onClose={handlecancelform} onSubmit={onAddExpense} />}
    </Box>
    
    
  )
}

export default TopSection