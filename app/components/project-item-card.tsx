import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";

export interface ProjectItemCardProps {
  title: string;
  subtitle: string;
  infoTitle: string;
  infoSubtitle: string;
  SubtitleLink?: string;
  dropdownText?: string;
}

export default function ProjectItemCard({
  title,
  subtitle,
  infoTitle,
  infoSubtitle,
  SubtitleLink,
  dropdownText = "",
}: ProjectItemCardProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full border-b-2 border-eggshell mt-6 py-6">
        {/* Project title and description */}
        <div className="space-y-2">
          <h3 className="work-card-text">{title}</h3>
          <h4 className="work-card-text">{subtitle}</h4>
        </div>
        {/* Role info */}
        <div className="text-right space-y-2">
          {SubtitleLink ? (
        <a 
          href={SubtitleLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="work-card-text hover:text-indigo-600 transition-colors"
        >
          <h3 className="work-card-text">{infoTitle}</h3>
        </a>
          ) : (
        <h3 className="work-card-text">{infoTitle}</h3>
          )}
          <h4 className="work-card-text italic">{infoSubtitle}</h4>
        </div>
      </div>

      {dropdownText && (
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="mt-2 flex items-center justify-center text-indigo-600 hover:text-indigo-800"
        >
          <motion.span
            animate={{ rotate: dropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <HiChevronDown size={24} />
          </motion.span>
        </button>
      )}

      <AnimatePresence initial={false}>
        {dropdownOpen && dropdownText && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 overflow-hidden md:text-2xl text-lg whitespace-pre-line"
          >
            {dropdownText}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}