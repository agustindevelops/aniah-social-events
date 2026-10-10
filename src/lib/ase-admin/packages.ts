import { isAxiosError } from "axios";
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
  slug: string;
  name: string;
  summary: string | null;
  description: string | null;
  basePriceCents: number;
  media: PublicPackageMedia[];
  items: PublicPackageItem[];
};

const PACKAGES_REVALIDATE_SECONDS = 5 * 60;

// Bump the version when the package shape changes so stale cache entries are skipped.
export const getPublicPackages = unstable_cache(
  async (): Promise<PublicPackage[]> => {
    const { data } = await aseAdminApi.get<{ packages: PublicPackage[] }>(
      "packages"
    );
    return data.packages;
  },
  ["ase-admin-public-packages", "v2"],
  { revalidate: PACKAGES_REVALIDATE_SECONDS }
);

export const getPublicPackageBySlug = unstable_cache(
  async (slug: string): Promise<PublicPackage | null> => {
    try {
      const { data } = await aseAdminApi.get<{ package: PublicPackage }>(
        `packages/${encodeURIComponent(slug)}`
      );
      return data.package;
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 404) return null;
      throw error;
    }
  },
  ["ase-admin-public-package-by-slug", "v1"],
  { revalidate: PACKAGES_REVALIDATE_SECONDS }
);

/** Package pages used to be addressed by id; used to redirect those links. */
export async function getPublicPackageById(
  packageId: string
): Promise<PublicPackage | null> {
  const packages = await getPublicPackages();
  return packages.find((pkg) => pkg.id === packageId) ?? null;
}
