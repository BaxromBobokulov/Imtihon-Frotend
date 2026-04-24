import Bottom from "../../components/Bottom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Header";
import Blog_main from "./Main";

export default function Blog() {
    return (
        <section>
            <Navbar />
            <Blog_main />
            <Footer />
            <div className="h-[80px] bg-[#FFE6D2]">
                <Bottom />
            </div>
        </section>
    )
}