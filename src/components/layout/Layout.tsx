import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
