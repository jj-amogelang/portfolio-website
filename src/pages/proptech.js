import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Proptech() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Proptech Uprising</h1>
          <p className="text-lg mb-12">Stay informed about the rise of proptech and its influence on the real estate industry.</p>
          {/* Add content related to proptech here */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
