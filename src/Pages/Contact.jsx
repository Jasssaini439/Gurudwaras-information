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
        body: formData
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

    <div className="mt-40  flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">

       <div className="bg-[url('/contactimage.jpg')] bg-cover bg-center w-full mt-14 rounded-lg md:w-96 h-[650px] relative">

        
        </div>
    
        <form
          onSubmit={onSubmit}
          className=" p-10 md:w-1/2 rounded-2xl md:rounded-l-none"
        >

      <h1 className="text-4xl font-bold uppercase text-orange-500 mb-6">Contact Us</h1>
      <p className="text-xl text-orange-500 capitalize mb-4">We'd love to hear from you!</p>
  
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="border border-gray-300 p-2 mb-4 w-full rounded"
        required
      />
      
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="border border-gray-300 p-2  mb-4 w-full rounded"
        required
      />
      
      <textarea
        placeholder="Your Message"
        name="message"
        className="border border-gray-300 p-2 mb-4 w-full rounded h-32 resize-none"
        required
      ></textarea>
      
      <button
        type="submit"
        className="bg-orange-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
      >
        Send Message
      </button>
      
    <span className="flex flex-wrap font-bold py-3  rounded">{result}</span>
    </form>
  
  </div>
    );
    }  
export default Contact;



