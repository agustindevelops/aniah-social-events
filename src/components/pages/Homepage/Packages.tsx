import PackageCard from "@/components/packages/PackageCard";
import { getPublicPackages } from "@/lib/ase-admin/packages";
import { AT_HOME_EXPERIENCES } from "@/utils/content/offerings";

const Packages = async () => {
  const packages = await getPublicPackages();
  if (packages.length === 0) return null;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <header className="pb-10 pt-8 text-center">
        <h2 className="font-nickainley text-5xl sm:text-6xl md:text-7xl">
          {AT_HOME_EXPERIENCES.title}
        </h2>
      </header>
      <div className="flex flex-col gap-8 text-left">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
