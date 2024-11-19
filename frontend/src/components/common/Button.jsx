
const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyle = 'px-4 py-2.5 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500',
    }
  
    return (
      <button
        className={`${baseStyle} ${variants[variant]} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    )
  }
  
  export default Button