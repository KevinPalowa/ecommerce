import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Kevin Store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
