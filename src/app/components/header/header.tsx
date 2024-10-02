"use client"
import { useMediaQuery } from "react-responsive";
import { FaBars } from "react-icons/fa";
import HeaderDesktop from "./header-desktop";
import HeaderMobile from "./header-mobile";
function Header() {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    return (<div >
        {
            isMobile ? <HeaderMobile /> : <HeaderDesktop />
        }
    </div>);
}

export default Header;