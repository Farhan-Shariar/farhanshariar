import { ReactNode, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) { const target = document.getElementById(hash.slice(1)); target?.scrollIntoView({ behavior: "instant", block: "start" }); }
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
    </MotionConfig>
  );
};

export default Layout;
