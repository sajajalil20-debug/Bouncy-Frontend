export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-foreground">
          Welcome to Bouncy
        </h1>

        <p className="mt-4 text-lg text-muted">
          Your platform starts here.
        </p>

        <button className="mt-8 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark">
          Get Started
        </button>
      </div>
    </main>
  );
}