import web from '@/assets/project-web.jpg';
import mobile from '@/assets/project-mobile.jpg';
import software from '@/assets/project-software.jpg';
import commerce from '@/assets/project-commerce.jpg';
export const visuals = { web, mobile, software, commerce };
export interface Project { id: number; title: string; category: string; description: string; image: string; technologies: string[]; features: string[]; }
export const projects: Project[] = [
 { id: 1, title: 'Luxe Real Estate', category: 'Websites', description: 'A considered digital experience for exceptional properties.', image: web, technologies: ['WordPress', 'UI/UX', 'Custom Development'], features: ['Property discovery', 'Responsive layouts', 'Lead inquiry journey'] },
 { id: 2, title: 'Artisan Coffee', category: 'E-Commerce', description: 'An elevated storefront for specialty coffee and subscriptions.', image: commerce, technologies: ['WooCommerce', 'WordPress', 'UI/UX'], features: ['Product catalogue', 'Subscription journey', 'Streamlined checkout'] },
 { id: 3, title: 'TechFlow SaaS', category: 'Software', description: 'A clear, connected workspace for growing product teams.', image: software, technologies: ['React', 'API Integration', 'Design System'], features: ['Project overview', 'Team workflows', 'Activity reporting'] },
 { id: 4, title: 'Wellness Studio', category: 'Mobile Apps', description: 'A calmer way to discover classes and manage bookings.', image: mobile, technologies: ['Flutter', 'iOS', 'Android'], features: ['Class discovery', 'Booking journey', 'Member profiles'] },
];
