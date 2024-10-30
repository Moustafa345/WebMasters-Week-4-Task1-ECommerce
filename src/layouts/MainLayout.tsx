import NavbarTop from "@/components/NavbarTop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Outlet } from 'react-router-dom'; // Import Outlet for rendering page content

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <NavbarTop />
        <Navbar />
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
