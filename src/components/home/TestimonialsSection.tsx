import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Luxe Properties",
    content: "Exceptional work! The website exceeded our expectations. Traffic increased by 150% and our lead generation has never been better.",
    rating: 5,
  },
  {
    name: "James Anderson",
    role: "Founder, TechFlow",
    content: "Professional, creative, and incredibly responsive. The landing page they designed converted at 3x our previous rate.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Marketing Director",
    content: "Working with DevStudio was seamless. They understood our vision perfectly and delivered a stunning website on time and budget.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">What Clients Say</h2>
          <p className="text-muted-foreground mt-4">
            Don't just take my word for it — hear from clients who've experienced the results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
