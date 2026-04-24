import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="flex mt-[96px] w-[1400px] m-auto">
            <div className="pr-[204px]">
                <img src="./images/Shapes (3).png" alt="" />
                <h1 className="w-[452px] h-[116px] font-display font-normal text-[48px] leading-[58px] text-[#232536] mt-[32px]">Let's make
                    something special</h1>
                <h2 className="w-[150px] h-[36px] font-display font-normal text-[24px] leading-[36px] text-[#232536] mt-[40px]">Let's talk! 🤙 </h2>
                <h3 className="w-[130px] h-[28px] font-display font-normal text-[18px] leading-[28px] text-[#232536] mt-[28px]">020 7993 2905</h3>
                <h3 className="w-[127px] h-[28px] font-display font-normal text-[18px] leading-[28px] text-[#232536] mt-[4px]">hi@finsweet.com</h3>
                <div className="w-[268px] bg-gray-300 h-[2px] mt-[14px]"></div>
                <p className="w-[206px] h-[40px] font-display font-normal text-[14px] leading-[20px] text-[#232536] mt-[16px]">DLF Cybercity, Bhubaneswar,
                    India, &52050</p>
            </div>
            <div className="mt-[80px] pr-[61px]">
                <ul className="flex flex-col gap-[16px]">
                    <li><Link to="/" className="w-[71.11px] h-[28px] font-display font-normal font-semibold text-[16px] leading-[28px] text-[#232536]">Home</Link></li>
                    <li><Link to="/service" className="w-[71.11px] h-[28px] font-display font-normal font-semibold text-[16px] leading-[28px] text-[#232536]">Service</Link></li>
                    <li><Link to="/company" className="w-[71.11px] h-[28px] font-display font-normal font-semibold text-[16px] leading-[28px] text-[#232536]">Company</Link></li>
                    <li><Link to="/career" className="w-[71.11px] h-[28px] font-display font-normal font-semibold text-[16px] leading-[28px] text-[#232536]">Career</Link></li>
                    <li><Link to="/news" className="w-[71.11px] h-[28px] font-display font-normal font-semibold text-[16px] leading-[28px] text-[#232536]">News</Link></li>
                </ul>
            </div>
            <div className="mt-[80px] pr-[58px]">
                <ul className="flex flex-col gap-[12px]">
                    <li><Link  to="/service" className="w-[71.11px] h-[28px] font-display font-normal font-semibold text-[16px] leading-[28px] text-[#232536]">Service</Link></li>
                    <li><Link to="/service#technical-support" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">Technical support</Link></li>
                    <li><Link to="/service#testing" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">Testing</Link></li>
                    <li><Link to="/service#development" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">Development</Link></li>
                    <li><Link to="/service#aws-azure" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">AWS/Azure </Link></li>
                    <li><Link to="/service#consulting" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">Consulting</Link></li>
                    <li><Link to="/service#information-technology" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">Information Technology</Link></li>
                </ul>
            </div>
            <div className="mt-[80px]">
                <ul className="flex flex-col gap-[12px]">
                    <li><Link to="/resourses" className="w-[71.11px] h-[28px] font-display font-normal font-semibold text-[16px] leading-[28px] text-[#232536]">Resourses</Link></li>
                    <li><Link to="/about-us" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">About Us</Link></li>
                    <li><Link to="/testimonial" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">Testimonial</Link></li>
                    <li><Link to="/policy" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">Privacy Policy</Link></li>
                    <li><Link to="/terms-of-use" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">Terms of use</Link></li>
                    <li><Link to="/blog" className="w-[127px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536]">Blog</Link></li>
                </ul>
                <div className="flex items-center gap-3 mt-[128px] ml-[79px]">
                    <img src="./images/Shapes (4).png" alt="" />
                    <Link to="/contact"><span className="w-[89px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#232536]">Contact Us</span></Link>
                    <img src="./images/Icon (1).png" alt="" />
                </div>
            </div>
        </div>
    )
}