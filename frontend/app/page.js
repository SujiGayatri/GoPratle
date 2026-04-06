import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-100 blur-3xl opacity-70 animate-pulse" />
        <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-100 blur-3xl opacity-70 animate-pulse" />
      </div>

      <section className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            GoPratle Platform
          </span>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Find the Right Professionals for Your Event
          </h1>

          <p className="text-lg text-gray-600 leading-8">
            Easily post your event requirements and connect with experienced planners, performers, and crew members — all in one place.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/create-requirement"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              Post Requirement
            </Link>

            <a
              href="#features"
              className="border border-gray-300 hover:border-indigo-300 hover:text-indigo-600 text-gray-700 px-6 py-3 rounded-xl transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-8">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-gray-900">
              How it works
            </h2>

            <div id="features" className="grid gap-4">

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Post your requirement
                </h3>
                <p className="text-sm text-gray-600">
                  Share your event details including type, location, and requirements in a few simple steps.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Choose who you need
                </h3>
                <p className="text-sm text-gray-600">
                  Select whether you're looking for planners, performers, or crew, and provide specific details.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Get matched
                </h3>
                <p className="text-sm text-gray-600">
                  Your requirement is stored and ready to connect you with relevant professionals.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}