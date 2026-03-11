import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    type: "Full-time · Remote",
    location: "Worldwide",
    description:
      "We're looking for an experienced frontend developer proficient in React, TypeScript, and modern CSS frameworks to build premium web experiences.",
    requirements: [
      "5+ years of frontend development experience",
      "Strong proficiency in React & TypeScript",
      "Experience with Tailwind CSS and animation libraries",
      "Portfolio of high-quality web projects",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Contract · Remote",
    location: "Worldwide",
    description:
      "Join us to craft stunning, user-centered designs for clients across diverse industries.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma or similar tools",
      "Strong understanding of design systems",
      "Eye for detail and luxury aesthetics",
    ],
  },
  {
    id: 3,
    title: "WordPress Developer",
    type: "Part-time · Remote",
    location: "Worldwide",
    description:
      "Help us deliver high-performance, custom WordPress solutions for our growing client base.",
    requirements: [
      "3+ years WordPress development experience",
      "Custom theme and plugin development",
      "WooCommerce experience is a plus",
      "Performance optimization skills",
    ],
  },
];

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    position: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and get back to you soon.",
    });
    setFormData({ name: "", email: "", portfolio: "", position: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Join Our Team</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-6">
              Build the Future <span className="text-gradient">With Us</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We're always on the lookout for talented developers and designers who share our passion for crafting exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold mb-12 text-center"
          >
            Current <span className="text-gradient">Openings</span>
          </motion.h2>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-8 border border-border hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 shrink-0"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, position: job.title }));
                      document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Briefcase size={16} /> Apply Now
                  </Button>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {job.requirements.map((req) => (
                    <li key={req} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {req}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {jobOpenings.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No openings right now — check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-section" className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl font-bold mb-12 text-center"
          >
            Apply <span className="text-gradient">Now</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8 space-y-6 border border-border"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input id="position" placeholder="Position applying for" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio / Resume URL</Label>
                <Input id="portfolio" placeholder="https://..." value={formData.portfolio} onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Cover Letter / Message</Label>
              <Textarea id="message" placeholder="Tell us about yourself and why you'd be a great fit..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            </div>
            <Button type="submit" className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90">
              <Send size={16} /> Submit Application
            </Button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
