/* eslint-disable import/extensions */

// Services Img Imports
import Web from '../assets/images/Services/webdev.jpeg';
import Perfomance from '../assets/images/Services/performance.jpg';
import Seo from '../assets/images/Services/Seo.jpg';
import Ad from '../assets/images/Services/Ad.jpg';
import UX from '../assets/images/Services/UX.jpg';
import Payment from '../assets/images/Services/payment.jpg';
import Expert from '../assets/images/Services/Expert.jpg';
import Plug from '../assets/images/Services/Design.png';

// Portfolio Img Imports
import surma from '../assets/images/Portfolio/logox2.jpg';
// import Stream from '../assets/images/Portfolio/Stream.png';
// import Freelance from '../assets/images/Portfolio/Freelance.png';
// import Aura from '../assets/images/Portfolio/Aura.png';
// import Surtido from '../assets/images/Portfolio/Surtido.png';
// import ManagementApp from '../assets/images/Portfolio/ManagementApp.png';

// Advantages
import Communicative from '../assets/images/Advantages/Communicative.png';
import Collaborative from '../assets/images/Advantages/Collaborative.png';
import Management from '../assets/images/Advantages/Management.png';
import Favorite from '../assets/images/Advantages/Favorite.png';

// Testimonials
import Sasha from '../assets/images/Testimonials/Sasha.jpg';
import Reiner from '../assets/images/Testimonials/Reiner.jpg';
import Kruger from '../assets/images/Testimonials/Kruger.jpg';

// TeamMembers
import CEO from '../assets/images/TeamMembers/CEO.jpg';
import HRD from '../assets/images/TeamMembers/HRD.jpg';
import Finance from '../assets/images/TeamMembers/Finance.jpg';
import ProjectManager from '../assets/images/TeamMembers/Project-manager.jpg';
import Frontend1 from '../assets/images/TeamMembers/Frontend1.jpg';
import Frontend2 from '../assets/images/TeamMembers/Frontend2.jpg';
import Backend1 from '../assets/images/TeamMembers/Backend1.jpg';
import Backend2 from '../assets/images/TeamMembers/Backend2.jpg';
import Mobile1 from '../assets/images/TeamMembers/Mobile1.jpg';
import Mobile2 from '../assets/images/TeamMembers/Mobile2.jpg';
import UIUX1 from '../assets/images/TeamMembers/UIUX1.jpg';
import UIUX2 from '../assets/images/TeamMembers/UIUX2.jpg';

export const Services = [
  {
    title: 'Fullstack Web Development',
    imageUrl: Web,
    animation: 'left',
    description: 'We provide comprehensive full-stack web development services to build dynamic websites.',
  },
  {
    title: 'Performance Marketing',
    imageUrl: Perfomance,
    animation: 'up',
    description: 'Our performance marketing strategies help you achieve measurable results.',
  },
  {
    title: 'Digital Marketing and SEO',
    imageUrl: Seo,
    animation: 'right',
    description: 'We optimize your online presence through effective digital marketing and SEO tactics.',
  },
  {
    title: 'Ads (GMB & Google Paid Marketing)',
    imageUrl: Ad,
    animation: 'left',
    description: 'Maximize your visibility with targeted ads and Google My Business promotions.',
  },
  {
    title: 'Payment Gateway Integration',
    imageUrl: Payment,
    animation: 'up',
    description: 'Seamlessly integrate payment gateways for smooth transactions.',
  },
  {
    title: 'UI/UX Design',
    imageUrl: UX,
    animation: 'right',
    description: 'We create user-friendly designs that enhance the user experience.',
  },
  {
    title: 'Custom Plugins',
    imageUrl: Plug,
    animation: 'left',
    description: 'Develop custom plugins tailored to your specific business needs.',
  },
  {
    title: 'Expert Consultation',
    imageUrl: Expert,
    animation: 'up',
    description: 'Get professional guidance to improve your business strategies.',
  },
];

export const Portfolios = [
  {
    id: 'asd1293uasdads1',
    title: 'Construction Company Website',
    imageUrl: surma,
    description: 'This website was developed for a construction company with a focus on intuitive user experience and responsive design. Prioritizing mobile compatibility, it ensures clients and potential customers can easily navigate services, view projects, and contact the company on any device. The layout is clean and professional, effectively showcasing the company’s expertise and offerings to enhance their brand image and user engagement.',
    type: 'Website',
    responsibility: [
      'Website development',
      'UI/UX Design',
    ],
    credit: 'https://surmaconstructionlimited.com/',
    
  },

];

export const Advantages = [
  [{
    title: 'Communicative',
    description: 'We communicate our project ideas and progress to make it clear.',
    imageUrl: Communicative,
  },
  {
    title: 'Management',
    description: 'We manage our project properly to make our project done well.',
    imageUrl: Management,
  }],
  [{
    title: 'Collaborative​',
    description: 'Our team are very collaborative to make our project done well.',
    imageUrl: Collaborative,
  },
  {
    title: 'Favorite',
    description: "We've did so many project and all of our client love it.",
    imageUrl: Favorite,
  }],
];
export const Testimonials = [
  {
    id: 1,
    name: 'Sasha Rose',
    company: 'Owner, Surveyor Corps',
    testimoni: 'Thanks for Racxstudio, you guys are the best! Keep up the great work!',
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: 'Kruger Khan',
    company: 'Director, Shultan Oil',
    testimoni: 'I just wanted to let you know that it’s been great working with Racxstudio.',
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: 'Reiner John',
    company: 'CEO, Marley CO',
    testimoni: 'Racxstudio is so great. Thank you so much for a job well done.',
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: 'Rach David',
    position: 'CEO',
    imageUrl: CEO,
  },
  
  {
    name: 'Pauline Sydney',
    position: 'HRD',
    imageUrl: HRD,
  },
  {
    name: 'Granger Watterson',
    position: 'Finance',
    imageUrl: Finance,
  },
  {
    name: 'Tom Jimmy',
    position: 'Project Manager',
    imageUrl: ProjectManager,
  },
  {
    name: 'Jim Hendrix',
    position: 'Front-end Developer',
    imageUrl: Frontend1,
  },
  {
    name: 'Calvin Max',
    position: 'Front-end Developer',
    imageUrl: Frontend2,
  },
  {
    name: 'Hawkins Jim',
    position: 'Back-end Developer',
    imageUrl: Backend1,
  },
  {
    name: 'Don Bizaro',
    position: 'Back-end Developer',
    imageUrl: Backend2,
  },
  {
    name: 'Bill Markinson',
    position: 'Mobile Developer',
    imageUrl: Mobile1,
  },
  {
    name: 'Igor Kavarov',
    position: 'Mobile Developer',
    imageUrl: Mobile2,
  },
  {
    name: 'Freddie Curl',
    position: 'UI/UX Designer',
    imageUrl: UIUX2,
  },
  {
    name: 'Monica Lovegood',
    position: 'UI/UX Designer',
    imageUrl: UIUX1,
  },
];
