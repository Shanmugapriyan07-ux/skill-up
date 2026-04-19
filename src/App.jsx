import Header from "./components/Header";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import PolicyContent from "./components/PolicyContent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-200">
      <Header />
      <Hero />
      <MobileNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex gap-12 xl:gap-16">
          <Sidebar />
          <PolicyContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
