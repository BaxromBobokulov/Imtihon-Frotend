import Bottom from "../../components/Bottom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Header";
import Career_main from "./Main";

export default function Career() {
    return (
        <section>
            <Navbar />
            <Career_main />
            <section className="relative left-[50px]">
                <Footer />
            </section>
            <div className="h-[80px] bg-[#FFE6D2]">
                <Bottom />
            </div>
        </section>
    )
}