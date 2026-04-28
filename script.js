const parks = {
  acad: {
    code: "ACAD",
    name: "Acadia National Park",
    location: "Bar Harbor, Maine",
    shortName: "Acadia",
    link: "https://www.nps.gov/acad/index.htm",
    drawerSummary:
      "Granite headlands, Atlantic surf, carriage roads, Wabanaki homeland, and mountain-to-sea views.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A North Atlantic park where granite mountains meet cold ocean, spruce forest, and sunrise light.",
      landmarkLabel: "Cadillac Mountain and the glaciated coast of Mount Desert Island",
      titlePrimarySize: "clamp(4.35rem, 12.8vw, 8.7rem)",
      titleSecondarySize: "clamp(0.95rem, 2.2vw, 1.75rem)",
      titleMaxWidth: "52rem",
      titleOffsetY: "-25.3vh",
      titlePrimaryWhiteSpace: "nowrap",
      media: {
        background: "./assets/ACAD/acadia-hero-background.jpg",
        backgroundPosition: "center center",
        backgroundInset: "0",
        backgroundParallaxSpeed: "0.04",
        backgroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foreground: "./assets/ACAD/acadia-hero-foreground.png",
        foregroundWidth: "100%",
        foregroundHeight: "100%",
        foregroundBottom: "0",
        foregroundLeft: "0",
        foregroundNodeX: "0",
        foregroundFit: "cover",
        foregroundPosition: "center center",
        foregroundParallaxSpeed: "0.08",
        foregroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foregroundFilter: "none",
        foregroundTravel: "0vh",
        foregroundAlt:
          "Granite coastal headlands and evergreen forest in Acadia National Park",
      },
      highlightTitle:
        "A Maine coast park where mountain summits, granite shore, forests, and ocean all compress together",
      highlightBody:
        "First protected as Sieur de Monts National Monument on July 8, 1916, then established as Lafayette National Park on February 26, 1919, Acadia became Acadia National Park on January 19, 1929. The park protects the highest rocky headlands along the Atlantic coastline of the United States, a landscape where glaciated granite, spruce-fir forest, lakes, carriage roads, and the ocean meet within a compact island setting.",
      stats: [
        { label: "National park", value: "1919" },
        { label: "Renamed", value: "1929" },
        { label: "Signature", value: "Cadillac" },
      ],
    },
    overview: {
      title:
        "A coastal mountain park shaped by glacier, tide, forest, and generations of human care.",
      body: "Acadia gathers an unusual range of landscapes into a small area: rounded granite summits, rocky beaches, ponds, wetlands, spruce-fir woods, historic carriage roads, and Atlantic shoreline. Its drama comes from proximity. You can move from sea level to open summit, from surf to quiet forest, and from broad ocean horizon to sheltered pond without the park ever feeling like a single-note landscape.",
      notes: [
        {
          title: "Mountains meet ocean",
          text: "NPS describes Acadia as protecting the highest rocky headlands along the Atlantic coast of the United States, with Cadillac Mountain rising above the surrounding island and bay landscape.",
        },
        {
          title: "Wabanaki homeland",
          text: "The park is part of the ancestral homeland of Wabanaki peoples, whose enduring presence and connection to this coast long predates the national park.",
        },
        {
          title: "Built for movement",
          text: "Historic motor roads, hiking trails, and carriage roads shape how visitors experience Acadia, turning the park into a network of summits, ponds, bridges, and shoreline routes.",
        },
      ],
    },
    chapters: [
      {
        title:
          "Acadia begins with granite, ice, and ocean pressure, leaving rounded mountains beside a hard Atlantic edge.",
        body: "The park's mountains and shoreline carry the imprint of deep geologic time and more recent glaciation. Ice rounded summits, scoured basins, and helped shape the island's ponds and valleys. Along the coast, waves keep working against granite ledges and cobble beaches, so the park feels both ancient and immediate: polished by ice, sharpened by weather, and constantly reintroduced by the tide.",
        factLabel: "Geology",
        fact: "Cadillac Mountain rises to 1,530 feet and is described by NPS as the highest point on the eastern seaboard of the United States.",
        scenicLabel: "Granite summits dropping toward Atlantic water",
        image: {
          src: "./assets/ACAD/acadia-story-1.jpg",
          alt: "Cliffsides dropping to the ocean below with spruce trees along the ridgelines in Acadia National Park",
          position: "center center",
        },
        art: {
          top: "#10273b",
          mid: "#55717a",
          bottom: "#c69d75",
          orb: "#ffd99f",
          orbGlow: "rgba(255, 197, 127, 0.3)",
          haze: "rgba(173, 205, 210, 0.22)",
          layerA: "#7d8f89",
          layerB: "#4f655d",
          layerC: "#263a34",
          river: "rgba(146, 190, 207, 0.24)",
          riverOpacity: "0.18",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbLeft: "16%",
          orbTop: "12%",
        },
      },
      {
        title:
          "Then the park turns vertical in a coastal way: short climbs, wide views, and the ocean always near the edge of sight.",
        body: "Acadia's scale is not western immensity. It is compression. A summit can feel exposed to the whole Atlantic, while a pond or forest path nearby feels enclosed and quiet. Cadillac Mountain, the Park Loop Road, and the carriage road system all make that compression legible, moving visitors through a designed rhythm of overlooks, stone bridges, shoreline, and woods.",
        factLabel: "Movement",
        fact: "NPS highlights 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads within Acadia.",
        scenicLabel: "Carriage roads, stone bridges, and summit views above the sea",
        image: {
          src: "./assets/ACAD/acadia-story-2.jpg",
          alt: "The summit of Cadillac Mountain overlooking Acadia National Park",
          position: "center center",
        },
        art: {
          top: "#17364d",
          mid: "#6f8d8a",
          bottom: "#d7b183",
          orb: "#ffe6b7",
          orbGlow: "rgba(255, 219, 164, 0.26)",
          haze: "rgba(193, 220, 218, 0.22)",
          layerA: "#8fa184",
          layerB: "#586d55",
          layerC: "#2b3b31",
          river: "rgba(156, 199, 215, 0.2)",
          riverOpacity: "0.16",
          fallsOpacity: "0.08",
          starsOpacity: "0",
          orbRight: "15%",
          orbTop: "13%",
        },
      },
      {
        title:
          "What makes Acadia feel distinct is the meeting of cold-water coast, evergreen forest, and long cultural memory.",
        body: "Acadia is not just a scenic island park. It is Wabanaki homeland, a place shaped by conservation philanthropy, village edges, working coastlines, and a long tradition of people moving through the landscape. The park's beauty comes through that layering: dawn on granite, tidepools below cliffs, spruce shadows, carriage roads in the woods, and ocean air moving over the mountains.",
        factLabel: "Culture",
        fact: "NPS notes that Acadia's national park story grew from donated land and preservation efforts, with the place known across time as Pemetic, Sieur de Monts, Lafayette, and Acadia.",
        scenicLabel: "Evergreen forest and ocean light around Mount Desert Island",
        image: {
          src: "./assets/ACAD/acadia-story-3.jpg",
          alt: "Aerial view of Mount Desert Island with forest, coastline, and ocean around Acadia National Park",
          position: "center center",
        },
        art: {
          top: "#0d2030",
          mid: "#304f52",
          bottom: "#a98a67",
          orb: "#fff0c8",
          orbGlow: "rgba(242, 218, 175, 0.24)",
          haze: "rgba(156, 189, 189, 0.2)",
          layerA: "#607966",
          layerB: "#354f43",
          layerC: "#192b26",
          river: "rgba(164, 207, 219, 0.2)",
          riverOpacity: "0.16",
          fallsOpacity: "0.14",
          starsOpacity: "0.16",
          orbLeft: "18%",
          orbTop: "14%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "A national park built through donations",
        text: "The site was first protected as Sieur de Monts National Monument in 1916, became Lafayette National Park in 1919, and was renamed Acadia National Park in 1929.",
      },
      {
        label: "Landmark",
        title: "Cadillac Mountain defines the skyline",
        text: "Cadillac Mountain reaches 1,530 feet and offers wide views across a glaciated coastal and island landscape.",
      },
      {
        label: "Landscape",
        title: "Its power is coastal compression",
        text: "Acadia's identity comes from how tightly it holds mountain summits, forest, freshwater, historic roads, rocky shore, and Atlantic horizon together.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official Acadia National Park site.",
      text: "Use the official NPS site for Cadillac Summit Road reservations, road conditions, seasonal closures, trail guidance, and planning details before a visit.",
      label: "Visit Acadia on NPS",
    },
    theme: {
      bgTop: "#07131d",
      bgBottom: "#101814",
      surface: "rgba(12, 18, 21, 0.72)",
      surfaceStrong: "rgba(14, 21, 24, 0.9)",
      card: "rgba(224, 239, 232, 0.08)",
      cardStrong: "rgba(224, 239, 232, 0.13)",
      line: "rgba(187, 220, 213, 0.16)",
      text: "#eef5ee",
      muted: "#b9cbc2",
      accent: "#7fc2ba",
      accentBright: "#f4d39a",
      accentSecondary: "#9cc5d5",
      shadow: "rgba(0, 0, 0, 0.34)",
      heroSkyTop: "#18334b",
      heroSkyBottom: "#729198",
      heroHorizon: "rgba(239, 202, 151, 0.42)",
      heroRidgeBack: "#738680",
      heroRidgeMid: "#425f55",
      heroRidgeFront: "#1f332e",
      heroGlow: "rgba(244, 202, 143, 0.22)",
    },
  },
  arch: {
    code: "ARCH",
    name: "Arches National Park",
    location: "Moab, Utah",
    shortName: "Arches",
    link: "https://www.nps.gov/arch/index.htm",
    drawerSummary:
      "Sandstone fins, freestanding arches, desert basins, and red rock shaped by water and time.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A red-rock park where buried sandstone cracked into fins, windows, and freestanding arches.",
      landmarkLabel: "Delicate Arch above the high desert around Moab",
      titlePrimarySize: "clamp(4.2rem, 12vw, 8.4rem)",
      titleSecondarySize: "clamp(0.95rem, 2.25vw, 1.8rem)",
      titleMaxWidth: "44rem",
      titleOffsetY: "-12vh",
      titleAlign: "right",
      titleJustify: "end",
      titleMargin: "0 clamp(1.25rem, 4vw, 3.5rem) 0 auto",
      titleTransformOrigin: "right bottom",
      titlePrimaryWhiteSpace: "nowrap",
      titleSecondaryWhiteSpace: "nowrap",
      media: {
        background: "./assets/ARCH/arches-hero-background.jpg",
        backgroundPosition: "center center",
        backgroundInset: "0",
        backgroundParallaxSpeed: "0.04",
        backgroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foreground: "./assets/ARCH/arches-hero-foreground.png",
        foregroundWidth: "100%",
        foregroundHeight: "100%",
        foregroundBottom: "0",
        foregroundLeft: "0",
        foregroundNodeX: "0",
        foregroundFit: "cover",
        foregroundPosition: "center center",
        foregroundParallaxSpeed: "0.08",
        foregroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foregroundFilter: "none",
        foregroundTravel: "0vh",
        foregroundAlt:
          "Delicate Arch rising above the red rock basin in Arches National Park",
      },
      highlightTitle:
        "A Utah desert park where sandstone fins keep opening into arches, windows, and towers",
      highlightBody:
        "Protected first as Arches National Monument in 1929 and established as a national park on November 12, 1971, Arches preserves the densest concentration of natural stone arches in the world. The park's signature forms come from fractured sandstone, deep geologic uplift, and the steady work of water, freezing, and erosion across an exposed high desert landscape.",
      stats: [
        { label: "Established", value: "1971" },
        { label: "Signature", value: "Delicate Arch" },
        { label: "Stone arches", value: "2,000+" },
      ],
    },
    overview: {
      title:
        "A high-desert landscape of fins, windows, balanced rock, and open basin light.",
      body: "Just north of Moab, Arches protects a plateau of Entrada Sandstone and other red-rock layers cut into fins, alcoves, spires, and arches. The park feels both sculptural and spacious: individual monuments stand out sharply, yet the larger impression comes from how much exposed stone, sky, and distance the landscape holds at once.",
      notes: [
        {
          title: "Fins become arches",
          text: "The park's arches begin as long sandstone fins split by fractures. Water seeps into those cracks, widens them over time, and eventually opens windows and arches through the rock.",
        },
        {
          title: "Water matters more than wind",
          text: "Despite the park's desert reputation, the National Park Service emphasizes that water does more of the shaping here than wind, especially through runoff, freezing, and thawing.",
        },
        {
          title: "More than one icon",
          text: "Delicate Arch is the most famous landmark, but the broader park includes balanced rocks, towering walls, narrow passages, and entire districts of stone forms spread across the plateau.",
        },
      ],
    },
    chapters: [
      {
        title:
          "Arches begins with buried salt, fractured sandstone, and fins waiting to be opened by water.",
        body: "The park's famous silhouettes are the visible end of a much longer geologic story. Movements deep below the surface warped overlying rock, fractures broke through the sandstone, and erosion gradually turned those cracked layers into fins. Once exposed, water kept widening the weak points until openings appeared and some of those fins became arches.",
        factLabel: "Geology",
        fact: "Arches has more than 2,000 documented stone arches because the right sandstone, fracture patterns, and erosion all meet in the same place.",
        scenicLabel: "Stone fins and windows above the desert floor",
        image: {
          src: "./assets/ARCH/arches-story-1.webp",
          alt: "Towering sandstone fins and rock spires in Arches National Park",
          position: "center center",
        },
        art: {
          top: "#12233a",
          mid: "#8a4b2d",
          bottom: "#e6aa71",
          orb: "#ffd8a2",
          orbGlow: "rgba(255, 196, 124, 0.34)",
          haze: "rgba(241, 182, 117, 0.22)",
          layerA: "#b56c43",
          layerB: "#6b3e28",
          layerC: "#2f1d16",
          river: "rgba(208, 225, 238, 0.16)",
          riverOpacity: "0.1",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbLeft: "16%",
          orbTop: "13%",
        },
      },
      {
        title:
          "Then the park narrows its vastness into singular forms that look impossible from a distance and stranger up close.",
        body: "Arches is full of individual landmarks that feel instantly legible: Delicate Arch standing free against the horizon, the Windows cut cleanly through sandstone walls, Balanced Rock poised above its base. Those forms are part of why the park is so memorable. The landscape reads almost like a gallery, but one set inside open desert space rather than enclosed by it.",
        factLabel: "Landmark",
        fact: "Delicate Arch has become one of the best-known geologic symbols in the American West and the most widely recognized image of the park.",
        scenicLabel: "A freestanding arch against basin and rim country",
        image: {
          src: "./assets/ARCH/arches-story-2.jpg",
          alt: "Delicate Arch glowing in warm light above the high desert in Arches National Park",
          position: "center center",
        },
        art: {
          top: "#17304d",
          mid: "#986041",
          bottom: "#f1bf86",
          orb: "#ffe1af",
          orbGlow: "rgba(255, 211, 141, 0.3)",
          haze: "rgba(230, 194, 150, 0.2)",
          layerA: "#cb8458",
          layerB: "#7d5036",
          layerC: "#35231b",
          river: "rgba(190, 216, 234, 0.22)",
          riverOpacity: "0.14",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbRight: "15%",
          orbTop: "12%",
        },
      },
      {
        title:
          "What holds the whole park together is not only the stone itself but the desert light moving across it.",
        body: "Morning and evening shift Arches from red to copper to rose, and the open plateau gives those changes room to register. Sparse vegetation, long sightlines, and the dry air all intensify the experience, making the park feel at once exposed and monumental. It is a landscape where color, shadow, and empty space are as important as the rock forms themselves.",
        factLabel: "Desert note",
        fact: "The same arid climate that limits vegetation also helps keep the rock forms exposed, letting light and shadow define the park's character across the day.",
        scenicLabel: "Open desert light moving across red stone",
        image: {
          src: "./assets/ARCH/arches-story-3.jpg",
          alt: "A visitor standing beneath massive red stone arches in Arches National Park",
          position: "center center",
        },
        art: {
          top: "#101f33",
          mid: "#566b78",
          bottom: "#d9a270",
          orb: "#fff0cb",
          orbGlow: "rgba(247, 220, 167, 0.26)",
          haze: "rgba(191, 206, 218, 0.18)",
          layerA: "#a9754f",
          layerB: "#61402d",
          layerC: "#2b2019",
          river: "rgba(202, 223, 236, 0.18)",
          riverOpacity: "0.1",
          fallsOpacity: "0",
          starsOpacity: "0.2",
          orbLeft: "19%",
          orbTop: "14%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "Protected first as a monument",
        text: "Arches National Monument was established on April 12, 1929, and the site became Arches National Park on November 12, 1971.",
      },
      {
        label: "Geology",
        title: "Fractured fins are the starting point",
        text: "The park's arches depend on the combination of porous sandstone, parallel fractures, and long erosion. In Arches, fins are the intermediate form that makes the later openings possible.",
      },
      {
        label: "Scale",
        title: "The park feels sculptural and expansive at once",
        text: "Visitors remember the park for specific landmarks, but the deeper impression comes from the wider plateau: red walls, distant basins, open sky, and stone forms scattered across a large desert setting.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official Arches National Park site.",
      text: "Use the official NPS site for timed-entry updates, trail information, weather, and the practical details that shape a visit in the Utah desert.",
      label: "Visit Arches on NPS",
    },
    theme: {
      bgTop: "#08111a",
      bgBottom: "#1a120d",
      surface: "rgba(15, 18, 23, 0.72)",
      surfaceStrong: "rgba(17, 21, 27, 0.9)",
      card: "rgba(247, 236, 220, 0.08)",
      cardStrong: "rgba(247, 236, 220, 0.12)",
      line: "rgba(236, 203, 168, 0.16)",
      text: "#f7f1e8",
      muted: "#ccb9a6",
      accent: "#e08e57",
      accentBright: "#ffd6a1",
      accentSecondary: "#9fc4d9",
      shadow: "rgba(0, 0, 0, 0.36)",
      heroSkyTop: "#19314c",
      heroSkyBottom: "#a55e39",
      heroHorizon: "rgba(255, 202, 139, 0.44)",
      heroRidgeBack: "#8e5f42",
      heroRidgeMid: "#593825",
      heroRidgeFront: "#2d1d15",
      heroGlow: "rgba(255, 191, 124, 0.24)",
    },
  },
  badl: {
    code: "BADL",
    name: "Badlands National Park",
    location: "Interior, South Dakota",
    shortName: "Badlands",
    link: "https://www.nps.gov/badl/index.htm",
    drawerSummary:
      "Eroded buttes, striped fossil beds, mixed-grass prairie, bison, bighorn sheep, and long plains light.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A prairie park where soft rock erodes into pinnacles, striped walls, and fossil-rich forms.",
      landmarkLabel: "Badlands buttes and mixed-grass prairie in southwestern South Dakota",
      titlePrimarySize: "clamp(4rem, 11.8vw, 8.2rem)",
      titleSecondarySize: "clamp(0.95rem, 2.2vw, 1.75rem)",
      titleMaxWidth: "56rem",
      titleOffsetY: "-25.3vh",
      titlePrimaryWhiteSpace: "nowrap",
      titleSecondaryWhiteSpace: "nowrap",
      media: {
        background: "./assets/BADL/badlands-hero-background.webp",
        backgroundPosition: "center center",
        backgroundInset: "0",
        backgroundParallaxSpeed: "0.04",
        backgroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foreground: "./assets/BADL/badlands-hero-foreground.png",
        foregroundWidth: "100%",
        foregroundHeight: "100%",
        foregroundBottom: "0",
        foregroundLeft: "0",
        foregroundNodeX: "0",
        foregroundFit: "cover",
        foregroundPosition: "center center",
        foregroundParallaxSpeed: "0.08",
        foregroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foregroundFilter: "none",
        foregroundTravel: "0vh",
        foregroundAlt:
          "Layered Badlands ridges and eroded buttes rising from prairie in South Dakota",
      },
      highlightTitle:
        "A South Dakota park where erosion exposes stone, fossil history, prairie, and sharp plains light",
      highlightBody:
        "Authorized as Badlands National Monument in 1929, officially established in 1939, and redesignated as Badlands National Park on November 10, 1978, Badlands protects roughly 244,000 acres of sharply eroded buttes, pinnacles, spires, and mixed-grass prairie. Its drama comes from contrast: fragile-looking rock striped by ancient deposits, a fossil record of vanished mammals, and living prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets still belong.",
      stats: [
        { label: "National park", value: "1978" },
        { label: "Landscape", value: "Buttes + prairie" },
        { label: "Scale", value: "244k acres" },
      ],
    },
    overview: {
      title:
        "A plains landscape where erosion turns old sediments into walls, windows, pinnacles, and fossil beds.",
      body: "Badlands sits in southwestern South Dakota, where a mixed-grass prairie ecosystem surrounds sharply eroded formations of clay-rich rock. The park feels exposed and changeable: sunlight rakes across bands of color, storms move quickly over open grassland, and erosion keeps cutting new edges into a landscape that is both sculptural and unstable.",
      notes: [
        {
          title: "Deposition, then erosion",
          text: "NPS describes Badlands rock layers as deposits laid down as early as 75 million years ago, with the modern erosional landscape beginning to form much more recently.",
        },
        {
          title: "Fossils in the open",
          text: "The park is known for one of the world's richest fossil beds, preserving evidence of ancient mammals such as horses and rhinos that once lived in this region.",
        },
        {
          title: "Prairie is part of the park",
          text: "The formations are inseparable from the surrounding mixed-grass prairie, a transition zone that supports wildlife, prairie dog towns, and broad grassland views.",
        },
      ],
    },
    chapters: [
      {
        title:
          "Badlands begins with sediment, color, and time stacked into layers that erosion can cut open.",
        body: "The park's buttes and pinnacles are not carved from hard mountain rock. They are made from softer sedimentary layers deposited across changing environments, then exposed and broken down by water, wind, freezing, thawing, and gravity. That is why the formations feel so sharp and temporary. They look monumental, but the landscape is actively wearing away and revealing new surfaces.",
        factLabel: "Geology",
        fact: "NPS notes that Badlands rocks were deposited as early as 75 million years ago and began eroding into the current landscape about 500,000 years ago.",
        scenicLabel: "Striped sedimentary walls cut into pinnacles and buttes",
        image: {
          src: "./assets/BADL/badlands-story-1.jpg",
          alt: "Badlands ridges and canyons cut through striped sedimentary rock",
          position: "center center",
        },
        art: {
          top: "#17304a",
          mid: "#b07a5a",
          bottom: "#ead2aa",
          orb: "#ffe0a7",
          orbGlow: "rgba(255, 204, 133, 0.3)",
          haze: "rgba(232, 195, 148, 0.24)",
          layerA: "#c78d68",
          layerB: "#8d5c43",
          layerC: "#3a2a22",
          river: "rgba(196, 218, 224, 0.12)",
          riverOpacity: "0.08",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbLeft: "16%",
          orbTop: "13%",
        },
      },
      {
        title:
          "Then the eroded walls become an archive, exposing fossils as the rock keeps falling apart.",
        body: "Badlands is one of the rare parks where the visible landscape and scientific record are the same thing. As erosion removes material, fossils can appear from the rock, connecting the present-day prairie to older ecosystems that held ancient horses, rhinos, and other mammals. The formations are scenic, but they are also evidence: a surface where deep time keeps becoming visible.",
        factLabel: "Fossils",
        fact: "NPS describes Badlands as containing one of the world's richest fossil beds and highlights ancient horses and rhinos among the animals preserved here.",
        scenicLabel: "Fossil-bearing ridges glowing under plains light",
        image: {
          src: "./assets/BADL/badlands-story-2.jpg",
          alt: "A fossil exposed in the dirt in Badlands National Park",
          position: "center center",
        },
        art: {
          top: "#12263f",
          mid: "#9d6f56",
          bottom: "#e8caa1",
          orb: "#ffe7b8",
          orbGlow: "rgba(255, 222, 168, 0.26)",
          haze: "rgba(235, 205, 165, 0.22)",
          layerA: "#c59a76",
          layerB: "#80604b",
          layerC: "#34281f",
          river: "rgba(176, 205, 218, 0.16)",
          riverOpacity: "0.1",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbRight: "15%",
          orbTop: "12%",
        },
      },
      {
        title:
          "What keeps the park from becoming only stone is the prairie moving through and around it.",
        body: "The mixed-grass prairie gives Badlands its living scale. Grassland wraps the formations, holds wildlife corridors, and changes color with weather and season. The park's human history is layered too, from long Indigenous presence to homesteading and the complicated legacy of the South Unit on Pine Ridge Indian Reservation lands. Badlands is not just a view of erosion; it is a living plains landscape with cultural and ecological depth.",
        factLabel: "Prairie",
        fact: "NPS describes Badlands as a mixed-grass prairie ecosystem and notes that people have been in and around the Badlands for as long as 12,000 years.",
        scenicLabel: "Mixed-grass prairie surrounding eroded Badlands walls",
        image: {
          src: "./assets/BADL/badlands-story-3.png",
          alt: "Prairie grasslands with a distant view of Badlands ridges",
          position: "center center",
        },
        art: {
          top: "#0f2234",
          mid: "#6f7252",
          bottom: "#d0a876",
          orb: "#fff0c8",
          orbGlow: "rgba(242, 218, 175, 0.24)",
          haze: "rgba(188, 203, 174, 0.18)",
          layerA: "#9b8a5f",
          layerB: "#5f6044",
          layerC: "#2b3225",
          river: "rgba(185, 213, 216, 0.14)",
          riverOpacity: "0.08",
          fallsOpacity: "0",
          starsOpacity: "0.18",
          orbLeft: "19%",
          orbTop: "14%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "From monument to national park",
        text: "Badlands National Monument was authorized in 1929, officially established in 1939, and redesignated as Badlands National Park on November 10, 1978.",
      },
      {
        label: "Geology",
        title: "The formations are still changing",
        text: "The buttes, pinnacles, and spires are shaped by ongoing erosion, which keeps cutting into the deposits and exposing new rock and fossils.",
      },
      {
        label: "Ecology",
        title: "Prairie is not background",
        text: "The park protects mixed-grass prairie as well as eroded formations, supporting wildlife including bison, bighorn sheep, prairie dogs, and black-footed ferrets.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official Badlands National Park site.",
      text: "Use the official NPS site for road conditions, weather, hiking guidance, wildlife safety, and the planning details needed before a visit.",
      label: "Visit Badlands on NPS",
    },
    theme: {
      bgTop: "#08111c",
      bgBottom: "#1a130f",
      surface: "rgba(17, 18, 21, 0.72)",
      surfaceStrong: "rgba(20, 21, 24, 0.9)",
      card: "rgba(246, 230, 204, 0.08)",
      cardStrong: "rgba(246, 230, 204, 0.13)",
      line: "rgba(236, 205, 170, 0.16)",
      text: "#f7efe3",
      muted: "#cfbda6",
      accent: "#d5915e",
      accentBright: "#ffe0ab",
      accentSecondary: "#9cbfd0",
      shadow: "rgba(0, 0, 0, 0.35)",
      heroSkyTop: "#17304a",
      heroSkyBottom: "#b77a58",
      heroHorizon: "rgba(255, 217, 157, 0.44)",
      heroRidgeBack: "#a17455",
      heroRidgeMid: "#6f4935",
      heroRidgeFront: "#32241d",
      heroGlow: "rgba(255, 199, 134, 0.23)",
    },
  },
  bibe: {
    code: "BIBE",
    name: "Big Bend National Park",
    location: "Panther Junction, Texas",
    shortName: "Big Bend",
    link: "https://www.nps.gov/bibe/index.htm",
    drawerSummary:
      "Desert basins, the Chisos Mountains, river canyons, and vast dark skies.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A desert park that feels carved from heat, distance, and starlight.",
      landmarkLabel: "Chisos Mountains under a Big Bend night sky",
      titleOffsetY: "-22vh",
      media: {
        background: "./assets/BIBE/big-bend-hero-background.png",
        foreground: "./assets/BIBE/big-bend-hero-foreground.png",
        foregroundWidth: "min(110%, 110rem)",
        foregroundHeight: "auto",
        foregroundBottom: "-25%",
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
          src: "./assets/BIBE/big-bend-story-1.jpg",
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
          src: "./assets/BIBE/big-bend-story-2.webp",
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
          src: "./assets/BIBE/big-bend-story-3.jpg",
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
  bisc: {
    code: "BISC",
    name: "Biscayne National Park",
    location: "Homestead, Florida",
    shortName: "Biscayne",
    link: "https://www.nps.gov/bisc/index.htm",
    drawerSummary:
      "Aquamarine water, mangrove shorelines, emerald keys, coral reefs, shipwrecks, and subtropical marine life.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A mostly underwater park where bay, keys, mangroves, and coral reefs meet just south of Miami.",
      landmarkLabel: "Biscayne water, lighthouse, and shoreline",
      titlePrimarySize: "clamp(4.1rem, 12vw, 8.3rem)",
      titleSecondarySize: "clamp(0.95rem, 2.2vw, 1.75rem)",
      titleMaxWidth: "54rem",
      titleOffsetY: "-24vh",
      titleAlign: "left",
      titleJustify: "start",
      titleMargin: "0 auto 0 clamp(2rem, 5vw, 4.5rem)",
      titleTransformOrigin: "left bottom",
      titlePrimaryWhiteSpace: "nowrap",
      titleSecondaryWhiteSpace: "nowrap",
      media: {
        background: "./assets/BISC/biscayne-hero-background.jpg",
        backgroundPosition: "center center",
        backgroundInset: "0",
        backgroundParallaxSpeed: "0.04",
        backgroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        backgroundAsImage: true,
        backgroundFilter: "none",
        foreground: "./assets/BISC/biscayne-hero-foreground.png",
        foregroundWidth: "100%",
        foregroundHeight: "100%",
        foregroundBottom: "0",
        foregroundLeft: "0",
        foregroundNodeX: "0",
        foregroundFit: "cover",
        foregroundPosition: "center center",
        foregroundParallaxSpeed: "0.04",
        foregroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foregroundFilter: "none",
        foregroundTravel: "0vh",
        foregroundAlt:
          "Turquoise Biscayne water and tropical islands layered across the foreground",
      },
      highlightTitle:
        "A South Florida marine park where clear water, mangroves, keys, reefs, and human history overlap",
      highlightBody:
        "Authorized first as Biscayne National Monument in 1968 and established as Biscayne National Park on June 28, 1980, Biscayne protects a rare tropical meeting of aquamarine bay, mangrove shoreline, island keys, and coral reef. The park sits within sight of Miami, yet most of its world is water, carrying marine life, shipwrecks, seagrass, and thousands of years of human history.",
      stats: [
        { label: "National park", value: "1980" },
        { label: "Water", value: "95%" },
        { label: "Landscape", value: "Bay + reef" },
      ],
    },
    overview: {
      title:
        "A mostly marine national park where the best view is often across, into, or under the water.",
      body: "Biscayne is different from many parks in the collection because its center is not a mountain, canyon, cave, or desert. It is a shallow subtropical seascape. Mangrove-fringed shorelines meet Biscayne Bay, the northern Florida Keys, seagrass meadows, shipwrecks, and coral reef habitat, making the park feel open, bright, and alive with movement.",
      notes: [
        {
          title: "A park of water",
          text: "NPS describes Biscayne as a park that is about 95 percent water, so boating, paddling, snorkeling, and diving shape much of the visitor experience.",
        },
        {
          title: "Four connected worlds",
          text: "The park protects coral reefs, mangrove forests, Biscayne Bay, and Florida Keys, each part of the larger South Florida marine ecosystem.",
        },
        {
          title: "History beneath the surface",
          text: "Biscayne carries evidence of 10,000 years of human history, from Indigenous presence and maritime travel to shipwrecks, farming, and modern preservation.",
        },
      ],
    },
    chapters: [
      {
        title:
          "Biscayne begins at the edge of the mainland, where mangroves hold the coast together.",
        body: "The park's shorelines are not a hard boundary between land and sea. Mangrove roots braid through shallow water, shelter young fish, stabilize the coast, and create habitat where birds, marine life, and tides all meet. That edge gives Biscayne its first sense of intimacy before the bay opens outward toward the keys and reef.",
        factLabel: "Coast",
        fact: "NPS describes Biscayne as protecting the longest stretch of mangrove forest along Florida's east coast.",
        scenicLabel: "Mangrove shoreline meeting clear Biscayne water",
        image: {
          src: "./assets/BISC/biscayne-story-1.jpg",
          alt: "Mangrove shoreline and clear Biscayne water in Biscayne National Park",
          position: "center center",
        },
        art: {
          top: "#0b2d3d",
          mid: "#2f8f8d",
          bottom: "#d7c28b",
          orb: "#fff0b7",
          orbGlow: "rgba(255, 222, 158, 0.28)",
          haze: "rgba(129, 214, 211, 0.24)",
          layerA: "#4c8c77",
          layerB: "#245846",
          layerC: "#132d26",
          river: "rgba(156, 232, 229, 0.34)",
          riverOpacity: "0.28",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbLeft: "16%",
          orbTop: "13%",
        },
      },
      {
        title:
          "Then the park widens into bay and keys, a landscape of distance, salt air, and low green islands.",
        body: "Biscayne's middle distance is all horizon and water. The bay can feel calm and glassy, but it is also a living nursery of seagrass, fish, birds, and tides. The keys add a thin, green line of land, reminding you that this park is not empty blue space but a linked system of islands, shallow flats, and protected marine routes.",
        factLabel: "Scale",
        fact: "Biscayne covers about 172,971 acres, most of it water, immediately south of Miami in Miami-Dade County.",
        scenicLabel: "Shallow bay water opening toward island keys",
        image: {
          src: "./assets/BISC/biscayne-story-2.jpg",
          alt: "Shallow Biscayne Bay water stretching toward low island keys",
          position: "center center",
        },
        art: {
          top: "#0d3a56",
          mid: "#43a7a7",
          bottom: "#f0d6a0",
          orb: "#fff3c9",
          orbGlow: "rgba(255, 232, 181, 0.24)",
          haze: "rgba(162, 226, 224, 0.24)",
          layerA: "#6aa48b",
          layerB: "#356f5b",
          layerC: "#183a32",
          river: "rgba(151, 231, 232, 0.4)",
          riverOpacity: "0.32",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbRight: "15%",
          orbTop: "12%",
        },
      },
      {
        title:
          "Farther out, Biscayne becomes reef country, where color, life, and history continue below the surface.",
        body: "The coral reef gives Biscayne its most hidden drama. Much of the park's richness is underwater: reef fish, corals, wrecks, mooring buoys, and the fragile structure of a marine world that depends on clear water and careful stewardship. The park's beauty is not only what you see from shore, but what waits beneath the bright surface.",
        factLabel: "Reef",
        fact: "NPS places Biscayne at the northern end of the Florida Reef, part of one of the world's longest coral barrier reef systems.",
        scenicLabel: "Coral reef and shipwreck history below turquoise water",
        image: {
          src: "./assets/BISC/biscayne-story-3.webp",
          alt: "Underwater reef life in clear turquoise water at Biscayne National Park",
          position: "center center",
        },
        art: {
          top: "#062033",
          mid: "#0b6e7a",
          bottom: "#bca874",
          orb: "#e7fff5",
          orbGlow: "rgba(164, 244, 231, 0.24)",
          haze: "rgba(99, 210, 211, 0.22)",
          layerA: "#2f9584",
          layerB: "#1d5d57",
          layerC: "#0f302f",
          river: "rgba(124, 221, 229, 0.42)",
          riverOpacity: "0.3",
          fallsOpacity: "0.08",
          starsOpacity: "0.18",
          orbLeft: "18%",
          orbTop: "14%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "From monument to marine national park",
        text: "Biscayne was authorized as a national monument on October 18, 1968, then redesignated and expanded as Biscayne National Park on June 28, 1980.",
      },
      {
        label: "Water",
        title: "The park is mostly open water",
        text: "Because about 95 percent of Biscayne is water, the park is experienced largely by boat, paddlecraft, snorkeling, diving, and looking across the bay.",
      },
      {
        label: "Ecology",
        title: "Its habitats are connected",
        text: "Mangrove shoreline, Biscayne Bay, the Florida Keys, seagrass, and coral reef all work together as one subtropical marine landscape.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official Biscayne National Park site.",
      text: "Use the official NPS site for boating information, guided eco-adventures, paddling, snorkeling, fishing rules, current conditions, and trip planning details.",
      label: "Visit Biscayne on NPS",
    },
    theme: {
      bgTop: "#04121a",
      bgBottom: "#0c1b1b",
      surface: "rgba(8, 20, 24, 0.72)",
      surfaceStrong: "rgba(10, 24, 28, 0.9)",
      card: "rgba(218, 246, 238, 0.08)",
      cardStrong: "rgba(218, 246, 238, 0.13)",
      line: "rgba(170, 226, 217, 0.16)",
      text: "#eef8f3",
      muted: "#b8d2ca",
      accent: "#66c8bd",
      accentBright: "#dff6df",
      accentSecondary: "#e3c078",
      shadow: "rgba(0, 0, 0, 0.34)",
      heroSkyTop: "#0b3248",
      heroSkyBottom: "#45a5a4",
      heroHorizon: "rgba(231, 218, 160, 0.46)",
      heroRidgeBack: "#528b7b",
      heroRidgeMid: "#286054",
      heroRidgeFront: "#142e2a",
      heroGlow: "rgba(143, 232, 218, 0.22)",
    },
  },
  blca: {
    code: "BLCA",
    name: "Black Canyon of the Gunnison National Park",
    location: "Montrose, Colorado",
    shortName: "Black Canyon",
    link: "https://www.nps.gov/blca/index.htm",
    drawerSummary:
      "Sheer Precambrian walls, narrow canyon depths, the Gunnison River, dark rock, and dramatic rim overlooks.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A Colorado canyon park where old rock, shadow, and the Gunnison River compress into a vertical wilderness.",
      landmarkLabel: "Black Canyon walls, Gunnison River, and shadowed rim country",
      titlePrimarySize: "clamp(3.7rem, 10.8vw, 7.6rem)",
      titleSecondarySize: "clamp(0.78rem, 1.8vw, 1.35rem)",
      titleMaxWidth: "58rem",
      titleOffsetY: "0vh",
      titleStartY: "38vh",
      titleTravelY: "-60vh",
      titlePrimaryWhiteSpace: "nowrap",
      media: {
        background: "./assets/BLCA/blackcanyon-hero-background.webp",
        backgroundPosition: "center center",
        backgroundInset: "0",
        backgroundParallaxSpeed: "0.04",
        backgroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        backgroundAsImage: true,
        backgroundFilter: "none",
        foreground: "./assets/BLCA/blackcanyon-hero-foreground.png",
        foregroundWidth: "100%",
        foregroundHeight: "100%",
        foregroundBottom: "0",
        foregroundLeft: "0",
        foregroundNodeX: "0",
        foregroundFit: "cover",
        foregroundPosition: "center center",
        foregroundParallaxSpeed: "0.08",
        foregroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foregroundFilter: "none",
        foregroundTravel: "0vh",
        foregroundAlt:
          "Dark cliffs and narrow canyon walls at Black Canyon of the Gunnison National Park",
      },
      highlightTitle:
        "A Colorado canyon where the Gunnison River cuts through some of North America's oldest and steepest rock",
      highlightBody:
        "Established as Black Canyon of the Gunnison National Monument on March 2, 1933, and redesignated as a national park on October 21, 1999, Black Canyon protects a deep, narrow gorge carved by the Gunnison River. Its power comes from compression: sheer walls, dark Precambrian rock, sharp spires, and a river that has spent millions of years cutting into resistant stone.",
      stats: [
        { label: "National park", value: "1999" },
        { label: "Greatest depth", value: "2,722 ft" },
        { label: "River", value: "Gunnison" },
      ],
    },
    overview: {
      title:
        "A steep, narrow canyon where river force, uplift, and ancient rock create a darker kind of grandeur.",
      body: "Black Canyon of the Gunnison sits on Colorado's western slope, where the Gunnison River drops through a gorge that feels severe, intimate, and immense at the same time. Unlike wider canyon landscapes, Black Canyon often reveals itself through vertical shock: cliff faces plunging into shadow, rim overlooks looking almost straight down, and old rock walls holding light for only parts of the day.",
      notes: [
        {
          title: "Deep, steep, and narrow",
          text: "NPS describes the canyon as an impressive combination of depth, steepness, and narrowness, with the greatest depth reaching 2,722 feet near Warner Point.",
        },
        {
          title: "Ancient rock exposed",
          text: "The park exposes nearly two-billion-year-old Precambrian basement rocks, including metamorphic and igneous rocks shaped by heat, pressure, uplift, and erosion.",
        },
        {
          title: "Two rims, one canyon",
          text: "The canyon divides the park into North Rim and South Rim areas. There is no bridge or road through the park connecting the rims, so each side feels distinct.",
        },
      ],
    },
    chapters: [
      {
        title:
          "Black Canyon begins with old, hard rock lifted high enough for a river to cut into it.",
        body: "The canyon's walls are windows into deep geologic time. Ancient rocks were buried, altered by heat and pressure, uplifted, and later exposed as the Gunnison River began carving downward. Because the rock is so resistant, the canyon developed as a narrow, steep gorge rather than a broad valley, giving the place its compressed and shadowed character.",
        factLabel: "Geology",
        fact: "NPS notes that Black Canyon exposes nearly two-billion-year-old Precambrian basement rocks, one of the strongest parts of the park's geologic story.",
        scenicLabel: "Ancient dark canyon walls cut by the Gunnison River",
        image: {
          src: "./assets/BLCA/blackcanyon-story-1.webp",
          alt: "Dark canyon walls and steep rock formations in Black Canyon of the Gunnison National Park",
          position: "center center",
        },
        art: {
          top: "#111827",
          mid: "#4a5962",
          bottom: "#9b8065",
          orb: "#f3c982",
          orbGlow: "rgba(243, 193, 118, 0.24)",
          haze: "rgba(132, 155, 164, 0.18)",
          layerA: "#667177",
          layerB: "#374149",
          layerC: "#151b21",
          river: "rgba(120, 181, 202, 0.28)",
          riverOpacity: "0.18",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbLeft: "16%",
          orbTop: "13%",
        },
      },
      {
        title:
          "Then the Gunnison River turns gravity into force, dropping fast enough to keep cutting downward.",
        body: "The river is the canyon's engine. Snowmelt from surrounding mountains helped establish the Gunnison's course, and the river's steep gradient gave it power to incise through resistant stone. Even now, the canyon's scale is inseparable from the river below, which makes the walls feel taller, darker, and more dramatic from the rim.",
        factLabel: "River",
        fact: "NPS lists the Gunnison River's average descent over the canyon's full length as 43 feet per mile.",
        scenicLabel: "A steep river corridor far below the canyon rim",
        image: {
          src: "./assets/BLCA/blackcanyon-story-2.avif",
          alt: "The Gunnison River corridor running below the steep walls of Black Canyon",
          position: "center center",
        },
        art: {
          top: "#0c1422",
          mid: "#3f4a52",
          bottom: "#8a715c",
          orb: "#ffe0a6",
          orbGlow: "rgba(255, 215, 158, 0.22)",
          haze: "rgba(110, 140, 152, 0.18)",
          layerA: "#59636a",
          layerB: "#2f3840",
          layerC: "#11171d",
          river: "rgba(96, 177, 207, 0.34)",
          riverOpacity: "0.24",
          fallsOpacity: "0.06",
          starsOpacity: "0",
          orbRight: "15%",
          orbTop: "12%",
        },
      },
      {
        title:
          "What makes the park linger is the way shadow, sky, and rim life frame the canyon's depth.",
        body: "Black Canyon is not only stone and river. Pinyon-juniper forest, oak woodlands, rim trails, inner canyon wilderness, raptors, and night skies all shape the experience. The canyon's darkness is part of its identity, but the surrounding life gives it contrast: bright rim light above, a hidden river below, and habitats changing from upland to canyon floor.",
        factLabel: "Ecology",
        fact: "NPS describes habitats from pinyon-juniper forest and Gambel oak woodland to inner canyon and riparian communities along the Gunnison River.",
        scenicLabel: "Rim woodland, shadowed cliffs, and open Colorado sky",
        image: {
          src: "./assets/BLCA/blackcanyon-story-3.jpg",
          alt: "Rim woodland and canyon country under open sky at Black Canyon of the Gunnison",
          position: "center center",
        },
        art: {
          top: "#08111d",
          mid: "#35463f",
          bottom: "#8f7859",
          orb: "#fff0c6",
          orbGlow: "rgba(242, 218, 175, 0.22)",
          haze: "rgba(126, 152, 137, 0.16)",
          layerA: "#5f6d57",
          layerB: "#354736",
          layerC: "#172218",
          river: "rgba(116, 184, 204, 0.22)",
          riverOpacity: "0.16",
          fallsOpacity: "0",
          starsOpacity: "0.18",
          orbLeft: "18%",
          orbTop: "14%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "From monument to national park",
        text: "Black Canyon of the Gunnison was established as a national monument on March 2, 1933, and redesignated as a national park on October 21, 1999.",
      },
      {
        label: "Dimensions",
        title: "Depth and narrowness define the drama",
        text: "The canyon reaches a greatest depth of 2,722 feet near Warner Point, and the Narrows reaches only about 40 feet wide at river level.",
      },
      {
        label: "Landscape",
        title: "The park is severe by design",
        text: "Black Canyon's character comes from a rare combination of steep walls, old resistant rock, shadow, rim overlooks, and the Gunnison River far below.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official Black Canyon of the Gunnison National Park site.",
      text: "Use the official NPS site for road status, rim access, trail conditions, inner canyon guidance, camping, and seasonal planning details before a visit.",
      label: "Visit Black Canyon on NPS",
    },
    theme: {
      bgTop: "#050910",
      bgBottom: "#11100e",
      surface: "rgba(12, 15, 18, 0.74)",
      surfaceStrong: "rgba(15, 18, 22, 0.92)",
      card: "rgba(227, 226, 217, 0.08)",
      cardStrong: "rgba(227, 226, 217, 0.13)",
      line: "rgba(205, 202, 184, 0.16)",
      text: "#f1eee6",
      muted: "#c5bdae",
      accent: "#9eb2b9",
      accentBright: "#f3d49a",
      accentSecondary: "#7db4c5",
      shadow: "rgba(0, 0, 0, 0.42)",
      heroSkyTop: "#101827",
      heroSkyBottom: "#4d5960",
      heroHorizon: "rgba(223, 191, 137, 0.38)",
      heroRidgeBack: "#59646a",
      heroRidgeMid: "#323b42",
      heroRidgeFront: "#141a1f",
      heroGlow: "rgba(218, 184, 126, 0.2)",
    },
  },
  carl: {
    code: "CAVE",
    name: "Carlsbad Caverns National Park",
    location: "Carlsbad, New Mexico",
    shortName: "Carlsbad Caverns",
    link: "https://www.nps.gov/cave/index.htm",
    drawerSummary:
      "Immense cave chambers, sulfuric-acid geology, bat flights, and desert country above the reef.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A cave park where desert surface gives way to vast underground chambers and mineral forms.",
      landmarkLabel: "The natural entrance and cavern system beneath the Chihuahuan Desert",
      titlePrimarySize: "clamp(3.3rem, 10vw, 6.6rem)",
      titleSecondarySize: "clamp(0.95rem, 2.3vw, 1.65rem)",
      titleMaxWidth: "60rem",
      titleOffsetY: "0vh",
      titleAlign: "left",
      titleJustify: "start",
      titleMargin: "0 auto 0 clamp(3rem, 6vw, 5.5rem)",
      titleStartY: "-54vh",
      titleTravelY: "50vh",
      titleTransformOrigin: "left top",
      media: {
        background: "./assets/CARL/CarlsbadCavern.jpg",
        backgroundPosition: "center center",
        foreground: "./assets/CARL/carlsbad-hero-foreground.png",
        foregroundWidth: "100%",
        foregroundHeight: "100%",
        foregroundBottom: "0",
        foregroundLeft: "0",
        foregroundNodeX: "0",
        foregroundFit: "cover",
        foregroundPosition: "center center",
        foregroundTravel: "0vh",
        foregroundAlt:
          "The natural entrance area and cavern landscape at Carlsbad Caverns National Park",
      },
      highlightTitle:
        "A national park defined as much by what lies underground as what rises above it",
      highlightBody:
        "Protected first as a national monument in 1923 and redesignated as a national park in 1930, Carlsbad Caverns preserves more than 119 known caves in the Guadalupe Mountains. Its central story is subterranean: sulfuric acid dissolved limestone into immense chambers later decorated with stalactites, stalagmites, and other formations, while the natural entrance and evening bat flights tie the underground world back to the desert surface.",
      stats: [
        { label: "Established", value: "1930" },
        { label: "Signature", value: "Big Room" },
        { label: "Formation", value: "Sulfuric acid" },
      ],
    },
    overview: {
      title:
        "A Guadalupe Mountains cave park where ancient reef rock opens into huge underground space.",
      body: "Carlsbad Caverns sits in the Chihuahuan Desert of southeastern New Mexico, but its most powerful landscape is below the surface. The park protects a cave system carved through ancient reef limestone, plus desert slopes, canyons, and wildlife above ground. That contrast is what makes the park distinct: hard sun and open country outside, cool darkness and immense mineral architecture below.",
      notes: [
        {
          title: "Sulfuric-acid cave origin",
          text: "Unlike caves formed mainly by rainwater, Carlsbad Cavern and its neighboring caves were shaped when sulfuric acid dissolved limestone deep underground.",
        },
        {
          title: "The Big Room",
          text: "The park's best-known chamber is the Big Room, a cave space so large it reads less like a tunnel and more like an underground landscape.",
        },
        {
          title: "Bat flight",
          text: "Seasonal evening bat flights at the natural entrance remain one of the park's defining experiences, linking the cavern to the sky above it.",
        },
      ],
    },
    chapters: [
      {
        title:
          "Its most important landscape is hidden: ancient reef limestone dissolved into enormous chambers below the desert.",
        body: "Carlsbad Caverns begins with geology that most visitors never see directly. In the Guadalupe Mountains, reef rock laid down by an inland sea was later altered underground, where sulfuric acid dissolved limestone and opened passageways, voids, and chambers on a scale that still feels improbable once you step inside.",
        factLabel: "Geology",
        fact: "The park protects more than 119 known caves, and NPS describes their origin as the result of sulfuric acid dissolving limestone rather than the more familiar rainwater cave process.",
        scenicLabel: "Ancient reef rock opening into underground space",
        image: {
          src: "./assets/CARL/carlsbad-story-1.jpg",
          alt: "A cave chamber in Carlsbad Caverns with mineral formations and shadowed stone",
          position: "center center",
        },
        art: {
          top: "#060910",
          mid: "#201c1c",
          bottom: "#6d5646",
          orb: "#f1d9a7",
          orbGlow: "rgba(230, 197, 136, 0.24)",
          haze: "rgba(154, 121, 92, 0.22)",
          layerA: "#56473e",
          layerB: "#312722",
          layerC: "#171314",
          river: "rgba(233, 220, 192, 0.06)",
          riverOpacity: "0.05",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbRight: "18%",
          orbTop: "16%",
        },
      },
      {
        title:
          "Inside the Big Room, underground space stops feeling enclosed and starts feeling monumental.",
        body: "One reason Carlsbad Caverns stays in memory is that it overturns expectations of scale. The Big Room is not simply a cave passage enlarged; it is a chamber broad enough to feel almost civic in size, filled with formations, shadows, and floor features that make the underground world read as architecture and landscape at once.",
        factLabel: "Scale",
        fact: "The Big Room is described by the National Park Service as the largest single cave chamber by volume in North America.",
        scenicLabel: "Mineral forms spread across a vast cave chamber",
        image: {
          src: "./assets/CARL/carlsbad-story-2.jpg",
          alt: "The Big Room at Carlsbad Caverns with formations rising from the cave floor",
          position: "center center",
        },
        art: {
          top: "#090b12",
          mid: "#2b231f",
          bottom: "#8a694f",
          orb: "#f5dfb8",
          orbGlow: "rgba(237, 213, 173, 0.2)",
          haze: "rgba(192, 160, 126, 0.18)",
          layerA: "#705947",
          layerB: "#41322a",
          layerC: "#221b19",
          river: "rgba(222, 213, 188, 0.08)",
          riverOpacity: "0.08",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbLeft: "16%",
          orbTop: "14%",
        },
      },
      {
        title:
          "At dusk, the park reverses direction and the cavern pours living movement back into the sky.",
        body: "Carlsbad is not only a story of stone. In warmer seasons, Brazilian free-tailed bats rise from the natural entrance in evening waves, turning the cave mouth into one of the park's most famous scenes. It is a reminder that the cavern is part of a larger desert system, connected to weather, insects, migration, and nightfall.",
        factLabel: "Wildlife",
        fact: "The park's most famous mammals are its bats, and the evening Bat Flight Program is one of Carlsbad Caverns' best-known visitor experiences.",
        scenicLabel: "The cavern mouth opening onto a darkening desert sky",
        image: {
          src: "./assets/CARL/carlsbad-story-3.jpg",
          alt: "The natural entrance area at Carlsbad Caverns opening toward the desert sky",
          position: "center center",
        },
        art: {
          top: "#0b1220",
          mid: "#25354a",
          bottom: "#5a473d",
          orb: "#e8d8be",
          orbGlow: "rgba(221, 211, 194, 0.16)",
          haze: "rgba(113, 139, 176, 0.18)",
          layerA: "#4a5564",
          layerB: "#2a313a",
          layerC: "#181d23",
          river: "rgba(162, 176, 201, 0.12)",
          riverOpacity: "0.1",
          fallsOpacity: "0",
          starsOpacity: "0.7",
          orbRight: "20%",
          orbTop: "12%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "Protected in two steps",
        text: "Carlsbad Cave National Monument was created on October 25, 1923, and Congress redesignated it as Carlsbad Caverns National Park on May 14, 1930.",
      },
      {
        label: "Geology",
        title: "A cave park built from reef limestone",
        text: "The park's caverns lie within the ancient Capitan Reef of the Guadalupe Mountains, linking Carlsbad directly to the same deep geologic story visible above ground at nearby Guadalupe Mountains National Park.",
      },
      {
        label: "Scale",
        title: "Above and below are one landscape",
        text: "What gives Carlsbad its power is the contrast between desert surface and cavern depth: open sky, rocky canyons, and cactus above; darkness, mineral decoration, and huge chambers below.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official Carlsbad Caverns National Park site.",
      text: "Use the official NPS site for timed-entry information, cavern access details, bat flight updates, and the planning basics before a visit.",
      label: "Visit Carlsbad Caverns on NPS",
    },
    theme: {
      bgTop: "#05070d",
      bgBottom: "#130f10",
      surface: "rgba(14, 15, 18, 0.72)",
      surfaceStrong: "rgba(16, 18, 22, 0.9)",
      card: "rgba(242, 231, 214, 0.08)",
      cardStrong: "rgba(242, 231, 214, 0.12)",
      line: "rgba(222, 201, 173, 0.16)",
      text: "#f4eee5",
      muted: "#c6b8a8",
      accent: "#d79b62",
      accentBright: "#f0dfbb",
      accentSecondary: "#88a7b2",
      shadow: "rgba(0, 0, 0, 0.38)",
      heroSkyTop: "#10141d",
      heroSkyBottom: "#6a4c39",
      heroHorizon: "rgba(228, 188, 140, 0.42)",
      heroRidgeBack: "#6b5747",
      heroRidgeMid: "#3e3027",
      heroRidgeFront: "#211917",
      heroGlow: "rgba(224, 190, 141, 0.2)",
    },
  },
  gumo: {
    code: "GUMO",
    name: "Guadalupe Mountains National Park",
    location: "Salt Flat, Texas",
    shortName: "Guadalupe Mountains",
    link: "https://www.nps.gov/gumo/index.htm",
    drawerSummary:
      "Ancient reef limestone, Texas high peaks, desert basins, and canyons with hidden water.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A mountain park where an ancient reef rises straight out of the Chihuahuan Desert.",
      landmarkLabel: "El Capitan and the Guadalupe range above the desert floor",
      titlePrimarySize: "clamp(2.7rem, 8.8vw, 6.2rem)",
      titleSecondarySize: "clamp(0.9rem, 2vw, 1.55rem)",
      titleMaxWidth: "68rem",
      titleOffsetY: "-4vh",
      titleAlign: "left",
      titleJustify: "start",
      titleMargin: "0 auto 0 clamp(1.5rem, 4vw, 3.5rem)",
      media: {
        background: "./assets/GUMO/guadalupe-hero-background.jpg",
        backgroundPosition: "center center",
        foreground: "./assets/GUMO/guadalupe-hero-foreground.png",
        foregroundWidth: "min(128vw, 110rem)",
        foregroundHeight: "auto",
        foregroundBottom: "-42%",
        foregroundTravel: "0vh",
        foregroundAlt:
          "The Guadalupe Mountains rising above the desert floor in West Texas",
      },
      highlightTitle:
        "An exposed fossil reef turned into the highest mountains in Texas",
      highlightBody:
        "Formally established in 1972, Guadalupe Mountains protects the world's most extensive Permian fossil reef, the four highest peaks in Texas, and a dramatic transition from desert floor to high-country forest. The park feels abrupt and vertical, with limestone walls, wind-shaped ridges, and canyons that hide water and color inside an otherwise arid landscape.",
      stats: [
        { label: "Established", value: "1972" },
        { label: "High point", value: "Guadalupe Peak" },
        { label: "Signature", value: "Permian reef" },
      ],
    },
    overview: {
      title:
        "A West Texas mountain park where reef limestone, desert basins, and sheltered canyons share one skyline.",
      body: "Just south of the New Mexico line, the Guadalupe range rises more than 3,000 feet above the Chihuahuan Desert. What looks like a hard mountain wall is also deep geologic time made visible: an ancient marine reef now lifted, eroded, and exposed as cliffs, summits, and canyon walls. Guadalupe Mountains carries that dual identity everywhere, balancing desert openness with unexpectedly lush pockets like McKittrick Canyon.",
      notes: [
        {
          title: "Capitan Reef",
          text: "The range is one of the best exposed sections of the ancient Permian reef complex, making the park as much a geologic landmark as a scenic one.",
        },
        {
          title: "Texas high country",
          text: "Guadalupe Peak is the highest point in Texas, and the park protects the state's four highest summits along the same limestone backbone.",
        },
        {
          title: "McKittrick Canyon",
          text: "Inside a harsh desert setting, the canyon shelters a riparian corridor known for shade, seasonal color, and a different, more intimate scale of experience.",
        },
      ],
    },
    chapters: [
      {
        title:
          "From the basin, the mountains look less like rolling uplands than a lifted wall of reef limestone.",
        body: "Guadalupe Mountains announces itself with abrupt relief. El Capitan and the surrounding escarpment rise sharply above the desert floor, making the range feel like a geologic edge rather than a gradual climb. That visual force comes from the park's ancient reef rock, now exposed as cliffs, ledges, and pale stone faces.",
        factLabel: "Geology",
        fact: "The park protects the world's most extensive Permian fossil reef, one of its defining natural values and the reason the range reads so clearly in profile.",
        scenicLabel: "Reef-built ridges catching late desert light",
        image: {
          src: "./assets/GUMO/guadalupe-story-1.jpg",
          alt: "The Guadalupe Mountains rising in warm light above the desert basin",
          position: "center center",
        },
        art: {
          top: "#0f1721",
          mid: "#5b4736",
          bottom: "#d3a06a",
          orb: "#ffe0a2",
          orbGlow: "rgba(255, 204, 132, 0.34)",
          haze: "rgba(240, 186, 125, 0.26)",
          layerA: "#8c6a4c",
          layerB: "#4e3929",
          layerC: "#231a14",
          river: "rgba(245, 225, 180, 0.08)",
          riverOpacity: "0.08",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbRight: "14%",
          orbTop: "12%",
        },
      },
      {
        title:
          "Then the range folds inward, and dry West Texas gives way to a protected canyon oasis.",
        body: "McKittrick Canyon changes the park's texture. Instead of exposed desert slopes and skyline views, the canyon gathers streamside vegetation, shade, and seasonal color behind high walls. That contrast is part of Guadalupe Mountains' character: hard, open country outside; sheltered life and movement inside.",
        factLabel: "Landscape",
        fact: "McKittrick Canyon is one of the park's sharpest contrasts, especially when fall color lights up a canyon otherwise surrounded by desert.",
        scenicLabel: "A hidden canyon corridor carrying water and color",
        image: {
          src: "./assets/GUMO/guadalupe-story-2.jpeg",
          alt: "A sheltered Guadalupe canyon with trees and rocky walls",
          position: "center center",
        },
        art: {
          top: "#152027",
          mid: "#46604d",
          bottom: "#b58b58",
          orb: "#f3db9a",
          orbGlow: "rgba(240, 202, 130, 0.22)",
          haze: "rgba(157, 196, 163, 0.22)",
          layerA: "#627b5f",
          layerB: "#39513c",
          layerC: "#1d2d23",
          river: "rgba(152, 205, 197, 0.74)",
          riverOpacity: "0.68",
          fallsOpacity: "0.24",
          starsOpacity: "0",
          orbLeft: "16%",
          orbTop: "14%",
        },
      },
      {
        title:
          "Above the canyons, the park returns to wind, exposure, and long-distance horizon.",
        body: "Higher in the range, Guadalupe Mountains becomes a park of ridgelines, wilderness, and elevation. Reaching Guadalupe Peak means leaving the basin behind and stepping onto one of Texas' most expansive vantage points, where the desert, surrounding ranges, and huge sky all read at once.",
        factLabel: "High country",
        fact: "Guadalupe Peak is the highest point in Texas, and the park's wilderness character is central to how that elevation is experienced: exposed, quiet, and far-reaching.",
        scenicLabel: "High limestone country under a wind-cleared sky",
        image: {
          src: "./assets/GUMO/guadalupe-story-3.jpg",
          alt: "High ridgelines and open sky in Guadalupe Mountains National Park",
          position: "center center",
        },
        art: {
          top: "#09121e",
          mid: "#314b63",
          bottom: "#9eb0b6",
          orb: "#f7e5c0",
          orbGlow: "rgba(240, 226, 197, 0.24)",
          haze: "rgba(182, 205, 214, 0.2)",
          layerA: "#7e8f95",
          layerB: "#4d6270",
          layerC: "#283642",
          river: "rgba(210, 227, 233, 0.12)",
          riverOpacity: "0.12",
          fallsOpacity: "0",
          starsOpacity: "0.24",
          orbRight: "18%",
          orbTop: "15%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "Authorized first, established later",
        text: "Congress authorized Guadalupe Mountains in 1966, and the park was formally established on September 30, 1972 after key lands were assembled for protection.",
      },
      {
        label: "Geography",
        title: "A reef turned mountain range",
        text: "The cliffs and peaks here are exposed limestone from the ancient Capitan Reef, making the park one of North America's most vivid places to see deep geologic time become landscape.",
      },
      {
        label: "Scale",
        title: "Abrupt relief defines the experience",
        text: "More than almost anything else, visitors remember how suddenly the range rises from the desert and how much variety fits between the basin floor, canyon oases, and high ridgelines.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official Guadalupe Mountains National Park site.",
      text: "Use the official NPS site for trail conditions, weather, camping details, and the logistics that matter in a remote high-desert park.",
      label: "Visit Guadalupe Mountains on NPS",
    },
    theme: {
      bgTop: "#071015",
      bgBottom: "#140d0b",
      surface: "rgba(13, 16, 19, 0.72)",
      surfaceStrong: "rgba(15, 19, 22, 0.9)",
      card: "rgba(244, 233, 214, 0.08)",
      cardStrong: "rgba(244, 233, 214, 0.12)",
      line: "rgba(229, 207, 172, 0.16)",
      text: "#f5efe5",
      muted: "#cbbca7",
      accent: "#dba15f",
      accentBright: "#f5dfb4",
      accentSecondary: "#8db7af",
      shadow: "rgba(0, 0, 0, 0.36)",
      heroSkyTop: "#101822",
      heroSkyBottom: "#6d4b35",
      heroHorizon: "rgba(235, 191, 132, 0.46)",
      heroRidgeBack: "#725842",
      heroRidgeMid: "#463426",
      heroRidgeFront: "#241a13",
      heroGlow: "rgba(237, 186, 127, 0.24)",
    },
  },
  shen: {
    code: "SHEN",
    name: "Shenandoah National Park",
    location: "Luray, Virginia",
    shortName: "Shenandoah",
    link: "https://www.nps.gov/shen/index.htm",
    drawerSummary:
      "Blue Ridge overlooks, waterfalls, forests, and long drives above the valley.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A layered mountain park built from ridgelines, mist, and long overlooks.",
      landmarkLabel: "Blue Ridge layers and Shenandoah atmosphere",
      titlePrimarySize: "clamp(4.3rem, 12.5vw, 8.6rem)",
      titleSecondarySize: "clamp(0.95rem, 2.2vw, 1.75rem)",
      titleMaxWidth: "54rem",
      titleOffsetY: "-16.5vh",
      media: {
        background: "./assets/SHEN/shenandoah-hero-background.jpg",
        backgroundPosition: "center center",
        backgroundInset: "0",
        backgroundParallaxSpeed: "0.04",
        backgroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foreground: "./assets/SHEN/shenandoah-hero-background.png",
        foregroundWidth: "100%",
        foregroundHeight: "100%",
        foregroundBottom: "0",
        foregroundLeft: "0",
        foregroundNodeX: "0",
        foregroundFit: "cover",
        foregroundPosition: "center center",
        foregroundParallaxSpeed: "0.08",
        foregroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foregroundFilter: "none",
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
          src: "./assets/SHEN/shenandoah-story-1.webp",
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
          src: "./assets/SHEN/shenandoah-story-2.jpg",
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
        title:
          "High rock and open ridges give the park some of its clearest, longest views.",
        body: "On summits and rocky outcrops, Shenandoah sheds some of its haze-softened intimacy and becomes more exposed. These places turn the Blue Ridge into a landscape of stone, wind, and distance, where layered valleys and ridgelines feel both broad and immediate at once.",
        factLabel: "Landscape note",
        fact: "Rocky summits and overlooks are part of what gives Shenandoah its range, pairing forested hollows with more exposed high-country views.",
        scenicLabel: "A rocky summit above layered Blue Ridge ridges",
        image: {
          src: "./assets/SHEN/shenandoah-story-3.jpg",
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
  whsa: {
    code: "WHSA",
    name: "White Sands National Park",
    location: "Alamogordo, New Mexico",
    shortName: "White Sands",
    link: "https://www.nps.gov/whsa/index.htm",
    drawerSummary:
      "Brilliant gypsum dunes, shifting wind-shaped ridges, white-adapted wildlife, and immense desert light.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A dune park where an ancient sea becomes brilliant white sand under open desert sky.",
      landmarkLabel: "White gypsum dunes rolling across the Tularosa Basin",
      titlePrimarySize: "clamp(3.7rem, 11.2vw, 7.6rem)",
      titleSecondarySize: "clamp(0.95rem, 2.3vw, 1.7rem)",
      titleMaxWidth: "58rem",
      titleOffsetY: "-16vh",
      titlePrimaryWhiteSpace: "nowrap",
      titleSecondaryWhiteSpace: "nowrap",
      media: {
        background: "./assets/SAND/WhiteSands-hero-background.jpg",
        backgroundPosition: "center center",
        foreground: "./assets/SAND/WhiteSands-hero-foreground.png",
        foregroundWidth: "100%",
        foregroundHeight: "100%",
        foregroundBottom: "0",
        foregroundLeft: "0",
        foregroundNodeX: "0",
        foregroundFit: "cover",
        foregroundPosition: "center center",
        foregroundTravel: "0vh",
        foregroundAlt:
          "White gypsum dunes stretching across White Sands National Park in New Mexico",
      },
      highlightTitle:
        "A national park built from gypsum, wind, basin hydrology, and startling light",
      highlightBody:
        "White Sands protects the world's largest gypsum dunefield, a bright and geologically unusual landscape in southern New Mexico. First protected as a national monument in 1933 and redesignated as a national park in 2019, it turns ancient sea deposits, basin water, and constant wind into an active field of white dunes that feels both minimal and immense.",
      stats: [
        { label: "Established", value: "2019" },
        { label: "Landscape", value: "Gypsum dunes" },
        { label: "Signature", value: "Tularosa Basin" },
      ],
    },
    overview: {
      title:
        "A southern New Mexico dune park where gypsum, wind, and basin water keep remaking the land.",
      body: "At White Sands, the landscape looks simple at first and grows stranger the longer you stay with it. The park protects a wide field of gypsum dunes in the Tularosa Basin, where ancient marine deposits, evaporating water, and prevailing winds continue to build and reshape the white sand. The result is a park of brightness, motion, and distance rather than fixed stone landmarks.",
      notes: [
        {
          title: "Gypsum cycle",
          text: "Rain and snowmelt wash dissolved gypsum from surrounding mountains into the closed basin, where evaporation and wind help return it to the dunefield as sand.",
        },
        {
          title: "World's largest dunefield of its kind",
          text: "NPS describes White Sands as the world's largest gypsum dunefield, a rare landscape because gypsum usually dissolves before it can persist as sand.",
        },
        {
          title: "White species and ancient tracks",
          text: "The dunes support animals that have become lighter in color over time, and the wider basin has also preserved remarkable ancient footprints in the sediments of Lake Otero.",
        },
      ],
    },
    chapters: [
      {
        title:
          "Its white dunes begin far before the dunes themselves, in an ancient sea and a closed desert basin.",
        body: "White Sands is a geologic process made visible. Gypsum settled here when the Permian Sea covered the region, and much later water dissolved that mineral from surrounding mountains and carried it into the basin. As lakes shrank and dried, crystals formed, broke apart, and were pushed by wind into the bright, mobile dunes that define the park today.",
        factLabel: "Geology",
        fact: "NPS describes White Sands as the world's largest gypsum dunefield, sustained by the hydrologic and climatic cycle of the Tularosa Basin.",
        scenicLabel: "A young dune field built from ancient marine gypsum",
        image: {
          src: "./assets/SAND/white-sands-story-1.webp",
          alt: "White gypsum dunes under a cloud-filled sky at White Sands National Park",
          position: "center center",
        },
        art: {
          top: "#9db7d4",
          mid: "#d8d8d0",
          bottom: "#f2e4cf",
          orb: "#fff7ea",
          orbGlow: "rgba(255, 242, 220, 0.28)",
          haze: "rgba(235, 233, 224, 0.34)",
          layerA: "#e3dccd",
          layerB: "#d2c8b7",
          layerC: "#bda88d",
          river: "rgba(232, 243, 255, 0.22)",
          riverOpacity: "0.12",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbRight: "14%",
          orbTop: "13%",
        },
      },
      {
        title:
          "Then the park simplifies into light, curve, and horizon until scale starts to feel abstract.",
        body: "White Sands does not rely on cliffs or forests to create drama. Its force comes from reduction: dune after dune, wind-smoothed ridges, long shadows, and brilliant surfaces that reflect light differently across the day. That minimalism is what makes the park feel so expansive, because there are fewer visual anchors to stop the eye.",
        factLabel: "Landscape",
        fact: "The dunefield is active and dynamic, constantly reshaped by wind into new ridges, slip faces, and lines of shadow.",
        scenicLabel: "Wind-shaped dunes carrying light into the distance",
        image: {
          src: "./assets/SAND/white-sands-story-2.jpg",
          alt: "White dunes and desert plants under a deep blue sky at White Sands National Park",
          position: "center center",
        },
        art: {
          top: "#b5cbe2",
          mid: "#e6e0d6",
          bottom: "#f6ead8",
          orb: "#fffaf0",
          orbGlow: "rgba(255, 245, 228, 0.3)",
          haze: "rgba(247, 242, 233, 0.26)",
          layerA: "#eee3d3",
          layerB: "#dccdbb",
          layerC: "#c4ac92",
          river: "rgba(255, 255, 255, 0.2)",
          riverOpacity: "0.06",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbLeft: "18%",
          orbTop: "12%",
        },
      },
      {
        title:
          "Even in a landscape that looks almost empty, the dunes hold adaptation, footprints, and motion.",
        body: "The park's silence is deceptive. Tracks appear and disappear in the sand, animals move through the cooler hours, and some species here have become lighter in color as the white surroundings favored camouflage over generations. White Sands is also tied to much older human stories preserved in the basin sediments beyond the active dunes, where ancient footprints have reshaped how the place is understood.",
        factLabel: "Life and time",
        fact: "NPS highlights both the park's white-adapted species and the ancient footprints of the Lake Otero basin as part of White Sands' broader significance.",
        scenicLabel: "Tracks and living movement across a bright dune surface",
        image: {
          src: "./assets/SAND/white-sands-story-3.jpg",
          alt: "Footprints crossing bright dunes with a lone hiker in White Sands National Park",
          position: "center center",
        },
        art: {
          top: "#8fa8c2",
          mid: "#c8d0d7",
          bottom: "#efe1cf",
          orb: "#fff6e9",
          orbGlow: "rgba(249, 236, 215, 0.22)",
          haze: "rgba(214, 225, 235, 0.24)",
          layerA: "#e2d7c8",
          layerB: "#cdbdaa",
          layerC: "#b2977b",
          river: "rgba(220, 235, 248, 0.16)",
          riverOpacity: "0.08",
          fallsOpacity: "0",
          starsOpacity: "0.18",
          orbRight: "18%",
          orbTop: "14%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "Protected first as a monument",
        text: "White Sands National Monument was established on January 18, 1933, and the site became White Sands National Park on December 20, 2019.",
      },
      {
        label: "Geography",
        title: "Gypsum, not quartz",
        text: "Most famous dune landscapes are built from quartz sand, but White Sands is defined by gypsum, a mineral that makes the park brighter, rarer, and geologically distinctive.",
      },
      {
        label: "Scale",
        title: "Minimalism is the spectacle",
        text: "What gives White Sands its power is not one isolated feature but repetition and light: rolling white dunes, long horizons, changing shadows, and a sense of openness that feels almost unreal.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official White Sands National Park site.",
      text: "Use the official NPS site for road conditions, weather updates, sledding information, hiking guidance, and planning details before a visit.",
      label: "Visit White Sands on NPS",
    },
    theme: {
      bgTop: "#0b1118",
      bgBottom: "#171313",
      surface: "rgba(16, 18, 22, 0.72)",
      surfaceStrong: "rgba(18, 21, 26, 0.9)",
      card: "rgba(245, 238, 227, 0.09)",
      cardStrong: "rgba(245, 238, 227, 0.14)",
      line: "rgba(229, 220, 202, 0.16)",
      text: "#f7f2ea",
      muted: "#d0c3b3",
      accent: "#e5c497",
      accentBright: "#fff1da",
      accentSecondary: "#b6d3e8",
      shadow: "rgba(0, 0, 0, 0.34)",
      heroSkyTop: "#9db7d4",
      heroSkyBottom: "#e6d9c8",
      heroHorizon: "rgba(255, 243, 226, 0.54)",
      heroRidgeBack: "#e4dbcf",
      heroRidgeMid: "#d4c8b9",
      heroRidgeFront: "#bba48b",
      heroGlow: "rgba(255, 241, 217, 0.24)",
    },
  },
  zion: {
    code: "ZION",
    name: "Zion National Park",
    location: "Springdale, Utah",
    shortName: "Zion",
    link: "https://www.nps.gov/zion/index.htm",
    drawerSummary:
      "Towering sandstone walls, the Virgin River, narrow canyons, and a desert oasis set high on the Colorado Plateau.",
    hero: {
      eyebrow: "Featured Park",
      tagline:
        "A canyon park where the Virgin River cuts through towering Navajo Sandstone and hanging gardens.",
      landmarkLabel: "Zion Canyon beneath cream, rose, and red sandstone walls",
      titlePrimarySize: "clamp(4.5rem, 13.4vw, 8.9rem)",
      titleSecondarySize: "clamp(0.95rem, 2.15vw, 1.7rem)",
      titleMaxWidth: "50rem",
      titleOffsetY: "-8vh",
      titlePrimaryWhiteSpace: "nowrap",
      titleSecondaryWhiteSpace: "nowrap",
      media: {
        background: "./assets/ZION/zion-hero-background.webp",
        backgroundPosition: "center center",
        backgroundInset: "0",
        backgroundParallaxSpeed: "0.04",
        backgroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foreground: "./assets/ZION/zion-hero-foreground.png",
        foregroundWidth: "100%",
        foregroundHeight: "100%",
        foregroundBottom: "0",
        foregroundLeft: "0",
        foregroundNodeX: "0",
        foregroundFit: "cover",
        foregroundPosition: "center center",
        foregroundParallaxSpeed: "0.08",
        foregroundScale: "calc(1.08 - (var(--hero-progress, 0) * 0.04))",
        foregroundFilter: "none",
        foregroundTravel: "0vh",
        foregroundAlt:
          "Layered Zion cliffs rising above the foreground canyon in southwestern Utah",
      },
      highlightTitle:
        "A Utah canyon park where uplift, sandstone, and the Virgin River create vertical scale",
      highlightBody:
        "Protected first as Mukuntuweap National Monument on July 31, 1909, and established as Zion National Park on November 19, 1919, Zion preserves a canyon landscape shaped by long sedimentary history, uplift across the Colorado Plateau, and ongoing river erosion. Its signature feeling comes from height and contrast: sheer walls, bright stone, cool river corridors, and desert light moving through a narrow canyon.",
      stats: [
        { label: "Established", value: "1919" },
        { label: "Signature", value: "Zion Canyon" },
        { label: "River", value: "Virgin River" },
      ],
    },
    overview: {
      title:
        "A high-desert canyon park where sandstone cliffs, river corridors, and hanging gardens meet.",
      body: "Zion sits on the western edge of the Colorado Plateau in southwestern Utah, where the Virgin River and its tributaries cut through immense layers of sedimentary rock. The park feels both monumental and sheltered at once: broad mesas and high country surround a canyon whose floor holds cottonwoods, seeps, springs, and shade beneath walls of cream, pink, and red sandstone.",
      notes: [
        {
          title: "The river builds the experience",
          text: "Zion Canyon's scale depends on the Virgin River. The same water that supports riparian life and hanging gardens is also what keeps excavating the canyon and its narrows.",
        },
        {
          title: "Part of a larger geologic staircase",
          text: "NPS places Zion within the Grand Staircase sequence of cliffs and plateaus, where rock layers exposed here connect geologically to Bryce Canyon above and the Grand Canyon below.",
        },
        {
          title: "Height creates diversity",
          text: "With roughly 5,000 feet of elevation change across the park, Zion holds desert slopes, riverbank habitat, pinyon-juniper woodland, and higher forested terrain in one protected landscape.",
        },
      ],
    },
    chapters: [
      {
        title:
          "Zion begins as a long sedimentary record, then rises and breaks open into cliffs the river can cut through.",
        body: "For millions of years, shifting environments laid down the sediments that became Zion's stone, from shallow seas and river systems to immense desert dunes. Later uplift raised the plateau, and the Virgin River gained the force to carve downward through those layers. What visitors see now is not a static canyon, but a landscape still being shaped by water, gravity, and time.",
        factLabel: "Geology",
        fact: "NPS describes Zion's famous cliffs as sandstone formed from ancient dune fields and notes that uplift gave the Virgin River the cutting power to excavate the canyon.",
        scenicLabel: "Sandstone walls rising from canyon floor to plateau light",
        image: {
          src: "./assets/ZION/zion-story-1.jpg",
          alt: "Massive sandstone cliffs rising above the canyon floor in Zion National Park",
          position: "center center",
        },
        art: {
          top: "#16304b",
          mid: "#a56445",
          bottom: "#efc48f",
          orb: "#ffe3b4",
          orbGlow: "rgba(255, 209, 142, 0.3)",
          haze: "rgba(232, 191, 147, 0.22)",
          layerA: "#ca845a",
          layerB: "#7e5238",
          layerC: "#35251c",
          river: "rgba(191, 218, 231, 0.2)",
          riverOpacity: "0.16",
          fallsOpacity: "0",
          starsOpacity: "0",
          orbLeft: "17%",
          orbTop: "13%",
        },
      },
      {
        title:
          "Then the park narrows into one of the West's clearest expressions of vertical scale.",
        body: "In Zion Canyon, distance is measured less by miles than by the height of the walls and the tightness of the space between them. Cream and red Navajo Sandstone rises above cottonwoods and the river, while side canyons, switchbacks, and rockfall remind you the landscape is always in motion. Zion's drama comes from being held inside the canyon rather than simply looking at it from afar.",
        factLabel: "Canyon",
        fact: "NPS notes that Zion has 2,000-foot Navajo Sandstone cliffs and that the Virgin River still cuts a slot canyon through the Narrows upstream from the Temple of Sinawava.",
        scenicLabel: "Zion Canyon tightening around river, shade, and stone",
        image: {
          src: "./assets/ZION/zion-story-2.jpg",
          alt: "Zion Canyon walls glowing above the river corridor in Zion National Park",
          position: "center center",
        },
        art: {
          top: "#1b3654",
          mid: "#b77754",
          bottom: "#f1d0a0",
          orb: "#ffe7bc",
          orbGlow: "rgba(255, 220, 168, 0.26)",
          haze: "rgba(245, 211, 172, 0.24)",
          layerA: "#d08d64",
          layerB: "#88563d",
          layerC: "#3f2b20",
          river: "rgba(180, 212, 227, 0.22)",
          riverOpacity: "0.18",
          fallsOpacity: "0.08",
          starsOpacity: "0",
          orbRight: "15%",
          orbTop: "12%",
        },
      },
      {
        title:
          "What softens that stone severity is water, shade, and life gathering anywhere the canyon gives them room.",
        body: "Despite its cliff-lined image, Zion is not only rock. The river corridor, seeps, springs, and hanging gardens create pockets of coolness and color that change the park's emotional register. Cottonwoods line parts of the canyon floor, wildlife follows the water, and the transition from desert slope to shaded canyon makes Zion feel like an oasis built inside a stone cathedral.",
        factLabel: "Ecology",
        fact: "NPS highlights Zion's seeps, springs, waterfalls, and hanging gardens as part of the habitat diversity created by the park's river corridor and elevation range.",
        scenicLabel: "Water and hanging gardens tucked beneath desert cliffs",
        image: {
          src: "./assets/ZION/zion-story-3.jpeg",
          alt: "Trees and sandstone cliffs framing Zion's oasis-like canyon floor",
          position: "center center",
        },
        art: {
          top: "#12263b",
          mid: "#5d6f65",
          bottom: "#d5b084",
          orb: "#fff0cd",
          orbGlow: "rgba(245, 225, 186, 0.24)",
          haze: "rgba(195, 213, 199, 0.18)",
          layerA: "#9a805d",
          layerB: "#53634d",
          layerC: "#223027",
          river: "rgba(198, 229, 233, 0.22)",
          riverOpacity: "0.18",
          fallsOpacity: "0.2",
          starsOpacity: "0.16",
          orbLeft: "19%",
          orbTop: "14%",
        },
      },
    ],
    facts: [
      {
        label: "History",
        title: "Protected first as Mukuntuweap",
        text: "President Taft established Mukuntuweap National Monument on July 31, 1909. The area was renamed Zion National Monument in 1918 and became Zion National Park on November 19, 1919.",
      },
      {
        label: "Geology",
        title: "Ancient dunes became canyon walls",
        text: "Some of Zion's most iconic cliffs are Navajo Sandstone, rock formed from ancient windblown dunes that later hardened, rose with the plateau, and were cut open by erosion.",
      },
      {
        label: "Landscape",
        title: "A desert oasis inside a canyon",
        text: "Zion's identity comes from contrast: sheer stone and flowing water, dry slopes and riparian shade, broad plateau country and one deeply incised main canyon.",
      },
    ],
    cta: {
      meta: "Trip planning",
      title: "Open the official Zion National Park site.",
      text: "Use the official NPS site for shuttle schedules, current conditions, trail safety updates, and seasonal planning details before a visit.",
      label: "Visit Zion on NPS",
    },
    theme: {
      bgTop: "#08111a",
      bgBottom: "#18110d",
      surface: "rgba(16, 19, 23, 0.72)",
      surfaceStrong: "rgba(18, 22, 27, 0.9)",
      card: "rgba(247, 235, 218, 0.09)",
      cardStrong: "rgba(247, 235, 218, 0.14)",
      line: "rgba(236, 203, 171, 0.16)",
      text: "#f8f1e7",
      muted: "#d2c1ad",
      accent: "#dd8752",
      accentBright: "#ffd8ab",
      accentSecondary: "#9fc3da",
      shadow: "rgba(0, 0, 0, 0.34)",
      heroSkyTop: "#18324f",
      heroSkyBottom: "#be734b",
      heroHorizon: "rgba(255, 213, 152, 0.46)",
      heroRidgeBack: "#9a6a4b",
      heroRidgeMid: "#65412c",
      heroRidgeFront: "#312118",
      heroGlow: "rgba(255, 194, 132, 0.24)",
    },
  },
};

const HOME_THEME = {
  bgTop: "#040910",
  bgBottom: "#15100c",
  surface: "rgba(10, 14, 18, 0.72)",
  surfaceStrong: "rgba(12, 16, 22, 0.9)",
  card: "rgba(235, 229, 216, 0.08)",
  cardStrong: "rgba(235, 229, 216, 0.13)",
  line: "rgba(221, 202, 168, 0.16)",
  text: "#f8f1e7",
  muted: "#c9bbab",
  accent: "#e3a25f",
  accentBright: "#ffe0aa",
  accentSecondary: "#83c7c1",
  shadow: "rgba(0, 0, 0, 0.38)",
  heroSkyTop: "#101a28",
  heroSkyBottom: "#574838",
  heroHorizon: "rgba(255, 215, 156, 0.42)",
  heroRidgeBack: "#6e665b",
  heroRidgeMid: "#3d423e",
  heroRidgeFront: "#171b18",
  heroGlow: "rgba(255, 202, 132, 0.24)",
};

const COLOR_MODE_STORAGE_KEY = "parkAtlasColorMode";

function getInitialColorMode() {
  try {
    return window.localStorage.getItem(COLOR_MODE_STORAGE_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

const state = {
  activeParkKey: null,
  drawerOpen: false,
  currentTheme: HOME_THEME,
  colorMode: getInitialColorMode(),
};

const app = document.getElementById("app");
const parkList = document.getElementById("parkList");
const parkDrawer = document.getElementById("parkDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const menuButton = document.getElementById("menuButton");
const topbarCenter = document.getElementById("topbarCenter");
const topbarTitle = document.getElementById("topbarTitle");
const topbarSubtitle = document.getElementById("topbarSubtitle");
const homeButton = document.getElementById("homeButton");
const drawerClose = document.getElementById("drawerClose");
const themeToggle = document.getElementById("themeToggle");

let parallaxNodes = [];
let heroSection = null;
let animationQueued = false;
const HERO_REVEAL_END = 0.78;

function getAppliedTheme(theme) {
  if (state.colorMode !== "light") {
    return theme;
  }

  return {
    ...theme,
    bgTop: "#fbf4e8",
    bgBottom: "#deebe6",
    surface: "rgba(255, 252, 245, 0.78)",
    surfaceStrong: "rgba(255, 255, 255, 0.94)",
    card: "rgba(255, 255, 255, 0.68)",
    cardStrong: "rgba(255, 255, 255, 0.86)",
    line: "rgba(43, 56, 52, 0.16)",
    text: "#17201d",
    muted: "#5e6b64",
    accentBright: theme.accent,
    shadow: "rgba(28, 38, 35, 0.22)",
  };
}

function updateThemeToggle() {
  const isLightMode = state.colorMode === "light";
  const nextMode = isLightMode ? "Dark mode" : "Light mode";

  themeToggle.textContent = nextMode;
  themeToggle.setAttribute("aria-label", `Current mode: ${state.colorMode}. Switch to ${nextMode.toLowerCase()}`);
  themeToggle.setAttribute("aria-pressed", String(isLightMode));
}

function setTheme(theme) {
  const root = document.documentElement;
  const appliedTheme = getAppliedTheme(theme);

  state.currentTheme = theme;
  document.body.classList.toggle("light-mode", state.colorMode === "light");
  root.style.setProperty("color-scheme", state.colorMode);
  root.style.setProperty("--bg-top", appliedTheme.bgTop);
  root.style.setProperty("--bg-bottom", appliedTheme.bgBottom);
  root.style.setProperty("--surface", appliedTheme.surface);
  root.style.setProperty("--surface-strong", appliedTheme.surfaceStrong);
  root.style.setProperty("--card", appliedTheme.card);
  root.style.setProperty("--card-strong", appliedTheme.cardStrong);
  root.style.setProperty("--line", appliedTheme.line);
  root.style.setProperty("--text", appliedTheme.text);
  root.style.setProperty("--muted", appliedTheme.muted);
  root.style.setProperty("--accent", appliedTheme.accent);
  root.style.setProperty("--accent-bright", appliedTheme.accentBright);
  root.style.setProperty("--accent-secondary", appliedTheme.accentSecondary);
  root.style.setProperty("--shadow", appliedTheme.shadow);
  root.style.setProperty("--hero-sky-top", appliedTheme.heroSkyTop);
  root.style.setProperty("--hero-sky-bottom", appliedTheme.heroSkyBottom);
  root.style.setProperty("--hero-horizon", appliedTheme.heroHorizon);
  root.style.setProperty("--hero-ridge-back", appliedTheme.heroRidgeBack);
  root.style.setProperty("--hero-ridge-mid", appliedTheme.heroRidgeMid);
  root.style.setProperty("--hero-ridge-front", appliedTheme.heroRidgeFront);
  root.style.setProperty("--hero-glow", appliedTheme.heroGlow);
  updateThemeToggle();
}

function toggleColorMode() {
  state.colorMode = state.colorMode === "dark" ? "light" : "dark";

  try {
    window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, state.colorMode);
  } catch {
    // Ignore storage failures; the visible toggle still applies for this session.
  }

  setTheme(state.currentTheme);
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

function getSortedParkEntries() {
  return Object.entries(parks).sort(([, a], [, b]) => a.name.localeCompare(b.name));
}

function getStoryImages() {
  return getSortedParkEntries()
    .flatMap(([key, park]) =>
      park.chapters.map((chapter, index) => ({
        key,
        parkName: park.shortName,
        src: chapter.image?.src,
        alt: chapter.image?.alt || chapter.scenicLabel,
        index,
      })),
    )
    .filter(image => image.src);
}

function renderHomeImageGlobe() {
  const images = getStoryImages();
  const total = images.length || 1;

  return images
    .map((image, index) => {
      const angle = (index / total) * Math.PI * 2;
      const ring = index % 3;
      const radiusX = [47, 40, 33][ring];
      const radiusY = [40, 32, 25][ring];
      const left = 50 + Math.cos(angle) * radiusX;
      const top = 50 + Math.sin(angle) * radiusY;
      const floatX = (((index * 37) % 13) - 6) * 0.28;
      const floatY = (((index * 53) % 15) - 7) * 0.24;
      const rotate = ((index * 29) % 24) - 12;
      const spin = index % 2 === 0 ? "5deg" : "-5deg";
      const duration = 15 + (index % 7) * 2.2;
      const delay = -1 * (index % 11) * 1.25;
      const scale = 0.88 + (ring * 0.08);
      const depth = 1 + (index % 5);
      const size = [
        "clamp(4.7rem, 9vw, 8.5rem)",
        "clamp(4rem, 7vw, 7rem)",
        "clamp(3.4rem, 5.8vw, 5.8rem)",
      ][ring];

      return `
        <figure
          class="home-orbit-card"
          style="--home-card-left: ${left.toFixed(2)}%; --home-card-top: ${top.toFixed(2)}%; --home-card-size: ${size}; --home-card-float-x: ${floatX.toFixed(2)}rem; --home-card-float-y: ${floatY.toFixed(2)}rem; --home-card-rotate: ${rotate}deg; --home-card-spin: ${spin}; --home-card-duration: ${duration.toFixed(1)}s; --home-card-delay: ${delay.toFixed(1)}s; --home-card-scale: ${scale.toFixed(2)}; --home-card-depth: ${depth};"
          aria-hidden="true"
        >
          <img src="${image.src}" alt="" loading="${index < 8 ? "eager" : "lazy"}" decoding="async" />
        </figure>
      `;
    })
    .join("");
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
    park.hero.titleAlign ? `--hero-title-text-align: ${park.hero.titleAlign};` : "",
    park.hero.titleJustify ? `--hero-title-justify: ${park.hero.titleJustify};` : "",
    park.hero.titleMargin ? `--hero-title-margin: ${park.hero.titleMargin};` : "",
    park.hero.titlePrimaryWhiteSpace
      ? `--hero-title-primary-white-space: ${park.hero.titlePrimaryWhiteSpace};`
      : "",
    park.hero.titleSecondaryWhiteSpace
      ? `--hero-title-secondary-white-space: ${park.hero.titleSecondaryWhiteSpace};`
      : "",
    park.hero.titleStartY ? `--hero-title-start-y: ${park.hero.titleStartY};` : "",
    park.hero.titleTravelY ? `--hero-title-travel-y: ${park.hero.titleTravelY};` : "",
    park.hero.titleTransformOrigin
      ? `--hero-title-transform-origin: ${park.hero.titleTransformOrigin};`
      : "",
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
    const backgroundInset = park.hero.media.backgroundInset || "-4%";
    const backgroundParallaxSpeed = park.hero.media.backgroundParallaxSpeed || "0.04";
    const backgroundScale =
      park.hero.media.backgroundScale ||
      "calc(1.08 - (var(--hero-progress, 0) * 0.04))";
    const backgroundFilter =
      park.hero.media.backgroundFilter || "saturate(0.98) contrast(1.04)";
    const backgroundStyle = `--hero-photo-bg-inset: ${backgroundInset}; --hero-photo-bg-scale: ${backgroundScale}; --hero-photo-bg-filter: ${backgroundFilter};`;
    const backgroundLayer = park.hero.media.backgroundAsImage
      ? `
        <img
          class="hero-photo-bg hero-photo-bg-image parallax-node"
          data-parallax-speed="${backgroundParallaxSpeed}"
          src="${park.hero.media.background}"
          alt=""
          style="${backgroundStyle} --hero-photo-bg-position: ${backgroundPosition};"
          aria-hidden="true"
        />
      `
      : `
        <div
          class="hero-photo-bg parallax-node"
          data-parallax-speed="${backgroundParallaxSpeed}"
          style="background-image: url('${park.hero.media.background}'); background-position: ${backgroundPosition}; ${backgroundStyle}"
          aria-hidden="true"
        ></div>
      `;
    const foregroundWidth = park.hero.media.foregroundWidth || "auto";
    const foregroundHeight =
      park.hero.media.foregroundHeight || "clamp(18rem, 42vh, 28rem)";
    const foregroundBottom = park.hero.media.foregroundBottom || "-2%";
    const foregroundLeft = park.hero.media.foregroundLeft || "50%";
    const foregroundNodeX = park.hero.media.foregroundNodeX || "-50%";
    const foregroundFit = park.hero.media.foregroundFit || "contain";
    const foregroundPosition = park.hero.media.foregroundPosition || "center center";
    const foregroundParallaxSpeed = park.hero.media.foregroundParallaxSpeed || "0.08";
    const foregroundScale =
      park.hero.media.foregroundScale ||
      "calc(1.01 - (var(--hero-progress, 0) * 0.02))";
    const foregroundFilter =
      park.hero.media.foregroundFilter || "drop-shadow(0 16px 34px rgba(0, 0, 0, 0.28))";
    const foregroundTravel = park.hero.media.foregroundTravel || "14vh";

    return `
      <div class="hero-stage hero-stage--photo">
        ${backgroundLayer}
        <div class="hero-photo-tint" aria-hidden="true"></div>
        <div class="hero-photo-glow" aria-hidden="true"></div>
        <span class="hero-stage-caption">${park.hero.landmarkLabel}</span>
        <div class="hero-title-reveal">
          ${titleMarkup}
        </div>
        <img
          class="hero-foreground-image parallax-node"
          data-parallax-speed="${foregroundParallaxSpeed}"
          src="${park.hero.media.foreground}"
          alt="${park.hero.media.foregroundAlt}"
          style="--hero-foreground-width: ${foregroundWidth}; --hero-foreground-height: ${foregroundHeight}; --hero-foreground-bottom: ${foregroundBottom}; --hero-foreground-left: ${foregroundLeft}; --hero-foreground-node-x: ${foregroundNodeX}; --hero-foreground-fit: ${foregroundFit}; --hero-foreground-position: ${foregroundPosition}; --hero-foreground-scale: ${foregroundScale}; --hero-foreground-filter: ${foregroundFilter}; --hero-foreground-travel: ${foregroundTravel};"
        />
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
    </div>
  `;
}

function renderDrawer() {
  const parkEntries = getSortedParkEntries();

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

function renderHomeMeta() {
  document.body.classList.add("is-home-page");
  document.body.classList.remove("is-park-page");
  topbarCenter.classList.remove("is-park-meta");
  topbarTitle.textContent = "Park Atlas";
  topbarSubtitle.textContent = "Cinematic national park stories";
  homeButton.hidden = true;
}

function renderMeta(park) {
  document.body.classList.add("is-park-page");
  document.body.classList.remove("is-home-page");
  topbarCenter.classList.add("is-park-meta");
  topbarTitle.textContent = park.shortName;
  topbarSubtitle.textContent = park.location;
  homeButton.hidden = false;
}

function renderHomePage() {
  const parkEntries = getSortedParkEntries();

  setTheme(HOME_THEME);
  renderHomeMeta();
  document.title = "Park Atlas";

  app.innerHTML = `
    <section class="home-hero" aria-labelledby="homeTitle">
      <div class="home-hero-stage">
        <div class="home-globe-rings" aria-hidden="true"></div>
        <div class="home-image-globe parallax-node" data-parallax-speed="0.05">
          ${renderHomeImageGlobe()}
        </div>

        <div class="home-title-card">
          <h1 id="homeTitle">Park Atlas</h1>
          <p>
            A cinematic field guide for discovering national parks through their
            landscapes, stories, wildlife, history, and the moments that make each
            place unforgettable.
          </p>

          <div class="home-actions">
            <button class="cta-button" type="button" data-open-drawer>Explore parks</button>
            <button class="home-secondary-button" type="button" data-random-park>
              Start somewhere wild
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="home-summary section">
      <article class="home-summary-card glass-card">
        <div class="section-intro">
          <p class="eyebrow">What This Is</p>
          <h2>A fun, immersive way to get a quick feel for each national park.</h2>
          <p class="lead">
            Park Atlas gives you a visual first look at each park, then shares the big
            ideas that make the place memorable: the landscape, the story, the scale,
            and the details worth knowing at a glance.
          </p>
        </div>
      </article>
    </section>

    <section class="home-collection section">
      <div class="section-intro">
        <p class="eyebrow">Current Atlas</p>
        <h2>Choose a park and enter its landscape.</h2>
      </div>

      <div class="home-park-grid">
        ${parkEntries
          .map(
            ([key, park]) => `
              <button class="home-park-card" type="button" data-home-park-key="${key}">
                <span class="park-item-code">${park.code}</span>
                <span class="home-park-name">${park.name}</span>
                <span class="home-park-location">${park.location}</span>
                <span class="home-park-summary">${park.drawerSummary}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;

  heroSection = null;
  parallaxNodes = Array.from(app.querySelectorAll(".parallax-node"));
  updateParallax();
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

function setHome() {
  if (state.drawerOpen) {
    toggleDrawer(false);
  }

  if (state.activeParkKey === null) {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  state.activeParkKey = null;
  renderDrawer();
  renderHomePage();
  window.scrollTo({ top: 0, behavior: "auto" });
  updateParallax();
}

function setActivePark(key) {
  if (!parks[key] || key === state.activeParkKey) {
    return;
  }

  state.activeParkKey = key;
  renderDrawer();
  renderPage();
  window.scrollTo({ top: 0, behavior: "auto" });
  updateParallax();
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
  homeButton.addEventListener("click", setHome);
  themeToggle.addEventListener("click", toggleColorMode);
  drawerClose.addEventListener("click", () => toggleDrawer(false));
  drawerBackdrop.addEventListener("click", () => toggleDrawer(false));

  app.addEventListener("click", event => {
    const drawerTrigger = event.target.closest("[data-open-drawer]");
    const randomTrigger = event.target.closest("[data-random-park]");
    const parkTrigger = event.target.closest("[data-home-park-key]");

    if (drawerTrigger) {
      toggleDrawer(true);
      return;
    }

    if (randomTrigger) {
      const parkEntries = getSortedParkEntries();
      const randomEntry = parkEntries[Math.floor(Math.random() * parkEntries.length)];
      setActivePark(randomEntry[0]);
      return;
    }

    if (parkTrigger) {
      setActivePark(parkTrigger.dataset.homeParkKey);
    }
  });

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
  renderHomePage();
  bindEvents();
}

init();
