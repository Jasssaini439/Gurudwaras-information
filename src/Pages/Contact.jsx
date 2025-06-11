import React from "react";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "36636bb3-6330-4fc3-93e0-17c3545ed3b7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4">
      
    
  {/* Blessing Text */}
  <p className="block md:hidden text-center text-xl font-serif font-bold md:text-lg pt-16 text-orange-600 mb-2 md:mb-4 dark:text-orange-500/70">
    
    "Every connection begins with a message — let’s make something meaningful."
  </p>

      {/* Left Image Box */}
      <div className="bg-[url('/contactimage.jpg')] bg-contain md:bg-cover bg-center w-72 mt-16 md:w-96 h-[450px] md:h-[650px] rounded-lg md:rounded-r-none mb-8 md:mb-0"></div>
    
      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="w-full md:w-1/2 bg-white dark:bg-black p-6 md:p-10 rounded-2xl md:rounded-l-none shadow"
      >
        <h1 className="text-2xl md:text-4xl font-bold uppercase text-orange-500 mb-4 md:mb-6">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-orange-500 capitalize mb-4">
          We'd love to hear from you!
        </p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border border-gray-300 p-2 mb-4 w-full rounded text-sm"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border border-gray-300 p-2 mb-4 w-full rounded text-sm"
          required
        />

        <textarea
          placeholder="Your Message"
          name="message"
          className="border border-gray-300 p-2 mb-4 w-full rounded h-28 md:h-32 resize-none text-sm"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-orange-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-full md:w-auto"
        >
          Send Message
        </button>

        <span className="block font-bold py-3">{result}</span>
      </form>
    </div>
  );
}

export default Contact;
