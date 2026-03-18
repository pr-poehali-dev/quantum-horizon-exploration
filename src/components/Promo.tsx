import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/87657799-6357-42f2-928d-3de0d8776ffd/files/95bbd17a-98cb-4ddb-97e9-2a037576bad6.jpg"
            alt="SwiftChat network"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-[#2AABEE] uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest font-medium">
        Безопасность прежде всего
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10 leading-tight">
        Миллиарды сообщений ежедневно. Ни одного прочитанного постороннего.
        SwiftChat — там, где приватность — не опция, а стандарт.
      </p>
    </div>
  );
}