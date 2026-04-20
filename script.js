const parks = {
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
      scrollCue: "Scroll to pull the park name out from behind the ridge",
      media: {
        background: "./assets/BIBE/big-bend-hero-background.png",
        foreground: "./assets/BIBE/big-bend-hero-foreground.png",
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
      scrollCue: "Scroll to draw the park name down from the cavern ceiling",
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
      scrollCue: "Scroll to bring the reef-built range into view",
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
      scrollCue: "Scroll to reveal the park name through the ridges",
      titlePrimarySize: "clamp(4.3rem, 12.5vw, 8.6rem)",
      titleSecondarySize: "clamp(0.95rem, 2.2vw, 1.75rem)",
      titleMaxWidth: "54rem",
      titleOffsetY: "-7vh",
      media: {
        background: "./assets/SHEN/shenandoah-hero-background.jpg",
        backgroundPosition: "center top",
        foreground: "./assets/SHEN/shenandoah-hero-foreground.png",
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
      scrollCue: "Scroll to draw the park name out across the dune field",
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
    const foregroundWidth = park.hero.media.foregroundWidth || "auto";
    const foregroundHeight =
      park.hero.media.foregroundHeight || "clamp(18rem, 42vh, 28rem)";
    const foregroundBottom = park.hero.media.foregroundBottom || "-2%";
    const foregroundLeft = park.hero.media.foregroundLeft || "50%";
    const foregroundNodeX = park.hero.media.foregroundNodeX || "-50%";
    const foregroundFit = park.hero.media.foregroundFit || "contain";
    const foregroundPosition = park.hero.media.foregroundPosition || "center center";
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
          style="--hero-foreground-width: ${foregroundWidth}; --hero-foreground-height: ${foregroundHeight}; --hero-foreground-bottom: ${foregroundBottom}; --hero-foreground-left: ${foregroundLeft}; --hero-foreground-node-x: ${foregroundNodeX}; --hero-foreground-fit: ${foregroundFit}; --hero-foreground-position: ${foregroundPosition}; --hero-foreground-travel: ${foregroundTravel};"
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
  currentParkMeta.innerHTML = `<strong>${park.shortName}</strong>${park.location}`;
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
