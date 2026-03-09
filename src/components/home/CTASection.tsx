import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Ready to Elevate Your
            <span className="text-gradient"> Digital Presence?</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-xl mx-auto">
            Let's collaborate to create a website that not only looks stunning but drives real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground hover:opacity-90 px-8 group">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          <p className="text-muted-foreground text-sm mt-8">
            Free consultation • No obligation • Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
