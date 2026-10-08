import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Figma, Smartphone, Database, ShoppingBag, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import studioImage from "@/assets/byteveo-studio.jpg";
import { technologies } from "@/data/services";

const teamSpecialties = [
  { icon: Code2, title: "Web & Software Developers", description: "We build responsive websites, scalable web applications and custom software that turn complex requirements into dependable products.", skills: "React · APIs · Custom Software · WordPress" },
  { icon: Smartphone, title: "Mobile App Developers", description: "We create intuitive mobile experiences with Flutter, connecting iOS and Android apps to the systems your business relies on.", skills: "Flutter · iOS · Android · App Integrations" },
  { icon: Database, title: "ERP & CRM Developers", description: "We design business systems around your operations, bringing customer relationships, inventory and internal workflows together.", skills: "Custom ERP · CRM · Automation · Reporting" },
  { icon: Figma, title: "UI/UX & Product Designers", description: "We translate business goals and user needs into thoughtful interfaces, prototypes and consistent design systems.", skills: "Figma · User Experience · Prototyping · Design Systems" },
  { icon: ShoppingBag, title: "E-commerce & CMS Specialists", description: "We build easy-to-manage websites and online stores, with polished storefronts and the right integrations for your business.", skills: "Shopify · WooCommerce · Webflow · Wix Studio" },
  { icon: ShieldCheck, title: "QA & Support Specialists", description: "We test across devices, refine performance and keep your digital products supported long after launch.", skills: "QA Testing · Performance · Maintenance · Security" },
];

const About = () => (
  <Layout>
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-primary uppercase tracking-widest text-sm font-medium">About ByteVeo</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4">Your <span className="text-gradient">Design & Technology</span> Partner</h1>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">We are ByteVeo — a collaborative software agency bringing design, development and business technology together. We build websites, mobile apps and custom solutions that help ambitious businesses move forward.</p>
          <p className="text-muted-foreground mt-4 leading-relaxed">From your first idea to launch and beyond, we work as an extension of your team. Clear communication, thoughtful design and dependable engineering guide everything we do.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild className="bg-gradient-gold text-primary-foreground group"><Link to="/contact">Work With Us <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
            <Button asChild variant="outline" className="border-primary/30"><Link to="/portfolio">View Our Work</Link></Button>
          </div>
        </motion.div>
      </div>
    </section>
    <section className="pb-16">
      <div className="container mx-auto px-6">
        <figure>
          <img src={studioImage} alt="Illustrative collaborative design and development studio" width={1536} height={1024} loading="lazy" className="w-full aspect-[16/7] object-cover rounded-lg" />
          <figcaption className="text-muted-foreground text-xs mt-3">Studio concept · illustrative image</figcaption>
        </figure>
      </div>
    </section>
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">Our Team & Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Built on Shared Expertise</h2>
          <p className="text-muted-foreground mt-4">Our approach brings together design, engineering and product thinking — with the right specialties for every project.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamSpecialties.map((team, index) => (
            <motion.article key={team.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (index % 3) * 0.08 }} className="p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
              <team.icon className="w-9 h-9 text-primary mb-6" />
              <h3 className="font-display text-xl font-semibold">{team.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{team.description}</p>
              <p className="text-primary text-sm mt-6 border-t border-border pt-4 leading-relaxed">{team.skills}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 border-y border-border/50">
      <div className="container mx-auto px-6"><h2 className="font-display text-2xl font-semibold text-center mb-8">Our Technology Toolkit</h2></div>
      <div className="marquee-window" aria-label="Our technologies"><div className="technology-track">{[0, 1].map(copy => <div className="technology-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{technologies.map(tech => <span key={tech} className="font-display text-xl text-muted-foreground whitespace-nowrap flex items-center gap-10">{tech}<span className="text-primary" aria-hidden="true">✦</span></span>)}</div>)}</div></div>
    </section>
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <span className="text-primary uppercase tracking-widest text-sm font-medium">Our Philosophy</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">One Team. Your Vision.</h2>
        <p className="text-muted-foreground text-lg mt-6 leading-relaxed">We believe great software starts with understanding your business. We combine purposeful design with practical engineering, keeping you involved at every stage and building for the long term.</p>
        <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground mt-8"><Link to="/contact">Let's Build Together <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
      </div>
    </section>
  </Layout>
);
export default About;
