
import React from "react";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/contact/ContactSidebar";
import ContactForm from "@/components/contact/ContactForm";
import ContactFaq from "@/components/contact/ContactFaq";

const Contact = () => (
  <div className="bg-[#f7f8fa] min-h-screen flex flex-col">
    {/* Banner */}
    <div className="w-full bg-gradient-to-b from-[#1a2536] to-[#233047] py-12 px-2 mb-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-lg text-gray-200">Get in touch with our team. We're here to help with all your electronics needs.</p>
      </div>
    </div>
    {/* Main content - sidebar and form */}
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mb-12 w-full px-2">
      <ContactSidebar />
      <ContactForm />
    </div>
    <ContactFaq />
    <Footer />
  </div>
);

export default Contact;
