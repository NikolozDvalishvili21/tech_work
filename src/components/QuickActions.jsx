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
      duration: 120,
      ease: "inOutExpo",
    });
  };

  return (
    <div className="flex justify-center gap-4 py-10 bg-gray-900">
      {actions.map((action) => (
        <Button
          key={action.id}
          className="cursor-pointer w-24 h-10 text-sm font-medium transition-all bg-white/10 hover:bg-white/20 text-white backdrop-blur rounded-lg border border-white/10"
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
}
