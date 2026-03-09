import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Figma, Layout, Zap } from "lucide-react";
import LayoutComponent from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const skills = [
  { name: "WordPress", level: 95 },
  { name: "Elementor", level: 90 },
  { name: "Figma", level: 85 },
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 80 },
  { name: "UI/UX Design", level: 88 },
];

const tools = [
  { icon: Code2, name: "WordPress", description: "Expert-level CMS development" },
  { icon: Layout, name: "Elementor", description: "Advanced page building" },
  { icon: Figma, name: "Figma", description: "UI/UX design & prototyping" },
  { icon: Zap, name: "HTML/CSS", description: "Custom code solutions" },
];

const About = () => {
  return (
    <LayoutComponent>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-primary uppercase tracking-widest text-sm font-medium">About Me</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold mt-4">
                I'm a <span className="text-gradient">Web Designer</span> & Developer
              </h1>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                With over 5 years of experience crafting digital experiences, I've helped businesses worldwide establish their online presence with stunning, high-converting websites.
              </p>
              <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
                My journey began with a passion for creating beautiful things on the web. Today, I combine design aesthetics with technical expertise to deliver websites that not only look amazing but also drive real business results.
              </p>

              <div className="flex gap-4 mt-8">
                <Button asChild className="bg-gradient-gold text-primary-foreground group">
                  <Link to="/contact">
                    Work With Me
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary/30">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden border-gradient luxury-shadow">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -left-8 p-6 rounded-xl glass-card luxury-shadow"
              >
                <div className="text-3xl font-display font-bold text-gradient">5+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -top-8 -right-8 p-6 rounded-xl glass-card luxury-shadow"
              >
                <div className="text-3xl font-display font-bold text-gradient">50+</div>
                <div className="text-muted-foreground text-sm">Projects Completed</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Skills & Tools</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Skills Bars */}
            <div className="space-y-6">
              <h3 className="font-display text-xl font-semibold mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-gold rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools Grid */}
            <div>
              <h3 className="font-display text-xl font-semibold mb-6">Tools I Use</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                  >
                    <tool.icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="font-display font-semibold text-foreground">{tool.name}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{tool.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Philosophy</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">How I Work</h2>
              <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
                I believe in creating websites that are not just visually stunning but also strategically designed to achieve your business goals. Every pixel, every interaction is crafted with purpose.
              </p>
              <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
                Communication, transparency, and delivering on promises are at the core of how I work with clients. Your success is my success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </LayoutComponent>
  );
};

export default About;
