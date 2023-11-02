import Link from "next/link";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <section className="container mx-auto p-8 h-fit w-full text-center flex items-center flex-col space-y-12">
      <Link
        className="rounded-2xl bg-secondary-pOrange text-foreground px-4 py-1.5 text-sm sm:text-base font-semibold"
        target="_blank"
        href="/"
      >
        Follow along on Twitter
      </Link>
      <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl max-w-2xl">
        Anonymous <span className="text-secondary-pOrange">Chat</span> For
        Everyone
      </h1>
      <p className="max-w-[50rem] mx-auto leading-relaxed text-center !mb-16 text-lg md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
        voluptatem. Commodi assumenda, quibusdam omnis quae aliquam cupiditate
        dignissimos in optio blanditiis officiis!
      </p>
      <div
        className="flex
       gap-4 items-center w-full justify-center"
      >
        <Button className="w-36 h-12 sm:w-44 sm:h-14 text-lg font-bold ring-foreground ring-2 rounded-2xl transition-colors duration-300">
          Chat
        </Button>
        <Button
          variant="ghost"
          className="w-36 h-12 sm:w-44 sm:h-14 text-secondary-pOrange hover:text-background ring-2 ring-secondary-pOrange hover:outline-secondary-pOrange hover:bg-secondary-pOrange transition-colors duration-300 text-lg font-bold rounded-2xl"
        >
          Video
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
