import { useEffect, useState } from "react";

const chapters = [
  {
    id: "top",
    nav: "פתיחה",
    kicker: "שקף 1 | פרטים כלליים ורקע",
    title: "אבשה פתרונות אריזה מעץ",
    lead: "עסק משפחתי מכפר עזה, שהוקם מתוך חזון לייצר פתרונות אריזה חכמים ומותאמים למגוון צרכים וחברות.",
    visual: "תמונת פתיחה רחבה: מפעל, אריזות או צילום אווירה מהעוטף",
    theme: "hero",
    visualMode: "opening",
    tags: ["אברהם לולו שמריז", "0545426117", "הוקם באוגוסט 2018", "עוטף עזה"],
  },
  {
    id: "business",
    nav: "המשפחה",
    kicker: "שקף 2 | משפחת שמריז",
    title: "מאחורי העסק עומדת משפחת שמריז, משפחה מקיבוץ כפר עזה שנעקרה מביתה וכיום מפונה לשפיים.",
    lead: "אבי ודקלה, יונתן ונטלי עם שני ילדים, עידו ואביה עם שלוש בנות, אלון ז״ל, ורוני החיילת המשוחררת.",
    visual: "חזית העסק, המשפחה או צילום רחב מהמפעל",
    image: "/images/02-business-front.jpg.jpeg",
    layout: "manualBand",
    visualMode: "roots",
    manualStyle: {
      "--panel-top": "132px",
      "--panel-inline-start": "clamp(26px, 5.6vw, 86px)",
      "--panel-width": "min(1220px, calc(100vw - 170px))",
      "--panel-padding": "clamp(16px, 2vw, 28px)",
      "--panel-gap": "clamp(16px, 2.4vw, 34px)",
      "--panel-bg": "rgba(255, 253, 247, 0.66)",
      "--panel-blur": "18px",
      "--title-size": "clamp(32px, 3.05vw, 46px)",
      "--lead-size": "clamp(17px, 1.2vw, 21px)",
      "--stat-size": "clamp(28px, 2.7vw, 40px)",
    },
    stats: [
      ["כפר עזה", "בית המשפחה"],
      ["שפיים", "מקום הפינוי כיום"],
      ["משפחה", "הלב של העסק"],
    ],
  },
  {
    id: "alon",
    nav: "אלון",
    kicker: "שקף 3 | אלון שמריז ז״ל",
    title: "אלון שמריז ז״ל, בן 26 מכפר עזה, נחטף מביתו ונורה למוות בשוגג ביום ה־70 למלחמה.",
    lead: "אלון, יותם חיים וסאמר אל־טלאלקה הוחזקו בשבי, ניסו לאותת לכוחות צה״ל שהם חטופים, ובהמשך התקרבו ללא חולצות ועם דגל לבן.",
    visual: "תמונה רגישה של אלון ז״ל או תמונה משפחתית, רק לפי הנחיה שלך",
    tone: "memorial",
    visualMode: "memory",
    quote: "אלון דאג שהוא ישאר שפוי ולקח אותו על הגב שלו לכל אורך הדרך.",
    bullets: [
      "השלושה ניסו להבהיר את נוכחותם באמצעות שלטים עם הכיתוב \"הצילו חטופים\".",
      "אחד הלוחמים שמע את הקריאה \"הצילו! חטופים אלון ויותם\", אך הכוחות חששו מהטעיה של מחבלים.",
      "אבי סיפר כי אלון, בוגר יהל״ם, הצליח להוציא את חבריו מהמנהרות ופעל נכון כדי להציל אותם.",
      "חבריו תיארו אותו כאדם שמח, חכם, מצחיק, יצירתי ובעל חוש הומור ייחודי.",
    ],
  },
  {
    id: "before",
    nav: "לפני 7.10",
    kicker: "שקף 4 | תמונת מצב לפני 7.10.2023",
    title: "לפני המלחמה אבשה הייתה עסק פעיל עם 12 עובדים, כולל עובדים זרים, ונתונים כספיים מסודרים להשלמה מהאקסל.",
    lead: "זהו בסיס הפעילות שממנו נמדדת הפגיעה: עסק יצרני קיים, עם עובדים, פעילות ותכניות עתידיות שנעצרו.",
    visual: "פס ייצור, מחסן או פעילות עובדים לפני 7.10",
    visualMode: "baseline",
    stats: [
      ["12", "עובדים"],
      ["Excel", "מחזור שנתי מצורף"],
      ["לפני 7.10", "נקודת הייחוס"],
    ],
  },
  {
    id: "beforeAfter",
    nav: "לפני/אחרי",
    kicker: "שקף 5 | לפני ואחרי 7.10",
    title: "הפער בין העסק שלפני המלחמה לבין המציאות שאחריה הוא לב הבקשה לשיקום.",
    lead: "אותו מפעל, אותה משפחה ואותו ידע מקצועי - אבל עם עצירת פעילות, אובדן אמון, מחסור בחומרי גלם וירידה חדה בהזמנות.",
    visual: "אפשר לשים כאן תמונת split-screen: פעילות לפני המלחמה מול מצב העסק אחרי הפגיעה",
    visualMode: "split",
    comparison: [
      ["פעילות", "ייצור שוטף ולקוחות פעילים", "יותר מחצי שנה ללא פעילות מלאה"],
      ["הזמנות", "בסיס עסקי קיים ומתפתח", "ירידה של 40% בהזמנות"],
      ["אמון", "שירותיות, אמינות ומקצועיות", "פגיעה בזמני אספקה ובאמינות החברה"],
      ["צמיחה", "תכניות להרחבת מבנה ומכונות", "השקעות נעצרו והמשך הפעילות בסיכון"],
    ],
  },
  {
    id: "impact",
    nav: "הפגיעה",
    kicker: "שקף 6 | השפעת אירועי 7.10 על העסק",
    title: "המלחמה עצרה את העסק ליותר מחצי שנה ופגעה בו פיזית, תפעולית, מסחרית ופיננסית.",
    lead: "העסק נפגע מטילים, סחורה נבזזה ונהרסה, הפתיחה באפריל 2024 על ידי מתנדבים פגעה באמינות החברה, ולקוחות עזבו.",
    visual: "תמונה חזקה של נזק, סחורה, מפעל סגור או פתיחה מחדש",
    visualMode: "crisis",
    stats: [
      ["6+", "חודשים ללא פעילות מלאה"],
      ["40%", "ירידה בהזמנות"],
      ["קשה", "גיוס עובדים"],
    ],
    bullets: [
      "מחסור בחומרי גלם וירידה בזמני האספקה.",
      "לקוחות עזבו ועובדי החברה נחטפו או נרצחו.",
      "בעקבות הקשיים נלקחו הלוואות שעדיין פתוחות.",
      "במתכונת הנוכחית יהיה קשה להמשיך ללא תכנית שיקום.",
    ],
    tone: "danger",
  },
  {
    id: "missing",
    nav: "להשלמה",
    kicker: "שקף 7 | להשלמה",
    title: "השקף השביעי עדיין פתוח לתוכן נוסף.",
    lead: "אפשר להשתמש בו בהמשך לשקף משמעות העסק עבור המשפחה, נתונים כספיים, לקוחות שאבדו, או כל מסר ביניים שתרצה לחזק לפני תכנית השיקום.",
    visual: "תמונה או נתון שיחבר בין הפגיעה לבין תכנית השיקום",
    tone: "gold",
    visualMode: "bridge",
  },
  {
    id: "recovery",
    nav: "שיקום",
    kicker: "שקף 8 | תכנית עתידית",
    title: "תכנית השיקום העתידית מתמקדת בארבעה תחומים שיחזירו לעסק יכולת ייצור, ניהול וצמיחה.",
    lead: "המטרה היא לא רק לחזור לפעילות, אלא לבנות מחדש את התנאים שיאפשרו לאבשה לגדול, לגייס לקוחות ולייצר יציבות.",
    visual: "מכונות, הדמיית עתיד, אזור ייצור או תמונת חזרה לעבודה",
    visualMode: "rebuild",
    bullets: ["שיפור מבנה", "רכש מכונות חדש", "גיוס אנשי צוות בכירים", "גיוס לקוחות וחברות"],
  },
];

const slideTuneStorageKey = "avsha-slide-panel-tunes";
const slideImageStorageKey = "avsha-slide-panel-images";

const defaultSlideTune = {
  top: 132,
  inlineStart: 86,
  width: 1220,
  titleSize: 46,
  leadSize: 21,
  statSize: 40,
  opacity: 66,
  blur: 18,
};

const tuneLimits = {
  top: [80, 520],
  inlineStart: [0, 360],
  width: [520, 1480],
  titleSize: [24, 78],
  leadSize: [14, 34],
  statSize: [22, 72],
  opacity: [18, 92],
  blur: [0, 34],
};

function clampTuneValue(key, value) {
  const [min, max] = tuneLimits[key];
  return Math.min(max, Math.max(min, value));
}

function cleanTune(tune = {}) {
  return Object.fromEntries(
    Object.entries(defaultSlideTune).map(([key, fallback]) => [
      key,
      clampTuneValue(key, Number.isFinite(tune[key]) ? tune[key] : fallback),
    ])
  );
}

function createDefaultSlideTunes() {
  return Object.fromEntries(chapters.map((chapter) => [chapter.id, cleanTune()]));
}

function loadSlideTunes() {
  try {
    const savedTunes = JSON.parse(localStorage.getItem(slideTuneStorageKey));
    const defaultTunes = createDefaultSlideTunes();
    if (!savedTunes || typeof savedTunes !== "object") return defaultTunes;

    return Object.fromEntries(
      chapters.map((chapter) => [
        chapter.id,
        cleanTune(savedTunes[chapter.id] || defaultTunes[chapter.id]),
      ])
    );
  } catch {
    return createDefaultSlideTunes();
  }
}

function loadSlideImages() {
  try {
    const savedImages = JSON.parse(localStorage.getItem(slideImageStorageKey));
    if (!savedImages || typeof savedImages !== "object") return {};
    return savedImages;
  } catch {
    return {};
  }
}

function buildManualStyle(tune) {
  return {
    "--panel-top": `${tune.top}px`,
    "--panel-inline-start": `${tune.inlineStart}px`,
    "--panel-width": `${tune.width}px`,
    "--panel-padding": "clamp(16px, 2vw, 28px)",
    "--panel-gap": "clamp(16px, 2.4vw, 34px)",
    "--panel-bg": `rgba(255, 253, 247, ${tune.opacity / 100})`,
    "--panel-blur": `${tune.blur}px`,
    "--title-size": `${tune.titleSize}px`,
    "--lead-size": `${tune.leadSize}px`,
    "--stat-size": `${tune.statSize}px`,
  };
}

function BrandLogo({ compact = false }) {
  return (
    <svg
      className={`brandLogo ${compact ? "compact" : ""}`}
      viewBox="0 0 260 220"
      aria-hidden="true"
      focusable="false"
    >
      <path className="logoGreen" d="M66 11c8-14 28-14 36 0l44 77c8 14-2 31-18 31H40c-16 0-26-17-18-31L66 11z" />
      <path className="logoDark" d="M145 0h114c13 0 21 14 15 26l-51 95c-4 8-12 13-21 13H89c-13 0-21-14-15-26L125 13c4-8 12-13 20-13z" />
      <path className="logoDark" d="M24 134h93c9 0 17 5 21 13l36 67c6 12-2 26-15 26H66c-9 0-17-5-21-13L9 160c-6-12 2-26 15-26z" />
      <path className="logoDark" d="M202 146h56c13 0 21 14 15 26l-28 52c-4 8-12 13-21 13H124c-13 0-21-14-15-26l28-52c4-8 12-13 21-13h44z" />
    </svg>
  );
}

function useScrollStory(totalSteps) {
  const [state, setState] = useState({ progress: 0, activeStep: 0 });

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const activeStep = Math.min(totalSteps - 1, Math.floor(progress * totalSteps));
      setState({ progress, activeStep });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [totalSteps]);

  return state;
}

function useScrollReveal() {
  useEffect(() => {
    const motionItems = Array.from(document.querySelectorAll(".motion"));
    const revealVisibleItems = () => {
      motionItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
          item.classList.add("isVisible");
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("isVisible");
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -10% 0px" });

    motionItems.forEach((item) => observer.observe(item));
    requestAnimationFrame(revealVisibleItems);
    window.addEventListener("scroll", revealVisibleItems, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", revealVisibleItems);
    };
  }, []);
}

function useHeroVideoPlayback(onIntroComplete) {
  useEffect(() => {
    const video = document.querySelector(".heroVideo");
    if (!video) {
      onIntroComplete();
      return;
    }

    video.muted = true;
    let fallbackTimer;
    let completed = false;

    const resetVideo = () => {
      try {
        video.currentTime = 0;
      } catch {
        // Some browsers only allow seeking after metadata is available.
      }
    };

    const completeIntro = () => {
      if (completed) return;
      completed = true;
      onIntroComplete();
    };

    const play = () => video.play().catch(() => {});
    const handleProgress = () => {
      if (!Number.isFinite(video.duration)) return;
      if (video.duration - video.currentTime <= 0.7) completeIntro();
    };
    const startFallback = () => {
      resetVideo();
      const duration = Number.isFinite(video.duration) ? video.duration : 10;
      fallbackTimer = window.setTimeout(completeIntro, Math.max(4000, duration * 1000 - 650));
    };

    resetVideo();
    play();
    video.addEventListener("canplay", play);
    video.addEventListener("loadedmetadata", startFallback, { once: true });
    video.addEventListener("timeupdate", handleProgress);
    video.addEventListener("ended", completeIntro);
    document.addEventListener("visibilitychange", play);

    return () => {
      window.clearTimeout(fallbackTimer);
      video.removeEventListener("canplay", play);
      video.removeEventListener("timeupdate", handleProgress);
      video.removeEventListener("ended", completeIntro);
      document.removeEventListener("visibilitychange", play);
    };
  }, [onIntroComplete]);
}

function useMorphNavigation() {
  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      const scrollToTarget = () => target.scrollIntoView({ behavior: "smooth", block: "start" });

      if (document.startViewTransition) {
        document.startViewTransition(scrollToTarget);
      } else {
        scrollToTarget();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}

function IntroVideoGate({ onComplete }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const fallbackTimer = window.setTimeout(() => complete(), 18000);
    return () => window.clearTimeout(fallbackTimer);
  }, []);

  const complete = () => {
    setIsDone((currentValue) => {
      if (currentValue) return currentValue;
      window.setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        onComplete();
      }, 520);
      return true;
    });
  };

  return (
    <div className={`introGate ${isDone ? "isDone" : ""}`} aria-label="סרטון פתיחה">
      <video
        className="introVideo"
        src="/intro-avsha.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={complete}
        onError={complete}
      />
      <button type="button" className="introSkip" onClick={complete}>
        דלג למצגת
      </button>
    </div>
  );
}

function Topbar({ progress }) {
  const navItems = chapters.filter((chapter) =>
    ["business", "alon", "before", "beforeAfter", "impact", "recovery"].includes(chapter.id)
  );

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="חזרה להתחלה">
          <span className="brandMark"><BrandLogo compact /></span>
          <span>
            <span className="brandTitle">אבשה פתרונות אריזה</span>
            <span className="brandSub">React scroll story</span>
          </span>
        </a>
        <nav className="chapterNav" aria-label="ניווט חלקים">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.nav}
            </a>
          ))}
        </nav>
        <span className="navSpacer" aria-hidden="true" />
      </header>
      <div className="progress" aria-hidden="true">
        <span style={{ width: `${progress * 100}%` }} />
      </div>
    </>
  );
}

function StoryTimeline({ activeStep }) {
  return (
    <aside className="storyTimeline" aria-label="ציר זמן המצגת">
      {chapters.map((chapter, index) => (
        <a
          className={`timelineItem ${index === activeStep ? "active" : ""}`}
          href={`#${chapter.id}`}
          key={chapter.id}
        >
          <span>{String(index + 1).padStart(2, "0")}</span>
          <b>{chapter.nav}</b>
        </a>
      ))}
    </aside>
  );
}

function VisualSlot({ text, index, tone, image }) {
  return (
    <div className={`visualPanel motion visualMotion ${tone === "gold" ? "darkVisual" : ""}`}>
      {image && <img className="visualImage" src={image} alt={text} loading="lazy" />}
      <span className="visualNumber">{String(index + 1).padStart(2, "0")}</span>
      <div className={`photoSlot ${image ? "withImage" : ""}`}>
        <strong>תמונה גדולה לשלב הזה</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function TuneControl({ label, value, unit = "px", onMinus, onPlus }) {
  return (
    <div className="tuneRow">
      <span>
        {label}
        <b>{value}{unit}</b>
      </span>
      <div>
        <button type="button" onClick={onMinus}>-</button>
        <button type="button" onClick={onPlus}>+</button>
      </div>
    </div>
  );
}

function SlideTunePanel({ tunes, images, selectedSlideId, onSelectSlide, onTune, onReset, onImageLoad, onImageClear }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedChapter = chapters.find((chapter) => chapter.id === selectedSlideId) || chapters[0];
  const tune = tunes[selectedChapter.id] || defaultSlideTune;
  const hasCustomImage = Boolean(images[selectedChapter.id]);
  const change = (key, amount) => {
    onTune((currentTunes) => ({
      ...currentTunes,
      [selectedChapter.id]: {
        ...tune,
        [key]: clampTuneValue(key, tune[key] + amount),
      },
    }));
  };
  const loadImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      onImageLoad(selectedChapter.id, reader.result);
    });
    reader.readAsDataURL(file);
    event.target.value = "";
  };

  return (
    <aside className={`tunePanel ${isOpen ? "isOpen" : ""}`} aria-label="כוונון ידני לשקפים">
      <button className="tuneToggle" type="button" onClick={() => setIsOpen((open) => !open)}>
        כוונון שקפים
      </button>

      {isOpen && (
        <div className="tuneBox">
          <strong>הזזת טקסט לפי שקף</strong>
          <p>בחר שקף, כוון אותו ידנית, והערכים יישמרו בדפדפן.</p>

          <label className="tuneSelect">
            שקף לעריכה
            <select value={selectedChapter.id} onChange={(event) => onSelectSlide(event.target.value)}>
              {chapters.map((chapter, index) => (
                <option key={chapter.id} value={chapter.id}>
                  שקף {index + 1} - {chapter.nav}
                </option>
              ))}
            </select>
          </label>

          <div className="tuneImageLoader">
            <label>
              טעינת תמונה לשקף
              <input type="file" accept="image/*" onChange={loadImage} />
            </label>
            <button type="button" onClick={() => onImageClear(selectedChapter.id)} disabled={!hasCustomImage}>
              נקה תמונה
            </button>
          </div>

          <div className="tuneArrows" aria-label="הזזת הכרטיס">
            <button type="button" onClick={() => change("top", -8)}>למעלה</button>
            <button type="button" onClick={() => change("top", 8)}>למטה</button>
            <button type="button" onClick={() => change("inlineStart", -8)}>ימינה</button>
            <button type="button" onClick={() => change("inlineStart", 8)}>שמאלה</button>
          </div>

          <TuneControl label="רוחב" value={tune.width} onMinus={() => change("width", -20)} onPlus={() => change("width", 20)} />
          <TuneControl label="כותרת" value={tune.titleSize} onMinus={() => change("titleSize", -2)} onPlus={() => change("titleSize", 2)} />
          <TuneControl label="טקסט" value={tune.leadSize} onMinus={() => change("leadSize", -1)} onPlus={() => change("leadSize", 1)} />
          <TuneControl label="מספרים" value={tune.statSize} onMinus={() => change("statSize", -2)} onPlus={() => change("statSize", 2)} />
          <TuneControl label="שקיפות" value={tune.opacity} unit="%" onMinus={() => change("opacity", -4)} onPlus={() => change("opacity", 4)} />
          <TuneControl label="טשטוש" value={tune.blur} onMinus={() => change("blur", -2)} onPlus={() => change("blur", 2)} />

          <button className="tuneReset" type="button" onClick={() => onReset(selectedChapter.id)}>איפוס שקף נבחר</button>
        </div>
      )}
    </aside>
  );
}

function ChapterSection({ chapter, index, heroContentVisible, isActive }) {
  const isHero = chapter.theme === "hero";
  const backgroundImage = chapter.uploadedImage || chapter.image;
  const hasFullBleedImage = Boolean(backgroundImage) && !isHero;
  const isManual = chapter.layout === "manualBand";
  const reverse = index % 2 === 0 && !isHero;

  return (
    <section
      id={chapter.id}
      className={`chapter ${isActive ? "isActive" : ""} ${isHero ? "hero" : ""} ${hasFullBleedImage ? "hasFullBleedImage" : ""} ${chapter.layout ? `layout-${chapter.layout}` : ""} ${chapter.visualMode ? `mode-${chapter.visualMode}` : ""} ${isHero && heroContentVisible ? "contentReady" : ""} ${chapter.tone || ""}`}
      style={chapter.manualStyle}
    >
      <div className="slideSignature" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <b>{chapter.nav}</b>
      </div>
      {isHero && (
        <div className="heroBackdrop" aria-hidden="true">
          {chapter.uploadedImage ? (
            <img className="heroImage" src={chapter.uploadedImage} alt="" />
          ) : (
            <video className="heroVideo" src="/intro-avsha.mp4" autoPlay muted playsInline preload="auto" />
          )}
          <div className="heroVideoOverlay" />
        </div>
      )}
      {hasFullBleedImage && (
        <div className="fullBleedMedia" aria-hidden="true">
          <img src={backgroundImage} alt="" />
          <div className="fullBleedOverlay" />
        </div>
      )}
      <div className={`chapterGrid ${hasFullBleedImage ? "fullBleedGrid" : ""} ${isManual ? "manualGrid" : ""} ${reverse ? "reverse" : ""}`}>
        {!isHero && !hasFullBleedImage && !isManual && <VisualSlot text={chapter.visual} index={index} tone={chapter.tone} image={chapter.image} />}
        <div className="copyPanel motion copyMotion">
          <span className="kicker motion childMotion">{chapter.kicker}</span>
          <h1 className="motion childMotion">{chapter.title}</h1>
          <p className="lead motion childMotion">{chapter.lead}</p>

          {chapter.tags && (
            <div className="chips">
              {chapter.tags.map((tag, itemIndex) => (
                <span className="motion childMotion" style={{ "--delay": `${itemIndex * 70}ms` }} key={tag}>{tag}</span>
              ))}
            </div>
          )}

          {chapter.stats && (
            <div className="stats">
              {chapter.stats.map(([value, label], itemIndex) => (
                <div className="stat motion childMotion" style={{ "--delay": `${itemIndex * 90}ms` }} key={`${value}-${label}`}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          )}

          {chapter.quote && (
            <blockquote className="memorialQuote motion childMotion">
              {chapter.quote}
            </blockquote>
          )}

          {chapter.comparison && (
            <div className="comparisonGrid">
              {chapter.comparison.map(([label, before, after], itemIndex) => (
                <article className="comparisonRow motion childMotion" style={{ "--delay": `${itemIndex * 90}ms` }} key={label}>
                  <b>{label}</b>
                  <span>{before}</span>
                  <strong>{after}</strong>
                </article>
              ))}
            </div>
          )}

          {chapter.bullets && (
            <div className="storyList">
              {chapter.bullets.map((item, itemIndex) => (
                <div className="storyItem motion childMotion" style={{ "--delay": `${itemIndex * 90}ms` }} key={item}>
                  <b>{String(itemIndex + 1).padStart(2, "0")}</b>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          {chapter.clients && (
            <div className="clientWall">
              {chapter.clients.map((client, itemIndex) => (
                <span className="motion childMotion" style={{ "--delay": `${itemIndex * 45}ms` }} key={client}>{client}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function App() {
  const { progress, activeStep } = useScrollStory(chapters.length);
  const [heroContentVisible, setHeroContentVisible] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [slideTunes, setSlideTunes] = useState(loadSlideTunes);
  const [slideImages, setSlideImages] = useState(loadSlideImages);
  const [selectedSlideId, setSelectedSlideId] = useState("business");
  useScrollReveal();
  useMorphNavigation();
  useHeroVideoPlayback(() => setHeroContentVisible(true));

  useEffect(() => {
    localStorage.setItem(slideTuneStorageKey, JSON.stringify(slideTunes));
  }, [slideTunes]);

  useEffect(() => {
    try {
      localStorage.setItem(slideImageStorageKey, JSON.stringify(slideImages));
    } catch {
      // Very large images can exceed browser storage; they still remain available in memory.
    }
  }, [slideImages]);

  const tunedChapters = chapters.map((chapter) =>
    {
      const tune = slideTunes[chapter.id] || defaultSlideTune;
      return {
        ...chapter,
        uploadedImage: slideImages[chapter.id],
        layout: "manualBand",
        manualStyle: buildManualStyle(tune),
      };
    }
  );

  return (
    <div className="app">
      {!introComplete && (
        <IntroVideoGate
          onComplete={() => {
            setIntroComplete(true);
            setHeroContentVisible(true);
          }}
        />
      )}
      <Topbar progress={progress} />
      <StoryTimeline activeStep={activeStep} />
      <SlideTunePanel
        tunes={slideTunes}
        images={slideImages}
        selectedSlideId={selectedSlideId}
        onSelectSlide={setSelectedSlideId}
        onTune={setSlideTunes}
        onReset={(slideId) =>
          setSlideTunes((currentTunes) => ({
            ...currentTunes,
            [slideId]: cleanTune(),
          }))
        }
        onImageLoad={(slideId, imageDataUrl) =>
          setSlideImages((currentImages) => ({
            ...currentImages,
            [slideId]: imageDataUrl,
          }))
        }
        onImageClear={(slideId) =>
          setSlideImages((currentImages) => {
            const nextImages = { ...currentImages };
            delete nextImages[slideId];
            return nextImages;
          })
        }
      />
      <main>
        {tunedChapters.map((chapter, index) => (
          <ChapterSection
            key={chapter.id}
            chapter={chapter}
            index={index}
            heroContentVisible={heroContentVisible}
            isActive={index === activeStep}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
