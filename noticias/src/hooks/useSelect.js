import React, { useState } from "react";

const useSelect = (stateInicial, options) => {
  // State del custom hook
  const [state, setState] = useState(stateInicial);

  const SelectNews = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {options.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNews];
};

export default useSelect;
