import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
const categories = ['All Projects', 'Websites', 'E-Commerce', 'Mobile Apps', 'Software'];
export default function Projects() {
 const [active, setActive] = useState('All Projects');
 const filtered = active === 'All Projects' ? projects : projects.filter(p => p.category === active);
 return <Layout><section className="pt-36 pb-14"><div className="container mx-auto px-6"><span className="text-primary text-xs uppercase tracking-widest">Selected Work</span><div className="md:flex justify-between items-end gap-12 mt-4"><h1 className="font-display text-5xl md:text-7xl font-bold">Our Projects<span className="text-primary">.</span></h1><p className="text-muted-foreground max-w-md mt-6 md:mt-0 leading-relaxed">Thoughtful design. Dependable engineering. Explore the digital experiences we can create together.</p></div></div></section><section className="pb-24"><div className="container mx-auto px-6"><div className="flex gap-2 flex-wrap border-y border-border py-5 mb-10" aria-label="Project categories">{categories.map(category => <Button key={category} variant={active === category ? 'default' : 'ghost'} onClick={() => setActive(category)} aria-pressed={active === category}>{category}<span className="text-xs opacity-60 ml-1">{category === 'All Projects' ? projects.length : projects.filter(p => p.category === category).length}</span></Button>)}</div><div className="grid md:grid-cols-2 gap-8">{filtered.map(project => <ProjectCard key={project.id} project={project} />)}</div></div></section></Layout>;
}
