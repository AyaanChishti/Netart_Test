/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/images/logo.png";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import "./MainPage1.css";
const MainPage1 = () => {
  return (
    <div className="grid   grid-cols-2  bg-[rgba(255,249,188,255)]">
      <div className=" col-span-2 flex items-start justify-center  bg-[rgba(255,253,227,255)]">
        <header>
          <img src={logo} alt="Logo" className="h-32" />
        </header>
      </div>

      <div className=" col-span-2 sm:col-span-1 flex justify-center h-[300px] sm:h-[640px]   bg-[rgba(255,252,219,255)]">
        <img src={image1} alt="Image 1" className="w-90% h-full" />
      </div>

      <div className=" col-span-2 sm:col-span-1   bg-[rgba(255,252,219,255)]">
        <h1 className="font-bold text-lg mb-1">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h1>
        <ul className="list-disc list-inside text-sm pl-8">
          <li>
            C.R.I. energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img src={image2} alt="Image 2" className="w-full h-auto" />
        <p className="font-thin text-m mb-1">
          Government of India has awarded the "
          <b>National Energy Conservation Award 2018</b>". Mr. G. Selvaraj,
          Joint Managing Director of C.R.I. Group received the award from Smt.
          Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
          Honorable Minister of State.
        </p>
      </div>
      <div className=" col-span-2 flex items-start justify-center bg-[rgba(255,251,205,255)]">
        <p className="">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
      </div>
      <div className=" col-span-2  flex items-start justify-center bg-[rgba(255,250,196,255)]">
        <img src={image3} alt="Logo" className="h-[150px] sm:h-96" />
      </div>
      <div className=" col-span-2 flex items-start justify-center mt-4 mb-4">
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
      </div>
      <div className=" col-span-2 flex items-start justify-center">
        <div className="red-line"></div>
      </div>
      <div className=" col-span-2 flex items-start justify-center">
        <p className="font-bold mt-2">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
      </div>
      <div className=" col-span-2 flex items-start justify-center">
        <p className="mt-2">
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            CHEMICALS PROCESS
          </span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">POWER</span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            WATER & WASTE WATER
          </span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            OILS & GAS
          </span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">PHARMA</span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            SUGARS & DISTILLERIES
          </span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            PAPER & PULP
          </span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            MARINE & DEFENCE
          </span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            METAL & MINING
          </span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            FOOD & BEVERAGE
          </span>
        </p>
      </div>
      <div className=" col-span-2 flex items-start justify-center">
        <p className="mt-2">
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            PETROCHEMICAL & REFINERIES
          </span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">SOLAR</span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            BUILDING HVAC
          </span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            FIRE FIGHTING
          </span>
          <span className="border-r border-[#8B0000] pr-2 pl-2">
            AGRICULTURE & RESIDENTIAL
          </span>
        </p>
      </div>
      <div className=" col-span-2 flex flex-col sm:flex-row  items-start justify-center pl-2 pr-2">
        <div className="red-box flex items-center justify-center">
          <FontAwesomeIcon icon={faPhone} className="text-white" />
          <span className="ml-2 text-white">TollFree NO 1800 200 1234</span>
        </div>
        <div className="red-box flex items-center justify-center">
          <FontAwesomeIcon icon={faFacebook} className="text-white" />
          <span className="ml-2 text-white">www.facebook.com/cripumps</span>
        </div>
        <div className="red-box flex items-center justify-center">
          <FontAwesomeIcon icon={faGlobe} className="text-white" />
          <span className="ml-2 text-white">www.crigroups.com.com</span>
        </div>
      </div>
    </div>
  );
};
export default MainPage1;
