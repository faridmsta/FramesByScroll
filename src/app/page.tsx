'use client'
import Video from "@/components/Video";
import { motion as m } from "motion/react";

export default function Home() {
  return (
    <div className="app">
      <div className="intro ">
        <div className="container m-auto h-[100vh] flex flex-col justify-center items-start">
          <m.h1
          initial={{
            opacity: 0,
           
          }}
          animate={{
            opacity: 1,
          
          }}
          transition={{
            delay: 0,
            duration: 1,
          }}
           className="text-white text-[2rem] md:text-[5rem]">That's not a 3D model</m.h1>
          <m.p 
          initial={{
            opacity: 0,
            y:100
          }}
          animate={{
            opacity: 1,
            y:0
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="text-white text-[1rem] md:text-[2rem]">scroll...</m.p>
        </div>
      </div>
      <Video />
      <div className="intro h-screen">
        <div className="container m-auto h-screen flex flex-col  justify-center">
          <h1 className="heading">
            {'Rolex'.split('').map((item, index) => (
              <m.span key={index}
                initial={{
                  opacity: 0,
                  color: "#ffffff"
                }}
                whileInView={{
                  opacity: 1,
                  color: "#a37e2c"
                }}
                transition={{
                  delay: 0.15 * index,
                  duration: 2,
                }}
                className="text-white text-[5rem]">{item}</m.span>
            ))}
          </h1>
          <m.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 2.2,
              duration: 2,
            }}
            className="text-white text-[1.5rem] translate-y-20">check out my <a href="https://www.wanttoknow.me/" target="_blank" className=" underline" rel="noopener noreferrer">portfolio</a> for more</m.p>

        </div>
      </div>
    </div>
  );
}
