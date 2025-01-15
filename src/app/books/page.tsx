import React from 'react';
import { ShoppingCart, Headphones, Book } from 'lucide-react';

const BooksPage = () => {
  const books = [
    {
      title: "CEO BEFORE 20",
      description: "A captivating journey through imagination and reality...",
      coverImage: "/placeholder/book1.jpg",
      amazonLink: "#",
      googlePlayLink: "#",
      audiobookLink: "#",
    },
    {
      title: "COMING SOON",
      description: "Explore the depths of human consciousness...",
      coverImage: "/placeholder/book2.jpg",
      amazonLink: "#",
      googlePlayLink: "#",
      audiobookLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12">My Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 transition-transform hover:scale-105"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-48 h-72 bg-gray-800 rounded-lg shadow-2xl mx-auto md:mx-0"></div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
                  <p className="text-gray-300 mb-6">{book.description}</p>
                  
                  <div className="space-y-4">
                    <button className="w-full flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition">
                      <ShoppingCart className="w-5 h-5" />
                      Buy on Amazon 
                    </button>
                    
                    <button className="w-full flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition">
                      <Book className="w-5 h-5" />
                      Google Play Books
                    </button>
                    
                    <button className="w-full flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition">
                      <Headphones className="w-5 h-5" />
                      Listen on Audible
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;