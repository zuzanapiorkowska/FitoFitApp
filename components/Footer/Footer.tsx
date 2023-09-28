import classNames from "classnames";

export const Footer = () => {
  return (
    <footer
      className={classNames(
        "w-full flex items-center justify-center p-3 text-xs text-center",
        "bg-violetExtraDark text-main"
      )}>
      <p>
        Code by&nbsp; <span className='text-white inline-block'>Zuza Napiórkowska</span>, created
        for the needs of recruitment for my dream job&nbsp; 🖥️
      </p>
    </footer>
  );
};
