import {
  SiAdobeillustrator,
  SiAffinitydesigner,
  SiAngular,
  SiAstro,
  SiCypress,
  SiFigma,
  SiJest,
  SiReactquery,
  SiPlaywright,
  SiAdobephotoshop,
  SiReact,
  SiSass,
  SiMockserviceworker,
  SiSketch,
  SiStorybook,
  SiTestinglibrary,
  SiTailwindcss,
  SiVitest,
} from "react-icons/si";
import { RxAccessibility } from "react-icons/rx";
import { PiFilmSlateFill } from "react-icons/pi";
import { TbBrandVite as Vite } from "react-icons/tb";
import { VscVscodeInsiders as VSCode } from "react-icons/vsc";

export const skillsSections = [
  {
    icon: {
      src: "/skills/frontend.webp",
      background: "red",
    },
    title: "Frontend",
    description: `
      I have many years of experience of building web apps using technologies React, Typescript, Vite, & more.\n
      I am passionate about the craft and I do my best to stay up to date with the latest technologies and trends.
    `,
    items: [
      {
        icon: SiReact,
        label: "React",
      },
      {
        icon: SiAstro,
        label: "AstroJS",
      },
      {
        icon: SiVitest,
        label: "NextJS",
      },
      {
        icon: Vite,
        label: "Vite",
      },
      {
        icon: SiAngular,
        label: "Angular",
      },
      {
        icon: SiReactquery,
        label: "React Query",
      },
      {
        icon: SiSass,
        label: "Sass",
      },
      {
        icon: SiTailwindcss,
        label: "Tailwind",
      },
      {
        icon: VSCode,
        label: "VSCode",
      },
    ],
  },
  {
    icon: {
      src: "/skills/testing.webp",
      background: "#d2f1ff",
    },
    title: "Testing",
    description: `
      I enjoy using Playwright for testing key happy paths and React Testing Library or Vitest for component or unit tests.\n
      Testing is crucial in development and will often result in finding at one or more issues.
    `,
    items: [
      {
        icon: SiPlaywright,
        label: "Playwright",
      },
      { icon: SiCypress, label: "Cypress" },
      {
        icon: SiVitest,
        label: "Vitest",
      },
      {
        icon: SiJest,
        label: "Jest",
      },
      {
        icon: RxAccessibility,
        label: "Accessibility",
      },
      {
        icon: SiMockserviceworker,
        label: "MSW",
      },
      {
        icon: SiTestinglibrary,
        label: "React Testing Library",
      },
    ],
  },
  {
    icon: {
      src: "/skills/design.webp",
      background: "#ffedb6",
    },
    title: "Design",
    description: `
      I have experience in graphic design, creating logos, posters, and marketing materials.\n
      I work with tools like Figma and Sketch to collaborate with designers and review UI mockups.
    `,
    items: [
      {
        icon: SiFigma,
        label: "Figma",
      },
      {
        icon: PiFilmSlateFill,
        label: "Final Cut",
      },
      {
        icon: SiSketch,
        label: "Sketch",
      },
      { icon: SiAdobeillustrator, label: "Illustrator" },
      {
        icon: SiAffinitydesigner,
        label: "Affinity Designer",
      },
      {
        icon: SiStorybook,
        label: "Storybook",
      },
      {
        icon: SiAdobephotoshop,
        label: "Photoshop",
      },
    ],
  },
];
