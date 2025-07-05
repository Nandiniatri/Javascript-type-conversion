import Image from "../../../component/Image";
import Button from "../../../component/Button";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LiaUser } from "react-icons/lia";

const Header = () => {
    return (
        <header>
            <Image src='https://cdn.pixabay.com/photo/2023/01/31/01/50/crown-7756927_1280.png' className=""/>

            <nav>
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Components</a>
                <a href="">Support</a>
                <a href="">Find Store</a>
            </nav>

            <div>
                <Button><IoIosSearch /></Button>
                <Button><IoCartOutline /></Button>
                <Button><LiaUser /></Button>
            </div>
        </header>
    )
}

export default Header;