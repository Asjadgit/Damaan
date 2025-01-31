import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiCheckCircle, BiPhone } from "react-icons/bi";
import { homeImage } from "../../assets/main";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-16 bg-hero-gradient">
      <div
        className="container mx-auto px-6 lg:px-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div
            className="lg:w-5/12 pt-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-accent font-semibold ">MORE ABOUT US</span>
            <h2 className="text-3xl font-bold mt-2">
              Damaan College of IT and Emerging Sciences
            </h2>
            <p className="text-gray-600 mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Lorem ipsum dolor
                  sit amet
                </li>
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Consectetur
                  adipiscing elit
                </li>
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Sed do eiusmod
                  tempor
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Incididunt ut labore
                  et
                </li>
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Dolore magna aliqua
                </li>
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Ut enim ad minim
                  veniam
                </li>
              </ul>
            </div>
          </div>

          <div
            className="lg:w-6/12 relative pt-14"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative w-full">
              <img
                src={homeImage.about5}
                alt="Business Meeting"
                className="w-full rounded-lg shadow-lg"
              />
              <img
                src={homeImage.about2}
                alt="Team Discussion"
                className="w-1/3 absolute top-1/4 -left-10 border-4 border-white rounded-lg shadow-md"
              />
            </div>
            <div className="absolute bottom-5 right-5 bg-accent text-white p-4 rounded-lg shadow-lg text-center animate-bounce">
              <h3 className="text-3xl font-bold">
                15+ <span className="text-lg">Years</span>
              </h3>
              <p className="text-sm mt-1">Of experience in business service</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Principle */}

      <div
        className="container mx-auto px-6 lg:px-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div
            className="lg:w-5/12 pt-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span className="text-accent font-semibold ">ABOUT PRINCIPLE </span>
            <h2 className="text-3xl font-bold mt-2"> Muhammad Rizwan Ali </h2>
            <p className="text-gray-600 mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Lorem ipsum dolor
                  sit amet
                </li>
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Consectetur
                  adipiscing elit
                </li>
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Sed do eiusmod
                  tempor
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Incididunt ut labore
                  et
                </li>
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Dolore magna aliqua
                </li>
                <li className="flex items-center gap-2">
                  <BiCheckCircle className="text-accent" /> Ut enim ad minim
                  veniam
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col lg:flex-row gap-6">
              <div className="flex items-center gap-4"></div>
            </div>
          </div>

          <div
            className="lg:w-6/12 mt-24 relative"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="relative w-full">
              <img
                src={homeImage.about5}
                alt="Business Meeting"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Staff Section */}

      <div className="container my-30 mx-auto py-10 px-6 lg:px-20" data-aos="fade-up" data-aos-delay="100">
  {/* <!-- Heading --> */}
  <h2 className="text-3xl  font-bold text-center text-gray-800 mb-12" data-aos="fade-up" data-aos-delay="150">
    Our Staff
  </h2>

  {/* <!-- Team Members --> */}
  <div className="flex flex-col lg:flex-row items-center justify-between gap-10  " data-aos="fade-up" data-aos-delay="250">
    {/* <!-- Team Member 1 --> */}
    <div className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover" src={homeImage.about2} alt="Team Member 1" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">M Bilal</h3>
        <p className="text-gray-600">Campus Admin</p>
      </div>
    </div>

    {/* <!-- Team Member 2 --> */}
    <div className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover" src={homeImage.about5} alt="Team Member 2" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">M Umair</h3>
        <p className="text-gray-600">Quality Engineer</p>
      </div>
    </div>
    <div className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover" src={homeImage.about5} alt="Team Member 2" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">M Usman</h3>
        <p className="text-gray-600">Instructor</p>
      </div>
    </div>

    {/* <!-- Team Member 3 --> */}
    <div className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-56 object-cover" src={homeImage.about2} alt="Team Member 3" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
        <p className="text-gray-600">Project Manager</p>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default About;
