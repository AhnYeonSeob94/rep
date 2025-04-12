import {create} from "zustand"

//decrease 만들기
const calculatorStore = create((set)=>({
    current: '0',     // 현재 입력 중인 숫자
    previous: null,   // 이전 숫자
    operator: null,   // 현재 선택된 연산자
    expression: '',   // 누적계산식
    result: '',

    input: (value) => set((state) => ({
        current: state.current === '0' ? value : state.current + value,
    })),

    setOperator: (op) => set((state) => {
        let newExpr = state.expression;
        if (state.operator && state.previous !== null) {
            const computed = compute(state.previous, state.current, state.operator)
            return {
                previous: computed,
                current: '',
                operator: op,
                result: computed.toString(),
                expression: `${state.expression} ${state.current} ${op}`
            }
        }
        else {
            newExpr = `${state.expression} ${state.current} ${op}`.trim()
            return {
              previous: state.current,
              current: '',
              operator: op,
              expression: newExpr
            }
        }
    }),

    square: () => set((state) => {
        const num = parseFloat(state.current);
        const squared = Math.pow(num, 2);
        return {
          current: squared.toString(),
          result: squared.toString(),
          expression: `${state.expression} ${state.current}²`.trim()
        }
    }),

    equal: () => set((state) => {
        if (state.operator && state.previous !== null) {
            const computed = compute(state.previous, state.current, state.operator)
            return {
                current: computed.toString(),
                previous: null,
                operator: null,
                result: computed.toString(),
                expression: `${state.expression} ${state.current} = ${computed}`
            }
        }
        return state
    }),

    clear: () => set({ current: '0', previous: null, operator: null, result: '' , expression: ''}),
    }))

    const compute = (a, b, operator) => {
        a = parseFloat(a)
        b = parseFloat(b)
        switch (operator) {
          case '+': return a + b
          case '-': return a - b
          case '*': return a * b
          case '/': return b !== 0 ? a / b : 'NaN'
          default: return b
        }
  }

export default calculatorStore;