import Bottom from "../../components/Bottom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Header";
import Company_main from "./Main";

export default function Company() {
    return (
        <section>
            <Navbar />
            <Company_main />
            <Footer />
            <div className="h-[80px] bg-[#FFE6D2]">
                <Bottom />
            </div>
        </section>
    )
}