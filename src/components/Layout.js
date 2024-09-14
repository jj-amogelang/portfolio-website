// src/components/Layout.js
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="p-4 bg-gray-800 text-white text-center">
        © 2024 My Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;

