/** Fields passed to `WorkItem`; `popupId` must be unique per item for popup anchors. */
export type WorkEntry = {
  popupId: string | number;
  /** Space-separated filter classes after `box-item`, e.g. `f-nextjs f-react`. */
  filters: string;
  thumbSrc: string;
  thumbAlt: string;
  fullSrc: string;
  fullAlt: string;
  category: string;
  title: string;
  description: string;
  technologies: string;
  projectUrl: string;
  projectLabel?: string;
};

export const works: WorkEntry[] = [
  {
    popupId: 0,
    filters: "f-nextjs f-react f-nodejs",
    thumbSrc: "images/works/small/tsigros-gym-booking-9-small.jpg",
    thumbAlt: "Tsigkros Gym Booking App - Next.js Web Application",
    fullSrc: "images/works/tsigros-gym-booking-9.jpg",
    fullAlt: "Tsigkros Gym Booking App - Full Screen Preview",
    category: "Web App",
    title: "Tsigkros Gym Booking App",
    description:
      "Custom Design, Develop and Maintain an online booking website system for fitness studios, where the clients can register their account and book their monthly subscription to their desired fitness classes.",
    technologies:
      "Technologies : Nextjs, React, Nodejs, MongoDB, Material UI, Styled Components, NextAuth",
    projectUrl:
      "https://photos.google.com/share/AF1QipNudcQ7i9nccL4bq-hFJd1CnNP6sZ_zxdphl_5x5cosBgSgZ4d_ugxWNGTsSY5BNQ?pli=1&key=cFhLY01EMEstSVhFMl90X09mOXJ1WDdXS3NWSnBR",
  },
  {
    popupId: 1,
    filters: "f-wordpress",
    thumbSrc: "images/works/small/abc-edu-gr-small.jpg",
    thumbAlt: "ABC EDU GR - Study and Family Counseling Center Website",
    fullSrc: "images/works/abc-edu-gr.png",
    fullAlt: "ABC EDU GR - Full Website Preview",
    category: "Website",
    title: "ABC EDU GR",
    description:
      "I developed the official website for ABC EDU GR, a Study and Family Counseling Center based in Palaio Faliro. The project included crafting a user-friendly interface, creating a responsive layout for all devices, and delivering a clean structure that effectively communicates the center's educational and support services to parents and children.",
    technologies: "Technologies : Wordpress",
    projectUrl: "https://abc.edu.gr",
  },
  {
    popupId: 2,
    filters: "f-nextjs f-wordpress f-react",
    thumbSrc: "images/works/small/rolima2.jpg",
    thumbAlt: "Rolima Ltd - Industrial Wear Protection Website",
    fullSrc: "images/works/small/rolima2.jpg",
    fullAlt: "Rolima Ltd - Full Website Preview",
    category: "Website",
    title: "Rolima Ltd",
    description:
      "Responsible for creating the digital presence for Rolima, a leading industrial wear protection supplier and installer in Cyprus. The modern UI and headless architecture ensure seamless content management and excellent user experience.",
    technologies:
      "Technologies : Gatsby.js, GraphQl , Headless Wordpress, MaterialUI, Emotion",
    projectUrl: "https://rolima.com",
  },
  {
    popupId: 3,
    filters: "f-wordpress",
    thumbSrc: "images/works/small/moka-small.jpg",
    thumbAlt: "Moka Patisserie - Bakery Website",
    fullSrc: "images/works/moka.png",
    fullAlt: "Moka Patisserie - Full Website Preview",
    category: "Website",
    title: "Moka Patisserie",
    description:
      "Responsible for creating the digital presence for Rolima, a leading industrial wear protection supplier and installer in Cyprus. The modern UI and headless architecture ensure seamless content management and excellent user experience.",
    technologies: "Technologies : Wordpress",
    projectUrl: "https://mokapatisserie.gr",
  },
  {
    popupId: 4,
    filters: "f-wordpress",
    thumbSrc: "images/works/small/wordin-small.jpg",
    thumbAlt: "Wordin - Content Writing Agency Website",
    fullSrc: "images/works/wordin.png",
    fullAlt: "Wordin - Full Website Preview",
    category: "Website",
    title: "Wordin",
    description:
      "Custom designed and developed the website for Wordin, a content writing agency focused on delivering high-quality editorial services to businesses and brands. The platform showcases their offerings with a clean, modern layout and a strong emphasis on clarity and messaging.",
    technologies: "Technologies : Wordpress",
    projectUrl: "https://wordin.gr",
  },
];
