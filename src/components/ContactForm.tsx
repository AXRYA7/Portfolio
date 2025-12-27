import { useState } from "react";
import { X, Check } from "lucide-react";

interface ContactFormProps {
  onClose: () => void;
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success state
    setIsSubmitted(true);
    
    // Create mailto link with form data
    const subject = `New Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Close the form after 2 seconds
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[rgba(24,24,27,0.95)] border border-[#27272a] rounded-2xl p-8 md:p-12 shadow-2xl animate-in fade-in duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#99a1af] hover:text-white transition-colors duration-200"
          aria-label="Close"
        >
          <X className="size-6" />
        </button>

        {/* Form Header */}
        <h2 className="text-3xl md:text-4xl mb-2">Get in touch</h2>
        <p className="text-[#99a1af] mb-8">
          Fill out the form below and I'll get back to you soon!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm text-[#99a1af] mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[rgba(39,39,42,0.8)] border border-[#3f3f46] rounded-lg px-4 py-3 text-white placeholder-[#52525b] focus:outline-none focus:border-[#52525b] transition-colors duration-200"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm text-[#99a1af] mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[rgba(39,39,42,0.8)] border border-[#3f3f46] rounded-lg px-4 py-3 text-white placeholder-[#52525b] focus:outline-none focus:border-[#52525b] transition-colors duration-200"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm text-[#99a1af] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[rgba(39,39,42,0.8)] border border-[#3f3f46] rounded-lg px-4 py-3 text-white placeholder-[#52525b] focus:outline-none focus:border-[#52525b] transition-colors duration-200"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm text-[#99a1af] mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-[rgba(39,39,42,0.8)] border border-[#3f3f46] rounded-lg px-4 py-3 text-white placeholder-[#52525b] focus:outline-none focus:border-[#52525b] transition-colors duration-200 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full group bg-[rgba(39,39,42,0.8)] hover:bg-white text-white hover:text-black rounded-lg px-8 py-4 text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            Submit
            <span className="inline-block transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
              →
            </span>
          </button>
        </form>

        {/* Success State */}
        {isSubmitted && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[rgba(24,24,27,0.98)] rounded-2xl backdrop-blur-sm animate-in fade-in duration-300">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-green-500/20 p-6 animate-in zoom-in duration-500">
                <Check className="size-16 text-green-500" />
              </div>
              <p className="text-2xl">Message Sent!</p>
              <p className="text-[#99a1af]">Thank you for reaching out</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}