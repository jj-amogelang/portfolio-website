import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Property() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Property in South Africa</h1>
          <p className="text-lg mb-12">Explore trends, opportunities, and future directions in South Africa's property market.</p>
          {/* Add content related to property here */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
