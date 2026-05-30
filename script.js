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
    navGames: "Games",
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
    gamesEyebrow: "Games",
    gamesTitle: "Play games made by me",
    planeGameTitle: "Sky Defender",
    planeGameText: "Shoot enemies and protect your plane.",
    dashGameTitle: "Geometry Rush",
    dashGameText: "Jump over spikes and survive the track.",
    snakeGameTitle: "Neon Snake",
    snakeGameText: "Collect gems without hitting yourself.",
    pongGameTitle: "Paddle Clash",
    pongGameText: "Beat the smart paddle to seven points.",
    memoryGameTitle: "Code Memory",
    memoryGameText: "Match every symbol with clean focus.",
    subwayGameTitle: "Metro Rush 3D",
    subwayGameText: "Dodge trains, jump barriers, and grab neon coins.",
    gameStart: "Start",
    gameReset: "Reset",
    gameFullscreen: "Fullscreen",
    gameExitFullscreen: "Exit Fullscreen",
    gameScoreLabel: "Score",
    gameBestLabel: "Best",
    gameKickerPlane: "Shooter",
    gameKickerDash: "Runner",
    gameKickerSnake: "Classic",
    gameKickerPong: "Duel",
    gameKickerMemory: "Puzzle",
    gameKickerSubway: "Subway",
    gamePressStart: "Press Start",
    gameMissionFailed: "Mission Failed",
    gameCrash: "Crash",
    gameOver: "Game Over",
    gameYouWin: "You Win",
    gameTryAgain: "Try Again",
    gamePerfect: "Perfect",
    planeGameHelp: "Move with W/A/S/D or arrows. Press Space to shoot.",
    dashGameHelp: "Press Space, W, or Up to jump. Time the landings.",
    snakeGameHelp: "Use arrows or W/A/S/D. Eat gems and avoid crashes.",
    pongGameHelp: "Move with W/S or Up/Down. First to 7 wins.",
    memoryGameHelp: "Click two cards to find matching symbols.",
    subwayGameHelp: "Use Left/Right to switch lanes. Up jumps, Down slides. Collect coins.",
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
    navGames: "Spiele",
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
    gamesEyebrow: "Spiele",
    gamesTitle: "Spiele von mir spielen",
    planeGameTitle: "Sky Defender",
    planeGameText: "Schieße Gegner ab und beschütze dein Flugzeug.",
    dashGameTitle: "Geometry Rush",
    dashGameText: "Springe über Stacheln und überlebe die Strecke.",
    snakeGameTitle: "Neon Snake",
    snakeGameText: "Sammle Edelsteine, ohne dich selbst zu treffen.",
    pongGameTitle: "Paddle Clash",
    pongGameText: "Besiege den smarten Schläger bis sieben Punkte.",
    memoryGameTitle: "Code Memory",
    memoryGameText: "Finde alle Symbole mit voller Konzentration.",
    subwayGameTitle: "Metro Rush 3D",
    subwayGameText: "Weiche Zügen aus, springe über Barrieren und sammle Neon-Münzen.",
    gameStart: "Start",
    gameReset: "Reset",
    gameFullscreen: "Vollbild",
    gameExitFullscreen: "Vollbild verlassen",
    gameScoreLabel: "Punkte",
    gameBestLabel: "Rekord",
    gameKickerPlane: "Shooter",
    gameKickerDash: "Runner",
    gameKickerSnake: "Klassiker",
    gameKickerPong: "Duell",
    gameKickerMemory: "Puzzle",
    gameKickerSubway: "U-Bahn",
    gamePressStart: "Start drücken",
    gameMissionFailed: "Mission gescheitert",
    gameCrash: "Crash",
    gameOver: "Game Over",
    gameYouWin: "Du gewinnst",
    gameTryAgain: "Nochmal versuchen",
    gamePerfect: "Perfekt",
    planeGameHelp: "Bewege dich mit W/A/S/D oder Pfeilen. Leertaste schießt.",
    dashGameHelp: "Drücke Leertaste, W oder Pfeil hoch zum Springen.",
    snakeGameHelp: "Nutze Pfeile oder W/A/S/D. Sammle Edelsteine und vermeide Kollisionen.",
    pongGameHelp: "Bewege dich mit W/S oder Hoch/Runter. Wer zuerst 7 hat, gewinnt.",
    memoryGameHelp: "Klicke zwei Karten an, um passende Symbole zu finden.",
    subwayGameHelp: "Links/Rechts wechseln die Spur. Hoch springt, Runter rutscht. Sammle Münzen.",
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
    navGames: "گیمز",
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
    gamesEyebrow: "گیمز",
    gamesTitle: "میرے بنائے ہوئے گیمز کھیلیں",
    planeGameTitle: "Sky Defender",
    planeGameText: "دشمنوں کو ماریں اور اپنے جہاز کو بچائیں۔",
    dashGameTitle: "Geometry Rush",
    dashGameText: "کانٹوں کے اوپر چھلانگ لگائیں اور ٹریک مکمل کریں۔",
    snakeGameTitle: "Neon Snake",
    snakeGameText: "جواہرات جمع کریں اور ٹکرانے سے بچیں۔",
    pongGameTitle: "Paddle Clash",
    pongGameText: "سات پوائنٹس تک smart paddle کو ہرائیں۔",
    memoryGameTitle: "Code Memory",
    memoryGameText: "ہر symbol کا matching pair تلاش کریں۔",
    subwayGameTitle: "Metro Rush 3D",
    subwayGameText: "Trains سے بچیں، barriers پر jump کریں، اور neon coins لیں۔",
    gameStart: "Start",
    gameReset: "Reset",
    gameFullscreen: "Fullscreen",
    gameExitFullscreen: "Fullscreen بند کریں",
    gameScoreLabel: "اسکور",
    gameBestLabel: "بہترین",
    gameKickerPlane: "Shooter",
    gameKickerDash: "Runner",
    gameKickerSnake: "Classic",
    gameKickerPong: "Duel",
    gameKickerMemory: "Puzzle",
    gameKickerSubway: "Subway",
    gamePressStart: "Start دبائیں",
    gameMissionFailed: "Mission Failed",
    gameCrash: "Crash",
    gameOver: "Game Over",
    gameYouWin: "آپ جیت گئے",
    gameTryAgain: "دوبارہ کوشش کریں",
    gamePerfect: "Perfect",
    planeGameHelp: "W/A/S/D یا arrows سے حرکت کریں۔ Space سے shoot کریں۔",
    dashGameHelp: "Jump کے لیے Space، W، یا Up دبائیں۔",
    snakeGameHelp: "Arrows یا W/A/S/D استعمال کریں۔ Gems کھائیں اور crash سے بچیں۔",
    pongGameHelp: "W/S یا Up/Down سے move کریں۔ پہلے 7 points والا جیتتا ہے۔",
    memoryGameHelp: "دو cards پر click کر کے matching symbols ڈھونڈیں۔",
    subwayGameHelp: "Left/Right سے lane بدلیں۔ Up jump، Down slide۔ Coins collect کریں۔",
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

  if (document.body.dataset.gamesReady === "true" && typeof syncGameLanguage === "function") {
    syncGameLanguage();
  }
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

const gameCanvas = document.querySelector("#game-canvas");
const gameContext = gameCanvas?.getContext("2d");
const gameTabs = document.querySelectorAll(".game-tab");
const gameTitle = document.querySelector("#game-title");
const gameScore = document.querySelector("#game-score");
const gameBest = document.querySelector("#game-best");
const gameHelp = document.querySelector("#game-help");
const gameStart = document.querySelector("#game-start");
const gameReset = document.querySelector("#game-reset");
const gameFullscreen = document.querySelector("#game-fullscreen");
const gameShell = document.querySelector(".game-shell");
const gamesSection = document.querySelector("#games");
const gameKeys = new Set();
const gamePressed = new Set();
const gameBestScores = JSON.parse(localStorage.getItem("gameBestScores") || "{}");

let activeGame = "plane";
let gameRunning = false;
let gameMessage = "";
let gameLastTime = performance.now();
let gameState = {};
let gameInputArmed = false;

const gameMeta = {
  plane: { titleKey: "planeGameTitle", helpKey: "planeGameHelp", kickerKey: "gameKickerPlane" },
  dash: { titleKey: "dashGameTitle", helpKey: "dashGameHelp", kickerKey: "gameKickerDash" },
  snake: { titleKey: "snakeGameTitle", helpKey: "snakeGameHelp", kickerKey: "gameKickerSnake" },
  pong: { titleKey: "pongGameTitle", helpKey: "pongGameHelp", kickerKey: "gameKickerPong" },
  memory: { titleKey: "memoryGameTitle", helpKey: "memoryGameHelp", kickerKey: "gameKickerMemory" },
  subway: { titleKey: "subwayGameTitle", helpKey: "subwayGameHelp", kickerKey: "gameKickerSubway" }
};

function syncGameLanguage() {
  if (!gameTitle || !gameHelp) {
    return;
  }

  const language = translations[activeLanguage];
  const meta = gameMeta[activeGame];
  gameTitle.textContent = language[meta.titleKey];
  gameHelp.textContent = language[meta.helpKey];
  document.querySelector("[data-game-kicker]").textContent = language[meta.kickerKey];
  updateFullscreenLabel();
}

function setGameScore(value) {
  gameState.score = Math.max(0, Math.floor(value));
  gameScore.textContent = gameState.score;

  if (gameState.score > (gameBestScores[activeGame] || 0)) {
    gameBestScores[activeGame] = gameState.score;
    localStorage.setItem("gameBestScores", JSON.stringify(gameBestScores));
  }

  gameBest.textContent = gameBestScores[activeGame] || 0;
}

function endGame(message) {
  gameRunning = false;
  gameMessage = message;
}

function getGameMessage() {
  return gameMessage ? translations[activeLanguage][gameMessage] : "";
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function chooseRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function rectsTouch(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

function updateFullscreenLabel() {
  if (!gameFullscreen) {
    return;
  }

  const key = document.fullscreenElement === gameShell ? "gameExitFullscreen" : "gameFullscreen";
  gameFullscreen.textContent = translations[activeLanguage][key];
}

function switchGame(name) {
  activeGame = name;
  gameRunning = false;
  gameMessage = "gamePressStart";
  gameTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.game === name));
  syncGameLanguage();
  resetGame();
}

function resetGame() {
  gameRunning = false;
  gameMessage = "gamePressStart";
  gameKeys.clear();
  gamePressed.clear();

  if (activeGame === "plane") {
    gameState = { score: 0, player: { x: 90, y: 250, w: 54, h: 34 }, bullets: [], enemies: [], stars: [], spawn: 0, shot: 0, time: 0 };
    for (let i = 0; i < 90; i += 1) gameState.stars.push({ x: Math.random() * 900, y: Math.random() * 520, s: randomBetween(1, 3) });
  }

  if (activeGame === "dash") {
    gameState = { score: 0, cube: { x: 145, y: 392, w: 42, h: 42, vy: 0 }, obstacles: [], spawn: 1.1, speed: 330, distance: 0 };
  }

  if (activeGame === "snake") {
    gameState = { score: 0, cell: 20, timer: 0, step: 0.095, dir: { x: 1, y: 0 }, next: { x: 1, y: 0 }, snake: [{ x: 12, y: 12 }, { x: 11, y: 12 }, { x: 10, y: 12 }], food: { x: 28, y: 12 } };
  }

  if (activeGame === "pong") {
    gameState = { score: 0, player: 210, ai: 210, playerPoints: 0, aiPoints: 0, ball: { x: 450, y: 260, vx: 330, vy: 190 } };
  }

  if (activeGame === "memory") {
    const values = ["HTML", "CSS", "JS", "PY", "C++", "WEB"];
    const deck = [...values, ...values].sort(() => Math.random() - 0.5);
    gameState = { score: 0, cards: deck.map((value, index) => ({ value, index, open: false, done: false })), open: [], moves: 0, lock: 0 };
  }

  if (activeGame === "subway") {
    gameState = {
      score: 0,
      distance: 0,
      speed: 420,
      lane: 0,
      targetLane: 0,
      laneShift: 0,
      jump: 0,
      jumpVelocity: 0,
      slide: 0,
      coins: 0,
      spawn: 0.45,
      coinSpawn: 0.25,
      sparks: [],
      objects: [],
      tunnelOffset: 0
    };
  }

  setGameScore(0);
  drawGame();
}

function startGame() {
  armGameInput();

  if (gameMessage && gameMessage !== "gamePressStart") {
    resetGame();
  }

  if (!gameRunning) {
    gameRunning = true;
    gameMessage = "";
  }
}

function armGameInput() {
  gameInputArmed = true;
}

function isGameInputActive() {
  if (document.fullscreenElement === gameShell || gameInputArmed) {
    return true;
  }

  if (!gamesSection) {
    return false;
  }

  const rect = gamesSection.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.86 && rect.bottom > window.innerHeight * 0.14;
}

function drawPanel(message) {
  if (!message) {
    return;
  }

  gameContext.fillStyle = "rgba(8, 14, 22, 0.72)";
  gameContext.fillRect(0, 0, 900, 520);
  gameContext.fillStyle = "#ffffff";
  gameContext.font = "800 42px Arial";
  gameContext.textAlign = "center";
  gameContext.fillText(message, 450, 250);
  gameContext.font = "700 18px Arial";
  gameContext.fillStyle = "#a8dfe9";
  gameContext.fillText(translations[activeLanguage].gameStart, 450, 286);
  gameContext.textAlign = "left";
}

function updatePlane(dt) {
  const p = gameState.player;
  const speed = 330;
  if (gameKeys.has("arrowup") || gameKeys.has("w")) p.y -= speed * dt;
  if (gameKeys.has("arrowdown") || gameKeys.has("s")) p.y += speed * dt;
  if (gameKeys.has("arrowleft") || gameKeys.has("a")) p.x -= speed * dt;
  if (gameKeys.has("arrowright") || gameKeys.has("d")) p.x += speed * dt;
  p.x = Math.max(10, Math.min(820, p.x));
  p.y = Math.max(20, Math.min(466, p.y));
  gameState.time += dt;
  gameState.shot -= dt;
  gameState.spawn -= dt;

  if ((gameKeys.has(" ") || gameKeys.has("spacebar")) && gameState.shot <= 0) {
    gameState.bullets.push({ x: p.x + 52, y: p.y + 17, w: 22, h: 5 });
    gameState.shot = 0.18;
  }

  if (gameState.spawn <= 0) {
    gameState.enemies.push({ x: 930, y: randomBetween(42, 456), w: 48, h: 34, hp: 1, wave: randomBetween(0, 9) });
    gameState.spawn = Math.max(0.42, 1.05 - gameState.score * 0.004);
  }

  gameState.stars.forEach((star) => {
    star.x -= (40 + star.s * 28) * dt;
    if (star.x < -5) {
      star.x = 905;
      star.y = Math.random() * 520;
    }
  });

  gameState.bullets.forEach((bullet) => bullet.x += 620 * dt);
  gameState.enemies.forEach((enemy) => {
    enemy.x -= (185 + gameState.score * 0.8) * dt;
    enemy.y += Math.sin(gameState.time * 5 + enemy.wave) * 45 * dt;
  });

  gameState.bullets = gameState.bullets.filter((bullet) => bullet.x < 930);
  gameState.enemies.forEach((enemy) => {
    gameState.bullets.forEach((bullet) => {
      if (!enemy.hit && rectsTouch(enemy, bullet)) {
        enemy.hit = true;
        bullet.hit = true;
        setGameScore(gameState.score + 10);
      }
    });
  });
  gameState.bullets = gameState.bullets.filter((bullet) => !bullet.hit);
  gameState.enemies = gameState.enemies.filter((enemy) => !enemy.hit && enemy.x > -70);

  if (gameState.enemies.some((enemy) => rectsTouch(enemy, p))) {
    endGame("gameMissionFailed");
  }
}

function drawPlane() {
  const gradient = gameContext.createLinearGradient(0, 0, 900, 520);
  gradient.addColorStop(0, "#10213a");
  gradient.addColorStop(1, "#081018");
  gameContext.fillStyle = gradient;
  gameContext.fillRect(0, 0, 900, 520);
  gameContext.fillStyle = "#d9f7ff";
  gameState.stars.forEach((star) => gameContext.fillRect(star.x, star.y, star.s, star.s));
  const p = gameState.player;
  gameContext.fillStyle = "#5bc3d6";
  gameContext.beginPath();
  gameContext.moveTo(p.x + 58, p.y + 17);
  gameContext.lineTo(p.x, p.y);
  gameContext.lineTo(p.x + 12, p.y + 17);
  gameContext.lineTo(p.x, p.y + 34);
  gameContext.closePath();
  gameContext.fill();
  gameContext.fillStyle = "#e3b153";
  gameState.bullets.forEach((bullet) => gameContext.fillRect(bullet.x, bullet.y, bullet.w, bullet.h));
  gameState.enemies.forEach((enemy) => {
    gameContext.fillStyle = "#e85d5d";
    gameContext.beginPath();
    gameContext.moveTo(enemy.x, enemy.y + 17);
    gameContext.lineTo(enemy.x + 48, enemy.y);
    gameContext.lineTo(enemy.x + 38, enemy.y + 17);
    gameContext.lineTo(enemy.x + 48, enemy.y + 34);
    gameContext.closePath();
    gameContext.fill();
  });
}

function updateDash(dt) {
  const cube = gameState.cube;
  const ground = 434;
  const jumpPressed = gamePressed.has(" ") || gamePressed.has("arrowup") || gamePressed.has("w");
  if (jumpPressed && cube.y >= ground - cube.h - 1) cube.vy = -680;
  cube.vy += 1700 * dt;
  cube.y = Math.min(ground - cube.h, cube.y + cube.vy * dt);
  gameState.distance += gameState.speed * dt;
  gameState.speed += 10 * dt;
  setGameScore(gameState.distance / 8);
  gameState.spawn -= dt;
  if (gameState.spawn <= 0) {
    gameState.obstacles.push({ x: 930, y: ground - 38, w: 34, h: 38 });
    gameState.spawn = randomBetween(0.8, 1.45);
  }
  gameState.obstacles.forEach((obstacle) => obstacle.x -= gameState.speed * dt);
  gameState.obstacles = gameState.obstacles.filter((obstacle) => obstacle.x > -60);
  if (gameState.obstacles.some((obstacle) => rectsTouch({ x: cube.x + 5, y: cube.y + 5, w: cube.w - 10, h: cube.h - 8 }, obstacle))) {
    endGame("gameCrash");
  }
}

function drawDash() {
  gameContext.fillStyle = "#101822";
  gameContext.fillRect(0, 0, 900, 520);
  gameContext.fillStyle = "#182a36";
  for (let x = -40; x < 940; x += 60) gameContext.fillRect(x - (gameState.distance % 60), 432, 34, 4);
  gameContext.fillStyle = "#5bc3d6";
  gameContext.fillRect(gameState.cube.x, gameState.cube.y, gameState.cube.w, gameState.cube.h);
  gameContext.fillStyle = "#e3b153";
  gameState.obstacles.forEach((o) => {
    gameContext.beginPath();
    gameContext.moveTo(o.x, o.y + o.h);
    gameContext.lineTo(o.x + o.w / 2, o.y);
    gameContext.lineTo(o.x + o.w, o.y + o.h);
    gameContext.closePath();
    gameContext.fill();
  });
  gameContext.fillStyle = "#2f4758";
  gameContext.fillRect(0, 434, 900, 86);
}

function updateSnake(dt) {
  const state = gameState;
  if (gameKeys.has("arrowup") || gameKeys.has("w")) state.next = state.dir.y === 1 ? state.next : { x: 0, y: -1 };
  if (gameKeys.has("arrowdown") || gameKeys.has("s")) state.next = state.dir.y === -1 ? state.next : { x: 0, y: 1 };
  if (gameKeys.has("arrowleft") || gameKeys.has("a")) state.next = state.dir.x === 1 ? state.next : { x: -1, y: 0 };
  if (gameKeys.has("arrowright") || gameKeys.has("d")) state.next = state.dir.x === -1 ? state.next : { x: 1, y: 0 };
  state.timer += dt;
  if (state.timer < state.step) return;
  state.timer = 0;
  state.dir = state.next;
  const head = { x: state.snake[0].x + state.dir.x, y: state.snake[0].y + state.dir.y };
  if (head.x < 0 || head.x >= 45 || head.y < 0 || head.y >= 26 || state.snake.some((part) => part.x === head.x && part.y === head.y)) {
    endGame("gameOver");
    return;
  }
  state.snake.unshift(head);
  if (head.x === state.food.x && head.y === state.food.y) {
    setGameScore(state.score + 15);
    do {
      state.food = { x: Math.floor(Math.random() * 45), y: Math.floor(Math.random() * 26) };
    } while (state.snake.some((part) => part.x === state.food.x && part.y === state.food.y));
  } else {
    state.snake.pop();
  }
}

function drawSnake() {
  gameContext.fillStyle = "#0c151b";
  gameContext.fillRect(0, 0, 900, 520);
  gameContext.fillStyle = "rgba(255,255,255,0.035)";
  for (let x = 0; x < 900; x += 20) gameContext.fillRect(x, 0, 1, 520);
  for (let y = 0; y < 520; y += 20) gameContext.fillRect(0, y, 900, 1);
  gameContext.fillStyle = "#e3b153";
  gameContext.fillRect(gameState.food.x * 20 + 3, gameState.food.y * 20 + 3, 14, 14);
  gameState.snake.forEach((part, index) => {
    gameContext.fillStyle = index === 0 ? "#5bc3d6" : "#2fbf71";
    gameContext.fillRect(part.x * 20 + 2, part.y * 20 + 2, 16, 16);
  });
}

function updatePong(dt) {
  const state = gameState;
  const paddleSpeed = 420;
  if (gameKeys.has("arrowup") || gameKeys.has("w")) state.player -= paddleSpeed * dt;
  if (gameKeys.has("arrowdown") || gameKeys.has("s")) state.player += paddleSpeed * dt;
  state.player = Math.max(20, Math.min(400, state.player));
  state.ai += Math.sign(state.ball.y - (state.ai + 50)) * 330 * dt;
  state.ai = Math.max(20, Math.min(400, state.ai));
  state.ball.x += state.ball.vx * dt;
  state.ball.y += state.ball.vy * dt;
  if (state.ball.y < 16 || state.ball.y > 504) state.ball.vy *= -1;
  if (rectsTouch({ x: 34, y: state.player, w: 16, h: 100 }, { x: state.ball.x - 10, y: state.ball.y - 10, w: 20, h: 20 }) && state.ball.vx < 0) state.ball.vx *= -1.06;
  if (rectsTouch({ x: 850, y: state.ai, w: 16, h: 100 }, { x: state.ball.x - 10, y: state.ball.y - 10, w: 20, h: 20 }) && state.ball.vx > 0) state.ball.vx *= -1.06;
  if (state.ball.x < -20 || state.ball.x > 920) {
    if (state.ball.x > 920) {
      state.playerPoints += 1;
      setGameScore(state.playerPoints * 100 - state.aiPoints * 30);
    } else {
      state.aiPoints += 1;
    }
    state.ball = { x: 450, y: 260, vx: (state.ball.x < 0 ? 330 : -330), vy: randomBetween(-220, 220) };
  }
  if (state.playerPoints >= 7) endGame("gameYouWin");
  if (state.aiPoints >= 7) endGame("gameTryAgain");
}

function drawPong() {
  gameContext.fillStyle = "#101822";
  gameContext.fillRect(0, 0, 900, 520);
  gameContext.fillStyle = "rgba(255,255,255,0.18)";
  for (let y = 18; y < 520; y += 34) gameContext.fillRect(448, y, 4, 18);
  gameContext.fillStyle = "#5bc3d6";
  gameContext.fillRect(34, gameState.player, 16, 100);
  gameContext.fillStyle = "#e85d5d";
  gameContext.fillRect(850, gameState.ai, 16, 100);
  gameContext.fillStyle = "#e3b153";
  gameContext.beginPath();
  gameContext.arc(gameState.ball.x, gameState.ball.y, 10, 0, Math.PI * 2);
  gameContext.fill();
  gameContext.fillStyle = "#ffffff";
  gameContext.font = "800 44px Arial";
  gameContext.textAlign = "center";
  gameContext.fillText(`${gameState.playerPoints} : ${gameState.aiPoints}`, 450, 68);
  gameContext.textAlign = "left";
}

function updateMemory(dt) {
  if (gameState.lock > 0) {
    gameState.lock -= dt;
    if (gameState.lock <= 0) {
      const [first, second] = gameState.open;
      if (first.value === second.value) {
        first.done = true;
        second.done = true;
        setGameScore(gameState.score + 100);
      } else {
        first.open = false;
        second.open = false;
      }
      gameState.open = [];
      if (gameState.cards.every((card) => card.done)) endGame("gamePerfect");
    }
  }
}

function drawMemory() {
  gameContext.fillStyle = "#101822";
  gameContext.fillRect(0, 0, 900, 520);
  const cardW = 150;
  const cardH = 108;
  const gap = 18;
  const startX = 126;
  const startY = 74;
  gameState.cards.forEach((card, index) => {
    const col = index % 4;
    const row = Math.floor(index / 4);
    const x = startX + col * (cardW + gap);
    const y = startY + row * (cardH + gap);
    card.x = x;
    card.y = y;
    card.w = cardW;
    card.h = cardH;
    gameContext.fillStyle = card.open || card.done ? "#d9eef1" : "#192b38";
    gameContext.fillRect(x, y, cardW, cardH);
    gameContext.strokeStyle = card.done ? "#e3b153" : "#5bc3d6";
    gameContext.lineWidth = 3;
    gameContext.strokeRect(x + 1.5, y + 1.5, cardW - 3, cardH - 3);
    if (card.open || card.done) {
      gameContext.fillStyle = "#10202a";
      gameContext.font = "800 30px Arial";
      gameContext.textAlign = "center";
      gameContext.fillText(card.value, x + cardW / 2, y + 64);
      gameContext.textAlign = "left";
    }
  });
}

function spawnSubwayObject(kind = "hazard") {
  const lane = chooseRandom([-1, 0, 1]);
  const type = kind === "coin" ? "coin" : chooseRandom(["train", "barrier", "gate"]);
  gameState.objects.push({
    lane,
    type,
    z: 1180,
    pulse: Math.random() * Math.PI * 2,
    collected: false
  });
}

function updateSubway(dt) {
  const state = gameState;
  const leftPressed = gamePressed.has("arrowleft") || gamePressed.has("a");
  const rightPressed = gamePressed.has("arrowright") || gamePressed.has("d");
  const jumpPressed = gamePressed.has("arrowup") || gamePressed.has("w") || gamePressed.has(" ");
  const slidePressed = gamePressed.has("arrowdown") || gamePressed.has("s");

  if (leftPressed) state.targetLane = Math.max(-1, state.targetLane - 1);
  if (rightPressed) state.targetLane = Math.min(1, state.targetLane + 1);
  state.lane += (state.targetLane - state.lane) * Math.min(1, dt * 12);

  if (jumpPressed && state.jump <= 0.02 && state.slide <= 0) {
    state.jumpVelocity = 1.18;
  }

  if (slidePressed && state.jump <= 0.02) {
    state.slide = 0.52;
  }

  state.slide = Math.max(0, state.slide - dt);
  state.jump += state.jumpVelocity * dt;
  state.jumpVelocity -= 3.1 * dt;

  if (state.jump < 0) {
    state.jump = 0;
    state.jumpVelocity = 0;
  }

  state.speed += 9 * dt;
  state.distance += state.speed * dt;
  state.tunnelOffset = (state.tunnelOffset + state.speed * dt) % 120;
  state.spawn -= dt;
  state.coinSpawn -= dt;

  if (state.spawn <= 0) {
    spawnSubwayObject("hazard");
    state.spawn = Math.max(0.48, randomBetween(0.85, 1.28) - state.score * 0.0008);
  }

  if (state.coinSpawn <= 0) {
    spawnSubwayObject("coin");
    state.coinSpawn = randomBetween(0.28, 0.52);
  }

  state.objects.forEach((object) => {
    object.z -= state.speed * dt;
    object.pulse += dt * 5;

    const sameLane = Math.abs(object.lane - state.targetLane) < 0.42;
    const close = object.z < 72 && object.z > -18;

    if (object.type === "coin" && sameLane && close && !object.collected) {
      object.collected = true;
      state.coins += 1;
      state.sparks.push({ lane: object.lane, z: object.z, life: 0.45 });
    }

    if (object.type === "train" && sameLane && close) {
      endGame("gameCrash");
    }

    if (object.type === "barrier" && sameLane && close && state.jump < 0.34) {
      endGame("gameCrash");
    }

    if (object.type === "gate" && sameLane && close && state.slide <= 0) {
      endGame("gameCrash");
    }
  });

  state.sparks.forEach((spark) => {
    spark.z -= state.speed * dt;
    spark.life -= dt;
  });
  setGameScore(state.distance / 6 + state.coins * 50);
  state.objects = state.objects.filter((object) => object.z > -80 && !object.collected);
  state.sparks = state.sparks.filter((spark) => spark.life > 0);
}

function controlSubway(action) {
  if (activeGame !== "subway") {
    return;
  }

  if (action === "left") gameState.targetLane = Math.max(-1, gameState.targetLane - 1);
  if (action === "right") gameState.targetLane = Math.min(1, gameState.targetLane + 1);

  if (action === "jump" && gameState.jump <= 0.02 && gameState.slide <= 0) {
    gameState.jumpVelocity = 1.18;
  }

  if (action === "slide" && gameState.jump <= 0.02) {
    gameState.slide = 0.52;
  }
}

function handleCanvasControl(x, y) {
  if (!gameRunning) {
    startGame();
  }

  if (activeGame === "subway") {
    if (x < 300) controlSubway("left");
    else if (x > 600) controlSubway("right");
    else if (y < 260) controlSubway("jump");
    else controlSubway("slide");
  }

  if (activeGame === "dash") {
    gamePressed.add("arrowup");
  }

  if (activeGame === "plane") {
    const p = gameState.player;
    p.x = Math.max(10, Math.min(820, x - p.w / 2));
    p.y = Math.max(20, Math.min(466, y - p.h / 2));
    gameKeys.add(" ");
    window.setTimeout(() => gameKeys.delete(" "), 120);
  }
}

function projectSubway(lane, z, yLift = 0) {
  const depth = Math.max(0.06, z / 1180);
  const scale = 1 - depth;
  const horizonY = 118;
  const groundY = 470;
  const laneWidth = 68 + scale * 122;
  return {
    x: 450 + lane * laneWidth * scale,
    y: horizonY + scale * (groundY - horizonY) - yLift * scale,
    scale
  };
}

function drawSubwayCar(x, y, w, h, color, windowColor) {
  gameContext.fillStyle = color;
  gameContext.fillRect(x - w / 2, y - h, w, h);
  gameContext.fillStyle = "rgba(255,255,255,0.22)";
  gameContext.fillRect(x - w / 2 + 10, y - h + 12, w - 20, 10);
  gameContext.fillStyle = windowColor;
  for (let i = 0; i < 3; i += 1) {
    gameContext.fillRect(x - w / 2 + 14 + i * (w / 3), y - h + 34, w / 4.2, h * 0.25);
  }
  gameContext.fillStyle = "#071018";
  gameContext.fillRect(x - w / 2 + 12, y - 18, w - 24, 8);
  gameContext.fillStyle = "#ffd86b";
  gameContext.fillRect(x - w / 2 + 8, y - 24, 12, 8);
  gameContext.fillRect(x + w / 2 - 20, y - 24, 12, 8);
}

function drawSubway() {
  const bg = gameContext.createLinearGradient(0, 0, 0, 520);
  bg.addColorStop(0, "#08111d");
  bg.addColorStop(0.45, "#172637");
  bg.addColorStop(1, "#070b10");
  gameContext.fillStyle = bg;
  gameContext.fillRect(0, 0, 900, 520);

  for (let i = 0; i < 14; i += 1) {
    const z = ((i * 120 + gameState.tunnelOffset) % 1480) + 80;
    const near = projectSubway(0, z);
    const glow = Math.max(0.08, near.scale);
    gameContext.strokeStyle = `rgba(91, 195, 214, ${0.08 + glow * 0.22})`;
    gameContext.lineWidth = 2 + near.scale * 8;
    gameContext.beginPath();
    gameContext.moveTo(450 - 420 * near.scale, near.y);
    gameContext.lineTo(450 + 420 * near.scale, near.y);
    gameContext.stroke();

    gameContext.fillStyle = i % 2 === 0 ? "rgba(227,177,83,0.55)" : "rgba(91,195,214,0.45)";
    gameContext.fillRect(450 - 380 * near.scale, near.y - 36 * near.scale, 28 * near.scale, 10 * near.scale);
    gameContext.fillRect(450 + 352 * near.scale, near.y - 36 * near.scale, 28 * near.scale, 10 * near.scale);
  }

  const floor = gameContext.createLinearGradient(0, 170, 0, 520);
  floor.addColorStop(0, "rgba(24,42,54,0.2)");
  floor.addColorStop(1, "#14171d");
  gameContext.fillStyle = floor;
  gameContext.beginPath();
  gameContext.moveTo(350, 132);
  gameContext.lineTo(550, 132);
  gameContext.lineTo(860, 520);
  gameContext.lineTo(40, 520);
  gameContext.closePath();
  gameContext.fill();

  [-1, 0, 1].forEach((lane) => {
    const far = projectSubway(lane, 1120);
    const near = projectSubway(lane, 0);
    gameContext.strokeStyle = lane === Math.round(gameState.targetLane) ? "#e3b153" : "rgba(216,236,242,0.36)";
    gameContext.lineWidth = lane === 0 ? 3 : 2;
    gameContext.beginPath();
    gameContext.moveTo(far.x, far.y);
    gameContext.lineTo(near.x, near.y);
    gameContext.stroke();
  });

  gameState.objects
    .slice()
    .sort((a, b) => b.z - a.z)
    .forEach((object) => {
      const point = projectSubway(object.lane, object.z);
      const scale = Math.max(0.1, point.scale);

      if (object.type === "coin") {
        const radius = 8 + scale * 22;
        gameContext.fillStyle = "rgba(255,216,107,0.2)";
        gameContext.beginPath();
        gameContext.arc(point.x, point.y - 48 * scale, radius * 1.8, 0, Math.PI * 2);
        gameContext.fill();
        gameContext.fillStyle = "#ffd86b";
        gameContext.beginPath();
        gameContext.arc(point.x, point.y - 48 * scale + Math.sin(object.pulse) * 4, radius, 0, Math.PI * 2);
        gameContext.fill();
        gameContext.fillStyle = "#8a5a08";
        gameContext.fillRect(point.x - radius * 0.42, point.y - 51 * scale, radius * 0.84, radius * 0.22);
      }

      if (object.type === "train") {
        drawSubwayCar(point.x, point.y + 20 * scale, 72 + scale * 96, 76 + scale * 158, "#334556", "#a8dfe9");
      }

      if (object.type === "barrier") {
        const w = 54 + scale * 70;
        const h = 24 + scale * 42;
        gameContext.fillStyle = "#f04f5f";
        gameContext.fillRect(point.x - w / 2, point.y - h, w, h);
        gameContext.fillStyle = "#ffd86b";
        for (let i = -2; i < 3; i += 1) gameContext.fillRect(point.x + i * w * 0.2 - 5, point.y - h, 10, h);
      }

      if (object.type === "gate") {
        const w = 62 + scale * 86;
        const h = 86 + scale * 96;
        gameContext.strokeStyle = "#5bc3d6";
        gameContext.lineWidth = 8 + scale * 5;
        gameContext.strokeRect(point.x - w / 2, point.y - h, w, h);
        gameContext.fillStyle = "rgba(91,195,214,0.18)";
        gameContext.fillRect(point.x - w / 2, point.y - h, w, h * 0.34);
      }
    });

  gameState.sparks.forEach((spark) => {
    const point = projectSubway(spark.lane, spark.z);
    gameContext.fillStyle = `rgba(255,216,107,${spark.life * 2})`;
    gameContext.beginPath();
    gameContext.arc(point.x, point.y - 50 * point.scale, 34 * point.scale * spark.life, 0, Math.PI * 2);
    gameContext.fill();
  });

  const runner = projectSubway(gameState.lane, 0, gameState.jump * 125);
  const slideScale = gameState.slide > 0 ? 0.58 : 1;
  gameContext.fillStyle = "rgba(0,0,0,0.36)";
  gameContext.beginPath();
  gameContext.ellipse(runner.x, 486, 42, 10, 0, 0, Math.PI * 2);
  gameContext.fill();
  gameContext.fillStyle = "#22c55e";
  gameContext.fillRect(runner.x - 17, runner.y - 88 * slideScale, 34, 58 * slideScale);
  gameContext.fillStyle = "#5bc3d6";
  gameContext.fillRect(runner.x - 23, runner.y - 114 * slideScale, 46, 26);
  gameContext.fillStyle = "#ffd86b";
  gameContext.fillRect(runner.x - 12, runner.y - 138 * slideScale, 24, 24);
  gameContext.fillStyle = "#f04f5f";
  gameContext.fillRect(runner.x - 28, runner.y - 30, 18, 34);
  gameContext.fillRect(runner.x + 10, runner.y - 30, 18, 34);

  gameContext.fillStyle = "rgba(255,255,255,0.75)";
  gameContext.font = "800 16px Arial";
  gameContext.fillText(`x${Math.max(1, Math.floor(gameState.speed / 420))}`, 24, 36);
}

function updateGame(dt) {
  if (activeGame === "plane") updatePlane(dt);
  if (activeGame === "dash") updateDash(dt);
  if (activeGame === "snake") updateSnake(dt);
  if (activeGame === "pong") updatePong(dt);
  if (activeGame === "memory") updateMemory(dt);
  if (activeGame === "subway") updateSubway(dt);
  gamePressed.clear();
}

function drawGame() {
  if (!gameContext) {
    return;
  }

  if (activeGame === "plane") drawPlane();
  if (activeGame === "dash") drawDash();
  if (activeGame === "snake") drawSnake();
  if (activeGame === "pong") drawPong();
  if (activeGame === "memory") drawMemory();
  if (activeGame === "subway") drawSubway();
  drawPanel(getGameMessage());
}

function gameLoop(time) {
  const dt = Math.min(0.033, (time - gameLastTime) / 1000);
  gameLastTime = time;
  if (gameRunning) updateGame(dt);
  drawGame();
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (isGameInputActive() && [" ", "spacebar", "arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
    event.preventDefault();
  }

  if (!isGameInputActive()) {
    return;
  }

  if (!gameKeys.has(key)) gamePressed.add(key);
  gameKeys.add(key);
});

document.addEventListener("keyup", (event) => {
  gameKeys.delete(event.key.toLowerCase());
});

gameCanvas?.addEventListener("pointerdown", (event) => {
  armGameInput();
  gameCanvas.setPointerCapture?.(event.pointerId);
  const rect = gameCanvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) * (900 / rect.width);
  const y = (event.clientY - rect.top) * (520 / rect.height);

  if (activeGame !== "memory") {
    handleCanvasControl(x, y);
    return;
  }

  if (!gameRunning || gameState.lock > 0) {
    return;
  }

  const card = gameState.cards.find((item) => !item.open && !item.done && x >= item.x && x <= item.x + item.w && y >= item.y && y <= item.y + item.h);

  if (!card) {
    return;
  }

  card.open = true;
  gameState.open.push(card);

  if (gameState.open.length === 2) {
    gameState.moves += 1;
    gameState.lock = 0.55;
  }
});

gameCanvas?.addEventListener("pointermove", (event) => {
  if (activeGame !== "plane" || !gameRunning || event.buttons !== 1) {
    return;
  }

  armGameInput();
  const rect = gameCanvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) * (900 / rect.width);
  const y = (event.clientY - rect.top) * (520 / rect.height);
  const p = gameState.player;
  p.x = Math.max(10, Math.min(820, x - p.w / 2));
  p.y = Math.max(20, Math.min(466, y - p.h / 2));
});

gameTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    armGameInput();
    switchGame(tab.dataset.game);
  });
});

gameStart?.addEventListener("click", startGame);
gameReset?.addEventListener("click", () => {
  armGameInput();
  resetGame();
});
gameFullscreen?.addEventListener("click", () => {
  armGameInput();

  if (!gameShell) {
    return;
  }

  if (document.fullscreenElement === gameShell) {
    document.exitFullscreen?.();
  } else {
    gameShell.requestFullscreen?.();
  }
});

document.addEventListener("fullscreenchange", updateFullscreenLabel);

if (gameCanvas) {
  document.body.dataset.gamesReady = "true";
  syncGameLanguage();
  resetGame();
  requestAnimationFrame(gameLoop);
}

