import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Project } from '@/data/projects';
export default function ProjectCard({ project }: { project: Project }) {
 const [expanded, setExpanded] = useState(false);
 return <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="project-card group flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
  <Link to={`/case-study/${project.id}`} aria-label={`View ${project.title} case study`} className="relative block aspect-[3/2] overflow-hidden"><img src={project.image} alt={`${project.title} design concept`} width={1536} height={1024} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute top-4 left-4 bg-background/90 text-foreground backdrop-blur px-3 py-1 text-xs rounded">Design concept</span><span className="absolute right-4 bottom-4 bg-primary text-primary-foreground rounded-full p-3 transition-transform group-hover:-rotate-45"><ArrowUpRight className="w-5 h-5" /></span></Link>
  <div className="p-6 flex flex-col flex-1"><span className="text-xs text-primary uppercase tracking-widest">{project.category}</span><h3 className="font-display text-2xl font-semibold mt-2"><Link to={`/case-study/${project.id}`} className="hover:text-primary transition-colors">{project.title}</Link></h3><p className="text-muted-foreground text-sm leading-relaxed mt-3 min-h-[44px]">{project.description}</p><div className="flex flex-wrap gap-2 mt-5 mb-6">{project.technologies.map(tech => <span className="text-xs text-muted-foreground border border-border rounded px-2 py-1" key={tech}>{tech}</span>)}</div>
  <div className="flex justify-between items-center border-t border-border pt-4 gap-2 mt-auto"><Button variant="ghost" size="sm" className="px-0 text-muted-foreground hover:bg-transparent hover:text-primary" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls={`details-${project.id}`}>Details <ChevronDown className={expanded ? 'rotate-180 transition-transform' : 'transition-transform'} /></Button><Button variant="outline" size="sm" asChild><Link to={`/case-study/${project.id}`}><FileText /> Case Study</Link></Button></div>
  {expanded && <div id={`details-${project.id}`} className="border-t border-border mt-4 pt-4"><ul className="space-y-2 text-sm text-muted-foreground">{project.features.map(feature => <li key={feature} className="flex gap-2"><span className="text-primary">↗</span>{feature}</li>)}</ul></div>}</div>
 </motion.article>;
}
