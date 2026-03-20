import { useState, useCallback, useEffect, useRef } from 'react';

const CalculatorContent = () => {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [fresh, setFresh] = useState(true);
  const containerRef = useRef(null);

  const inputDigit = useCallback((d) => {
    if (fresh) {
      setDisplay(d === '.' ? '0.' : d);
      setFresh(false);
    } else {
      if (d === '.' && display.includes('.')) return;
      setDisplay(display + d);
    }
  }, [display, fresh]);

  const inputOp = useCallback((nextOp) => {
    const current = parseFloat(display);
    if (prev !== null && op && !fresh) {
      let result;
      switch (op) {
        case '+': result = prev + current; break;
        case '-': result = prev - current; break;
        case '*': result = prev * current; break;
        case '/': result = current !== 0 ? prev / current : 'Error'; break;
        default: result = current;
      }
      setDisplay(String(result));
      setPrev(result === 'Error' ? null : result);
    } else {
      setPrev(current);
    }
    setOp(nextOp);
    setFresh(true);
  }, [display, prev, op, fresh]);

  const calculate = useCallback(() => {
    if (prev === null || !op) return;
    const current = parseFloat(display);
    let result;
    switch (op) {
      case '+': result = prev + current; break;
      case '-': result = prev - current; break;
      case '*': result = prev * current; break;
      case '/': result = current !== 0 ? prev / current : 'Error'; break;
      default: result = current;
    }
    setDisplay(String(result));
    setPrev(null);
    setOp(null);
    setFresh(true);
  }, [display, prev, op]);

  const clear = useCallback(() => {
    setDisplay('0');
    setPrev(null);
    setOp(null);
    setFresh(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check if the calculator window is focused (closest .mac-window is on top)
      const calcEl = containerRef.current;
      if (!calcEl) return;
      const win = calcEl.closest('.mac-window');
      if (!win) return;
      // Only respond if no other input/textarea is focused
      const active = document.activeElement;
      if (active && (active.tagName === 'TEXTAREA' || active.tagName === 'INPUT')) return;

      const key = e.key;
      if (key >= '0' && key <= '9') {
        e.preventDefault();
        inputDigit(key);
      } else if (key === '.') {
        e.preventDefault();
        inputDigit('.');
      } else if (key === '+') {
        e.preventDefault();
        inputOp('+');
      } else if (key === '-') {
        e.preventDefault();
        inputOp('-');
      } else if (key === '*' || key === 'x') {
        e.preventDefault();
        inputOp('*');
      } else if (key === '/') {
        e.preventDefault();
        inputOp('/');
      } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        calculate();
      } else if (key === 'Escape' || key === 'c' || key === 'C') {
        e.preventDefault();
        clear();
      } else if (key === 'Backspace') {
        e.preventDefault();
        setDisplay((d) => d.length > 1 ? d.slice(0, -1) : '0');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [inputDigit, inputOp, calculate, clear]);

  return (
    <div className="calc" ref={containerRef}>
      <div className="calc-display" aria-live="polite" aria-label="Calculator display">{display}</div>
      <div className="calc-buttons">
        <button className="calc-btn calc-fn" aria-label="Clear" onClick={clear}>C</button>
        <button className="calc-btn calc-fn" aria-label="Equals" onClick={() => inputOp('=')}>=</button>
        <button className="calc-btn calc-op" aria-label="Divide" onClick={() => inputOp('/')}>/</button>
        <button className="calc-btn calc-op" aria-label="Multiply" onClick={() => inputOp('*')}>×</button>

        <button className="calc-btn" aria-label="7" onClick={() => inputDigit('7')}>7</button>
        <button className="calc-btn" aria-label="8" onClick={() => inputDigit('8')}>8</button>
        <button className="calc-btn" aria-label="9" onClick={() => inputDigit('9')}>9</button>
        <button className="calc-btn calc-op" aria-label="Subtract" onClick={() => inputOp('-')}>–</button>

        <button className="calc-btn" aria-label="4" onClick={() => inputDigit('4')}>4</button>
        <button className="calc-btn" aria-label="5" onClick={() => inputDigit('5')}>5</button>
        <button className="calc-btn" aria-label="6" onClick={() => inputDigit('6')}>6</button>
        <button className="calc-btn calc-op" aria-label="Add" onClick={() => inputOp('+')}>+</button>

        <button className="calc-btn" aria-label="1" onClick={() => inputDigit('1')}>1</button>
        <button className="calc-btn" aria-label="2" onClick={() => inputDigit('2')}>2</button>
        <button className="calc-btn" aria-label="3" onClick={() => inputDigit('3')}>3</button>
        <button className="calc-btn calc-eq calc-tall" aria-label="Equals" onClick={calculate}>=</button>

        <button className="calc-btn calc-wide" aria-label="0" onClick={() => inputDigit('0')}>0</button>
        <button className="calc-btn" aria-label="Decimal point" onClick={() => inputDigit('.')}>.</button>
      </div>
    </div>
  );
};

export default CalculatorContent;
