export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 pt-24 px-4 md:px-8">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 mb-4">
          About CodeAcademy
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-indigo-600">CodeAcademy</span>,  
          your ultimate platform to learn programming, build real-world projects,
          and grow as a developer. We inspire beginners and empower future tech leaders.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
          CodeAcademy began with a simple goal: making programming education accessible,
          fun, and practical for everyone. We believe learning code opens doors to endless
          opportunities—whether you dream of becoming a software engineer, freelancer,
          or tech entrepreneur.
        </p>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Today, thousands of learners trust us to guide their journey into the world of
          coding with structured courses, challenges, and real-world exercises.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="max-w-7xl mx-auto py-16 text-center">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          At CodeAcademy, our mission is to help people learn programming in the most
          simple, effective, and enjoyable way.  
          We aim to build a community of passionate developers who can create, innovate,
          and solve real-world problems through code.
        </p>
      </section>

    </div>
  );
}
