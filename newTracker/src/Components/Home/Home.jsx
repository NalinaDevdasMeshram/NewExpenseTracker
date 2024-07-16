import { useState } from "react"
import BottomSection from "../BottomSection/BottomSection"
import Heading from "../Heading/Heading"
import TopSection from "../TopSection/TopSection"
import { useEffect } from "react"
const Home = () => {
   const [balance , setBalance] = useState(4500)
   const [expenseAmount,  setExpenseAmount] = useState(500)
   useEffect(()=>{
    const saveBalance = localStorage.getItem('balance')
    console.log(saveBalance)
     if(saveBalance){
      setBalance(parseFloat(saveBalance))
     }
   }, [])
   useEffect(()=>{
    localStorage.setItem('balance', balance)
   },[balance])

   const handleAddIncome = (amount) => {
    setBalance(balance + parseFloat(amount));
  };

  const handleAddExpense = (amount) => {
    setExpenseAmount(expenseAmount + parseFloat(amount));
  };
return (
    <div>
        <Heading/>
        <TopSection  
        balance={balance} 
        expenseAmount={expenseAmount}
        onAddIncome={handleAddIncome}
        onAddExpense={handleAddExpense}/>
        <BottomSection/>
    </div>
  )
}

export default Home