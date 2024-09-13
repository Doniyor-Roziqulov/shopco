import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Baner from "../baner/Baner";
import logo from "../../../public/logo.svg";

const Header = () => {
    return (
        <>
            <Baner />
            <header className="py-6">
                <div className="container max-w-[1280px] flex items-center justify-between">
                    <Link
                        className="mr-10 hover:opacity-80 active:opacity-65"
                        to={"/"}>
                        <img src={logo} alt="Logo icon" />
                    </Link>

                    <Navbar />
                </div>
            </header>
        </>
    );
};

export default Header;
