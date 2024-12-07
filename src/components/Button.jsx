const Button = ({ children, props }) => {
  //   const { id, style, type, action } = props;
  return <button {...props}>{children}</button>;
};
export default Button;
