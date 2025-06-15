import React, { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Instagram, Facebook, Twitter, Linkedin, MessageCircle, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import { saveContactMessage } from "@/lib/firestore";
import { toast } from "@/hooks/use-toast";

// FAQs for the section
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

// Socials for the section
const socialLinks = [
  { name: "Facebook", url: "#", icon: <Facebook className="w-7 h-7 text-[#1877f3]" /> },
  { name: "Twitter", url: "#", icon: <Twitter className="w-7 h-7 text-[#1da1f2]" /> },
  { name: "Instagram", url: "#", icon: <Instagram className="w-7 h-7 text-[#e1306c]" /> },
  { name: "LinkedIn", url: "#", icon: <Linkedin className="w-7 h-7 text-[#0a66c2]" /> },
  { name: "WhatsApp", url: "https://wa.me/254722723362", icon: (
      <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#25D366"/>
        <path d="M23.7 20.5c-.35-.18-2.1-1.04-2.42-1.16-.33-.12-.56-.18-.8.18-.23.35-.92 1.15-1.13 1.38-.21.23-.42.26-.77.09-.35-.18-1.47-.54-2.8-1.72-1.03-.92-1.72-2.05-1.92-2.4-.2-.34-.02-.53.15-.69.15-.15.34-.42.52-.62.17-.2.22-.35.33-.58.11-.23.06-.44-.03-.62-.09-.18-.8-1.92-1.1-2.63-.29-.7-.57-.6-.8-.61-.21 0-.45-.01-.7-.01-.25 0-.64.09-.99.45-.35.37-1.32 1.29-1.32 3.1 0 1.81 1.34 3.56 1.52 3.8.18.25 2.64 4.04 6.41 5.36C19.92 28 21.39 28 21.93 27.95c.54-.05 1.67-.73 1.9-1.44.23-.68.23-1.28.16-1.38-.06-.09-.32-.15-.67-.31Z" fill="#fff"/>
      </svg>
    )
  }
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    if (!formRef.current) {
      setLoading(false);
      return;
    }
    const formData = new FormData(formRef.current);
    const msg = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || "",
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      await saveContactMessage(msg);
      setSubmitted(true);
      toast({ title: "Message received!", description: "We'll get in touch soon." });
      formRef.current.reset();
    } catch (error) {
      toast({ 
        title: "Submission failed", 
        description: "Please try again or contact us via email/WhatsApp.",
        variant: "destructive",
      });
    }
    setLoading(false);
  };

  return (
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
        {/* Get in Touch - left card */}
        <aside className="bg-white rounded-xl shadow flex-1 p-7 mb-4 md:mb-0 md:max-w-sm self-stretch flex flex-col">
          <h2 className="text-xl font-bold mb-5">Get in Touch</h2>
          <ul className="space-y-5 text-[15px] mb-7">
            <li className="flex items-start gap-3">
              <span className="mt-0.5">
                <MessageCircle className="text-red-500 w-6 h-6" />
              </span>
              <div>
                <b>Visit Our Store</b>
                <div>Nairobi, Kenya<br />Open Mon-Fri: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5">
                <Phone className="text-blue-500 w-6 h-6" />
              </span>
              <div>
                <b>Call Us</b>
                <div>0722 723 362<br /><span className="text-gray-500">Available 24/7 for support</span></div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5">
                <Mail className="text-green-500 w-6 h-6" />
              </span>
              <div>
                <b>Email Us</b>
                <div>info@noorcom.co.ke<br /><span className="text-gray-500">We respond within 2 hours</span></div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5">
                <Clock className="text-purple-400 w-6 h-6" />
              </span>
              <div>
                <b>Business Hours</b>
                <div>
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  <span className="text-gray-500">Sunday: Closed</span>
                </div>
              </div>
            </li>
          </ul>
          <hr className="my-4" />
          <div>
            <b className="block mb-2">Follow Us</b>
            <div className="flex items-center gap-3">
              {socialLinks.map(link =>
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="hover:scale-110 active:scale-95 transition-transform"
                >
                  {link.icon}
                </a>
              )}
            </div>
          </div>
        </aside>
        {/* Contact Form - right card */}
        <section className="bg-white rounded-xl shadow flex-[2] p-7">
          <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
          <form
            ref={formRef}
            className="space-y-6"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Your full name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="0722 123 456"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject *</Label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full h-10 border rounded-md px-3 bg-background text-sm focus:ring-2 focus:ring-red-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="quote">Request a Quote</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                required
                className="h-28"
                placeholder="Please describe your inquiry in detail..."
              />
            </div>
            <div className="flex items-center gap-2 text-[15px]">
              <input type="checkbox" id="agreement" required className="accent-red-600 w-4 h-4" />
              <label htmlFor="agreement" className="text-gray-600 cursor-pointer">
                I agree to the processing of my personal data for the purpose of responding to my inquiry.
              </label>
            </div>
            <Button
              className="w-full bg-red-600 hover:bg-red-700 text-base py-6 font-semibold flex items-center gap-2 justify-center"
              type="submit"
              disabled={loading}
            >
              <MessageCircle className="w-5 h-5" />{loading ? "Sending..." : "Send Message"}
            </Button>
            {submitted && (
              <div className="text-green-600 font-medium pt-2">
                Message sent! We'll be in touch.
              </div>
            )}
          </form>
        </section>
      </div>
      {/* FAQ Section */}
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
      <Footer />
    </div>
  );
};

export default Contact;
