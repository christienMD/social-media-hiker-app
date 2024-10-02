import AsideContent from "./components/AsideContent";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr,1fr,1fr] grid-rows-[auto,1fr] min-h-screen">
        <Navbar className="col-span-full sticky top-0 z-50" />
        <AsideContent className="hidden lg:block lg:sticky max-h-[calc(100vh-4rem)] top-16" />
        <MainSection className="lg:col-span-3" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
