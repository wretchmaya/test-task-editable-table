const Button = ({ text, clickHandler, type = '', children, className = '' }) => {
    return (
        <button onClick={clickHandler} type={type} className={className}>
            {text}
            {children}
        </button>
    );
};
export default Button;
