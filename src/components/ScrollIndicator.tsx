import { ChevronDown } from "./icons";

export function ScrollIndicator() {
  const scrollToStats = () => {
    const element = document.getElementById("stats");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-16 flex items-center justify-center -mt-8 -mb-8 z-50">
      <button
        onClick={scrollToStats}
        className="text-cyan-400 hover:text-cyan-300 transition-all animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </div>
  );
}
