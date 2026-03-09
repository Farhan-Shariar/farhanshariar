import { motion } from "framer-motion";
import { Globe, Shield, Award, Users } from "lucide-react";

const trustIndicators = [
  { icon: Globe, label: "International Clients", description: "Working with businesses worldwide" },
  { icon: Shield, label: "Secure & Reliable", description: "100% secure development practices" },
  { icon: Award, label: "Quality Assured", description: "Premium standards guaranteed" },
  { icon: Users, label: "Client Focused", description: "Your success is my priority" },
];

const TrustSection = () => {
  return (
    <section className="py-20 border-y border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground uppercase tracking-widest text-sm">Trusted by businesses worldwide</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustIndicators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display font-semibold text-foreground">{item.label}</h4>
              <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
