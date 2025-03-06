import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import useTranslation from '../../hooks/useTranslation';
import useButton from '../../hooks/context/useButton';
const CardFooter = (props) => {
  const { fill, links, type, trial } = props;
  const { translate } = useTranslation('global');
  const navigate = useNavigate();
  console.log(trial);

  return type === 'course' ? (
    <footer className="px-4 mb-4 flex flex-col gap-2">
      {trial && (
        <Button
          layout="link"
          name="link"
          value={translate('button.course')}
          handleClick={() => navigate(trial.url)}
        />
      )}
      <Button
        layout="cart"
        name="cart"
        value={translate('button.cart')}
        handleClick={() => setUpdateCart(type)}
      />
    </footer>
  ) : type === 'mocktest' ? (
    <footer className="flex gap-2 px-4 pb-4">
      {trial ? (
        // className="relative flex justify-center items-center w-full py-2 text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold rounded-sm"
        <Button
          layout="link"
          name="link"
          value={translate('button.test')}
          handleClick={() => navigate(trial.url)}
        />
      ) : (
        <Link
          className="relative flex justify-center items-center w-full py-2 text-center border-blue bg-green-600 text-slate-50 text-base font-semibold rounded-sm"
          to={
            {
              // pathname: links.signup.url,
            }
          }
        >
          {/* {links.signup.text} */}
        </Link>
      )}
    </footer>
  ) : type === 'teacher' ? (
    <footer className="flex px-4 pb-4">
      <Link
        className="relative mt-auto inline-block w-full py-2 rounded-sm text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold opacity-100"
        to={
          {
            // pathname: links.action.url,
          }
        }
      >
        {links.action.text}
      </Link>
    </footer>
  ) : (
    <footer className="relative" style={{ backgroundColor: fill }}></footer>
  );
};
export default CardFooter;
