import Section from '../components/Section';
import useTranslation from '../hooks/useTranslation';
const Footer = () => {
  const { translate } = useTranslation('global');
  return (
    <footer className="w-full min-w-[375px] max-w-[1563px] min-h-12 mx-auto mt-4 bg-slate-800 text-slate-100">
      <div className="w-full flex flex-col">
        {/* columns / rows */}
        {/* general */}
        {translate('footer').map((section, i) => {
          return (
            <Section>
              <h2>{section.title}</h2>
            </Section>
          );
        })}
      </div>
      <div className="text-center w-full text-xs">
        Copyright &copy;2024 IELTS7 Taipei All rights reserved
      </div>
    </footer>
  );
};
export default Footer;
