import { Link } from "react-router-dom";

export default function Blog_main() {
    return (
        <main>
            <section className="mt-[96px]">
                <div className="flex w-[1400px] mx-auto justify-between">
                    <div>
                        <img src="./images/Shape (1).png" alt="" />
                        <h2 className="w-[90px] h-[20px] font-display font-normal text-[14px] leading-[20px] tracking-[3px] uppercase text-[#000000] opacity-[0.87] mt-[20px]">TRENDING</h2>
                        <h1 className="w-[624px] h-[174px] font-display font-normal text-[48px] leading-[58px] text-[#232536] mt-[24px]">Breaking the code How did we build our Figma plugin</h1>
                        <p className="w-[624px] h-[72px] font-display font-normal text-[16px] leading-[24px] text-[#232536] opacity-[0.87] mt-[24px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.</p>
                        <div className="flex items-center gap-3 mt-[24px]">
                            <Link to="/blog-details" className="w-[87px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#444CFC] opacity-[0.87]">Read More</Link>
                            <img src="./images/Icon (1).png" alt="" />
                        </div>
                        <div className="flex items-center mt-[40px] gap-4">
                            <img src="./images/Image (9).png" alt="" />
                            <h3 className="w-[123px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#232536] opacity-[0.87]">Andrew Jonson</h3>
                            <p className="w-[226px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#232536] opacity-[0.6]">Posted on 27th January 2021</p>
                        </div>
                        <img className="mt-[49px]" src="./images/Image (8).png" alt="" />
                    </div>
                    <div>
                        <img src="./images/Header Right.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="mt-[96px]">
                <div className="w-[1400px] mx-auto">
                    <h1 className="w-[423px] h-[58px] font-display font-normal text-[48px] leading-[58px] text-[#232536]">Read Recent Post</h1>
                    <div className="grid grid-cols-2 gap-[32px] mt-[64px]">
                        <img src="./images/Recent 1.png" alt="" />
                        <img src="./images/Recent 2.png" alt="" />
                        <img src="./images/Recent 3.png" alt="" />
                        <img src="./images/Recent 4.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="bg-[#F9F9F9] mt-[96px] h-[1530px]">
                <div className="w-[1400px] mx-auto pt-[96px]">
                    <h1 className="w-[207px] h-[58px] font-display font-normal text-[48px] leading-[58px] text-[#232536] font-semibold">All posts</h1>
                    <div className="grid grid-cols-3 gap-[32px] mt-[64px]">
                        <img src="./images/Blog Item 1.png" alt="" />
                        <img src="./images/Blog Item 2.png" alt="" />
                        <img src="./images/Blog Item 3.png" alt="" />
                        <img src="./images/Blog Item 4.png" alt="" />
                        <img src="./images/Blog Item 5.png" alt="" />
                        <img src="./images/Blog Item 6.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="w-[1400px] m-auto mt-[96px]">
                <div className="flex">
                    <div className="w-[1340px] h-[333px] bg-[#666DFF]">
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
        </main>
    )
}