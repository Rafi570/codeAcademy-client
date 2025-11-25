import Link from "next/link";

export default function Banner() {
  return (
    <section
      className="
      relative 
      h-[60vh] 
      md:h-[80vh] 
      w-full 
      flex 
      items-center 
      justify-center 
      text-center 
      overflow-hidden 
      bg-gradient-to-br 
      from-purple-800 
      via-indigo-900 
      to-blue-900
      pt-20 md:pt-0   /* 🔥 Navbar নিচে overlap ঠেকাতে */
    "
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url('/images/abstract-code-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Banner Content */}
      <div className="relative z-10 px-4 md:px-8 max-w-3xl mx-auto">
        <h1
          className="
          text-4xl 
          sm:text-5xl 
          md:text-6xl 
          font-extrabold 
          text-white 
          leading-tight 
          drop-shadow-md
        "
        >
          Unlock Your Potential
          <br />
          with <span className="text-teal-400">CodeAcademy</span>
        </h1>

        <p
          className="
          text-gray-200 
          text-base 
          sm:text-lg 
          md:text-xl 
          mt-4 
          mb-8 
          leading-relaxed
        "
        >
          Learn modern technologies, master coding skills, and join a global
          developer community.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/allCourses"
            className="
              px-8 
              py-3 
              bg-teal-500 
              hover:bg-teal-600 
              text-white 
              text-lg 
              font-bold 
              rounded-full 
              shadow-lg 
              transition-all 
              duration-300 
              transform 
              hover:scale-105
            "
          >
            Explore Courses
          </Link>

          <Link
            href="/aboutUs"
            className="
              px-8 
              py-3 
              border-2 
              border-white 
              text-white 
              text-lg 
              font-semibold 
              rounded-full 
              transition-all 
              duration-300 
              transform 
              hover:scale-105 
              hover:bg-white 
              hover:text-indigo-900
            "
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
