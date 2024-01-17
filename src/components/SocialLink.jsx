import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SocialLinks() {
  return (
    <motion.div className="w-full h-full flex flex-col gap-6 text-white bottom-0" 
    initial={{ opacity:0}}
    animate= {{ opacity:1}}
    transition={{
      delay: 1.2}}>
      <div className="w-[2px] h-20 bg-white translate-x-[2.67rem] "></div>
      <div className="flex flex-col translate-x-6 gap-[1.23rem]">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <span className="w-10 h-10 text-xl bg-grey  rounded-full inline-flex items-center justify-center hover:bg-dark_green hover:bg-opacity-25 hover:text-green cursor-pointer hover:-translate-y-4 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <span className="w-10 h-10 text-xl bg-grey hover:bg-dark_green hover:bg-opacity-25 rounded-full inline-flex items-center justify-center hover:text-green cursor-pointer hover:-translate-y-4 transition-all duration-300">
          <FiLinkedin />
          </span>
        </a>
      </div>
      
    </motion.div>
  );
}
