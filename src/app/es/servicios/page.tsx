import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServicesPageMetadata } from "@/lib/services/metadata";

export const metadata = getServicesPageMetadata("es");

export default function Page() {
  const dictionary = getDictionary("es");
  return <ServicesCatalog locale="es" dictionary={dictionary} />;
}
