export default function Contact_main() {
    return (
        <main>
            <section className="mt-[96px]">
                <div className="flex w-[1400px] m-auto justify-between">
                    <div>
                        <img src="./images/Shape (1).png" alt="" />
                        <h2 className="w-[123px] h-[20px] font-display font-medium text-[14px] leading-[20px] tracking-[3px] uppercase text-[#000000] opacity-[0.87] mt-[24px]">CONTACT US</h2>
                        <h1 className="w-[672px] h-[116px] font-display font-semibold text-[48px] leading-[58px] text-[#232536] mt-[24px]">Have a Question ?
                            Let’s Get in Touch with us 👋</h1>
                        <p className="w-[619px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#232536] opacity-[0.87] mt-[24px]">Fill up the Form  and ou team will get back to within 24 hrs</p>
                        <div className="mt-[64px]">
                            {/* Name */}
                            <div className="mb-8">
                                <label className="w-[43px] h-[20px] font-display font-medium text-[14px] leading-[20px] tracking-[3px] uppercase text-[#000000] opacity-[0.6]">Name</label>
                                <input
                                    type="text"
                                    defaultValue="Paresh Srichandan"
                                    placeholder="Your name"
                                    className="w-full border-b border-gray-200 pb-2 text-[18px] leading-[24px] text-[#232536] opacity-[0.87] bg-transparent focus:outline-none focus:border-gray-800 transition-colors mt-[8px]"
                                />
                            </div>

                            {/* E-mail */}
                            <div className="mb-8">
                                <label className="w-[43px] h-[20px] font-display font-medium text-[14px] leading-[20px] tracking-[3px] uppercase text-[#000000] opacity-[0.6]">E-mail</label>
                                <input
                                    type="email"
                                    defaultValue="Paresh@pixeto.com"
                                    placeholder="your@email.com"
                                    className="w-full border-b border-gray-200 pb-2 text-[18px] leading-[24px] text-[#232536] opacity-[0.87] bg-transparent focus:outline-none focus:border-gray-800 transition-colors mt-[8px]"
                                />
                            </div>

                            {/* Subject */}
                            <div className="mb-8">
                                <label className="w-[43px] h-[20px] font-display font-medium text-[14px] leading-[20px] tracking-[3px] uppercase text-[#000000] opacity-[0.6]">Subject</label>
                                <input cla
                                    type="text"
                                    defaultValue="For web design work Enquire"
                                    placeholder="Subject"
                                    className="w-full border-b border-gray-200 pb-2 text-[18px] leading-[24px] text-[#232536] opacity-[0.87] bg-transparent focus:outline-none focus:border-gray-800 transition-colors mt-[8px]"
                                />
                            </div>

                            {/* Message */}
                            <div className="mb-10">
                                <label className="w-[43px] h-[20px] font-display font-medium text-[14px] leading-[20px] tracking-[3px] uppercase text-[#000000] opacity-[0.6]">Message</label>
                                <textarea
                                    placeholder="Type your Message"
                                    rows={4}
                                    className="w-full border-b border-gray-200 pb-2 text-[18px] leading-[24px] text-[#232536] opacity-[0.87] bg-transparent focus:outline-none focus:border-gray-800 transition-colors resize-none mt-[8px]"
                                />
                            </div>
                            <button className="w-[219px] h-[64px] bg-[#444CFC] cursor-pointer mt-[32px]"> <img
                                className="relative bottom-[6px]" src="./images/Shapes.svg" alt="" />
                                <div className="flex items-center gap-3 ml-[50px] relative bottom-3 right-[7px]">
                                    <span className="font-display text-[16px] text-[#FFFFFF]">Send Message</span><img
                                        src="./images/Icon.png" alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src="./images/Header Right (1).png" alt="" />
                    </div>
                </div>
            </section>
            <section className="w-[1400px] m-auto mt-[96px]">
                <img className="w-full" src="./images/Map Section.png" alt="" />
            </section>
        </main>
    )
}