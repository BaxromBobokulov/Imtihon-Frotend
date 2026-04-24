import Expersite from "../../components/Expertise";
import News from "../../components/News";
import Subscribe from "../../components/Subscribe";
import Worldwide from "../../components/Wordwide";

export default function Main() {
    return (
        <main>
            <section className="flex flex-col justify-center items-center">
                <div className="flex justify-between w-[1400px] gap-[92px] mt-[120px]">
                    <div>
                        <h2 className="w-[100px] h-[20px] font-display font-normal text-[14px] leading-[20px] tracking-[3px] uppercase opacity-[0.87] text-[#000000]">ABOUT US</h2>
                        <h1 className="w-[640px] h-[174px] font-display font-normal text-[48px] leading-[58px] text-[#232536] mt-[16px]">The company leads entire webdesign process from concept to delivery.</h1>
                    </div>
                    <div>
                        <h1 className="w-[547px] h-[54px] font-display font-normal text-[36px] leading-[54px] text-[#232536] mt-[20px]">The Era Of Technology.</h1>
                        <p className="w-[547px] h-[72px] font-display font-normal text-[16px] leading-[24px] text-[#5D5F6D]">Through True Rich Attended does no end it his mother since real had half every him case in
                            packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-[15px] mt-[46px]">
                        <img className="w-[450px]" src="./images/Image 1.png" alt="" />
                        <img className="w-[450px]" src="./images/Image 2.png" alt="" />
                        <div className="flex">
                            <img className="w-[450px]" src="./images/Image 3.png" alt="" />
                            <img src="./images/Shapes.png" alt="" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-[65px] mt-[48px]">
                            <img src="./images/Number 1.png" alt="" />
                            <img src="./images/Number 2.png" alt="" />
                            <img src="./images/Number 3.png" alt="" />
                            <img src="./images/Number 4.png" alt="" />
                        </div>
                        <div>
                            <a className=" flex w-[118px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#444CFC] opacity-[0.87] mt-[40px]" href="">Read about us</a>
                            <img className="relative left-[120px] bottom-[15px]" src="./images/Icon (1).png" alt="" />
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </section>
            <Expersite />
            <section className="flex flex-col bg-[#FFE6D2] justify-center items-center h-[917px]">
                <div className="w-[1400px]">
                    <div>
                        <h3 className="w-[141px] h-[20px] font-display font-normal text-[14px] leading-[20px] tracking-[3px] uppercase text-[#000000] opacity-[0.87]">Our Services</h3>
                        <h1 className="w-[767px] h-[174px] font-display font-normal text-[48px] leading-[58px] text-[#232536] mt-[12px]">We build software solutions that solve client's business challenges</h1>
                        <button className="flex w-[214px] h-[64px] bg-[#444CFC] items-center mt-[40px] cursor-pointer">
                            <img className="relative bottom-[18px]" src="./images/Shapes.svg" alt="" />
                            <div className="flex items-center justify-between gap-[10px]">
                                <span className="w-[114px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#FFFFFF] opacity-[0.87]">Start a Project</span>
                                <img className="relative" src="./images/Icon.png" alt="" />
                            </div>
                        </button>
                    </div>
                    <div className="flex gap-[32px] mt-[80px]">
                        <div className="w-[440px] h-[335px] bg-[#FFFFFF] pl-[48px]">
                            <img className="mt-[48px]" src="./images/Icon Div.png" alt="" />
                            <h3 className="w-[147px] h-[28px] font-display font-semibold leading-[28px] text-[#000000] mt-[16px]">Technical support</h3>
                            <p className="w-[326px] h-[96px] font-display font-normal text-[16px] leading-[24px] text-[#5D5F6D] mt-[8px]">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                            <div className="flex items-center gap-[10px] mt-[24px]">
                                <a className="w-[89px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#444CFC] opacity-[0.87]" href="#">Read more</a>
                                <img src="./images/Icon (1).png" alt="" />
                            </div>
                        </div>
                        <div className="w-[440px] h-[335px] bg-[#FFFFFF] pl-[48px]">
                            <img className="mt-[48px]" src="./images/Icon Div (1).png" alt="" />
                            <h3 className="w-[180px] h-[28px] font-display font-semibold leading-[28px] text-[#000000] mt-[16px]">Testing Management</h3>
                            <p className="w-[326px] h-[96px] font-display font-normal text-[16px] leading-[24px] text-[#5D5F6D] mt-[8px]">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                            <div className="flex items-center gap-[10px] mt-[24px]">
                                <a className="w-[89px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#444CFC] opacity-[0.87]" href="#">Read more</a>
                                <img src="./images/Icon (1).png" alt="" />
                            </div>
                        </div>
                        <div className="w-[440px] h-[335px] bg-[#FFFFFF] pl-[48px]">
                            <img className="mt-[48px]" src="./images/Icon Div (2).png" alt="" />
                            <h3 className="w-[147px] h-[28px] font-display font-semibold leading-[28px] text-[#000000] mt-[16px]">Development</h3>
                            <p className="w-[326px] h-[96px] font-display font-normal text-[16px] leading-[24px] text-[#5D5F6D] mt-[8px]">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
                            <div className="flex items-center gap-[10px] mt-[24px]">
                                <a className="w-[89px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#444CFC] opacity-[0.87]" href="#">Read more</a>
                                <img src="./images/Icon (1).png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Worldwide />
            <section className="flex justify-center bg-[#F9F9FF] h-[587px]">
                <div className="flex w-[1400px] gap-[154px]">
                    <div className="mt-[134px]">
                        <h1 className="w-[492px] h-[116px] font-display font-normal text-[48px] leading-[58px] text-[#232536]">Our customers love what we do</h1>
                        <h3 className="w-[502px] h-[28px] font-display font-normal text-[18px] leading-[28px] text-[#232536] mt-[16px]">Transform your idea into reality with finsweet</h3>
                        <p className="w-[492px] h-[48px] font-display font-normal text-[16px] leading-[24px] text-[#232536] opacity-[0.87] mt-[16px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <div className="flex gap-[12px] mt-[24px]">
                            <img src="./images/bro1.png" alt="" />
                            <img src="./images/bro2.png" alt="" />
                            <img src="./images/bro3.png" alt="" />
                        </div>
                        <img className="mt-[14px]" src="./images/30+ Customer Reviews.png" alt="" />
                    </div>
                    <div className="mt-[96px]">
                        <img src="./images/Testimonial.png" alt="" />
                    </div>
                </div>
            </section>
            <News />
            <section className="flex justify-center mt-[96px]">
                <Subscribe />
            </section>
        </main>
    )
}