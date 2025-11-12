import React from "react";
import { Button } from "@/components/ui/button";
import { animate } from "animejs";

const actions = [
  { id: 1, label: "Home" },
  { id: 2, label: "Gallery" },
  { id: 3, label: "About" },
  { id: 4, label: "Contact" },
];

export default function QuickActions() {
  const handleHover = (e, enter) => {
    const el = e.currentTarget;
    animate(el, {
      scale: enter ? 1.1 : 1,
      duration: 150,
      easing: "easeInOutQuad",
    });
  };

  return (
    <section className="bg-gray-900 text-white py-10">
      <div
        className="
          flex flex-wrap justify-center gap-6
          sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl
          mx-auto
        "
      >
        {actions.map((action) => (
          <Button
            key={action.id}
            variant="outline"
            className="
              cursor-pointer w-32 h-10 text-sm font-medium
              transition-all bg-white/10 hover:bg-white/20 text-white
              backdrop-blur rounded-lg border border-white/10
              shrink-0
            "
            onMouseEnter={(e) => handleHover(e, true)}
            onMouseLeave={(e) => handleHover(e, false)}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </section>
  );
}
