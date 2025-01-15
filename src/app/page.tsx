'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, Github, Twitter, Instagram } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav 
        className="backdrop-blur-lg bg-background/30 fixed w-full z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Om Rajguru
              </motion.span>
            </Link>
            <div className="space-x-8">
              <Link href="/" className="hover:text-foreground/80">Home</Link>
              <Link href="/books" className="hover:text-foreground/80">Books</Link>
              <Link href="/newsletter" className="hover:text-foreground/80">Newsletter</Link>
              <Link href="/contact" className="hover:text-foreground/80">Contact</Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.div 
        className="pt-32 pb-16 px-6"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <div className="container mx-auto">
          <motion.div 
            className="backdrop-blur-xl bg-foreground/10 rounded-3xl p-8 md:p-12"
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Welcome to My Literary World</h2>
            <p className="text-xl text-foreground/80 mb-8">
            Discover a collection of profound stories and transformative ideas crafted to inspire and connect. Each book is a gateway to a journey where words meet emotions, and imagination meets reality. Whether you're seeking knowledge, adventure, or solace, you'll find something extraordinary here.
            </p>
            <Link href="/books" className="inline-flex items-center bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/90 transition">
            Discover My Collection on Amazon<ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Book */}
      <motion.div 
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="backdrop-blur-xl bg-foreground/10 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-64 h-96 bg-foreground/20 rounded-lg shadow-2xl"></div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">Latest Release</h3>
                <p className="text-foreground/80 mb-6">
                  Discover my latest work, a journey into the unknown that will captivate your imagination.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="https://a.co/d/4KyP9s5" target="_blank" className="bg-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-foreground/30 transition">
                    Amazon
                  </Link>
                  <Link href="https://play.google.com/books" target="_blank" className="bg-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-foreground/30 transition">
                    Google Play
                  </Link>
                  <Link href="https://audible.com" target="_blank" className="bg-foreground/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-foreground/30 transition">
                    Audiobook
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div 
        className="py-16 px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="backdrop-blur-xl bg-foreground/10 rounded-3xl p-8 md:p-12 text-center">
            <Mail className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Join My Newsletter</h3>
            <p className="text-foreground/80 mb-6">
              Stay updated with my latest releases, exclusive content, and special offers.
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-foreground/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-foreground/50"
              />
              <Link href="/newsletter" className="bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/90 transition">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="backdrop-blur-lg bg-background/30 py-8">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-foreground/60">© {new Date().getFullYear()} Om Rajguru. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="https://x.com/notomdefintely" target="_blank" aria-label="Twitter">
                <Twitter className="w-6 h-6 hover:text-foreground/80 cursor-pointer" />
              </Link>
              <Link href="https://www.amazon.com/author/omrajguru" target="_blank" aria-label="Instagram">
                <Instagram className="w-6 h-6 hover:text-foreground/80 cursor-pointer" />
              </Link>
              <Link href="https://www.amazon.com/author/omrajguru" target="_blank" aria-label="GitHub">
                <Github className="w-6 h-6 hover:text-foreground/80 cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}