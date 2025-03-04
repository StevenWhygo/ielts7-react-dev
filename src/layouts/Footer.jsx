import { useState, useEffect } from 'react';
import Section from '../components/Section';

const Footer = ({ sections }) => {
  const [section, setSection] = useState(null);

  return (
    <footer className="w-full min-w-[375px] max-w-[1563px] min-h-12 p-4 mx-auto mt-4 bg-slate-800 text-slate-100">
      <div className="w-full flex flex-col">
        {sections.map((section, i) => {
          return <Section key={i} data={section} />;
        })}
      </div>
      <div className="text-center w-full text-xs">
        Copyright &copy;{new Date().getFullYear()} IELTS7 Taipei All rights
        reserved
      </div>
    </footer>
  );
};
export default Footer;
