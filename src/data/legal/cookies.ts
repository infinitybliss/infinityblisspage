import type { LegalDocumentContent } from "@/types/legal";
import type { Locale } from "@/types/locale";

/** Official SimplyBook.me Cookie Policy. */
const SIMPLYBOOK_COOKIE_POLICY_URL =
  "https://simplybook.me/en/legal/cookie_policy";

const es: LegalDocumentContent = {
  title: "Política de Cookies",
  description:
    "Información sobre las cookies y tecnologías utilizadas en la web y el sistema de reservas de Ritual Essences.",
  sections: [
    {
      title: "1. ¿Qué son las cookies?",
      blocks: [
        {
          type: "p",
          text: "Las cookies son pequeños archivos o mecanismos de almacenamiento que pueden guardarse en el dispositivo de la persona usuaria cuando visita una página web.",
        },
        {
          type: "p",
          text: "Permiten, entre otras funciones, mantener una sesión activa, recordar determinadas preferencias o permitir el correcto funcionamiento de algunos servicios.",
        },
        {
          type: "p",
          text: "También existen tecnologías similares que pueden almacenar o acceder a información del dispositivo.",
        },
      ],
    },
    {
      title: "2. ¿Qué cookies utiliza Ritual Essences?",
      blocks: [
        {
          type: "p",
          text: "La web de Ritual Essences no utiliza actualmente cookies publicitarias ni herramientas propias de seguimiento o analítica.",
        },
        {
          type: "p",
          text: "No utilizamos actualmente:",
        },
        {
          type: "ul",
          items: [
            "Google Analytics;",
            "Meta Pixel;",
            "cookies publicitarias;",
            "herramientas de perfilado de usuarios.",
          ],
        },
        {
          type: "p",
          text: "La página de reservas incorpora un servicio externo proporcionado por SimplyBook.me.",
        },
        {
          type: "p",
          text: "Este sistema utiliza determinadas cookies técnicas necesarias para permitir el funcionamiento del proceso de reserva.",
        },
      ],
    },
    {
      title: "3. Cookies técnicas de SimplyBook.me",
      blocks: [
        {
          type: "p",
          text: "Al acceder al sistema de reservas pueden utilizarse cookies técnicas y de sesión proporcionadas por SimplyBook.me.",
        },
        {
          type: "p",
          text: "Entre las cookies detectadas durante nuestras pruebas se encuentran:",
        },
        {
          type: "table",
          caption: "Cookies técnicas de SimplyBook.me detectadas en Ritual Essences",
          headers: ["Cookie", "Proveedor", "Finalidad", "Duración"],
          rows: [
            [
              "__widget_init",
              "SimplyBook.me",
              "Inicialización y funcionamiento del widget de reservas",
              "Sesión",
            ],
            [
              "sb_line_token_ritualessences",
              "SimplyBook.me",
              "Gestión técnica de sesión, cola y protección del sistema",
              "Sesión",
            ],
            [
              "sb_token_ritualessences",
              "SimplyBook.me",
              "Gestión técnica de la sesión de reserva",
              "Sesión",
            ],
            [
              "sess_user_publicv2_ritualessences",
              "SimplyBook.me",
              "Mantener la sesión pública durante el proceso de reserva",
              "Sesión",
            ],
            [
              "sb_widget",
              "SimplyBook.me",
              "Funcionamiento y estado del widget",
              "Sesión",
            ],
            [
              "cookies_accepted",
              "SimplyBook.me",
              "Gestión de preferencias relacionadas con cookies",
              "Según configuración del proveedor",
            ],
          ],
        },
        {
          type: "p",
          text: "Los nombres exactos de algunas cookies pueden variar ligeramente por cambios internos de SimplyBook.me.",
        },
      ],
    },
    {
      title: "4. ¿Por qué no aparece un banner de cookies?",
      blocks: [
        {
          type: "p",
          text: "Las cookies técnicas necesarias para prestar un servicio solicitado expresamente por la persona usuaria pueden utilizarse sin solicitar consentimiento previo.",
        },
        {
          type: "p",
          text: "Actualmente, las cookies detectadas en esta web están relacionadas con el funcionamiento técnico del sistema de reservas.",
        },
        {
          type: "p",
          text: "Por este motivo, actualmente no se muestra un banner de aceptación o rechazo de cookies.",
        },
        {
          type: "p",
          text: "Si en el futuro Ritual Essences incorpora herramientas de analítica, publicidad, seguimiento o cualquier otra tecnología que requiera consentimiento, se implementará el correspondiente sistema de gestión de consentimiento antes de activar dichas tecnologías.",
        },
      ],
    },
    {
      title: "5. SimplyBook.me",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences utiliza SimplyBook.me para gestionar las reservas online.",
        },
        {
          type: "p",
          text: "Cuando una persona accede al sistema de reservas, determinados elementos son proporcionados directamente por SimplyBook.me.",
        },
        {
          type: "p",
          text: "SimplyBook.me puede utilizar cookies y tecnologías similares necesarias para el funcionamiento de su plataforma.",
        },
        {
          type: "externalLink",
          href: SIMPLYBOOK_COOKIE_POLICY_URL,
          label: "Política de Cookies de SimplyBook.me (abre en una nueva pestaña)",
        },
      ],
    },
    {
      title: "6. Cómo eliminar cookies",
      blocks: [
        {
          type: "p",
          text: "Las personas usuarias pueden consultar, eliminar o bloquear cookies desde la configuración de su navegador.",
        },
        {
          type: "p",
          text: "La eliminación o bloqueo de determinadas cookies técnicas puede afectar al funcionamiento del sistema de reservas.",
        },
      ],
    },
    {
      title: "7. Cambios en esta Política de Cookies",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences podrá actualizar esta Política de Cookies si:",
        },
        {
          type: "ul",
          items: [
            "cambian las tecnologías utilizadas;",
            "SimplyBook.me modifica sus cookies;",
            "se incorporan nuevas herramientas;",
            "cambian los requisitos legales aplicables.",
          ],
        },
        {
          type: "p",
          text: "La versión vigente será siempre la publicada en esta página.",
        },
        {
          type: "fields",
          items: [
            {
              label: "Última actualización",
              value: "agosto de 2026",
            },
          ],
        },
      ],
    },
  ],
};

const gl: LegalDocumentContent = {
  title: "Política de cookies",
  description:
    "Información sobre as cookies e tecnoloxías utilizadas na web e no sistema de reservas de Ritual Essences.",
  sections: [
    {
      title: "1. Que son as cookies?",
      blocks: [
        {
          type: "p",
          text: "As cookies son pequenos arquivos ou mecanismos de almacenamento que poden gardarse no dispositivo da persoa usuaria cando visita unha páxina web.",
        },
        {
          type: "p",
          text: "Permiten, entre outras funcións, manter unha sesión activa, lembrar determinadas preferencias ou permitir o correcto funcionamento dalgúns servizos.",
        },
        {
          type: "p",
          text: "Tamén existen tecnoloxías similares que poden almacenar ou acceder a información do dispositivo.",
        },
      ],
    },
    {
      title: "2. Que cookies utiliza Ritual Essences?",
      blocks: [
        {
          type: "p",
          text: "A web de Ritual Essences non utiliza actualmente cookies publicitarias nin ferramentas propias de seguimento ou analítica.",
        },
        {
          type: "p",
          text: "Non utilizamos actualmente:",
        },
        {
          type: "ul",
          items: [
            "Google Analytics;",
            "Meta Pixel;",
            "cookies publicitarias;",
            "ferramentas de perfilado de usuarios.",
          ],
        },
        {
          type: "p",
          text: "A páxina de reservas incorpora un servizo externo proporcionado por SimplyBook.me.",
        },
        {
          type: "p",
          text: "Este sistema utiliza determinadas cookies técnicas necesarias para permitir o funcionamento do proceso de reserva.",
        },
      ],
    },
    {
      title: "3. Cookies técnicas de SimplyBook.me",
      blocks: [
        {
          type: "p",
          text: "Ao acceder ao sistema de reservas poden utilizarse cookies técnicas e de sesión proporcionadas por SimplyBook.me.",
        },
        {
          type: "p",
          text: "Entre as cookies detectadas durante as nosas probas atópanse:",
        },
        {
          type: "table",
          caption: "Cookies técnicas de SimplyBook.me detectadas en Ritual Essences",
          headers: ["Cookie", "Provedor", "Finalidade", "Duración"],
          rows: [
            [
              "__widget_init",
              "SimplyBook.me",
              "Inicialización e funcionamento do widget de reservas",
              "Sesión",
            ],
            [
              "sb_line_token_ritualessences",
              "SimplyBook.me",
              "Xestión técnica de sesión, cola e protección do sistema",
              "Sesión",
            ],
            [
              "sb_token_ritualessences",
              "SimplyBook.me",
              "Xestión técnica da sesión de reserva",
              "Sesión",
            ],
            [
              "sess_user_publicv2_ritualessences",
              "SimplyBook.me",
              "Manter a sesión pública durante o proceso de reserva",
              "Sesión",
            ],
            [
              "sb_widget",
              "SimplyBook.me",
              "Funcionamento e estado do widget",
              "Sesión",
            ],
            [
              "cookies_accepted",
              "SimplyBook.me",
              "Xestión de preferencias relacionadas con cookies",
              "Segundo configuración do provedor",
            ],
          ],
        },
        {
          type: "p",
          text: "Os nomes exactos dalgunhas cookies poden variar lixeiramente por cambios internos de SimplyBook.me.",
        },
      ],
    },
    {
      title: "4. Por que non aparece un banner de cookies?",
      blocks: [
        {
          type: "p",
          text: "As cookies técnicas necesarias para prestar un servizo solicitado expresamente pola persoa usuaria poden utilizarse sen solicitar consentimento previo.",
        },
        {
          type: "p",
          text: "Actualmente, as cookies detectadas nesta web están relacionadas co funcionamento técnico do sistema de reservas.",
        },
        {
          type: "p",
          text: "Por este motivo, actualmente non se mostra un banner de aceptación ou rexeitamento de cookies.",
        },
        {
          type: "p",
          text: "Se no futuro Ritual Essences incorpora ferramentas de analítica, publicidade, seguimento ou calquera outra tecnoloxía que requira consentimento, implementarase o correspondente sistema de xestión de consentimento antes de activar ditas tecnoloxías.",
        },
      ],
    },
    {
      title: "5. SimplyBook.me",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences utiliza SimplyBook.me para xestionar as reservas en liña.",
        },
        {
          type: "p",
          text: "Cando unha persoa accede ao sistema de reservas, determinados elementos son proporcionados directamente por SimplyBook.me.",
        },
        {
          type: "p",
          text: "SimplyBook.me pode utilizar cookies e tecnoloxías similares necesarias para o funcionamento da súa plataforma.",
        },
        {
          type: "externalLink",
          href: SIMPLYBOOK_COOKIE_POLICY_URL,
          label: "Política de cookies de SimplyBook.me (abre nunha nova lapela)",
        },
      ],
    },
    {
      title: "6. Como eliminar cookies",
      blocks: [
        {
          type: "p",
          text: "As persoas usuarias poden consultar, eliminar ou bloquear cookies desde a configuración do seu navegador.",
        },
        {
          type: "p",
          text: "A eliminación ou bloqueo de determinadas cookies técnicas pode afectar ao funcionamento do sistema de reservas.",
        },
      ],
    },
    {
      title: "7. Cambios nesta Política de cookies",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences poderá actualizar esta Política de cookies se:",
        },
        {
          type: "ul",
          items: [
            "cambian as tecnoloxías utilizadas;",
            "SimplyBook.me modifica as súas cookies;",
            "se incorporan novas ferramentas;",
            "cambian os requisitos legais aplicables.",
          ],
        },
        {
          type: "p",
          text: "A versión vixente será sempre a publicada nesta páxina.",
        },
        {
          type: "fields",
          items: [
            {
              label: "Última actualización",
              value: "agosto de 2026",
            },
          ],
        },
      ],
    },
  ],
};

const en: LegalDocumentContent = {
  title: "Cookie Policy",
  description:
    "Information about the cookies and technologies used on the Ritual Essences website and booking system.",
  sections: [
    {
      title: "1. What are cookies?",
      blocks: [
        {
          type: "p",
          text: "Cookies are small files or storage mechanisms that may be stored on the user’s device when visiting a website.",
        },
        {
          type: "p",
          text: "They allow, among other functions, maintaining an active session, remembering certain preferences or enabling the proper functioning of some services.",
        },
        {
          type: "p",
          text: "Similar technologies also exist that may store or access information on the device.",
        },
      ],
    },
    {
      title: "2. What cookies does Ritual Essences use?",
      blocks: [
        {
          type: "p",
          text: "The Ritual Essences website does not currently use advertising cookies or its own tracking or analytics tools.",
        },
        {
          type: "p",
          text: "We do not currently use:",
        },
        {
          type: "ul",
          items: [
            "Google Analytics;",
            "Meta Pixel;",
            "advertising cookies;",
            "user profiling tools.",
          ],
        },
        {
          type: "p",
          text: "The booking page incorporates an external service provided by SimplyBook.me.",
        },
        {
          type: "p",
          text: "This system uses certain technical cookies necessary to enable the booking process to function.",
        },
      ],
    },
    {
      title: "3. SimplyBook.me technical cookies",
      blocks: [
        {
          type: "p",
          text: "When accessing the booking system, technical and session cookies provided by SimplyBook.me may be used.",
        },
        {
          type: "p",
          text: "Among the cookies detected during our testing are:",
        },
        {
          type: "table",
          caption: "SimplyBook.me technical cookies detected on Ritual Essences",
          headers: ["Cookie", "Provider", "Purpose", "Duration"],
          rows: [
            [
              "__widget_init",
              "SimplyBook.me",
              "Initialization and operation of the booking widget",
              "Session",
            ],
            [
              "sb_line_token_ritualessences",
              "SimplyBook.me",
              "Technical management of session, queue and system protection",
              "Session",
            ],
            [
              "sb_token_ritualessences",
              "SimplyBook.me",
              "Technical management of the booking session",
              "Session",
            ],
            [
              "sess_user_publicv2_ritualessences",
              "SimplyBook.me",
              "Maintaining the public session during the booking process",
              "Session",
            ],
            [
              "sb_widget",
              "SimplyBook.me",
              "Widget operation and state",
              "Session",
            ],
            [
              "cookies_accepted",
              "SimplyBook.me",
              "Management of cookie-related preferences",
              "According to provider configuration",
            ],
          ],
        },
        {
          type: "p",
          text: "The exact names of some cookies may vary slightly due to internal changes by SimplyBook.me.",
        },
      ],
    },
    {
      title: "4. Why is there no cookie banner?",
      blocks: [
        {
          type: "p",
          text: "Technical cookies necessary to provide a service expressly requested by the user may be used without prior consent.",
        },
        {
          type: "p",
          text: "Currently, the cookies detected on this website are related to the technical operation of the booking system.",
        },
        {
          type: "p",
          text: "For this reason, a cookie acceptance or rejection banner is not currently displayed.",
        },
        {
          type: "p",
          text: "If in the future Ritual Essences incorporates analytics, advertising, tracking or any other technology requiring consent, the corresponding consent management system will be implemented before activating such technologies.",
        },
      ],
    },
    {
      title: "5. SimplyBook.me",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences uses SimplyBook.me to manage online bookings.",
        },
        {
          type: "p",
          text: "When a person accesses the booking system, certain elements are provided directly by SimplyBook.me.",
        },
        {
          type: "p",
          text: "SimplyBook.me may use cookies and similar technologies necessary for the operation of its platform.",
        },
        {
          type: "externalLink",
          href: SIMPLYBOOK_COOKIE_POLICY_URL,
          label: "SimplyBook.me Cookie Policy (opens in a new tab)",
        },
      ],
    },
    {
      title: "6. How to delete cookies",
      blocks: [
        {
          type: "p",
          text: "Users may view, delete or block cookies from their browser settings.",
        },
        {
          type: "p",
          text: "Deleting or blocking certain technical cookies may affect the operation of the booking system.",
        },
      ],
    },
    {
      title: "7. Changes to this Cookie Policy",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences may update this Cookie Policy if:",
        },
        {
          type: "ul",
          items: [
            "the technologies used change;",
            "SimplyBook.me modifies its cookies;",
            "new tools are incorporated;",
            "applicable legal requirements change.",
          ],
        },
        {
          type: "p",
          text: "The current version will always be the one published on this page.",
        },
        {
          type: "fields",
          items: [
            {
              label: "Last updated",
              value: "August 2026",
            },
          ],
        },
      ],
    },
  ],
};

export const cookiesContent: Record<Locale, LegalDocumentContent> = {
  es,
  gl,
  en,
};
