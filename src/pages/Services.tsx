import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import LayoutComponent from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

import { services } from "@/data/services";

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
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4">Our Services</h1>
            <p className="text-muted-foreground text-lg mt-6">
              From websites and mobile apps to custom ERP, CRM and software — we bring design and engineering together for your business.
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
                transition={{ delay: (index % 2) * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col items-start gap-3">
                      <h3 className="font-display text-2xl font-bold text-foreground">{service.title}</h3>
                      
                    </div>
                    <p className="text-muted-foreground mt-3">{service.description}</p>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Includes:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.includes.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-4 h-4 shrink-0 text-primary" />
                            <span className="text-muted-foreground text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mt-4">
                      <span className="text-foreground font-medium">Best for:</span> {service.forWho}
                    </p>
                    <Button asChild variant="link" className="px-0 mt-4 h-auto text-primary"><Link to="/contact">Contact for Pricing <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
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
