import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import BottomNavSection from "components/BottomNavSection";
import MobileNavbar from "components/MobileNavbar";
import Navbar from "components/Navbar";
import { Context } from "context/AppContext";
import { useNavigationParams } from "hooks/useNavigationParams";
import { useContext, useLayoutEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="fixed w-full bg-white z-[10]">
        <Flex className=" w-full bg-[#1D1D1D] text-[1.2rem] py-[1.6rem] justify-center items-center">
          <p className="text-white ">
            Sign up and get 20% off for all new arrivals collections
          </p>
        </Flex>
        <Container className=" py-[2rem] border-b-[1px] border-[#E8E9EA]">
          <Navbar />
          <MobileNavbar />
        </Container>
      </header>
      <main className="pt-[12.4rem]">
        <Outlet />
      </main>
      <BottomNavSection />
    </>
  );
}

export default Home;
