"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const divisions = [
  {
    name: "Taima",
    description: "Specializing in premium food products and innovative solutions",
    href: "/divisions/taima",
    bgGradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Rinda",
    description: "Excellence in food manufacturing and distribution",
    href: "/divisions/rinda",
    bgGradient: "from-purple-500 to-purple-600",
  },
  {
    name: "Pure Harvest",
    description: "Sustainable and organic food solutions",
    href: "/divisions/pure-harvest",
    bgGradient: "from-green-500 to-green-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function DivisionsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Divisions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our specialized divisions dedicated to excellence in food manufacturing
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {divisions.map((division, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-32 h-32 mb-6 rounded-lg bg-gradient-to-br ${division.bgGradient} flex items-center justify-center`}>
                      {/* Placeholder for logo */}
                      <div className="text-white text-opacity-20 text-sm">
                        Logo
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{division.name}</h3>
                    <p className="text-muted-foreground mb-6">
                      {division.description}
                    </p>
                    <Button 
                      asChild
                      variant="outline"
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <Link href={division.href}>
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}