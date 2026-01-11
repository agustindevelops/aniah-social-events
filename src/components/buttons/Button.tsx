import clsxm from "@/lib/clsxm";
import Link from "next/link";

const Button = ({
  href,
  children,
  className = "text-md md:text-lg",
}: ButtonProps) => {
  return (
    <Link
      href={href}
      className={clsxm(
        "bg-green-500 hover:bg-green-700 text-white font-medium py-3 px-4 md:px-8 rounded-full transition duration-300 shadow-sm inline-block",
        className
      )}
    >
      {children}
    </Link>
  );
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default Button;
