import Button from "@/components/buttons/Button";
import PackageCard from "@/components/packages/PackageCard";
import { getPublicPackages } from "@/lib/ase-admin/packages";
import { AT_HOME_EXPERIENCES } from "@/utils/content/offerings";
import { START_PLANNING_ROUTE } from "@/utils/content/schedule";

const AtHomeExperiencesPage = async () => {
  const packages = await getPublicPackages();

  return (
    <div className="my-24">
      <header className="pb-16 pt-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="font-nickainley text-5xl sm:text-6xl md:text-7xl">
            {AT_HOME_EXPERIENCES.title}
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-brown-700 md:text-xl">
            {AT_HOME_EXPERIENCES.description}
          </p>
          <div className="mt-10">
            <Button href={START_PLANNING_ROUTE}>Start Planning</Button>
          </div>
        </div>
      </header>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {packages.length > 0 ? (
          <div className="flex flex-col gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <p className="text-center font-libre text-brown-700">
            Packages will appear here once they are published.
          </p>
        )}
      </section>
    </div>
  );
};

export const revalidate = 3600;

export const metadata = {
  title: "At-Home Experiences | Aniah Social Events",
  description: AT_HOME_EXPERIENCES.description,
};

export default AtHomeExperiencesPage;
