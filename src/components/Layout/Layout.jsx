import "./Layout.css";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
