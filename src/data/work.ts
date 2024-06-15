export const workHistory = [
  {
    logo: "/logos/sprig.svg",
    start: "April 2022",
    end: "Present",
    company: "Sprig",
    role: "Senior Frontend Engineer",
    details: [
      "Sprig is platform for collecting user feedback and insights to help customers make data-driven decisions and understand their users.",
      'Built out a new product called <b>"Feedback Button"</b> for customers that needed a simple way to collect user feedback. Customers could configure the button to show up on 1 or more pages.',
      "Enabled <b>multi-language</b> CSV uploads for translating a survey with configurable settings. And updated the survey experience to support right-to-left formatting.",
      "Revamped multiple components to adhere to the <b>design system</b> for use across the product. Built out many Storybook stories for components.",
      "Remade the Sprig <b>Javascript SDK</b> with Preact & Typescript and added Playwright + Vitest tests. The SDK is the core survey product that customers embed onto their websites.",
    ],
    images: [
      "/work/sprig-feedback.webp",
      "/work/sprig-multilang.webp",
      "/work/sprig-filters.webp",
      "/work/sprig-customize.webp",
    ],
  },
  {
    logo: "/logos/coursekey.svg",
    start: "October 2016",
    end: "April 2022",
    company: "CourseKey",
    role: "Frontend Developer",
    details: [
      "CourseKey is platform for schools to manage students, courses, and programs. It saves time for adminstrators by having integrations with many SIS and LMS systems.",
      `Developed a <b>Programs</b> feature where administrators and instructors can view & manage a student\'s program progress. A program consisted of completing a set amount of tasks such as haircuts for Cosmetology students.`,
      `Built out a <b>attestation</b> workflow to the attendance check-in & check-out process. Also made an adjustment drawer for instructors to adjust student attendance such as check-in time. Any adjustments were logged and viewable by affected parties.`,
      `Created many <b>dashboards</b> for school administrators and teachers to view student data and monitor schools & courses. Built features that allowed teachers to take attendance, moderate a chatroom, create/send quizes, and more.`,
      `Developed a realtime always-on-top <b>Electron widget</b> where instructors could take attendance, start/stop quizzes, and answer messages. Widget was built for Mac & Windows and had automatic updates.`,
    ],
    images: [
      "/work/coursekey-light-1.webp",
      "/work/coursekey-light-2.webp",
      "/work/coursekey-dark-1.webp",
      "/work/coursekey-dark-2.webp",
    ],
  },
];
