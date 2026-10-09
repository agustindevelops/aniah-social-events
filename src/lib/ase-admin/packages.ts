import { unstable_cache } from "next/cache";

import { aseAdminApi } from "@/lib/ase-admin/client";

export type PublicPackageMedia = {
  type: "image" | "video";
  contentType: string;
  url: string;
};

export type PublicPackageItem = {
  itemId: string;
  name: string;
  quantity: number;
};

export type PublicPackage = {
  id: string;
  name: string;
  summary: string | null;
  description: string | null;
  basePriceCents: number;
  media: PublicPackageMedia[];
  items: PublicPackageItem[];
};

const PACKAGES_REVALIDATE_SECONDS = 5 * 60;

export const getPublicPackages = unstable_cache(
  async (): Promise<PublicPackage[]> => {
    const { data } = await aseAdminApi.get<{ packages: PublicPackage[] }>(
      "packages"
    );
    return data.packages;
  },
  ["ase-admin-public-packages"],
  { revalidate: PACKAGES_REVALIDATE_SECONDS }
);

export async function getPublicPackage(
  packageId: string
): Promise<PublicPackage | null> {
  const packages = await getPublicPackages();
  return packages.find((pkg) => pkg.id === packageId) ?? null;
}
