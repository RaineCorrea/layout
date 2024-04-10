import { Modal } from "./components/Modal/Modal";
import { TopBar } from "./components/TopBar/TopBar";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Menu } from "./components/Menu/Menu";
import { ProductDeals } from "./components/ProductDeals/ProductDeals";
import { ProductBrands } from "./components/ProductBrands/ProductBrands";
import { Products } from "./components/Products/Products";
import { TextBanner } from "./components/TextBanner/TextBanner";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { FooterMenu } from "./components/FooterMenu/FooterMenu";
import { Footer } from "./components/Footer/Footer";

import { topBarItems } from "./mocks/topBarItems";
import { cardProductsItem } from "./mocks/cardProductsItems";
import { productsBrandsItem } from "./mocks/productsBrandsItems";
import { textBanner } from "./mocks/textBanner";

import "./global.css";

export function App() {
  return (
    <>
      <Modal />
      <TopBar topBarItems={topBarItems} />
      <Header />
      <Menu />
      <Banner />
      <ProductDeals cardProductsItems={cardProductsItem} />
      <ProductBrands
        productBrandText={"Marcas Parceiras"}
        productsBrandsItems={productsBrandsItem}
      />
      <Products />
      <TextBanner
        title={textBanner[0].title}
        subTitle={textBanner[0].subTitle}
        imgMobile={textBanner[0].imgMobile}
        imgDesktop={textBanner[0].imgDesktop}
      />
      <Newsletter />
      <FooterMenu />
      <Footer />
    </>
  );
}
