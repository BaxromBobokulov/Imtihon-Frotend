import Bottom from "../../components/Bottom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Header";
import Service_main from "./Main";

export default function Service() {
    return (
        <section>
            <Navbar />
            <Service_main />
            <Footer />
            <div className="h-[80px] bg-[#FFE6D2]">
                <Bottom />
            </div>
        </section>
    )
}