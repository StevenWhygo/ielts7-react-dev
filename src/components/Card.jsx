const Card = ({ children, props }) => {
  const { className } = props;
  return <div className={`card ${className}`}>{children}</div>;
};
export default Card;
