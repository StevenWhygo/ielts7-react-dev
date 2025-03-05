import { Link } from 'react-router-dom';
import Icon from '../Icon';

const CardFooter = (props) => {
    const {fill, links, type } = props;
    return (
        type === 'course' ? (
            <footer className="flex gap-2 px-4 pb-4">
            {links.trial && (
              <Link
                className="relative flex justify-center items-center w-full py-1 text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold rounded-sm opacity-100"
                to={{
                  pathname: links.trial.url,
                }}
              >
                {links.trial.text}
              </Link>
            )}
            <button className="relative flex justify-center items-center w-full py-1 border-yellow bg-yellow-400 text-slate-50 text-base font-bold rounded-sm opacity-100">
              <Icon type='cart' value={{color: '#1e293b', size: '2rem'}} />
            </button>
          </footer>
        ) : 
        type === 'mocktest' ? (
            <footer className="flex gap-2 px-4 pb-4">
            {links.trial ? (
              <Link
                className="relative flex justify-center items-center w-full py-2 text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold rounded-sm opacity-100"
                to={{
                  pathname: links.trial.url,
                }}
              >
                {links.trial.text}
              </Link>
            ) : (
              <Link
                className="relative flex justify-center items-center w-full py-2 text-center border-blue bg-green-600 text-slate-50 text-base font-semibold rounded-sm opacity-100"
                to={{
                  pathname: links.signup.url,
                }}
              >
                {links.signup.text}
              </Link>
            )}
          </footer>
        ) : 
        type === 'teacher' ? (
            <footer className="flex px-4 pb-4">
            <Link
              className="relative mt-auto inline-block w-full py-2 rounded-sm text-center border-blue bg-sky-600 text-slate-50 text-base font-semibold opacity-100"
              to={{
                pathname: links.action.url,
              }}
            >
              {links.action.text}
            </Link>
          </footer>
        ) : (
            <footer
            className="relative"
            style={{ backgroundColor: fill }}
            ></footer>
        )
      )
};
export default CardFooter;
