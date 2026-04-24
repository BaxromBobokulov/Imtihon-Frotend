import Bottom from "../../components/Bottom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Header";
import Policy_Main from "./Main";

export default function Policy() {
    return (
        <section>
            <Navbar />
            <Policy_Main />
            <section className="relative left-[50px]">
                <Footer />
            </section>
            <div className="h-[80px] bg-[#FFE6D2] relative left-[50px]">
                <Bottom />
            </div>
        </section>
    )
}