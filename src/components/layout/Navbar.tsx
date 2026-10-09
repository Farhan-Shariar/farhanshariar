import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrandLogo from './BrandLogo';
import ServiceMenu from './ServiceMenu';
const navLinks = [{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: 'Services', path: '/services' }, { name: 'About', path: '/about' }, { name: 'Blog', path: '/blog' }];
export default function Navbar() {
 const [isScrolled, setIsScrolled] = useState(false);
 const [mobileOpen, setMobileOpen] = useState(false);
 const [servicesOpen, setServicesOpen] = useState(false);
 const [theme, setTheme] = useState<'dark' | 'light'>('dark');
 const location = useLocation();
 useEffect(() => { const scroll = () => setIsScrolled(window.scrollY > 30); scroll(); window.addEventListener('scroll', scroll); return () => window.removeEventListener('scroll', scroll); }, []);
 useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [location]);
 useEffect(() => { const saved = localStorage.getItem('theme'); if (saved === 'light' || saved === 'dark') { setTheme(saved); document.documentElement.classList.toggle('light', saved === 'light'); } }, []);
 const toggleTheme = () => { const next = theme === 'dark' ? 'light' : 'dark'; setTheme(next); localStorage.setItem('theme', next); document.documentElement.classList.toggle('light', next === 'light'); };
 return <nav aria-label="Main navigation" className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${isScrolled || servicesOpen || mobileOpen ? 'bg-background/95 backdrop-blur-xl border-border' : 'bg-background/90 border-transparent'}`}><div className="container mx-auto px-6 flex justify-between items-center h-20 relative">
 <Link to="/" aria-label="ByteVeo home"><BrandLogo /></Link>
 <div className="hidden lg:flex items-center gap-7">{navLinks.map(link => link.name === 'Services' ? <div key={link.path} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false); }}>
 <div className="flex items-center gap-1 h-20"><Link to="/services" onFocus={() => setServicesOpen(true)} className={`text-sm font-medium hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'}`}>Services</Link><Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-transparent hover:text-primary" aria-label="Show services" aria-expanded={servicesOpen} aria-controls="desktop-services" onClick={() => setServicesOpen(!servicesOpen)}><ChevronDown className={servicesOpen ? 'rotate-180 transition-transform' : 'transition-transform'} /></Button></div>
 {servicesOpen && <div id="desktop-services" className="absolute left-6 right-6 top-full pt-1"><ServiceMenu onNavigate={() => setServicesOpen(false)} /></div>}</div> : <Link key={link.path} to={link.path} className={`text-sm font-medium hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-muted-foreground'}`}>{link.name}</Link>)}
 <Button variant="ghost" size="icon" aria-label="Toggle theme" title="Toggle theme" onClick={toggleTheme}>{theme === 'dark' ? <Sun /> : <Moon />}</Button><Button asChild className="bg-gradient-gold text-primary-foreground"><Link to="/contact">Work With Us</Link></Button></div>
 <div className="flex lg:hidden gap-1"><Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>{theme === 'dark' ? <Sun /> : <Moon />}</Button><Button variant="ghost" size="icon" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</Button></div></div>
 {mobileOpen && <div className="lg:hidden max-h-[calc(100svh-80px)] overflow-y-auto border-t border-border px-6 pb-6 bg-background"><div className="flex flex-col">{navLinks.map(link => <div key={link.path} className="border-b border-border"><div className="flex items-center justify-between"><Link to={link.path} className="py-4 text-foreground">{link.name}</Link>{link.name === 'Services' && <Button variant="ghost" size="icon" aria-label="Show services" aria-expanded={servicesOpen} onClick={() => setServicesOpen(!servicesOpen)}><ChevronDown /></Button>}</div>{link.name === 'Services' && servicesOpen && <ServiceMenu onNavigate={() => setMobileOpen(false)} />}</div>)}<Button asChild className="mt-5"><Link to="/contact">Work With Us</Link></Button></div></div>}
 </nav>;
}
