import Bottom from "../../components/Bottom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Header";
import Contact_main from "./Main";

export default function Contact() {
    return (
        <section>
            <Navbar />
            <Contact_main />
            <Footer />
            <div className="h-[80px] bg-[#FFE6D2]">
                <Bottom />
            </div>
        </section>
    )
}