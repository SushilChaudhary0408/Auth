const Button = ({ label, clickHandler }) => {
    return (
        <button type="button" onClick={clickHandler} className="bg-slate-800 text-white font-bold text-lg rounded-lg py-3">
            { label }
        </button>
    )
}

export default Button;