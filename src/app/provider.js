// components/Provider.js
import CustomNavbar from "@/components/shared/CustomNavbar";
import Footer from "@/components/shared/Footer";

export function Provider({ children }) {
  return (
    <div>
      <CustomNavbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}