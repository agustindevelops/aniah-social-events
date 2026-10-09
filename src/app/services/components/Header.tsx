import { WEDDINGS_AND_EVENTS } from "@/utils/content/offerings";

const Header = () => {
  return (
    <header className="bg-soft-peach bg-opacity-50 pb-16 pt-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-nickainley text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          {WEDDINGS_AND_EVENTS.title}
        </h2>
      </div>
    </header>
  );
};

export default Header;
