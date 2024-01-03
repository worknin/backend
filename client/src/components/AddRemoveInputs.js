import React, { useState } from 'react';
import '../assets/css/AddRemoveInputs.css';

export default function AddRemoveInputs() {
  const [state, setState] = useState([]);

  const add = () => {
    setState([...state, '']);
  };

  const remove = (i) => {
    const row = [...state];
    console.log(i);
    row.splice(i, 1);
    setState(row);
  };

  const handleChange = (index, event) => {
    const list = [...state];
    list[index] = event.target.value;
    setState(list);
    //console.log(state);
  };

  return (
    <div className="container">
      <div>
        {state.map((str, i) => (
          <div>
            <input
              placeholder="Name"
              onChange={(event) => handleChange(i, event)}
            />
            <button onClick={() => remove(i)}>x</button>
          </div>
        ))}
        <button onClick={add}>Add</button>
      </div>

      <div>
        {state.map((str, i) => (
          <p>{str}</p>
        ))}
      </div>
    </div>
  );
}
