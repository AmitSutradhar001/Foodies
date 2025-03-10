import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center ">
      <div className="text-center animate-fadeIn">
        <img
          src="https://yemca-services.net/404.png"
          alt="404 Illustration"
          className="mx-auto w-80 animate-[float_3s_infinite] shadow-xl rounded-lg"
        />
        <h1 className="text-7xl font-extrabold text-blue-700/70 mt-6">
          Looks Like You're Lost!
        </h1>
        <p className="text-xl text-gray-700 mt-2">
          We can't seem to find the page you're looking for.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-gradient-to-tl from-teal-500 via-purple-600 to-pink-400 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-700"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
