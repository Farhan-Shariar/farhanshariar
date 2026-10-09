import logo from '@/assets/byteveo-logo.png.asset.json';
export default function BrandLogo() { return <span className="inline-flex items-center gap-2.5"><span className="brand-symbol" aria-hidden="true"><img src={logo.url} alt="" width={40} height={40} /></span><span className="font-display text-2xl font-bold text-foreground">ByteVeo<span className="text-primary">.</span></span></span>; }
