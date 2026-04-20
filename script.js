const parks = {
  bibe: {
    code: "BIBE",
    name: "Big Bend National Park",
    location: "Texas",
    shortName: "Big Bend",
    link: "https://www.nps.gov/bibe/index.htm",
    drawerSummary:
      "Desert basins, the Chisos Mountains, river canyons, and vast dark skies.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A desert park that feels carved from heat, distance, and starlight.",
      landmarkLabel: "Chisos Mountains under a Big Bend night sky",
      scrollCue: "Scroll to pull the park name out from behind the ridge",
      media: {
        background: "./assets/big-bend-hero-background.png",
        foreground: "./assets/big-bend-hero-foreground.png",
        foregroundTravel: "0vh",
        foregroundAlt:
          "The Chisos Mountains rising across the horizon at Big Bend National Park",
      },
      highlightTitle: "Where desert, river, and mountains all collide",
      highlightBody:
        "Established in 1944 at the great bend of the Rio Grande, Big Bend gathers the Chihuahuan Desert, the Chisos Mountains, and steep river canyons into one immense borderlands landscape. Its power comes from deep time, long distances, and the sense that the land keeps widening beyond the last ridge.",
      stats: [
        { label: "Established", value: "1944" },
        { label: "Landscape", value: "Desert and river" },
        { label: "After dark", value: "Star fields" },
      ],
    },
    overview: {
      title: "A borderlands park shaped by mountain uplift, river erosion, and immense sky.",
      body: "Big Bend lies in far West Texas where the Rio Grande turns through stone and the Chisos rise abruptly from the desert floor. The park protects dry basins, canyons, springs, and high country, so its story is always one of contrast: heat and elevation, silence and moving water, daylight scale and night-sky depth.",
      notes: [
        {
          title: "Borderlands history",
          text: "Long before the modern park boundary, this country was part of a much older human landscape shaped by travel, survival, and movement along the river corridor.",
        },
        {
          title: "Chisos high country",
          text: "The Chisos stand above the surrounding desert like a sky-island range, creating cooler elevations and making the basin below feel even broader.",
        },
        {
          title: "Rio Grande canyons",
          text: "At the southern edge of the park, the river cuts into limestone and turns open desert into steep-walled canyon country.",
        },
      ],
    },
    chapters: [
      {
        title:
          "From the basin, the Chisos rise like an island of stone above the desert.",
        body: "That surprise is central to Big Bend. Dry grassland, ocotillo, cactus, and volcanic color stretch outward across the Chihuahuan Desert, then the mountains lift sharply from the basin and pull the eye upward. The park's scale comes from that meeting of breadth and elevation.",
        factLabel: "Geography",
        fact: "The Chisos form a sky-island range, where higher, cooler ground stands apart from the surrounding desert like an ecological island.",
        scenicLabel: "Chisos light above the desert floor",
        image: {
          src: "./assets/big-bend-story-1.jpg",
          alt: "Desert grassland and the Chisos Mountains under a bright cloud-filled sky in Big Bend National Park",
          position: "center center",
        },
        art: {
          top: "#1a1522",
          mid: "#8f5135",
          bottom: "#f2a85d",
          orb: "#ffd184",
          orbGlow: "rgba(255, 191, 116, 0.46)",
          haze: "rgba(255, 193, 129, 0.3)",
          layerA: "#5b3a2a",
          layerB: "#2d2018",
          layerC: "#17100d",
          river: "rgba(255, 206, 146, 0.14)",
          riverOpacity: "0.16",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbRight: "18%",
          orbTop: "14%",
        },
      },
      {
        title:
          "Follow the Rio Grande and the open desert narrows into canyon shadow.",
        body: "Big Bend takes its name from the great curve of the Rio Grande, and the river changes the scale of everything around it. Water, cliff walls, and borderlands history meet here, where the corridor has long shaped movement through the region and carved one of the park's strongest visual identities.",
        factLabel: "History note",
        fact: "The river is both a natural boundary and an older human corridor, tying the park to the wider story of the borderlands.",
        scenicLabel: "Canyon walls catching late desert light",
        image: {
          src: "./assets/big-bend-story-2.webp",
          alt: "Towering canyon walls reflected in the Rio Grande in Big Bend National Park",
          position: "center center",
        },
        art: {
          top: "#201820",
          mid: "#71462d",
          bottom: "#dd8d44",
          orb: "#ffcb75",
          orbGlow: "rgba(255, 170, 82, 0.36)",
          haze: "rgba(255, 186, 104, 0.26)",
          layerA: "#62412b",
          layerB: "#38251a",
          layerC: "#1a120e",
          river: "rgba(119, 193, 188, 0.74)",
          riverOpacity: "0.9",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbRight: "10%",
          orbTop: "18%",
        },
      },
      {
        title: "After sunset, the park returns to its oldest scale: sky.",
        body: "When the heat drains out of the desert and the mountains turn to silhouette, Big Bend's remoteness becomes visible overhead. The stars are not an extra attraction here; they are part of the park's vastness, turning the same ridgelines into a frame for cosmic distance.",
        factLabel: "After dark",
        fact: "Big Bend is widely known for exceptionally dark night skies, one reason the park feels as vast after sunset as it does by day.",
        scenicLabel: "A sky-first view once the desert goes dark",
        image: {
          src: "./assets/big-bend-story-3.jpg",
          alt: "The Milky Way rising above silhouetted mountains in Big Bend National Park",
          position: "center center",
        },
        art: {
          top: "#08101f",
          mid: "#12263f",
          bottom: "#20324d",
          orb: "#f4ecd3",
          orbGlow: "rgba(238, 233, 214, 0.24)",
          haze: "rgba(131, 165, 221, 0.16)",
          layerA: "#26324b",
          layerB: "#182131",
          layerC: "#101723",
          river: "rgba(109, 170, 211, 0.44)",
          riverOpacity: "0.35",
          fallsOpacity: "0",
          starsOpacity: "1",
          orbRight: "20%",
          orbTop: "10%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "Protected late, shaped for ages",
        text: "Big Bend became a national park in 1944, but the forces that shaped it are far older: uplift, volcanic activity, erosion, and a river that kept cutting through stone.",
      },
      {
        label: "Geography",
        title: "Desert, mountains, and river in one boundary",
        text: "Few national parks hold this many environments at once. Dry basin, high country, springs, and canyon corridor all exist within the same protected landscape.",
      },
      {
        label: "Scale",
        title: "Distance is part of the experience",
        text: "What visitors remember is not one monument alone, but the sense of space: long roads, silent overlooks, immense skies, and land that keeps extending past the eye.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official Big Bend National Park site.",
      text: "Use the official NPS site for maps, current conditions, camping information, and the practical details needed to plan a visit.",
      label: "Visit Big Bend on NPS",
    },
    theme: {
      bgTop: "#080a0f",
      bgBottom: "#1a120f",
      surface: "rgba(14, 16, 21, 0.72)",
      surfaceStrong: "rgba(16, 19, 25, 0.9)",
      card: "rgba(255, 244, 230, 0.08)",
      cardStrong: "rgba(255, 244, 230, 0.12)",
      line: "rgba(255, 223, 188, 0.16)",
      text: "#f7f2e8",
      muted: "#c9bba7",
      accent: "#f0a858",
      accentBright: "#ffd595",
      accentSecondary: "#77c1bc",
      shadow: "rgba(0, 0, 0, 0.38)",
      heroSkyTop: "#131620",
      heroSkyBottom: "#8f5135",
      heroHorizon: "rgba(255, 184, 112, 0.52)",
      heroRidgeBack: "#56382d",
      heroRidgeMid: "#2d2018",
      heroRidgeFront: "#14100d",
      heroGlow: "rgba(255, 182, 112, 0.28)",
    },
  },
  shen: {
    code: "SHEN",
    name: "Shenandoah National Park",
    location: "Virginia",
    shortName: "Shenandoah",
    link: "https://www.nps.gov/shen/index.htm",
    drawerSummary:
      "Blue Ridge overlooks, waterfalls, forests, and long drives above the valley.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A layered mountain park built from ridgelines, mist, and long overlooks.",
      landmarkLabel: "Blue Ridge layers and Shenandoah atmosphere",
      scrollCue: "Scroll to reveal the park name through the ridges",
      titlePrimarySize: "clamp(4.3rem, 12.5vw, 8.6rem)",
      titleSecondarySize: "clamp(0.95rem, 2.2vw, 1.75rem)",
      titleMaxWidth: "54rem",
      titleOffsetY: "-7vh",
      media: {
        background: "./assets/shenandoah-hero-background.jpg",
        backgroundPosition: "center top",
        foreground: "./assets/shenandoah-hero-foreground.png",
        foregroundWidth: "min(132vw, 112rem)",
        foregroundHeight: "auto",
        foregroundTravel: "0vh",
        foregroundAlt:
          "A forested Shenandoah ridge rising across the foreground of the Blue Ridge",
      },
      highlightTitle:
        "A Blue Ridge park of long views, forested ridges, and mountain streams",
      highlightBody:
        "Established in 1935 along the Blue Ridge, Shenandoah protects a long mountain corridor of ridges, hollows, waterfalls, and overlooks. Its sense of scale arrives through layers, weather, and distance, where the mountains seem to keep unfolding long after the first view.",
      stats: [
        { label: "Established", value: "1935" },
        { label: "Landscape", value: "Blue Ridge" },
        { label: "Signature", value: "Skyline Drive" },
      ],
    },
    overview: {
      title:
        "A long mountain corridor of ridges, hollows, streams, and changing weather.",
      body: "Shenandoah runs along the crest of the Blue Ridge in Virginia, protecting forested mountains, waterfalls, rocky summits, and a long chain of overlooks stitched together by Skyline Drive. The park's beauty comes through rhythm and accumulation: one ridge after another, one valley after another, each softened by haze, light, and season.",
      notes: [
        {
          title: "Blue Ridge depth",
          text: "Atmosphere is part of the landscape here; the blue-gray distance between ridges is what gives Shenandoah its famous layered views.",
        },
        {
          title: "Skyline Drive",
          text: "The road along the crest turns the park into a long sequence of overlooks, trailheads, shifting weather, and changing mountain light.",
        },
        {
          title: "Park history",
          text: "Shenandoah took shape during the park-building era of the 1930s, carrying both the conservation ideals and the complicated human history of mountain communities once rooted in these hollows.",
        },
      ],
    },
    chapters: [
      {
        title:
          "Its presence begins with repetition: ridge after ridge dissolving into haze.",
        body: "Shenandoah reveals scale slowly. The Blue Ridge does not depend on one isolated vertical spectacle; it builds depth through successive mountain lines, weather, and distance. That layered horizon is the park's signature image and one of the reasons its views stay in memory.",
        factLabel: "Geography",
        fact: "The park follows a long stretch of the Blue Ridge, where elevation, atmosphere, and distance create the mountains' famous blue tone.",
        scenicLabel: "Blue Ridge layers carrying into the horizon",
        image: {
          src: "./assets/shenandoah-story-1.webp",
          alt: "Layered Shenandoah ridges with low clouds and mist filling the valley",
          position: "center center",
        },
        art: {
          top: "#102033",
          mid: "#3f6873",
          bottom: "#8eb6c0",
          orb: "#dbeadf",
          orbGlow: "rgba(201, 227, 215, 0.3)",
          haze: "rgba(172, 207, 214, 0.28)",
          layerA: "#4a6672",
          layerB: "#2c4651",
          layerC: "#1a2a32",
          river: "rgba(202, 229, 237, 0.22)",
          riverOpacity: "0.26",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbLeft: "18%",
          orbTop: "16%",
        },
      },
      {
        title:
          "Below the overlooks, the park folds inward into water, stone, and shade.",
        body: "Streams cut down through forested hollows, feeding cascades and waterfalls that pull the experience close. Shenandoah is not only a park of far views; it is also a park of intimate textures: wet rock, cool pools, leaf shade, and the sound of water moving through the woods.",
        factLabel: "Trail note",
        fact: "Waterfall hikes give the park a second scale, trading broad ridgelines for ravines, stream valleys, and close forest detail.",
        scenicLabel: "Cool forest light near one of the park’s cascades",
        image: {
          src: "./assets/shenandoah-story-2.jpg",
          alt: "A hiker standing in a forest stream beside a small Shenandoah waterfall",
          position: "center center",
        },
        art: {
          top: "#152726",
          mid: "#3f6b52",
          bottom: "#89b68a",
          orb: "#d8efc5",
          orbGlow: "rgba(188, 226, 174, 0.24)",
          haze: "rgba(168, 217, 190, 0.22)",
          layerA: "#41654d",
          layerB: "#274032",
          layerC: "#16261d",
          river: "rgba(188, 225, 237, 0.46)",
          riverOpacity: "0.38",
          fallsOpacity: "0.95",
          starsOpacity: "0",
          orbLeft: "14%",
          orbTop: "12%",
        },
      },
      {
        title: "Skyline Drive turns the whole park into one long unfolding overlook.",
        body: "The road along the crest gives Shenandoah its narrative shape. Rather than building toward one single monument, the park reveals itself in sequence, with each bend, pullout, and trail access point adding another view into the valleys below.",
        factLabel: "History note",
        fact: "Shenandoah was established in 1935, and the scenic road along the ridge helped define how generations of visitors have encountered the Blue Ridge.",
        scenicLabel: "A high route threading across ridges and open sky",
        image: {
          src: "./assets/shenandoah-story-3.jpg",
          alt: "Rock outcrops above rolling Shenandoah ridges in warm light",
          position: "center center",
        },
        art: {
          top: "#152536",
          mid: "#52758a",
          bottom: "#c4d8d4",
          orb: "#f6de9e",
          orbGlow: "rgba(241, 205, 123, 0.28)",
          haze: "rgba(214, 225, 213, 0.24)",
          layerA: "#678090",
          layerB: "#334a57",
          layerC: "#1d2b35",
          river: "rgba(255, 229, 156, 0.32)",
          riverOpacity: "0.22",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbLeft: "20%",
          orbTop: "15%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "A mountain park shaped in the 1930s",
        text: "Shenandoah emerged during the great park-building era of the 1930s, when the vision of a protected scenic landscape in the eastern mountains took lasting form along the Blue Ridge.",
      },
      {
        label: "Geography",
        title: "A ridgeline landscape rather than a single peak",
        text: "Shenandoah protects an extended mountain corridor of overlooks, stream valleys, rocky summits, and heavily forested slopes instead of centering on only one landmark.",
      },
      {
        label: "Atmosphere",
        title: "Its drama is cumulative",
        text: "Shenandoah's power comes from accumulation: fog lifting from valleys, evening light on rock, repeating ridges, and the sense that the mountains continue beyond the last overlook.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official Shenandoah National Park site.",
      text: "Use the official NPS site for trail information, road conditions, seasonal updates, and the planning details needed before a visit.",
      label: "Visit Shenandoah on NPS",
    },
    theme: {
      bgTop: "#071118",
      bgBottom: "#0e1b19",
      surface: "rgba(10, 16, 18, 0.72)",
      surfaceStrong: "rgba(12, 19, 21, 0.9)",
      card: "rgba(227, 245, 238, 0.08)",
      cardStrong: "rgba(227, 245, 238, 0.12)",
      line: "rgba(193, 231, 220, 0.17)",
      text: "#edf4ef",
      muted: "#b6cbc2",
      accent: "#84cbc2",
      accentBright: "#d6ece2",
      accentSecondary: "#f0c06a",
      shadow: "rgba(0, 0, 0, 0.34)",
      heroSkyTop: "#122230",
      heroSkyBottom: "#406b76",
      heroHorizon: "rgba(184, 224, 225, 0.46)",
      heroRidgeBack: "#4d6770",
      heroRidgeMid: "#284149",
      heroRidgeFront: "#17252b",
      heroGlow: "rgba(184, 223, 221, 0.24)",
    },
  },
};

const state = {
  activeParkKey: Object.entries(parks).sort(([, a], [, b]) =>
    a.name.localeCompare(b.name),
  )[0][0],
  drawerOpen: false,
};

const app = document.getElementById("app");
const parkList = document.getElementById("parkList");
const parkDrawer = document.getElementById("parkDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const menuButton = document.getElementById("menuButton");
const drawerClose = document.getElementById("drawerClose");
const currentParkMeta = document.getElementById("currentParkMeta");

let parallaxNodes = [];
let heroSection = null;
let animationQueued = false;
const HERO_REVEAL_END = 0.78;

function setTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty("--bg-top", theme.bgTop);
  root.style.setProperty("--bg-bottom", theme.bgBottom);
  root.style.setProperty("--surface", theme.surface);
  root.style.setProperty("--surface-strong", theme.surfaceStrong);
  root.style.setProperty("--card", theme.card);
  root.style.setProperty("--card-strong", theme.cardStrong);
  root.style.setProperty("--line", theme.line);
  root.style.setProperty("--text", theme.text);
  root.style.setProperty("--muted", theme.muted);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-bright", theme.accentBright);
  root.style.setProperty("--accent-secondary", theme.accentSecondary);
  root.style.setProperty("--shadow", theme.shadow);
  root.style.setProperty("--hero-sky-top", theme.heroSkyTop);
  root.style.setProperty("--hero-sky-bottom", theme.heroSkyBottom);
  root.style.setProperty("--hero-horizon", theme.heroHorizon);
  root.style.setProperty("--hero-ridge-back", theme.heroRidgeBack);
  root.style.setProperty("--hero-ridge-mid", theme.heroRidgeMid);
  root.style.setProperty("--hero-ridge-front", theme.heroRidgeFront);
  root.style.setProperty("--hero-glow", theme.heroGlow);
}

function sceneStyle(art) {
  const entries = {
    "--scene-top": art.top,
    "--scene-mid": art.mid,
    "--scene-bottom": art.bottom,
    "--orb": art.orb,
    "--orb-glow": art.orbGlow,
    "--haze": art.haze,
    "--layer-a": art.layerA,
    "--layer-b": art.layerB,
    "--layer-c": art.layerC,
    "--river": art.river,
    "--river-opacity": art.riverOpacity,
    "--falls-opacity": art.fallsOpacity,
    "--stars-opacity": art.starsOpacity,
    "--orb-top": art.orbTop || "14%",
    "--orb-left": art.orbLeft || "auto",
    "--orb-right": art.orbRight || "14%",
  };

  return Object.entries(entries)
    .map(([key, value]) => `${key}:${value}`)
    .join(";");
}

function getHeroTitleParts(park) {
  const secondary = park.name.startsWith(park.shortName)
    ? park.name.slice(park.shortName.length).trim()
    : park.name;

  return {
    primary: park.shortName,
    secondary,
  };
}

function renderChapterMedia(chapter) {
  if (chapter.image?.src) {
    const position = chapter.image.position || "center center";

    return `
      <div class="chapter-media chapter-media--photo" style="--chapter-photo-position: ${position};">
        <img
          class="chapter-photo parallax-node"
          data-parallax-speed="0.06"
          src="${chapter.image.src}"
          alt="${chapter.image.alt}"
          loading="lazy"
          decoding="async"
        />
        <div class="chapter-photo-tint" aria-hidden="true"></div>
        <span class="scene-caption">${chapter.scenicLabel}</span>
      </div>
    `;
  }

  return `
    <div class="chapter-media" style="${sceneStyle(chapter.art)}">
      <div class="scene">
        <div class="scene-orb parallax-node" data-parallax-speed="0.08" aria-hidden="true"></div>
        <div class="scene-haze parallax-node" data-parallax-speed="0.12" aria-hidden="true"></div>
        <div class="scene-stars parallax-node" data-parallax-speed="0.06" aria-hidden="true"></div>
        <div class="scene-layer layer-back parallax-node" data-parallax-speed="0.14" aria-hidden="true"></div>
        <div class="scene-layer layer-mid parallax-node" data-parallax-speed="0.22" aria-hidden="true"></div>
        <div class="scene-layer layer-front parallax-node" data-parallax-speed="0.3" aria-hidden="true"></div>
        <div class="scene-river parallax-node" data-parallax-speed="0.18" aria-hidden="true"></div>
        <div class="scene-falls parallax-node" data-parallax-speed="0.2" aria-hidden="true"></div>
      </div>
      <span class="scene-caption">${chapter.scenicLabel}</span>
    </div>
  `;
}

function renderHeroStage(park) {
  const { primary, secondary } = getHeroTitleParts(park);
  const titleWrapStyle = [
    park.hero.titlePrimarySize
      ? `--hero-title-primary-size: ${park.hero.titlePrimarySize};`
      : "",
    park.hero.titleSecondarySize
      ? `--hero-title-secondary-size: ${park.hero.titleSecondarySize};`
      : "",
    park.hero.titleMaxWidth ? `--hero-title-max-width: ${park.hero.titleMaxWidth};` : "",
    park.hero.titleOffsetY ? `--hero-title-offset-y: ${park.hero.titleOffsetY};` : "",
  ]
    .filter(Boolean)
    .join(" ");
  const titleMarkup = `
    <div class="hero-title-wrap" style="${titleWrapStyle}">
      <h1 class="hero-title">
        <span class="hero-title-primary">${primary}</span>
        <span class="hero-title-secondary">${secondary}</span>
      </h1>
    </div>
  `;

  if (park.hero.media?.background && park.hero.media?.foreground) {
    const backgroundPosition = park.hero.media.backgroundPosition || "center 28%";
    const foregroundWidth = park.hero.media.foregroundWidth || "auto";
    const foregroundHeight =
      park.hero.media.foregroundHeight || "clamp(18rem, 42vh, 28rem)";
    const foregroundBottom = park.hero.media.foregroundBottom || "-2%";
    const foregroundTravel = park.hero.media.foregroundTravel || "14vh";

    return `
      <div class="hero-stage hero-stage--photo">
        <div
          class="hero-photo-bg parallax-node"
          data-parallax-speed="0.04"
          style="background-image: url('${park.hero.media.background}'); background-position: ${backgroundPosition};"
          aria-hidden="true"
        ></div>
        <div class="hero-photo-tint" aria-hidden="true"></div>
        <div class="hero-photo-glow" aria-hidden="true"></div>
        <span class="hero-stage-caption">${park.hero.landmarkLabel}</span>
        <div class="hero-title-reveal">
          ${titleMarkup}
        </div>
        <img
          class="hero-foreground-image parallax-node"
          data-parallax-speed="0.08"
          src="${park.hero.media.foreground}"
          alt="${park.hero.media.foregroundAlt}"
          style="--hero-foreground-width: ${foregroundWidth}; --hero-foreground-height: ${foregroundHeight}; --hero-foreground-bottom: ${foregroundBottom}; --hero-foreground-travel: ${foregroundTravel};"
        />
        <span class="hero-scroll-cue">${park.hero.scrollCue}</span>
      </div>
    `;
  }

  return `
    <div class="hero-stage hero-stage--illustrated">
      <div class="hero-grid parallax-node" data-parallax-speed="0.05" aria-hidden="true"></div>
      <div class="hero-orb parallax-node" data-parallax-speed="0.08" aria-hidden="true"></div>
      <div class="hero-haze parallax-node" data-parallax-speed="0.12" aria-hidden="true"></div>
      <span class="hero-stage-caption">${park.hero.landmarkLabel}</span>
      <div class="hero-title-reveal">
        ${titleMarkup}
      </div>
      <div class="hero-ridge ridge-back parallax-node" data-parallax-speed="0.14" aria-hidden="true"></div>
      <div class="hero-ridge ridge-mid parallax-node" data-parallax-speed="0.22" aria-hidden="true"></div>
      <div class="hero-ridge ridge-front parallax-node" data-parallax-speed="0.28" aria-hidden="true"></div>
      <span class="hero-scroll-cue">${park.hero.scrollCue}</span>
    </div>
  `;
}

function renderDrawer() {
  const parkEntries = Object.entries(parks).sort(([, a], [, b]) =>
    a.name.localeCompare(b.name),
  );

  parkList.innerHTML = parkEntries
    .map(
      ([key, park]) => `
        <button
          class="park-item ${key === state.activeParkKey ? "is-active" : ""}"
          type="button"
          data-park-key="${key}"
          aria-pressed="${String(key === state.activeParkKey)}"
        >
          <span class="park-item-code">${park.code}</span>
          <span class="park-item-name">${park.name}</span>
          <span class="park-item-summary">${park.drawerSummary}</span>
        </button>
      `,
    )
    .join("");

  parkList.querySelectorAll("[data-park-key]").forEach(button => {
    button.addEventListener("click", () => {
      setActivePark(button.dataset.parkKey);
      toggleDrawer(false);
    });
  });
}

function renderMeta(park) {
  currentParkMeta.innerHTML = `<strong>${park.shortName}</strong>${park.location} · Final CTA links to NPS`;
}

function renderPage() {
  const park = parks[state.activeParkKey];

  setTheme(park.theme);
  renderMeta(park);
  document.title = `${park.shortName} · Park Atlas`;

  app.innerHTML = `
    <section class="hero" data-hero>
      <div class="hero-sticky">
        ${renderHeroStage(park)}
      </div>
    </section>

    <section class="overview section">
      <article class="overview-lead glass-card">
        <div class="section-intro">
          <p class="eyebrow">${park.hero.eyebrow}</p>
          <h2>${park.hero.highlightTitle}</h2>
          <p class="lead">${park.hero.highlightBody}</p>
        </div>

        <div class="stat-strip stat-strip--overview">
          ${park.hero.stats
            .map(
              stat => `
                <div class="stat-pill">
                  <span class="fact-card-label">${stat.label}</span>
                  <strong>${stat.value}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>

      <div class="section-intro">
        <p class="eyebrow">Park Story</p>
        <h2>${park.overview.title}</h2>
        <p class="lead">${park.overview.body}</p>
      </div>

      <div class="overview-cards">
        ${park.overview.notes
          .map(
            note => `
              <article class="note-card">
                <span class="fact-card-label">Park note</span>
                <h3>${note.title}</h3>
                <p>${note.text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="story section" aria-label="${park.shortName} landscapes">
      ${park.chapters
        .map(
          (chapter, index) => `
            <article class="chapter ${index % 2 === 1 ? "is-reversed" : ""}">
              <div class="chapter-media-wrap">
                ${renderChapterMedia(chapter)}
              </div>

              <div class="chapter-copy">
                <span class="chapter-index">0${index + 1}</span>
                <h3>${chapter.title}</h3>
                <p>${chapter.body}</p>
                <div class="chapter-fact">
                  <span>${chapter.factLabel}</span>
                  <p>${chapter.fact}</p>
                </div>
              </div>
            </article>
          `,
        )
        .join("")}
    </section>

    <section class="facts section">
      <div class="section-intro">
        <p class="eyebrow">History, Geography, Grandeur</p>
        <h2>What gives ${park.shortName} its lasting power.</h2>
        <p class="lead">
          These final notes stay rooted in the park itself: the forces that shaped the land, the human
          story carried through it, and the scale that makes the place feel larger than a single
          viewpoint.
        </p>
      </div>

      <div class="fact-grid">
        ${park.facts
          .map(
            fact => `
              <article class="fact-card">
                <span class="fact-card-label">${fact.label}</span>
                <h3>${fact.title}</h3>
                <p>${fact.text}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="cta section">
      <article class="cta-panel">
        <div class="cta-copy">
          <span class="cta-meta">${park.cta.meta}</span>
          <h2>${park.cta.title}</h2>
          <p>${park.cta.text}</p>
        </div>

        <a class="cta-button" href="${park.link}" target="_blank" rel="noreferrer">
          ${park.cta.label}
        </a>
      </article>
    </section>
  `;

  heroSection = app.querySelector("[data-hero]");
  parallaxNodes = Array.from(app.querySelectorAll(".parallax-node"));
  updateParallax();
}

function toggleDrawer(force) {
  state.drawerOpen = typeof force === "boolean" ? force : !state.drawerOpen;
  parkDrawer.classList.toggle("is-open", state.drawerOpen);
  parkDrawer.setAttribute("aria-hidden", String(!state.drawerOpen));
  drawerBackdrop.hidden = !state.drawerOpen;
  document.body.classList.toggle("drawer-open", state.drawerOpen);
  menuButton.setAttribute("aria-expanded", String(state.drawerOpen));
}

function setActivePark(key) {
  if (!parks[key] || key === state.activeParkKey) {
    return;
  }

  state.activeParkKey = key;
  renderDrawer();
  renderPage();
}

function updateParallax() {
  animationQueued = false;

  if (heroSection) {
    const rect = heroSection.getBoundingClientRect();
    const scrollRange = Math.max(
      heroSection.offsetHeight - window.innerHeight,
      1,
    );
    const rawProgress = Math.min(Math.max(-rect.top / scrollRange, 0), 1);
    const progress = Math.min(rawProgress / HERO_REVEAL_END, 1);
    heroSection.style.setProperty("--hero-progress", progress.toFixed(4));
  }

  parallaxNodes.forEach(node => {
    const rect = node.getBoundingClientRect();
    const speed = Number.parseFloat(node.dataset.parallaxSpeed || "0.1");
    const viewportMidpoint = window.innerHeight / 2;
    const elementMidpoint = rect.top + rect.height / 2;
    const offset = (viewportMidpoint - elementMidpoint) / window.innerHeight;
    const translateY = offset * speed * 180;
    const scale = 1 + Math.abs(offset) * speed * 0.08;

    node.style.setProperty("--parallax-y", `${translateY.toFixed(2)}px`);
    node.style.setProperty("--parallax-scale", scale.toFixed(4));
  });
}

function queueParallax() {
  if (animationQueued) {
    return;
  }

  animationQueued = true;
  window.requestAnimationFrame(updateParallax);
}

function bindEvents() {
  menuButton.addEventListener("click", () => toggleDrawer());
  drawerClose.addEventListener("click", () => toggleDrawer(false));
  drawerBackdrop.addEventListener("click", () => toggleDrawer(false));

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && state.drawerOpen) {
      toggleDrawer(false);
    }
  });

  window.addEventListener("scroll", queueParallax, { passive: true });
  window.addEventListener("resize", queueParallax);
}

function init() {
  renderDrawer();
  renderPage();
  bindEvents();
}

init();
