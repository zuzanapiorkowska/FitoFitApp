import classNames from "classnames";
import { PropsWithChildren } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-white h-screen w-full flex flex-col'>
      <Header />
      <main
        className={classNames(
          "relative flex w-full h-full flex-col items-center justify-center p-4 sm:p-8 overflow-hidden",
          "bg-pattern bg-main text-white"
        )}>
        {children}
      </main>
      <Footer />
    </div>
  );
};
