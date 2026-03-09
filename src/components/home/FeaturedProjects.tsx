import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Luxe Real Estate",
    category: "Business Website",
    description: "Premium real estate platform with advanced property listings and virtual tours.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Artisan Coffee",
    category: "E-commerce",
    description: "High-end coffee brand e-commerce with subscription and wholesale features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "TechFlow SaaS",
    category: "Landing Page",
    description: "Conversion-optimized landing page for a B2B software platform.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Wellness Studio",
    category: "WordPress",
    description: "Elegant wellness center website with booking system integration.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Featured Projects</h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              A curated selection of my best work showcasing design excellence and technical expertise.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group mt-6 md:mt-0"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-primary text-sm font-medium uppercase tracking-wider">{project.category}</span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-2">{project.title}</h3>
                <p className="text-muted-foreground mt-2 line-clamp-2">{project.description}</p>

                <div className="flex gap-4 mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Button asChild size="sm" className="bg-gradient-gold text-primary-foreground">
                    <Link to={`/case-study/${project.id}`}>
                      View Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary/30">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
