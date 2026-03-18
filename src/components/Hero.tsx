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
          src="https://cdn.poehali.dev/projects/87657799-6357-42f2-928d-3de0d8776ffd/files/f2eafe1a-c86c-416c-b2ef-d034084ffa9c.jpg"
          alt="SwiftChat hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-[#2AABEE] uppercase tracking-widest text-sm mb-4 font-medium">Мессенджер нового поколения</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ОБЩАЙСЯ<br />СВОБОДНО
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Быстро, безопасно и без лишнего. SwiftChat — мессенджер, который уважает твоё время и конфиденциальность.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className="bg-[#2AABEE] text-white px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-[#1d8fca] transition-colors duration-300"
          >
            Скачать бесплатно
          </a>
          <a
            href="#features"
            className="border border-white text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-neutral-900 transition-colors duration-300"
          >
            Узнать больше
          </a>
        </div>
      </div>
    </div>
  );
}