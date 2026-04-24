export default function News() {
    return (
        <section className="flex justify-center bg-[#ECF8F9] h-[581px]">
            <div className="w-[1400px] mt-[96px]">
                <div>
                    <img src="./images/Shape.png" alt="" />
                    <h1 className="w-[704px] h-[58px] font-display font-normal text-[48px] leading-[58px] text-[#232536] mt-[19px]">Read our latest blogs & news</h1>
                </div>
                <div className="flex gap-[32px] mt-[48px]">
                    <div className="flex w-[624px] h-[248px] bg-[#FFFFFF] gap-[32px] items-center">
                        <img src="./images/Image.png" alt="" />
                        <div>
                            <h3 className="w-[81px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536] opacity-[0.6]">Jan 19, 2021</h3>
                            <h2 className="w-[264px] h-[108px] font-display font-normal text-[24px] leading-[36px] text-[#232536]">Today’s best design trends for digital products</h2>
                            <div className="flex items-center gap-[10px] mt-[24px]">
                                <a className="w-[89px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#444CFC] opacity-[0.87]" href="#">Read more</a>
                                <img src="./images/Icon (1).png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[624px] h-[248px] bg-[#FFFFFF] gap-[32px] items-center">
                        <img src="./images/Image (1).png" alt="" />
                        <div>
                            <h3 className="w-[81px] h-[20px] font-display font-normal text-[14px] leading-[20px] text-[#232536] opacity-[0.6]">Jan 19, 2021</h3>
                            <h2 className="w-[264px] h-[108px] font-display font-normal text-[24px] leading-[36px] text-[#232536]">A practical guide to building a brand strategy</h2>
                            <div className="flex items-center gap-[10px] mt-[24px]">
                                <a className="w-[89px] h-[24px] font-display font-normal text-[16px] leading-[24px] text-[#444CFC] opacity-[0.87]" href="#">Read more</a>
                                <img src="./images/Icon (1).png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}