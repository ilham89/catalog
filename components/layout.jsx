const { default: Header } = require("./header");
import Image from "next/image";
import { useEffect, useState } from "react";
import Up from "../assets/icons/up.png";

const Layout = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleButtonVisibility);
    };
  }, []);

  return (
    <div className="bg-sky-500/25 min-h-screen">
      <Header />
      {showButton && (
        <button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="animate-bounce rounded-full fixed bottom-16 right-7 z-30 cursor-pointer bg-indigo-400 dark:bg-gray-500 p-2"
        >
          <Image src={Up} alt="up" width={30} height={30} />
        </button>
      )}
      <div className="px-6 py-20">{children}</div>
    </div>
  );
};
export default Layout;
