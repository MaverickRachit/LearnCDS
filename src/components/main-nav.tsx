
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  BookText,
  Milestone,
  SpellCheck2,
  FileText,
  FileCheck,
  Replace,
  Trophy,
  Layers,
  FileUp,
  Palette,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { UserNav } from './user-nav';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from 'react';
import { ThemeToggle } from './theme-toggle';


const practiceComponents: { title: string; href: string; description: string, icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  {
    title: "Flashcards",
    href: "/flashcards",
    description: "Master new words and idioms with interactive flashcards.",
    icon: Layers,
  },
  {
    title: "Cloze Test",
    href: "/cloze-test",
    description: "Fill in the blanks to test your contextual understanding.",
    icon: FileCheck,
  },
  {
    title: "Sentence Reordering",
    href: "/sentence-reordering",
    description: "Arrange jumbled sentences to form coherent paragraphs.",
    icon: Replace,
  },
  {
    title: "Mock Tests",
    href: "/tests",
    description: "Simulate exam conditions with full-length mock tests.",
    icon: FileText
  },
]

const libraryComponents: { title: string; href: string; description: string, icon: React.FC<React.SVGProps<SVGSVGElement>> }[] = [
  {
    title: "Vocabulary",
    href: "/vocabulary",
    description: "Explore a comprehensive library of words and their meanings.",
    icon: BookText
  },
  {
    title: "Idioms & Phrases",
    href: "/idioms",
    description: "Learn and understand common English idioms.",
    icon: Milestone,

  },
  {
    title: "Grammar Rules",
    href: "/grammar",
    description: "Brush up on the essential rules of English grammar.",
    icon: SpellCheck2,
  },
   {
    title: "Documents",
    href: "/documents",
    description: "Access PDF documents and study materials.",
    icon: FileUp,
  },
]

const mobileNavItems = [
  { href: '/dashboard', label: 'Home', icon: Home },
  { href: '/flashcards', label: 'Flashcards', icon: Layers },
  { href: '/progress', label: 'Progress', icon: Trophy },
];

export function MainNav() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <nav className="flex items-center justify-around p-2">
        {mobileNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 rounded-lg p-2 text-xs transition-colors w-16",
              pathname.startsWith(item.href)
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="truncate">{item.label}</span>
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Dashboard
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Practice</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {practiceComponents.map((component) => (
                        <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            icon={component.icon}
                        >
                            {component.description}
                        </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
             <NavigationMenuItem>
                <NavigationMenuTrigger>Library</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {libraryComponents.map((component) => (
                        <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            icon={component.icon}
                        >
                            {component.description}
                        </ListItem>
                        ))}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
             <NavigationMenuItem>
                <Link href="/progress" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Progress
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string, icon: React.FC<React.SVGProps<SVGSVGElement>> }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
            <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-primary" />
                <div className="text-sm font-medium leading-none">{title}</div>
            </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
