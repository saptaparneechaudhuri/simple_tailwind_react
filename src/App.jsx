import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import NewArrivalsSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import CartItem from "./components/CartItem";
import { BiMoon, BiSun } from "react-icons/bi";

//  see the video on prettier configuration for tailwind css, also svgr plugin for vite.

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };
  return (
    <div className="animate-fadeIn dark:bg-night-50 p-10 xl:px-24">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOE_LIST[0]} qty={1} size={44} />
        <CartItem item={SHOE_LIST[2]} qty={1} size={44} />
        <CartItem item={SHOE_LIST[3]} qty={1} size={44} />
        <CartItem item={SHOE_LIST[3]} qty={1} size={44} />
        <CartItem item={SHOE_LIST[3]} qty={1} size={44} />
        <CartItem item={SHOE_LIST[3]} qty={1} size={44} />
      </Sidebar>
      <div className=" fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 dark:text-night rounded-full px-4 py-2 text-white shadow-lg dark:bg-white"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
};

export default App;
