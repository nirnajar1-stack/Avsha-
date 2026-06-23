import { useEffect, useRef, useState } from "react";

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const chapters = [
  {
    id: "top",
    nav: "פתיחה",
    kicker: "שקף פתיחה",
    title: "משפחת שמריז כפר עזה אבשה פתרונות אריזה",
    lead: "",
    visual: "תמונת פתיחה רחבה: משפחת שמריז, כפר עזה או חזית אבשה",
    theme: "hero",
    visualMode: "opening",
  },
  {
    id: "alon",
    nav: "אלון",
    kicker: "שקף 2",
    title: "אלון (לולו) שמריז ז”ל",
    lead: "אלון, בן קיבוץ כפר עזה, נחטף מביתו במהלך מתקפת הטרור של ה־7 באוקטובר 2023 והוחזק בשבי חמאס ברצועת עזה במשך למעלה מחודשיים.",
    visual: "תמונה רגישה של אלון ז״ל או תמונה משפחתית, רק לפי הנחיה שלך",
    tone: "memorial",
    visualMode: "memory",
    gallery: {
      mode: "fade",
      items: [
        asset("images/alon-01.png"),
        asset("images/alon-02.png"),
        asset("images/alon-03.png"),
        asset("images/alon-04.png"),
      ],
    },
    quote: "אלון היה בן, אח, דוד וחבר אהוב. אדם בעל לב רחב, מסירות אין קץ למשפחתו ותחושת אחריות עמוקה.",
    bullets: [
      "במהלך תקופת השבי הפגין אלון תושייה, אומץ לב ורוח רצון יוצאי דופן.",
      "לאחר תקופה ממושכת הצליח להימלט משוביו יחד עם יותם חיים וסאמר טלאלקה.",
      "ב־15 בדצמבר 2023 נהרג מאש כוחות צה”ל במהלך ניסיון חבירה לכוחותינו, בתקרית טראגית שהותירה את מדינת ישראל כולה באבל.",
      "אלון הותיר אחריו משפחה אוהבת ומלוכדת: הוריו אברהם ודקלה, אחיו יונתן ועידו, ואחותו רוני.",
      "זכרו וערכיו ממשיכים להוביל את בני משפחתו גם כיום.",
    ],
  },
  {
    id: "business",
    nav: "העסק",
    kicker: "שקף 3",
    title: "אבשה פתרונות אריזה",
    lead: "העסק היה ועודנו הרבה מעבר למקור פרנסה - הוא מפעל חיים משפחתי המבטא ערכים של עבודה קשה, ציונות, מחויבות לקהילה ואמונה בתעשייה הישראלית.",
    visual: "חזית העסק, פעילות ייצור, אריזות עץ או תמונה משפחתית מהמפעל",
    image: asset("images/business-01.jpg"),
    visualMode: "roots",
    gallery: {
      mode: "fade",
      items: [
        asset("images/business-01.jpg"),
        asset("images/business-02.jpg"),
      ],
    },
    bullets: [
      "אבי שמריז - יו”ר",
      "יונתן שמריז - מנכ”ל משותף",
      "עידו שמריז - מנכ”ל, אחראי על תחומי הרכש, השיווק והתפעול",
      "אלון שמריז ז”ל - לוגיסטיקה ומשלוחים",
      "חברת אבשה פתרונות אריזה היא חברה משפחתית המתמחה בפיתוח, ייצור ואספקת פתרונות אריזה מעץ חכמים ומותאמים לצרכים תעשייתיים מורכבים.",
      "החברה מספקת פתרונות לתעשיות הביטחון, המזון, החקלאות, הטכנולוגייה והתעשייה הכבדה.",
      "לאורך שנות פעילותה הפכה החברה לשותף מקצועי ואמין עבור גופים מרכזיים במשק.",
    ],
  },
  {
    id: "october",
    nav: "7 באוקטובר",
    kicker: "שקף 4",
    title: "אירועי ה־7 באוקטובר",
    lead: "אירועי ה־7 באוקטובר פגעו באופן קשה ומשמעותי בחברת אבשה ובמשפחת שמריז. במקביל להתמודדות עם חטיפתו של אלון ז”ל ולאחר מכן עם האובדן הקשה של המשפחה, ספג העסק פגיעה ישירה.",
    visual: "תמונה חזקה של נזק, סחורה, מפעל סגור או פתיחה מחדש",
    image: asset("images/october-00.png"),
    visualMode: "crisis",
    gallery: {
      mode: "fade",
      items: [
        asset("images/october-01.jpg"),
        asset("images/october-02.jpg"),
        asset("images/october-03.jpg"),
        asset("images/october-04.jpg"),
        asset("images/october-05.jpg"),
      ],
    },
    bullets: [
      "מתחם החברה נבזז על ידי פורעים וניזוק ממתקפת הטילים.",
      "חלק מעובדי החברה נרצחו או נחטפו.",
      "פעילות העסק הושבתה לתקופה של למעלה מחצי שנה.",
      "לקוחות ביטלו או צמצמו הזמנות.",
      "החברה חוותה ירידה של 40% ממחזור ההכנסות.",
      "השילוב בין האובדן המשפחתי הכבד לבין הפגיעה העסקית יצר משבר חסר תקדים עבור המשפחה והחברה כאחד.",
    ],
    tone: "danger",
  },
  {
    id: "future",
    nav: "פיתוח עתידי",
    kicker: "שקף 5",
    title: "פיתוח עסקי עתידי",
    lead: "למרות האובדן והקשיים, משפחת שמריז בוחרת להמשיך קדימה ולפעול לשיקום העסק. עבור בני המשפחה, שיקום החברה אינו רק מהלך כלכלי - זהו המשך דרכו של אלון ז”ל והנצחת חלקו במפעל החיים המשפחתי.",
    visual: "תמונת חזרה לעבודה, ציוד חדש, צוות מקצועי או תכנון עתידי של החברה",
    image: asset("images/future-00.jpg"),
    visualMode: "rebuild",
    gallery: {
      mode: "fade",
      items: [
        asset("images/future-01.png"),
      ],
    },
    featureCards: [
      ["growth", "בניית תשתית לצמיחה ארוכת טווח"],
      ["clients", "הרחבת פעילות החברה וגיוס לקוחות חדשים"],
      ["machines", "השקעה ברכש חדש - ציוד, מכונות ותשתיות חדשות למבנה החברה"],
      ["team", "גיוס אנשי מקצוע בתחומי השיווק, הפיתוח העסקי והאסטרטגיה"],
    ],
    quote: "הצלחת העסק מהווה ביטוי לחוסן, להתמדה ולבחירה בחיים גם לאחר האובדן הכבד ביותר.",
  },
];

const slideTuneStorageKey = "avsha-slide-panel-tunes-v3";
const slideImageStorageKey = "avsha-slide-panel-images";
const slideGalleryStorageKey = "avsha-slide-panel-galleries";

const defaultSlideTune = {
  top: 14,
  inlineStart: 5,
  width: 1040,
  height: 520,
  titleSize: 40,
  leadSize: 21,
  statSize: 34,
  opacity: 64,
  blur: 18,
  textTone: 0,
};

const publishedSlideTunes = {
  top: {},
  alon: {},
  business: {},
  october: {},
  future: {},
};

const tuneLimits = {
  top: [4, 72],
  inlineStart: [2, 72],
  width: [520, 1480],
  height: [260, 820],
  titleSize: [24, 78],
  leadSize: [14, 34],
  statSize: [22, 72],
  opacity: [0, 92],
  blur: [0, 34],
  textTone: [0, 2],
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
  return Object.fromEntries(
    chapters.map((chapter) => [chapter.id, cleanTune(publishedSlideTunes[chapter.id])])
  );
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

function loadSlideGalleries() {
  try {
    const savedGalleries = JSON.parse(localStorage.getItem(slideGalleryStorageKey));
    if (!savedGalleries || typeof savedGalleries !== "object") return {};
    return savedGalleries;
  } catch {
    return {};
  }
}

function sanitizeImportedGalleries(galleries = {}) {
  if (!galleries || typeof galleries !== "object") return {};

  return Object.fromEntries(
    chapters
      .map((chapter) => {
        const gallery = galleries[chapter.id];
        if (!gallery || typeof gallery !== "object") return null;

        const items = Array.isArray(gallery.items)
          ? gallery.items.filter((item) => typeof item === "string")
          : [];
        if (!items.length) return null;

        return [
          chapter.id,
          {
            mode: ["fade", "gallery", "carousel", "stack"].includes(gallery.mode) ? gallery.mode : "fade",
            items,
          },
        ];
      })
      .filter(Boolean)
  );
}

function createSettingsSnapshot(tunes, images, galleries) {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    tunes: Object.fromEntries(
      chapters.map((chapter) => [chapter.id, cleanTune(tunes[chapter.id])])
    ),
    images,
    galleries,
  };
}

function buildManualStyle(tune, chapter = {}) {
  const contentLoad =
    (chapter.bullets?.length || 0) +
    (chapter.featureCards?.length || 0) * 1.25 +
    (chapter.quote ? 1.5 : 0);
  const densityScale = Math.max(0.72, 1 - Math.max(0, contentLoad - 3) * 0.045);
  const fitScale = Math.max(0.46, Math.min(1, tune.width / 1040, tune.height / 520) * densityScale);
  const panelPadding = Math.round(Math.max(12, Math.min(28, 28 * fitScale)));
  const panelGap = Math.round(Math.max(8, Math.min(24, 24 * fitScale)));
  const textToneStyles = [
    {
      color: "#242522",
      muted: "rgba(36, 37, 34, 0.74)",
      accent: "#009565",
      shadow: "0 1px 0 rgba(255, 253, 247, 0.64)",
      halo: "rgba(255, 253, 247, 0.38)",
    },
    {
      color: "#fffdf7",
      muted: "rgba(255, 253, 247, 0.86)",
      accent: "#ffffff",
      shadow: "0 2px 18px rgba(0, 0, 0, 0.76), 0 1px 2px rgba(0, 0, 0, 0.82)",
      halo: "rgba(0, 0, 0, 0.28)",
    },
    {
      color: "#11130f",
      muted: "rgba(17, 19, 15, 0.78)",
      accent: "#006f4d",
      shadow: "0 0 16px rgba(255, 253, 247, 0.92), 0 1px 0 rgba(255, 253, 247, 0.96)",
      halo: "rgba(255, 253, 247, 0.52)",
    },
  ];
  const textTone = textToneStyles[Math.round(tune.textTone)] || textToneStyles[0];

  return {
    "--panel-top": `${tune.top}%`,
    "--panel-inline-start": `${tune.inlineStart}%`,
    "--panel-width": `${tune.width}px`,
    "--panel-height": `${tune.height}px`,
    "--panel-padding": `${panelPadding}px`,
    "--panel-gap": `${panelGap}px`,
    "--panel-bg": `rgba(255, 253, 247, ${tune.opacity / 100})`,
    "--panel-blur": `${tune.blur}px`,
    "--title-size": `${tune.titleSize}px`,
    "--lead-size": `${tune.leadSize}px`,
    "--stat-size": `${tune.statSize}px`,
    "--title-fit-size": `${Math.round(tune.titleSize * fitScale)}px`,
    "--lead-fit-size": `${Math.round(tune.leadSize * fitScale)}px`,
    "--stat-fit-size": `${Math.round(tune.statSize * fitScale)}px`,
    "--body-fit-size": `${Math.round(Math.max(13, 23 * fitScale))}px`,
    "--caption-fit-size": `${Math.round(Math.max(12, 16 * fitScale))}px`,
    "--panel-text-color": textTone.color,
    "--panel-muted-color": textTone.muted,
    "--panel-accent-color": textTone.accent,
    "--panel-text-shadow": textTone.shadow,
    "--panel-text-halo": textTone.halo,
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
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

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
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    video.volume = 1;
    video.play().catch(() => {});
    setIsMuted(video.muted);
  };

  return (
    <div className={`introGate ${isDone ? "isDone" : ""}`} aria-label="סרטון פתיחה">
      <video
        ref={videoRef}
        className="introVideo"
        src={asset("intro-avsha.mp4")}
        autoPlay
        muted={isMuted}
        playsInline
        preload="auto"
        onEnded={complete}
        onError={complete}
      />
      <button type="button" className="videoSoundToggle" onClick={toggleSound}>
        {isMuted ? "הפעל סאונד" : "כבה סאונד"}
      </button>
      <button type="button" className="introSkip" onClick={complete}>
        דלג למצגת
      </button>
    </div>
  );
}

function Topbar({ progress }) {
  const navItems = chapters;

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="חזרה להתחלה">
          <span className="brandLogos">
            <span className="brandMark imageMark">
              <img src={asset("logo-top.png")} alt="לוגו אבשה" />
            </span>
            <span className="partnerMark">
              <img src={asset("logo-minhelet.png")} alt="לוגו מנהלת" />
            </span>
          </span>
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

function FeatureIcon({ type }) {
  const icons = {
    growth: (
      <>
        <path d="M12 50h12V32h12V20h12V8h12" />
        <path d="M48 8h12v12" />
      </>
    ),
    clients: (
      <>
        <circle cx="24" cy="22" r="8" />
        <circle cx="48" cy="20" r="7" />
        <path d="M10 54c2-12 10-18 22-18s20 6 22 18" />
        <path d="M38 38c5-4 17-3 22 9" />
      </>
    ),
    machines: (
      <>
        <path d="M12 42h40l8 12H8l4-12z" />
        <path d="M18 42V18h18v24" />
        <path d="M38 42V12h14v30" />
        <path d="M18 26h18" />
        <circle cx="24" cy="54" r="4" />
        <circle cx="48" cy="54" r="4" />
      </>
    ),
    team: (
      <>
        <circle cx="32" cy="18" r="8" />
        <circle cx="16" cy="26" r="6" />
        <circle cx="48" cy="26" r="6" />
        <path d="M14 54c2-13 9-20 18-20s16 7 18 20" />
        <path d="M4 54c1-9 6-14 13-15" />
        <path d="M60 54c-1-9-6-14-13-15" />
      </>
    ),
  };

  return (
    <svg className="featureIcon" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      {icons[type] || icons.growth}
    </svg>
  );
}

function SlideMedia({ images, mode = "fade" }) {
  const mediaImages = images.filter(Boolean);
  if (!mediaImages.length) return null;

  const secondsPerImage = mode === "carousel" ? 6.4 : 7.2;
  const animationSeconds = Math.max(mediaImages.length * secondsPerImage, 14);

  return (
    <div className={`slideMedia slideMedia-${mode}`} style={{ "--media-count": mediaImages.length }}>
      {mediaImages.map((image, imageIndex) => (
        <img
          src={image}
          alt=""
          key={`${image.slice(0, 48)}-${imageIndex}`}
          style={{
            "--media-index": imageIndex,
            "--media-duration": `${animationSeconds}s`,
            "--media-delay": `${imageIndex * secondsPerImage}s`,
            "--stack-rotation": `${(imageIndex - 2) * -4}deg`,
            "--stack-x": `${(imageIndex - 1) * 4.5}vw`,
            "--stack-y": `${(imageIndex - 1) * 2}vh`,
          }}
        />
      ))}
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

function EditModeToggle({ isEditMode, onToggle }) {
  return (
    <button
      className={`editModeToggle ${isEditMode ? "isActive" : ""}`}
      type="button"
      onClick={onToggle}
      aria-pressed={isEditMode}
    >
      {isEditMode ? "עריכה" : "צפייה"}
    </button>
  );
}

function SlideTunePanel({
  tunes,
  images,
  galleries,
  selectedSlideId,
  onSelectSlide,
  onTune,
  onReset,
  onImageLoad,
  onImageClear,
  onGalleryLoad,
  onGalleryClear,
  onGalleryModeChange,
  onSettingsExport,
  onSettingsImport,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedChapter = chapters.find((chapter) => chapter.id === selectedSlideId) || chapters[0];
  const tune = tunes[selectedChapter.id] || defaultSlideTune;
  const gallery = galleries[selectedChapter.id] || { items: [], mode: "fade" };
  const hasCustomImage = Boolean(images[selectedChapter.id]);
  const hasGallery = Boolean(gallery.items?.length);
  const change = (key, amount) => {
    onTune((currentTunes) => ({
      ...currentTunes,
      [selectedChapter.id]: {
        ...tune,
        [key]: clampTuneValue(key, tune[key] + amount),
      },
    }));
  };
  const setPanelShape = (shape) => {
    const shapeValues = {
      wide: { width: 1180, height: 440 },
      square: { width: 720, height: 720 },
      tall: { width: 620, height: 760 },
      compact: { width: 820, height: 420 },
    };
    const nextShape = shapeValues[shape] || shapeValues.wide;
    onTune((currentTunes) => ({
      ...currentTunes,
      [selectedChapter.id]: {
        ...tune,
        width: clampTuneValue("width", nextShape.width),
        height: clampTuneValue("height", nextShape.height),
      },
    }));
  };
  const setTextTone = (textTone) => {
    onTune((currentTunes) => ({
      ...currentTunes,
      [selectedChapter.id]: {
        ...tune,
        textTone: clampTuneValue("textTone", textTone),
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
  const loadGallery = async (event) => {
    const files = Array.from(event.target.files || []).filter((file) => file.type.startsWith("image/"));
    if (!files.length) return;

    const imageDataUrls = await Promise.all(
      files.map((file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.addEventListener("load", () => resolve(reader.result));
          reader.readAsDataURL(file);
        })
      )
    );
    onGalleryLoad(selectedChapter.id, imageDataUrls);
    event.target.value = "";
  };
  const loadSettings = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    onSettingsImport(file);
    event.target.value = "";
  };

  return (
    <aside className={`tunePanel ${isOpen ? "isOpen" : ""}`} aria-label="כוונון ידני לשקפים">
      <button className="tuneToggle" type="button" onClick={() => setIsOpen((open) => !open)}>
        כוונון
      </button>

      {isOpen && (
        <div className="tuneBox">
          <strong>הזזת טקסט לפי שקף</strong>
          <p>בחר שקף, כוון אותו ידנית, והערכים יישמרו בדפדפן. ל-deployment או מחשב אחר אפשר לייצא ולייבא snapshot.</p>

          <div className="tuneGlobalActions">
            <span>גיבוי הגדרות עריכה</span>
            <button type="button" onClick={onSettingsExport}>
              יצוא הגדרות
            </button>
            <label>
              יבוא הגדרות
              <input type="file" accept="application/json,.json" onChange={loadSettings} />
            </label>
          </div>

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

          <div className="tuneGalleryLoader">
            <label>
              טעינת כמה תמונות לשקף
              <input type="file" accept="image/*" multiple onChange={loadGallery} />
            </label>

            <label>
              מצב תצוגה
              <select
                value={gallery.mode || "fade"}
                onChange={(event) => onGalleryModeChange(selectedChapter.id, event.target.value)}
              >
                <option value="fade">רקע מתחלף</option>
                <option value="gallery">גלריה</option>
                <option value="carousel">קרוסלה</option>
                <option value="stack">ערימת תמונות</option>
              </select>
            </label>

            <div className="galleryActions">
              <span>{hasGallery ? `${gallery.items.length} תמונות נטענו` : "אין גלריה לשקף"}</span>
              <button type="button" onClick={() => onGalleryClear(selectedChapter.id)} disabled={!hasGallery}>
                נקה גלריה
              </button>
            </div>
          </div>

          <div className="tuneArrows" aria-label="הזזת הכרטיס">
            <button type="button" onClick={() => change("top", -1.5)}>למעלה</button>
            <button type="button" onClick={() => change("top", 1.5)}>למטה</button>
            <button type="button" onClick={() => change("inlineStart", -1.5)}>ימינה</button>
            <button type="button" onClick={() => change("inlineStart", 1.5)}>שמאלה</button>
          </div>

          <div className="tuneShapePresets" aria-label="שינוי צורת כרטיס הטקסט">
            <button type="button" onClick={() => setPanelShape("wide")}>מלבן רחב</button>
            <button type="button" onClick={() => setPanelShape("square")}>ריבוע</button>
            <button type="button" onClick={() => setPanelShape("tall")}>צר וגבוה</button>
            <button type="button" onClick={() => setPanelShape("compact")}>קומפקטי</button>
          </div>

          <div className="tuneTextTone" aria-label="מצב קריאות טקסט">
            <span>קריאות טקסט על תמונה</span>
            <button type="button" className={Math.round(tune.textTone) === 0 ? "active" : ""} onClick={() => setTextTone(0)}>
              כהה
            </button>
            <button type="button" className={Math.round(tune.textTone) === 1 ? "active" : ""} onClick={() => setTextTone(1)}>
              לבן עם צל
            </button>
            <button type="button" className={Math.round(tune.textTone) === 2 ? "active" : ""} onClick={() => setTextTone(2)}>
              כהה עם הילה
            </button>
          </div>

          <TuneControl label="רוחב" value={tune.width} onMinus={() => change("width", -20)} onPlus={() => change("width", 20)} />
          <TuneControl label="גובה" value={tune.height} onMinus={() => change("height", -20)} onPlus={() => change("height", 20)} />
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

function ChapterSection({ chapter, index, heroContentVisible, isActive, isEditMode, onPanelDrag }) {
  const isHero = chapter.theme === "hero";
  const galleryImages = chapter.gallery?.items || [];
  const hasGallery = galleryImages.length > 0;
  const backgroundImage = chapter.uploadedImage || chapter.image;
  const hasFullBleedImage = (hasGallery || Boolean(backgroundImage)) && !isHero;
  const isManual = chapter.layout === "manualBand";
  const reverse = index % 2 === 0 && !isHero;
  const panelClasses = [
    "copyPanel",
    "motion",
    "copyMotion",
    chapter.tags ? "hasTags" : "",
    chapter.stats ? "hasStats" : "",
    chapter.quote ? "hasQuote" : "",
    chapter.comparison ? "hasComparison" : "",
    chapter.bullets ? "hasBullets" : "",
    chapter.featureCards ? "hasFeatureCards" : "",
    chapter.lead ? "" : "noLead",
  ].filter(Boolean).join(" ");
  const startDrag = (event) => {
    if (!isEditMode) return;
    if (event.button !== undefined && event.button !== 0) return;

    const section = event.currentTarget.closest(".chapter");
    const panelGrid = event.currentTarget.closest(".manualGrid");
    if (!section || !panelGrid) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);

    const sectionRect = section.getBoundingClientRect();
    const gridRect = panelGrid.getBoundingClientRect();
    const offsetY = event.clientY - gridRect.top;
    const offsetFromRight = gridRect.right - event.clientX;

    const move = (moveEvent) => {
      const nextTop = ((moveEvent.clientY - sectionRect.top - offsetY) / sectionRect.height) * 100;
      const nextInlineStart = ((sectionRect.right - moveEvent.clientX - offsetFromRight) / sectionRect.width) * 100;
      onPanelDrag(chapter.id, {
        top: clampTuneValue("top", nextTop),
        inlineStart: clampTuneValue("inlineStart", nextInlineStart),
      });
    };

    const stop = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop, { once: true });
    window.addEventListener("pointercancel", stop, { once: true });
  };
  const startResize = (event) => {
    if (!isEditMode) return;
    if (event.button !== undefined && event.button !== 0) return;

    const panelGrid = event.currentTarget.closest(".manualGrid");
    if (!panelGrid) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture?.(event.pointerId);

    const gridRect = panelGrid.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;

    const resize = (moveEvent) => {
      const nextWidth = gridRect.width + startX - moveEvent.clientX;
      const nextHeight = gridRect.height + moveEvent.clientY - startY;
      onPanelDrag(chapter.id, {
        width: clampTuneValue("width", nextWidth),
        height: clampTuneValue("height", nextHeight),
      });
    };

    const stop = () => {
      window.removeEventListener("pointermove", resize);
      window.removeEventListener("pointerup", stop);
      window.removeEventListener("pointercancel", stop);
    };

    window.addEventListener("pointermove", resize);
    window.addEventListener("pointerup", stop, { once: true });
    window.addEventListener("pointercancel", stop, { once: true });
  };

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
          {hasGallery ? (
            <SlideMedia images={galleryImages} mode={chapter.gallery.mode} />
          ) : chapter.uploadedImage ? (
            <img className="heroImage" src={chapter.uploadedImage} alt="" />
          ) : (
            <video className="heroVideo" src={asset("intro-avsha.mp4")} autoPlay muted playsInline preload="auto" />
          )}
          <div className="heroVideoOverlay" />
        </div>
      )}
      {hasFullBleedImage && (
        <div className="fullBleedMedia" aria-hidden="true">
          {hasGallery ? (
            <SlideMedia images={galleryImages} mode={chapter.gallery.mode} />
          ) : (
            <img src={backgroundImage} alt="" />
          )}
          <div className="fullBleedOverlay" />
        </div>
      )}
      <div className={`chapterGrid ${hasFullBleedImage ? "fullBleedGrid" : ""} ${isManual ? "manualGrid" : ""} ${reverse ? "reverse" : ""}`}>
        {!isHero && !hasFullBleedImage && !isManual && <VisualSlot text={chapter.visual} index={index} tone={chapter.tone} image={chapter.image} />}
        {isManual && isEditMode && (
          <>
            <button
              className="dragHandle"
              type="button"
              onPointerDown={startDrag}
              aria-label={`גרירת טקסט שקף ${index + 1}`}
              title="גרור כדי למקם את הטקסט"
            >
              גרור טקסט
            </button>
            <button
              className="resizeHandle"
              type="button"
              onPointerDown={startResize}
              aria-label={`שינוי גודל כרטיס טקסט שקף ${index + 1}`}
              title="גרור כדי לשנות רוחב וגובה"
            />
          </>
        )}
        <div className={panelClasses}>
          <span className="kicker motion childMotion">{chapter.kicker}</span>
          <h1 className="motion childMotion">{chapter.title}</h1>
          {chapter.lead && <p className="lead motion childMotion">{chapter.lead}</p>}

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

          {chapter.featureCards && (
            <div className="featureCards">
              {chapter.featureCards.map(([icon, text], itemIndex) => (
                <article className="featureCard motion childMotion" style={{ "--delay": `${itemIndex * 90}ms` }} key={text}>
                  <FeatureIcon type={icon} />
                  <span>{text}</span>
                </article>
              ))}
            </div>
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
  const [isEditMode, setIsEditMode] = useState(false);
  const [slideTunes, setSlideTunes] = useState(loadSlideTunes);
  const [slideImages, setSlideImages] = useState(loadSlideImages);
  const [slideGalleries, setSlideGalleries] = useState(loadSlideGalleries);
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

  useEffect(() => {
    try {
      localStorage.setItem(slideGalleryStorageKey, JSON.stringify(slideGalleries));
    } catch {
      // Very large galleries can exceed browser storage; they still remain available in memory.
    }
  }, [slideGalleries]);

  const exportEditorSettings = () => {
    const snapshot = createSettingsSnapshot(slideTunes, slideImages, slideGalleries);
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "avsha-presentation-settings.json";
    link.click();
    URL.revokeObjectURL(url);
  };
  const importEditorSettings = (file) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      try {
        const snapshot = JSON.parse(reader.result);
        if (!snapshot || typeof snapshot !== "object") return;

        const defaultTunes = createDefaultSlideTunes();
        const nextTunes = Object.fromEntries(
          chapters.map((chapter) => [
            chapter.id,
            cleanTune(snapshot.tunes?.[chapter.id] || defaultTunes[chapter.id]),
          ])
        );

        setSlideTunes(nextTunes);
        setSlideImages(
          snapshot.images && typeof snapshot.images === "object" && !Array.isArray(snapshot.images)
            ? snapshot.images
            : {}
        );
        setSlideGalleries(sanitizeImportedGalleries(snapshot.galleries));
      } catch {
        window.alert("קובץ ההגדרות לא תקין");
      }
    });
    reader.readAsText(file);
  };

  const tunedChapters = chapters.map((chapter) =>
    {
      const tune = slideTunes[chapter.id] || defaultSlideTune;
      return {
        ...chapter,
        uploadedImage: slideImages[chapter.id],
        gallery: slideGalleries[chapter.id] || chapter.gallery,
        layout: "manualBand",
        manualStyle: buildManualStyle(tune, chapter),
      };
    }
  );

  return (
    <div className={`app ${isEditMode ? "editMode" : ""}`}>
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
      <EditModeToggle
        isEditMode={isEditMode}
        onToggle={() => setIsEditMode((currentValue) => !currentValue)}
      />
      <SlideTunePanel
        tunes={slideTunes}
        images={slideImages}
        galleries={slideGalleries}
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
        onGalleryLoad={(slideId, imageDataUrls) =>
          setSlideGalleries((currentGalleries) => {
            const currentGallery = currentGalleries[slideId] || { items: [], mode: "fade" };
            return {
              ...currentGalleries,
              [slideId]: {
                ...currentGallery,
                items: [...(currentGallery.items || []), ...imageDataUrls],
              },
            };
          })
        }
        onGalleryClear={(slideId) =>
          setSlideGalleries((currentGalleries) => {
            const nextGalleries = { ...currentGalleries };
            delete nextGalleries[slideId];
            return nextGalleries;
          })
        }
        onGalleryModeChange={(slideId, mode) =>
          setSlideGalleries((currentGalleries) => {
            const currentGallery = currentGalleries[slideId] || { items: [], mode: "fade" };
            return {
              ...currentGalleries,
              [slideId]: {
                ...currentGallery,
                mode,
              },
            };
          })
        }
        onSettingsExport={exportEditorSettings}
        onSettingsImport={importEditorSettings}
      />
      <main>
        {tunedChapters.map((chapter, index) => (
          <ChapterSection
            key={chapter.id}
            chapter={chapter}
            index={index}
            heroContentVisible={heroContentVisible}
            isActive={index === activeStep}
            isEditMode={isEditMode}
            onPanelDrag={(slideId, position) =>
              setSlideTunes((currentTunes) => ({
                ...currentTunes,
                [slideId]: {
                  ...(currentTunes[slideId] || defaultSlideTune),
                  ...position,
                },
              }))
            }
          />
        ))}
      </main>
    </div>
  );
}

export default App;
