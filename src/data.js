// import images
import Logo from '../src/img/header/logo.svg';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoLogoBitcoin, IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTelegramPlane, FaGithub } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '#home', name: 'Home' },
    { href: '#about', name: 'About' },
    { href: '#gallery', name: 'Gallery' },
    { href: '#interview', name: 'Interview' },
    { href: '#contact', name: 'Contact' },
  ],
};

export const navMData = {
  items: [
    { href: '/home', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/gallery', name: 'Gallery' },
    { href: '/interview', name: 'Interview' },
    { href: '/contact', name: 'Contact' },
  ],
};

export const socialData = [
  { href: 'https://github.com/JasonLim1009', icon: <FaGithub /> },
  { href: 'https://www.instagram.com/jasonlim1009/', icon: <IoLogoInstagram /> },
  { href: 'https://t.me/xllao24', icon: <FaTelegramPlane /> },
  { href: 'https://www.twitter.com', icon: <IoLogoTwitter /> },
  { href: 'https://www.youtube.com/channel/UCZtC8IaD62jcvVKB0SbkRIw/featured', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'STARLINK MISSION.',
  subtitle:
    'STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON.',
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'STARSHIP UPDATE:',
  subtitle1:
    'On Thursday, February 10 from Starbase in Texas, SpaceX Chief Engineer Elon Musk provided an update on the development of Starship, a fully reusable transportation system capable of carrying passengers and cargo to Earth orbit, the Moon, Mars, and beyond.',
  subtitle2:
    'On Thursday, February 10 from Starbase in Texas, SpaceX Chief Engineer Elon Musk provided an update on the development of Starship, a fully reusable transportation system capable of carrying passengers and cargo to Earth orbit, the Moon, Mars, and beyond.',
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'COMPLETED MISSION:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“FALCON 9 IN FLIGHT”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond.",
    name: 'Jason Lim',
    occupation: 'Frontend Dev',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond.',
    name: 'Aida',
    occupation: 'Frontend Dev',
  },
];

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'LA office',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tell us',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Jalan Johor Bahru Jalan Johor Bahru Jalan Johor Bahru',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+60 14 984 9038',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'xllao24@gmail.com',
      },
      link: 'Get location',
    },
    {
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Jalan Johor Bahru Jalan Johor Bahru Jalan Johor Bahru',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+60 14 984 9038',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'xllao24@gmail.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Your Full Name',
    email: 'Your Email Address',
    message: 'Your Messages...',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About me',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Jalan Johor Bahru Jalan Johor Bahru Jalan Johor Bahru',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+60 14 984 9038',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'xllao24@gmail.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '#about', name: 'About me' },
      { href: '#gallery', name: 'My gallery' },
      { href: '#interview', name: 'My services' },
      { href: '#contact', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue : Appointment' },
      { name: 'Wed - Fri : 10:00am - 6:00pm' },
      { name: 'Sat : 10:00am - 3:00pm' },
      { name: 'Sun - Closed' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};
