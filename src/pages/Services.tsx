import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, Code, RefreshCw, Layout, Zap, Settings, Check, ArrowRight } from "lucide-react";
import LayoutComponent from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description: "Custom, conversion-focused designs that capture your brand essence and engage your audience.",
    includes: ["Custom UI/UX Design", "Mobile-First Approach", "Brand Integration", "Interactive Prototypes"],
    forWho: "Businesses seeking a unique, professional online presence.",
    price: "From $1,500",
  },
  {
    icon: Code,
    title: "WordPress Development",
    description: "Robust, scalable WordPress solutions built with best practices and optimized for performance.",
    includes: ["Custom Theme Development", "Plugin Integration", "WooCommerce Setup", "Security Hardening"],
    forWho: "Companies needing a powerful, manageable CMS solution.",
    price: "From $2,000",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Transform your outdated website into a modern, high-converting digital experience.",
    includes: ["Full Site Audit", "UX Improvements", "Performance Optimization", "SEO Enhancement"],
    forWho: "Businesses with outdated websites losing conversions.",
    price: "From $1,800",
  },
  {
    icon: Layout,
    title: "Landing Page Design",
    description: "High-impact landing pages engineered to maximize conversions and capture leads.",
    includes: ["A/B Testing Ready", "Lead Capture Forms", "Analytics Integration", "Speed Optimized"],
    forWho: "Marketers running campaigns needing high-converting pages.",
    price: "From $800",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description: "Lightning-fast load times that improve user experience and boost SEO rankings.",
    includes: ["Performance Audit", "Image Optimization", "Code Minification", "CDN Setup"],
    forWho: "Websites with slow load times affecting conversions.",
    price: "From $400",
  },
  {
    icon: Settings,
    title: "Website Maintenance",
    description: "Ongoing support to keep your website secure, updated, and performing at its best.",
    includes: ["Security Updates", "Regular Backups", "Performance Monitoring", "Content Updates"],
    forWho: "Businesses needing reliable ongoing website support.",
    price: "From $200/mo",
  },
];

const Services = () => {
  return (
    <LayoutComponent>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Services</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4">What I Offer</h1>
            <p className="text-muted-foreground text-lg mt-6">
              Comprehensive web solutions tailored to your business needs. From design to development, I've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl font-bold text-foreground">{service.title}</h3>
                      <span className="text-primary font-semibold">{service.price}</span>
                    </div>
                    <p className="text-muted-foreground mt-3">{service.description}</p>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Includes:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.includes.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mt-4">
                      <span className="text-foreground font-medium">Best for:</span> {service.forWho}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground mt-4">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground mt-8 group">
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default Services;
