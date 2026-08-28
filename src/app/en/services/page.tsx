import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServicesPageMetadata } from "@/lib/services/metadata";

export const metadata = getServicesPageMetadata("en");

export default function Page() {
  const dictionary = getDictionary("en");
  return <ServicesCatalog locale="en" dictionary={dictionary} />;
}
