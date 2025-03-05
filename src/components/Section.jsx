import { Link } from 'react-router-dom';
import Icon from './Icon';

const Section = ({ data }) => {
  const { title, name, items, text } = data;

  return (
    <section className="mb-8">
      <h2 className="border-b pb-2 mb-4 text-2xl font-semibold">{title}</h2>
      {name === 'information' ? (
        <ul className="pl-2">
          {items.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  className="inline-block py-2 w-full text-lg"
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
      ) : name === 'social' ? (
        <ul className="flex gap-8 pl-2 mb-4">
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
                  <Icon
                    type={item.icon.toLowerCase()}
                    value={{ size: '2.5rem' }}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
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
      )}
    </section>
  );
};
export default Section;
