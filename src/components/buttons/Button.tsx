import Link from "next/link";

const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link
      href={href}
      className="bg-green-500 hover:bg-green-700 text-md md:text-lg text-white font-medium py-3 px-4 md:px-8 rounded-full transition duration-300 shadow-sm inline-block"
    >
      {children}
    </Link>
  );
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default Button;
