
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Hero/banner section
function AboutHero() {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-700 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
          About Noorcom Electronics
        </h1>
        <p className="text-lg md:text-xl text-gray-100">
          Your trusted partner for quality electronics and exceptional service since our inception.
        </p>
      </div>
    </div>
  );
}

// "Our Story" and image
function AboutStory() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-2 text-gray-700">
            Founded with a vision to make quality electronics accessible to everyone in Kenya, Noorcom Electronics has grown from a small local business to a trusted name in the technology retail industry.
          </p>
          <p className="mb-2 text-gray-700">
            We started our journey recognizing the need for reliable, affordable electronics backed by exceptional customer service. Today, we continue to uphold these values while expanding our product range and improving our services.
          </p>
          <p className="mb-2 text-gray-700">
            Our commitment to quality, competitive pricing, and customer satisfaction has made us a preferred choice for individuals, businesses, and institutions across Kenya.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&q=80"
            alt="Noorcom Electronics Store"
            className="rounded-xl shadow-lg object-cover max-h-72 w-full bg-gray-100"
          />
        </div>
      </div>
    </section>
  );
}

// Mission, Vision, Values
function AboutMissionVision() {
  const items = [
    {
      title: "Our Mission",
      desc: "To provide quality electronics and technology solutions that enhance the lives and productivity of our customers while delivering exceptional value and service.",
      icon: "🎯",
      color: "from-red-100 to-red-50",
    },
    {
      title: "Our Vision",
      desc: "To be Kenya's leading electronics retailer, known for innovation, reliability, and customer-centric approach in the technology marketplace.",
      icon: "👁️",
      color: "from-blue-100 to-blue-50",
    },
    {
      title: "Our Values",
      desc: "Quality, integrity, customer satisfaction, innovation, and building lasting relationships with our customers and community.",
      icon: "💡",
      color: "from-green-100 to-green-50",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <Card key={item.title} className="shadow-md h-full">
            <CardContent className="flex flex-col items-center gap-4 py-8">
              <span
                className={`rounded-full text-3xl p-4 bg-gradient-to-br ${item.color}`}
                aria-label={item.title}
              >
                {item.icon}
              </span>
              <h3 className="font-bold text-xl mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center text-sm">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// What We Offer section with grid
function AboutOffer() {
  const offers = [
    {
      title: "Computing Solutions",
      desc: "Laptops, desktops, accessories, and components from leading brands for personal and business use.",
      icon: "💻",
      color: "text-red-600",
    },
    {
      title: "Mobile Devices",
      desc: "Latest smartphones, tablets, and mobile accessories to keep you connected and productive.",
      icon: "📱",
      color: "text-red-600",
    },
    {
      title: "Networking Equipment",
      desc: "Routers, switches, cables, and networking solutions for home and business connectivity.",
      icon: "🧑‍💻",
      color: "text-red-600",
    },
    {
      title: "Office Equipment",
      desc: "Printers, scanners, copiers, and office technology to enhance workplace productivity.",
      icon: "🖨️",
      color: "text-red-600",
    },
    {
      title: "Smart Accessories",
      desc: "Smartwatches, wireless earbuds, chargers, and innovative tech accessories.",
      icon: "⌚",
      color: "text-red-600",
    },
    {
      title: "Technical Support",
      desc: "Professional installation, maintenance, and technical support services for all our products.",
      icon: "🛠️",
      color: "text-red-600",
    },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">What We Offer</h2>
        <p className="text-gray-600">
          We provide a comprehensive range of electronics and technology solutions to meet all your needs.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <Card key={offer.title} className="shadow-sm border border-slate-100">
            <CardContent className="flex flex-col gap-2 py-6">
              <div className={`text-3xl mb-2 ${offer.color}`}>{offer.icon}</div>
              <h3 className="font-semibold text-lg">{offer.title}</h3>
              <p className="text-gray-600 text-sm">{offer.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// Why Choose Noorcom section (value props)
function AboutWhyChoose() {
  const points = [
    {
      icon: "🛡️",
      title: "Quality Guaranteed",
      desc: "All products come with manufacturer warranty and our quality assurance.",
      color: "bg-red-100"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      desc: "Quick and reliable delivery across Kenya with real-time tracking.",
      color: "bg-blue-100"
    },
    {
      icon: "💬",
      title: "24/7 Support",
      desc: "Our customer support team is available to help you anytime.",
      color: "bg-green-100"
    },
    {
      icon: "💳",
      title: "Secure Payments",
      desc: "Multiple secure payment options including M-PESA and bank transfers.",
      color: "bg-purple-100"
    },
  ];
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Why Choose Noorcom Electronics?
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We're committed to providing exceptional value and service to our customers.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {points.map((p) => (
            <Card key={p.title} className="shadow-sm">
              <CardContent className="flex flex-col gap-2 items-center py-7">
                <div className={`rounded-full text-2xl p-3 mb-1 ${p.color}`}>{p.icon}</div>
                <h4 className="font-semibold text-center">{p.title}</h4>
                <p className="text-xs text-gray-600 text-center">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Get in Touch section
function AboutContact() {
  return (
    <section className="py-10 px-4 bg-slate-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div>
          <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
          <p className="mb-4 text-gray-200">
            Ready to experience the Noorcom difference? Contact us today!
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-2 text-base">
            <span className="flex items-center gap-2"><span className="text-red-400">📞</span> 0722 723 362</span>
            <span className="flex items-center gap-2"><span className="text-red-400">✉️</span> info@noorcom.co.ke</span>
            <span className="flex items-center gap-2"><span className="text-red-400">📍</span> Nairobi, Kenya</span>
          </div>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-lg px-7 py-3 shadow-lg rounded-md mt-6 md:mt-0">
          Contact Us
        </Button>
      </div>
    </section>
  );
}

const About = () => (
  <div className="min-h-screen bg-gray-50">
    <AboutHero />
    <AboutStory />
    <AboutMissionVision />
    <AboutOffer />
    <AboutWhyChoose />
    <AboutContact />
  </div>
);

export default About;
