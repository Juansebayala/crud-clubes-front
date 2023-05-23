import { useState } from 'react';

function Input({ type, id, name, valueInicial = '', required = false }) {
  const [value, setValue] = useState(valueInicial);

  const manejarValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      className="form-control form-control-lg"
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={manejarValue}
      required={required}
    />
  );
}

export default Input;
