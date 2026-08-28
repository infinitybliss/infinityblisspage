import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServicesPageMetadata } from "@/lib/services/metadata";

export const metadata = getServicesPageMetadata("gl");

export default function Page() {
  const dictionary = getDictionary("gl");
  return <ServicesCatalog locale="gl" dictionary={dictionary} />;
}
