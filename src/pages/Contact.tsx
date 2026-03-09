import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send, Loader2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", budget: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Contact</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4">
              Start Your <span className="text-gradient">Project Today</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-6">
              Ready to elevate your digital presence? Let's discuss your project and bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-display text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <a
                  href="mailto:hello@devstudio.com"
                  className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Email Me</h3>
                    <p className="text-muted-foreground">hello@devstudio.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">Quick response guaranteed</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Available Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">Why Work With Me?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Response within 24 hours
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Free consultation call
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    No obligation quotes
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    5+ years of experience
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Project Budget</label>
                    <Input
                      placeholder="$2,000 - $5,000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Project Description</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-secondary border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
