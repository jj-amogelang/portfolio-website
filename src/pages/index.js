import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { FaLaptopCode, FaRobot, FaBuilding } from 'react-icons/fa'; // Correct import for react-icons

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/images/hero-bg.jpeg")' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl font-bold mb-4 animate__animated animate__fadeIn">Welcome to My World</h1>
          <p className="text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s">IT Graduate | Robotics Programmer | Aspiring Property Developer</p>
          <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 animate__animated animate__fadeIn animate__delay-2s">
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-white text-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">Who I Am</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <p className="text-lg">
              I am an IT graduate specializing in robotics programming and web development. Currently, I am pursuing honors in property development, combining my tech skills with my passion for real estate to shape the future of smart properties.
            </p>
            <p className="mt-4">
              With a deep interest in the convergence of technology and property, I’m working towards innovative solutions in the fields of proptech and robotics in South Africa.
            </p>
            <Link href="/portfolio" className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              See My Work
            </Link>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <FaLaptopCode className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Web Development</h3>
              <p>Creating seamless user experiences and building dynamic web applications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <FaRobot className="text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Robotics</h3>
              <p>Innovating in robotics to solve complex challenges and enhance automation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <FaBuilding className="text-red-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">Property Development</h3>
              <p>Exploring the intersection of technology and property to create future-ready developments.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="bg-gray-200 py-12 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Programming Languages</h3>
              <p>Python, JavaScript, C++, Java</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Web Technologies</h3>
              <p>React, Next.js, Node.js, Tailwind CSS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Robotics</h3>
              <p>ROS, Arduino, Raspberry Pi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-8 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Want to Collaborate?</h2>
        <p className="text-lg mb-8">
          Let’s work together to create something amazing. Whether it’s a tech project, a property venture, or something new and exciting, I’m always open to new opportunities.
        </p>
        <Link href="/contact" className="bg-white hover:bg-gray-200 text-blue-600 font-bold py-3 px-6 rounded transition duration-300">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}



  