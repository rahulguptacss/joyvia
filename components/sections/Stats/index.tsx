'use client';

import React from 'react';
import { Users, Activity, Zap, Headset } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatsSectionData } from '../../types';

interface StatsProps {
  data: StatsSectionData;
}

export default function Stats({ data }: StatsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-6 h-6 text-[#f05423]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#f05423]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#f05423]" />;
      case 'Headset':
        return <Headset className="w-6 h-6 text-[#f05423]" />;
      default:
        return <Zap className="w-6 h-6 text-[#f05423]" />;
    }
  };

  return (
    <section className="py-6 sm:py-8 bg-gradient-to-r from-orange-50/60 via-white to-orange-50/60 border-y border-orange-100/70">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {data.items?.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-3.5 sm:gap-4 justify-center md:justify-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-orange-100 flex items-center justify-center shrink-0">
                {getIcon(item.icon)}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
                  {item.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-500">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
