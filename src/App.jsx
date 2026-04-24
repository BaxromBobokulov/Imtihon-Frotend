import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Company from "./pages/Company/Company";
import Career from "./pages/Career/Career";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Policy from "./pages/Policy/Policy";
import Team from "./pages/Team/Team";
import ScrollToTop from "./components/ScrollToTop";
import Job from "./pages/Career/inner-comp/Job";
import Blog_details from "./pages/Blog/inner-comp/Blog-details";
import Request from "./components/Request";

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/service" element={<Service />}></Route>
                <Route path="/company" element={<Company />}></Route>
                <Route path="/career" element={<Career />}></Route>
                <Route path="/job" element={<Job />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/blog-details" element={<Blog_details />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/policy" element={<Policy />}></Route>
                <Route path="/team" element={<Team />}></Route>
                <Route path="/request" element={<Request />}></Route>
            </Routes>
        </BrowserRouter>
    );
}