import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-gray-300 w-screen h-screen">
      <Navbar user={undefined} />
      <Footer />
    </main>
  );
}

export default App;
