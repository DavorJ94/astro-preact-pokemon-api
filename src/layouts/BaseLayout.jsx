import { h } from "preact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Footer />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
