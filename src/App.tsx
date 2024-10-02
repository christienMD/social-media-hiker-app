import AsideContent from "./components/AsideContent";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr,1fr,1fr] grid-rows-[auto,1fr] min-h-screen">
        <Navbar className="col-span-full" />
        <AsideContent className="hidden lg:block" />
        <MainSection className="lg:col-span-3" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
