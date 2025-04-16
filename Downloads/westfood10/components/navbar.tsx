"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "./theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const productItems = [
  { title: "Margarine", href: "/products/margarine" },
  { title: "Yeast", href: "/products/yeast" },
  { title: "Vegetable Oil", href: "/products/vegetable-oil" },
  { title: "Candy", href: "/products/candy" },
  { title: "Wafers", href: "/products/wafers" },
];

const divisionItems = [
  { title: "Taima", href: "/divisions/taima" },
  { title: "Rinda", href: "/divisions/rinda" },
  { title: "Pure Harvest", href: "/divisions/pure-harvest" },
];

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  return (
    <div className="border-b bg-white dark:bg-gray-950 sticky top-0 z-50">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-green-600 dark:text-green-400">
            WESTFOOD
          </span>
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('about')}
                className={cn(navigationMenuTriggerStyle(), "cursor-pointer")}
              >
                About Us
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {productItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Divisions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {divisionItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/careers" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Careers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu and Theme Toggle */}
        <div className="flex items-center gap-2 ml-auto">
          <ThemeToggle />
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  <Link href="/" className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">
                    WESTFOOD
                  </Link>
                  <Link href="/" className="block py-2 hover:text-green-600">
                    Home
                  </Link>
                  <button
                    onClick={() => {
                      scrollToSection('about');
                      document.querySelector('[data-radix-collection-item]')?.click(); // Close sheet
                    }}
                    className="block py-2 hover:text-green-600 text-left"
                  >
                    About Us
                  </button>
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full py-2 hover:text-green-600">
                      <span>Products</span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-2">
                      {productItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-1 hover:text-green-600"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full py-2 hover:text-green-600">
                      <span>Divisions</span>
                      <ChevronDown className="h-4 w-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-4 space-y-2">
                      {divisionItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-1 hover:text-green-600"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                  <Link href="/careers" className="block py-2 hover:text-green-600">
                    Careers
                  </Link>
                  <Link href="/contact" className="block py-2 hover:text-green-600">
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";