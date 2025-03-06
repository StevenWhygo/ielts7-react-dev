import CardHeader from './services/CardHeader';
import CardBody from './services/CardBody';
import CardFooter from './services/CardFooter';

const Card = (props) => {
  const { style, fill, ...rest } = props;
  console.log(rest);
  
  return (
    <article
      className={style}
      // testimonial card background color
      style={fill && { backgroundColor: fill }}
    >
      <CardHeader {...rest} />
      <CardBody {...rest} fill={fill} />
      <CardFooter {...rest} />
    </article>
  );
};
export default Card;
