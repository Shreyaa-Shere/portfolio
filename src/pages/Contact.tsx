import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const serviceId = "service_gvl7bl6";
      const templateId = "template_mp8ggwn";
      const publicKey = "omUiu-78j-gHrBF0U";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sshere2@asu.edu",
      href: "mailto:sshere2@asu.edu",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(602) 804-3692",
      href: "tel:+16028043692",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shreya-shere",
      href: "https://linkedin.com/in/shreya-shere",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Shreyaa-Shere",
      href: "https://github.com/Shreyaa-Shere",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">Let's discuss how we can work together</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8 animate-slide-up">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    required
                    className="mt-2 min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full group" disabled={isLoading}>
                  <Send className="w-4 h-4 mr-2 transition-transform group-hover:translate-x-1" />
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-shadow">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground group-hover:text-primary transition-colors">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-gradient-hero border-primary/20">
                <h3 className="font-semibold mb-3">Open to Opportunities</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I'm currently seeking full-time opportunities in AI Engineering, Machine Learning, and Software
                  Development. Let's connect and explore how we can create impact together.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
