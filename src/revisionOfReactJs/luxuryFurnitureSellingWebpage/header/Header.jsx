import Image from "../../../component/Image";
import Button from "../../../component/Button";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LiaUser } from "react-icons/lia";
import './Header.css'

const Header = () => {
    return (
        <header>
            <Image src='https://cdn.pixabay.com/photo/2023/01/31/01/50/crown-7756927_1280.png' className="image-header-img" />

            <nav>
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Components</a>
                <a href="">Support</a>
                <a href="">Find Store</a>
            </nav>

            <div className="header-button-div">
                <Button className="header-btn1"><IoIosSearch className="header-icon1" /></Button>
                <Button className="header-btn2"><IoCartOutline className="header-icon2" /></Button>
                <Button className="header-btn3"><LiaUser className="header-icon3" /></Button>
            </div>
        </header>
    )
}

export default Header;