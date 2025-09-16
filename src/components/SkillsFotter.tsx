import Image from "next/image";
import React from "react";

interface MyComponentProps {
  items: Array<{ alt?: string; img?: any; name?: string; icon?: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items &&
        items.map((item, index) => {
          const hasIcon = Boolean(item.icon);
          const initials = (item.name || "?")
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)
            .toUpperCase();
          return (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
            >
              {hasIcon ? (
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <div className="w-12 h-12 rounded-md bg-muted text-muted-foreground flex items-center justify-center text-sm font-semibold">
                  {initials}
                </div>
              )}
              <span className="text-sm text-center font-medium text-muted-foreground">
                {item.name}
              </span>
            </div>
          );
        })}
    </>
  );
};

export default SkillsFooter;
