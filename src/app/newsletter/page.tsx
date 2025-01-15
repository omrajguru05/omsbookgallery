import { Mail, Send } from "lucide-react";

export default function NewsletterPage() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stay Connected</h1>
          <p className="text-foreground/80 text-lg">
            Subscribe to receive updates about new books, exclusive content, and special offers.
          </p>
        </div>

        {/* Newsletter Form */}
        <div className="backdrop-blur-xl bg-foreground/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-foreground/10 p-4 rounded-full mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Join My Newsletter</h2>
            <p className="text-foreground/80 text-center max-w-2xl">
              Be the first to know about new releases, behind-the-scenes content, and exclusive reader events.
            </p>
          </div>

          <form className="max-w-xl mx-auto space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-foreground/10 backdrop-blur-sm 
                         border border-foreground/10 focus:outline-none focus:ring-2 
                         focus:ring-foreground/30 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-foreground/10 backdrop-blur-sm 
                         border border-foreground/10 focus:outline-none focus:ring-2 
                         focus:ring-foreground/30 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Interests</label>
              <div className="space-y-2">
                {['New Releases', 'Writing Tips', 'Events', 'Behind the Scenes'].map((interest) => (
                  <label key={interest} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded border-foreground/30 bg-foreground/10"
                      name="interests"
                      value={interest}
                    />
                    <span className="text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-foreground 
                       text-background px-6 py-3 rounded-full hover:bg-foreground/90 
                       transition-colors duration-200"
            >
              <Send className="w-5 h-5" />
              Subscribe to Newsletter
            </button>
          </form>

          <p className="text-foreground/60 text-sm text-center mt-6">
            By subscribing, you agree to receive email communications from Om Rajguru.
            You can unsubscribe at any time.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Early Access",
              description: "Be the first to know about new book releases and pre-order opportunities."
            },
            {
              title: "Exclusive Content",
              description: "Get access to behind-the-scenes content and writing insights."
            },
            {
              title: "Special Offers",
              description: "Receive exclusive discounts and special offers on books and merchandise."
            }
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="backdrop-blur-xl bg-foreground/10 rounded-2xl p-6 text-center"
            >
              <h3 className="font-bold mb-2">{benefit.title}</h3>
              <p className="text-foreground/80 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}