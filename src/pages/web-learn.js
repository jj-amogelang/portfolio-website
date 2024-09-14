import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function WebLearn() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* WebLearn Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">WebLearn</h1>
          <p className="text-lg mb-12">Explore the latest in robotics, property development, and proptech through insightful articles and resources.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="relative w-full h-48 mb-4">
                <Image src="/images/robotics.jpg" alt="Robotics in South Africa" layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Robotics in South Africa</h3>
              <p>Discover the latest advancements and opportunities in robotics across South Africa.</p>
              <a href="/robotics" className="text-blue-500 hover:underline mt-4 inline-block">Learn More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="relative w-full h-48 mb-4">
                <Image src="/images/property.jpeg" alt="Property in South Africa" layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Property in South Africa</h3>
              <p>Explore the current trends and future directions in the property market of South Africa.</p>
              <a href="/property" className="text-blue-500 hover:underline mt-4 inline-block">Learn More</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="relative w-full h-48 mb-4">
                <Image src="/images/proptech.jpg" alt="Proptech Uprising" layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Proptech Uprising</h3>
              <p>Stay updated on the rise of proptech and its impact on the real estate industry.</p>
              <a href="/proptech" className="text-blue-500 hover:underline mt-4 inline-block">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

  