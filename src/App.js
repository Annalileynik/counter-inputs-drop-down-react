import {useState} from "react";

function App() {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [operand, setOperand] = useState('*')
    const [result, setResult] = useState(0)

    const onchangeNumber1 = (event) => {
        event.target.value == +event.target.value
            ? event.target.value = event.target.value
            : event.target.value = 0
        setNumber1(+event.target.value)
      changeNumberOrOperand(+event.target.value,number2,operand)
    }
    const onchangeNumber2 = (event) => {
        event.target.value == +event.target.value
            ? event.target.value = event.target.value
            : event.target.value = 0
        setNumber2(+event.target.value)
      changeNumberOrOperand(number1,+event.target.value,operand)
    }

    const changeOperand = (event) => {
        const operand = event.target.value
        setOperand(operand);
      changeNumberOrOperand(number1,number2,operand)
    }

  const changeNumberOrOperand = (n1,n2,o) => {
      if (o === '+') setResult(n1+n2)
      if (o === '-') setResult(n1-n2)
      if (o === '*') setResult(n1*n2)
      if (o === '/') setResult(n1/n2)
  }
    return (
        <div>
            <input value={number1} onChange={onchangeNumber1}/>
            <select value={operand} onChange={changeOperand}>
                <option value="+"><strong> + </strong></option>
                <option value="-"><strong> - </strong></option>
                <option value="*"><strong> * </strong></option>
                <option value="/"><strong> / </strong></option>
            </select>

            <input value={number2} onChange={onchangeNumber2}/>
            <hr/>
            {number1} {operand} {number2} = {result}
        </div>
    );
}

export default App;
