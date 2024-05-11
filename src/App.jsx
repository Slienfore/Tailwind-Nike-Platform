import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  CustomReviews,
  Subscribe,
  Footer,
} from "./sections";

const App = () => (
  <>
    <main className="relative">
      {/* Nav */}
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero></Hero>
      </section>
      <section className="padding">
        <PopularProducts></PopularProducts>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding padding-x py-10">
        <Services></Services>
      </section>
      <section className="bg-pale-blue padding">
        <CustomReviews></CustomReviews>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer></Footer>
      </section>
    </main>
  </>
);

export default App;
