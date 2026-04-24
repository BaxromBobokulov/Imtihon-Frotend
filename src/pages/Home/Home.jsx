import { useNavigate } from "react-router-dom";
import Bottom from "../../components/Bottom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Header";
import Main from "./Main";

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            <header className="box-border bg-[#232536]">
                <Navbar />
                <div className="flex w-[1400px] m-auto justify-between items-center mt-[96px]">
                    <div className="flex flex-col">
                        <h1 className="font-display text-[56px] leading-[68px] text-[#FFFFFF] w-[624px] font-semibold">Transform Your Idea Into
                            Reality with Finsweet</h1>
                        <p className="font-display text-[16px] leading-[24px] text-[#FFFFFF] opacity-[0.6] w-[528px] mt-[24px]">The
                            entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good
                            attitude.</p>
                        <button
                            onClick={() => navigate("/request")}
                            className="w-[219px] h-[64px] bg-[#444CFC] cursor-pointer mt-[32px] hover:bg-[#3238e0] transition-colors duration-200"
                        >
                            <img className="relative bottom-[6px]" src="./images/Shapes.svg" alt="" />
                            <div className="flex items-center gap-3 ml-[50px] relative bottom-3 right-[7px]">
                                <span className="font-display text-[16px] text-[#FFFFFF]">Request Quote </span>
                                <img src="./images/Icon.png" alt="" />
                            </div>
                        </button>
                    </div>
                    <div>
                        <img src="./images/Header Image.png" alt="" />
                    </div>
                </div>
                <div className="flex w-[1400px] m-auto justify-between items-center mt-[60px]">
                    <img src="./images/Title Wrapper.png" alt="" />
                    <img src="./images/Logo (1).png" alt="" />
                    <img src="./images/Logo (2).png" alt="" />
                    <img src="./images/Logo (3).png" alt="" />
                    <img src="./images/Logo (4).png" alt="" />
                    <img src="./images/Logo (5).png" alt="" />
                </div>
            </header>
            <Main />
            <Footer />
            <div className="h-[80px] bg-[#FFE6D2]">
                <Bottom />
            </div>
        </>
    )
}