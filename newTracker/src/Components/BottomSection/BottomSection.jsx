// import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import styles from './BottomSection.module.css';
import {Box, Card, Typography,Stack, Button} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CreateIcon from '@mui/icons-material/Create';


const BottomSection = () => {
  const [selectCategory, SetselectCategory] = useState('');
  const [date , setDate] = useState('');
  const [amount, setAmount] = useState('');
  return (
    <Box>
      <Box className={styles.recentExpense}>
      <Typography variant='h5' className={styles.recentTransaction}>
          Recent Transaction
          </Typography>
          <Typography variant='h5' className={styles.topExpense}>
          Top Expenses
        </Typography>
       
      </Box>
      <Box  className={styles.Bottomcontainer}sx={{ p: 2}}>
      <Stack direction={{xs:"column", md:"row"}}
         spacing={5}
         display='flex'
         justifyContent='space-between'
         alignItems= 'center'>
        <Card className={styles.cards}>
        <Box className={styles.transactiontext}>
        <Typography>samosa</Typography>
        <Typography>month dd yyyy</Typography>
        <Typography>amount</Typography>
        <Button><HighlightOffIcon/></Button>
        <Button><CreateIcon/></Button>
        <hr/>
        </Box>
      </Card>
      <Card className={styles.cards}>
      <Box className={styles.expenseBar}>
        <span className={styles.expenseCategory}>Entertainment</span>
        <div className={styles.expenseBar} style={{ width: '100%' }}></div>
      </Box>

      <p><span>Food</span></p>
      <p><span>Travel</span></p>
     
      </Card>
     </Stack>
     </Box>
    </Box>
           
  )
}

export default BottomSection