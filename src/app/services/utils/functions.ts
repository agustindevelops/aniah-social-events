import { getServices } from "@/lib/contentful/api";
import { ServiceGroup } from "./types";

const getServicesGrouped = async (): Promise<ServiceGroup[]> => {
  const rawServices = await getServices();

  return rawServices
    .reduce((acc, service) => {
      const category = service.category || "Other";
      const existingCategory = acc.find((group) => group.category === category);

      if (existingCategory) {
        existingCategory.services.push(service);
      } else {
        acc.push({ category, services: [service] });
      }

      return acc;
      }, [] as { category: string; services: typeof rawServices }[])
    .map((group) => ({
      ...group,
      services: group.services.sort((a, b) => (a.price || 0) - (b.price || 0)),
    }));
};

export { getServicesGrouped };
