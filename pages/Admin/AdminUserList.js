import React from "react";
import NewUser from "./NewUser/NewUser";
import NewUserForm from "./NewUser/NewUserForm";

const AdminUserList = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewUser onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />{" "}
    </div>
  );
};

export default App;
