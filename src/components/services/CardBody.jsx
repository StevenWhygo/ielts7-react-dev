import { Link } from 'react-router-dom';
import Icon from '../Icon';

const iconStyle = { color: '#0C0A09', size: '1.5rem' };
const CardBody = (props) => {
  const { type, list, links, rate, fill, title, color, subtitle, text } = props;
  return type === 'course' ? (
    <main className="p-4">
      <ul className="flex flex-col border rounded-sm border-b-0">
        {list.map((item, i) => {
          return (
            <li key={i} className="list__item flex items-center w-full py-1">
              <span className="px-2">
                <Icon type={item.icon} value={iconStyle} />
              </span>
              <span
                className={`${
                  item.icon === 'price'
                    ? 'text-[17px] font-bold'
                    : 'text-[15px] font-semibold'
                } ml-4 `}
              >
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
    </main>
  ) : type === 'mocktest' ? (
    <main className="p-4">
      <ul className="flex flex-col border rounded-sm">
        {list.map((item, i) => {
          return (
            <li key={i} className="list__item flex items-center w-full py-1">
              <span className="px-2">
                <Icon type={item.icon} value={iconStyle} />
              </span>
              <span
                className={`${
                  item.icon === 'price'
                    ? 'text-[17px] font-bold'
                    : 'text-[15px] font-semibold'
                } ml-4 `}
              >
                {item.text}
              </span>
            </li>
          );
        })}
      </ul>
    </main>
  ) : type === 'teacher' ? (
    <main className="flex flex-col justify-between px-4 text-base">
      <p className="leading-snug pl-4 min-h-[88px] border-l">
        {text}
        <Link
          className="mx-2"
          to={{
            pathname: links.page.url,
          }}
        >
          <span className="font-semibold">{links.page.text}</span>
        </Link>
      </p>
      <p className="text-center py-2 my-4 border rounded-sm">
        <span className="font-semibold">{rate.title}</span> {rate.text}
      </p>
    </main>
  ) : (
    <main className="relative">
      <svg
        className="mt-[-90px] mb-[-1px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="350 50 1000 200"
      >
        <path
          fill={fill}
          fillOpacity="1"
          d="M0,192L60,165.3C120,139,240,85,360,74.7C480,64,600,96,720,138.7C840,181,960,235,1080,245.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <div
        className={`p-6 ${color}`}
        style={{ backgroundColor: fill, quotes: "'\\00AB' '\\00BB'" }}
      >
        <p className={`italic leading-6`}>
          <q>{text}</q>
        </p>
        <h3 className="text-base p-2 text-right">&#8211; {title}</h3>
      </div>
    </main>
  );
};

export default CardBody;
