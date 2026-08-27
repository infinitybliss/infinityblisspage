import type { LegalDocumentContent } from "@/types/legal";
import type { Locale } from "@/types/locale";

const es: LegalDocumentContent = {
  title: "Política de privacidad",
  description:
    "Política de privacidad de Ritual Essences. Información sobre el tratamiento de datos personales y reservas.",
  sections: [
    {
      title: "1. Responsable del tratamiento",
      blocks: [
        {
          type: "fields",
          items: [
            {
              label: "Responsable",
              value: "[NOMBRE COMPLETO O RAZÓN SOCIAL]",
            },
            {
              label: "Nombre comercial",
              value: "Ritual Essences – Centro de Bienestar",
            },
            { label: "NIF/CIF", value: "[NIF/CIF]" },
            { label: "Dirección", value: "[DIRECCIÓN]" },
            { label: "Correo electrónico", value: "[EMAIL]" },
            { label: "Teléfono", value: "[TELÉFONO]" },
          ],
        },
        {
          type: "p",
          text: "Ritual Essences es responsable del tratamiento de los datos personales utilizados para gestionar las relaciones con clientes y las reservas realizadas en el centro.",
        },
      ],
    },
    {
      title: "2. Qué datos personales podemos tratar",
      blocks: [
        {
          type: "p",
          text: "Dependiendo de la forma en que interactúes con Ritual Essences, podemos tratar:",
        },
        {
          type: "ul",
          items: [
            "nombre y apellidos;",
            "teléfono;",
            "correo electrónico;",
            "datos relacionados con la reserva;",
            "servicio contratado;",
            "fecha y hora de la cita;",
            "comunicaciones relacionadas con la reserva;",
            "información que nos proporciones voluntariamente al contactar con nosotros.",
          ],
        },
        {
          type: "p",
          text: "No solicitaremos datos personales que no resulten necesarios para prestar el servicio.",
        },
        {
          type: "p",
          text: "Se recomienda no facilitar información especialmente sensible a través de campos abiertos o comunicaciones generales salvo que resulte estrictamente necesario y exista una base jurídica adecuada para tratarla.",
        },
      ],
    },
    {
      title: "3. Para qué utilizamos tus datos",
      blocks: [
        {
          type: "p",
          text: "Los datos personales podrán utilizarse para:",
        },
        { type: "h3", text: "Gestionar reservas y citas" },
        {
          type: "p",
          text: "Incluye:",
        },
        {
          type: "ul",
          items: [
            "registrar la reserva;",
            "confirmar la cita;",
            "modificarla o cancelarla;",
            "informar de cambios relacionados con el servicio;",
            "gestionar incidencias;",
            "contactar con el cliente cuando resulte necesario para prestar el servicio.",
          ],
        },
        {
          type: "p",
          text: "La base jurídica es la ejecución de medidas precontractuales y contractuales solicitadas por la persona interesada.",
        },
        { type: "h3", text: "Atender consultas" },
        {
          type: "p",
          text: "Si contactas mediante teléfono, correo electrónico, WhatsApp u otros medios habilitados, utilizaremos tus datos para responder a tu consulta.",
        },
        {
          type: "p",
          text: "La base jurídica será la atención de la solicitud realizada por la persona interesada.",
        },
        { type: "h3", text: "Cumplir obligaciones legales" },
        {
          type: "p",
          text: "Cuando resulte necesario, podremos conservar o comunicar determinados datos para cumplir obligaciones fiscales, contables, administrativas o legales.",
        },
        {
          type: "p",
          text: "La base jurídica será el cumplimiento de una obligación legal.",
        },
        { type: "h3", text: "Seguridad y prevención del fraude" },
        {
          type: "p",
          text: "Podrán utilizarse determinados datos técnicos o relacionados con reservas para prevenir usos abusivos, fraudulentos o que puedan perjudicar al funcionamiento del centro.",
        },
        {
          type: "p",
          text: "La base jurídica será el interés legítimo de Ritual Essences en proteger su actividad y sus sistemas, siempre respetando los derechos y libertades de las personas interesadas.",
        },
      ],
    },
    {
      title: "4. Sistema de reservas SimplyBook.me",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences utiliza SimplyBook.me como plataforma tecnológica para gestionar las reservas online.",
        },
        {
          type: "p",
          text: "Cuando realizas una reserva a través del sistema integrado en nuestra web, los datos necesarios para tramitarla son tratados mediante la plataforma SimplyBook.me.",
        },
        {
          type: "p",
          text: "A efectos del Reglamento General de Protección de Datos, Ritual Essences actúa como responsable del tratamiento de los datos de sus clientes y SimplyBook.me actúa como encargado del tratamiento en los términos establecidos en su Acuerdo de Tratamiento de Datos.",
        },
        {
          type: "p",
          text: "SimplyBook.me puede utilizar subencargados y realizar determinadas transferencias internacionales de datos bajo las garantías previstas en el RGPD, incluyendo decisiones de adecuación o cláusulas contractuales tipo cuando resulten necesarias.",
        },
        {
          type: "p",
          text: "Puede consultarse información adicional sobre el tratamiento realizado por SimplyBook.me en sus políticas y documentación de protección de datos.",
        },
      ],
    },
    {
      title: "5. Comunicaciones relacionadas con la reserva",
      blocks: [
        {
          type: "p",
          text: "Podrás recibir comunicaciones relacionadas con:",
        },
        {
          type: "ul",
          items: [
            "confirmación de la reserva;",
            "modificaciones;",
            "cancelaciones;",
            "recordatorios;",
            "información imprescindible para prestar el servicio.",
          ],
        },
        {
          type: "p",
          text: "Estas comunicaciones forman parte de la gestión de la reserva y no se consideran comunicaciones publicitarias.",
        },
        {
          type: "p",
          text: "Si en el futuro Ritual Essences desea enviar promociones, novedades u ofertas comerciales no relacionadas directamente con una reserva existente, se solicitará el consentimiento correspondiente cuando resulte necesario.",
        },
      ],
    },
    {
      title: "6. Destinatarios de los datos",
      blocks: [
        {
          type: "p",
          text: "Los datos podrán ser tratados por proveedores que resulten necesarios para prestar los servicios de Ritual Essences, tales como:",
        },
        {
          type: "ul",
          items: [
            "SimplyBook.me, como sistema de gestión de reservas;",
            "proveedores de alojamiento o infraestructura web;",
            "proveedores de correo o comunicaciones;",
            "proveedores técnicos necesarios para mantener el sitio web.",
          ],
        },
        {
          type: "p",
          text: "Estos proveedores tratarán los datos conforme a las obligaciones contractuales y legales que resulten aplicables.",
        },
        {
          type: "p",
          text: "Los datos no serán vendidos a terceros.",
        },
        {
          type: "p",
          text: "También podrán comunicarse datos cuando exista una obligación legal o requerimiento válido de una autoridad competente.",
        },
      ],
    },
    {
      title: "7. Transferencias internacionales",
      blocks: [
        {
          type: "p",
          text: "Algunos proveedores tecnológicos pueden tratar datos desde países situados fuera del Espacio Económico Europeo.",
        },
        {
          type: "p",
          text: "Cuando exista una transferencia internacional, esta deberá estar amparada por un mecanismo reconocido por la normativa de protección de datos, como una decisión de adecuación, cláusulas contractuales tipo u otra garantía válida conforme al RGPD.",
        },
        {
          type: "p",
          text: "SimplyBook.me declara utilizar mecanismos de transferencia compatibles con el RGPD para los tratamientos internacionales incluidos en su servicio.",
        },
      ],
    },
    {
      title: "8. Plazo de conservación",
      blocks: [
        {
          type: "p",
          text: "Los datos se conservarán durante el tiempo necesario para gestionar la reserva y prestar el servicio.",
        },
        {
          type: "p",
          text: "Posteriormente podrán mantenerse debidamente bloqueados durante los plazos necesarios para cumplir obligaciones legales o atender posibles responsabilidades.",
        },
        {
          type: "p",
          text: "Las consultas que no den lugar a una relación contractual se conservarán únicamente durante el tiempo razonablemente necesario para atenderlas.",
        },
      ],
    },
    {
      title: "9. Derechos de las personas interesadas",
      blocks: [
        {
          type: "p",
          text: "Puedes solicitar:",
        },
        {
          type: "ul",
          items: [
            "acceso a tus datos personales;",
            "rectificación de datos incorrectos;",
            "supresión;",
            "oposición al tratamiento cuando corresponda;",
            "limitación del tratamiento;",
            "portabilidad, cuando resulte aplicable;",
            "retirada del consentimiento en los tratamientos basados en consentimiento.",
          ],
        },
        {
          type: "p",
          text: "Para ejercer tus derechos puedes contactar con:",
        },
        {
          type: "fields",
          items: [
            {
              label: "Email",
              value: "[EMAIL DE PRIVACIDAD O GENERAL]",
            },
          ],
        },
        {
          type: "p",
          text: "Podrá solicitarse información necesaria para verificar la identidad de la persona que ejerce el derecho.",
        },
        {
          type: "p",
          text: "También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que el tratamiento de tus datos no respeta la normativa aplicable.",
        },
      ],
    },
    {
      title: "10. Seguridad",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences adopta medidas razonables para proteger los datos personales frente a accesos no autorizados, pérdidas, alteraciones o usos indebidos.",
        },
        {
          type: "p",
          text: "Asimismo, se procura utilizar proveedores tecnológicos que ofrezcan medidas adecuadas de seguridad y protección de datos.",
        },
      ],
    },
    {
      title: "11. Cambios en esta política",
      blocks: [
        {
          type: "p",
          text: "Esta Política de Privacidad podrá actualizarse cuando cambien los servicios, proveedores tecnológicos o requisitos legales.",
        },
        {
          type: "p",
          text: "La versión vigente será siempre la publicada en este sitio web.",
        },
        {
          type: "fields",
          items: [{ label: "Última actualización", value: "[FECHA]" }],
        },
      ],
    },
  ],
};

const gl: LegalDocumentContent = {
  title: "Política de privacidade",
  description:
    "Política de privacidade de Ritual Essences. Información sobre o tratamento de datos persoais e reservas.",
  sections: [
    {
      title: "1. Responsable do tratamento",
      blocks: [
        {
          type: "fields",
          items: [
            {
              label: "Responsable",
              value: "[NOMBRE COMPLETO O RAZÓN SOCIAL]",
            },
            {
              label: "Nome comercial",
              value: "Ritual Essences – Centro de Benestar",
            },
            { label: "NIF/CIF", value: "[NIF/CIF]" },
            { label: "Dirección", value: "[DIRECCIÓN]" },
            { label: "Correo electrónico", value: "[EMAIL]" },
            { label: "Teléfono", value: "[TELÉFONO]" },
          ],
        },
        {
          type: "p",
          text: "Ritual Essences é responsable do tratamento dos datos persoais utilizados para xestionar as relacións con clientes e as reservas realizadas no centro.",
        },
      ],
    },
    {
      title: "2. Que datos persoais podemos tratar",
      blocks: [
        {
          type: "p",
          text: "Dependendo da forma en que interactúes con Ritual Essences, podemos tratar:",
        },
        {
          type: "ul",
          items: [
            "nome e apelidos;",
            "teléfono;",
            "correo electrónico;",
            "datos relacionados coa reserva;",
            "servizo contratado;",
            "data e hora da cita;",
            "comunicacións relacionadas coa reserva;",
            "información que nos proporciones voluntariamente ao contactar connosco.",
          ],
        },
        {
          type: "p",
          text: "Non solicitaremos datos persoais que non resulten necesarios para prestar o servizo.",
        },
        {
          type: "p",
          text: "Recoméndase non facilitar información especialmente sensible a través de campos abertos ou comunicacións xerais salvo que resulte estritamente necesario e exista unha base xurídica adecuada para tratala.",
        },
      ],
    },
    {
      title: "3. Para que utilizamos os teus datos",
      blocks: [
        {
          type: "p",
          text: "Os datos persoais poderán utilizarse para:",
        },
        { type: "h3", text: "Xestionar reservas e citas" },
        {
          type: "p",
          text: "Inclúe:",
        },
        {
          type: "ul",
          items: [
            "rexistrar a reserva;",
            "confirmar a cita;",
            "modificala ou cancelala;",
            "informar de cambios relacionados co servizo;",
            "xestionar incidencias;",
            "contactar co cliente cando resulte necesario para prestar o servizo.",
          ],
        },
        {
          type: "p",
          text: "A base xurídica é a execución de medidas precontractuais e contractuais solicitadas pola persoa interesada.",
        },
        { type: "h3", text: "Atender consultas" },
        {
          type: "p",
          text: "Se contactas mediante teléfono, correo electrónico, WhatsApp ou outros medios habilitados, utilizaremos os teus datos para responder á túa consulta.",
        },
        {
          type: "p",
          text: "A base xurídica será a atención da solicitude realizada pola persoa interesada.",
        },
        { type: "h3", text: "Cumprir obrigas legais" },
        {
          type: "p",
          text: "Cando resulte necesario, poderemos conservar ou comunicar determinados datos para cumprir obrigas fiscais, contables, administrativas ou legais.",
        },
        {
          type: "p",
          text: "A base xurídica será o cumprimento dunha obriga legal.",
        },
        { type: "h3", text: "Seguridade e prevención da fraude" },
        {
          type: "p",
          text: "Poderán utilizarse determinados datos técnicos ou relacionados con reservas para previr usos abusivos, fraudulentos ou que poidan prexudicar o funcionamento do centro.",
        },
        {
          type: "p",
          text: "A base xurídica será o interese lexítimo de Ritual Essences en protexer a súa actividade e os seus sistemas, sempre respectando os dereitos e liberdades das persoas interesadas.",
        },
      ],
    },
    {
      title: "4. Sistema de reservas SimplyBook.me",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences utiliza SimplyBook.me como plataforma tecnolóxica para xestionar as reservas en liña.",
        },
        {
          type: "p",
          text: "Cando realizas unha reserva a través do sistema integrado na nosa web, os datos necesarios para tramitala son tratados mediante a plataforma SimplyBook.me.",
        },
        {
          type: "p",
          text: "A efectos do Regulamento Xeral de Protección de Datos, Ritual Essences actúa como responsable do tratamento dos datos dos seus clientes e SimplyBook.me actúa como encargado do tratamento nos termos establecidos no seu Acordo de Tratamento de Datos.",
        },
        {
          type: "p",
          text: "SimplyBook.me pode utilizar subencargados e realizar determinadas transferencias internacionais de datos baixo as garantías previstas no RXPD, incluíndo decisións de adecuación ou cláusulas contractuais tipo cando resulten necesarias.",
        },
        {
          type: "p",
          text: "Pode consultarse información adicional sobre o tratamento realizado por SimplyBook.me nas súas políticas e documentación de protección de datos.",
        },
      ],
    },
    {
      title: "5. Comunicacións relacionadas coa reserva",
      blocks: [
        {
          type: "p",
          text: "Poderás recibir comunicacións relacionadas con:",
        },
        {
          type: "ul",
          items: [
            "confirmación da reserva;",
            "modificacións;",
            "cancelacións;",
            "recordatorios;",
            "información imprescindible para prestar o servizo.",
          ],
        },
        {
          type: "p",
          text: "Estas comunicacións forman parte da xestión da reserva e non se consideran comunicacións publicitarias.",
        },
        {
          type: "p",
          text: "Se no futuro Ritual Essences desexa enviar promocións, novidades ou ofertas comerciais non relacionadas directamente cunha reserva existente, solicitarase o consentimento correspondente cando resulte necesario.",
        },
      ],
    },
    {
      title: "6. Destinatarios dos datos",
      blocks: [
        {
          type: "p",
          text: "Os datos poderán ser tratados por provedores que resulten necesarios para prestar os servizos de Ritual Essences, tales como:",
        },
        {
          type: "ul",
          items: [
            "SimplyBook.me, como sistema de xestión de reservas;",
            "provedores de aloxamento ou infraestrutura web;",
            "provedores de correo ou comunicacións;",
            "provedores técnicos necesarios para manter o sitio web.",
          ],
        },
        {
          type: "p",
          text: "Estes provedores tratarán os datos conforme ás obrigas contractuais e legais que resulten aplicables.",
        },
        {
          type: "p",
          text: "Os datos non serán vendidos a terceiros.",
        },
        {
          type: "p",
          text: "Tamén poderán comunicarse datos cando exista unha obriga legal ou requirimento válido dunha autoridade competente.",
        },
      ],
    },
    {
      title: "7. Transferencias internacionais",
      blocks: [
        {
          type: "p",
          text: "Algúns provedores tecnolóxicos poden tratar datos desde países situados fóra do Espazo Económico Europeo.",
        },
        {
          type: "p",
          text: "Cando exista unha transferencia internacional, esta deberá estar amparada por un mecanismo recoñecido pola normativa de protección de datos, como unha decisión de adecuación, cláusulas contractuais tipo ou outra garantía válida conforme ao RXPD.",
        },
        {
          type: "p",
          text: "SimplyBook.me declara utilizar mecanismos de transferencia compatibles co RXPD para os tratamentos internacionais incluídos no seu servizo.",
        },
      ],
    },
    {
      title: "8. Prazo de conservación",
      blocks: [
        {
          type: "p",
          text: "Os datos conservaranse durante o tempo necesario para xestionar a reserva e prestar o servizo.",
        },
        {
          type: "p",
          text: "Posteriormente poderán manterse debidamente bloqueados durante os prazos necesarios para cumprir obrigas legais ou atender posibles responsabilidades.",
        },
        {
          type: "p",
          text: "As consultas que non dean lugar a unha relación contractual conservaranse únicamente durante o tempo razoablemente necesario para atendelas.",
        },
      ],
    },
    {
      title: "9. Dereitos das persoas interesadas",
      blocks: [
        {
          type: "p",
          text: "Podes solicitar:",
        },
        {
          type: "ul",
          items: [
            "acceso aos teus datos persoais;",
            "rectificación de datos incorrectos;",
            "supresión;",
            "oposición ao tratamento cando corresponda;",
            "limitación do tratamento;",
            "portabilidade, cando resulte aplicable;",
            "retirada do consentimento nos tratamentos baseados en consentimento.",
          ],
        },
        {
          type: "p",
          text: "Para exercer os teus dereitos podes contactar con:",
        },
        {
          type: "fields",
          items: [
            {
              label: "Email",
              value: "[EMAIL DE PRIVACIDAD O GENERAL]",
            },
          ],
        },
        {
          type: "p",
          text: "Poderá solicitarse información necesaria para verificar a identidade da persoa que exerce o dereito.",
        },
        {
          type: "p",
          text: "Tamén tes dereito a presentar unha reclamación ante a Axencia Española de Protección de Datos (AEPD) se consideras que o tratamento dos teus datos non respecta a normativa aplicable.",
        },
      ],
    },
    {
      title: "10. Seguridade",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences adopta medidas razoables para protexer os datos persoais fronte a accesos non autorizados, perdas, alteracións ou usos indebidos.",
        },
        {
          type: "p",
          text: "Así mesmo, procúrase utilizar provedores tecnolóxicos que ofrezan medidas adecuadas de seguridade e protección de datos.",
        },
      ],
    },
    {
      title: "11. Cambios nesta política",
      blocks: [
        {
          type: "p",
          text: "Esta Política de Privacidade poderá actualizarse cando cambien os servizos, provedores tecnolóxicos ou requisitos legais.",
        },
        {
          type: "p",
          text: "A versión vixente será sempre a publicada neste sitio web.",
        },
        {
          type: "fields",
          items: [{ label: "Última actualización", value: "[FECHA]" }],
        },
      ],
    },
  ],
};

export const privacyContent: Record<Locale, LegalDocumentContent> = {
  es,
  gl,
};
