import React, { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GoGraph } from "react-icons/go";
import { FiAward } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";
import { homeImage } from "../../assets/main";
import CountUp from "react-countup";

const HeroSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleCourse = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const courses = [
        {
            question: "What is DIT?",
            answer: "DIT typically stands for Diploma in Information Technology. It is a vocational education program designed to provide foundational knowledge and practical skills in various areas of information technology (IT).",
        },
        {
            question: "What can I learn in CAD",
            answer: "Mobile App Development focuses on creating applications for mobile devices using platforms like React Native, Flutter, or native development tools for Android and iOS.",
        },
        {
            question: "What is Graphic Designing",
            answer: "Data Science involves analyzing and interpreting complex data sets to help organizations make data-driven decisions. It includes learning tools like Python, R, and machine learning techniques.",
        },
        {
            question: "What is AI & Machine Learning?",
            answer: "AI and Machine Learning are fields of study focused on building systems that can learn from data and improve over time. Learn to implement algorithms and neural networks using Python.",
        },
        {
            question: "What is Cloud Computing?",
            answer: "Cloud Computing allows you to use computing resources over the internet. Learn to deploy and manage applications using cloud services like AWS, Google Cloud, and Microsoft Azure.",
        },
        {
            question: "What is Game Development?",
            answer: "Game Development involves creating interactive games using game engines like Unity or Unreal Engine. Learn how to build 2D and 3D games with features like AI and physics engines.",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section
                id="hero"
                className="relative pt-10 pb-16 bg-hero-gradient"
            >
                <div
                    className="container mx-auto px-6"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="flex flex-wrap items-center">
                        {/* Left Side */}
                        <div
                            className="w-full lg:w-1/2"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 mt-20 mb-6 bg-accent/20 text-accent font-medium px-5 py-2 rounded-full">
                                    <FaGear /> Working for your success
                                </div>
                                <h1 className="text-4xl font-bold leading-tight mb-4">
                                    Damaan <br /> College of IT <br />
                                    <span className="text-accent">
                                        And Emerging Sciences
                                    </span>
                                </h1>
                                <p className="text-lg text-gray-700 mb-6">
                                    Damaan College of IT & Emerging Sciences is
                                    a modern educational institution dedicated
                                    to providing high-quality education in
                                    information technology and emerging fields.
                                    The college focuses on equipping students
                                    with cutting-edge technical skills,
                                    industry-relevant knowledge, and practical
                                    experience to prepare them for successful
                                    careers in the digital world.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#about"
                                        className="btn-primary rounded-lg py-3 px-6 text-lg text-white bg-accent"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div
                            className="w-full lg:w-1/2 flex justify-center"
                            data-aos="zoom-out"
                            data-aos-delay="300"
                        >
                            <img
                                src={homeImage.homeillustration}
                                alt="Hero Image"
                                className="w-full max-w-md mx-auto"
                            />
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        {[
                            {
                                icon: <FaTrophy />,
                                title: "Trophy",
                                desc: "Achievements & Awards",
                            },
                            {
                                icon: <CiMail />,
                                title: "Mail",
                                desc: "Stay Connected",
                            },
                            {
                                icon: <GoGraph />,
                                title: "Graph",
                                desc: "Growth & Performance",
                            },
                            {
                                icon: <FiAward />,
                                title: "Award",
                                desc: "Excellence & Recognition",
                            },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-lg"
                            >
                                <div className="flex items-center justify-center text-2xl w-16 h-16 bg-accent/20 text-accent rounded-full">
                                    {stat.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold">
                                        {stat.title}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Counter Section */}
                    <div id="stats" className="mt-16">
                        <div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {[
                                { start: 0, end: 232, label: "Founding Years" },
                                { end: 521, label: "Projects" },
                                { end: 1453, label: "Students" },
                                { end: 32, label: "Workers" },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg shadow-md"
                                >
                                    <span className="text-4xl font-bold text-accent">
                                        <CountUp
                                            start={0}
                                            end={stat.end}
                                            duration={5}
                                        />
                                    </span>
                                    <p className="text-lg text-gray-600">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Affiliated Institutes Section */}
                    <div
                        id="affiliated-institutes"
                        className="py-12 bg-gray-100 mt-16   w-full"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className=" mx-auto text-center w-full">
                            <h2 className="text-3xl font-bold mb-8">
                                Our Affiliated Institutes
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {[
                                    {
                                        name: "Institute 1",
                                        logo: "institute1-logo.png",
                                        desc: "Short description about Institute 1.",
                                    },
                                    {
                                        name: "Institute 2",
                                        logo: "institute2-logo.png",
                                        desc: "Short description about Institute 2.",
                                    },
                                    {
                                        name: "Institute 2",
                                        logo: "institute2-logo.png",
                                        desc: "Short description about Institute 2.",
                                    },
                                    {
                                        name: "Institute 2",
                                        logo: "institute2-logo.png",
                                        desc: "Short description about Institute 2.",
                                    },

                                    // Add more institutes here
                                ].map((institute, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-lg shadow-lg"
                                    >
                                        <img
                                            src={institute.logo}
                                            alt={institute.name}
                                            className="w-20 mx-auto mb-4"
                                        />
                                        <h3 className="text-xl font-semibold">
                                            {institute.name}
                                        </h3>
                                        <p className="text-gray-600">
                                            {institute.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Side: Heading and Image */}
                            <div className="flex flex-col justify-center items-start">
                                <h2 className="text-3xl font-bold mb-4">
                                    What will you Learn ? Check out Here!
                                </h2>
                                <p className="text-lg mb-6">
                                    Maecenas tempus tellus eget condimentum
                                    rhoncus sem quam semper libero sit amet
                                    adipiscing sem neque sed ipsum.
                                </p>
                                <div className="hidden lg:block">
                                    <svg
                                        className="faq-arrow w-52 h-auto"
                                        width="200"
                                        height="211"
                                        viewBox="0 0 200 211"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Right Side: FAQ */}
                            <div className="flex flex-col">
                                {courses.map((course, index) => (
                                    <div
                                        key={index}
                                        className={`bg-white p-6 rounded-lg shadow-md transition-all ease-in-out duration-300 ${
                                            activeIndex === index
                                                ? "border-l-4 border-accent"
                                                : ""
                                        }`}
                                    >
                                        <h3
                                            onClick={() => toggleCourse(index)}
                                            className="text-xl font-semibold cursor-pointer flex justify-between items-center hover:text-accent"
                                        >
                                            {course.question}
                                            <svg
                                                className={`w-5 h-5 transition-transform ${
                                                    activeIndex === index
                                                        ? "transform rotate-90"
                                                        : ""
                                                }`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </h3>
                                        {activeIndex === index && (
                                            <p className="mt-4 text-gray-600">
                                                {course.answer}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
