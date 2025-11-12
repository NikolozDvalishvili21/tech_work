import React, { useEffect } from "react";
import { animate, stagger } from "animejs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Cards() {
  const features = [
    {
      title: "Fast Setup",
      desc: "Built with Vite and Tailwind for instant development.",
    },
    {
      title: "Reusable Components",
      desc: "shadcn/ui lets you build beautiful, consistent UIs easily.",
    },
    {
      title: "Smooth Animations",
      desc: "anime.js brings your interface to life with motion.",
    },
  ];

  useEffect(() => {
    animate(".feature-card", {
      opacity: [0, 1],
      scale: [0.9, 1],
      translateY: [30, 0],
      delay: stagger(200), 
      duration: 200,
    });
  }, []);

  return (
    <section className="w-full bg-gray-950 text-white py-16 px-6 overflow-hidden">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Project Highlights
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <Card
            key={i}
            className="feature-card bg-gray-800 border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:scale-[1.02]"
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                This section uses shadcns Card component.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
