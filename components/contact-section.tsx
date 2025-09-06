import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subject, setSubject] = useState("");

  // EmailJS Configuration - Set these in your environment
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      subject: subject,
      message: formData.get("message"),
      to_email: "amansharma505152@gmail.com",
    };

    try {
      toast.error("Message not sent");

      (e.target as HTMLFormElement).reset();
      setSubject("");
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send the message");
    } finally {
      setIsSubmitting(false);
    }
  };

  const interestAreas = [
    { name: "Red Team Operations", color: "cyber-green" },
    { name: "Cloud Security", color: "cyber-blue" },
    { name: "Mobile Security", color: "green-500" },
    { name: "Hardware Testing", color: "amber-500" },
    { name: "Research Collaboration", color: "purple-500" },
    { name: "Mentorship", color: "red-500" },
  ];

  return (
    <section id="contact" className="py-20" data-testid="contact-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="contact-title">
            <span className="text-cyber-green">&gt;</span> Let's Connect
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            data-testid="contact-subtitle"
          >
            Ready to discuss cybersecurity opportunities, collaborate on red
            team exercises, or share insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div
              className="bg-dark-card border border-dark-border rounded-lg p-6"
              data-testid="contact-info"
            >
              <h3 className="text-xl font-semibold text-cyber-green mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:amansharma505152@gmail.com"
                  className="flex items-center text-gray-300 hover:text-cyber-green transition-colors group"
                  data-testid="contact-email"
                >
                  <Mail className="w-6 h-6 mr-4 text-cyber-green group-hover:animate-pulse" />
                  amansharma505152@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/amansharma0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-cyber-blue transition-colors group"
                  data-testid="contact-linkedin"
                >
                  <Linkedin className="w-6 h-6 mr-4 text-cyber-blue group-hover:animate-pulse" />
                  LinkedIn Profile
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>

            <div
              className="bg-dark-card border border-dark-border rounded-lg p-6"
              data-testid="interest-areas"
            >
              <h3 className="text-xl font-semibold text-cyber-blue mb-4">
                Areas of Interest
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {interestAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <span
                      className={`w-2 h-2 bg-${area.color} rounded-full mr-2`}
                    ></span>
                    {area.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-dark-card border border-dark-border rounded-lg p-6"
            data-testid="contact-form"
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="bg-dark-bg border-dark-border text-white focus:border-cyber-green"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-dark-bg border-dark-border text-white focus:border-cyber-green"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger
                    className="bg-dark-bg border-dark-border text-white focus:border-cyber-green"
                    data-testid="select-subject"
                  >
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-card border-dark-border">
                    <SelectItem value="Collaboration Opportunity">
                      Collaboration Opportunity
                    </SelectItem>
                    <SelectItem value="Job Opportunity">
                      Job Opportunity
                    </SelectItem>
                    <SelectItem value="Technical Discussion">
                      Technical Discussion
                    </SelectItem>
                    <SelectItem value="Mentorship Request">
                      Mentorship Request
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                  required
                  className="bg-dark-bg border-dark-border text-white focus:border-cyber-green resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyber-green to-cyber-blue px-6 py-3 rounded-lg font-semibold text-black hover:shadow-lg hover:shadow-cyber-green/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                data-testid="button-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
