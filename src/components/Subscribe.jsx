export default function Subscribe() {
    return (
        <div className="flex mr-[130px]">
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
    )
}