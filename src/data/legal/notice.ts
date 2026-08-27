import type { LegalDocumentContent } from "@/types/legal";
import type { Locale } from "@/types/locale";

const es: LegalDocumentContent = {
  title: "Aviso legal",
  description:
    "Aviso legal de Ritual Essences – Centro de Bienestar. Información identificativa y condiciones de uso del sitio web.",
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
              value: "Ritual Essences – Centro de Bienestar",
            },
            {
              label: "Titular / Razón social",
              value: "[NOMBRE COMPLETO O RAZÓN SOCIAL]",
            },
            { label: "NIF/CIF", value: "[NIF/CIF]" },
            { label: "Domicilio", value: "[DIRECCIÓN COMPLETA]" },
            { label: "Correo electrónico", value: "[EMAIL]" },
            { label: "Teléfono", value: "[TELÉFONO]" },
            { label: "Sitio web", value: "[DOMINIO DEFINITIVO]" },
          ],
        },
        {
          type: "p",
          text: "En adelante, “Ritual Essences”.",
        },
      ],
    },
    {
      title: "2. Objeto del sitio web",
      blocks: [
        {
          type: "p",
          text: "El presente sitio web tiene como finalidad ofrecer información acerca de Ritual Essences, sus servicios de bienestar, masajes y tratamientos, así como facilitar el acceso al sistema de reserva de citas.",
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
            "utilizar los contenidos del sitio de forma contraria a los derechos de Ritual Essences o de terceros.",
          ],
        },
        {
          type: "p",
          text: "Ritual Essences podrá adoptar las medidas necesarias ante usos abusivos o fraudulentos de la web o del sistema de reservas.",
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
          text: "Ritual Essences procura mantener actualizada y disponible la información del sitio web, pero no puede garantizar la ausencia absoluta de errores, interrupciones o incidencias técnicas.",
        },
        {
          type: "p",
          text: "La disponibilidad mostrada por el sistema de reservas puede variar en tiempo real.",
        },
        {
          type: "p",
          text: "Ritual Essences no será responsable de las interrupciones ocasionadas por proveedores tecnológicos externos, redes de comunicaciones o circunstancias ajenas a su control, sin perjuicio de los derechos que correspondan legalmente a las personas consumidoras.",
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
          text: "La utilización de servicios externos no implica que Ritual Essences sea responsable del contenido o funcionamiento de sitios web ajenos, salvo en los casos previstos legalmente.",
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
    "Aviso legal de Ritual Essences – Centro de Benestar. Información identificativa e condicións de uso do sitio web.",
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
              value: "Ritual Essences – Centro de Benestar",
            },
            {
              label: "Titular / Razón social",
              value: "[NOMBRE COMPLETO O RAZÓN SOCIAL]",
            },
            { label: "NIF/CIF", value: "[NIF/CIF]" },
            { label: "Domicilio", value: "[DIRECCIÓN COMPLETA]" },
            { label: "Correo electrónico", value: "[EMAIL]" },
            { label: "Teléfono", value: "[TELÉFONO]" },
            { label: "Sitio web", value: "[DOMINIO DEFINITIVO]" },
          ],
        },
        {
          type: "p",
          text: "No sucesivo, “Ritual Essences”.",
        },
      ],
    },
    {
      title: "2. Obxecto do sitio web",
      blocks: [
        {
          type: "p",
          text: "O presente sitio web ten como finalidade ofrecer información acerca de Ritual Essences, os seus servizos de benestar, masaxes e tratamentos, así como facilitar o acceso ao sistema de reserva de citas.",
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
            "utilizar os contidos do sitio de forma contraria aos dereitos de Ritual Essences ou de terceiros.",
          ],
        },
        {
          type: "p",
          text: "Ritual Essences poderá adoptar as medidas necesarias ante usos abusivos ou fraudulentos da web ou do sistema de reservas.",
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
          text: "Ritual Essences procura manter actualizada e dispoñible a información do sitio web, pero non pode garantir a ausencia absoluta de erros, interrupcións ou incidencias técnicas.",
        },
        {
          type: "p",
          text: "A dispoñibilidade mostrada polo sistema de reservas pode variar en tempo real.",
        },
        {
          type: "p",
          text: "Ritual Essences non será responsable das interrupcións ocasionadas por provedores tecnolóxicos externos, redes de comunicacións ou circunstancias alleas ao seu control, sen prexuízo dos dereitos que correspondan legalmente ás persoas consumidoras.",
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
          text: "A utilización de servizos externos non implica que Ritual Essences sexa responsable do contido ou funcionamento de sitios web alleos, salvo nos casos previstos legalmente.",
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

export const legalNoticeContent: Record<Locale, LegalDocumentContent> = {
  es,
  gl,
};
