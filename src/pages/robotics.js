import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Robotics() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Robotics in South Africa</h1>
          <p className="text-lg mb-12">Learn about the latest developments and opportunities in robotics within South Africa.</p>
          {/* Add content related to robotics here */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
