import type { Service } from "@/types/service";

const hospitalityNote = {
  es: "Tarifa especial para residentes en Santiago de Compostela o personas que trabajen en el sector de la hostelería. Puede solicitarse acreditación.",
  gl: "Tarifa especial para residentes en Santiago de Compostela ou persoas que traballen no sector da hostalaría. Pode solicitarse acreditación.",
  en: "Special rate for residents of Santiago de Compostela or people who work in the hospitality sector. Proof may be requested.",
};

const hospitalityBadge = {
  es: "Especial hostelería",
  gl: "Especial hostalaría",
  en: "Hospitality special",
};

const hospitalityAudience = [
  "trabajadores de hostelería",
  "personas que trabajan muchas horas de pie",
];

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
        title: {
          es: "Alivio de la sensación de sobrecarga en piernas, pies y espalda",
          gl: "Alivio da sensación de sobrecarga en pernas, pés e costas",
          en: "Relief from the feeling of overload in legs, feet and back",
        },
        description: { es: "", gl: "", en: "" },
      },
      {
        title: {
          es: "Sensación de ligereza y descanso",
          gl: "Sensación de lixeireza e descanso",
          en: "A sense of lightness and rest",
        },
        description: { es: "", gl: "", en: "" },
      },
      {
        title: {
          es: "Cuidado de zona lumbar y hombros",
          gl: "Coidado da zona lumbar e ombros",
          en: "Care for the lower back and shoulders",
        },
        description: { es: "", gl: "", en: "" },
      },
      {
        title: {
          es: "Recuperación y bienestar tras el Camino",
          gl: "Recuperación e benestar tras o Camiño",
          en: "Recovery and wellbeing after the Camino",
        },
        description: { es: "", gl: "", en: "" },
      },
    ],
    durations: [
      { minutes: 60, price: 60, bookingId: 2 },
      { minutes: 90, price: 90, bookingId: 3 },
    ],
    featured: true,
    pilgrimFeatured: true,
    audience: ["peregrinos"],
    image: "/images/services/pilgrim-massage.webp",
  },
  {
    id: "lymphatic-drainage",
    slug: { es: "drenaje-linfatico", gl: "drenaxe-linfatica", en: "lymphatic-drainage" },
    category: "massages",
    name: { es: "Drenaje Linfático", gl: "Drenaxe Linfática", en: "Lymphatic Drainage Massage" },
    intro: {
      es: "El Drenaje Linfático Manual es una técnica suave, rítmica y profundamente relajante pensada para favorecer el movimiento natural de la linfa y proporcionar una agradable sensación de ligereza, especialmente cuando existe pesadez o retención de líquidos.",
      gl: "A Drenaxe Linfática Manual é unha técnica suave, rítmica e profundamente relaxante pensada para favorecer o movemento natural da linfa e proporcionar unha agradable sensación de lixeireza, especialmente cando existe pesadez ou retención de líquidos.",
      en: "Manual Lymphatic Drainage is a gentle, rhythmic and deeply relaxing technique designed to encourage the natural movement of lymph and provide a pleasant feeling of lightness, especially when there is heaviness or fluid retention.",
    },
    tagline: {
      es: "Un impulso de ligereza y bienestar para tu cuerpo",
      gl: "Un impulso de lixeireza e benestar para o teu corpo",
      en: "A lift of lightness and wellbeing for your body",
    },
    shortDescription: {
      es: "Terapia manual suave y rítmica orientada a favorecer la sensación de ligereza corporal.",
      gl: "Terapia manual suave e rítmica orientada a favorecer a sensación de lixeireza corporal.",
      en: "A gentle, rhythmic manual technique designed to promote a feeling of lightness and overall wellbeing.",
    },
    description: {
      es: "Mediante maniobras precisas y presiones ligeras, esta técnica acompaña el funcionamiento natural del sistema linfático y favorece una sensación de descanso y bienestar corporal.",
      gl: "Mediante manobras precisas e presións lixeiras, esta técnica acompaña o funcionamento natural do sistema linfático e favorece unha sensación de descanso e benestar corporal.",
      en: "Through precise movements and light pressure, this technique supports the natural working of the lymphatic system and encourages a feeling of rest and bodily wellbeing.",
    },
    paragraphs: [
      {
        es: "Mediante maniobras precisas y presiones ligeras, esta técnica acompaña el funcionamiento natural del sistema linfático y favorece una sensación de descanso y bienestar corporal.",
        gl: "Mediante manobras precisas e presións lixeiras, esta técnica acompaña o funcionamento natural do sistema linfático e favorece unha sensación de descanso e benestar corporal.",
        en: "Through precise movements and light pressure, this technique supports the natural working of the lymphatic system and encourages a feeling of rest and bodily wellbeing.",
      },
      {
        es: "Es una opción especialmente agradable para quienes sienten pesadez en las extremidades, hinchazón o simplemente buscan un tratamiento suave y profundamente relajante.",
        gl: "É unha opción especialmente agradable para quen sente pesadez nas extremidades, inchazón ou simplemente busca un tratamento suave e profundamente relaxante.",
        en: "It is an especially pleasant option for anyone who feels heaviness in the limbs, swelling, or is simply looking for a gentle, deeply relaxing treatment.",
      },
    ],
    benefits: [
      {
        title: {
          es: "Sensación de ligereza",
          gl: "Sensación de lixeireza",
          en: "A feeling of lightness",
        },
        description: {
          es: "Ayuda a aliviar la sensación de pesadez e hinchazón, especialmente en las piernas.",
          gl: "Axuda a aliviar a sensación de pesadez e inchazón, especialmente nas pernas.",
          en: "It helps ease the feeling of heaviness and swelling, especially in the legs.",
        },
      },
      {
        title: {
          es: "Bienestar corporal",
          gl: "Benestar corporal",
          en: "Bodily wellbeing",
        },
        description: {
          es: "Las maniobras suaves y rítmicas favorecen una sensación general de equilibrio y descanso.",
          gl: "As manobras suaves e rítmicas favorecen unha sensación xeral de equilibrio e descanso.",
          en: "The gentle, rhythmic movements encourage an overall sense of balance and rest.",
        },
      },
      {
        title: {
          es: "Relajación profunda",
          gl: "Relaxación profunda",
          en: "Deep relaxation",
        },
        description: {
          es: "El ritmo pausado del tratamiento invita a desconectar y disfrutar de un estado de calma.",
          gl: "O ritmo pausado do tratamento convida a desconectar e gozar dun estado de calma.",
          en: "The unhurried pace of the treatment invites you to switch off and enjoy a state of calm.",
        },
      },
      {
        title: {
          es: "Cuidado personalizado",
          gl: "Coidado personalizado",
          en: "Personalised care",
        },
        description: {
          es: "La sesión se adapta a las necesidades y sensaciones de cada persona.",
          gl: "A sesión adáptase ás necesidades e sensacións de cada persoa.",
          en: "The session is adapted to each person's needs and sensations.",
        },
      },
    ],
    durations: [{ minutes: 30, price: 35, bookingId: 17 }],
    image: "/images/services/lymphatic-drainage.webp",
  },
  {
    id: "relaxing-massage",
    slug: { es: "masaje-relajante", gl: "masaxe-relaxante", en: "relaxing-massage" },
    category: "massages",
    name: { es: "Masaje Relajante", gl: "Masaxe Relaxante", en: "Relaxing Massage" },
    intro: {
      es: "El Masaje Relajante es un tratamiento holístico pensado para inducir un estado de serenidad, calmar el ritmo del día a día y liberar suavemente la tensión acumulada.",
      gl: "A Masaxe Relaxante é un tratamento holístico pensado para inducir un estado de serenidade, calmar o ritmo do día a día e liberar suavemente a tensión acumulada.",
      en: "The Relaxing Massage is a holistic treatment designed to bring about a state of serenity, calm the pace of daily life and gently release accumulated tension.",
    },
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
      es: "A través de pases suaves, lentos y envolventes combinados con aceites, esta sesión permite desconectar la mente y devolver una agradable sensación de armonía al cuerpo.",
      gl: "A través de pases suaves, lentos e envolventes combinados con aceites, esta sesión permite desconectar a mente e devolver unha agradable sensación de harmonía ao corpo.",
      en: "Through soft, slow, enveloping strokes combined with oils, this session lets the mind switch off and brings a pleasant sense of harmony back to the body.",
    },
    paragraphs: [
      {
        es: "A través de pases suaves, lentos y envolventes combinados con aceites, esta sesión permite desconectar la mente y devolver una agradable sensación de armonía al cuerpo.",
        gl: "A través de pases suaves, lentos e envolventes combinados con aceites, esta sesión permite desconectar a mente e devolver unha agradable sensación de harmonía ao corpo.",
        en: "Through soft, slow, enveloping strokes combined with oils, this session lets the mind switch off and brings a pleasant sense of harmony back to the body.",
      },
      {
        es: "Es una experiencia ideal para dejar atrás el estrés cotidiano y regalarte una pausa de puro cuidado personal.",
        gl: "É unha experiencia ideal para deixar atrás o estrés cotián e agasallarte cunha pausa de puro coidado persoal.",
        en: "It is an ideal experience for leaving everyday stress behind and giving yourself a pause of pure self-care.",
      },
    ],
    benefits: [
      {
        title: {
          es: "Reducción de la sensación de estrés",
          gl: "Redución da sensación de estrés",
          en: "Less feeling of stress",
        },
        description: {
          es: "Invita a bajar el ritmo, desconectar de la agitación diaria y disfrutar de un momento de calma.",
          gl: "Convida a baixar o ritmo, desconectar da axitación diaria e gozar dun momento de calma.",
          en: "It invites you to slow down, step away from the bustle of the day and enjoy a moment of calm.",
        },
      },
      {
        title: {
          es: "Alivio corporal suave",
          gl: "Alivio corporal suave",
          en: "Gentle bodily relief",
        },
        description: {
          es: "Trabaja cuello, hombros y espalda mediante maniobras agradables y adaptadas a cada persona.",
          gl: "Traballa pescozo, ombros e costas mediante manobras agradables e adaptadas a cada persoa.",
          en: "It works the neck, shoulders and back with pleasant movements adapted to each person.",
        },
      },
      {
        title: {
          es: "Nutrición e hidratación",
          gl: "Nutrición e hidratación",
          en: "Nourishment and hydration",
        },
        description: {
          es: "La aplicación de aceites ayuda a dejar la piel suave, flexible e hidratada.",
          gl: "A aplicación de aceites axuda a deixar a pel suave, flexible e hidratada.",
          en: "Applying oils helps leave the skin soft, supple and hydrated.",
        },
      },
      {
        title: {
          es: "Descanso profundo",
          gl: "Descanso profundo",
          en: "Deep rest",
        },
        description: {
          es: "Favorece una sensación general de bienestar y relajación que puede ayudar a prepararnos para un mejor descanso.",
          gl: "Favorece unha sensación xeral de benestar e relaxación que pode axudar a prepararnos para un mellor descanso.",
          en: "It encourages an overall feeling of wellbeing and relaxation that can help prepare us for better rest.",
        },
      },
    ],
    durations: [
      { minutes: 60, price: 60, bookingId: 4 },
      { minutes: 90, price: 90, bookingId: 5 },
    ],
    featured: true,
    image: "/images/services/relaxing-massage.webp",
  },
  {
    id: "craniofacial-massage",
    slug: { es: "masaje-craneofacial", gl: "masaxe-craneofacial", en: "craniofacial-massage" },
    category: "massages",
    name: { es: "Masaje Craneofacial", gl: "Masaxe Craneofacial", en: "Craniofacial Massage" },
    intro: {
      es: "El Masaje Craneofacial es un tratamiento enfocado en liberar la tensión acumulada en el rostro, el cuero cabelludo, el cuello y los hombros mediante presiones y pases suaves y profundos.",
      gl: "A Masaxe Craneofacial é un tratamento enfocado en liberar a tensión acumulada no rostro, o couro cabeludo, o pescozo e os ombros mediante presións e pases suaves e profundos.",
      en: "The Craniofacial Massage is a treatment focused on releasing the tension held in the face, scalp, neck and shoulders through gentle yet deep pressure and strokes.",
    },
    tagline: {
      es: "Mente despejada y rostro renovado",
      gl: "Mente despexada e rostro renovado",
      en: "A clear mind and a refreshed face",
    },
    shortDescription: {
      es: "Tratamiento centrado en rostro, cuero cabelludo, cuello y hombros.",
      gl: "Tratamento centrado en rostro, couro cabeludo, pescozo e ombros.",
      en: "Focused on the face, scalp, neck and shoulders to help release tension and provide a pleasant feeling of rest and relaxation.",
    },
    description: {
      es: "La sesión trabaja especialmente las zonas de la parte superior del cuerpo donde solemos acumular tensión.",
      gl: "A sesión traballa especialmente as zonas da parte superior do corpo onde adoitamos acumular tensión.",
      en: "The session focuses especially on the areas of the upper body where we tend to hold tension.",
    },
    paragraphs: [
      {
        es: "La sesión trabaja especialmente las zonas de la parte superior del cuerpo donde solemos acumular tensión.",
        gl: "A sesión traballa especialmente as zonas da parte superior do corpo onde adoitamos acumular tensión.",
        en: "The session focuses especially on the areas of the upper body where we tend to hold tension.",
      },
      {
        es: "Es una opción ideal para quienes pasan muchas horas frente a pantallas, sienten cansancio en la zona facial o mandibular o simplemente buscan un momento de profunda desconexión.",
        gl: "É unha opción ideal para quen pasa moitas horas diante de pantallas, sente cansazo na zona facial ou mandibular ou simplemente busca un momento de profunda desconexión.",
        en: "It is an ideal option for anyone who spends long hours in front of screens, feels tiredness in the face or jaw, or is simply looking for a moment of deep disconnection.",
      },
    ],
    benefits: [
      {
        title: {
          es: "Descanso craneofacial",
          gl: "Descanso craneofacial",
          en: "Craniofacial rest",
        },
        description: {
          es: "Las maniobras sobre sienes, cuero cabelludo y rostro ayudan a proporcionar una agradable sensación de alivio y descanso.",
          gl: "As manobras sobre as tempas, o couro cabeludo e o rostro axudan a proporcionar unha agradable sensación de alivio e descanso.",
          en: "Work on the temples, scalp and face helps provide a pleasant feeling of relief and rest.",
        },
      },
      {
        title: {
          es: "Liberación de tensión mandibular",
          gl: "Liberación da tensión mandibular",
          en: "Jaw tension release",
        },
        description: {
          es: "El trabajo suave sobre la zona mandibular puede ayudar a relajar la tensión acumulada por el estrés cotidiano.",
          gl: "O traballo suave sobre a zona mandibular pode axudar a relaxar a tensión acumulada polo estrés cotián.",
          en: "Gentle work on the jaw area can help relax the tension built up by everyday stress.",
        },
      },
      {
        title: {
          es: "Luminosidad y cuidado facial",
          gl: "Luminosidade e coidado facial",
          en: "Radiance and facial care",
        },
        description: {
          es: "El masaje favorece la estimulación superficial de los tejidos y aporta una sensación de rostro descansado y revitalizado.",
          gl: "A masaxe favorece a estimulación superficial dos tecidos e achega unha sensación de rostro descansado e revitalizado.",
          en: "The massage encourages gentle surface stimulation of the tissues and brings a feeling of a rested, revitalised face.",
        },
      },
      {
        title: {
          es: "Descanso y desconexión",
          gl: "Descanso e desconexión",
          en: "Rest and disconnection",
        },
        description: {
          es: "El tratamiento invita a relajar la zona cervical, facial y ocular y a disfrutar de una pausa de calma.",
          gl: "O tratamento convida a relaxar a zona cervical, facial e ocular e a gozar dunha pausa de calma.",
          en: "The treatment invites you to relax the neck, face and eye area and enjoy a pause of calm.",
        },
      },
    ],
    durations: [{ minutes: 30, price: 30, bookingId: 6 }],
    image: "/images/services/craniofacial-massage.webp",
  },
  {
    id: "express-massage",
    slug: { es: "masaje-express", gl: "masaxe-express", en: "express-massage" },
    category: "massages",
    name: { es: "Masaje Express", gl: "Masaxe Express", en: "Express Massage" },
    intro: {
      es: "El Masaje Express es la opción ideal para quienes disponen de poco tiempo pero necesitan dedicar atención a una zona concreta donde sienten tensión o sobrecarga.",
      gl: "A Masaxe Express é a opción ideal para quen dispón de pouco tempo pero necesita dedicar atención a unha zona concreta onde sente tensión ou sobrecarga.",
      en: "The Express Massage is the ideal option for anyone with little time who still needs to give attention to a specific area where they feel tension or strain.",
    },
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
      es: "Esta sesión focalizada se centra directamente en el área que más lo necesita.",
      gl: "Esta sesión focalizada céntrase directamente na área que máis o necesita.",
      en: "This focused session goes straight to the area that needs it most.",
    },
    paragraphs: [
      {
        es: "Esta sesión focalizada se centra directamente en el área que más lo necesita.",
        gl: "Esta sesión focalizada céntrase directamente na área que máis o necesita.",
        en: "This focused session goes straight to the area that needs it most.",
      },
      {
        es: "Mediante técnicas adaptadas a cada persona, trabajamos exclusivamente la zona elegida para liberar tensión y devolver una agradable sensación de movilidad y descanso.",
        gl: "Mediante técnicas adaptadas a cada persoa, traballamos exclusivamente a zona elixida para liberar tensión e devolver unha agradable sensación de mobilidade e descanso.",
        en: "Using techniques adapted to each person, we work solely on the chosen area to release tension and restore a pleasant sense of mobility and rest.",
      },
    ],
    benefits: [
      {
        title: {
          es: "Enfoque personalizado",
          gl: "Enfoque personalizado",
          en: "Personalised focus",
        },
        description: {
          es: "Tú eliges el área prioritaria: Espalda y Cuello, Piernas Cansadas o Zona Craneofacial.",
          gl: "Ti elixes a área prioritaria: Costas e Pescozo, Pernas Cansadas ou Zona Craneofacial.",
          en: "You choose the priority area: Back and Neck, Tired Legs or the Craniofacial Area.",
        },
      },
      {
        title: {
          es: "Trabajo focalizado",
          gl: "Traballo focalizado",
          en: "Focused work",
        },
        description: {
          es: "Toda la sesión se concentra en la zona seleccionada para aprovechar al máximo los 30 minutos.",
          gl: "Toda a sesión concéntrase na zona seleccionada para aproveitar ao máximo os 30 minutos.",
          en: "The whole session concentrates on the selected area to make the most of the 30 minutes.",
        },
      },
      {
        title: {
          es: "Ideal para tu rutina",
          gl: "Ideal para a túa rutina",
          en: "Ideal for your routine",
        },
        description: {
          es: "Perfecto para hacer una pausa durante el día o complementar sesiones más largas.",
          gl: "Perfecto para facer unha pausa durante o día ou complementar sesións máis longas.",
          en: "Perfect for taking a break during the day or complementing longer sessions.",
        },
      },
    ],
    durations: [{ minutes: 30, price: 35, bookingId: 7 }],
    image: "/images/services/express-massage.webp",
  },
  {
    id: "ritual-alma",
    slug: { es: "ritual-alma", gl: "ritual-alma", en: "soul-ritual" },
    category: "rituals",
    name: { es: "Ritual Alma", gl: "Ritual Alma", en: "Soul Ritual" },
    intro: {
      es: "Ritual Alma combina una limpieza facial con un Masaje Craneofacial para crear una experiencia integral de cuidado del rostro y profunda desconexión.",
      gl: "Ritual Alma combina unha limpeza facial cunha Masaxe Craneofacial para crear unha experiencia integral de coidado do rostro e profunda desconexión.",
      en: "The Soul Ritual combines a facial cleanse with a Craniofacial Massage to create a complete experience of facial care and deep disconnection.",
    },
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
      es: "Un protocolo pensado para devolver una sensación de vitalidad al rostro mientras trabajamos la tensión acumulada en sienes, mandíbula, cuello y cuero cabelludo.",
      gl: "Un protocolo pensado para devolver unha sensación de vitalidade ao rostro mentres traballamos a tensión acumulada en tempas, mandíbula, pescozo e couro cabeludo.",
      en: "A protocol designed to bring a sense of vitality back to the face while we work on the tension held in the temples, jaw, neck and scalp.",
    },
    paragraphs: [
      {
        es: "Un protocolo pensado para devolver una sensación de vitalidad al rostro mientras trabajamos la tensión acumulada en sienes, mandíbula, cuello y cuero cabelludo.",
        gl: "Un protocolo pensado para devolver unha sensación de vitalidade ao rostro mentres traballamos a tensión acumulada en tempas, mandíbula, pescozo e couro cabeludo.",
        en: "A protocol designed to bring a sense of vitality back to the face while we work on the tension held in the temples, jaw, neck and scalp.",
      },
      {
        es: "Mediante productos cosméticos adaptados al tipo de piel y maniobras de masaje precisas, combinamos cuidado estético y bienestar en una misma experiencia.",
        gl: "Mediante produtos cosméticos adaptados ao tipo de pel e manobras de masaxe precisas, combinamos coidado estético e benestar nunha mesma experiencia.",
        en: "With cosmetic products suited to your skin type and precise massage movements, we bring together aesthetic care and wellbeing in a single experience.",
      },
    ],
    benefits: [
      {
        title: {
          es: "Piel limpia y radiante",
          gl: "Pel limpa e radiante",
          en: "Clean, radiant skin",
        },
        description: {
          es: "La limpieza, exfoliación e hidratación ayudan a dejar el rostro fresco, uniforme y cuidado.",
          gl: "A limpeza, a exfoliación e a hidratación axudan a deixar o rostro fresco, uniforme e coidado.",
          en: "Cleansing, exfoliation and hydration help leave the face fresh, even and cared for.",
        },
      },
      {
        title: {
          es: "Liberación de tensión",
          gl: "Liberación de tensión",
          en: "Tension release",
        },
        description: {
          es: "El masaje trabaja especialmente mandíbula, sienes, cuello y cuero cabelludo, zonas donde suele acumularse el estrés cotidiano.",
          gl: "A masaxe traballa especialmente mandíbula, tempas, pescozo e couro cabeludo, zonas onde adoita acumularse o estrés cotián.",
          en: "The massage works especially on the jaw, temples, neck and scalp, the areas where everyday stress tends to gather.",
        },
      },
      {
        title: {
          es: "Efecto buena cara",
          gl: "Efecto boa cara",
          en: "A fresh-faced glow",
        },
        description: {
          es: "El masaje facial aporta una agradable sensación de frescura y ayuda a que el rostro se vea descansado y luminoso.",
          gl: "A masaxe facial achega unha agradable sensación de frescura e axuda a que o rostro se vexa descansado e luminoso.",
          en: "The facial massage brings a pleasant feeling of freshness and helps the face look rested and bright.",
        },
      },
      {
        title: {
          es: "Experiencia desconectante",
          gl: "Experiencia desconectante",
          en: "A switch-off experience",
        },
        description: {
          es: "Un momento para relajarte mentalmente mientras cuidamos de tu piel.",
          gl: "Un momento para relaxarte mentalmente mentres coidamos da túa pel.",
          en: "A moment to relax mentally while we take care of your skin.",
        },
      },
    ],
    durations: [{ minutes: 45, price: 55, bookingId: 8 }],
    featured: true,
    image: "/images/services/ritual-alma.webp",
  },
  {
    id: "ritual-light-feet",
    slug: { es: "ritual-pies-ligeros", gl: "ritual-pes-lixeiros", en: "light-feet-ritual" },
    category: "rituals",
    name: { es: "Ritual Pies Ligeros", gl: "Ritual Pés Lixeiros", en: "Light Feet Ritual" },
    intro: {
      es: "Ritual Pies Ligeros combina un Spa de Pies con Masaje de Piernas para proporcionar descanso, cuidado y una agradable sensación de ligereza en las extremidades inferiores.",
      gl: "Ritual Pés Lixeiros combina un Spa de Pés con Masaxe de Pernas para proporcionar descanso, coidado e unha agradable sensación de lixeireza nas extremidades inferiores.",
      en: "The Light Feet Ritual combines a Foot Spa with a Leg Massage to bring rest, care and a pleasant feeling of lightness to the lower limbs.",
    },
    tagline: {
      es: "Alivio y descanso para tus pasos",
      gl: "Alivio e descanso para os teus pasos",
      en: "Relief and rest for every step",
    },
    shortDescription: {
      es: "Spa de pies y masaje de piernas para quienes acumulan fatiga al caminar o estar de pie.",
      gl: "Spa de pés e masaxe de pernas para quen acumula fatiga ao camiñar ou estar de pé.",
      en: "A foot and leg care experience combining a foot spa and massage to restore a pleasant feeling of rest and lightness.",
    },
    description: {
      es: "El protocolo comienza con un agradable baño de pies con sales y continúa con un masaje desde la planta de los pies hasta las piernas.",
      gl: "O protocolo comeza cun agradable baño de pés con sales e continúa cunha masaxe desde a planta dos pés ata as pernas.",
      en: "The protocol begins with a pleasant salt foot bath and continues with a massage that works from the soles of the feet up through the legs.",
    },
    paragraphs: [
      {
        es: "El protocolo comienza con un agradable baño de pies con sales y continúa con un masaje desde la planta de los pies hasta las piernas.",
        gl: "O protocolo comeza cun agradable baño de pés con sales e continúa cunha masaxe desde a planta dos pés ata as pernas.",
        en: "The protocol begins with a pleasant salt foot bath and continues with a massage that works from the soles of the feet up through the legs.",
      },
      {
        es: "Es una opción ideal para peregrinos, deportistas, personas que pasan muchas horas de pie o cualquiera que quiera regalar descanso a unos pies cansados.",
        gl: "É unha opción ideal para peregrinos, deportistas, persoas que pasan moitas horas de pé ou calquera que queira agasallar descanso a uns pés cansados.",
        en: "It is an ideal option for pilgrims, athletes, people who spend long hours on their feet, or anyone who wants to give tired feet a rest.",
      },
    ],
    benefits: [
      {
        title: {
          es: "Baño de sales y exfoliación",
          gl: "Baño de sales e exfoliación",
          en: "Salt bath and exfoliation",
        },
        description: {
          es: "Prepara y suaviza la piel mientras proporciona una agradable sensación de descanso en los pies.",
          gl: "Prepara e suaviza a pel mentres proporciona unha agradable sensación de descanso nos pés.",
          en: "It prepares and softens the skin while giving the feet a pleasant feeling of rest.",
        },
      },
      {
        title: {
          es: "Descanso muscular",
          gl: "Descanso muscular",
          en: "Muscular rest",
        },
        description: {
          es: "El masaje trabaja pies y piernas, especialmente las zonas donde suele acumularse la sensación de sobrecarga.",
          gl: "A masaxe traballa pés e pernas, especialmente as zonas onde adoita acumularse a sensación de sobrecarga.",
          en: "The massage works the feet and legs, especially the areas where that overloaded feeling tends to build up.",
        },
      },
      {
        title: {
          es: "Sensación de ligereza",
          gl: "Sensación de lixeireza",
          en: "A feeling of lightness",
        },
        description: {
          es: "Las maniobras del masaje favorecen una agradable sensación de descanso en piernas y tobillos.",
          gl: "As manobras da masaxe favorecen unha agradable sensación de descanso en pernas e nocellos.",
          en: "The massage movements encourage a pleasant sense of rest in the legs and ankles.",
        },
      },
      {
        title: {
          es: "Cuidado para tus pasos",
          gl: "Coidado para os teus pasos",
          en: "Care for every step",
        },
        description: {
          es: "Una experiencia pensada para que pies y piernas se sientan descansados después de largas jornadas.",
          gl: "Unha experiencia pensada para que pés e pernas se sintan descansados despois de longas xornadas.",
          en: "An experience designed so your feet and legs feel rested after long days.",
        },
      },
    ],
    durations: [{ minutes: 45, price: 55, bookingId: 9 }],
    pilgrimFeatured: true,
    audience: ["peregrinos", "deportistas", "personas que trabajan de pie"],
    image: "/images/services/ritual-light-feet.webp",
  },
  {
    id: "ritual-serenity-spa",
    slug: { es: "ritual-serenity-spa", gl: "ritual-serenity-spa", en: "serenity-spa-ritual" },
    category: "spa",
    name: { es: "Ritual Serenity Spa", gl: "Ritual Serenity Spa", en: "Serenity Spa Ritual" },
    intro: {
      es: "El estrés diario, las pantallas y la fatiga suelen sentirse especialmente en la zona de la cabeza, el cuello y las cervicales.",
      gl: "O estrés diario, as pantallas e a fatiga adoitan sentirse especialmente na zona da cabeza, o pescozo e as cervicais.",
      en: "Everyday stress, screens and fatigue are usually felt most in the head, neck and cervical area.",
    },
    tagline: {
      es: 'Un "reset" profundo para mente y cabello',
      gl: 'Un "reset" profundo para mente e cabelo',
      en: 'A deep "reset" for mind and hair',
    },
    shortDescription: {
      es: "Tratamiento capilar que combina cuidado del cuero cabelludo, hidroterapia y masaje craneofacial.",
      gl: "Tratamento capilar que combina coidado do couro cabeludo, hidroterapia e masaxe craneofacial.",
      en: "A wellbeing ritual for the scalp, face, neck and cervical area using Head Spa techniques, water and botanical care.",
    },
    description: {
      es: "Ritual Serenity Spa combina cuidado capilar, agua, masaje craneofacial y técnicas de relajación para ofrecer una experiencia de profunda desconexión.",
      gl: "Ritual Serenity Spa combina coidado capilar, auga, masaxe craneofacial e técnicas de relaxación para ofrecer unha experiencia de profunda desconexión.",
      en: "The Serenity Spa Ritual combines hair care, water, craniofacial massage and relaxation techniques to offer an experience of deep disconnection.",
    },
    paragraphs: [
      {
        es: "Ritual Serenity Spa combina cuidado capilar, agua, masaje craneofacial y técnicas de relajación para ofrecer una experiencia de profunda desconexión.",
        gl: "Ritual Serenity Spa combina coidado capilar, auga, masaxe craneofacial e técnicas de relaxación para ofrecer unha experiencia de profunda desconexión.",
        en: "The Serenity Spa Ritual combines hair care, water, craniofacial massage and relaxation techniques to offer an experience of deep disconnection.",
      },
    ],
    benefits: [
      {
        title: {
          es: "Valoración capilar personalizada",
          gl: "Valoración capilar personalizada",
          en: "Personalised hair assessment",
        },
        description: {
          es: "Observamos las necesidades del cuero cabelludo —como sensibilidad, sequedad, exceso de grasa o descamación— para seleccionar los productos botánicos y cuidados más adecuados.",
          gl: "Observamos as necesidades do couro cabeludo —como sensibilidade, sequidade, exceso de graxa ou descamación— para seleccionar os produtos botánicos e coidados máis axeitados.",
          en: "We look at what the scalp needs — sensitivity, dryness, excess oil or flaking — in order to select the most suitable botanical products and care.",
        },
      },
      {
        title: {
          es: "Circuito de hidroterapia",
          gl: "Circuíto de hidroterapia",
          en: "Hydrotherapy circuit",
        },
        description: {
          es: "Arcos de agua a temperatura agradable envuelven el cuero cabelludo creando una experiencia relajante mientras acompañan el proceso de limpieza y cuidado capilar.",
          gl: "Arcos de auga a temperatura agradable envolven o couro cabeludo creando unha experiencia relaxante mentres acompañan o proceso de limpeza e coidado capilar.",
          en: "Arcs of pleasantly warm water envelop the scalp, creating a relaxing experience as they accompany the cleansing and hair care process.",
        },
      },
      {
        title: {
          es: "Masaje craneofacial y cervical",
          gl: "Masaxe craneofacial e cervical",
          en: "Craniofacial and cervical massage",
        },
        description: {
          es: "Maniobras y presiones sobre cuero cabelludo, rostro, cuello y zona cervical para ayudar a liberar la tensión acumulada y favorecer una sensación de descanso.",
          gl: "Manobras e presións sobre couro cabeludo, rostro, pescozo e zona cervical para axudar a liberar a tensión acumulada e favorecer unha sensación de descanso.",
          en: "Movements and pressure across the scalp, face, neck and cervical area to help release accumulated tension and encourage a feeling of rest.",
        },
      },
      {
        title: {
          es: "Tratamiento botánico",
          gl: "Tratamento botánico",
          en: "Botanical treatment",
        },
        description: {
          es: "Cuidados de nutrición e hidratación seleccionados para ayudar a devolver suavidad, brillo y una agradable sensación de equilibrio al cabello.",
          gl: "Coidados de nutrición e hidratación seleccionados para axudar a devolver suavidade, brillo e unha agradable sensación de equilibrio ao cabelo.",
          en: "Nourishing and hydrating care selected to help restore softness, shine and a pleasant sense of balance to the hair.",
        },
      },
    ],
    durations: [
      { minutes: 45, price: 55, bookingId: 10 },
      { minutes: 60, price: 70, bookingId: 11 },
    ],
    featured: true,
    image: "/images/services/ritual-serenity-spa.webp",
  },
  {
    id: "hospitality-reset",
    slug: { es: "reseteo-hostelero", gl: "reseteo-hostelero", en: "hospitality-reset" },
    category: "specials",
    name: { es: "Reseteo Hostelero", gl: "Reseteo Hostelero", en: "Hospitality Reset" },
    intro: {
      es: "Vuelve a conectar con tu bienestar entre turno y turno.",
      gl: "Volve conectar co teu benestar entre quenda e quenda.",
      en: "Reconnect with your wellbeing between shifts.",
    },
    shortDescription: {
      es: "Masaje pensado para quienes trabajan en hostelería y pasan muchas horas de pie.",
      gl: "Masaxe pensada para quen traballa na hostalaría e pasa moitas horas de pé.",
      en: "A special treatment for people who live in Santiago or work in hospitality, focusing on areas most affected by long working days.",
    },
    description: {
      es: "Sabemos lo que es estar horas de pie, cargar con bandejas, mantener el ritmo bajo presión y acumular tensión en las lumbares, el cuello y los hombros.",
      gl: "Sabemos o que é estar horas de pé, cargar con bandexas, manter o ritmo baixo presión e acumular tensión nas lumbares, o pescozo e os ombros.",
      en: "We know what it's like to spend hours on your feet, carry trays, keep up the pace under pressure and build up tension in the lower back, neck and shoulders.",
    },
    paragraphs: [
      {
        es: "Sabemos lo que es estar horas de pie, cargar con bandejas, mantener el ritmo bajo presión y acumular tensión en las lumbares, el cuello y los hombros.",
        gl: "Sabemos o que é estar horas de pé, cargar con bandexas, manter o ritmo baixo presión e acumular tensión nas lumbares, o pescozo e os ombros.",
        en: "We know what it's like to spend hours on your feet, carry trays, keep up the pace under pressure and build up tension in the lower back, neck and shoulders.",
      },
      {
        es: "La hostelería es pura entrega, pero tu cuerpo también necesita parar.",
        gl: "A hostalaría é pura entrega, pero o teu corpo tamén necesita parar.",
        en: "Hospitality is all about giving, but your body needs to stop too.",
      },
      {
        es: "En Infinity Bliss hemos creado Reseteo Hostelero, un masaje específico pensado para devolver una sensación de ligereza a tu musculatura y dejar atrás la tensión acumulada durante la semana.",
        gl: "En Infinity Bliss creamos o Reseteo Hostelero, unha masaxe específica pensada para devolver unha sensación de lixeireza á túa musculatura e deixar atrás a tensión acumulada durante a semana.",
        en: "At Infinity Bliss we created the Hospitality Reset, a specific massage designed to bring a feeling of lightness back to your muscles and leave behind the tension built up over the week.",
      },
    ],
    benefits: [
      {
        title: {
          es: "Qué trabajamos",
          gl: "Que traballamos",
          en: "What we work on",
        },
        description: {
          es: "Nos centramos especialmente en las zonas más castigadas por largas jornadas: espalda, cuello, brazos y planta de los pies.",
          gl: "Centrámonos especialmente nas zonas máis castigadas polas longas xornadas: costas, pescozo, brazos e planta dos pés.",
          en: "We focus especially on the areas that suffer most from long shifts: the back, neck, arms and soles of the feet.",
        },
      },
      {
        title: {
          es: "Qué buscamos",
          gl: "Que buscamos",
          en: "What we're aiming for",
        },
        description: {
          es: "Ayudarte a desconectar de la fatiga física, relajar el cuerpo y recargar energías antes de volver al ritmo del día a día.",
          gl: "Axudarte a desconectar da fatiga física, relaxar o corpo e recargar enerxías antes de volver ao ritmo do día a día.",
          en: "To help you switch off from physical fatigue, relax your body and recharge before going back to the daily pace.",
        },
      },
    ],
    closing: {
      es: "Porque cuidar de los demás empieza por cuidarte a ti. Regálate esa pausa que te mereces.",
      gl: "Porque coidar dos demais empeza por coidarte a ti. Regálate esa pausa que mereces.",
      en: "Because looking after others starts with looking after yourself. Give yourself the pause you deserve.",
    },
    durations: [{ minutes: 45, price: 38, bookingId: 12 }],
    audience: hospitalityAudience,
    badge: hospitalityBadge,
    note: hospitalityNote,
    image: "/images/services/hospitality-reset.webp",
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
    intro: {
      es: "La desconexión total que tu cuerpo pide a gritos.",
      gl: "A desconexión total que o teu corpo pide a berros.",
      en: "The complete switch-off your body has been asking for.",
    },
    shortDescription: {
      es: "Versión completa del Reseteo Hostelero con baño de pies, masaje corporal y craneofacial.",
      gl: "Versión completa do Reseteo Hostelero con baño de pés, masaxe corporal e craneofacial.",
      en: "A more complete version of Hospitality Reset combining foot care, body massage and craniofacial massage.",
    },
    description: {
      es: "Si buscas ir un paso más allá del alivio muscular y regalarle a tu cuerpo un paréntesis de calma absoluta, Reseteo Hostelero Premium es nuestro ritual más completo para quienes necesitan parar.",
      gl: "Se buscas ir un paso máis alá do alivio muscular e agasallarlle ao teu corpo un paréntese de calma absoluta, Reseteo Hostelero Premium é o noso ritual máis completo para quen necesita parar.",
      en: "If you want to go a step beyond muscular relief and give your body a parenthesis of absolute calm, the Hospitality Reset Premium is our most complete ritual for those who need to stop.",
    },
    paragraphs: [
      {
        es: "Si buscas ir un paso más allá del alivio muscular y regalarle a tu cuerpo un paréntesis de calma absoluta, Reseteo Hostelero Premium es nuestro ritual más completo para quienes necesitan parar.",
        gl: "Se buscas ir un paso máis alá do alivio muscular e agasallarlle ao teu corpo un paréntese de calma absoluta, Reseteo Hostelero Premium é o noso ritual máis completo para quen necesita parar.",
        en: "If you want to go a step beyond muscular relief and give your body a parenthesis of absolute calm, the Hospitality Reset Premium is our most complete ritual for those who need to stop.",
      },
      {
        es: "Hemos diseñado esta experiencia para transformar una jornada intensa en un momento de bienestar, combinando cuidado corporal y desconexión mental.",
        gl: "Deseñamos esta experiencia para transformar unha xornada intensa nun momento de benestar, combinando coidado corporal e desconexión mental.",
        en: "We designed this experience to turn an intense working day into a moment of wellbeing, combining body care and mental disconnection.",
      },
      {
        es: "El ritual comienza con un baño de pies en sales aromáticas y agua caliente: un primer momento para dejar atrás el cansancio acumulado tras horas de pie y preparar el cuerpo para relajarse.",
        gl: "O ritual comeza cun baño de pés en sales aromáticas e auga quente: un primeiro momento para deixar atrás o cansazo acumulado tras horas de pé e preparar o corpo para relaxarse.",
        en: "The ritual begins with a foot bath of aromatic salts and hot water: a first moment to leave behind the tiredness built up after hours on your feet and prepare the body to relax.",
      },
      {
        es: "A continuación, nos centramos en trabajar la tensión de la espalda y la musculatura cargada.",
        gl: "A continuación, centrámonos en traballar a tensión das costas e a musculatura cargada.",
        en: "Next, we focus on working the tension in the back and the muscles carrying the most load.",
      },
      {
        es: "La experiencia culmina con un masaje craneofacial pensado para relajar mandíbula, cuero cabelludo y rostro y permitirte cerrar los ojos y desconectar de todo.",
        gl: "A experiencia culmina cunha masaxe craneofacial pensada para relaxar mandíbula, couro cabeludo e rostro e permitirche pechar os ollos e desconectar de todo.",
        en: "The experience ends with a craniofacial massage designed to relax the jaw, scalp and face so you can close your eyes and switch off from everything.",
      },
    ],
    benefits: [
      {
        title: {
          es: "Inmersión relajante",
          gl: "Inmersión relaxante",
          en: "A relaxing immersion",
        },
        description: {
          es: "Baño de pies con sales aromáticas para comenzar la experiencia y dejar atrás el ritmo del día.",
          gl: "Baño de pés con sales aromáticas para comezar a experiencia e deixar atrás o ritmo do día.",
          en: "An aromatic salt foot bath to begin the experience and leave the pace of the day behind.",
        },
      },
      {
        title: {
          es: "Libertad muscular",
          gl: "Liberdade muscular",
          en: "Muscular freedom",
        },
        description: {
          es: "Masaje profundo enfocado especialmente en las zonas que acumulan mayor carga física.",
          gl: "Masaxe profunda enfocada especialmente nas zonas que acumulan maior carga física.",
          en: "A deep massage focused especially on the areas that carry the greatest physical load.",
        },
      },
      {
        title: {
          es: "Paz profunda",
          gl: "Paz profunda",
          en: "Deep peace",
        },
        description: {
          es: "Masaje craneofacial para proporcionar descanso a rostro, mandíbula y cuero cabelludo.",
          gl: "Masaxe craneofacial para proporcionar descanso a rostro, mandíbula e couro cabeludo.",
          en: "A craniofacial massage to bring rest to the face, jaw and scalp.",
        },
      },
    ],
    closing: {
      es: "Es el momento de devolverle a tu cuerpo parte de todo el esfuerzo que haces cada día. Te lo has ganado.",
      gl: "É o momento de devolverlle ao teu corpo parte de todo o esforzo que fas cada día. Gañáchelo.",
      en: "It's time to give your body back some of the effort you put in every single day. You've earned it.",
    },
    durations: [{ minutes: 90, price: 75, bookingId: 13 }],
    audience: hospitalityAudience,
    badge: hospitalityBadge,
    note: hospitalityNote,
    image: "/images/services/hospitality-reset-premium.webp",
  },
  {
    id: "manicura-y-unas",
    slug: {
      es: "manicura-y-unas",
      gl: "manicura-e-unas",
      en: "manicure-nail-care",
    },
    category: "nails",
    name: {
      es: "Manicura y uñas",
      gl: "Manicura e uñas",
      en: "Manicure & Nail Care",
    },
    shortDescription: {
      es: "En Infinity Bliss cuidamos tus manos y uñas con un servicio personalizado, adaptado a tu estilo y preferencias. Elige entre manicura spa, uñas permanentes, acrílicas, gel y diseños en tendencia.",
      gl: "En Infinity Bliss coidamos das túas mans e uñas cun servizo personalizado, adaptado ao teu estilo e ás túas preferencias. Escolle entre manicura spa, uñas permanentes, acrílicas, xel e deseños de tendencia.",
      en: "Personalised hand and nail care tailored to your style and preferences. Choose from spa manicures, long-lasting polish, acrylics, gel nails and on-trend designs.",
    },
    intro: {
      es: "En Infinity Bliss cuidamos tus manos y uñas con un servicio personalizado, adaptado a tu estilo y preferencias.",
      gl: "En Infinity Bliss coidamos das túas mans e uñas cun servizo personalizado, adaptado ao teu estilo e ás túas preferencias.",
      en: "At Infinity Bliss we care for your hands and nails with a personalised service adapted to your style and preferences.",
    },
    description: {
      es: "Puedes elegir entre manicura spa, uñas permanentes, uñas acrílicas, uñas en gel y uñas en tendencia. Desde acabados naturales y elegantes hasta propuestas más creativas.",
      gl: "Podes escoller entre manicura spa, uñas permanentes, uñas acrílicas, uñas en xel e uñas de tendencia. Dende acabados naturais e elegantes ata propostas máis creativas.",
      en: "You can choose from spa manicures, long-lasting polish, acrylic nails, gel nails and on-trend designs — from natural, elegant finishes to more creative looks.",
    },
    paragraphs: [
      {
        es: "Puedes elegir entre:",
        gl: "Podes escoller entre:",
        en: "You can choose from:",
      },
    ],
    benefitsHeading: {
      es: "Opciones",
      gl: "Opcións",
      en: "Options",
    },
    benefits: [
      {
        title: { es: "Manicura Spa", gl: "Manicura Spa", en: "Spa manicure" },
        description: { es: "", gl: "", en: "" },
      },
      {
        title: {
          es: "Uñas permanentes",
          gl: "Uñas permanentes",
          en: "Long-lasting polish",
        },
        description: { es: "", gl: "", en: "" },
      },
      {
        title: {
          es: "Uñas acrílicas",
          gl: "Uñas acrílicas",
          en: "Acrylic nails",
        },
        description: { es: "", gl: "", en: "" },
      },
      {
        title: { es: "Uñas en gel", gl: "Uñas en xel", en: "Gel nails" },
        description: { es: "", gl: "", en: "" },
      },
      {
        title: {
          es: "Uñas en tendencia",
          gl: "Uñas de tendencia",
          en: "On-trend designs",
        },
        description: { es: "", gl: "", en: "" },
      },
    ],
    closing: {
      es: "Desde acabados naturales y elegantes hasta propuestas más creativas.",
      gl: "Dende acabados naturais e elegantes ata propostas máis creativas.",
      en: "From natural, elegant finishes to more creative looks.",
    },
    // bookingId 15 — price/duration vary; pricingLabel is shown instead of 0 €
    durations: [{ minutes: 60, price: 0, bookingId: 15 }],
    pricingLabel: {
      es: "Precio según servicio y diseño",
      gl: "Prezo segundo o servizo e o deseño",
      en: "Price depends on treatment and design",
    },
    note: {
      es: "El precio y la duración son orientativos y dependerán del tipo de uñas, la longitud y la complejidad del diseño elegido. Nuestro equipo contactará contigo para concretar los detalles de tu cita. La duración y el precio definitivos pueden variar según el tipo de uñas y el diseño elegido.",
      gl: "O prezo e a duración son orientativos e dependerán do tipo de uñas, a lonxitude e a complexidade do deseño escollido. O noso equipo contactará contigo para concretar os detalles da túa cita. A duración e o prezo definitivos poden variar segundo o tipo de uñas e o deseño escollido.",
      en: "Price and duration are indicative and will depend on the nail treatment, length and design complexity. Our team will contact you to confirm the details of your appointment. The final duration and price may vary depending on the nail treatment and design selected.",
    },
    image: "/images/services/manicura-y-unas.webp",
  },
  {
    id: "pedicura-pedi-spa",
    slug: {
      es: "pedicura-pedi-spa",
      gl: "pedicura-pedi-spa",
      en: "pedicure-pedi-spa",
    },
    category: "nails",
    name: {
      es: "Pedicura (Pedi Spa)",
      gl: "Pedicura (Pedi Spa)",
      en: "Pedicure (Pedi Spa)",
    },
    shortDescription: {
      es: "Una experiencia de cuidado y bienestar para tus pies. Disfruta de una pedicura adaptada a tus necesidades y al acabado que prefieras.",
      gl: "Unha experiencia de coidado e benestar para os teus pés. Goza dunha pedicura adaptada ás túas necesidades e ao acabado que prefiras.",
      en: "A relaxing foot-care experience with a pedicure tailored to your needs and preferred finish.",
    },
    intro: {
      es: "Una experiencia de cuidado y bienestar para tus pies. Dedícales un momento de atención y disfruta de una pedicura adaptada a tus necesidades y al acabado que prefieras.",
      gl: "Unha experiencia de coidado e benestar para os teus pés. Dedícalles un momento de atención e goza dunha pedicura adaptada ás túas necesidades e ao acabado que prefiras.",
      en: "A caring wellbeing experience for your feet. Give them a moment of attention and enjoy a pedicure tailored to your needs and preferred finish.",
    },
    description: {
      es: "El precio y la duración dependerán del tratamiento y los acabados elegidos. Nuestro equipo podrá confirmar los detalles de tu cita antes del servicio.",
      gl: "O prezo e a duración dependerán do tratamento e dos acabados escollidos. O noso equipo poderá confirmar os detalles da túa cita antes do servizo.",
      en: "Price and duration will depend on the treatment and finishes you choose. Our team can confirm the details of your appointment before the service.",
    },
    paragraphs: [
      {
        es: "El precio y la duración dependerán del tratamiento y los acabados elegidos. Nuestro equipo podrá confirmar los detalles de tu cita antes del servicio.",
        gl: "O prezo e a duración dependerán do tratamento e dos acabados escollidos. O noso equipo poderá confirmar os detalles da túa cita antes do servizo.",
        en: "Price and duration will depend on the treatment and finishes you choose. Our team can confirm the details of your appointment before the service.",
      },
    ],
    // bookingId 16 — price varies; pricingLabel is shown instead of 0 €
    durations: [{ minutes: 45, price: 0, bookingId: 16 }],
    pricingLabel: {
      es: "Precio según tratamiento",
      gl: "Prezo segundo o tratamento",
      en: "Price depends on treatment",
    },
    image: "/images/services/pedicura-pedi-spa.webp",
  },
  {
    id: "presoterapia",
    slug: {
      es: "presoterapia",
      gl: "presoterapia",
      en: "pressotherapy",
    },
    category: "wellbeing",
    name: {
      es: "Presoterapia",
      gl: "Presoterapia",
      en: "Pressotherapy",
    },
    shortDescription: {
      es: "Una sesión de compresión neumática suave y controlada, pensada para favorecer la sensación de ligereza y descanso en las piernas.",
      gl: "Unha sesión de compresión pneumática suave e controlada, pensada para favorecer a sensación de lixeireza e descanso nas pernas.",
      en: "A gentle, controlled pneumatic compression session designed to promote a feeling of lightness and relaxation in the legs.",
    },
    intro: {
      es: "Disfruta de una sesión de compresión neumática suave y controlada, pensada para favorecer la sensación de ligereza y descanso en las piernas.",
      gl: "Goza dunha sesión de compresión pneumática suave e controlada, pensada para favorecer a sensación de lixeireza e descanso nas pernas.",
      en: "Enjoy a gentle, controlled pneumatic compression session designed to promote a feeling of lightness and relaxation in the legs.",
    },
    description: {
      es: "Un momento de bienestar especialmente agradable después de largas jornadas de pie.",
      gl: "Un momento de benestar especialmente agradable despois de longas xornadas de pé.",
      en: "A wellbeing moment that feels especially welcome after long days on your feet.",
    },
    paragraphs: [
      {
        es: "Un momento de bienestar especialmente agradable después de largas jornadas de pie.",
        gl: "Un momento de benestar especialmente agradable despois de longas xornadas de pé.",
        en: "A wellbeing moment that feels especially welcome after long days on your feet.",
      },
    ],
    // bookingId 14 — price/duration to confirm; pricingLabel is shown instead of 0 €
    durations: [{ minutes: 30, price: 0, bookingId: 14 }],
    pricingLabel: {
      es: "Precio y duración por confirmar",
      gl: "Prezo e duración por confirmar",
      en: "Price and duration to be confirmed",
    },
    image: "/images/services/presoterapia.webp",
  },
];
