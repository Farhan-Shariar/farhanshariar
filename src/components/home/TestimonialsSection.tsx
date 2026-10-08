import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Quote, Pause, Play } from "lucide-react";

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
    content: "Working with ByteVeo was seamless. They understood our vision perfectly and delivered a stunning website on time and budget.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [paused, setPaused] = useState(false);
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">What Clients Say</h2>
          <p className="text-muted-foreground mt-4">Don't just take our word for it — hear from clients who've experienced the results.</p>
          <Button variant="ghost" size="icon" onClick={() => setPaused(!paused)} aria-label={paused ? "Play testimonials" : "Pause testimonials"} title={paused ? "Play testimonials" : "Pause testimonials"} className="mt-4">{paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}</Button>
        </motion.div>
      </div>
      <div className="marquee-window testimonial-window">
        <div className={`testimonial-track ${paused ? "marquee-paused" : ""}`}>
          {[0, 1].map(copy => (
            <div className="testimonial-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {testimonials.map(testimonial => (
                <article key={testimonial.name} className="testimonial-card p-8 rounded-2xl bg-card border border-border relative">
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-6" aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: testimonial.rating }, (_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}</div>
                  <p className="text-muted-foreground leading-relaxed mb-6">“{testimonial.content}”</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center"><span className="font-display font-semibold text-primary">{testimonial.name.charAt(0)}</span></div>
                    <div><h3 className="font-display font-semibold text-foreground">{testimonial.name}</h3><p className="text-muted-foreground text-sm">{testimonial.role}</p></div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
        <div className="marquee-edge marquee-edge-left" aria-hidden="true" />
        <div className="marquee-edge marquee-edge-right" aria-hidden="true" />
      </div>
    </section>
  );
};
export default TestimonialsSection;
