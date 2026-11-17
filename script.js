
"use strict";

// ================================================
// §24. ЫҚТИМАЛДЫҚТАРДЫ ҚОСУ ЖӘНЕ КӨБЕЙТУ
// MATH LAB PRO — BY DARKHAN
// ================================================

const $ = id => document.getElementById(id);
const M = String.raw;

const lesson = {
  title: "Ықтималдықтарды қосу және көбейту",
  goal:
    "Кездейсоқ оқиғалардың ықтималдығын есептеу, " +
    "қарама-қарсы, үйлесімді, үйлесімсіз, тәуелсіз " +
    "және тәуелді оқиғаларды ажырату, қосу және " +
    "көбейту ережелерін қолдану."
};

// ================================================
// 1. БЕС ТЕОРИЯЛЫҚ ТҮСІНДІРМЕ
// ================================================

const theory = [
  {
    title: "Кездейсоқ оқиға және ықтималдық",

    definition:
      "Кездейсоқ оқиға тәжірибе нәтижесінде " +
      "орындалуы да, орындалмауы да мүмкін. " +
      "Ықтималдық — оқиғаның болу мүмкіндігін " +
      "білдіретін нөл мен бір арасындағы сан.",

    explain:
      "Әділ ойын сүйегінің алты жағы бар. " +
      "Барлық жақтың түсу мүмкіндігі бірдей. " +
      "Егер жұп сан түсуін қарастырсақ, қолайлы " +
      "нәтижелер — екі, төрт және алты. " +
      "Барлық нәтиже алтау, қолайлысы үшеу. " +
      "Демек, ықтималдық үшті алтыға бөлу арқылы " +
      "табылады. Бұл классикалық тәсіл тек " +
      "қарапайым нәтижелер тең мүмкіндікті " +
      "болғанда қолданылады.",

    rule:
      "Тең мүмкіндікті нәтижелерде ықтималдық — " +
      "қолайлы нәтижелер санының барлық нәтижелер " +
      "санына қатынасы.",

    formula: M`P(A)=\frac{m}{n}`,

    steps: [
      M`n=6`,
      M`A=\{2,4,6\}`,
      M`m=3`,
      M`P(A)=\frac36=\frac12`
    ],

    warning:
      "Ықтималдық нөлден кем және бірден артық болмайды."
  },

  {
    title: "Қарама-қарсы оқиғалар",

    definition:
      "Қарама-қарсы оқиғалардың біреуі міндетті " +
      "түрде орындалады, екеуі бір уақытта " +
      "орындалмайды.",

    explain:
      "Тиынды бір рет лақтырғанда елтаңба түсуі " +
      "және елтаңба түспеуі — қарама-қарсы оқиғалар. " +
      "Егер қандай да бір оқиғаның ықтималдығы " +
      "0,7 болса, оның болмау ықтималдығы 0,3. " +
      "Қарама-қарсы оқиғаны қолдану «кемінде бір рет» " +
      "деген күрделі есептерді жеңілдетеді. " +
      "Алдымен ешбір рет орындалмау ықтималдығын " +
      "тауып, оны бірден азайтамыз.",

    rule:
      "Оқиғаның және оған қарама-қарсы оқиғаның " +
      "ықтималдықтарының қосындысы бірге тең.",

    formula: M`P(\overline A)=1-P(A)`,

    steps: [
      M`P(A)=0.7`,
      M`P(\overline A)=1-0.7`,
      M`P(\overline A)=0.3`
    ],

    warning:
      "Екі түрлі оқиға әрқашан қарама-қарсы бола бермейді."
  },

  {
    title: "Үйлесімсіз оқиғаларды қосу",

    definition:
      "Үйлесімсіз екі оқиға бір тәжірибеде " +
      "бірге орындала алмайды.",

    explain:
      "Әділ сүйекті бір рет лақтырғанда бір санының " +
      "және алты санының бірге түсуі мүмкін емес. " +
      "Олардың әрқайсысының ықтималдығы алтыдан бір. " +
      "Бір немесе алты түсу ықтималдығы — осы екі " +
      "ықтималдықтың қосындысы, үштен бір. " +
      "Үйлесімсіз оқиғалардың ортақ нәтижесі жоқ, " +
      "сондықтан қосындыдан ештеңе азайтылмайды.",

    rule:
      "Үйлесімсіз оқиғалардың бірігу ықтималдығы " +
      "олардың ықтималдықтарының қосындысына тең.",

    formula: M`P(A\cup B)=P(A)+P(B)`,

    steps: [
      M`P(A)=\frac16`,
      M`P(B)=\frac16`,
      M`P(A\cap B)=0`,
      M`P(A\cup B)=\frac16+\frac16=\frac13`
    ],

    warning:
      "Бұл қысқа формула тек қиылысу ықтималдығы " +
      "нөл болғанда жарамды."
  },

  {
    title: "Үйлесімді оқиғаларды қосу",

    definition:
      "Үйлесімді екі оқиға бір уақытта орындала алады. " +
      "Олардың ортақ нәтижелерін екі рет санамау керек.",

    explain:
      "Сүйек лақтырылғанда A — жұп сан түсуі, " +
      "B — үшке еселік сан түсуі. " +
      "A жиыны: екі, төрт, алты. " +
      "B жиыны: үш, алты. Алты саны екі жиында да бар. " +
      "Қарапайым қосу кезінде ол екі рет есептеледі. " +
      "Сондықтан ортақ бөліктің ықтималдығын " +
      "бір рет шегереміз. Нәтиже алтыдан төрт, " +
      "яғни үштен екі.",

    rule:
      "Екі ықтималдықты қосып, олардың қиылысу " +
      "ықтималдығын азайтамыз.",

    formula:
      M`P(A\cup B)=P(A)+P(B)-P(A\cap B)`,

    steps: [
      M`A=\{2,4,6\}`,
      M`B=\{3,6\}`,
      M`A\cap B=\{6\}`,
      M`P(A\cup B)=\frac36+\frac26-\frac16`,
      M`P(A\cup B)=\frac23`
    ],

    warning:
      "Ортақ нәтиже бар кезде ықтималдықтарды " +
      "жай ғана қоспаңдар."
  },

  {
    title: "Ықтималдықтарды көбейту",

    definition:
      "Оқиғалардың бірге орындалу ықтималдығы " +
      "көбейту ережесі арқылы есептеледі.",

    explain:
      "Тиынды екі рет лақтыру тәуелсіз: бірінші " +
      "нәтиже екінші лақтыру ықтималдығына әсер етпейді. " +
      "Екі рет елтаңба түсудің ықтималдығы екіден " +
      "бірді екіден бірге көбейткенге тең. " +
      "Ал қораптан шарларды қайтармай алғанда " +
      "бірінші таңдау екінші таңдаудың шарттарын " +
      "өзгертеді. Бұл — тәуелді оқиғалар; " +
      "сондықтан екінші оқиғаның шартты " +
      "ықтималдығын қолданамыз.",

    rule:
      "Жалпы жағдайда бірінші оқиға ықтималдығын " +
      "екіншісінің шартты ықтималдығына көбейтеміз. " +
      "Тәуелсіз болса, қарапайым көбейтінді аламыз.",

    formula:
      M`P(A\cap B)=P(A)P(B\mid A)`,

    steps: [
      M`P(A)=\frac12`,
      M`P(B\mid A)=\frac12`,
      M`P(A\cap B)=\frac12\cdot\frac12`,
      M`P(A\cap B)=\frac14`
    ],

    warning:
      "Шарларды қайтармай алғанда әр таңдаудағы " +
      "қалған шарлар санын өзгертіңдер."
  }
];

// ================================================
// 2. КОНСПЕКТІЛЕРГЕ КӨМЕКШІ ФУНКЦИЯЛАР
// ================================================

function ex(q, steps, answer, label = "") {
  return {q, steps, answer, label};
}

function note(title, text, formula, example, a, b) {
  return {
    title,
    text,
    formula,
    example,
    self: [a, b]
  };
}

// ================================================
// 3. 10 КОНСПЕКТ — 20 ӨЗІНДІК ЕСЕП
// ================================================

const notes = [
  note(
    "Ықтималдық ұғымы",
    "Ықтималдық нөл мен бір арасында болады. " +
    "Тең мүмкіндікті нәтижелер үшін қолайлы " +
    "нәтижелер санын барлық нәтижелер санына бөлеміз.",

    M`P(A)=\frac mn`,

    [
      M`m=1`,
      M`n=2`,
      M`P(A)=\frac12`
    ],

    ex(
      M`m=2,\ n=8`,
      [M`P(A)=\frac28`],
      M`\frac14`
    ),

    ex(
      M`m=3,\ n=12`,
      [M`P(A)=\frac3{12}`],
      M`\frac14`
    )
  ),

  note(
    "Ойын сүйегінің ықтималдығы",
    "Әділ сүйектің 6 тең мүмкіндікті жағы бар. " +
    "Нәтижелердің қолайлы санын алтыға бөлеміз.",

    M`P(A)=\frac m6`,

    [
      M`A=\{2,4,6\}`,
      M`P(A)=\frac36=\frac12`
    ],

    ex(
      M`A=\{1,2\}`,
      [M`P(A)=\frac26`],
      M`\frac13`
    ),

    ex(
      M`A=\{4,5,6\}`,
      [M`P(A)=\frac36`],
      M`\frac12`
    )
  ),

  note(
    "Екі рет тиын лақтыру",

    "Екі тәуелсіз лақтыруда барлығы төрт тең " +
    "мүмкіндікті нәтиже шығады. Олардың бірі " +
    "екеуінде де елтаңба түсуі болады.",

    M`P(A\cap B)=P(A)P(B)`,

    [
      M`P(A)=\frac12`,
      M`P(B)=\frac12`,
      M`P(A\cap B)=\frac14`
    ],

    ex(
      M`P(A\cap B)`,
      [
        M`\frac12\cdot\frac12=\frac14`
      ],
      M`\frac14`,
      "Екі рет те елтаңба түсу ықтималдығын табыңдар."
    ),

    ex(
      M`P(A\cup B)`,
      [
        M`P(\overline A\cap\overline B)=\frac14`,
        M`1-\frac14=\frac34`
      ],
      M`\frac34`,
      "Екі лақтырудың кемінде біреуінде " +
      "елтаңба түсу ықтималдығын табыңдар."
    )
  ),

  note(
    "Қарама-қарсы оқиға",

    "Қарама-қарсы оқиғаның ықтималдығы " +
    "бірден бастапқы оқиғаның ықтималдығын " +
    "азайту арқылы табылады.",

    M`P(\overline A)=1-P(A)`,

    [
      M`P(A)=0.4`,
      M`P(\overline A)=0.6`
    ],

    ex(
      M`P(A)=0.2`,
      [M`1-0.2=0.8`],
      M`0.8`
    ),

    ex(
      M`P(A)=0.65`,
      [M`1-0.65=0.35`],
      M`0.35`
    )
  ),

  note(
    "Үйлесімсіз оқиғаларды қосу",

    "Екі оқиға бір уақытта бола алмаса, " +
    "олардың бірігу ықтималдығы жай қосындыға тең.",

    M`P(A\cup B)=P(A)+P(B)`,

    [
      M`0.2+0.3=0.5`
    ],

    ex(
      M`P(A)=0.1,\ P(B)=0.4`,
      [M`0.1+0.4=0.5`],
      M`0.5`
    ),

    ex(
      M`P(A)=\frac16,\ P(B)=\frac26`,
      [M`\frac16+\frac26=\frac36`],
      M`\frac12`
    )
  ),

  note(
    "Үйлесімді оқиғаларды қосу",

    "Ортақ нәтижелер болса, олардың " +
    "ықтималдығын қосындыдан шегереміз.",

    M`P(A\cup B)=P(A)+P(B)-P(A\cap B)`,

    [
      M`0.5+0.4-0.2=0.7`
    ],

    ex(
      M`P(A)=0.6,\ P(B)=0.3,\ P(A\cap B)=0.1`,
      [M`0.6+0.3-0.1=0.8`],
      M`0.8`
    ),

    ex(
      M`P(A)=0.7,\ P(B)=0.5,\ P(A\cap B)=0.3`,
      [M`0.7+0.5-0.3=0.9`],
      M`0.9`
    )
  ),

  note(
    "Тәуелсіз оқиғаларды көбейту",

    "Бір оқиғаның нәтижесі екіншісіне әсер етпесе, " +
    "бірге орындалу ықтималдығы екі " +
    "ықтималдықтың көбейтіндісіне тең.",

    M`P(A\cap B)=P(A)P(B)`,

    [
      M`\frac12\cdot\frac13=\frac16`
    ],

    ex(
      M`P(A)=0.4,\ P(B)=0.5`,
      [M`0.4\cdot0.5=0.2`],
      M`0.2`
    ),

    ex(
      M`P(A)=\frac23,\ P(B)=\frac12`,
      [M`\frac23\cdot\frac12=\frac13`],
      M`\frac13`
    )
  ),

  note(
    "Тәуелді оқиғалар",

    "Бірінші таңдау екінші таңдаудың " +
    "ықтималдығын өзгертсе, шартты " +
    "ықтималдық қолданамыз.",

    M`P(A\cap B)=P(A)P(B\mid A)`,

    [
      M`\frac35\cdot\frac24=\frac3{10}`
    ],

    ex(
      M`P(A)=\frac46,\ P(B\mid A)=\frac35`,
      [M`\frac46\cdot\frac35=\frac25`],
      M`\frac25`
    ),

    ex(
      M`P(A)=\frac38,\ P(B\mid A)=\frac27`,
      [M`\frac38\cdot\frac27=\frac3{28}`],
      M`\frac3{28}`
    )
  ),

  note(
    "Кемінде бір оқиға",

    "Тәуелсіз әрекеттерде кемінде бір рет орындалу " +
    "ықтималдығын есептеу үшін ешбір рет " +
    "орындалмауды бірден азайтамыз.",

    M`P(A\cup B)=1-P(\overline A\cap\overline B)`,

    [
      M`1-\left(\frac56\right)^2=\frac{11}{36}`
    ],

    ex(
      M`P(A)=0.2,\ P(B)=0.3`,
      [M`1-0.8\cdot0.7=0.44`],
      M`0.44`,
      "A және B тәуелсіз. Кемінде бірі орындалсын."
    ),

    ex(
      M`P(A)=\frac12,\ P(B)=\frac12`,
      [M`1-\frac14=\frac34`],
      M`\frac34`,
      "A және B тәуелсіз. Кемінде бірі орындалсын."
    )
  ),

  note(
    "Ықтималдықтың қасиеттері",

    "Міндетті оқиғаның ықтималдығы бір, " +
    "мүмкін емес оқиғаның ықтималдығы нөл. " +
    "Әр есептің жауабы осы шектеулерге сай " +
    "болуы қажет.",

    M`0\le P(A)\le1`,

    [
      M`P(A)=0.75`,
      M`P(\overline A)=0.25`,
      M`0.75+0.25=1`
    ],

    ex(
      M`P(A)=0.9`,
      [M`1-0.9=0.1`],
      M`0.1`
    ),

    ex(
      M`P(A)=\frac14,\ P(B)=\frac14`,
      [
        M`P(A\cap B)=\frac1{16}`,
        M`\frac14+\frac14-\frac1{16}=\frac7{16}`
      ],
      M`\frac7{16}`,
      "Оқиғалар тәуелсіз. Кемінде бірі орындалсын."
    )
  )
];

// ================================================
// 4. ДЕҢГЕЙЛІК ТАПСЫРМАЛАР
// ================================================

function task(
  q, options, correct, steps, label = ""
) {
  return {
    q, options, correct, steps, label
  };
}

const levels = [
  {
    name: "I деңгей — Жеңіл",
    points: 5,

    tasks: [
      task(
        M`P(A)=?`,
        ["1/2", "1/3", "1/4", "1"],
        0,
        [M`P(A)=\frac12`],
        "Әділ тиын бір рет лақтырылады. " +
        "Елтаңба түсу ықтималдығы?"
      ),

      task(
        M`P(A)=?`,
        ["1/3", "1/2", "2/3", "1/6"],
        1,
        [
          M`A=\{2,4,6\}`,
          M`P(A)=\frac36=\frac12`
        ],
        "Әділ сүйектен жұп сан түсу ықтималдығы?"
      ),

      task(
        M`P(A)=?`,
        ["1/2", "2/3", "1/3", "1/4"],
        2,
        [
          M`A=\{5,6\}`,
          M`P(A)=\frac26=\frac13`
        ],
        "Әділ сүйектен төрттен үлкен сан түсу ықтималдығы?"
      ),

      task(
        M`P(A)=?`,
        ["2/5", "1/2", "1/5", "3/5"],
        3,
        [
          M`n=5`,
          M`m=3`,
          M`P(A)=\frac35`
        ],
        "Қорапта үш қызыл, екі көк шар бар. " +
        "Қызыл алу ықтималдығы?"
      ),

      task(
        M`P(A)=0.3,\ P(\overline A)=?`,
        ["0.7", "0.3", "1.3", "0.03"],
        0,
        [M`1-0.3=0.7`]
      )
    ]
  },

  {
    name: "II деңгей — Орташа",
    points: 10,

    tasks: [
      task(
        M`P(A\cap B)=?`,
        ["1/2", "1/4", "3/4", "1/8"],
        1,
        [M`\frac12\cdot\frac12=\frac14`],
        "Екі тәуелсіз лақтыруда тиынның " +
        "елтаңба жағы екі рет те түсуі."
      ),

      task(
        M`P(A\cup B)=?`,
        ["1/4", "1/2", "3/4", "1/8"],
        2,
        [M`1-\frac14=\frac34`],
        "Екі лақтыруда кемінде бір рет " +
        "елтаңба түсуі."
      ),

      task(
        M`P(A\cup B)=?`,
        ["1/6", "1/2", "2/3", "1/3"],
        3,
        [M`\frac16+\frac16=\frac13`],
        "Бір рет сүйек лақтырғанда " +
        "бір немесе алты түсуі."
      ),

      task(
        M`P(A)=0.4,\ P(B)=0.3,\ P(A\cap B)=0`,
        ["0.7", "0.1", "0.12", "0.3"],
        0,
        [M`P(A\cup B)=0.4+0.3=0.7`],
        "A немесе B ықтималдығы?"
      ),

      task(
        M`P(A)=0.6,\ P(B)=0.5,\ P(A\cap B)=0.2`,
        ["0.7", "0.9", "1.1", "0.3"],
        1,
        [M`P(A\cup B)=0.6+0.5-0.2=0.9`],
        "A немесе B ықтималдығы?"
      )
    ]
  },

  {
    name: "III деңгей — Қиын",
    points: 15,

    tasks: [
      task(
        M`P(A)=?`,
        ["1/12", "1/9", "1/6", "1/3"],
        2,
        [
          M`n=36`,
          M`m=6`,
          M`P(A)=\frac6{36}=\frac16`
        ],
        "Екі әділ сүйектің қосындысы " +
        "жеті болуының ықтималдығы?"
      ),

      task(
        M`P(A\cap B)=?`,
        ["1/5", "1/2", "2/5", "3/10"],
        3,
        [
          M`P(A)=\frac35`,
          M`P(B\mid A)=\frac24`,
          M`P(A\cap B)=\frac3{10}`
        ],
        "Үш қызыл, екі көк шардан қайтармай " +
        "екі қызыл алу ықтималдығы?"
      ),

      task(
        M`P(A)=0.7,\ P(B)=0.6,\ P(A\cap B)=0.4`,
        ["0.9", "0.7", "0.3", "1.3"],
        0,
        [M`P(A\cup B)=0.7+0.6-0.4=0.9`],
        "A немесе B ықтималдығы?"
      ),

      task(
        M`P(A)=0.4,\ P(B)=0.5`,
        ["0.9", "0.2", "0.1", "0.4"],
        1,
        [M`P(A\cap B)=0.4\cdot0.5=0.2`],
        "A мен B тәуелсіз. Екеуінің " +
        "бірге орындалу ықтималдығы?"
      ),

      task(
        M`P(A\cup B)=?`,
        ["1/2", "1/3", "2/3", "5/6"],
        2,
        [
          M`A=\{2,4,6\}`,
          M`B=\{3,6\}`,
          M`P(A\cup B)=\frac46=\frac23`
        ],
        "Бір сүйекте санның екіге немесе үшке " +
        "еселік болуының ықтималдығы?"
      )
    ]
  },

  {
    name: "IV деңгей — Өте қиын",
    points: 20,

    tasks: [
      task(
        M`P(A)=?`,
        ["1/8", "1/4", "1/2", "3/8"],
        3,
        [
          M`n=2^3=8`,
          M`m=3`,
          M`P(A)=\frac38`
        ],
        "Әділ тиынды үш рет лақтырғанда " +
        "дәл екі рет елтаңба түсу ықтималдығы?"
      ),

      task(
        M`P(A)=?`,
        ["11/36", "1/6", "1/3", "25/36"],
        0,
        [
          M`P(\overline A)=\left(\frac56\right)^2=\frac{25}{36}`,
          M`P(A)=1-\frac{25}{36}=\frac{11}{36}`
        ],
        "Екі әділ сүйекте кемінде бір рет " +
        "алты түсу ықтималдығы?"
      ),

      task(
        M`P(A\cap B)=?`,
        ["1/7", "2/7", "3/7", "4/7"],
        1,
        [
          M`P(A)=\frac47`,
          M`P(B\mid A)=\frac36`,
          M`P(A\cap B)=\frac47\cdot\frac36=\frac27`
        ],
        "Төрт қызыл, үш көк шардан қайтармай " +
        "алдымен қызыл, кейін көк алу ықтималдығы?"
      ),

      task(
        M`P(A)=0.65,\ P(B)=0.55,\ P(A\cap B)=0.35`,
        ["0.75", "0.95", "0.85", "0.45"],
        2,
        [M`P(A\cup B)=0.65+0.55-0.35=0.85`],
        "A немесе B ықтималдығы?"
      ),

      task(
        M`P(A)=\frac23,\ P(B)=\frac34`,
        ["5/12", "1/2", "3/4", "11/12"],
        3,
        [
          M`P(\overline A)=\frac13`,
          M`P(\overline B)=\frac14`,
          M`P(A\cup B)=1-\frac13\cdot\frac14=\frac{11}{12}`
        ],
        "A және B тәуелсіз. " +
        "Кемінде біреуінің орындалу ықтималдығы?"
      )
    ]
  }
];

// ================================================
// 5. КОМАНДАЛЫҚ ОЙЫН — 15 СҰРАҚ
// ================================================

const quiz = [
  {
    q: "Ықтималдықтың ең кіші мүмкін мәні?",
    a: ["−1", "0", "1", "2"],
    c: 1
  },
  {
    q: "Міндетті оқиғаның ықтималдығы?",
    a: ["1", "0", "0,5", "2"],
    c: 0
  },
  {
    q: "Әділ тиынның елтаңба жағы түсу ықтималдығы?",
    a: ["1/3", "1/4", "1/2", "1"],
    c: 2
  },
  {
    q: "Қарама-қарсы оқиға ықтималдығы қалай табылады?",
    a: ["P(A)+1", "2P(A)", "P(A)−1", "1−P(A)"],
    c: 3
  },
  {
    q: "Үйлесімсіз екі оқиға бір уақытта орындала ма?",
    a: ["Иә", "Жоқ", "Әрқашан", "Міндетті түрде"],
    c: 1
  },
  {
    q: "P(A)=0,2; P(B)=0,3. Үйлесімсіз оқиғалардың бірігуі?",
    a: ["0,5", "0,1", "0,06", "0,7"],
    c: 0
  },
  {
    q: "Үйлесімді оқиғаларды қосқанда не азайтылады?",
    a: [
      "1", "Оқиғалар саны",
      "Ортақ бөліктің ықтималдығы", "P(A)"
    ],
    c: 2
  },
  {
    q: "Тәуелсіз екі оқиғаның бірге орындалу ықтималдығы?",
    a: [
      "P(A)+P(B)", "P(A)−P(B)",
      "P(A)/P(B)", "P(A)·P(B)"
    ],
    c: 3
  },
  {
    q: "P(A)=0,8 болса, A оқиғасының болмау ықтималдығы?",
    a: ["0,8", "0,2", "1,8", "0,08"],
    c: 1
  },
  {
    q: "Әділ сүйектен нақты бір сан түсу ықтималдығы?",
    a: ["1/6", "1/2", "1/3", "1/4"],
    c: 0
  },
  {
    q: "Екі тәуелсіз тиын лақтыруда екі елтаңба түсуі?",
    a: ["1/2", "3/4", "1/4", "1/8"],
    c: 2
  },
  {
    q: "Шарларды қайтармай алғанда оқиғалар қандай болуы мүмкін?",
    a: [
      "Әрқашан үйлесімсіз", "Міндетті",
      "Әрқашан тәуелсіз", "Тәуелді"
    ],
    c: 3
  },
  {
    q: "P(A)=0,5; P(B)=0,4; қиылысуы 0,2. Бірігуі?",
    a: ["0,9", "0,7", "0,2", "0,1"],
    c: 1
  },
  {
    q: "Екі ойын сүйегін лақтырғанда тең мүмкіндікті нәтижелер саны?",
    a: ["36", "12", "6", "18"],
    c: 0
  },
  {
    q: "P(A)=1 болса, қарама-қарсы оқиғаның ықтималдығы?",
    a: ["1", "0,5", "0", "2"],
    c: 2
  }
];

// ================================================
// 6. ҮЙ ЖҰМЫСЫ
// ================================================

const homework = [
  {
    title: "1. Ықтималдықтарды қосу",

    text:
      "Әділ ойын сүйегі лақтырылады. " +
      "A — жұп сан, B — үшке еселік сан. " +
      "Қолайлы нәтижелерді атап, қиылысу мен " +
      "бірігу ықтималдықтарын табыңдар.",

    formulas: [
      M`A=\{2,4,6\}`,
      M`B=\{3,6\}`,
      M`P(A\cup B)=P(A)+P(B)-P(A\cap B)`
    ]
  },

  {
    title: "2. Ықтималдықтарды көбейту",

    text:
      "Қорапта 5 қызыл және 3 көк шар бар. " +
      "Қайтармай екі шар алынады. Алдымен " +
      "қызыл, кейін көк алу ықтималдығын " +
      "есептеп, неге шартты ықтималдық " +
      "қолданылғанын түсіндіріңдер.",

    formulas: [
      M`P(A)=\frac58`,
      M`P(B\mid A)=\frac37`,
      M`P(A\cap B)=\frac58\cdot\frac37=\frac{15}{56}`
    ]
  },

  {
    title: "3. Конспект және ауызша қорғау",

    text:
      "Ықтималдықтарды қосу және көбейту туралы " +
      "10 сөйлем жазыңдар. Үйлесімді, үйлесімсіз, " +
      "тәуелсіз және тәуелді оқиғаларға мысал " +
      "келтіріп, бір есептің шығарылуын " +
      "ауызша түсіндіріңдер.",

    formulas: [
      M`P(\overline A)=1-P(A)`,
      M`P(A\cap B)=P(A)P(B\mid A)`
    ]
  }
];

// ================================================
// 7. 37 СЛАЙДТЫ ҚҰРУ
// ================================================

const slides = [
  {
    type: "intro",
    title: "Кіріспе"
  }
];

theory.forEach((_, i) => {
  slides.push({
    type: "theory",
    index: i,
    title: `Түсіндірме ${i + 1}`
  });
});

notes.forEach((_, i) => {
  slides.push({
    type: "note",
    index: i,
    title: `Конспект ${i + 1}`
  });
});

levels.forEach((_, i) => {
  slides.push({
    type: "level",
    index: i,
    title: `${i + 1}-деңгей`
  });
});

quiz.forEach((_, i) => {
  slides.push({
    type: "game",
    index: i,
    title: `${i % 3 + 1}-топ — ${i + 1}-сұрақ`
  });
});

slides.push(
  {type: "homework", title: "Үй жұмысы"},
  {type: "finish", title: "Қорытынды"}
);

// ================================================
// 8. НЕГІЗГІ АЙНЫМАЛЫЛАР
// ================================================

let page = 0;

let individualScore = 0;
let teamScores = [0, 0, 0];

const levelAnswers = new Map();
const gameAnswers = new Map();
const openedSolutions = new Set();

const TOTAL_SECONDS = 4800;

let remainingSeconds = TOTAL_SECONDS;
let timerID = null;
let deadline = 0;

// ================================================
// 9. HTML ҚАУІПСІЗДІГІ
// ================================================

function safe(value) {
  return String(value).replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]
  );
}

// ================================================
// 10. ФОРМУЛА ҚҰРУ
// ================================================

function math(tex) {
  return `
    <div
      class="math"
      data-tex="${encodeURIComponent(String(tex))}">
    </div>
  `;
}

// ================================================
// 11. MATHJAX ФОРМУЛАЛАРЫ
// ================================================

let mathQueue = Promise.resolve();
let mathVersion = 0;

function drawFormulas() {
  const version = ++mathVersion;

  const elements = [
    ...$("content").querySelectorAll(".math[data-tex]")
  ].filter(el => !el.closest("[hidden]"));

  for (const el of elements) {
    el.textContent = decodeURIComponent(el.dataset.tex);
    el.classList.add("fallback");
  }

  mathQueue = mathQueue
    .then(async () => {
      if (!window.MathJax) return;

      await MathJax.startup.promise;

      if (
        typeof MathJax.tex2svgPromise !== "function"
      ) {
        return;
      }

      for (const el of elements) {
        if (version !== mathVersion) return;
        if (!el.isConnected) continue;

        const encoded =
          el.getAttribute("data-tex");

        if (!encoded) continue;

        const tex = decodeURIComponent(encoded);

        try {
          const svg =
            await MathJax.tex2svgPromise(
              tex,
              {display: true}
            );

          if (
            version !== mathVersion ||
            !el.isConnected
          ) {
            return;
          }

          el.replaceChildren(svg);
          el.classList.remove("fallback");
          el.removeAttribute("data-tex");

        } catch (error) {
          el.textContent = tex;

          console.error(
            "MathJax қатесі:",
            tex,
            error
          );
        }
      }
    })
    .catch(error => {
      console.error("MathJax:", error);
    });
}

// ================================================
// 12. КАРТОЧКАЛАР
// ================================================

function card(color, title, body) {
  return `
    <section class="card ${color}">
      <h3>${safe(title)}</h3>
      ${body}
    </section>
  `;
}

function stepsHTML(items) {
  return items.map((item, i) => `
    <div class="step">
      <strong>${i + 1}-қадам</strong>
      ${math(item)}
    </div>
  `).join("");
}

// ================================================
// 13. ШЕШУ ЖОЛЫН КӨРСЕТУ
// ================================================

function solutionHTML(
  id,
  steps,
  answer,
  answerIsMath = true
) {
  const opened = openedSolutions.has(id);

  return `
    <button class="action" data-toggle="${id}">
      ${opened
        ? "Шешу жолын жасыру"
        : "Шешу жолын көрсету"}
    </button>

    <div
      class="solution"
      id="${id}"
      ${opened ? "" : "hidden"}>

      ${stepsHTML(steps)}

      <h3>Дұрыс жауап</h3>

      ${answerIsMath
        ? math(answer)
        : `<p>${safe(answer)}</p>`}

    </div>
  `;
}

// ================================================
// 14. КІРІСПЕ СЛАЙДЫ
// ================================================

function introHTML() {
  return `
    <div class="slide">

      <div class="eyebrow">
        МАТЕМАТИКА • 1 КУРС • 80 МИНУТ
      </div>

      <h1 class="gradient">
        §24. ${safe(lesson.title)}
      </h1>

      ${card(
        "blue",
        "Сабақтың мақсаты",
        `<p>${safe(lesson.goal)}</p>`
      )}

      ${card(
        "gold",
        "Қосу ережесі",
        math(M`P(A\cup B)=P(A)+P(B)-P(A\cap B)`)
      )}

      ${card(
        "purple",
        "Көбейту ережесі",
        math(M`P(A\cap B)=P(A)P(B\mid A)`)
      )}

      ${card(
        "green",
        "Сабақ мазмұны",
        `<p>
          5 түсіндірме, 10 конспект, 20 өзіндік есеп,
          4 деңгейдегі 20 тапсырма, 15 командалық сұрақ,
          үй жұмысы және қорытынды.
        </p>`
      )}

      ${card(
        "blue",
        "80 минуттық жоспар",
        `<p>
          Кіріспе — 5 минут;
          теория — 20 минут;
          конспект — 15 минут;
          деңгейлік есептер — 20 минут;
          командалық ойын — 15 минут;
          үй жұмысы мен қорытынды — 5 минут.
        </p>`
      )}

    </div>
  `;
}

// ================================================
// 15. ТЕОРИЯ СЛАЙДЫ
// ================================================

function theoryHTML(i) {
  const t = theory[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        ТҮСІНДІРМЕ ${i + 1} / 5
      </div>

      <h2>${safe(t.title)}</h2>

      ${card(
        "blue",
        "Анықтама",
        `<p>${safe(t.definition)}</p>`
      )}

      ${card(
        "purple",
        "Толық түсіндірме",
        `<p>${safe(t.explain)}</p>`
      )}

      ${card(
        "green",
        "Негізгі ереже",
        `<p>${safe(t.rule)}</p>`
      )}

      ${card(
        "gold",
        "Формула",
        math(t.formula)
      )}

      ${card(
        "green",
        "Шығарылған мысал",
        stepsHTML(t.steps)
      )}

      ${card(
        "red",
        "Ескерту",
        `<p>${safe(t.warning)}</p>`
      )}

    </div>
  `;
}

// ================================================
// 16. КОНСПЕКТ СЛАЙДЫ
// ================================================

function noteHTML(i) {
  const n = notes[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        КОНСПЕКТ ${i + 1} / 10
      </div>

      <h2>${safe(n.title)}</h2>

      <div class="notebook">
        <h3>Дәптерге жазып алыңдар</h3>
        <p>${safe(n.text)}</p>
      </div>

      ${card(
        "gold",
        "Формула",
        math(n.formula)
      )}

      ${card(
        "green",
        "Шығарылған мысал",
        stepsHTML(n.example)
      )}

      <div class="eyebrow">
        ӨЗІНДІК ЖҰМЫС
      </div>

      <h2>Екі есеп</h2>

      ${n.self.map((t, j) => `
        <section class="self-task">

          <h3>${j + 1}-өзіндік есеп</h3>

          ${t.label
            ? `<p>${safe(t.label)}</p>`
            : ""}

          ${math(t.q)}

          <p>Алдымен дәптерге шығарыңдар.</p>

          ${solutionHTML(
            `self_${i}_${j}`,
            t.steps,
            t.answer
          )}

        </section>
      `).join("")}

    </div>
  `;
}

// ================================================
// 17. ДЕҢГЕЙЛІК ЕСЕПТЕР
// ================================================

function levelHTML(i) {
  const level = levels[i];

  return `
    <div class="slide">

      <div class="eyebrow">
        ДЕҢГЕЙ ${i + 1} / 4
      </div>

      <h2>${safe(level.name)}</h2>

      <div class="level-header">
        <span>5 есеп</span>
        <span>
          Дұрыс жауап: +${level.points} ұпай
        </span>
      </div>

      <p>
        Есепті дәптерге шығарып,
        бір дұрыс нұсқаны таңдаңдар.
      </p>

      <div class="level-grid">

        ${level.tasks.map((t, j) => {
          const key = `${i}_${j}`;

          const selected = levelAnswers.get(key);
          const done = selected !== undefined;

          return `
            <section class="level-task">

              <h3>${j + 1}-есеп</h3>

              ${t.label
                ? `<p>${safe(t.label)}</p>`
                : ""}

              ${math(t.q)}

              <div class="answers">

                ${t.options.map((option, k) => `
                  <button
                    data-task="${key}"
                    data-option="${k}"
                    class="${
                      done
                        ? k === t.correct
                          ? "correct"
                          : k === selected
                            ? "wrong"
                            : ""
                        : ""
                    }"
                    ${done ? "disabled" : ""}>

                    ${"ABCD"[k]}. ${safe(option)}

                  </button>
                `).join("")}

              </div>

              <p class="feedback ${
                done && selected === t.correct
                  ? "correct"
                  : ""
              }">

                ${!done
                  ? "Дұрыс жауапты таңдаңдар."
                  : selected === t.correct
                    ? `Дұрыс! +${level.points} ұпай`
                    : "Қате. Дұрыс жауап белгіленді."}

              </p>

              ${solutionHTML(
                `level_${key}`,
                t.steps,
                t.options[t.correct],
                false
              )}

            </section>
          `;
        }).join("")}

      </div>
    </div>
  `;
}

// ================================================
// 18. КОМАНДАЛЫҚ ОЙЫН
// ================================================

function gameHTML(i) {
  const q = quiz[i];

  const team = i % 3;
  const selected = gameAnswers.get(i);
  const done = selected !== undefined;

  return `
    <div class="slide">

      <div class="eyebrow">
        ТОПТЫҚ ОЙЫН ${i + 1} / 15
      </div>

      <h2>${team + 1}-топ жауап береді</h2>

      <div class="scores">

        ${teamScores.map((score, j) => `
          <div class="team ${
            team === j ? "current" : ""
          }">

            ${j + 1}-топ

            <strong>${score}</strong>
          </div>
        `).join("")}

      </div>

      ${card(
        "gold",
        `${i + 1}-сұрақ`,
        `
          <p>${safe(q.q)}</p>

          <div class="answers">

            ${q.a.map((answer, k) => `
              <button
                data-choice="${k}"
                class="${
                  done
                    ? k === q.c
                      ? "correct"
                      : k === selected
                        ? "wrong"
                        : ""
                    : ""
                }"
                ${done ? "disabled" : ""}>

                ${"ABCD"[k]}. ${safe(answer)}

              </button>
            `).join("")}

          </div>

          <p>
            ${!done
              ? "Жауапты таңдаңдар."
              : selected === q.c
                ? "Дұрыс! +10 ұпай."
                : "Дұрыс жауап: " + safe(q.a[q.c])}
          </p>
        `
      )}

      ${card(
        "blue",
        "Ойын ережесі",
        `<p>
          1-топ → 2-топ → 3-топ.
          Дұрыс жауапқа 10 ұпай.
          Жауап берген соң «Келесі» батырмасын басыңдар.
        </p>`
      )}

    </div>
  `;
}

// ================================================
// 19. ҮЙ ЖҰМЫСЫ
// ================================================

function homeworkHTML() {
  return `
    <div class="slide">

      <div class="eyebrow">
        ҮЙ ТАПСЫРМАСЫ
      </div>

      <h2>Үй жұмысы</h2>

      ${homework.map((h, i) =>
        card(
          ["blue", "gold", "green"][i],
          h.title,
          `<p>${safe(h.text)}</p>` +
          h.formulas.map(math).join("")
        )
      ).join("")}

    </div>
  `;
}

// ================================================
// 20. ҚОРЫТЫНДЫ
// ================================================

function finishHTML() {
  const finished =
    gameAnswers.size === quiz.length;

  const max = Math.max(...teamScores);

  const winners = teamScores
    .map((score, i) =>
      score === max
        ? `${i + 1}-топ`
        : null
    )
    .filter(Boolean);

  const correct = [...levelAnswers]
    .filter(([key, value]) => {
      const [i, j] = key.split("_").map(Number);

      return value === levels[i].tasks[j].correct;
    }).length;

  return `
    <div class="slide">

      <div class="eyebrow">
        САБАҚ ҚОРЫТЫНДЫСЫ
      </div>

      <h1 class="gradient">Сабақ аяқталды!</h1>

      <div class="scores">

        ${teamScores.map((score, i) => `
          <div class="team">

            ${i + 1}-топ

            <strong>${score}</strong>
          </div>
        `).join("")}

      </div>

      ${card(
        "green",
        "Топтық ойын",
        `
          <p>
            Жауап берілген сұрақ:
            ${gameAnswers.size}/15
          </p>

          <p>
            ${finished
              ? winners.join(", ") +
                (winners.length === 1
                  ? " — жеңімпаз!"
                  : " — тең ұпай!")
              : "Ойын толық аяқталған жоқ."}
          </p>
        `
      )}

      ${card(
        "blue",
        "Деңгейлік тапсырмалар",
        `
          <p>
            Жауап берілген есептер:
            ${levelAnswers.size}/20
          </p>

          <p>Дұрыс: ${correct}/20</p>

          <p>Жеке ұпай: ${individualScore}</p>
        `
      )}

      ${card(
        "gold",
        "Бүгін не үйрендік?",
        `<p>
          Кездейсоқ оқиғалардың ықтималдығын есептедік.
          Қарама-қарсы, үйлесімді, үйлесімсіз,
          тәуелсіз және тәуелді оқиғаларды ажыраттық.
          Қосу мен көбейту формулаларын қолдандық.
        </p>`
      )}

      <h2>Сау болыңыздар!</h2>

    </div>
  `;
}

// ================================================
// 21. ҰПАЙДЫ ЖАҢАРТУ
// ================================================

function updateScore() {
  $("totalScore").textContent =
    individualScore +
    teamScores.reduce((sum, value) => sum + value, 0);
}

// ================================================
// 22. БЕТТІ КӨРСЕТУ
// ================================================

function render() {
  const s = slides[page];

  mathVersion++;

  const views = {
    intro: () => introHTML(),
    theory: () => theoryHTML(s.index),
    note: () => noteHTML(s.index),
    level: () => levelHTML(s.index),
    game: () => gameHTML(s.index),
    homework: () => homeworkHTML(),
    finish: () => finishHTML()
  };

  $("content").innerHTML = views[s.type]();
  $("content").scrollTop = 0;

  $("pageCounter").textContent =
    `${page + 1} / ${slides.length}`;

  $("pageTitle").textContent = s.title;

  $("pageProgress").style.width =
    `${(page + 1) / slides.length * 100}%`;

  $("prevPage").disabled = page === 0;

  $("nextPage").disabled =
    page === slides.length - 1;

  document.querySelectorAll("[data-section]")
    .forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.section === s.type
      );
    });

  updateScore();
  drawFormulas();
}

// ================================================
// 23. КЕЛЕСІ / АРТҚА
// ================================================

$("nextPage").addEventListener("click", () => {
  if (page < slides.length - 1) {
    page++;
    render();
  }
});

$("prevPage").addEventListener("click", () => {
  if (page > 0) {
    page--;
    render();
  }
});

// ================================================
// 24. БӨЛІМДЕР АРАСЫНДА АУЫСУ
// ================================================

document.querySelectorAll("[data-section]")
  .forEach(button => {
    button.addEventListener("click", () => {
      const index = slides.findIndex(
        s => s.type === button.dataset.section
      );

      if (index >= 0) {
        page = index;
        render();
      }
    });
  });

// ================================================
// 25. ЕСЕПТЕР МЕН ОЙЫН ЖАУАПТАРЫ
// ================================================

$("content").addEventListener("click", event => {
  // Шешу жолын көрсету

  const toggle =
    event.target.closest("[data-toggle]");

  if (toggle) {
    const id = toggle.dataset.toggle;

    if (openedSolutions.has(id)) {
      openedSolutions.delete(id);
    } else {
      openedSolutions.add(id);
    }

    const element = $(id);

    if (element) {
      element.hidden =
        !openedSolutions.has(id);

      toggle.textContent = element.hidden
        ? "Шешу жолын көрсету"
        : "Шешу жолын жасыру";

      if (!element.hidden) {
        drawFormulas();
      }
    }

    return;
  }

  // Деңгейлік жауап

  const button =
    event.target.closest("[data-task]");

  if (button) {
    const key = button.dataset.task;

    if (levelAnswers.has(key)) return;

    const [i, j] =
      key.split("_").map(Number);

    const selected =
      Number(button.dataset.option);

    levelAnswers.set(key, selected);

    if (
      selected === levels[i].tasks[j].correct
    ) {
      individualScore += levels[i].points;
    }

    render();
    return;
  }

  // Топтық ойын

  const choice =
    event.target.closest("[data-choice]");

  if (choice) {
    const s = slides[page];

    if (s.type !== "game") return;
    if (gameAnswers.has(s.index)) return;

    const answer =
      Number(choice.dataset.choice);

    gameAnswers.set(s.index, answer);

    if (answer === quiz[s.index].c) {
      teamScores[s.index % 3] += 10;
    }

    render();
  }
});

// ================================================
// 26. ОЙЫНДЫ ЖАҢАРТУ
// ================================================

$("resetGame").addEventListener("click", () => {
  gameAnswers.clear();
  teamScores = [0, 0, 0];
  render();
});

// ================================================
// 27. ТОЛЫҚ ЭКРАН
// ================================================

$("fullscreenBtn").addEventListener(
  "click",
  async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.warn("Толық экран:", error);
    }
  }
);

// ================================================
// 28. 80 МИНУТТЫҚ ТАЙМЕР
// ================================================

function formatTime(seconds) {
  return (
    String(Math.floor(seconds / 60))
      .padStart(2, "0") +
    ":" +
    String(seconds % 60).padStart(2, "0")
  );
}

function updateTimer() {
  $("remaining").textContent =
    formatTime(remainingSeconds);

  $("elapsed").textContent =
    formatTime(TOTAL_SECONDS - remainingSeconds);

  $("timeProgress").style.width =
    `${(TOTAL_SECONDS - remainingSeconds) /
      TOTAL_SECONDS * 100}%`;
}

function pauseTimer() {
  if (timerID !== null) {
    remainingSeconds = Math.max(
      0,
      Math.ceil((deadline - Date.now()) / 1000)
    );

    clearInterval(timerID);
    timerID = null;

    updateTimer();
  }
}

function startTimer() {
  if (
    timerID !== null ||
    remainingSeconds <= 0
  ) {
    return;
  }

  deadline =
    Date.now() + remainingSeconds * 1000;

  timerID = setInterval(() => {
    remainingSeconds = Math.max(
      0,
      Math.ceil((deadline - Date.now()) / 1000)
    );

    updateTimer();

    if (remainingSeconds === 0) {
      clearInterval(timerID);
      timerID = null;
    }
  }, 250);
}

function resetTimer() {
  if (timerID !== null) {
    clearInterval(timerID);
  }

  timerID = null;
  remainingSeconds = TOTAL_SECONDS;

  updateTimer();
}

$("timerStart").addEventListener(
  "click", startTimer
);

$("timerPause").addEventListener(
  "click", pauseTimer
);

$("timerReset").addEventListener(
  "click", resetTimer
);

// ================================================
// 29. АЛМАТЫ УАҚЫТЫ
// ================================================

function updateClock() {
  $("clock").textContent =
    new Intl.DateTimeFormat("kk-KZ", {
      timeZone: "Asia/Almaty",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(new Date());
}

updateClock();
setInterval(updateClock, 1000);

// ================================================
// 30. ЕКІ КАЛЬКУЛЯТОР
// ================================================

const calcValues = {
  basic: "",
  science: ""
};

const calcKeys = {
  basic: [
    "C", "⌫", "(", ")",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ],

  science: [
    "C", "⌫", "(", ")",
    "sin", "cos", "tan", "ctg",
    "√", "∛", "x²", "xʸ",
    "log", "ln", "π", "e",
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "%", "0", ".", "+",
    "="
  ]
};

const calcMap = {
  "×": "*",
  "÷": "/",
  "−": "-",
  "sin": "sin(",
  "cos": "cos(",
  "tan": "tan(",
  "ctg": "ctg(",
  "√": "sqrt(",
  "∛": "cbrt(",
  "log": "log(",
  "ln": "ln(",
  "π": "pi",
  "x²": "^2",
  "xʸ": "^"
};

// ================================================
// 31. КАЛЬКУЛЯТОРДЫ ҚҰРУ
// ================================================

function createCalculator(type) {
  const grid = $("keys-" + type);

  grid.replaceChildren();

  calcKeys[type].forEach(key => {
    const button =
      document.createElement("button");

    button.type = "button";
    button.textContent = key;

    if (key === "C") {
      button.classList.add("clear");
    }

    if (key === "=") {
      button.classList.add("equal");
    }

    if ([
      "sin", "cos", "tan", "ctg", "log", "ln"
    ].includes(key)) {
      button.classList.add("trig");
    }

    if ([
      "×", "÷", "−", "+",
      "√", "∛", "x²", "xʸ"
    ].includes(key)) {
      button.classList.add("op");
    }

    button.addEventListener("click", () => {
      pressCalculator(type, key);
    });

    grid.appendChild(button);
  });
}

// ================================================
// 32. КАЛЬКУЛЯТОР БАТЫРМАЛАРЫ
// ================================================

function pressCalculator(type, key) {
  let value = calcValues[type];

  if (key === "C") {
    value = "";

  } else if (key === "⌫") {
    value = value === "Қате"
      ? ""
      : value.slice(0, -1);

  } else if (key === "=") {
    try {
      value = String(
        Number(calculate(value).toPrecision(12))
      );
    } catch (error) {
      value = "Қате";
    }

  } else {
    if (value === "Қате") {
      value = "";
    }

    value += calcMap[key] ?? key;
  }

  calcValues[type] = value;

  const display = $("display-" + type);

  display.textContent = value || "0";

  display.scrollLeft =
    display.scrollWidth;
}

// ================================================
// 33. ҚАУІПСІЗ ЕСЕПТЕУ ЖҮЙЕСІ
// ================================================

function calculate(input) {
  const source = String(input)
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/−/g, "-")
    .replace(/×/g, "*")
    .replace(/÷/g, "/");

  let pos = 0;

  const rad = x =>
    x * Math.PI / 180;

  const funcs = {
    sin: x => Math.sin(rad(x)),
    cos: x => Math.cos(rad(x)),

    tan: x => {
      if (
        Math.abs(Math.cos(rad(x))) < 1e-12
      ) {
        throw Error("tan");
      }

      return Math.tan(rad(x));
    },

    ctg: x => {
      if (
        Math.abs(Math.sin(rad(x))) < 1e-12
      ) {
        throw Error("ctg");
      }

      return Math.cos(rad(x)) /
        Math.sin(rad(x));
    },

    sqrt: Math.sqrt,
    cbrt: Math.cbrt,
    log: Math.log10,
    ln: Math.log
  };

  function take(char) {
    if (source[pos] === char) {
      pos++;
      return true;
    }
    return false;
  }

  function atom() {
    if (take("(")) {
      const result = expression();

      if (!take(")")) {
        throw Error("Жақша");
      }

      return result;
    }

    const rest = source.slice(pos);

    const number = rest.match(
      /^(?:\d+\.?\d*|\.\d+)/
    );

    if (number) {
      pos += number[0].length;

      return Number(number[0]);
    }

    for (const name of Object.keys(funcs)) {
      if (rest.startsWith(name + "(")) {
        pos += name.length + 1;

        const argument = expression();

        if (!take(")")) {
          throw Error("Жақша");
        }

        const result =
          funcs[name](argument);

        if (!Number.isFinite(result)) {
          throw Error("Анықталмаған");
        }

        return result;
      }
    }

    if (rest.startsWith("pi")) {
      pos += 2;
      return Math.PI;
    }

    if (rest.startsWith("e")) {
      pos++;
      return Math.E;
    }

    throw Error("Өрнек");
  }

  function postfix() {
    let value = atom();

    while (take("%")) {
      value /= 100;
    }

    return value;
  }

  function unary() {
    if (take("+")) return unary();
    if (take("-")) return -unary();

    return power();
  }

  function power() {
    let value = postfix();

    if (take("^")) {
      value = Math.pow(
        value,
        unary()
      );
    }

    return value;
  }

  function term() {
    let value = unary();

    while (true) {
      if (take("*")) {
        value *= unary();

      } else if (take("/")) {
        const divisor = unary();

        if (divisor === 0) {
          throw Error("Нөлге бөлу");
        }

        value /= divisor;

      } else {
        break;
      }
    }

    return value;
  }

  function expression() {
    let value = term();

    while (true) {
      if (take("+")) {
        value += term();

      } else if (take("-")) {
        value -= term();

      } else {
        break;
      }
    }

    return value;
  }

  if (!source) {
    throw Error("Бос өрнек");
  }

  const result = expression();

  if (
    pos !== source.length ||
    !Number.isFinite(result)
  ) {
    throw Error("Есептеу қатесі");
  }

  return Math.abs(result) < 1e-12
    ? 0
    : result;
}

// ================================================
// 34. КАЛЬКУЛЯТОРДЫ АШУ / ЖАБУ
// ================================================

function toggleCalculator(type) {
  const element = $("calc-" + type);

  const opening =
    !element.classList.contains("visible");

  element.classList.toggle(
    "visible",
    opening
  );

  if (opening) {
    const rect =
      element.getBoundingClientRect();

    element.style.left = Math.max(
      0,
      Math.min(
        innerWidth - element.offsetWidth,
        rect.left
      )
    ) + "px";

    element.style.top = Math.max(
      0,
      Math.min(
        innerHeight - element.offsetHeight,
        rect.top
      )
    ) + "px";
  }
}

$("basicOpen").addEventListener(
  "click",
  () => toggleCalculator("basic")
);

$("scienceOpen").addEventListener(
  "click",
  () => toggleCalculator("science")
);

document.querySelectorAll("[data-close]")
  .forEach(button => {
    button.addEventListener("click", () => {
      $("calc-" + button.dataset.close)
        .classList.remove("visible");
    });
  });

// ================================================
// 35. КАЛЬКУЛЯТОРДЫ ЖЫЛЖЫТУ
// ================================================

function makeDraggable(element) {
  const head =
    element.querySelector(".calc-head");

  let drag = null;

  head.addEventListener(
    "pointerdown",
    event => {
      if (event.target.closest("button")) {
        return;
      }

      if (
        event.pointerType === "mouse" &&
        event.button !== 0
      ) {
        return;
      }

      const rect =
        element.getBoundingClientRect();

      drag = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        left: rect.left,
        top: rect.top
      };

      head.setPointerCapture(
        event.pointerId
      );
    }
  );

  head.addEventListener(
    "pointermove",
    event => {
      if (
        !drag ||
        drag.id !== event.pointerId
      ) {
        return;
      }

      const maxX = Math.max(
        0,
        innerWidth - element.offsetWidth
      );

      const maxY = Math.max(
        0,
        innerHeight - element.offsetHeight
      );

      element.style.left = Math.max(
        0,
        Math.min(
          maxX,
          drag.left +
          event.clientX -
          drag.x
        )
      ) + "px";

      element.style.top = Math.max(
        0,
        Math.min(
          maxY,
          drag.top +
          event.clientY -
          drag.y
        )
      ) + "px";
    }
  );

  head.addEventListener(
    "pointerup",
    () => drag = null
  );

  head.addEventListener(
    "pointercancel",
    () => drag = null
  );
}

// ================================================
// 36. ҚАТЕЛЕРДІ ТЕКСЕРУ
// ================================================

function check() {
  const assert = (condition, message) => {
    if (!condition) {
      throw Error(message);
    }
  };

  assert(
    theory.length === 5,
    "Теория саны"
  );

  assert(
    notes.length === 10,
    "Конспект саны"
  );

  assert(
    notes.every(n => n.self.length === 2),
    "Өзіндік есеп саны"
  );

  assert(
    levels.length === 4 &&
    levels.every(l => l.tasks.length === 5),
    "Деңгей саны"
  );

  assert(
    quiz.length === 15,
    "Ойын саны"
  );

  assert(
    slides.length === 37,
    "Слайд саны"
  );

  levels.forEach((level, i) => {
    level.tasks.forEach((t, j) => {
      assert(
        t.options.length === 4 &&
        Number.isInteger(t.correct) &&
        t.correct >= 0 &&
        t.correct < 4,
        `Есеп ${i + 1}.${j + 1}`
      );
    });
  });

  quiz.forEach((q, i) => {
    assert(
      q.a.length === 4 &&
      q.c >= 0 &&
      q.c < 4,
      `Ойын ${i + 1}`
    );
  });

  // Барлық формуланы жинау

  const formulas = [
    ...theory.flatMap(t => [
      t.formula,
      ...t.steps
    ]),

    ...notes.flatMap(n => [
      n.formula,
      ...n.example,

      ...n.self.flatMap(s => [
        s.q,
        ...s.steps,
        s.answer
      ])
    ]),

    ...levels.flatMap(l =>
      l.tasks.flatMap(t => [
        t.q,
        ...t.steps
      ])
    ),

    ...homework.flatMap(h =>
      h.formulas
    )
  ];

  // Қазақша мәтін MathJax-тың
  // ішінде болмауы керек.

  assert(
    formulas.every(f =>
      typeof f === "string" &&
      !/\\text\s*\{|\\boxed/.test(f)
    ),
    "Формула ішінде қазақша мәтін немесе boxed бар"
  );

  // Калькулятор тексерулері

  assert(
    calculate("2^5") === 32,
    "Дәреже қатесі"
  );

  assert(
    calculate("8/4") === 2,
    "Бөлу қатесі"
  );

  assert(
    calculate("log(100)") === 2,
    "Логарифм қатесі"
  );

  assert(
    calculate("ln(e)") === 1,
    "Натурал логарифм қатесі"
  );

  assert(
    Math.abs(
      calculate("sin(30)") - 0.5
    ) < 1e-10,
    "Синус қатесі"
  );

  // IV деңгейдің маңызды жауаптары

  assert(
    levels[3].tasks[1].options[
      levels[3].tasks[1].correct
    ] === "11/36",
    "IV деңгей, 2-есеп"
  );

  assert(
    levels[3].tasks[2].options[
      levels[3].tasks[2].correct
    ] === "2/7",
    "IV деңгей, 3-есеп"
  );

  console.log(
    "§24: құрылымдық және математикалық сынақтар өтті."
  );
}

// ================================================
// 37. САЙТТЫ ІСКЕ ҚОСУ
// ================================================

check();

createCalculator("basic");
createCalculator("science");

makeDraggable($("calc-basic"));
makeDraggable($("calc-science"));

updateTimer();
render();
