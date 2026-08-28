import type { Service } from "@/types/service";

export const servicesCatalog: Service[] = [
  {
    id: "pilgrim-massage",
    slug: { es: "masaje-peregrino", gl: "masaxe-peregrino", en: "pilgrim-massage" },
    category: "massages",
    name: { es: "Masaje Peregrino", gl: "Masaxe Peregrino", en: "Pilgrim Massage" },
    tagline: {
      es: "Recupera el cuerpo después del Camino",
      gl: "Recupera o corpo despois do Camiño",
      en: "Restore your body after the Camino",
    },
    shortDescription: {
      es: "Tratamiento pensado para aliviar piernas, pies y espalda tras las etapas del Camino.",
      gl: "Tratamento pensado para aliviar pernas, pés e costas tras as etapas do Camiño.",
      en: "A treatment designed for tired legs, feet, back and shoulders after walking the Camino. Ideal for helping the body recover and enjoying a deeply relaxing break.",
    },
    description: {
      es: "Tratamiento pensado especialmente para quienes llegan a Santiago después de recorrer el Camino. Combina trabajo sobre piernas, pies, zona lumbar y hombros para favorecer una sensación de ligereza, descanso y recuperación después de los kilómetros acumulados.",
      gl: "Tratamento pensado especialmente para quen chega a Santiago despois de percorrer o Camiño. Combina traballo sobre pernas, pés, zona lumbar e ombros para favorecer unha sensación de lixeireza, descanso e recuperación despois dos quilómetros acumulados.",
      en: "A treatment designed especially for those arriving in Santiago after walking the Camino. It combines work on the legs, feet, lower back and shoulders to promote a feeling of lightness, rest and recovery after the miles accumulated.",
    },
    benefits: [
      {
        es: "Alivio de la sensación de sobrecarga en piernas, pies y espalda",
        gl: "Alivio da sensación de sobrecarga en pernas, pés e costas",
        en: "Relief from the feeling of overload in legs, feet and back",
      },
      {
        es: "Sensación de ligereza y descanso",
        gl: "Sensación de lixeireza e descanso",
        en: "A sense of lightness and rest",
      },
      {
        es: "Cuidado de zona lumbar y hombros",
        gl: "Coidado da zona lumbar e ombros",
        en: "Care for the lower back and shoulders",
      },
      {
        es: "Recuperación y bienestar tras el Camino",
        gl: "Recuperación e benestar tras o Camiño",
        en: "Recovery and wellbeing after the Camino",
      },
    ],
    durations: [
      { minutes: 60, price: 60, bookingId: 2 },
      { minutes: 90, price: 90, bookingId: 3 },
    ],
    featured: true,
    pilgrimFeatured: true,
    audience: ["peregrinos"],
    image: "/images/massage-back-shoulders.jpg",
  },
  {
    id: "lymphatic-drainage",
    slug: { es: "drenaje-linfatico", gl: "drenaxe-linfatica", en: "lymphatic-drainage" },
    category: "massages",
    name: { es: "Drenaje Linfático", gl: "Drenaxe Linfática", en: "Lymphatic Drainage Massage" },
    tagline: {
      es: "Una sensación de ligereza y bienestar para tu cuerpo",
      gl: "Unha sensación de lixeireza e benestar para o teu corpo",
      en: "A feeling of lightness and wellbeing for your body",
    },
    shortDescription: {
      es: "Terapia manual suave y rítmica orientada a favorecer la sensación de ligereza corporal.",
      gl: "Terapia manual suave e rítmica orientada a favorecer a sensación de lixeireza corporal.",
      en: "A gentle, rhythmic manual technique designed to promote a feeling of lightness and overall wellbeing.",
    },
    description: {
      es: "Terapia manual suave y rítmica orientada a favorecer la sensación de ligereza y bienestar mediante maniobras y presiones ligeras. Un tratamiento pensado para quienes buscan relajarse y cuidar el cuerpo con un enfoque delicado.",
      gl: "Terapia manual suave e rítmica orientada a favorecer a sensación de lixeireza e benestar mediante maniobras e presións lixeiras. Un tratamento pensado para quen busca relaxarse e coidar o corpo cun enfoque delicado.",
      en: "A gentle, rhythmic manual therapy designed to promote a feeling of lightness and wellbeing through light movements and gentle pressure. A treatment for those seeking relaxation and body care with a delicate approach.",
    },
    benefits: [
      {
        es: "Sensación de piernas más ligeras",
        gl: "Sensación de pernas máis lixeiras",
        en: "A feeling of lighter legs",
      },
      {
        es: "Ayuda a aliviar la sensación de hinchazón",
        gl: "Axuda a aliviar a sensación de inchazo",
        en: "Helps ease the feeling of puffiness",
      },
      {
        es: "Relajación y bienestar corporal",
        gl: "Relaxación e benestar corporal",
        en: "Relaxation and bodily wellbeing",
      },
    ],
    durations: [{ minutes: 30, price: 35, bookingId: 8 }],
    image: "/images/massage-hands.jpg",
  },
  {
    id: "relaxing-massage",
    slug: { es: "masaje-relajante", gl: "masaxe-relaxante", en: "relaxing-massage" },
    category: "massages",
    name: { es: "Masaje Relajante", gl: "Masaxe Relaxante", en: "Relaxing Massage" },
    tagline: {
      es: "Un refugio de calma para tu bienestar",
      gl: "Un refuxio de calma para o teu benestar",
      en: "A haven of calm for your wellbeing",
    },
    shortDescription: {
      es: "Masaje envolvente con aceites para favorecer la relajación y soltar la tensión del día.",
      gl: "Masaxe envolvente con aceites para favorecer a relaxación e soltar a tensión do día.",
      en: "A gentle, enveloping massage with oils designed to promote relaxation and release accumulated tension.",
    },
    description: {
      es: "Masaje realizado mediante pases suaves, lentos y envolventes, acompañado de aceites, orientado a favorecer la relajación y liberar la tensión acumulada durante el día. Especial atención a cuello, hombros y espalda.",
      gl: "Masaxe realizado mediante pasos suaves, lentos e envolventes, acompañado de aceites, orientado a favorecer a relaxación e liberar a tensión acumulada durante o día. Atención especial a pescozo, ombros e costas.",
      en: "A massage performed with soft, slow, enveloping strokes, accompanied by oils, designed to promote relaxation and release tension accumulated during the day. Special attention to the neck, shoulders and back.",
    },
    benefits: [
      {
        es: "Relajación profunda",
        gl: "Relaxación profunda",
        en: "Deep relaxation",
      },
      {
        es: "Disminución de la sensación de tensión",
        gl: "Diminución da sensación de tensión",
        en: "Reduced sensation of tension",
      },
      {
        es: "Cuidado de cuello, hombros y espalda",
        gl: "Coidado de pescozo, ombros e costas",
        en: "Care for neck, shoulders and back",
      },
      {
        es: "Sensación de descanso y desconexión",
        gl: "Sensación de descanso e desconexión",
        en: "A sense of rest and disconnection",
      },
    ],
    durations: [
      { minutes: 60, price: 60, bookingId: 4 },
      { minutes: 90, price: 90, bookingId: 14 },
    ],
    featured: true,
    image: "/images/massage-back-ambiance.jpg",
  },
  {
    id: "craniofacial-massage",
    slug: { es: "masaje-craneofacial", gl: "masaxe-craneofacial", en: "craniofacial-massage" },
    category: "massages",
    name: { es: "Masaje Craneofacial", gl: "Masaxe Craneofacial", en: "Craniofacial Massage" },
    tagline: {
      es: "Mente despejada y rostro renovado",
      gl: "Mente despexada e rostro renovado",
      en: "A clear mind and refreshed face",
    },
    shortDescription: {
      es: "Tratamiento centrado en rostro, cuero cabelludo, cuello y hombros.",
      gl: "Tratamento centrado en rostro, couro cabeludo, pescozo e ombros.",
      en: "Focused on the face, scalp, neck and shoulders to help release tension and provide a pleasant feeling of rest and relaxation.",
    },
    description: {
      es: "Tratamiento centrado en rostro, cuero cabelludo, cuello, hombros y zona mandibular mediante presiones y pases suaves. Especialmente apropiado para personas que buscan desconectar después de muchas horas frente a pantallas o que acumulan tensión en la zona superior del cuerpo.",
      gl: "Tratamento centrado en rostro, couro cabeludo, pescozo, ombros e zona mandibular mediante presións e pasos suaves. Especialmente apropiado para persoas que buscan desconectar despois de moitas horas diante de pantallas ou que acumulan tensión na zona superior do corpo.",
      en: "A treatment focused on the face, scalp, neck, shoulders and jaw area through gentle pressure and strokes. Especially suited for those looking to unwind after long hours in front of screens or who carry tension in the upper body.",
    },
    benefits: [
      {
        es: "Liberación de tensión facial y mandibular",
        gl: "Liberación de tensión facial e mandibular",
        en: "Release of facial and jaw tension",
      },
      {
        es: "Relajación de cuero cabelludo, cuello y hombros",
        gl: "Relaxación de couro cabeludo, pescozo e ombros",
        en: "Relaxation of scalp, neck and shoulders",
      },
      {
        es: "Sensación de descanso",
        gl: "Sensación de descanso",
        en: "A sense of rest",
      },
      {
        es: "Cuidado y estimulación facial",
        gl: "Coidado e estimulación facial",
        en: "Facial care and stimulation",
      },
    ],
    durations: [{ minutes: 30, price: 30, bookingId: 5 }],
    image: "/images/facial-mask.jpg",
  },
  {
    id: "express-massage",
    slug: { es: "masaje-express", gl: "masaxe-express", en: "express-massage" },
    category: "massages",
    name: { es: "Masaje Express", gl: "Masaxe Express", en: "Express Massage" },
    tagline: {
      es: "Alivio concentrado en solo 30 minutos",
      gl: "Alivio concentrado en só 30 minutos",
      en: "Focused relief in just 30 minutes",
    },
    shortDescription: {
      es: "Sesión focalizada para quienes tienen poco tiempo y desean cuidar una zona concreta.",
      gl: "Sesión focalizada para quen ten pouco tempo e desexa coidar unha zona concreta.",
      en: "A short, focused session for the area that needs the most attention, such as the back, neck, legs or craniofacial area.",
    },
    description: {
      es: "Sesión focalizada para personas con poco tiempo que desean concentrar el masaje en una zona específica. Áreas disponibles: espalda y cuello, piernas cansadas o zona craneofacial.",
      gl: "Sesión focalizada para persoas con pouco tempo que desexan concentrar a masaxe nunha zona específica. Áreas dispoñibles: costas e pescozo, pernas cansadas ou zona craneofacial.",
      en: "A focused session for those with little time who want to concentrate the massage on a specific area. Available areas: back and neck, tired legs or the craniofacial zone.",
    },
    benefits: [
      {
        es: "Tratamiento focalizado",
        gl: "Tratamento focalizado",
        en: "Focused treatment",
      },
      {
        es: "Formato rápido de 30 minutos",
        gl: "Formato rápido de 30 minutos",
        en: "Quick 30-minute format",
      },
      {
        es: "Liberación de tensión en la zona elegida",
        gl: "Liberación de tensión na zona elixida",
        en: "Release of tension in the chosen area",
      },
      {
        es: "Adaptable a espalda, piernas o zona craneofacial",
        gl: "Adaptable a costas, pernas ou zona craneofacial",
        en: "Adaptable to back, legs or craniofacial area",
      },
    ],
    durations: [{ minutes: 30, price: 35, bookingId: 9 }],
    image: "/images/massage-back-oil.jpg",
  },
  {
    id: "ritual-alma",
    slug: { es: "ritual-alma", gl: "ritual-alma", en: "soul-ritual" },
    category: "rituals",
    name: { es: "Ritual Alma", gl: "Ritual Alma", en: "Soul Ritual" },
    tagline: {
      es: "Revela la luz de tu piel y despeja tu mente",
      gl: "Revela a luz da túa pel e despexa a túa mente",
      en: "Reveal your skin's radiance and clear your mind",
    },
    shortDescription: {
      es: "Experiencia que combina limpieza facial y masaje craneofacial.",
      gl: "Experiencia que combina limpeza facial e masaxe craneofacial.",
      en: "A facial ritual combining cleansing and craniofacial massage for a relaxing moment of care and wellbeing.",
    },
    description: {
      es: "Experiencia que combina limpieza facial y masaje craneofacial. El tratamiento une cuidado de la piel con técnicas de relajación sobre sienes, mandíbula, cuello y cuero cabelludo para favorecer una sensación de desconexión y bienestar.",
      gl: "Experiencia que combina limpeza facial e masaxe craneofacial. O tratamento une coidado da pel con técnicas de relaxación sobre fontanelas, mandíbula, pescozo e couro cabeludo para favorecer unha sensación de desconexión e benestar.",
      en: "An experience that combines facial cleansing and craniofacial massage. The treatment brings together skincare with relaxation techniques on the temples, jaw, neck and scalp to promote a sense of disconnection and wellbeing.",
    },
    benefits: [
      {
        es: "Limpieza y exfoliación facial",
        gl: "Limpeza e exfoliación facial",
        en: "Facial cleansing and exfoliation",
      },
      {
        es: "Hidratación y cuidado de la piel",
        gl: "Hidratación e cuidado da pel",
        en: "Hydration and skin care",
      },
      {
        es: "Relajación craneofacial",
        gl: "Relaxación craneofacial",
        en: "Craniofacial relaxation",
      },
      {
        es: "Sensación de luminosidad y desconexión",
        gl: "Sensación de luminosidade e desconexión",
        en: "A sense of radiance and disconnection",
      },
    ],
    durations: [{ minutes: 45, price: 55, bookingId: 10 }],
    featured: true,
    image: "/images/facial-mask.jpg",
  },
  {
    id: "ritual-light-feet",
    slug: { es: "ritual-pies-ligeros", gl: "ritual-pes-lixeiros", en: "light-feet-ritual" },
    category: "rituals",
    name: { es: "Ritual Pies Ligeros", gl: "Ritual Pés Lixeiros", en: "Light Feet Ritual" },
    tagline: {
      es: "Descanso y bienestar para tus pasos",
      gl: "Descanso e benestar para os teus pasos",
      en: "Rest and wellbeing for your steps",
    },
    shortDescription: {
      es: "Spa de pies y masaje de piernas para quienes acumulan fatiga al caminar o estar de pie.",
      gl: "Spa de pés e masaxe de pernas para quen acumula fatiga ao camiñar ou estar de pé.",
      en: "A foot and leg care experience combining a foot spa and massage to restore a pleasant feeling of rest and lightness.",
    },
    description: {
      es: "Experiencia que combina spa de pies y masaje de piernas. Incluye baño con sales, exfoliación y masaje desde los pies hacia las piernas, con especial atención a las zonas más cargadas. Orientado a peregrinos, deportistas y personas que pasan muchas horas de pie.",
      gl: "Experiencia que combina spa de pés e masaxe de pernas. Inclúe baño con sales, exfoliación e masaxe desde os pés cara ás pernas, con especial atención ás zonas máis cargadas. Orientado a peregrinos, deportistas e persoas que pasan moitas horas de pé.",
      en: "An experience that combines a foot spa and leg massage. It includes a salt bath, exfoliation and massage from the feet up through the legs, with special attention to the areas that carry the most strain. Designed for pilgrims, athletes and people who spend long hours on their feet.",
    },
    benefits: [
      {
        es: "Descanso de pies y piernas",
        gl: "Descanso de pés e pernas",
        en: "Rest for feet and legs",
      },
      {
        es: "Masaje de gemelos y planta del pie",
        gl: "Masaxe de xemelgos e planta do pé",
        en: "Massage of calves and soles",
      },
      {
        es: "Sensación de ligereza",
        gl: "Sensación de lixeireza",
        en: "A sense of lightness",
      },
      {
        es: "Cuidado de pies fatigados",
        gl: "Coidado de pés fatigados",
        en: "Care for tired feet",
      },
    ],
    durations: [{ minutes: 45, price: 55, bookingId: 6 }],
    pilgrimFeatured: true,
    audience: ["peregrinos", "deportistas", "personas que trabajan de pie"],
    image: "/images/massage-hands.jpg",
  },
  {
    id: "ritual-serenity-spa",
    slug: { es: "ritual-serenity-spa", gl: "ritual-serenity-spa", en: "serenity-spa-ritual" },
    category: "spa",
    name: { es: "Ritual Serenity Spa", gl: "Ritual Serenity Spa", en: "Serenity Spa Ritual" },
    tagline: {
      es: "Un reset para mente y cabello",
      gl: "Un reset para mente e cabelo",
      en: "A reset for mind and hair",
    },
    shortDescription: {
      es: "Tratamiento capilar que combina cuidado del cuero cabelludo, hidroterapia y masaje craneofacial.",
      gl: "Tratamento capilar que combina coidado do couro cabeludo, hidroterapia e masaxe craneofacial.",
      en: "A wellbeing ritual for the scalp, face, neck and cervical area using Head Spa techniques, water and botanical care.",
    },
    description: {
      es: "Tratamiento de bienestar capilar que combina cuidado del cuero cabelludo, hidroterapia, masaje craneofacial y cervical, y tratamiento botánico. Incluye valoración inicial, hidroterapia, masaje craneofacial y cervical, y cuidado botánico capilar.",
      gl: "Tratamento de benestar capilar que combina coidado do couro cabeludo, hidroterapia, masaxe craneofacial e cervical, e tratamento botánico. Inclúe valoración inicial, hidroterapia, masaxe craneofacial e cervical, e cuidado botánico capilar.",
      en: "A hair wellbeing treatment that combines scalp care, hydrotherapy, craniofacial and cervical massage, and botanical treatment. Includes an initial assessment, hydrotherapy, craniofacial and cervical massage, and botanical hair care.",
    },
    benefits: [
      {
        es: "Relajación y desconexión",
        gl: "Relaxación e desconexión",
        en: "Relaxation and disconnection",
      },
      {
        es: "Cuidado del cuero cabelludo",
        gl: "Coidado do couro cabeludo",
        en: "Scalp care",
      },
      {
        es: "Hidratación capilar",
        gl: "Hidratación capilar",
        en: "Hair hydration",
      },
      {
        es: "Sensación de bienestar integral",
        gl: "Sensación de benestar integral",
        en: "A sense of overall wellbeing",
      },
    ],
    durations: [
      { minutes: 45, price: 55, bookingId: 7 },
      { minutes: 60, price: 70, bookingId: 11 },
    ],
    featured: true,
    image: "/images/head-spa.jpg",
  },
  {
    id: "hospitality-reset",
    slug: { es: "reseteo-hostelero", gl: "reseteo-hostelero", en: "hospitality-reset" },
    category: "specials",
    name: { es: "Reseteo Hostelero", gl: "Reseteo Hostelero", en: "Hospitality Reset" },
    tagline: {
      es: "Vuelve a conectar con tu bienestar entre turno y turno",
      gl: "Volve a conectar co teu benestar entre quenda e quenda",
      en: "Reconnect with your wellbeing between shifts",
    },
    shortDescription: {
      es: "Masaje pensado para quienes trabajan en hostelería y pasan muchas horas de pie.",
      gl: "Masaxe pensado para quen traballa en hostelería e pasa moitas horas de pé.",
      en: "A special treatment for people who live in Santiago or work in hospitality, focusing on areas most affected by long working days.",
    },
    description: {
      es: "Masaje especialmente pensado para personas que trabajan en hostelería y pasan muchas horas de pie, cargando peso o manteniendo un ritmo de trabajo intenso. Trabajo principal sobre espalda, cuello, brazos y planta de los pies.",
      gl: "Masaxe especialmente pensado para persoas que traballan en hostelería e pasan moitas horas de pé, cargando peso ou mantendo un ritmo de traballo intenso. Traballo principal sobre costas, pescozo, brazos e planta dos pés.",
      en: "A massage designed especially for people who work in hospitality and spend long hours on their feet, carrying weight or maintaining an intense work pace. Main focus on the back, neck, arms and soles of the feet.",
    },
    benefits: [
      {
        es: "Liberación de tensión acumulada",
        gl: "Liberación de tensión acumulada",
        en: "Release of accumulated tension",
      },
      {
        es: "Descanso después del trabajo",
        gl: "Descanso despois do traballo",
        en: "Rest after work",
      },
      {
        es: "Sensación de ligereza",
        gl: "Sensación de lixeireza",
        en: "A sense of lightness",
      },
      {
        es: "Recuperación física y desconexión",
        gl: "Recuperación física e desconexión",
        en: "Physical recovery and disconnection",
      },
    ],
    durations: [{ minutes: 45, price: 38, bookingId: 12 }],
    audience: ["trabajadores de hostelería", "personas que trabajan muchas horas de pie"],
    badge: {
      es: "Especial hostelería",
      gl: "Especial hostalaría",
      en: "Hospitality special",
    },
    note: {
      es: "Tarifa especial para trabajadores/as de hostelería.",
      gl: "Tarifa especial para traballadores/as de hostalaría.",
      en: "Special rate for people who live in Santiago de Compostela or work in the hospitality sector.",
    },
    image: "/images/massage-back-oil.jpg",
  },
  {
    id: "hospitality-reset-premium",
    slug: {
      es: "reseteo-hostelero-premium",
      gl: "reseteo-hostelero-premium",
      en: "hospitality-reset-premium",
    },
    category: "specials",
    name: {
      es: "Reseteo Hostelero Premium",
      gl: "Reseteo Hostelero Premium",
      en: "Hospitality Reset Premium",
    },
    tagline: {
      es: "La desconexión completa después de una semana intensa",
      gl: "A desconexión completa despois dunha semana intensa",
      en: "Complete disconnection after an intense week",
    },
    shortDescription: {
      es: "Versión completa del Reseteo Hostelero con baño de pies, masaje corporal y craneofacial.",
      gl: "Versión completa do Reseteo Hostelero con baño de pés, masaxe corporal e craneofacial.",
      en: "A more complete version of Hospitality Reset combining foot care, body massage and craniofacial massage.",
    },
    description: {
      es: "Versión completa del Reseteo Hostelero que combina varios momentos de bienestar: baño de pies con sales aromáticas, masaje enfocado en las zonas de mayor carga física y masaje craneofacial.",
      gl: "Versión completa do Reseteo Hostelero que combina varios momentos de benestar: baño de pés con sales aromáticas, masaxe enfocado nas zonas de maior carga física e masaxe craneofacial.",
      en: "The full version of Hospitality Reset, combining several moments of wellbeing: an aromatic salt foot bath, massage focused on areas of greatest physical strain, and craniofacial massage.",
    },
    benefits: [
      {
        es: "Descanso de pies",
        gl: "Descanso de pés",
        en: "Rest for the feet",
      },
      {
        es: "Relajación muscular",
        gl: "Relaxación muscular",
        en: "Muscular relaxation",
      },
      {
        es: "Desconexión y masaje facial",
        gl: "Desconexión e masaxe facial",
        en: "Disconnection and facial massage",
      },
      {
        es: "Experiencia integral de bienestar",
        gl: "Experiencia integral de benestar",
        en: "A complete wellbeing experience",
      },
    ],
    durations: [{ minutes: 90, price: 75, bookingId: 13 }],
    audience: ["trabajadores de hostelería", "personas que trabajan muchas horas de pie"],
    badge: {
      es: "Especial hostelería",
      gl: "Especial hostalaría",
      en: "Hospitality special",
    },
    note: {
      es: "Tarifa especial para trabajadores/as de hostelería.",
      gl: "Tarifa especial para traballadores/as de hostalaría.",
      en: "Special rate for people who live in Santiago de Compostela or work in the hospitality sector.",
    },
    image: "/images/massage-back-ambiance.jpg",
  },
];
