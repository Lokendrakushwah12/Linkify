import { ArrowRightIcon } from "lucide-react";
import URLContainer from "../components/url-container";
import AnimationContainer from "@/components/animation-container";
import AnimatedBackground from "@/components/ui/animated-background";
export default function Home() {
  return (
    <main className="mx-auto max-w-xl space-y-12">
      <AnimatedBackground
        numSquares={6}
        maxOpacity={0.2}
        duration={10}
      />
      <AnimationContainer className="flex -mt-[100px] flex-col items-center justify-start w-full text-center">
        <div className="space-y-2 flex flex-col justify-start items-center text-center">
          <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
            <span>
              <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
              ✨ Manage links smarter
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </span>
          </button>
          <h1 className="text-secondary text-center py-6 text-5xl font-bold tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-6xl !leading-[1.15] w-full font-heading">
            Smart Links and{" "}
            <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
              Quick Urls
            </span>
          </h1>
          <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
            <span className="hidden md:block">
              Shorten, track, and organize all your links in one place.
            </span>
          </p>
        </div>
      </AnimationContainer>
      <URLContainer />
    </main>
  );
}
