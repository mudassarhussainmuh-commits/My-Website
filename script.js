const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const languageButtons = document.querySelectorAll(".language-button");
const navLinks = document.querySelectorAll(".nav-links a");
const pageSections = document.querySelectorAll("main section[id]");
const savedTheme = localStorage.getItem("theme");
const savedLanguage = localStorage.getItem("language") || "en";
const birthDate = new Date(2011, 11, 11);
const gradeStartDate = new Date(2025, 8, 1);
const startingGrade = 8;
let activeLanguage = savedLanguage;

const translations = {
  en: {
    brand: "Mudassar's Website",
    navAbout: "About",
    navSkills: "Skills",
    navHobbies: "Hobbies",
    navExperience: "Experience",
    navContact: "Contact",
    heroEyebrow: "CV / Personal Website",
    heroTitle: "Hi, I'm Muhammad Mudassar Hussain.",
    heroText: "I am a student from Neuwied, Germany who enjoys coding, learning new things, and building creative projects for the web.",
    contactMe: "Contact Me",
    viewCv: "View CV",
    profileSubtitle: "Student / Developer / Creative Builder",
    ageLabel: "Age",
    ageLine: "{age} years old",
    birthdayLabel: "Birthday",
    birthdayValue: "11 December 2011",
    locationLabel: "Location",
    locationValue: "Neuwied, Germany",
    gradeLabel: "Grade",
    gradeLine: "Grade {grade}",
    statusLabel: "Status",
    statusValue: "Learning and improving",
    aboutEyebrow: "About Me",
    aboutTitle: "A quick introduction",
    aboutText: "My name is Muhammad Mudassar Hussain. I am {age} years old. I was born in a little village in Pakistan, and now I live in Neuwied, Germany. I am currently in grade {grade} at Werner Weisenberg Gymnasium. I like technology, sports, and creative work. I am learning to build websites and projects with code, and I want my portfolio to show my progress clearly and professionally.",
    skillsEyebrow: "Skills",
    skillsTitle: "What I can work with",
    frontendTitle: "Frontend",
    frontendText: "HTML, CSS, JavaScript, responsive layouts, clean UI design.",
    programmingTitle: "Programming",
    programmingText: "Python, C++, JavaScript, problem solving, and building small projects.",
    strengthsTitle: "Strengths",
    strengthsText: "Fast learner, consistent, creative thinking, teamwork.",
    hobbiesEyebrow: "Hobbies",
    hobbiesTitle: "What I enjoy",
    soccerTitle: "Soccer",
    soccerText: "I like playing soccer because it is fast, active, and needs teamwork.",
    boxingTitle: "Boxing",
    boxingText: "Boxing helps me stay disciplined, focused, and physically strong.",
    minecraftTitle: "Minecraft",
    minecraftText: "Sometimes I play Minecraft because I enjoy building and being creative.",
    cvEyebrow: "CV",
    cvTitle: "Education & experience",
    nowLabel: "Now",
    timelineGradeLine: "Currently in grade {grade}, learning school subjects and improving my coding skills.",
    webPracticeTitle: "Web development practice",
    webPracticeText: "Built and improved websites using HTML, CSS, and JavaScript.",
    pythonTitle: "Python learning",
    pythonText: "Started learning programming concepts and writing code with Python.",
    contactEyebrow: "Contact",
    contactTitle: "Let's talk.",
    contactText: "You can contact me by email for school, coding, projects, or opportunities.",
    footerLine: "Copyright {year} Muhammad Mudassar Hussain. Built with HTML, CSS, and JavaScript."
  },
  de: {
    brand: "Mudassars Website",
    navAbout: "Über mich",
    navSkills: "Fähigkeiten",
    navHobbies: "Hobbys",
    navExperience: "Erfahrung",
    navContact: "Kontakt",
    heroEyebrow: "Lebenslauf / Persönliche Website",
    heroTitle: "Hallo, ich bin Muhammad Mudassar Hussain.",
    heroText: "Ich bin Schüler aus Neuwied, Deutschland. Ich programmiere gern, lerne neue Dinge und baue kreative Projekte für das Web.",
    contactMe: "Kontakt",
    viewCv: "Lebenslauf",
    profileSubtitle: "Schüler / Entwickler / Kreativer Builder",
    ageLabel: "Alter",
    ageLine: "{age} Jahre alt",
    birthdayLabel: "Geburtstag",
    birthdayValue: "11. Dezember 2011",
    locationLabel: "Wohnort",
    locationValue: "Neuwied, Deutschland",
    gradeLabel: "Klasse",
    gradeLine: "Klasse {grade}",
    statusLabel: "Status",
    statusValue: "Lerne und verbessere mich",
    aboutEyebrow: "Über mich",
    aboutTitle: "Eine kurze Vorstellung",
    aboutText: "Mein Name ist Muhammad Mudassar Hussain. Ich bin {age} Jahre alt. Ich wurde in einem kleinen Dorf in Pakistan geboren und lebe jetzt in Neuwied, Deutschland. Ich bin aktuell in Klasse {grade} am Werner Weisenberg Gymnasium. Ich mag Technik, Sport und kreative Arbeit. Ich lerne, Websites und Projekte mit Code zu bauen, und möchte mit meinem Portfolio meinen Fortschritt klar und professionell zeigen.",
    skillsEyebrow: "Fähigkeiten",
    skillsTitle: "Womit ich arbeiten kann",
    frontendTitle: "Frontend",
    frontendText: "HTML, CSS, JavaScript, responsive Layouts und sauberes UI-Design.",
    programmingTitle: "Programmierung",
    programmingText: "Python, C++, JavaScript, Problemlösung und kleine Projekte bauen.",
    strengthsTitle: "Stärken",
    strengthsText: "Schnelles Lernen, Zuverlässigkeit, kreatives Denken und Teamwork.",
    hobbiesEyebrow: "Hobbys",
    hobbiesTitle: "Was ich gerne mache",
    soccerTitle: "Fußball",
    soccerText: "Ich spiele gern Fußball, weil es schnell und aktiv ist und Teamwork braucht.",
    boxingTitle: "Boxen",
    boxingText: "Boxen hilft mir, diszipliniert, konzentriert und körperlich stark zu bleiben.",
    minecraftTitle: "Minecraft",
    minecraftText: "Manchmal spiele ich Minecraft, weil ich Bauen und Kreativität mag.",
    cvEyebrow: "Lebenslauf",
    cvTitle: "Schule & Erfahrung",
    nowLabel: "Jetzt",
    timelineGradeLine: "Aktuell in Klasse {grade}, lerne Schulfächer und verbessere meine Coding-Skills.",
    webPracticeTitle: "Webentwicklung üben",
    webPracticeText: "Websites mit HTML, CSS und JavaScript gebaut und verbessert.",
    pythonTitle: "Python lernen",
    pythonText: "Angefangen, Programmierkonzepte zu lernen und Code mit Python zu schreiben.",
    contactEyebrow: "Kontakt",
    contactTitle: "Lass uns reden.",
    contactText: "Du kannst mir eine E-Mail für Schule, Coding, Projekte oder Möglichkeiten schreiben.",
    footerLine: "Copyright {year} Muhammad Mudassar Hussain. Gebaut mit HTML, CSS und JavaScript."
  },
  ur: {
    brand: "مدثر کی ویب سائٹ",
    navAbout: "میرے بارے میں",
    navSkills: "مہارتیں",
    navHobbies: "مشاغل",
    navExperience: "تعلیم",
    navContact: "رابطہ",
    heroEyebrow: "سی وی / ذاتی ویب سائٹ",
    heroTitle: "السلام علیکم، میں محمد مدثر حسین ہوں۔",
    heroText: "میں نیووید، جرمنی کا طالب علم ہوں۔ مجھے کوڈنگ، نئی چیزیں سیکھنا، اور ویب کے لیے تخلیقی پراجیکٹس بنانا پسند ہے۔",
    contactMe: "رابطہ کریں",
    viewCv: "سی وی دیکھیں",
    profileSubtitle: "طالب علم / ڈیولپر / تخلیقی بلڈر",
    ageLabel: "عمر",
    ageLine: "{age} سال",
    birthdayLabel: "سالگرہ",
    birthdayValue: "11 دسمبر 2011",
    locationLabel: "مقام",
    locationValue: "نیووید، جرمنی",
    gradeLabel: "کلاس",
    gradeLine: "کلاس {grade}",
    statusLabel: "حالت",
    statusValue: "سیکھ رہا ہوں اور بہتر ہو رہا ہوں",
    aboutEyebrow: "میرے بارے میں",
    aboutTitle: "مختصر تعارف",
    aboutText: "میرا نام محمد مدثر حسین ہے۔ میری عمر {age} سال ہے۔ میں پاکستان کے ایک چھوٹے سے گاؤں میں پیدا ہوا، اور اب نیووید، جرمنی میں رہتا ہوں۔ میں اس وقت Werner Weisenberg Gymnasium میں کلاس {grade} میں ہوں۔ مجھے ٹیکنالوجی، کھیل، اور تخلیقی کام پسند ہیں۔ میں کوڈ کے ساتھ ویب سائٹس اور پراجیکٹس بنانا سیکھ رہا ہوں، اور میں چاہتا ہوں کہ میرا پورٹ فولیو میری ترقی کو صاف اور پروفیشنل انداز میں دکھائے۔",
    skillsEyebrow: "مہارتیں",
    skillsTitle: "میں کن چیزوں کے ساتھ کام کر سکتا ہوں",
    frontendTitle: "فرنٹ اینڈ",
    frontendText: "HTML، CSS، JavaScript، responsive layouts، اور صاف UI design۔",
    programmingTitle: "پروگرامنگ",
    programmingText: "Python، C++، JavaScript، مسئلے حل کرنا، اور چھوٹے پراجیکٹس بنانا۔",
    strengthsTitle: "خوبیاں",
    strengthsText: "جلدی سیکھنا، مستقل مزاجی، تخلیقی سوچ، اور ٹیم ورک۔",
    hobbiesEyebrow: "مشاغل",
    hobbiesTitle: "مجھے کیا پسند ہے",
    soccerTitle: "فٹ بال",
    soccerText: "مجھے فٹ بال کھیلنا پسند ہے کیونکہ یہ تیز، active، اور teamwork والا کھیل ہے۔",
    boxingTitle: "باکسنگ",
    boxingText: "باکسنگ مجھے disciplined، focused، اور physically strong رہنے میں مدد دیتی ہے۔",
    minecraftTitle: "Minecraft",
    minecraftText: "کبھی کبھی میں Minecraft کھیلتا ہوں کیونکہ مجھے building اور creativity پسند ہے۔",
    cvEyebrow: "سی وی",
    cvTitle: "تعلیم اور تجربہ",
    nowLabel: "ابھی",
    timelineGradeLine: "اس وقت کلاس {grade} میں ہوں، school subjects سیکھ رہا ہوں اور اپنی coding skills بہتر کر رہا ہوں۔",
    webPracticeTitle: "ویب ڈیولپمنٹ پریکٹس",
    webPracticeText: "HTML، CSS، اور JavaScript کے ساتھ ویب سائٹس بنائیں اور بہتر کیں۔",
    pythonTitle: "Python سیکھنا",
    pythonText: "Programming concepts سیکھنا شروع کیا اور Python کے ساتھ code لکھا۔",
    contactEyebrow: "رابطہ",
    contactTitle: "بات کرتے ہیں۔",
    contactText: "آپ مجھے school، coding، projects، یا opportunities کے لیے email کر سکتے ہیں۔",
    footerLine: "Copyright {year} محمد مدثر حسین۔ HTML، CSS، اور JavaScript سے بنایا گیا۔"
  }
};

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeIcon.textContent = "L";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  themeIcon.textContent = isDark ? "L" : "D";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

function updateActiveNav() {
  let currentSection = pageSections[0]?.id;

  pageSections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;

    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("resize", updateActiveNav);

function getAge(today) {
  let age = today.getFullYear() - birthDate.getFullYear();
  const birthdayThisYear = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  if (today < birthdayThisYear) {
    age -= 1;
  }

  return age;
}

function getCurrentGrade(today) {
  let grade = startingGrade + today.getFullYear() - gradeStartDate.getFullYear();
  const schoolYearStart = new Date(today.getFullYear(), gradeStartDate.getMonth(), gradeStartDate.getDate());

  if (today < schoolYearStart) {
    grade -= 1;
  }

  return Math.min(13, Math.max(startingGrade, grade));
}

function updateLiveDetails() {
  const today = new Date();
  const age = getAge(today);
  const grade = getCurrentGrade(today);
  const language = translations[activeLanguage];
  const year = new Date().getFullYear();

  document.querySelector("[data-live-age-line]").innerHTML = language.ageLine.replace("{age}", `<span id="live-age">${age}</span>`);
  document.querySelector("[data-live-grade-line]").innerHTML = language.gradeLine.replace("{grade}", `<span id="live-grade">${grade}</span>`);
  document.querySelector("[data-about-text]").innerHTML = language.aboutText
    .replace("{age}", `<span id="about-age">${age}</span>`)
    .replace("{grade}", `<span id="about-grade">${grade}</span>`);
  document.querySelector("[data-timeline-grade-line]").innerHTML = language.timelineGradeLine.replace("{grade}", `<span id="timeline-grade">${grade}</span>`);
  document.querySelector("[data-footer-line]").innerHTML = language.footerLine.replace("{year}", `<span id="current-year">${year}</span>`);
}

function setLanguage(languageCode) {
  activeLanguage = translations[languageCode] ? languageCode : "en";
  const language = translations[activeLanguage];

  document.documentElement.lang = activeLanguage;
  document.documentElement.dir = activeLanguage === "ur" ? "rtl" : "ltr";
  document.title = language.brand;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = language[element.dataset.i18n];
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === activeLanguage);
  });

  localStorage.setItem("language", activeLanguage);
  updateLiveDetails();
}

function updateYearOnly() {
  const yearTarget = document.querySelector("#current-year");

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }
}

setLanguage(savedLanguage);
updateYearOnly();
updateActiveNav();
