import Link from "next/link";

const MainCTA = () => {
  return (
    <Link href="/schedule" passHref>
      <button className="bg-peach-500 transform rounded px-4 py-2 text-2xl font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-400">
        Let's Get in Touch!
      </button>
    </Link>
  );
};

export default MainCTA;
