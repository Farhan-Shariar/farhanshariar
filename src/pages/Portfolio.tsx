import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const categories = ["All", "Business Websites", "E-commerce", "Landing Pages", "WordPress"];

const projects = [
  {
    id: 1,
    title: "Luxe Real Estate",
    category: "Business Websites",
    description: "Premium real estate platform with advanced property listings.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Artisan Coffee",
    category: "E-commerce",
    description: "High-end coffee brand e-commerce with subscription features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "TechFlow SaaS",
    category: "Landing Pages",
    description: "Conversion-optimized landing page for B2B software.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Wellness Studio",
    category: "WordPress",
    description: "Elegant wellness center website with booking system.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Finance Pro",
    category: "Business Websites",
    description: "Corporate finance consultancy with client portal.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Fashion Hub",
    category: "E-commerce",
    description: "Luxury fashion marketplace with advanced filtering.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Portfolio</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4">My Work</h1>
            <p className="text-muted-foreground text-lg mt-6">
              A showcase of projects that represent my commitment to excellence, creativity, and results-driven design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-gradient-gold text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{project.description}</p>

                  <div className="flex gap-3 mt-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Button asChild size="sm" className="bg-gradient-gold text-primary-foreground">
                      <Link to={`/case-study/${project.id}`}>
                        View Details
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
    </Layout>
  );
};

export default Portfolio;
