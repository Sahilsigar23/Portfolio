import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper 
      className="max-w-[32%] max-lg:max-w-full" 
      y={0} 
      scale={0.8} 
      delay={num/4} 
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">{value.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag: string, index: number) => {
              const tagStyles = {
                'Nextjs': 'bg-teal-100 text-teal-800',
                'Freelancing': 'bg-yellow-100 text-yellow-800',
                'Shadcn Ui': 'bg-blue-100 text-blue-800',
                'Typescript': 'bg-red-100 text-red-800',
                'MySQL': 'bg-orange-100 text-orange-800',
                'Zustand': 'bg-indigo-100 text-indigo-800',
                'Supabase': 'bg-emerald-100 text-emerald-800',
                'Npx': 'bg-indigo-100 text-indigo-800',
                'Library': 'bg-pink-100 text-pink-800',
                'Zod': 'bg-cyan-100 text-cyan-800',
                'React Hook Form': 'bg-violet-100 text-violet-800',
                'React': 'bg-sky-100 text-sky-800',
                'Gemini AI': 'bg-purple-100 text-purple-800',
                'Firebase': 'bg-amber-100 text-amber-800',
                'TailwindCSS': 'bg-teal-100 text-teal-800',
                'Google places API': 'bg-green-100 text-green-800',
                'C++': 'bg-slate-100 text-slate-800',
                'DSA': 'bg-rose-100 text-rose-800',
                'Huffman Coding': 'bg-stone-100 text-stone-800',
                'MERN': 'bg-lime-100 text-lime-800',
                'Socket.IO': 'bg-gray-100 text-gray-800',
                'DaisyUI': 'bg-fuchsia-100 text-fuchsia-800',
                'MongoDB': 'bg-emerald-100 text-emerald-800',
                'FastAPI': 'bg-emerald-100 text-emerald-800',
                'SQLAlchemy (Async)': 'bg-yellow-100 text-yellow-800',
                'Alembic': 'bg-orange-100 text-orange-800',
                'Pydantic': 'bg-blue-100 text-blue-800',
                'PostgreSQL': 'bg-cyan-100 text-cyan-800',
                'Python': 'bg-indigo-100 text-indigo-800',
                'Vite': 'bg-purple-100 text-purple-800',
                'ESLint': 'bg-red-100 text-red-800',
                'Node.js': 'bg-lime-100 text-lime-800',
                'Express': 'bg-slate-100 text-slate-800',
                'Google Gemini API': 'bg-purple-100 text-purple-800',
                'WebSockets / Socket.IO': 'bg-gray-100 text-gray-800',
                'Redis': 'bg-red-100 text-red-800',
              }[tag] || 'bg-gray-100 text-gray-800';

              return (
                <span 
                  key={index}
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagStyles}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="pt-2 ">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ 
                variant: "default", 
                size: "sm" 
              }),
              "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
            )}
          >
            Visit Project 
            <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
