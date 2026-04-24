import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Header";
import Footer from "./Footer";
import Bottom from "./Bottom";

export default function Request() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        navigate("/");
    };

    return (
        <>
            <header className="box-border bg-[#232536] w-full">
                <Navbar />
            </header>

            <main className="flex justify-center items-center min-h-[calc(100vh-160px)] bg-[#F9F9FF] py-[80px]">
                <div className="bg-white" style={{ width: "565px", padding: "56px 48px 48px 48px" }}>

                    {/* Back button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-[8px] mb-[32px] text-[#444CFC] font-display text-[14px] cursor-pointer hover:opacity-70 transition-opacity duration-200"
                    >
                        ← Back
                    </button>

                    {/* Heading */}
                    <h1
                        className="font-display font-bold text-[#232536]"
                        style={{ fontSize: "32px", lineHeight: "42px" }}
                    >
                        Have a Question ?{" "}
                        <br />
                        Let's Get in Touch with us 👋
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="font-display font-normal text-[#5D5F6D] mt-[12px]"
                        style={{ fontSize: "14px", lineHeight: "20px" }}
                    >
                        Fill up the form and the team will get back to within 24 hrs
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mt-[32px] flex flex-col gap-[20px]">
                        {/* Name */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="req-name"
                                className="font-display font-normal text-[12px] leading-[16px] text-[#5D5F6D] mb-[4px]"
                            >
                                Name
                            </label>
                            <input
                                id="req-name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Paresh Srichandan"
                                required
                                className="font-display font-normal text-[16px] leading-[24px] text-[#232536] border-b border-[#CCCCCC] pb-[8px] outline-none focus:border-[#444CFC] transition-colors duration-200 bg-transparent"
                            />
                        </div>

                        {/* E-mail */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="req-email"
                                className="font-display font-normal text-[12px] leading-[16px] text-[#5D5F6D] mb-[4px]"
                            >
                                E-mail
                            </label>
                            <input
                                id="req-email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Paresh@pixeto.com"
                                required
                                className="font-display font-normal text-[16px] leading-[24px] text-[#232536] border-b border-[#CCCCCC] pb-[8px] outline-none focus:border-[#444CFC] transition-colors duration-200 bg-transparent"
                            />
                        </div>

                        {/* Subject */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="req-subject"
                                className="font-display font-normal text-[12px] leading-[16px] text-[#5D5F6D] mb-[4px]"
                            >
                                Subject
                            </label>
                            <input
                                id="req-subject"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="For web design work Enquire"
                                required
                                className="font-display font-normal text-[16px] leading-[24px] text-[#232536] border-b border-[#CCCCCC] pb-[8px] outline-none focus:border-[#444CFC] transition-colors duration-200 bg-transparent"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <label
                                htmlFor="req-message"
                                className="font-display font-normal text-[12px] leading-[16px] text-[#5D5F6D] mb-[4px]"
                            >
                                Message
                            </label>
                            <input
                                id="req-message"
                                type="text"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your Message"
                                className="font-display font-normal text-[16px] leading-[24px] text-[#5D5F6D] border-b border-[#CCCCCC] pb-[8px] outline-none focus:border-[#444CFC] transition-colors duration-200 bg-transparent"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="flex items-center w-[210px] h-[64px] bg-[#444CFC] cursor-pointer mt-[12px] hover:bg-[#3238e0] transition-colors duration-200"
                        >
                            <img
                                className="relative bottom-[18px]"
                                src="./images/Shapes.svg"
                                alt=""
                            />
                            <div className="flex items-center gap-[10px] ml-[-4px]">
                                <span className="font-display font-normal text-[16px] leading-[24px] text-[#FFFFFF] opacity-[0.87]">
                                    Send Message
                                </span>
                                <img src="./images/Icon.png" alt="" />
                            </div>
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
            <div className="h-[80px] bg-[#FFE6D2]">
                <Bottom />
            </div>
        </>
    );
}
