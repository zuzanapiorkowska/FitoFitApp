import { PropsWithChildren } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-white h-screen w-full flex flex-col'>
      <Header />
      <main className='relative flex w-full h-full bg-pattern bg-main h-80 flex-col items-center justify-center p-4 sm:p-8 text-white overflow-hidden'>
        {children}
      </main>
      <Footer />
    </div>
  );
};
