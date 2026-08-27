import type { Service } from "@/types/service";

export const servicesCatalog: Service[] = [
  {
    id: "pilgrim-massage",
    slug: { es: "masaje-peregrino", gl: "masaxe-peregrino" },
    category: "massages",
    name: { es: "Masaje Peregrino", gl: "Masaxe Peregrino" },
    tagline: {
      es: "Recupera el cuerpo después del Camino",
      gl: "Recupera o corpo despois do Camiño",
    },
    shortDescription: {
      es: "Tratamiento pensado para aliviar piernas, pies y espalda tras las etapas del Camino.",
      gl: "Tratamento pensado para aliviar pernas, pés e costas tras as etapas do Camiño.",
    },
    description: {
      es: "Tratamiento pensado especialmente para quienes llegan a Santiago después de recorrer el Camino. Combina trabajo sobre piernas, pies, zona lumbar y hombros para favorecer una sensación de ligereza, descanso y recuperación después de los kilómetros acumulados.",
      gl: "Tratamento pensado especialmente para quen chega a Santiago despois de percorrer o Camiño. Combina traballo sobre pernas, pés, zona lumbar e ombros para favorecer unha sensación de lixeireza, descanso e recuperación despois dos quilómetros acumulados.",
    },
    benefits: [
      {
        es: "Alivio de la sensación de sobrecarga en piernas, pies y espalda",
        gl: "Alivio da sensación de sobrecarga en pernas, pés e costas",
      },
      {
        es: "Sensación de ligereza y descanso",
        gl: "Sensación de lixeireza e descanso",
      },
      {
        es: "Cuidado de zona lumbar y hombros",
        gl: "Coidado da zona lumbar e ombros",
      },
      {
        es: "Recuperación y bienestar tras el Camino",
        gl: "Recuperación e benestar tras o Camiño",
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
    slug: { es: "drenaje-linfatico", gl: "drenaxe-linfatica" },
    category: "massages",
    name: { es: "Drenaje Linfático", gl: "Drenaxe Linfática" },
    tagline: {
      es: "Una sensación de ligereza y bienestar para tu cuerpo",
      gl: "Unha sensación de lixeireza e benestar para o teu corpo",
    },
    shortDescription: {
      es: "Terapia manual suave y rítmica orientada a favorecer la sensación de ligereza corporal.",
      gl: "Terapia manual suave e rítmica orientada a favorecer a sensación de lixeireza corporal.",
    },
    description: {
      es: "Terapia manual suave y rítmica orientada a favorecer la sensación de ligereza y bienestar mediante maniobras y presiones ligeras. Un tratamiento pensado para quienes buscan relajarse y cuidar el cuerpo con un enfoque delicado.",
      gl: "Terapia manual suave e rítmica orientada a favorecer a sensación de lixeireza e benestar mediante maniobras e presións lixeiras. Un tratamento pensado para quen busca relaxarse e coidar o corpo cun enfoque delicado.",
    },
    benefits: [
      {
        es: "Sensación de piernas más ligeras",
        gl: "Sensación de pernas máis lixeiras",
      },
      {
        es: "Ayuda a aliviar la sensación de hinchazón",
        gl: "Axuda a aliviar a sensación de inchazo",
      },
      {
        es: "Relajación y bienestar corporal",
        gl: "Relaxación e benestar corporal",
      },
    ],
    durations: [{ minutes: 30, price: 35, bookingId: 8 }],
    image: "/images/massage-hands.jpg",
  },
  {
    id: "relaxing-massage",
    slug: { es: "masaje-relajante", gl: "masaxe-relaxante" },
    category: "massages",
    name: { es: "Masaje Relajante", gl: "Masaxe Relaxante" },
    tagline: {
      es: "Un refugio de calma para tu bienestar",
      gl: "Un refuxio de calma para o teu benestar",
    },
    shortDescription: {
      es: "Masaje envolvente con aceites para favorecer la relajación y soltar la tensión del día.",
      gl: "Masaxe envolvente con aceites para favorecer a relaxación e soltar a tensión do día.",
    },
    description: {
      es: "Masaje realizado mediante pases suaves, lentos y envolventes, acompañado de aceites, orientado a favorecer la relajación y liberar la tensión acumulada durante el día. Especial atención a cuello, hombros y espalda.",
      gl: "Masaxe realizado mediante pasos suaves, lentos e envolventes, acompañado de aceites, orientado a favorecer a relaxación e liberar a tensión acumulada durante o día. Atención especial a pescozo, ombros e costas.",
    },
    benefits: [
      {
        es: "Relajación profunda",
        gl: "Relaxación profunda",
      },
      {
        es: "Disminución de la sensación de tensión",
        gl: "Diminución da sensación de tensión",
      },
      {
        es: "Cuidado de cuello, hombros y espalda",
        gl: "Coidado de pescozo, ombros e costas",
      },
      {
        es: "Sensación de descanso y desconexión",
        gl: "Sensación de descanso e desconexión",
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
    slug: { es: "masaje-craneofacial", gl: "masaxe-craneofacial" },
    category: "massages",
    name: { es: "Masaje Craneofacial", gl: "Masaxe Craneofacial" },
    tagline: {
      es: "Mente despejada y rostro renovado",
      gl: "Mente despexada e rostro renovado",
    },
    shortDescription: {
      es: "Tratamiento centrado en rostro, cuero cabelludo, cuello y hombros.",
      gl: "Tratamento centrado en rostro, couro cabeludo, pescozo e ombros.",
    },
    description: {
      es: "Tratamiento centrado en rostro, cuero cabelludo, cuello, hombros y zona mandibular mediante presiones y pases suaves. Especialmente apropiado para personas que buscan desconectar después de muchas horas frente a pantallas o que acumulan tensión en la zona superior del cuerpo.",
      gl: "Tratamento centrado en rostro, couro cabeludo, pescozo, ombros e zona mandibular mediante presións e pasos suaves. Especialmente apropiado para persoas que buscan desconectar despois de moitas horas diante de pantallas ou que acumulan tensión na zona superior do corpo.",
    },
    benefits: [
      {
        es: "Liberación de tensión facial y mandibular",
        gl: "Liberación de tensión facial e mandibular",
      },
      {
        es: "Relajación de cuero cabelludo, cuello y hombros",
        gl: "Relaxación de couro cabeludo, pescozo e ombros",
      },
      {
        es: "Sensación de descanso",
        gl: "Sensación de descanso",
      },
      {
        es: "Cuidado y estimulación facial",
        gl: "Coidado e estimulación facial",
      },
    ],
    durations: [{ minutes: 30, price: 30, bookingId: 5 }],
    image: "/images/facial-mask.jpg",
  },
  {
    id: "express-massage",
    slug: { es: "masaje-express", gl: "masaxe-express" },
    category: "massages",
    name: { es: "Masaje Express", gl: "Masaxe Express" },
    tagline: {
      es: "Alivio concentrado en solo 30 minutos",
      gl: "Alivio concentrado en só 30 minutos",
    },
    shortDescription: {
      es: "Sesión focalizada para quienes tienen poco tiempo y desean cuidar una zona concreta.",
      gl: "Sesión focalizada para quen ten pouco tempo e desexa coidar unha zona concreta.",
    },
    description: {
      es: "Sesión focalizada para personas con poco tiempo que desean concentrar el masaje en una zona específica. Áreas disponibles: espalda y cuello, piernas cansadas o zona craneofacial.",
      gl: "Sesión focalizada para persoas con pouco tempo que desexan concentrar a masaxe nunha zona específica. Áreas dispoñibles: costas e pescozo, pernas cansadas ou zona craneofacial.",
    },
    benefits: [
      {
        es: "Tratamiento focalizado",
        gl: "Tratamento focalizado",
      },
      {
        es: "Formato rápido de 30 minutos",
        gl: "Formato rápido de 30 minutos",
      },
      {
        es: "Liberación de tensión en la zona elegida",
        gl: "Liberación de tensión na zona elixida",
      },
      {
        es: "Adaptable a espalda, piernas o zona craneofacial",
        gl: "Adaptable a costas, pernas ou zona craneofacial",
      },
    ],
    durations: [{ minutes: 30, price: 35, bookingId: 9 }],
    image: "/images/massage-back-oil.jpg",
  },
  {
    id: "ritual-alma",
    slug: { es: "ritual-alma", gl: "ritual-alma" },
    category: "rituals",
    name: { es: "Ritual Alma", gl: "Ritual Alma" },
    tagline: {
      es: "Revela la luz de tu piel y despeja tu mente",
      gl: "Revela a luz da túa pel e despexa a túa mente",
    },
    shortDescription: {
      es: "Experiencia que combina limpieza facial y masaje craneofacial.",
      gl: "Experiencia que combina limpeza facial e masaxe craneofacial.",
    },
    description: {
      es: "Experiencia que combina limpieza facial y masaje craneofacial. El tratamiento une cuidado de la piel con técnicas de relajación sobre sienes, mandíbula, cuello y cuero cabelludo para favorecer una sensación de desconexión y bienestar.",
      gl: "Experiencia que combina limpeza facial e masaxe craneofacial. O tratamento une coidado da pel con técnicas de relaxación sobre fontanelas, mandíbula, pescozo e couro cabeludo para favorecer unha sensación de desconexión e benestar.",
    },
    benefits: [
      {
        es: "Limpieza y exfoliación facial",
        gl: "Limpeza e exfoliación facial",
      },
      {
        es: "Hidratación y cuidado de la piel",
        gl: "Hidratación e coidado da pel",
      },
      {
        es: "Relajación craneofacial",
        gl: "Relaxación craneofacial",
      },
      {
        es: "Sensación de luminosidad y desconexión",
        gl: "Sensación de luminosidade e desconexión",
      },
    ],
    durations: [{ minutes: 45, price: 55, bookingId: 10 }],
    featured: true,
    image: "/images/facial-mask.jpg",
  },
  {
    id: "ritual-light-feet",
    slug: { es: "ritual-pies-ligeros", gl: "ritual-pes-lixeiros" },
    category: "rituals",
    name: { es: "Ritual Pies Ligeros", gl: "Ritual Pés Lixeiros" },
    tagline: {
      es: "Descanso y bienestar para tus pasos",
      gl: "Descanso e benestar para os teus pasos",
    },
    shortDescription: {
      es: "Spa de pies y masaje de piernas para quienes acumulan fatiga al caminar o estar de pie.",
      gl: "Spa de pés e masaxe de pernas para quen acumula fatiga ao camiñar ou estar de pé.",
    },
    description: {
      es: "Experiencia que combina spa de pies y masaje de piernas. Incluye baño con sales, exfoliación y masaje desde los pies hacia las piernas, con especial atención a las zonas más cargadas. Orientado a peregrinos, deportistas y personas que pasan muchas horas de pie.",
      gl: "Experiencia que combina spa de pés e masaxe de pernas. Inclúe baño con sales, exfoliación e masaxe desde os pés cara ás pernas, con especial atención ás zonas máis cargadas. Orientado a peregrinos, deportistas e persoas que pasan moitas horas de pé.",
    },
    benefits: [
      {
        es: "Descanso de pies y piernas",
        gl: "Descanso de pés e pernas",
      },
      {
        es: "Masaje de gemelos y planta del pie",
        gl: "Masaxe de xemelgos e planta do pé",
      },
      {
        es: "Sensación de ligereza",
        gl: "Sensación de lixeireza",
      },
      {
        es: "Cuidado de pies fatigados",
        gl: "Coidado de pés fatigados",
      },
    ],
    durations: [{ minutes: 45, price: 55, bookingId: 6 }],
    pilgrimFeatured: true,
    audience: ["peregrinos", "deportistas", "personas que trabajan de pie"],
    image: "/images/massage-hands.jpg",
  },
  {
    id: "ritual-serenity-spa",
    slug: { es: "ritual-serenity-spa", gl: "ritual-serenity-spa" },
    category: "spa",
    name: { es: "Ritual Serenity Spa", gl: "Ritual Serenity Spa" },
    tagline: {
      es: "Un reset para mente y cabello",
      gl: "Un reset para mente e cabelo",
    },
    shortDescription: {
      es: "Tratamiento capilar que combina cuidado del cuero cabelludo, hidroterapia y masaje craneofacial.",
      gl: "Tratamento capilar que combina coidado do couro cabeludo, hidroterapia e masaxe craneofacial.",
    },
    description: {
      es: "Tratamiento de bienestar capilar que combina cuidado del cuero cabelludo, hidroterapia, masaje craneofacial y cervical, y tratamiento botánico. Incluye valoración inicial, hidroterapia, masaje craneofacial y cervical, y cuidado botánico capilar.",
      gl: "Tratamento de benestar capilar que combina coidado do couro cabeludo, hidroterapia, masaxe craneofacial e cervical, e tratamento botánico. Inclúe valoración inicial, hidroterapia, masaxe craneofacial e cervical, e cuidado botánico capilar.",
    },
    benefits: [
      {
        es: "Relajación y desconexión",
        gl: "Relaxación e desconexión",
      },
      {
        es: "Cuidado del cuero cabelludo",
        gl: "Coidado do couro cabeludo",
      },
      {
        es: "Hidratación capilar",
        gl: "Hidratación capilar",
      },
      {
        es: "Sensación de bienestar integral",
        gl: "Sensación de benestar integral",
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
    slug: { es: "reseteo-hostelero", gl: "reseteo-hostelero" },
    category: "specials",
    name: { es: "Reseteo Hostelero", gl: "Reseteo Hostelero" },
    tagline: {
      es: "Vuelve a conectar con tu bienestar entre turno y turno",
      gl: "Volve a conectar co teu benestar entre quenda e quenda",
    },
    shortDescription: {
      es: "Masaje pensado para quienes trabajan en hostelería y pasan muchas horas de pie.",
      gl: "Masaxe pensado para quen traballa en hostelería e pasa moitas horas de pé.",
    },
    description: {
      es: "Masaje especialmente pensado para personas que trabajan en hostelería y pasan muchas horas de pie, cargando peso o manteniendo un ritmo de trabajo intenso. Trabajo principal sobre espalda, cuello, brazos y planta de los pies.",
      gl: "Masaxe especialmente pensado para persoas que traballan en hostelería e pasan moitas horas de pé, cargando peso ou mantendo un ritmo de traballo intenso. Traballo principal sobre costas, pescozo, brazos e planta dos pés.",
    },
    benefits: [
      {
        es: "Liberación de tensión acumulada",
        gl: "Liberación de tensión acumulada",
      },
      {
        es: "Descanso después del trabajo",
        gl: "Descanso despois do traballo",
      },
      {
        es: "Sensación de ligereza",
        gl: "Sensación de lixeireza",
      },
      {
        es: "Recuperación física y desconexión",
        gl: "Recuperación física e desconexión",
      },
    ],
    durations: [{ minutes: 45, price: 38, bookingId: 12 }],
    audience: ["trabajadores de hostelería", "personas que trabajan muchas horas de pie"],
    badge: {
      es: "Especial hostelería",
      gl: "Especial hostalaría",
    },
    note: {
      es: "Tarifa especial para trabajadores/as de hostelería.",
      gl: "Tarifa especial para traballadores/as de hostalaría.",
    },
    image: "/images/massage-back-oil.jpg",
  },
  {
    id: "hospitality-reset-premium",
    slug: {
      es: "reseteo-hostelero-premium",
      gl: "reseteo-hostelero-premium",
    },
    category: "specials",
    name: {
      es: "Reseteo Hostelero Premium",
      gl: "Reseteo Hostelero Premium",
    },
    tagline: {
      es: "La desconexión completa después de una semana intensa",
      gl: "A desconexión completa despois dunha semana intensa",
    },
    shortDescription: {
      es: "Versión completa del Reseteo Hostelero con baño de pies, masaje corporal y craneofacial.",
      gl: "Versión completa do Reseteo Hostelero con baño de pés, masaxe corporal e craneofacial.",
    },
    description: {
      es: "Versión completa del Reseteo Hostelero que combina varios momentos de bienestar: baño de pies con sales aromáticas, masaje enfocado en las zonas de mayor carga física y masaje craneofacial.",
      gl: "Versión completa do Reseteo Hostelero que combina varios momentos de benestar: baño de pés con sales aromáticas, masaxe enfocado nas zonas de maior carga física e masaxe craneofacial.",
    },
    benefits: [
      {
        es: "Descanso de pies",
        gl: "Descanso de pés",
      },
      {
        es: "Relajación muscular",
        gl: "Relaxación muscular",
      },
      {
        es: "Desconexión y masaje facial",
        gl: "Desconexión e masaxe facial",
      },
      {
        es: "Experiencia integral de bienestar",
        gl: "Experiencia integral de benestar",
      },
    ],
    durations: [{ minutes: 90, price: 75, bookingId: 13 }],
    audience: ["trabajadores de hostelería", "personas que trabajan muchas horas de pie"],
    badge: {
      es: "Especial hostelería",
      gl: "Especial hostalaría",
    },
    note: {
      es: "Tarifa especial para trabajadores/as de hostelería.",
      gl: "Tarifa especial para traballadores/as de hostalaría.",
    },
    image: "/images/massage-back-ambiance.jpg",
  },
];
