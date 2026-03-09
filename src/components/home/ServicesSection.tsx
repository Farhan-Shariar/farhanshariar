import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, Code, RefreshCw, Layout, Zap, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Website Design",
    description: "Bespoke, pixel-perfect designs that capture your brand essence and convert visitors into customers.",
  },
  {
    icon: Code,
    title: "WordPress Development",
    description: "Robust, scalable WordPress solutions built with clean code and optimized for performance.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, high-converting digital experience.",
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    description: "High-impact landing pages engineered to maximize conversions and capture leads.",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description: "Lightning-fast load times that improve user experience and boost SEO rankings.",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your website secure, updated, and performing.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium">Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">What I Can Do For You</h2>
          <p className="text-muted-foreground mt-4">
            Comprehensive web solutions tailored to elevate your business and drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:luxury-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
