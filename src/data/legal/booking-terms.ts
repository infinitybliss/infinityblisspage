import type { LegalDocumentContent } from "@/types/legal";
import type { Locale } from "@/types/locale";

const es: LegalDocumentContent = {
  title: "Condiciones de reserva y cancelación",
  description:
    "Condiciones de reserva y cancelación de Ritual Essences. Antelación, modificación, grupos y tarifas especiales.",
  sections: [
    {
      title: "1. Reservas",
      blocks: [
        {
          type: "p",
          text: "Las citas de Ritual Essences pueden reservarse mediante el sistema de reservas online disponible en la web.",
        },
        {
          type: "p",
          text: "También podrán gestionarse determinadas reservas mediante teléfono cuando sea necesario.",
        },
        {
          type: "p",
          text: "La disponibilidad mostrada en el calendario se actualiza en función de los horarios y recursos disponibles.",
        },
        {
          type: "p",
          text: "La reserva se considerará confirmada cuando el cliente reciba la correspondiente confirmación a través del sistema habilitado.",
        },
      ],
    },
    {
      title: "2. Antelación mínima",
      blocks: [
        {
          type: "p",
          text: "Las reservas online podrán realizarse, con carácter general, hasta 2 horas antes del inicio del servicio, siempre que exista disponibilidad.",
        },
        {
          type: "p",
          text: "Determinados servicios o circunstancias podrán requerir una antelación diferente, que se informará cuando corresponda.",
        },
      ],
    },
    {
      title: "3. Modificación de una reserva",
      blocks: [
        {
          type: "p",
          text: "Las reservas podrán modificarse mediante las opciones facilitadas por SimplyBook.me cuando estas estén disponibles para la cita correspondiente.",
        },
        {
          type: "p",
          text: "Si la persona usuaria no puede realizar el cambio desde la plataforma o tiene cualquier duda, podrá ponerse en contacto con Ritual Essences por teléfono.",
        },
        {
          type: "p",
          text: "La modificación estará siempre sujeta a disponibilidad.",
        },
      ],
    },
    {
      title: "4. Cancelación",
      blocks: [
        {
          type: "p",
          text: "Las reservas podrán cancelarse utilizando las opciones proporcionadas por SimplyBook.me cuando estén disponibles.",
        },
        {
          type: "p",
          text: "También podrá solicitarse ayuda contactando directamente con Ritual Essences.",
        },
        {
          type: "p",
          text: "Actualmente las reservas no requieren pago online, por lo que no se realizan cargos mediante la página web al reservar.",
        },
        {
          type: "p",
          text: "Ritual Essences agradece que cualquier cancelación se comunique con la mayor antelación posible para permitir que la franja horaria pueda ser utilizada por otra persona.",
        },
      ],
    },
    {
      title: "5. Retrasos",
      blocks: [
        {
          type: "p",
          text: "Se recomienda acudir con puntualidad.",
        },
        {
          type: "p",
          text: "En caso de retraso por parte del cliente, Ritual Essences intentará prestar el servicio siempre que exista disponibilidad y resulte compatible con las reservas posteriores.",
        },
        {
          type: "p",
          text: "Cuando un retraso afecte a las citas siguientes o impida realizar el tratamiento en condiciones adecuadas, podrá ser necesario:",
        },
        {
          type: "ul",
          items: [
            "reducir la duración efectiva del servicio;",
            "ofrecer otra hora disponible;",
            "o reprogramar la cita.",
          ],
        },
        {
          type: "p",
          text: "Cada situación se valorará atendiendo a la disponibilidad del centro en ese momento.",
        },
      ],
    },
    {
      title: "6. Reservas de grupo",
      blocks: [
        {
          type: "p",
          text: "Las reservas para varias personas o grupos deberán gestionarse directamente con Ritual Essences por teléfono.",
        },
        {
          type: "p",
          text: "La disponibilidad para grupos dependerá del número de personas, tratamientos solicitados, duración y capacidad disponible del centro.",
        },
        {
          type: "p",
          text: "La solicitud de una reserva de grupo no se considerará confirmada hasta recibir confirmación expresa de Ritual Essences.",
        },
      ],
    },
    {
      title: "7. Reseteo Hostelero y Reseteo Hostelero Premium",
      blocks: [
        {
          type: "p",
          text: "Los tratamientos Reseteo Hostelero y Reseteo Hostelero Premium disponen de una tarifa especial.",
        },
        {
          type: "p",
          text: "Para beneficiarse de esta tarifa deberá cumplirse al menos una de las siguientes condiciones:",
        },
        {
          type: "ul",
          items: [
            "residir en Santiago de Compostela;",
            "trabajar en el sector de la hostelería.",
          ],
        },
        {
          type: "p",
          text: "Ritual Essences podrá solicitar una acreditación razonable que permita comprobar el cumplimiento de alguna de estas condiciones.",
        },
        {
          type: "p",
          text: "Si no pudiera acreditarse ninguna de ellas, el centro podrá informar al cliente de las alternativas disponibles antes de prestar el servicio.",
        },
      ],
    },
    {
      title: "8. Precios",
      blocks: [
        {
          type: "p",
          text: "Los precios publicados en la web son los aplicables a los servicios indicados salvo error manifiesto o modificación debidamente comunicada.",
        },
        {
          type: "note",
          text: "[CONFIRMAR CON MAR: añadir “Todos los precios incluyen los impuestos legalmente aplicables” si corresponde.]",
        },
        {
          type: "p",
          text: "Los precios y servicios podrán actualizarse para futuras reservas.",
        },
        {
          type: "p",
          text: "Una modificación posterior de precios no afectará a una reserva ya confirmada en las condiciones comunicadas al cliente, salvo que exista un error evidente que deba corregirse.",
        },
      ],
    },
    {
      title: "9. Pago",
      blocks: [
        {
          type: "p",
          text: "Actualmente Ritual Essences no realiza cobros online mediante esta página web.",
        },
        {
          type: "p",
          text: "El pago se efectuará en el establecimiento utilizando los medios de pago que Ritual Essences tenga disponibles.",
        },
        {
          type: "note",
          text: "[CONFIRMAR CON MAR: efectivo / tarjeta / Bizum / otros.]",
        },
      ],
    },
    {
      title: "10. Elección del profesional",
      blocks: [
        {
          type: "p",
          text: "Salvo que se indique expresamente lo contrario, las reservas se realizan para el servicio elegido y no garantizan la asignación de una profesional concreta.",
        },
        {
          type: "p",
          text: "Ritual Essences organizará internamente el equipo necesario para prestar el servicio reservado.",
        },
      ],
    },
    {
      title: "11. Contraindicaciones y circunstancias personales",
      blocks: [
        {
          type: "p",
          text: "Determinados tratamientos pueden no resultar adecuados en determinadas situaciones personales.",
        },
        {
          type: "p",
          text: "La persona usuaria deberá comunicar al centro, antes de iniciar la sesión, cualquier circunstancia relevante que pueda afectar a la correcta prestación del tratamiento.",
        },
        {
          type: "p",
          text: "Ritual Essences podrá recomendar no realizar o adaptar un servicio cuando considere que no puede prestarse de forma adecuada o segura.",
        },
        {
          type: "p",
          text: "Los servicios ofrecidos por Ritual Essences tienen finalidad de bienestar y no sustituyen el diagnóstico, seguimiento o tratamiento proporcionado por profesionales sanitarios cuando este sea necesario.",
        },
      ],
    },
    {
      title: "12. Disponibilidad y fuerza mayor",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences podrá proponer la modificación o reprogramación de una cita cuando concurran circunstancias excepcionales que hagan imposible prestar el servicio reservado.",
        },
        {
          type: "p",
          text: "En ese caso se contactará con el cliente utilizando los datos facilitados durante la reserva.",
        },
      ],
    },
    {
      title: "13. Atención al cliente",
      blocks: [
        {
          type: "p",
          text: "Para cualquier duda relacionada con una reserva, modificación, cancelación o servicio puedes contactar con Ritual Essences:",
        },
        {
          type: "fields",
          items: [
            { label: "Teléfono", value: "[TELÉFONO]" },
            { label: "Correo electrónico", value: "[EMAIL]" },
            { label: "Dirección", value: "[DIRECCIÓN]" },
          ],
        },
      ],
    },
  ],
};

const gl: LegalDocumentContent = {
  title: "Condicións de reserva e cancelación",
  description:
    "Condicións de reserva e cancelación de Ritual Essences. Antelación, modificación, grupos e tarifas especiais.",
  sections: [
    {
      title: "1. Reservas",
      blocks: [
        {
          type: "p",
          text: "As citas de Ritual Essences poden reservarse mediante o sistema de reservas en liña dispoñible na web.",
        },
        {
          type: "p",
          text: "Tamén poderán xestionarse determinadas reservas mediante teléfono cando sexa necesario.",
        },
        {
          type: "p",
          text: "A dispoñibilidade mostrada no calendario actualízase en función dos horarios e recursos dispoñibles.",
        },
        {
          type: "p",
          text: "A reserva considerarase confirmada cando o cliente reciba a correspondente confirmación a través do sistema habilitado.",
        },
      ],
    },
    {
      title: "2. Antelación mínima",
      blocks: [
        {
          type: "p",
          text: "As reservas en liña poderán realizarse, con carácter xeral, ata 2 horas antes do inicio do servizo, sempre que exista dispoñibilidade.",
        },
        {
          type: "p",
          text: "Determinados servizos ou circunstancias poderán requirir unha antelación diferente, que se informará cando corresponda.",
        },
      ],
    },
    {
      title: "3. Modificación dunha reserva",
      blocks: [
        {
          type: "p",
          text: "As reservas poderán modificarse mediante as opcións facilitadas por SimplyBook.me cando estas estean dispoñibles para a cita correspondente.",
        },
        {
          type: "p",
          text: "Se a persoa usuaria non pode realizar o cambio desde a plataforma ou ten calquera dúbida, poderá poñerse en contacto con Ritual Essences por teléfono.",
        },
        {
          type: "p",
          text: "A modificación estará sempre suxeita a dispoñibilidade.",
        },
      ],
    },
    {
      title: "4. Cancelación",
      blocks: [
        {
          type: "p",
          text: "As reservas poderán cancelarse utilizando as opcións proporcionadas por SimplyBook.me cando estean dispoñibles.",
        },
        {
          type: "p",
          text: "Tamén poderá solicitarse axuda contactando directamente con Ritual Essences.",
        },
        {
          type: "p",
          text: "Actualmente as reservas non requiren pagamento en liña, polo que non se realizan cargos mediante a páxina web ao reservar.",
        },
        {
          type: "p",
          text: "Ritual Essences agradece que calquera cancelación se comunique coa maior antelación posible para permitir que a franxa horaria poida ser utilizada por outra persoa.",
        },
      ],
    },
    {
      title: "5. Retrasos",
      blocks: [
        {
          type: "p",
          text: "Recoméndase acudir con puntualidade.",
        },
        {
          type: "p",
          text: "En caso de retraso por parte do cliente, Ritual Essences intentará prestar o servizo sempre que exista dispoñibilidade e resulte compatible coas reservas posteriores.",
        },
        {
          type: "p",
          text: "Cando un retraso afecte ás citas seguintes ou impida realizar o tratamento en condicións adecuadas, poderá ser necesario:",
        },
        {
          type: "ul",
          items: [
            "reducir a duración efectiva do servizo;",
            "ofrecer outra hora dispoñible;",
            "ou reprogramar a cita.",
          ],
        },
        {
          type: "p",
          text: "Cada situación valorarase atendendo á dispoñibilidade do centro nese momento.",
        },
      ],
    },
    {
      title: "6. Reservas de grupo",
      blocks: [
        {
          type: "p",
          text: "As reservas para varias persoas ou grupos deberán xestionarse directamente con Ritual Essences por teléfono.",
        },
        {
          type: "p",
          text: "A dispoñibilidade para grupos dependerá do número de persoas, tratamentos solicitados, duración e capacidade dispoñible do centro.",
        },
        {
          type: "p",
          text: "A solicitude dunha reserva de grupo non se considerará confirmada ata recibir confirmación expresa de Ritual Essences.",
        },
      ],
    },
    {
      title: "7. Reseteo Hostelero e Reseteo Hostelero Premium",
      blocks: [
        {
          type: "p",
          text: "Os tratamentos Reseteo Hostelero e Reseteo Hostelero Premium dispoñen dunha tarifa especial.",
        },
        {
          type: "p",
          text: "Para beneficiarse desta tarifa deberá cumprirse polo menos unha das seguintes condicións:",
        },
        {
          type: "ul",
          items: [
            "residir en Santiago de Compostela;",
            "traballar no sector da hostalaría.",
          ],
        },
        {
          type: "p",
          text: "Ritual Essences poderá solicitar unha acreditación razoable que permita comprobar o cumprimento dalgunha destas condicións.",
        },
        {
          type: "p",
          text: "Se non puidese acreditarse ningunha delas, o centro poderá informar ao cliente das alternativas dispoñibles antes de prestar o servizo.",
        },
      ],
    },
    {
      title: "8. Prezos",
      blocks: [
        {
          type: "p",
          text: "Os prezos publicados na web son os aplicables aos servizos indicados salvo erro manifesto ou modificación debidamente comunicada.",
        },
        {
          type: "note",
          text: "[CONFIRMAR CON MAR: engadir “Todos os prezos inclúen os impostos legalmente aplicables” se corresponde.]",
        },
        {
          type: "p",
          text: "Os prezos e servizos poderán actualizarse para futuras reservas.",
        },
        {
          type: "p",
          text: "Unha modificación posterior de prezos non afectará a unha reserva xa confirmada nas condicións comunicadas ao cliente, salvo que exista un erro evidente que deba corrixirse.",
        },
      ],
    },
    {
      title: "9. Pagamento",
      blocks: [
        {
          type: "p",
          text: "Actualmente Ritual Essences non realiza cobros en liña mediante esta páxina web.",
        },
        {
          type: "p",
          text: "O pagamento efectuarase no establecemento utilizando os medios de pagamento que Ritual Essences teña dispoñibles.",
        },
        {
          type: "note",
          text: "[CONFIRMAR CON MAR: efectivo / tarxeta / Bizum / outros.]",
        },
      ],
    },
    {
      title: "10. Elección da profesional",
      blocks: [
        {
          type: "p",
          text: "Salvo que se indique expresamente o contrario, as reservas realízanse para o servizo elixido e non garanten a asignación dunha profesional concreta.",
        },
        {
          type: "p",
          text: "Ritual Essences organizará internamente o equipo necesario para prestar o servizo reservado.",
        },
      ],
    },
    {
      title: "11. Contraindicacións e circunstancias persoais",
      blocks: [
        {
          type: "p",
          text: "Determinados tratamentos poden non resultar adecuados en determinadas situacións persoais.",
        },
        {
          type: "p",
          text: "A persoa usuaria deberá comunicar ao centro, antes de iniciar a sesión, calquera circunstancia relevante que poida afectar á correcta prestación do tratamento.",
        },
        {
          type: "p",
          text: "Ritual Essences poderá recomendar non realizar ou adaptar un servizo cando considere que non pode prestarse de forma adecuada ou segura.",
        },
        {
          type: "p",
          text: "Os servizos ofrecidos por Ritual Essences teñen finalidade de benestar e non substitúen o diagnóstico, seguimento ou tratamento proporcionado por profesionais sanitarios cando este sexa necesario.",
        },
      ],
    },
    {
      title: "12. Dispoñibilidade e forza maior",
      blocks: [
        {
          type: "p",
          text: "Ritual Essences poderá propoñer a modificación ou reprogramación dunha cita cando concorran circunstancias excepcionais que fagan imposible prestar o servizo reservado.",
        },
        {
          type: "p",
          text: "Nese caso contactarase co cliente utilizando os datos facilitados durante a reserva.",
        },
      ],
    },
    {
      title: "13. Atención ao cliente",
      blocks: [
        {
          type: "p",
          text: "Para calquera dúbida relacionada cunha reserva, modificación, cancelación ou servizo podes contactar con Ritual Essences:",
        },
        {
          type: "fields",
          items: [
            { label: "Teléfono", value: "[TELÉFONO]" },
            { label: "Correo electrónico", value: "[EMAIL]" },
            { label: "Dirección", value: "[DIRECCIÓN]" },
          ],
        },
      ],
    },
  ],
};

export const bookingTermsContent: Record<Locale, LegalDocumentContent> = {
  es,
  gl,
};
