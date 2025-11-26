import Link from "next/link";

export default function Banner() {
  return (
    <section
      className="
        relative 
        min-h-[80vh]
        flex 
        items-center 
        justify-center 
        text-center 
        bg-gradient-to-br 
        from-indigo-900 
        via-purple-900 
        to-blue-800 
        pt-24 md:pt-28
        overflow-hidden
      "
    >
      {/* Subtle background image */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: "url('/images/abstract-code-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Unlock Your Potential
          <br />
          with <span className="text-teal-400">CodeAcademy</span>
        </h1>

        <p className="text-gray-200 text-lg md:text-xl mt-4 mb-8">
          Learn modern technologies, build real-world skills, and join the next
          generation of developers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/allCourses"
            className="
              px-8 py-3 
              bg-teal-500 
              hover:bg-teal-600 
              text-white 
              text-lg 
              font-bold 
              rounded-full 
              shadow-xl 
              transition 
              transform 
              hover:scale-105
            "
          >
            Explore Courses
          </Link>

          <Link
            href="/aboutUs"
            className="
              px-8 py-3 
              text-white 
              border-2 
              border-white 
              rounded-full 
              text-lg 
              font-semibold 
              hover:bg-white 
              hover:text-indigo-900 
              transition 
              transform 
              hover:scale-105
            "
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
