import React, { useEffect } from 'react'
import calculatorStore from './stores/calculatorStore'
import './App.css';

const AppCal = () => {
    const {current, result, input, expression, setOperator, equal, clear, square } = calculatorStore();

    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', 'x²', '+',
      ]
    
      const handleClick = (btn) => {
        if (['+', '-', '*', '/'].includes(btn)) {
          setOperator(btn)
        } else if (btn === 'x²') {
          square()
        } else {
          input(btn)
        }
      }
      useEffect(()=>{

        const handleKeyDown = (e) => {
            const key = e.key
            if (!isNaN(key)) {
              input(key)
            } else if (['+', '-', '*', '/'].includes(key)) {
              setOperator(key)
            } else if (key === 'Enter') {
              e.preventDefault()
              equal()
            } else if (key === 'Escape') {
              clear()
            } else if (key === 'Backspace') {
              input(current.slice(0, -1) || '0')
            } else if (key === '^' || key === 'q') {
              square()
            } else if (key === '.') {
              input('.')
            }
          }
      
          window.addEventListener('keydown', handleKeyDown)
          return () => window.removeEventListener('keydown', handleKeyDown)

      },[current])

  return (
    <div className="calculator">
        <h2 style={{ textAlign: 'center' }}>Zustand Calculator</h2>
        <div className="display">
            <div className="expression">{expression}</div>
            <div className="current">입력: {current}</div>
            <div className="result">{result}</div>
        </div>

        <div className="button-grid">
            {buttons.map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
                {btn}
            </button>
            ))}
            <button className="equal-btn" onClick={equal}>=</button>
            <button className="clear-btn" onClick={clear}>초기화</button>
        </div>
    </div>
  )
}

export default AppCal