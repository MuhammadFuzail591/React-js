/* eslint-disable react/prop-types */

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  expenses,
  rowId,
  setExpense,
  setEditingRowId,
}) {
  if (!menuPosition.x) return;
  return (
    <div
      className="context-menu"
      style={{ top: menuPosition.y, left: menuPosition.x }}
    >
      <div
        onClick={() => {
          const { title, category, amount } = expenses.find(
            (exp) => exp.id === rowId
          );
          setExpense({ title, category, amount });
          setEditingRowId(rowId);
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setMenuPosition({});
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
        }}
      >
        Delete
      </div>
    </div>
  );
}
