export interface WorkExperienceContent {
  companyName: string;
  companyProfile: string;
  position: string;
  description: string[];
  year: string;
}

export const workExperienceData: WorkExperienceContent[] = [
  {
    companyName: "Prixgen",
    companyProfile: "https://www.prixgen.com/",
    position: "Application development intern",
    description: [
      "Worked on designing the UI & wireframe for the mobile application",
      "Developed a cross platform application to connect with ODOO instances",
    ],
    year: "2019",
  },
  {
    companyName: "Nybula",
    companyProfile: "https://nbyula.com/",
    position: "Software engineer intern",
    description: [
      "Worked on an online interview & hiring platform",
      "Responsible for scaling and deploying the web application",
    ],
    year: "2020",
  },
  {
    companyName: "Vamstar",
    companyProfile: "https://vamstar.io//",
    position: "Software engineer",
    description: [
      "Involved in codebase & tech stack migrations.",
      "Formulated to MEAT (Most Economically and Advantageous Tender) framework permitting users to understand the likelihood of winning a bid",
    ],
    year: "2021",
  },
];

export interface Framework {
  name: string;
  url: string;
}

export interface SideProjectContent {
  name: string;
  description: string;
  url: string;
  deprecated?: boolean;
  frameworks: Framework[];
}

export const sideProjectData: SideProjectContent[] = [
  {
    name: "Knotes",
    description: "A simple offline SQLite based note taking application",
    url: "https://play.google.com/store/apps/details?id=com.emil_codes.knotes",
    deprecated: true,
    frameworks: [
      {
        name: "Flutter",
        url: "https://flutter.dev/",
      },
    ],
  },
  {
    name: "YTS Browser",
    description:
      "A cross platform mobile application to browse YTS fil repository",
    url: "https://play.google.com/store/apps/details?id=com.emilcodes.yts_browser",
    deprecated: true,
    frameworks: [
      {
        name: "Node.js",
        url: "https://nodejs.org/",
      },
      {
        name: "Flutter",
        url: "https://flutter.dev/",
      },
    ],
  },
  {
    name: "Sambhar",
    description: "P2P marketplace for groceries during the Corona lockdown.",
    url: "https://github.com/FlutterKerala/Sambhar",
    frameworks: [
      {
        name: "Flutter",
        url: "https://flutter.dev/",
      },
    ],
  },
];
