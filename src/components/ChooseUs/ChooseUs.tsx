
"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";


const musicContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
      
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <img src="https://lwks.com/hubfs/Audio%20Engineer-min.webp" alt="" />
       </div>
      ),
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwc3R1ZGlvfGVufDB8fDB8fHww" alt="" />
           </div>
          ),
    },
   
    {
      title: 'Limitless Learning Opportunities',
      description:
        'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
            <img src="https://c7.alamy.com/comp/2R4EW7Y/why-choose-us-handwriting-on-a-napkin-2R4EW7Y.jpg" alt="" />
           </div>
          ),
    },
  ];




function ChooseUs() {
  return (
    <div className="p-10">
    <StickyScroll content={musicContent} />
  </div>
  )
}

export default ChooseUs