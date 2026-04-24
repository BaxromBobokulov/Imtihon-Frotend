import Bottom from "../../../components/Bottom";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Subscribe from "../../../components/Subscribe";

export default function Job() {
    return (
        <main>
            <Header />
            <section>
                <div className="flex w-[1400px] m-auto justify-between pt-[96px] px-[150px]">
                    <div>
                        <h2 className="w-[172px] h-[20px] font-display text-[14px] leading-[20px] text-[#232536] opacity-[0.87] font-medium tracking-[3px] uppercase">CAREER AT Ether</h2>
                        <h1 className="w-[492px] h-[58px] font-display text-[48px] leading-[58px] text-[#232536] font-semibold mt-[24px]">Full Stack Developer</h1>
                        <p className="w-[430px] h-[48px] font-display text-[16px] leading-[24px] text-[#232536] opacity-[0.87] mt-[16px]">Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
                        <button className="w-[219px] h-[64px] bg-[#444CFC] cursor-pointer mt-[40px]"> <img
                            className="relative bottom-[6px]" src="./images/Shapes.svg" alt="" />
                            <div className="flex items-center gap-3 ml-[50px] relative bottom-3 right-[7px]">
                                <span className="font-display text-[16px] text-[#FFFFFF]">Apply Now </span><img
                                    src="./images/Icon.png" alt="" />
                            </div>
                        </button>
                    </div>
                    <div>
                        <img src="./images/Description.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="mt-[96px]">
                <div className="w-[1280px] h-[784px] m-auto bg-[#ECF8F9] flex flex-col justify-center items-center">
                    <div className="w-[627px] h-[36px] flex mt-[43px]">
                        <a href="#" className="w-[172px] h-[36px] font-display text-[24px] leading-[36px] text-[#000000] font-semibold">Details</a>
                        <a href="#" className="w-[172px] h-[36px] font-display text-[24px] leading-[36px] text-[#000000] font-semibold ml-[10px]">Requirements</a>
                        <a href="#" className="w-[172px] h-[36px] font-display text-[24px] leading-[36px] text-[#000000] font-semibold ml-[70px]">Responsibilities</a>
                    </div>
                    <div className="w-full h-[5px] bg-[#E0F1F2] mt-[29px]" ></div>
                    <div className="flex flex-col w-[842px] h-[480px] m-auto mt-[70px]">
                        <ul className="list-disc flex flex-col gap-[30px]">
                            <li><p className="w-[842px] font-display text-[16px] leading-[24px] text-[#000000]">Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).</p></li>
                            <li><p className="w-[842px] font-display text-[16px] leading-[24px] text-[#000000]">Design & Create highly engaging industry-related content in both photo, gif & video format</p></li>
                            <li><p className="w-[842px] font-display text-[16px] leading-[24px] text-[#000000]">Publish Posts on various social media channels</p></li>
                            <li><p className="w-[842px] font-display text-[16px] leading-[24px] text-[#000000]">Promote content on social networks and monitor engagement (e.g. comments and shares)</p></li>
                            <li><p className="w-[842px] font-display text-[16px] leading-[24px] text-[#000000]">Research industry-related topics</p></li>
                            <li><p className="w-[842px] font-display text-[16px] leading-[24px] text-[#000000]">Editing audio and sound design on projects</p></li>
                            <li><p className="w-[842px] font-display text-[16px] leading-[24px] text-[#000000]">Engage in opportunities to develop original content and concepts for web and mobile</p></li>
                            <li><p className="w-[842px] font-display text-[16px] leading-[24px] text-[#000000]">Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.</p></li>
                            <li><p className="w-[842px] font-display text-[16px] leading-[24px] text-[#000000]">Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels</p></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="mt-[96px]">
                <div className="w-[1280px] m-auto">
                    <h1 className="w-[195px] h-[54px] font-display text-[36px] leading-[54px] text-[#232536] font-semibold">Apply Now</h1>
                    <div className="grid grid-cols-2 gap-[32px] mt-[29px]">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-[624px] h-[96px] bg-[#F9F9FF] px-[40px] text-[18px] font-display font-normal leading-[28px] opacity-[1] text-[#232536] outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-[624px] h-[96px] bg-[#F9F9FF] px-[40px] text-[18px] font-display font-normal leading-[28px] opacity-[1] text-[#232536] outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Email Id"
                            className="w-[624px] h-[96px] bg-[#F9F9FF] px-[40px] text-[18px] font-display font-normal leading-[28px] opacity-[1] text-[#232536] outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Mobile No"
                            className="w-[624px] h-[96px] bg-[#F9F9FF] px-[40px] text-[18px] font-display font-normal leading-[28px] opacity-[1] text-[#232536] outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Why do you thing you are good fit for Ether?"
                            className="w-[1280px] h-[225px] bg-[#F9F9FF] px-[40px] text-[18px] font-display font-normal leading-[28px] opacity-[1] text-[#232536] outline-none"
                        />
                    </div>
                    <div className="flex gap-[24px] items-center mt-[36px]">
                        <img src="./images/Checkmark.png" alt="" />
                        <p className="w-[842px] h-[48px] font-display text-[16px] leading-[24px] text-[#000000] opacity-[0.87]">I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request.</p>
                    </div>
                    <button className="w-[251px] h-[64px] bg-[#444CFC] cursor-pointer mt-[40px]"> <img
                        className="relative bottom-[6px]" src="./images/Shapes.svg" alt="" />
                        <div className="flex items-center gap-3 ml-[50px] relative bottom-3 right-[7px]">
                            <span className="font-display text-[16px] text-[#FFFFFF]">Submit Application</span><img
                                src="./images/Icon.png" alt="" />
                        </div>
                    </button>
                </div>
            </section>
            <section className="w-[1400px] m-auto mt-[96px]">
                <div className="flex ml-[50px]">
                    <div className="w-[1266px] h-[333px] bg-[#666DFF]">
                        <div className="flex">
                            <div>
                                <img src="./images/Shapes (2).png" alt="" />
                                <div className="flex flex-col mt-[16px] ml-[96px]">
                                    <h3 className="w-[113px] h-[20px] font-display font-normal text-[14px] leading-[20px] tracking-[3px] uppercase text-[#FFFFFF]">NEWSLETTER</h3>
                                    <h1 className="w-[488px] h-[108px] font-display font-normal text-[36px] leading-[54px] text-[#FFFFFF] mt-[13px]">Subscribe our News Letter
                                        to get Latest Updates.</h1>
                                </div>

                            </div>
                            <div className="flex justify-center items-center w-[454px] mt-[111px] ml-[122px]">
                                <input
                                    type="email"
                                    placeholder="Paresh@Pixeto.com"
                                    className="w-full w-[554px] h-[64px] bg-white  px-5 text-gray-400 outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    <img src="./images/Shapes (1).png" alt="" />
                </div>
            </section>
            <section className="relative left-[50px]">
                <Footer />
            </section>
            <div className="h-[80px] bg-[#FFE6D2] relative left-[50px]">
                <Bottom />
            </div>
        </main>
    )
}