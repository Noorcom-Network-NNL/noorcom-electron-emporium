
import React from "react";

const FAQS = [
  {
    q: "What are your delivery options?",
    a: "We offer free delivery within Nairobi for orders over KES 10,000. For other areas, we provide countrywide delivery at competitive rates. Same-day delivery is available for urgent orders within Nairobi.",
  },
  {
    q: "Do you offer warranty on products?",
    a: "Yes, all our products come with manufacturer warranty. We also provide additional warranty services and extended protection plans for selected items.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept M-PESA, bank transfers, cash on delivery, and major credit/debit cards. Our M-PESA PayBill number is 806876 for easy payments.",
  },
  {
    q: "Can I return or exchange products?",
    a: "We offer a 30-day return policy for unopened items in original condition. Exchanges are available for defective products within the warranty period.",
  },
];

const ContactFaq: React.FC = () => (
  <section className="max-w-6xl mx-auto my-8 w-full px-2 flex flex-col items-center">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
    <p className="text-gray-600 mb-6 text-center">Quick answers to common questions</p>
    <div className="grid gap-5 md:grid-cols-2 w-full">
      {FAQS.map((faq, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow p-6">
          <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
          <p className="text-gray-700">{faq.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ContactFaq;
