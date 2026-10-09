import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
export default function FeaturedProjects() { return <section className="py-24"><div className="container mx-auto px-6"><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"><div><span className="text-primary text-sm uppercase tracking-widest">Selected Work</span><h2 className="font-display text-4xl md:text-5xl font-bold mt-4">Featured Projects</h2><p className="text-muted-foreground mt-4">Design-led experiences, built with purpose.</p></div><Button asChild variant="link" className="text-primary px-0 self-start"><Link to="/projects">All Projects <ArrowUpRight /></Link></Button></div><div className="grid md:grid-cols-2 gap-8">{projects.map(project => <ProjectCard key={project.id} project={project} />)}</div></div></section>; }
