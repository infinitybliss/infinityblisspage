import type { LegalDocumentContent } from "@/types/legal";
import type { Locale } from "@/types/locale";

const es: LegalDocumentContent = {
  title: "Aviso legal",
  description:
    "Aviso legal de Infinity Bliss – Nails & Massage. Información identificativa y condiciones de uso del sitio web.",
  sections: [
    {
      title: "1. Datos identificativos",
      blocks: [
        {
          type: "p",
          text: "En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se informa de que el presente sitio web es titularidad de:",
        },
        {
          type: "fields",
          items: [
            {
              label: "Nombre comercial",
              value: "Infinity Bliss – Nails & Massage",
            },
            {
              label: "Titular / Razón social",
              value: "[NOMBRE COMPLETO O RAZÓN SOCIAL]",
            },
            { label: "NIF/CIF", value: "[NIF/CIF]" },
            { label: "Domicilio", value: "[DIRECCIÓN COMPLETA]" },
            { label: "Correo electrónico", value: "Infinitybliss.santiago@gmail.com" },
            { label: "Teléfono", value: "[TELÉFONO]" },
            { label: "Sitio web", value: "[DOMINIO DEFINITIVO]" },
          ],
        },
        {
          type: "p",
          text: "En adelante, “Infinity Bliss”.",
        },
      ],
    },
    {
      title: "2. Objeto del sitio web",
      blocks: [
        {
          type: "p",
          text: "El presente sitio web tiene como finalidad ofrecer información acerca de Infinity Bliss, sus servicios de bienestar, masajes y tratamientos, así como facilitar el acceso al sistema de reserva de citas.",
        },
        {
          type: "p",
          text: "La información publicada en la web tiene carácter informativo y comercial y podrá modificarse cuando resulte necesario para mantener actualizados los servicios, horarios, precios o condiciones del centro.",
        },
      ],
    },
    {
      title: "3. Condiciones de utilización",
      blocks: [
        {
          type: "p",
          text: "La persona usuaria se compromete a utilizar este sitio web de forma lícita, responsable y conforme a la buena fe.",
        },
        {
          type: "p",
          text: "Queda prohibido utilizar la web para:",
        },
        {
          type: "ul",
          items: [
            "realizar actividades ilícitas;",
            "intentar acceder sin autorización a sistemas o áreas restringidas;",
            "introducir software malicioso;",
            "interferir en el funcionamiento del sitio o del sistema de reservas;",
            "realizar reservas fraudulentas o con datos falsos;",
            "utilizar los contenidos del sitio de forma contraria a los derechos de Infinity Bliss o de terceros.",
          ],
        },
        {
          type: "p",
          text: "Infinity Bliss podrá adoptar las medidas necesarias ante usos abusivos o fraudulentos de la web o del sistema de reservas.",
        },
      ],
    },
    {
      title: "4. Propiedad intelectual e industrial",
      blocks: [
        {
          type: "p",
          text: "Los textos, diseño, estructura, identidad visual, logotipos, fotografías, ilustraciones y demás contenidos de este sitio web están protegidos por la normativa aplicable en materia de propiedad intelectual e industrial.",
        },
        {
          type: "p",
          text: "No está permitida su reproducción, distribución, transformación o utilización comercial sin autorización expresa de sus titulares, salvo en los supuestos permitidos legalmente.",
        },
        {
          type: "p",
          text: "Los contenidos proporcionados por terceros permanecen sujetos a los derechos de sus respectivos titulares.",
        },
      ],
    },
    {
      title: "5. Responsabilidad",
      blocks: [
        {
          type: "p",
          text: "Infinity Bliss procura mantener actualizada y disponible la información del sitio web, pero no puede garantizar la ausencia absoluta de errores, interrupciones o incidencias técnicas.",
        },
        {
          type: "p",
          text: "La disponibilidad mostrada por el sistema de reservas puede variar en tiempo real.",
        },
        {
          type: "p",
          text: "Infinity Bliss no será responsable de las interrupciones ocasionadas por proveedores tecnológicos externos, redes de comunicaciones o circunstancias ajenas a su control, sin perjuicio de los derechos que correspondan legalmente a las personas consumidoras.",
        },
      ],
    },
    {
      title: "6. Enlaces y servicios de terceros",
      blocks: [
        {
          type: "p",
          text: "La web puede incorporar servicios, enlaces o contenidos proporcionados por terceros, entre ellos el sistema de reservas SimplyBook.me.",
        },
        {
          type: "p",
          text: "Estos servicios pueden estar sujetos a sus propias condiciones y políticas de privacidad.",
        },
        {
          type: "p",
          text: "La utilización de servicios externos no implica que Infinity Bliss sea responsable del contenido o funcionamiento de sitios web ajenos, salvo en los casos previstos legalmente.",
        },
      ],
    },
    {
      title: "7. Legislación aplicable",
      blocks: [
        {
          type: "p",
          text: "El sitio web se rige por la legislación española.",
        },
        {
          type: "p",
          text: "Cuando la persona usuaria tenga la condición de consumidora, cualquier controversia se resolverá conforme a las normas de competencia territorial que resulten aplicables y sin limitar los derechos que le reconoce la normativa de protección de consumidores y usuarios.",
        },
      ],
    },
  ],
};

const gl: LegalDocumentContent = {
  title: "Aviso legal",
  description:
    "Aviso legal de Infinity Bliss – Nails & Massage. Información identificativa e condicións de uso do sitio web.",
  sections: [
    {
      title: "1. Datos identificativos",
      blocks: [
        {
          type: "p",
          text: "En cumprimento da Lei 34/2002, do 11 de xullo, de Servizos da Sociedade da Información e do Comercio Electrónico, infórmase de que o presente sitio web é titularidade de:",
        },
        {
          type: "fields",
          items: [
            {
              label: "Nome comercial",
              value: "Infinity Bliss – Nails & Massage",
            },
            {
              label: "Titular / Razón social",
              value: "[NOMBRE COMPLETO O RAZÓN SOCIAL]",
            },
            { label: "NIF/CIF", value: "[NIF/CIF]" },
            { label: "Domicilio", value: "[DIRECCIÓN COMPLETA]" },
            { label: "Correo electrónico", value: "Infinitybliss.santiago@gmail.com" },
            { label: "Teléfono", value: "[TELÉFONO]" },
            { label: "Sitio web", value: "[DOMINIO DEFINITIVO]" },
          ],
        },
        {
          type: "p",
          text: "No sucesivo, “Infinity Bliss”.",
        },
      ],
    },
    {
      title: "2. Obxecto do sitio web",
      blocks: [
        {
          type: "p",
          text: "O presente sitio web ten como finalidade ofrecer información acerca de Infinity Bliss, os seus servizos de benestar, masaxes e tratamentos, así como facilitar o acceso ao sistema de reserva de citas.",
        },
        {
          type: "p",
          text: "A información publicada na web ten carácter informativo e comercial e poderá modificarse cando resulte necesario para manter actualizados os servizos, horarios, prezos ou condicións do centro.",
        },
      ],
    },
    {
      title: "3. Condicións de utilización",
      blocks: [
        {
          type: "p",
          text: "A persoa usuaria comprométese a utilizar este sitio web de forma lícita, responsable e conforme á boa fe.",
        },
        {
          type: "p",
          text: "Queda prohibido utilizar a web para:",
        },
        {
          type: "ul",
          items: [
            "realizar actividades ilícitas;",
            "intentar acceder sen autorización a sistemas ou áreas restrinxidas;",
            "introducir software malicioso;",
            "interferir no funcionamento do sitio ou do sistema de reservas;",
            "realizar reservas fraudulentas ou con datos falsos;",
            "utilizar os contidos do sitio de forma contraria aos dereitos de Infinity Bliss ou de terceiros.",
          ],
        },
        {
          type: "p",
          text: "Infinity Bliss poderá adoptar as medidas necesarias ante usos abusivos ou fraudulentos da web ou do sistema de reservas.",
        },
      ],
    },
    {
      title: "4. Propiedade intelectual e industrial",
      blocks: [
        {
          type: "p",
          text: "Os textos, deseño, estrutura, identidade visual, logotipos, fotografías, ilustracións e demais contidos deste sitio web están protexidos pola normativa aplicable en materia de propiedade intelectual e industrial.",
        },
        {
          type: "p",
          text: "Non está permitida a súa reprodución, distribución, transformación ou utilización comercial sen autorización expresa dos seus titulares, salvo nos supostos permitidos legalmente.",
        },
        {
          type: "p",
          text: "Os contidos proporcionados por terceiros permanecen suxeitos aos dereitos dos seus respectivos titulares.",
        },
      ],
    },
    {
      title: "5. Responsabilidade",
      blocks: [
        {
          type: "p",
          text: "Infinity Bliss procura manter actualizada e dispoñible a información do sitio web, pero non pode garantir a ausencia absoluta de erros, interrupcións ou incidencias técnicas.",
        },
        {
          type: "p",
          text: "A dispoñibilidade mostrada polo sistema de reservas pode variar en tempo real.",
        },
        {
          type: "p",
          text: "Infinity Bliss non será responsable das interrupcións ocasionadas por provedores tecnolóxicos externos, redes de comunicacións ou circunstancias alleas ao seu control, sen prexuízo dos dereitos que correspondan legalmente ás persoas consumidoras.",
        },
      ],
    },
    {
      title: "6. Ligazóns e servizos de terceiros",
      blocks: [
        {
          type: "p",
          text: "A web pode incorporar servizos, ligazóns ou contidos proporcionados por terceiros, entre eles o sistema de reservas SimplyBook.me.",
        },
        {
          type: "p",
          text: "Estes servizos poden estar suxeitos ás súas propias condicións e políticas de privacidade.",
        },
        {
          type: "p",
          text: "A utilización de servizos externos non implica que Infinity Bliss sexa responsable do contido ou funcionamento de sitios web alleos, salvo nos casos previstos legalmente.",
        },
      ],
    },
    {
      title: "7. Lexislación aplicable",
      blocks: [
        {
          type: "p",
          text: "O sitio web réxese pola lexislación española.",
        },
        {
          type: "p",
          text: "Cando a persoa usuaria teña a condición de consumidora, calquera controversia resolverase conforme ás normas de competencia territorial que resulten aplicables e sen limitar os dereitos que lle recoñece a normativa de protección de consumidores e usuarios.",
        },
      ],
    },
  ],
};

const en: LegalDocumentContent = {
  title: "Legal Notice",
  description:
    "Legal notice of Infinity Bliss – Nails & Massage. Identifying information and terms of use of the website.",
  sections: [
    {
      title: "1. Identifying information",
      blocks: [
        {
          type: "p",
          text: "In compliance with Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce, you are informed that this website is owned by:",
        },
        {
          type: "fields",
          items: [
            {
              label: "Trade name",
              value: "Infinity Bliss – Nails & Massage",
            },
            {
              label: "Owner / Legal name",
              value: "[NOMBRE COMPLETO O RAZÓN SOCIAL]",
            },
            { label: "NIF/CIF", value: "[NIF/CIF]" },
            { label: "Address", value: "[DIRECCIÓN COMPLETA]" },
            { label: "Email", value: "Infinitybliss.santiago@gmail.com" },
            { label: "Phone", value: "[TELÉFONO]" },
            { label: "Website", value: "[DOMINIO DEFINITIVO]" },
          ],
        },
        {
          type: "p",
          text: "Hereinafter, “Infinity Bliss”.",
        },
      ],
    },
    {
      title: "2. Purpose of the website",
      blocks: [
        {
          type: "p",
          text: "The purpose of this website is to provide information about Infinity Bliss, its wellness, massage and treatment services, and to facilitate access to the appointment booking system.",
        },
        {
          type: "p",
          text: "The information published on the website is for informational and commercial purposes and may be modified when necessary to keep the centre’s services, opening hours, prices or conditions up to date.",
        },
      ],
    },
    {
      title: "3. Terms of use",
      blocks: [
        {
          type: "p",
          text: "Users agree to use this website lawfully, responsibly and in good faith.",
        },
        {
          type: "p",
          text: "It is prohibited to use the website to:",
        },
        {
          type: "ul",
          items: [
            "carry out unlawful activities;",
            "attempt to access systems or restricted areas without authorisation;",
            "introduce malicious software;",
            "interfere with the operation of the website or the booking system;",
            "make fraudulent bookings or use false data;",
            "use the website’s content in a manner contrary to the rights of Infinity Bliss or third parties.",
          ],
        },
        {
          type: "p",
          text: "Infinity Bliss may take the necessary measures in response to abusive or fraudulent use of the website or the booking system.",
        },
      ],
    },
    {
      title: "4. Intellectual and industrial property",
      blocks: [
        {
          type: "p",
          text: "The texts, design, structure, visual identity, logos, photographs, illustrations and other content on this website are protected by applicable intellectual and industrial property law.",
        },
        {
          type: "p",
          text: "Their reproduction, distribution, transformation or commercial use is not permitted without the express authorisation of their owners, except in cases permitted by law.",
        },
        {
          type: "p",
          text: "Content provided by third parties remains subject to the rights of their respective owners.",
        },
      ],
    },
    {
      title: "5. Liability",
      blocks: [
        {
          type: "p",
          text: "Infinity Bliss endeavours to keep the information on the website up to date and available, but cannot guarantee the absolute absence of errors, interruptions or technical incidents.",
        },
        {
          type: "p",
          text: "Availability shown by the booking system may vary in real time.",
        },
        {
          type: "p",
          text: "Infinity Bliss shall not be liable for interruptions caused by external technology providers, communication networks or circumstances beyond its control, without prejudice to the rights legally corresponding to consumers.",
        },
      ],
    },
    {
      title: "6. Links and third-party services",
      blocks: [
        {
          type: "p",
          text: "The website may incorporate services, links or content provided by third parties, including the SimplyBook.me booking system.",
        },
        {
          type: "p",
          text: "These services may be subject to their own terms and privacy policies.",
        },
        {
          type: "p",
          text: "Use of external services does not imply that Infinity Bliss is responsible for the content or operation of third-party websites, except in cases provided for by law.",
        },
      ],
    },
    {
      title: "7. Applicable law",
      blocks: [
        {
          type: "p",
          text: "The website is governed by Spanish law.",
        },
        {
          type: "p",
          text: "Where the user is a consumer, any dispute shall be resolved in accordance with the applicable rules on territorial jurisdiction, without limiting the rights recognised by consumer protection legislation.",
        },
      ],
    },
  ],
};

export const legalNoticeContent: Record<Locale, LegalDocumentContent> = {
  es,
  gl,
  en,
};
