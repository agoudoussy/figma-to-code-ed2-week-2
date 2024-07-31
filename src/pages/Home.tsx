import BottomNavSection from "components/BottomNavSection";
import CollectionsSection from "components/CollectionsSection";
import CreateAndSellNowSection from "components/CreateAndSellNowSection";
import CtaSignupSection from "components/CtaSignupSection";
import HeroSection from "components/HeroSection";
import Navbar from "components/Navbar";

function Home() {
  return (
    <>
      <header className="border-b-[1px] border-[#E8E9EA]">
        <Navbar />
      </header>
      <main>
        <section id="hero-section" className=" overflow-hidden">
          <HeroSection />
        </section>
        <section className="collections-section">
          <CollectionsSection />
        </section>
        <section className="create-sell-and-now-section">
          <CreateAndSellNowSection />
        </section>
        <section className="cta-signup-section">
          <CtaSignupSection />
        </section>
      </main>
      <footer>
        <BottomNavSection />
      </footer>
    </>
  );
}

export default Home;
