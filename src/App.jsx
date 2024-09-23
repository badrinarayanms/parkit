import React from 'react';
import './App.css';
import { IoMdMail } from "react-icons/io";
import { FaLocationDot ,FaLinkedin} from "react-icons/fa6";
import { AiFillInstagram ,AiFillFacebook  } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <AboutUs />
      <Steps />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header className="bg-white shadow-sm p-4">
    <nav className="flex justify-between items-center container mx-auto px-4 md:px-0">
      <div className="text-xl font-bold text-[#F9C935]"><img src="/logo.png" width={50}  alt="" /></div>
      <ul className="hidden md:flex space-x-10">
        <li><a href="#Home" className="text-black font-semibold">Home</a></li>
        <li><a href="#about" className="text-black font-semibold">About us</a></li>
        <li><a href="#contact" className="text-black font-semibold">Contact Us</a></li>
      </ul>
      <button className="hidden md:block bg-[#F9C935] text-black font-semibold px-6 py-2 rounded-lg">Book now</button>
      {/* Add hamburger menu for smaller screens */}
      <div className="md:hidden">
        <button className="text-[#F9C935]">☰</button>
      </div>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className=" py-16 px-4 md:px-0">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-black">Your Space, Your Time</h1>
        <p className="text-base md:text-lg mt-4">Say goodbye to parking stress! Our app helps you find and reserve spots in seconds. Tap, park, and relax—your space is waiting</p>
        <div className="mt-6">
          <button className="bg-[#F9C935] text-black   text-md px-14 py-4 rounded-lg font-semibold mr-4">Book now</button>
          <button className="bg-black text-white text-md px-14 py-4 rounded-lg font-semibold mt-4 md:mt-0">Sign up</button>
        </div>
      </div>
      <img src="/heroimg.png" alt="Parking Lot" className="w-full md:w-1/2 mt-8 md:mt-0" />
    </div>
  </section>
);

const Services = () => (
  <section className="py-16 bg-[#F0F0F0] rounded-xl ">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center">Services</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10 mt-10">
        <ServiceCard title="Instant Parking Reservations" description="Easily find and reserve parking spots in our owned and managed lots." img="/s1.png" />
        <ServiceCard title="Explore Nearby Parking Spots" description="Quickly find and reserve secure parking spots near you." img="/s2.png" />
        <ServiceCard title="Offline Booking" description="No internet? No problem! Reserve your parking spot offline and enjoy convenience." img="/s3.png" />
      </div>
    </div>
  </section>
);

const ServiceCard = ({ title, description,img }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg text-center md:w-60">
    <div className="text-yellow-500 text-4xl flex justify-center mb-4"><img src={img} alt="" /></div>
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const AboutUs = () => (
  <section className="bg-white py-16 px-4 md:px-0">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold">Park It – your go-to solution for parking!</h2>
      <p className="mt-4 text-base md:text-lg">
        Welcome to PARKIT! We understand how essential it is to have a hassle-free parking experience. Whether you're a vehicle owner seeking a convenient parking spot or a traveler in need of safe, accessible parking, we are here to provide you with the most reliable and streamlined parking solutions.
      </p>
    </div>

    <div className="container mx-auto text-center mt-10">
      <h2 className="text-3xl font-bold">Why choose us?</h2>
      <p className="mt-4 text-base md:text-lg">
      At PARKIT, we offer a specialized range of parking solutions tailored to meet your needs. Our parking lots are exclusively owned by us, meaning that we focus solely on providing high-quality spaces across our own properties. We partner with landowners to convert their land into parking spaces under our brand, ensuring well-maintained, secure, and accessible parking for you.  </p>
      <p className="mt-4 text-base md:text-lg">Say goodbye to the hassle of circling around blocks in search of parking spots. With PARKIT, you can reserve your parking spot online, selecting the nearest available lot, and choosing your desired parking duration. Once reserved, our system generates a QR code for your booking, allowing easy check-in and check-out at our parking facilities. Security staff can scan your QR code for real-time management of parking availability.
      </p>
      <p className="mt-4 text-base md:text-lg">
      Additionally, our app offers offline reservation options, so you can secure your spot even without internet access.</p>
    </div>
  </section>
);

const Steps = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center">Steps to Follow</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0  mt-10" >
        <StepCard title="Select Parking Spot" description="Choose a nearby parking lot and set your parking duration." img="/s1.png" back="F9C935" txt='000000' />
        <StepCard title="Payment" description="Complete your booking through our secure payment gateway." img="/pay.png" back="535353" txt='FFFFFF' />
        <StepCard title="Scan QR at Parking Lot" description="Present your QR code at the entrance for a smooth check-in." img="/qr.png" back="000000" txt='F9C935'/>
        <StepCard title="Enjoy Stress-Free Parking" description="Relax knowing your parking spot is ready when you arrive." img="/happy.png" back="D9D9D9" txt='535353' />
      </div>
    </div>
  </section>
);

const StepCard = ({ title, description,img,back,txt }) => (
  <div className={`p-6 bg-[#${back}]   text-center md:w-60`}>
    <div className={`text-[#${txt}] text-4xl flex justify-center mb-4`}><img src={img} alt="" /></div>
    <h3 className={`font-bold text-[#${txt}] text-lg`}>{title}</h3>
    <p className={`text-[#${txt}] mt-2`}>{description}</p>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white pt-8 px-4 md:px-0">
    <div className="container mx-auto flex text-center">
      <div className='p-10 items-center'>
        <img src="/logo.png" width={100} alt="" />
        <div className='flex gap-4 mt-4'>
        <AiFillInstagram  size={30}/>
        <AiFillFacebook size={30} />
        <FaLinkedin size={30}/>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-10">
        <QuickLinks />
        <ReachUs />
      </div>
    </div>
    <p className="mt-6 p-8 bg-[#F9C935]">© 2024 Park It. All rights reserved | Terms & Conditions | Privacy Policy</p>

  </footer>
);

const QuickLinks = () => (
  <div>
    <h4 className="font-bold text-lg text-start">Quick Links</h4>
    <ul className="mt-2 space-y-2 text-start">
      <li><a href="#Home" className="text-gray-400">Home</a></li>
      <li><a href="#about" className="text-gray-400">About Us</a></li>
      <li><a href="#contact" className="text-gray-400">Contact Us</a></li>
      <li><a href="#booking" className="text-gray-400">Booking Slot</a></li>
      <li><a href="#explore" className="text-gray-400">Explore</a></li>
    </ul>
  </div>
);

const ReachUs = () => (
  <div >
    <h4 className="font-bold text-lg text-start">Reach Us</h4>
    
    
    <ul className="mt-2 space-y-2 text-start">
      <li><p className="mt-2 text-gray-400 flex items-center"><IoMdMail className='mr-2' />helpline.parkit@gmail.com</p></li>
      <li><p className="text-gray-400 flex items-center"><FaLocationDot className='mr-2' />1234 No-Parking Lane, Parallel Universe, Planet Parktopia</p></li>
      
    </ul>
  </div>
);

export default App;
