import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] bg-linear-to-r from-sky-900 to-primary/5 text-primary-foreground overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1561355167-4eac6650cbeb?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="text-left max-w-3xl">
          <p className="text-sm  mb-4 opacity-90 uppercase tracking-widest font-semibold">
            Best Trekking agency in Pokhara
          </p>
          <h1 className="text-4xl font-bold mb-6 text-balance leading-tight">
            Local Experts in Himalayan Trekking
          </h1>
          <p className="text-md mb-10 opacity-95 text-balance leading-relaxed">
            Explore the Himalayas with a team that's guided with care for over
            17 years.
          </p>
          <div className="flex gap-4 justify-start flex-wrap">
            <Link
              href="#"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Explore Nepal Treks
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
