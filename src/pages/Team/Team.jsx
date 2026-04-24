import Bottom from "../../components/Bottom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Header";

export default function Team() {
    return (
        <>
            <header className="box-border bg-[#232536]">
                <Navbar />
            </header>

            <section className="flex justify-center items-center bg-[#FFFFFF] py-[96px]">
                <div className="flex flex-col items-center text-center">
                    <div className="w-[160px] h-[160px] rounded-full overflow-hidden">
                        <img
                            src="./images/Image (11).png"
                            alt="Javena Melo"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h1 className="font-display font-semibold text-[28px] leading-[36px] text-[#232536] mt-[24px]">
                        Javena Melo
                    </h1>

                    <span className="inline-block mt-[8px] px-[12px] py-[2px] font-display font-normal text-[12px] leading-[20px] text-[#232536] tracking-[2px] uppercase">
                        CEO
                    </span>

                    <p className="w-[480px] font-display font-normal text-[16px] leading-[24px] text-[#5D5F6D] mt-[16px]">
                        Through True Rich Attended does no end it his mother since real had half every him case in
                        packages enquire we up ecstatic unsatiable.
                    </p>

                    {/* Social icons */}
                    <div className="flex gap-[16px] mt-[24px]">
                        <a href="#" aria-label="Facebook"
                            className="w-[36px] h-[36px] border border-[#CCCCCC] flex items-center justify-center hover:border-[#444CFC] hover:text-[#444CFC] transition-colors duration-200 text-[#5D5F6D]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter"
                            className="w-[36px] h-[36px] border border-[#CCCCCC] flex items-center justify-center hover:border-[#444CFC] hover:text-[#444CFC] transition-colors duration-200 text-[#5D5F6D]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram"
                            className="w-[36px] h-[36px] border border-[#CCCCCC] flex items-center justify-center hover:border-[#444CFC] hover:text-[#444CFC] transition-colors duration-200 text-[#5D5F6D]">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Blog posts section */}
            <section className="flex justify-center bg-[#ECF8F9] py-[96px]">
                <div className="w-[1400px]">
                    <div>
                        <img src="./images/Shape.png" alt="" />
                        <h2 className="font-display font-normal text-[48px] leading-[58px] text-[#232536] mt-[16px]">
                            Blog posts from Javena
                        </h2>
                    </div>

                    <div className="flex gap-[32px] mt-[48px]">
                        {/* Card 1 */}
                        <div className="flex w-[624px] h-[248px] bg-[#FFFFFF] gap-[32px] items-center">
                            <img src="./images/Image.png" alt="Blog post 1" />
                            <div>
                                <h3 className="font-display font-normal text-[14px] leading-[20px] text-[#232536] opacity-[0.6]">
                                    Jan 19, 2021
                                </h3>
                                <h2 className="w-[264px] font-display font-normal text-[24px] leading-[36px] text-[#232536] mt-[4px]">
                                    Today's best design trends for digital products
                                </h2>
                                <div className="flex items-center gap-[10px] mt-[24px]">
                                    <a className="font-display font-normal text-[16px] leading-[24px] text-[#444CFC] opacity-[0.87]" href="#">
                                        Read More
                                    </a>
                                    <img src="./images/Icon (1).png" alt="" />
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex w-[624px] h-[248px] bg-[#FFFFFF] gap-[32px] items-center">
                            <img src="./images/Image (1).png" alt="Blog post 2" />
                            <div>
                                <h3 className="font-display font-normal text-[14px] leading-[20px] text-[#232536] opacity-[0.6]">
                                    Jan 19, 2021
                                </h3>
                                <h2 className="w-[264px] font-display font-normal text-[24px] leading-[36px] text-[#232536] mt-[4px]">
                                    A practical guide to building a brand strategy
                                </h2>
                                <div className="flex items-center gap-[10px] mt-[24px]">
                                    <a className="font-display font-normal text-[16px] leading-[24px] text-[#444CFC] opacity-[0.87]" href="#">
                                        Read More
                                    </a>
                                    <img src="./images/Icon (1).png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <div className="h-[80px] bg-[#FFE6D2]">
                <Bottom />
            </div>
        </>
    );
}