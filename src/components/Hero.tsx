import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/ea3293d6-c573-47ab-b18c-79d38a469788/files/c588960a-ca34-40b8-9355-bc5074e3af2b.jpg"
          alt="Коммерческая недвижимость Тольятти"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          НЕДВИЖИМОСТЬ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Продажа и аренда коммерческих помещений в Тольятти. Офисы, склады, торговые площади — найдём лучший вариант для вашего бизнеса.
        </p>
        <a
          href="https://www.avito.ru/i89006289"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-medium hover:bg-neutral-200 transition-colors duration-300"
        >
          Смотреть объекты на AVITO
        </a>
      </div>
    </div>
  );
}