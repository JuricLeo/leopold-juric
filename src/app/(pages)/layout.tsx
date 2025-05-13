import { Footer } from "@/components/global/footer";
import { Navbar } from "@/components/global/navbar";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-screen-2xl mx-auto px-6">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
