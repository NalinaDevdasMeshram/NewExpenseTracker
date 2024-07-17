import { useEffect, useState,} from "react";
import Card from '../Card/Card';
import styles from "./Home.module.css";
import TransactionList from "../TransactinList/TransactionList";
import ExpenseForm from '../Form/AddExpenses/ExpenseForm';
import Modals from '../Modal/Modals';
import AddBalance from '../Form/AddBalance/AddBalance';
import PieChart  from "../Piechart/Piechart";
import BarCharts from "../BarChart/BarCharts";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

const calculateCategoryStats = (expenseList) => {
  return expenseList.reduce(
    (acc, item) => {
      acc.spends[item.category] =
        (acc.spends[item.category] || 0) + Number(item.price);
      return acc;
    },
    {
      spends: { food: 0, entertainment: 0, travel: 0 },
    }
  );
};

 const Home = ()=> {
  const [balance, setBalance] = useLocalStorage("balance", 5000);
  const [expenseList, setExpenseList] = useLocalStorage("expenses", []);

  // Show hide modals
  const [isOpenExpense, setIsOpenExpense] = useState(false);
  const [isOpenBalance, setIsOpenBalance] = useState(false);

  const { spends: categorySpends } = calculateCategoryStats(expenseList);

  const expense = expenseList.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const handleAddIncome = () => {
    setIsOpenBalance(true);
  };
  const handleAddExpense = () => {
    setIsOpenExpense(true);
  };

  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>

      {/* Cards and pie chart wrapper */}
      <div className={styles.cardsWrapper}>
        <Card
          title="Wallet Balance"
          money={balance}
          buttonText="+ Add Income"
          buttonType="success"
          handleClick={handleAddIncome}
        />

        <Card
          title="Expenses"
          money={expense}
          buttonText="+ Add Expense"
          buttonType="failure"
          success={false}
          handleClick={handleAddExpense}
        />

        <PieChart
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ]}
        />
      </div>

      {/* Transactions and bar chart wrapper */}
      <div className={styles.transactionsWrapper}>
        <TransactionList
          transactions={expenseList}
          editTransactions={setExpenseList}
          title="Recent Transactions"
          balance={balance}
          setBalance={setBalance}
        />

        <BarCharts
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ]}
        />
      </div>

      {/* Modals */}
      <Modals isOpen={isOpenExpense} setIsOpen={setIsOpenExpense}>
        <ExpenseForm
          setIsOpen={setIsOpenExpense}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          setBalance={setBalance}
          balance={balance}
        />
      </Modals>

      <Modals isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
        <AddBalance setIsOpen={setIsOpenBalance} setBalance={setBalance} />
      </Modals>
    </div>
  );
}

export default Home