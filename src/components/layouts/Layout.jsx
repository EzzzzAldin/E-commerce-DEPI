import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumb from "../ui/Breadcrumb";
function Layout({
  cartCount = 0,
  onSearchChange,
  search = "",
  footerVariant = "default",
  showBreadcrumb = true,
}) {
  // L4 => View
  return (
    <>
      <Navbar
        cartCount={cartCount}
        searchValue={search}
        onSearchChange={onSearchChange}
      />
      {showBreadcrumb && <Breadcrumb />}
      <main>
        <Outlet />
      </main>
      <Footer variant={footerVariant} />
    </>
  );
}

export default Layout;
