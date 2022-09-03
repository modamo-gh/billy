import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      {/* <LandingPageBlurp /> */}
      <Footer />
    </div>
  )
}

export default App;