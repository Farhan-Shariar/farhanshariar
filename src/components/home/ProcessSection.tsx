import { motion } from "framer-motion";
import { Search, Paintbrush, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "Understanding your business, goals, target audience, and project requirements through in-depth consultation.",
  },
  {
    number: "02",
    icon: Paintbrush,
    title: "Design",
    description: "Creating stunning visual concepts and user experiences that align with your brand and convert visitors.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Building your website with clean, efficient code ensuring speed, security, and scalability.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description: "Final testing, optimization, and deployment. Your website goes live with ongoing support available.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium">Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">How I Work</h2>
          <p className="text-muted-foreground mt-4">
            A streamlined process designed to deliver exceptional results efficiently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <span className="font-display text-6xl font-bold text-primary/10 absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
