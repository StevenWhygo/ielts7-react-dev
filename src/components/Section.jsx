import { useState, useEffect } from 'react';
import useIcons from '../hooks/useIcons';

const Section = ({ data }) => {
  const { title, ...rest } = data;

  const { fetchIcon } = useIcons();

  const sections = (props) => {
    const { name, items, text } = props;

    switch (name) {
      case 'social':
        return (
          <ul>
            {items.map((item, i) => {
              return (
                <li className="inline">
                  <a href={item.url} title={item.icon} target="_blank">
                    {fetchIcon(item.icon.toLowerCase())}
                  </a>
                </li>
              );
            })}
          </ul>
        );
      case 'information':
        return (
          <ul>
            {items.map((item, i) => {
              return (
                <li>
                  <a href={item.url} title={item.text}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        );
      case 'connect':
        return (
          <div>
            <p>{text}</p>
            <form>
              <div className="form-element">
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-element">
                <label htmlFor="email">Email*</label>
                <textarea name="message" id="message" />
              </div>
            </form>
          </div>
        );
      default:
        return 'error';
    }
  };

  useEffect(() => {}, []);

  return (
    <section>
      <h2>{title}</h2>
      {sections(rest)}
    </section>
  );
};
export default Section;
