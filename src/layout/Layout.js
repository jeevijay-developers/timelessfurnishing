import Head from "next/head";
import { ToastContainer } from "react-toastify";

//internal import
import NavbarPromo from "./navbar/NavbarPromo";
import Navbar from "@layout/navbar/Navbar";
import Footer from "@layout/footer/Footer";
import FooterTop from "@layout/footer/FooterTop";
import MobileFooter from "@layout/footer/MobileFooter";
import FeatureCard from "@components/feature-card/FeatureCard";
import AnnouncementBar from "@components/coupon/AnnouncementBar";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <ToastContainer />

      <div className="font-sans">
        <Head>
          <title>{title ? `Timeless Furnishing | ${title}` : "Timeless Furnishing "}</title>
          {description && <meta name="description" content={description} />}
          <link ref="icon" href="logo/logo.png" />
        </Head>
        <AnnouncementBar />
        <Navbar />
        <div className="bg-gray-50">{children}</div>
        {/* <MobileFooter /> */}
        <div className="w-full">
          {/* <FooterTop /> */}
          <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
            <FeatureCard />
          </div>
          <hr className="hr-line"></hr>
          <div className="border-t border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
