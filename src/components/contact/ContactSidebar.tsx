
import { MessageCircle, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Clock } from "lucide-react";
import React from "react";

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

const ContactSidebar: React.FC = () => (
  <aside className="bg-white rounded-xl shadow flex-1 p-7 mb-4 md:mb-0 md:max-w-sm self-stretch flex flex-col">
    <h2 className="text-xl font-bold mb-5">Get in Touch</h2>
    <ul className="space-y-5 text-[15px] mb-7">
      <li className="flex items-start gap-3">
        <span className="mt-0.5"><MessageCircle className="text-red-500 w-6 h-6" /></span>
        <div>
          <b>Visit Our Store</b>
          <div>Nairobi, Kenya<br />Open Mon-Fri: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</div>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-0.5"><Phone className="text-blue-500 w-6 h-6" /></span>
        <div>
          <b>Call Us</b>
          <div>0722 723 362<br /><span className="text-gray-500">Available 24/7 for support</span></div>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-0.5"><Mail className="text-green-500 w-6 h-6" /></span>
        <div>
          <b>Email Us</b>
          <div>info@noorcom.co.ke<br /><span className="text-gray-500">We respond within 2 hours</span></div>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-0.5"><Clock className="text-purple-400 w-6 h-6" /></span>
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
);

export default ContactSidebar;
