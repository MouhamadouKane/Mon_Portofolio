"use client";

import { useState, useEffect } from "react";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  { name: "Vert", value: "green", color: "#2f9e6e" },
  { name: "Bleu", value: "blue", color: "#3b82f6" },
  { name: "Violet", value: "purple", color: "#8b5cf6" },
  { name: "Orange", value: "orange", color: "#f97316" },
  { name: "Rouge", value: "red", color: "#ef4444" },
  { name: "Rose", value: "pink", color: "#ec4899" },
];

export function ColorSwitcher() {
  const [currentTheme, setCurrentTheme] = useState("green");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-color") || "green";
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme-color", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  const currentColor = themes.find((t) => t.value === currentTheme)?.color || "#2f9e6e";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Palette size={18} style={{ color: currentColor }} />
          <span className="sr-only">Changer la couleur du theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className="flex cursor-pointer items-center gap-2"
          >
            <span
              className="h-4 w-4 rounded-full border border-border"
              style={{ backgroundColor: theme.color }}
            />
            <span>{theme.name}</span>
            {currentTheme === theme.value && (
              <span className="ml-auto text-xs text-muted-foreground">Actif</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
