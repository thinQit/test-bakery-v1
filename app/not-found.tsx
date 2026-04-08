import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-muted-foreground mb-6">Looks like this page is still proofing.</p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
