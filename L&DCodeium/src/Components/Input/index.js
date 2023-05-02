import React from 'react';

function Input(props) {
  const { id, label, name, type, value, placeholder, onChange ,error} = props;

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="form-control"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;