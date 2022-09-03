import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default App;