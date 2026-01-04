// Fix: Added React import to resolve "Cannot find namespace 'React'" error when using React.ReactNode
import React from 'react';

export interface StatItem {
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface ProjectImpact {
  region: string;
  coordinates: [number, number];
  routes: number;
  riskLevel: 'High' | 'Medium' | 'Low';
}
