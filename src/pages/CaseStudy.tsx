import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const caseStudies: Record<string, {
  title: string;
  category: string;
  client: string;
  duration: string;
  heroImage: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: { metric: string; value: string }[];
  images: string[];
}> = {
  "1": {
    title: "Luxe Real Estate",
    category: "Business Website",
    client: "Luxe Properties",
    duration: "6 weeks",
    heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
    overview: "A premium real estate platform designed to showcase luxury properties and generate qualified leads for high-end real estate agents.",
    problem: "The client's existing website was outdated, slow, and failed to capture the premium feel of their luxury property listings. Lead generation was minimal and the mobile experience was poor.",
    solution: "We designed and developed a completely new website focusing on visual impact, fast performance, and seamless user experience across all devices. The new platform features advanced property search, virtual tours, and optimized lead capture forms.",
    technologies: ["WordPress", "Elementor Pro", "Custom PHP", "Advanced Custom Fields", "WP Rocket"],
    features: ["Advanced property search filters", "Virtual tour integration", "Lead capture optimization", "Agent profile pages", "IDX integration", "Mobile-first responsive design"],
    results: [
      { metric: "Increase in Traffic", value: "150%" },
      { metric: "Lead Generation", value: "3x" },
      { metric: "Page Load Time", value: "1.8s" },
      { metric: "Mobile Conversions", value: "+200%" },
    ],
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    ],
  },
  "2": {
    title: "Artisan Coffee",
    category: "E-commerce",
    client: "Artisan Coffee Co.",
    duration: "8 weeks",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    overview: "A sophisticated e-commerce platform for a premium coffee brand, featuring subscription services and wholesale ordering capabilities.",
    problem: "The brand needed an online presence that matched their premium positioning while handling complex subscription models and B2B wholesale orders.",
    solution: "We built a custom WooCommerce solution with subscription management, wholesale pricing tiers, and a beautiful frontend that showcases their artisan products.",
    technologies: ["WordPress", "WooCommerce", "WooCommerce Subscriptions", "Elementor Pro", "Custom JavaScript"],
    features: ["Subscription management", "Wholesale portal", "Product customization", "Loyalty program", "Gift cards", "Coffee quiz recommendation"],
    results: [
      { metric: "Online Revenue", value: "+280%" },
      { metric: "Subscription Rate", value: "45%" },
      { metric: "Cart Abandonment", value: "-35%" },
      { metric: "Repeat Customers", value: "+120%" },
    ],
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    ],
  },
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies[id || "1"] || caseStudies["1"];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <span className="text-primary uppercase tracking-widest text-sm font-medium">{study.category}</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mt-4">{study.title}</h1>
            
            <div className="flex flex-wrap gap-8 mt-6 text-muted-foreground">
              <div>
                <span className="text-foreground font-medium">Client:</span> {study.client}
              </div>
              <div>
                <span className="text-foreground font-medium">Duration:</span> {study.duration}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={study.heroImage}
              alt={study.title}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{study.overview}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold mb-4">The Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {study.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Screenshots */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold mb-6">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {study.images.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden border border-border">
                      <img src={image} alt={`Screenshot ${index + 1}`} className="w-full h-64 object-cover" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-display text-xl font-bold mb-6">Results</h3>
                <div className="space-y-6">
                  {study.results.map((result, index) => (
                    <div key={index}>
                      <div className="text-3xl font-display font-bold text-gradient">{result.value}</div>
                      <div className="text-muted-foreground text-sm">{result.metric}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <h3 className="font-display text-xl font-bold mb-6">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30"
              >
                <h3 className="font-display text-xl font-bold mb-4">Like What You See?</h3>
                <p className="text-muted-foreground text-sm mb-6">Let's create something amazing for your business too.</p>
                <Button asChild className="w-full bg-gradient-gold text-primary-foreground">
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
