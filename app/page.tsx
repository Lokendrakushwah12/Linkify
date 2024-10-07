import URLContainer from "../components/url-container";
export default function Home() {
  return (
    <main className="mx-auto max-w-xl py-12 md:py-24 space-y-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl md:text-4xl text-accent font-bold">
          Quick URL
        </h1>
        <p className="text-muted-foreground md:text-lg">
          Shorten your long URL and share them quickly
        </p>
      </div>
      <URLContainer />
    </main>
  );
}
