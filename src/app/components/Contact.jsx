const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <div className="max-w-xl mx-auto">
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 bg-gray-700 rounded-md focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 bg-gray-700 rounded-md focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 bg-gray-700 rounded-md focus:outline-none h-40"
          />
          <button className="px-6 py-3 bg-teal-500 rounded-md hover:bg-teal-600">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
