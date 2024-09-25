import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Erv Noel",
  initials: "EN",
  url: "https://github.com/twosyntaxerrors",
  location: "Brooklyn, NY",
  locationLink: "https://www.google.com/maps/place/brooklyn",
  description:

  "Creative Problem Solver & AI/Tech Enthusiast. I like building cool projects and helping others bring their ideas to life.",

  summary:
    "In the past, [I pursued a degree in Information Sciences and Technology with an option in design and development](/#education), [interned at some tech companies in State College to help local nonprofits](https://www.cvim.net/), and dedicated my time to learning how to communicate my ideas through sales and [building projects](/#projects). My entrepreneurial spirit, creativity and adaptability make me well-suited for fast-paced roles that demand both initiative and teamwork.",
  avatarUrl: "/Erv_FLUX.png",
  skills: [
    "Pipeline Management",
    "Salesforce",
    "Customer Relationship Management",
    "Sales Prospecting",
    "Cold Calling",
    "AI Engineering",
    "Figma",
    "Photoshop",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/erv_resume.pdf", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "ervnoelprodcution@gmail.com",
    tel: "+5166100406",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/twosyntaxerrors",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ervenst-noel-46709578/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/LeoGivenchy_",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@ErvNoelProduction",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [



    {
      company: "Angi",
      href: "https://www.angi.com/",
      badges: [],
      location: "Remote",
      title: "Senior Account Executive",
      logoUrl: "/angi.png",
      start: "July 2020",
      end: "October 2023",
      description:
        "Generated over $2 million in new business and $443,570 in lead revenue within 56 days. Onboarded and closed 1-3 businesses daily, managing 500+ approved accounts, from startups to franchises. Averaged 3-4 hours of talk time per day, providing guidance on customer relationship strategies while maintaining a high volume of sales activity in a remote environment.",
    },

    {
      company: "ICHIRAN USA, INC.",
      href: "https://www.ichiranusa.com/",
      badges: [],
      location: "Brooklyn, NY",
      title: "Lead Machine Operator",
      logoUrl: "/ichiran-logo.png",
      start: "February 2017",
      end: "March 2020",
      description:
        "Led and educated new employees in the factory on proper procedures, production process and machine maintenance while maintaining a strong and positive working environment.",
    },

    {
      company: "Videomining Corporation",
      href: "https://www.videomining.com/",
      badges: [],
      location: "State College, PA",
      title: "Data Annotator",
      logoUrl: "/videomining-logo.png",
      start: "October 2014",
      end: "September 2016",
      description:
        "Resolved database issues, annotated videos for market research and coordinated with development and field teams to ensure accuracy and precision to further research on shopper behavior.",
    },

    {
      company: "West Arete",
      href: "https://westarete.com/",
      badges: [],
      location: "State College, PA",
      title: "Web Developer Intern",
      logoUrl: "/west_arete_logo.png",
      start: "June 2013",
      end: "August 2013",
      description:
        "Worked with taking Photoshop compositions and implementing the designs with HTML, CSS and Javascript to create a fully functional website for Navy Clearinghouse.",
    },

    {
      company: "Surge Consulting",
      href: "https://surgeconsulting.org/",
      badges: [],
      location: "State College, PA",
      title: "Web Developer Intern",
      logoUrl: "/surge_consulting.png",
      start: "January 2013",
      end: "August 2013",
      description:
        "Revamped the website for Penn United Soccer and led a team to create a website an online presence for Centre Volunteers in Medicine. Conducted market research and graphic design for public service announcements, as well as cold outreach to potential nonprofits.",
    },
  
    // Education 
  ],
  education: [
    
    {
      school: "Pennsylvania State University",
      href: "https://www.psu.edu/",
      degree: "Bachelor's Degree of Information Sciences and Technology (BCS)",
      logoUrl: "/pennstatelogo1.png",
      start: "2011",
      end: "2016",
    },
   
  ],

  // Projects
  projects: [
    {
      title: "Erv Noel Beat Store",
      href: "https://www.ervnoel.com",
      dates: "Jan 2018 - Present",
      active: true,
      description:
        "I got into music production after struggling to find beats I liked. I spent time learning the craft and eventually created a website to sell beats, graphic design and mixing services to aspiring artists and content creators.",
      technologies: [
        "No Code Builder",
        "Beatstars",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.ervnoel.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/1bbd1e39-5858-4d28-a4ef-27954ba08c52_zoom.mp4",
    },
    {
      title: "Loopgen.ai",
      href: "https://www.github.com/twosyntaxerrors/",
      dates: "August 2024 - Present",
      active: true,
      description:
        "Designed, developed Loopgen, a simple web app for producers/sound designers to generate one-shots, drum loops or sfx, with the power of neural networks.",
      technologies: [
        "Next.js",
        "Typescript",
        "AceternityUI",
        "Clerk",
        "Firebase",
        "TailwindCSS",
        "Shadcn UI",
        "ElevenLabs API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/loopgen-video-example.mp4",
    },

    {
      title: "Stable Diffusion LoRA Training Guide",
      href: "https://docs.google.com/document/d/1FrlKikJJtx9e0tOaYx3h_k9P6d31PQZp",
      dates: "February 2024", 
      active: true,
      description:
        "Wrote an in-depth guide on how to train a low rank adaptation model on a likeness using Runpod's GPU cloud infrastructure, Google Colab, and Fooocus (a front end for running Stable Diffusion inference)",
      technologies: [
        "Stable Diffusion",
        "Google Colab",
        "RunPod",
        "Fooocus",
      ],
      links: [
        {
          type: "Website",
          href: "https://docs.google.com/document/d/1FrlKikJJtx9e0tOaYx3h_k9P6d31PQZp",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/Stable_Diffusion_Training_Guide_1.mp4",
    },

    {
      title: "Face To Many AI",
      href: "https://github.com/twosyntaxerrors/face-to-many-nextjs-interface",
      dates: "April 2024", 
      active: true,
      description:
        "Developed a frontend UI for @fofr's Replicate API (face-to-many) that takes a user image as input and uses machine learning to transform the image based on the user's selected style and prompt.",
      technologies: [
        "Next.js",
        "Typescript",
        "AceternityUI",
        "TailwindCSS",
        "Shadcn UI",
        "Replicate API",
        "Claude",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/twosyntaxerrors/face-to-many-nextjs-interface",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/Doja_Cat_Face_3.mp4",
    },

    {
      title: "Youtube Frame Extractor",
      href: "https://github.com/twosyntaxerrors/face-to-many-nextjs-interface",
      dates: "September 2024", 
      active: true,
      description:
        "Developed a Youtube frame extractor built with Streamlit and Python, to streamline the process of creating datasets to train FLUX LoRAs on the images extracted from Youtube videos. Works well for training LoRA on a specific style.",
      technologies: [
        "Streamlit",
        "Python",
        "NumPy",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/twosyntaxerrors/youtune-streamlit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/Youtune_Perfect_Blue.mp4",
    },


    {
      title: "Aura Stock Photo & Video Website",
      href: "https://github.com/twosyntaxerrors/face-to-many-nextjs-interface",
      dates: "February 2024", 
      active: true,
      description:
        "Developed a minimal stock photo and video platform specifically for producers who upload beats to Youtube, to enhance their thumbnails and to have video content for use with beat videos.",
      technologies: [
        "NextJS",
        "TailwindCSS",
        "Shadcn",
        "Typescript",
        "Supabase",
      ],
      links: [
        {
          type: "Source Code",
          href: "https://github.com/twosyntaxerrors/youtune-streamlit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/Stock_photo_platform_2.mp4",
    },




    
  ],
  
  
  hackathons: [

    
  ],
  
} as const;
