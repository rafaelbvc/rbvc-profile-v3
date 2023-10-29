import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {

  return (
    <main className="relative w-[100vw] h-[100vh]">
      <h1 className="hidden">Main Page</h1>
      <Outlet />
      {children}
    </main>
  )
};

export default Layout;
