"use client";
import Image from "next/image";
import MarriageCountdown from "./components/MarriageCountdown";
import CoupleMessage from "./components/CoupleMessage";
import { useEffect, useState, useRef, useMemo } from "react";



const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/lamp.png"
      alt="Lamp"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const events = [

    {
      title_ceremony: "Haldi",
      image: "/assets/haldi.png",
      date: "Saturday, January 30th 2027",
      venue: "The Laali Imperial",
      venue_address: <>Old bypass, Nimbhora, MIDC, Badnera Rd, <br /> Amravati, Maharashtra 444605</>,
      time: " 9:00 am onwards",
      link: "https://maps.app.goo.gl/M5JXhzABf3duaxNz7?g_st=ic",
    },





    {
      title_ceremony: "Bhaat",
      image: "/assets/bhaat.png",
      date: "Saturday, January 30th 2027",
      venue: "The Laali Imperial",
      venue_address: <>Old bypass, Nimbhora, MIDC, Badnera Rd, <br /> Amravati, Maharashtra 444605</>,
      time: " 12:00 am onwards",
      link: "https://maps.app.goo.gl/M5JXhzABf3duaxNz7?g_st=ic",
    },


    {
      title_ceremony: "Sangeet",
      image: "/assets/sangeet.webp",
      date: "Saturday, January 30th 2027",
      venue: "The Laali Imperial",
      venue_address: <>Old bypass, Nimbhora, MIDC, Badnera Rd, <br /> Amravati, Maharashtra 444605</>,
      time: "6:00 pm onwards",
      link: "https://maps.app.goo.gl/M5JXhzABf3duaxNz7?g_st=ic",
    },


    {
      title_ceremony: "Wedding",
      image: "/assets/shaadi.webp",
      date: "Sunday, January 31st 2027",
      venue: "Hotel Prince Garden",
      venue_address: <>13, Vapi - Daman Main Rd,<br /> Somanth, Atiyawad, Ringanwada, Daman, <br />Dadra and  Nagar Haveli and Daman <br />and Diu 396210</>,
      time: "5:00 pm onwards",
      link: "https://maps.app.goo.gl/LTEYjT67Jz1GT9a69",
    },



  ];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);


  return (

    <div>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/garima.mp3" loop preload="auto" playsInline />

      <div className="
    bg-[url('/assets/garima_mobile.webp')]
    md:bg-[url('/assets/hitched_desktopbg.webp')]  3xl:bg-[url('/assets/hitched_desktopbg.webp')]
    bg-cover bg-no-repeat bg-top md:bg-center w-full md:px-4 sm:px-8 overflow-hidden relative">




        {/* Decorative Lamps - Natural Flow Pattern */}
        {/* Left-to-Right Lamps - Less crowded */}
        <FloatingLamp className="hidden lg:block absolute top-10 left-8 w-18 h-18 transform rotate-12 opacity-90" />
        <FloatingLamp className="hidden lg:block absolute top-30 left-20 w-16 h-16 transform rotate-45 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-70 left-60 w-14 h-14 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-90 left-80 w-20 h-20 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-110 left-100 w-18 h-18 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-130 left-120 w-20 h-20 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-150 left-140 w-16 h-16 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-170 left-160 w-20 h-20 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-190 left-180 w-18 h-18 transform rotate-28 opacity-85" />



        <FloatingLamp className="lg:hidden absolute top-10 left-8 w-12 h-12 transform rotate-12 opacity-90" />
        <FloatingLamp className="lg:hidden absolute top-30 left-20 w-12 h-12 transform rotate-45 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-50 left-40 w-10 h-10 transform rotate-30 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-70 left-60 w-10 h-10 transform rotate-15 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-90 left-80 w-12 h-12 transform rotate-25 opacity-75" />
        <FloatingLamp className="lg:hidden absolute top-110 left-100 w-12 h-12 transform rotate-10 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-130 left-120 w-12 h-12 transform rotate-35 opacity-75" />
        <FloatingLamp className="lg:hidden absolute top-150 left-140 w-12 h-12 transform rotate-22 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-170 left-160 w-12 h-12 transform rotate-18 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-190 left-180 w-12 h-12 transform rotate-28 opacity-85" />



        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-20 h-20 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-20 h-20 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-100 left-100 w-20 h-20 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-120 left-120 w-28 h-28 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-140 left-140 w-20 h-20 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-160 left-160 w-28 h-28 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-180 left-180 w-20 h-20 transform rotate-28 opacity-85" />

        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-20 h-20 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-20 h-20 transform rotate-25 opacity-75" />


        {/* Right-to-Left Lamps - Less crowded */}
        <FloatingLamp className="hidden lg:block absolute top-20 right-12 w-18 h-19 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-40 right-32 w-20 h-20 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-60 right-52 w-18 h-18 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-80 right-72 w-16 h-16 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-100 right-92 w-18 h-18 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-120 right-112 w-18 h-18 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-140 right-132 w-16 h-16 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-160 right-152 w-18 h-18 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-180 right-172 w-16 h-16 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-200 right-192 w-18 h-18 transform -rotate-35 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-30 right-12 w-20 h-20 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-50 right-32 w-20 h-20 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-70 right-52 w-20 h-20 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-90 right-72 w-20 h-20 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-110 right-92 w-18 h-18 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-130 right-112 w-20 h-20 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-20 h-20 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-18 h-18 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-20 h-20 transform -rotate-22 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-20 h-20 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-20 h-20 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-20 h-20 transform -rotate-22 opacity-85" reverse={true} />

        <FloatingLamp className="lg:hidden absolute top-20 right-12 w-12 h-12 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-40 right-32 w-12 h-12 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-60 right-52 w-12 h-14 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-80 right-72 w-10 h-10 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-100 right-92 w-12 h-12 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-120 right-112 w-10 h-10 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-140 right-132 w-12 h-12 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-160 right-152 w-12 h-12 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-180 right-172 w-12 h-12 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-200 right-192 w-10 h-10 transform -rotate-35 opacity-85" reverse={true} />


        {/* <FallingLamps /> */}


        <div className=" md:pt-24 pt-4 md:pb-50 lg:pb-160 relative z-10  px-4 md:px-0">
          <h2 className="text-[#15528A]  text-center leading-tight text-[36px] sm:text-5xl lg:text-[100px] md:pb-370 pb-0 flex flex-col items-center gap-y-2">
            <span className="font-parisienne [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">
              Garima
            </span>
            <span className="text-[14px] sm:text-3xl tracking-[6px] font-cormorant [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">WEDS</span>
            <span className="font-parisienne [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">Vishal</span>
          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0  lg:pt-200 pt-150 3xl:pt-280">

            <h2 className="text-white md:text-2xl text-[17px] text-center">
              || श्री गणेशाय नमः ||
            </h2>

            <img
              src="/assets/ganesh_inter.png"
              alt="ganesh"
              className="md:w-40 w-28 h-auto"
            />

            <h2 className="text-white font-Cormorant-upright lg:text-[34px] md:text-2xl text-[26px]">
              The Sharma Family
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-white font-cormorant 
            text-3xl sm:text-5xl lg:text-[60px] leading-tight lg:tracking-wide tracking-wider">
              INVITES
            </h2>

            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[19px] mt-6">
              you to join us in the wedding celebrations of
            </p>

            <h2 className="text-white font-Cormorant-upright text-center mt-14
            md:text-5xl text-[64px] lg:text-[100px] leading-tight font-bold">
              Garima
            </h2>

            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl mt-2 text-[16px]">
              (Daughter of Mrs. Sunita & Ramautar Sharma) <br />
              (Granddaughter of late Smt. Banarsi Devi & late Shri Hanuman Prasad Sharma)
            </p>


            <h2 className="text-white font-Cormorant-upright text-center mt-4
            text-[64px] sm:text-7xl lg:text-[100px] leading-tight font-bold">
              <span className="text-white font-Cormorant-upright text-center lg:mt-10 mt-4 
            md:text-5xl text-[82px] lg:text-[150px] leading-tight">&</span>   <br />
              Vishal
            </h2>

            <p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[16px] mt-2">
              (Son of Mrs. Binita & Mr. Binay Kumar Thakur) <br />
              (Grandson of late Smt. Indrason Devi & Late Shri Maharaj Thakur)
            </p>

            <p className="text-white font-Cormorant-upright lg:text-3xl md:text-2xl text-[24px] mt-8">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-32 gap-16 ">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="lg:w-80 w-70 sm:w-76 h-auto"
                  />

                  <h2 className="text-white font-Cormorant-upright lg:text-[45px] md:text-2xl text-[37px] mt-4 font-bold">
                    {event.title_ceremony}
                  </h2>

                  <p className="text-white font-Cormorant-upright text-[14px] sm:text-base mt-2">
                    <span className="text-[22px]">{event.date}</span>  <br />
                    <span className="text-[22px]">  {event.time} </span>
                  </p>




                </div>
              ))}



            </div>

          </div>

          <div className="flex flex-col-1 justify-center items-center mt-16">
            <p className="text-white font-Cormorant-upright text-[14px] sm:text-base mt-2 text-center">
              <span className="text-[24px] uppercase font-bold">Venue</span>  <br />
              <span className="text-[24px] ">Hotel Prince Garden</span> <br />
              <span className="text-[20px]">13, Vapi - Daman Main Rd, <br />
                Somanth, Atiyawad, Ringanwada, Daman, <br />
                Dadra and Nagar Haveli and Daman <br />
                and Diu 396210</span> <br />
              <a
                href="https://maps.app.goo.gl/PhQbSuw2f2EReetR8"
                className="text-white underline md:text-sm text-[18px] mt-2 font-cormorant"
                target="_blank"
              >
                See the route
              </a>
            </p>

          </div>
          <div className="lg:h-350 md:h-180 h-86 lg:pt-20 pt-30 lg:pr-180 md:pr-100 pr-40 flex flex-col justify-end items-center text-center md:pb-40 pb-10 lg:pb-0  ">

            <h1 className="lg:text-7xl md:text-xl text-xl text-[#E1EF1E] font-parisienne ">
              With <br /> Love From Us
            </h1>

            <h2 className="lg:text-[40px] md:text-xl text-[14px] text-[#ADBAE7] lg:pt-12 pt-6  font-eb-garamond md:leading-6 lg:leading-12 leading-5 lg:px-40">
              Thank you for being part of our journey. Your presence makes this celebration truly meaningful, and we look forward to sharing these cherished moments with you.
            </h2>
          </div>

        </div>
        <img
          src="/assets/mobile_bottom.png"
          alt="ganesh"
          className="w-full h-auto md:hidden block -mt-55"
        />
      </div>


      <CoupleMessage />

      {/* <picture className="block w-full">
        <source
          media="(min-width: 768px)"
          srcSet="/assets/bride1.png"
        />
<p className="text-white font-Cormorant-upright lg:text-[30px] md:text-2xl text-[16px] mt-2">
              (Son of Mrs. Binita & Mr. Binay Kumar Thakur) </p>
        <img
          src="/assets/bide_mobilet.jpg"
          alt=""
          className="block w-full h-auto"
        />
      </picture> */}




      <div className="w-full relative">
        <picture className="block w-full">
          <source
            media="(min-width: 768px)"
            srcSet="/assets/bride1.png"
          />

          <img
            src="/assets/bide_mobilet.jpg"
            alt=""
            className="block w-full h-auto"
          />
        </picture>

        <p className="absolute md:top-50 lg:top-110 top-55 left-0 w-full text-center text-[#071949] font-Cormorant-upright lg:text-[50px] md:text-2xl text-[32px] z-10 font-bold">
          #VishalGotGarima
        </p>
      </div>




      <MarriageCountdown />

    </div>
  );
}
