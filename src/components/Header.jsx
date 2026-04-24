import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex flex-col box-border bg-[#232536] w-full items-center justify-center">
            <nav className="items-center justify-center">
                <div className="flex justify-between w-[1400px] h-[80px] items-center mx-auto bg-[#232536]">
                    <div>
                        <img src="./images/Logo.svg" alt="" />
                    </div>
                    <div>
                        <ul className="flex gap-[32px] items-center">
                            <li className="font-display font-normal text-[16px] leading-[24px] text-[#FFFFFF] opacity-[0.5] nav-link transition duration-300 hover:opacity-100">
                                <Link to="/">Home</Link></li>
                            <li className="font-display font-normal text-[16px] leading-[24px] text-[#FFFFFF] opacity-[0.5] nav-link transition duration-300 hover:opacity-100">
                                <Link to="/service">Service</Link></li>
                            <li className="font-display font-normal text-[16px] leading-[24px] text-[#FFFFFF] opacity-[0.5] nav-link transition duration-300 hover:opacity-100">
                                <Link to="/company">Company</Link></li>
                            <li className="font-display font-normal text-[16px] leading-[24px] text-[#FFFFFF] opacity-[0.5] nav-link transition duration-300 hover:opacity-100">
                                <Link to="/career">Career</Link></li>
                            <li className="font-display font-normal text-[16px] leading-[24px] text-[#FFFFFF] opacity-[0.5] nav-link transition duration-300 hover:opacity-100">
                                <Link to="/blog">Blog</Link></li>
                            <li className="font-display font-normal text-[16px] leading-[24px] text-[#FFFFFF] opacity-[0.5] nav-link transition duration-300 hover:opacity-100">
                                <Link to="/contact">Contact us</Link></li>
                            <li className="font-display font-normal text-[16px] leading-[24px] text-[#FFD3AF] nav-link transition duration-300 hover:opacity-80">
                                <Link to="/policy">Clone project</Link></li>
                        </ul>
                        <img className="ml-[700px] relative bottom-[14px] right-[30px]" src="./images/Icon.png" alt="" />
                    </div>
                </div>
            </nav>
            <div className="w-full h-[1px] bg-gray-600"></div>
        </div>
    );
}