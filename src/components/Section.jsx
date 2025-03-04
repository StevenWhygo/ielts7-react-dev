import { Link } from 'react-router-dom';
import useIcons from '../hooks/useIcons';

const Section = ({ data }) => {
  const { title, ...rest } = data;

  const { fetchIcon } = useIcons();

  const sections = (props) => {
    const { name, items, text } = props;

    switch (name) {
      case 'social':
        return (
          <ul className="pl-2 flex gap-8">
            {items.map((item, i) => {
              return (
                <li key={i} className="inline-block">
                  <a
                    className=""
                    href={item.url}
                    title={item.icon}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {fetchIcon(item.icon.toLowerCase(), {
                      size: '2.5rem',
                    })}
                  </a>
                </li>
              );
            })}
          </ul>
        );
      case 'information':
        return (
          <ul className="pl-2">
            {items.map((item, i) => {
              return (
                <li key={i} className="flex items-center">
                  <Link
                    className="flex-1 h-full min-h-8"
                    to={{
                      pathname: item.url,
                    }}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        );
      case 'connect':
        return (
          <div className="px-2">
            <p className="mb-4">{text}</p>
            <form>
              <div className="form-element">
                <label className="block mb-2" htmlFor="email">
                  Email
                </label>

                <input
                  className="inline-block p-2 mr-4 rounded-sm w-2/3 text-stone-50"
                  type="email"
                  name="email"
                  id="email"
                />
                <button className="border rounded-sm px-4 py-2 " type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return 'error';
    }
  };

  return (
    <section className="mb-8">
      <h2 className="border-b pb-2 mb-6 text-lg font-semibold">{title}</h2>
      {sections(rest)}
    </section>
  );
};
export default Section;
