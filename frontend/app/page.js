import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        GoPratle Requirement Portal
      </h1>

      <p className="text-gray-600 text-center max-w-lg mb-6">
        Post your event requirements and connect with planners, performers, and crew effortlessly.
      </p>

      <Link href="/create-requirement">
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md transition">
          Create Requirement
        </button>
      </Link>

    </main>
    </div>
  );
}
