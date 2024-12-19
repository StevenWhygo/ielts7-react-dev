const Card = ({ children, props }) => {
  const { className } = props;
  return <article className={`cards ${className}`}>{children}</article>;
};
export default Card;
