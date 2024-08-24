/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dandave ",
  title: "Hi all, I'm David Daniel",
  subTitle: emoji(
    " A passionate Full Stack Software Developer 🚀 with extensive experience in building dynamic web applications using JavaScript, React, Next.js, Node.js, and Java. Skilled in creating robust and scalable solutions with a keen eye for detail and a love for innovative technologies"),
  resumeLink:
    "https://docs.google.com/document/d/1K6ja6-p4V-fFcvs_9KdWhY6KUAhrLngaWhWPApymu3A/pub", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/danndav",
  linkedin: "https://www.linkedin.com/in/daniel-imodoye-david/",
  gmail: "danielimodoye@gmail.com",
  gitlab: "https://gitlab.com/danndavee",
  medium: "https://medium.com/@danielimodoye",
  stackoverflow: "https://stackoverflow.com/users/8332105/dandave",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "An enthusiastic Full Stack Developer with a strong desire to explore and master diverse tech stacks, continually expanding expertise and embracing new challenges in the ever-evolving world of technology",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Build and maintain scalable back-end systems using NodeJS, Java, and other frameworks"),
    emoji("⚡ Develop and integrate RESTful APIs for seamless front-end and back-end communication"),
    emoji("⚡ Implement robust security measures and authentication processes"),
    emoji("⚡ Optimize application performance and enhance user experience"),
    emoji("⚡ Stay updated with the latest industry trends and emerging technologies")
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "IU International University of Applied Sciences",
      logo: require("./assets/images/iu.webp"), // Make sure to have the correct logo image path
      subHeader: "Bachelor of Science in Computer Science",
      duration: "October 2024 - July 2027",
      desc: "Focused on software development, data structures, algorithms, and database management.",
      descBullets: [
      ]
    },
    {
      schoolName: "Yaba College of Technology",
      logo: require("./assets/images/Yabatech.png"), // Make sure to have the correct logo image path
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2014 - August 2017",
      desc: "Developed a strong foundation in computer science principles, programming, and software engineering. Engaged in projects involving mobile application development and cloud computing.",
      descBullets: [
        // "Achieved high marks in coursework, focusing on Java and web technologies.",
        // "Conducted research on network security protocols and presented findings at a local tech conference.",
        // "Actively participated in the Computer Science Club, organizing workshops and events."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    // {
    //   Stack: "Frontend/Design", //Insert stack or technology you have experience in
    //   progressPercentage: "60%" //Insert relative proficiency in percentage
    // },
    // {
    //   Stack: "Backend",
    //   progressPercentage: "70%"
    // },
    // {
    //   Stack: "Programming",
    //   progressPercentage: "60%"
    // }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Atos (MTN)",
      companylogo: require("./assets/images/atos.jpeg"),
      date: "Sep. 2023 – Present",
      desc: "Engaged in resolving production and pre-production issues and involved in DevOps and Agile operations.",
      descBullets: [
        "Investigated and resolved production and pre-production issues reported on API microservices through ServiceNow and Jira platforms.",
        " issues to respective owners, ensuring prompt resolution.",
      ]
    },
    {
      role: "Fullstack Engineer",
      company: "E-settlement Limited",
      companylogo: require("./assets/images/e-settlement.jpeg"),
      date: "Oct. 2018 – Aug. 2023",
      desc: "Led development projects and optimized front-end and back-end systems to enhance performance and cost efficiency.",
      descBullets: [
        "Developed and supported Agency Banking applications."
      ]
    },
    {
      role: "Software Engineer - Team Lead",
      company: "Profitall",
      companylogo: require("./assets/images/profitall_logo.1839ca3a.svg"),
      date: "May. 2021 – Present",
      desc: "Led development of a marketplace platform and a white-labeling solution, while integrating payment gateways and mentoring team members.",
      descBullets: [
        "Successfully integrated payment gateway solutions and implemented a wallet system.",
      ]
    },
    {
      role: "Senior Software Engineer - Contract",
      company: "Creditchek",
      companylogo: require("./assets/images/creditcheck.jpeg"),
      date: "Jan. 2021 – Feb. 2022",
      desc: "Focused on integrating financial data and enhancing product offerings through seamless integration of technologies and optimization of data processing.",
      descBullets: [
        "Integrated Mono and Flutterwave to streamline financial data access and secure payments.",
        "Engineered real-time transaction retrieval capabilities by integrating Node.js with Apache Kafka.",
      ]
    },
    {
      role: "Software Engineer - Contract",
      company: "Bluecode Limited",
      companylogo: require("./assets/images/blucode.jpeg"),
      date: "Oct. 2021 – Mar. 2022",
      desc: "Developed an MMT solution for merchant management, collaborating closely with a small team to deliver efficient solutions.",
      descBullets: [
        "Developed an MMT solution to enable acquirers to effectively manage their merchants using Java (Spring Boot) and Thymeleaf.",
        "Collaborated closely with a small team to deliver efficient and innovative solutions."
      ]
    },
    {
      role: "Fullstack Engineer",
      company: "Andela",
      companylogo: require("./assets/images/andela.png"),
      date: "Jun. 2020 – Nov. 2020",
      desc: "Contributed to the development of BarefootNomad software, focusing on REST API design and implementation with high code test coverage.",
      descBullets: [
        "Contributed to the development of BarefootNomad software at Andela, focusing on creating user-friendly global travel and accommodation solutions.",
      ]
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/yeppayPic.png"),
      projectName: "Yep Pay",
      projectDesc: "A complete payment platform, designed & engineered for growth",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://app.yeppay.io"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/eslPic.png"),
      projectName: "ESL- E-settlement limited",
      projectDesc: "Serving unbanked and underserved communities with banking hall services and facilities.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://main--stellar-kringle-1a9b99.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/contentionaryPic.png"),
      projectName: "Contentionary",
      projectDesc: "A dashboard system to control student exams",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://contentionary.com/"
        }
      ]
    },
    {
      image: require("./assets/images/yepwebsitePic.png"),
      projectName: "Yep Website",
      projectDesc: "When it comes to money, you can do it all with Yep!Banking, Payments, Bills, Loans, Savings, Investments, Remittance? Yep!",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.getyep.co/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+234 9011895431",
  email_address: "danielimodoye@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
