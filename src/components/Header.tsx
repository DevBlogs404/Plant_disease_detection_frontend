import { Link } from "react-router-dom";
import logo from "../vite.svg";
import burgerMenu from "@/assets/burger-menu-right.svg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Header = () => {
  const [openSheet, setOpenSheet] = useState(false);

  const toggleSheet = () => {
    setOpenSheet((prev) => !prev);
  };

  return (
    <header className="w-full h-[10vh] flex items-center justify-between p-4 md:p-6 lg:p-8 text-black border-b-2 border-b-white">
      <div className="flex items-center justify-center gap-2">
        <img src={logo} alt="logo" className="w-8 m-0" />
        <p className="text-black text-md font-bold md:text-xl lg:text-2xl">
          CropGuard Insight
        </p>
      </div>
      {/* <div>
        <nav>
          <ul>
            <li className=" font-bold text-xl">
              <Link to={"/disease-detection"}>Disease Detection</Link>
            </li>
          </ul>
        </nav>
      </div> */}
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger onClick={toggleSheet}>
          <img src={burgerMenu} alt="menu" className="h-12 w-12" />
        </SheetTrigger>
        <SheetContent
          className="w-[340px] sm:w-[540px] md:w-[600px] lg:w-[700px] p-4 md:p-6 lg:p-8"
          side={"right"}
        >
          <nav>
            <ul className=" w-full min-h-[50vh] flex flex-col items-end justify-start mt-20 gap-5">
              <SheetTrigger onClick={toggleSheet} asChild>
                <li className=" font-bold text-xl">
                  <Link to={"/"}>Home</Link>
                </li>
              </SheetTrigger>
              <SheetTrigger onClick={toggleSheet} asChild>
                <li className=" font-bold text-xl">
                  <Link to={"/disease-detection"}>Disease Detection</Link>
                </li>
              </SheetTrigger>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
