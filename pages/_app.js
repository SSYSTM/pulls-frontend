import '../styles/globals.css'
import Header from '../components/layouts/header/Header'
import { useEffect } from "react";
import Document from './_document';



function MyApp({ Component, pageProps }) {
    useEffect(() => {
      document.querySelector("html").classList.add("h-full");
      document.querySelector("body").classList.add("h-full");
    }, []);
  return (
    <div>
      {/* <Document> */}
        <Header />
        <div className="pagesarea">
          <Component {...pageProps} />
        </div>
      {/* </Document> */}
    </div>
  );
  
}

export default MyApp
