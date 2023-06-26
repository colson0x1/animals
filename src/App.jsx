function useState(defaultValue) {
  return {
    stateVariable: defaultValue,
    stateSetter: () => {},
  };
}

function App() {
  const stateHook = useState(0);

  // Using Object dot notation
  const value = stateHook.stateVariable;
  const setValue = stateHook.stateSetter;
  console.log(value, setValue);
  // output
  // 0 () => {}

  // Using Object Destructuring
  const { stateVariable: valueX, stateSetter: setValueX } = useState(0);
  console.log(valueX, setValueX);
  // output
  // 0 () => {}

  // Using shorthand on Object Destructuring
  const { stateVariable, stateSetter } = useState(0);
  console.log(stateVariable, stateSetter);
  // output
  // 0 () => {}
}

export default App;
