import "../../styles/Input.css";

function Input({ placeholder, value, onChange }) {
    return <input className="input" type="text" placeholder={placeholder} value={value} onChange={onChange} />;
}

export default Input;
