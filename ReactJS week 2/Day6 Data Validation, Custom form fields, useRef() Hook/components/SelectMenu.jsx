/* eslint-disable react/prop-types */

function Select({
  id,
  label,
  name,
  value,
  onChange,
  hiddenValue,
  options,
  error,
}) {
  return (
    <div className="input-container">
      <label htmlFor="category">{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {
          hiddenValue && <option value="" hidden>
          {hiddenValue}
        </option>
        }
        
        {/* <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option> */}

        {options.map((item) => {
          return (
            <option key={item.toLowerCase()} value={item.toLowerCase()}>
              {item}
            </option>
          );
        })}
      </select>

      <p className="error">{error}</p>
    </div>
  );
}

export default Select;
