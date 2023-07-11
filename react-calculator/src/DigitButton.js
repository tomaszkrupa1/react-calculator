import { ACTIONS } from "./App"

function DigitButton({dispatch, DigitButton}) {
return <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>{digit}</button>
}

export default DigitButton