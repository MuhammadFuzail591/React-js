/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "./Input";
import Select from "./SelectMenu";

export default function ExpenseForm({
  expense,
  setExpense,
  setExpenses,
  editingRowId,
  setEditingRowId,
}) {
  const validationConfig = {
    title: [
      { required: true, message: "Title is required" },
      { minLength: 5, message: "Title should be at least 5 characters long" },
    ],
    category: [{ required: true, message: "Please select the category" }],
    amount: [
      { required: true, message: "Please enter an amount" },
      { pattern: /^[0-9]+$/, message: "Amount should be a number" },
    ],
  };

  const [error, setErrors] = useState({});

  const validation = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].forEach((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }

        if(rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    // if (formData.title === "") {
    //   errorsData.title = "Title is required";
    // }

    // if (formData.category === "") {
    //   errorsData.category = "Category is required";
    // }

    // if (formData.amount === "") {
    //   errorsData.amount = "Amount is required";
    // }

    setErrors(errorsData);
    return errorsData;
  };

  const handleInput = (e) => {
    e.preventDefault();

    const validationResults = validation(expense);

    if (Object.keys(validationResults).length) return;

    if (editingRowId) {
      setExpenses((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...expense, id: editingRowId };
          }
          return prevExpense;
        })
      );

      setEditingRowId("");

      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleEvent = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({ ...prevState, [name]: value }));
    setErrors({});
  };
  return (
    <form className="expense-form" onSubmit={handleInput}>
      <Input
        id="title"
        label="Title"
        name="title"
        value={expense.title}
        onChange={handleEvent}
        error={error.title}
      />

      <Select
        id="category"
        label="Category"
        name="category"
        value={expense.category}
        onChange={handleEvent}
        hiddenValue={"Select Category"}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        error={error.category}
      />

      <Input
        id="amount"
        label="Amount"
        name="amount"
        value={expense.amount}
        onChange={handleEvent}
        error={error.amount}
      />

      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
}
