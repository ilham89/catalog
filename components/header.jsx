import Link from "next/link";
import Core from "../assets/icons/core";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container mx-auto px-4 md:px-16 py-5">
          <div className="flex items-center justify-between">
            <div>
              <Core />
            </div>
            <div className="flex space-x-4">
              <div className="font-normal text-sm cursor-pointer">
                <Link href="/">Home</Link>
              </div>
              <div className="font-normal text-sm">
                <Link href="/#products">Products</Link>
              </div>
              <div className="font-normal text-sm">
                <a href="#about">About Us</a>
              </div>
            </div>
            <div />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
