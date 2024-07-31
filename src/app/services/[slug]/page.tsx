import { SERVICES } from '@/utils/data';
import Service from '@/app/services/components/Service';

export type Package = {
  slug: string;
  pathname: string;
  title: string;
  subTitle: string;
  price: string;
  body: string;
  services: string[];
};

export const generateStaticParams = async () =>
  Object.values(SERVICES.PLANNING_AND_COORDINATION).map(({ slug }) => ({
    slug,
  }));

export default Service;
