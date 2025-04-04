import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <a href="/">Home</a>
        </nav>
      </header>
      {children}
      <footer>
        <p>© {new Date().getFullYear()} Automeyt. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
