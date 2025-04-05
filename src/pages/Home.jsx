import React from 'react'
import Banner from '../components/Banner';
import UniversityCarousel from '../components/UniversityCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';
import CoursesGrid from '../components/CoursesGrid';
function Home() {
  //Sample BannerImages data
  const bannerImages = [
    { 
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200", 
      alt: "Students studying abroad" 
    },
    { 
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200", 
      alt: "University campus" 
    },
    { 
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200", 
      alt: "International education" 
    }
  ];

  // Sample university data
  const universities = [
    {
      id: 21,
      name: "Harvard University",
      country: "USA",
      location: "Cambridge, MA",
      ranking: "#5 World",
      description: "One of the world's most prestigious universities offering diverse programs across disciplines.",
      programCount: 187,
      tuitionRange: "$50K-$60K",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800"
    },
    {
      id: 22,
      name: "University of Oxford",
      country: "UK",
      location: "Oxford, England",
      ranking: "#2 World",
      description: "The oldest university in the English-speaking world with excellence in research and teaching.",
      programCount: 154,
      tuitionRange: "£25K-£45K",
      image: "https://images.unsplash.com/photo-1603437119287-4a3732b685f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 23,
      name: "University of Toronto",
      country: "Canada",
      location: "Toronto, ON",
      ranking: "#18 World",
      description: "Canada's leading institution known for innovation and diverse cultural environment.",
      programCount: 215,
      tuitionRange: "CA$38K-$50K",
      image: "https://images.unsplash.com/photo-1566835745069-cebca4b64ce3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 24,
      name: "University of Melbourne",
      country: "Australia",
      location: "Melbourne, VIC",
      ranking: "#31 World",
      description: "Australia's leading university known for research excellence and quality education.",
      programCount: 168,
      tuitionRange: "AU$30K-$45K",
      image: "https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 25,
      name: "ETH Zurich",
      country: "Switzerland",
      location: "Zurich",
      ranking: "#9 World",
      description: "Swiss Federal Institute of Technology known for science, technology and engineering programs.",
      programCount: 112,
      tuitionRange: "CHF1.5K-2K",
      image: "https://images.unsplash.com/photo-1560106371-71f9c5ca9f42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sbGVnZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 26,
      name: "National University of Singapore",
      country: "Singapore",
      location: "Singapore",
      ranking: "#11 World",
      description: "Leading global university centered in Asia offering a global approach to education and research.",
      programCount: 132,
      tuitionRange: "S$29K-$40K",
      image: "https://images.unsplash.com/photo-1561525985-654e6a2fa04a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sbGVnZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 27,
      name: "Sorbonne University",
      country: "France",
      location: "Paris",
      ranking: "#42 World",
      description: "Historic university in the heart of Paris offering programs in arts, sciences and humanities.",
      programCount: 95,
      tuitionRange: "€3K-€12K",
      image: "https://images.unsplash.com/photo-1620650764255-6797e68c7904?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2VzfGVufDB8fDB8fHww"
    },
    {
      id: 28,
      name: "University of Tokyo",
      country: "Japan",
      location: "Tokyo",
      ranking: "#24 World",
      description: "Japan's top university with cutting-edge research and comprehensive educational programs.",
      programCount: 123,
      tuitionRange: "¥535K-¥900K",
      image: "https://images.unsplash.com/photo-1612155576354-da59a4aca3f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGxlZ2VzfGVufDB8fDB8fHww"
    }
  ];

  //Sample Testimonial Data
  const testimonials = [
    {
      name: "Emily Johnson",
      text: "StudyAbroadConnect transformed my educational journey. Their guidance made applying to Oxford seamless and stress-free. The personalized counseling and ongoing support were beyond valuable. I'm now studying my dream program thanks to their expertise!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      university: "University of Oxford",
      program: "International Relations"
    },
    {
      name: "Michael Chen",
      text: "I can't thank StudyAbroadConnect enough for helping me navigate the complex admission process for my Master's program. From university selection to visa guidance, their team was professional and insightful. The seminars they organized gave me crucial information I wouldn't have found elsewhere.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
      university: "MIT",
      program: "Computer Science"
    },
    {
      name: "Sophia Rodriguez",
      text: "As a first-generation college student, studying abroad seemed impossible until I found StudyAbroadConnect. Their scholarship guidance and application support were instrumental in my success. They truly care about each student's journey!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
      university: "University of Toronto",
      program: "Business Analytics"
    },
    {
      name: "James Wilson",
      text: "The seminars organized by StudyAbroadConnect were eye-opening. They connected me with alumni from my target universities and helped me prepare for interviews. Their detailed feedback on my personal statement made a significant difference in my applications.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
      university: "ETH Zurich",
      program: "Mechanical Engineering"
    },
    {
      name: "Aisha Patel",
      text: "From selecting the right courses to understanding cultural differences, StudyAbroadConnect prepared me for every aspect of international education. Their pre-departure orientation was comprehensive and their network of university connections is impressive!",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=200",
      university: "National University of Singapore",
      program: "Environmental Science"
    },
    {
      name: "Daniel Kim",
      text: "I was overwhelmed by the university options until I attended StudyAbroadConnect's personalized counseling sessions. They helped match my academic interests with the right programs and guided me through each step of the application. Now I'm thriving in my dream university!",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
      university: "University of Melbourne",
      program: "Architecture"
    }
  ];

  //Sample Data for courses
  const coursesData = [
    { name: "Computer Science", icon: "https://cdn-icons-png.flaticon.com/128/2756/2756792.png" },
    { name: "Business Management", icon: "https://cdn-icons-png.flaticon.com/128/639/639394.png" },
    { name: "Psychology", icon: "https://cdn-icons-png.flaticon.com/128/1491/1491171.png" },
    { name: "Engineering", icon: "https://cdn-icons-png.flaticon.com/128/4257/4257483.png" },
    { name: "Medicine", icon: "https://cdn-icons-png.flaticon.com/128/3209/3209134.png" },
    { name: "Law", icon: "https://cdn-icons-png.flaticon.com/128/924/924954.png" },
    { name: "Arts & Design", icon: "https://cdn-icons-png.flaticon.com/128/1702/1702570.png" },
    { name: "Education", icon: "https://cdn-icons-png.flaticon.com/128/10428/10428527.png" },
  ];
  
  return (
    <>
      <div>
      <Banner 
        images={bannerImages}
        heading="Your Global Education Journey Starts Here"
        subheading="Find your perfect university abroad with personalized guidance from application to admission"
        buttonText="Get Started"
      />
      <UniversityCarousel universities={universities} />
      <TestimonialCarousel testimonials={testimonials} />
      <CoursesGrid courses={coursesData}/>
      </div>
    </>
  )
}

export default Home