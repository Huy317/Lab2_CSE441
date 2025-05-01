import React, { useState } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import style from "./style";

const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const handleNumberInput = (num: number) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num.toString());
    }
  };
  const handleOperatorInput = (operator: string) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    }
    if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    }
    if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    }
    if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator('');
    setFirstValue('');
  };
  const handleClear = () => {
    setDisplayValue('0');
    setOperator('');
    setFirstValue('');
  };

  return (
    <View style={style.container}>
      <Text style={style.display}>{displayValue}</Text>
      <View style={style.buttonContainer}>
        <View style={style.row}>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput(7)}>
            <Text style={style.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput(8)}>
            <Text style={style.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput(9)}>
            <Text style={style.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button, style.operatorButton]} onPress={() => handleOperatorInput('/')}>
            <Text style={style.operatorText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={style.row}>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput(4)}>
            <Text style={style.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput(5)}>
            <Text style={style.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput(6)}>
            <Text style={style.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button, style.operatorButton]} onPress={() => handleOperatorInput('*')}>
            <Text style={style.operatorText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={style.row}>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput(1)}>
            <Text style={style.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput(2)}>
            <Text style={style.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => handleNumberInput(3)}>
            <Text style={style.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button, style.operatorButton]} onPress={() => handleOperatorInput('-')}>
            <Text style={style.operatorText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={style.row}>
          <TouchableOpacity style={[style.button, style.zeroButton]} onPress={() => handleNumberInput(0)}>
            <Text style={style.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button, style.operatorButton]} onPress={() => handleOperatorInput('+')}>
            <Text style={style.operatorText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[style.button, style.equalsButton]} onPress={handleEqual}>
            <Text style={style.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={style.row}>
          <TouchableOpacity style={[style.button, style.clearButton]} onPress={handleClear}>
            <Text style={[style.buttonText]}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );
};

export default App;