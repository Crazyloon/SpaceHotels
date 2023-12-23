"use client";

import HomePageBookingForm from "./ui/form/homepage-booking-form";
import { perma } from "./fonts/fonts";

export default function Home() {
  return (
    <main className="">
      <section className="flex min-h-screen flex-col items-center">
        <NavBar />
        <HeroBanner />
      </section>
      <HomePageBookingForm />
      <section className="bg-space-400 p-24">
        <div></div>
        <div></div>
      </section>
    </main>
  );
}

const HeroBanner = () => {
  return (
    <div className="bg-space-500 w-full flex-grow bg-[url('/spin_gravity_and_space_hotels_by_ka_pow96_dgeciju-pre.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="bg-space-50/20 mt-12 p-8 text-center backdrop-blur-sm">
        <span
          className={`${perma.className} text-space-950 text-8xl font-bold`}
        >
          The skies are no longer the limit...
        </span>
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <ul className="bg-space-900 text grid h-20 w-full grid-cols-7 items-center justify-items-center gap-4">
      <NavLink>The Hotel</NavLink>
      <NavLink>Rooms and Suites</NavLink>
      <NavLink>Specials and Packages</NavLink>
      <NavLink>LOGO</NavLink>
      <NavLink>Events</NavLink>
      <NavLink>Maps and Guides</NavLink>
      <NavLink>Contact</NavLink>
    </ul>
  );
};

const NavLink = ({ children }: { children: React.ReactNode }) => {
  return <li className="text-center uppercase">{children}</li>;
};
