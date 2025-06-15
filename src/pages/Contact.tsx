
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white py-14 px-4">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-500">
            We would love to hear from you! Reach out via the form below or email us at{" "}
            <span className="text-indigo-700">info@noorcom.co.ke</span>
          </p>
          <p className="text-gray-700 font-mono">📞 0722 723 362</p>
          <p className="text-gray-500 text-sm">Nairobi, Kenya</p>
        </div>
        <form
          className="space-y-6 bg-gray-50 rounded-lg p-8 shadow"
          onSubmit={e => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" required />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" rows={4} className="h-28" required />
          </div>
          <Button className="w-full bg-red-600 hover:bg-red-700" type="submit">
            Send
          </Button>
          {submitted && (
            <div className="text-green-600 font-medium pt-2">
              Message sent! We'll be in touch.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
