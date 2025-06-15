
import React, { useState, useRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { saveContactMessage } from "@/lib/firestore";
import { toast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
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
  );
};

export default ContactForm;
