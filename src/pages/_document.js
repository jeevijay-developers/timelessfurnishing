import SettingServices from "@services/SettingServices";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // Fetch general metadata from backend API
    const setting = await SettingServices.getStoreSeoSetting();
    const ogsetting = await SettingServices.getStoreOgSetting();

    return { ...initialProps, setting, ogsetting };
  }

  render() {
    const setting = this.props.setting;
    const ogsetting = this.props.ogsetting;

    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={"logo/logo.png"} />
          <meta
            property="title"
            content={setting?.seo.meta_title || "Timeless Furnishing"}
          />
          <meta
            property="site_name"
            content={ogsetting?.og.og_title || "Timeless Furnishing"}
          />
          <meta
            property="og:title"
            content={ogsetting?.og.og_title || "Timeless Furnishing"}
          />
          <meta
            property="description"
            content={setting?.seo.meta_description || ""}
          />
          <meta
            property="og:description"
            content={ogsetting?.og.og_description || ""}
          />
          <meta
            name="keywords"
            content={setting?.seo.meta_keywords || "ecommerce online store"}
          />
          <meta
            property="og:url"
            content={ogsetting?.og.og_url || "https://timelessfurnishing.in"}
          />
          <meta
            property="og:image"
            content={setting?.seo.meta_img || "/HomePage.png"}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
