const Button = ({ children, className = 'btn-primary', type = 'button', onClick }) => (
  <button className={className} type={type} onClick={onClick}>
    {children}
  </button>
)

export default Button
