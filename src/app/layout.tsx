import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "omrajguru - Author & Writer",
  description: "Official website of Om Rajguru - Author & Writer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* Navigation */}
          <nav className="backdrop-blur-lg bg-background/30 fixed w-full z-50">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-foreground">
                  omrajguru
                </Link>
                <div className="space-x-8 text-foreground">
                  <Link href="/" className="hover:text-foreground/80">
                    Home
                  </Link>
                  <Link href="/books" className="hover:text-foreground/80">
                    Books
                  </Link>
                  <Link href="/newsletter" className="hover:text-foreground/80">
                    Newsletter
                  </Link>
                  <Link href="/contact" className="hover:text-foreground/80">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <footer className="backdrop-blur-lg bg-background/30 py-8 mt-auto">
            <div className="container mx-auto px-6">
              <div className="flex justify-between items-center text-foreground">
                <p className="text-foreground/60">
                  © {new Date().getFullYear()} omrajguru. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <Link href="#" className="hover:text-foreground/80">
                    Twitter
                  </Link>
                  <Link href="#" className="hover:text-foreground/80">
                    Instagram
                  </Link>
                  <Link href="#" className="hover:text-foreground/80">
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}