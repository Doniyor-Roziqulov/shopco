import { Link } from "react-router-dom";
import SelectComponent from "../select/Select";
import SearchInput from "../search/SearchInput";
import { LuShoppingCart } from "react-icons/lu";
import { LuUserCircle2 } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <ul className="flex items-center gap-6">
        <li>
          <SelectComponent />
        </li>
        <li className="capitalize hover:opacity-80 active:bg-opacity-65">
          <Link to={"/"}>On Sale</Link>
        </li>
        <li className="capitalize hover:opacity-80 active:bg-opacity-65">
          <Link to={"/"}>New Arrivals</Link>
        </li>
        <li className="capitalize hover:opacity-80 active:bg-opacity-65">
          <Link to={"/"}>Brands</Link>
        </li>
        <li>
          <SearchInput />
        </li>

        <ul className="flex">
          <li className="group   p-3 cursor-pointer">
            <Link>
              <LuShoppingCart className="text-2xl group-hover:opacity-80 group-active:opacity-65 transition-all ease-in duration-65" />
            </Link>
          </li>
          <li className="group p-3 cursor-pointer">
            <Link>
              <LuUserCircle2 className="text-2xl group-hover:opacity-80 group-active:opacity-65 transition-all ease-in duration-65" />
            </Link>
          </li>
        </ul>
      </ul>
    </>
  );
};

export default Navbar;
