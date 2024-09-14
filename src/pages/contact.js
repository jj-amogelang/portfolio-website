// pages/contact.js
const Contact = () => {
    return (
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <input className="w-full p-2 border rounded" type="text" placeholder="Name" />
          <input className="w-full p-2 border rounded" type="email" placeholder="Email" />
          <textarea className="w-full p-2 border rounded" placeholder="Your message"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  