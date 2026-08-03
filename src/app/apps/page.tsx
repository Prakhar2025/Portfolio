/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileApp {
  id: string;
  name: string;
  tagline: string;
  category: string;
  rating: string;
  size: string;
  downloads: string;
  lastUpdated: string;
  version: string;
  developer: string;
  accentColor: string;
  logoUrl?: string;
  downloadUrl?: string;
  downloadLabel: string;
  downloadIcon: string;
  shortDesc: string;
  longDesc: string;
  techStack: string[];
  features: { icon: string; title: string; desc: string }[];
  screenshots: string[];
  specs: Record<string, string>;
}

const APPS_DATA: MobileApp[] = [
  {
    id: "kraftorapp",
    name: "Kraftor App",
    tagline: "Agency Portal, Client CRM & Employee Workspace",
    category: "Business & Utility",
    rating: "4.9",
    size: "79.8 MB",
    downloads: "5K+",
    lastUpdated: "July 2026",
    version: "1.2.0",
    developer: "Prakhar",
    accentColor: "from-amber-500 to-orange-600",
    logoUrl: "/apps/app-data/kraftor/app_logo.jpg",
    downloadUrl: "/apps/app-data/kraftor/kraftor.apk",
    downloadLabel: "Download APK File",
    downloadIcon: "download",
    shortDesc: "A multi-role React Native application. Integrates client CRM dashboards, real-time project chats, employee attendance logging, salary checkouts, and admin business metrics.",
    longDesc: "The Kraftor App is a complete React Native (Expo) mobile application that syncs live with the main website's database. It offers role-based access for public users, registered clients, employees, and administrators. It consolidates CRM capabilities, HR logs, salary slips distribution, lead tracking, and client asset vaults into a unified workspace.",
    techStack: ["React Native", "Expo", "PHP Laravel", "MySQL", "WebSockets", "Firebase Cloud Storage"],
    features: [
      {
        icon: "⚡",
        title: "Role-Based Multi-Portal",
        desc: "Custom gateways for Public users, Authenticated Clients, Employees, and Administrators within a single mobile app."
      },
      {
        icon: "💼",
        title: "Client CRM & Billing",
        desc: "Clients can monitor ongoing projects, accept/decline quotations, view detailed invoices, and book virtual meetings."
      },
      {
        icon: "🕒",
        title: "Employee HR Workspace",
        desc: "Employees clock in/out with geolocation tracking, submit leaves, check off assigned tasks, and download detailed salary payslips."
      },
      {
        icon: "📊",
        title: "Admin Executive Dashboard",
        desc: "Business owners can view revenue metrics, manage accounts, distribute payroll, review AI chatbot leads, and upload files to client vaults."
      }
    ],
    screenshots: [
      "/apps/app-data/kraftor/kraftor-screen-shot-1.jpg",
      "/apps/app-data/kraftor/kraftor-screen-shot-2.jpg",
      "/apps/app-data/kraftor/kraftor-screen-shot-3.jpg",
      "/apps/app-data/kraftor/kraftor-screen-shot-4.jpg",
      "/apps/app-data/kraftor/kraftor-screen-shot-5.jpg",
      "/apps/app-data/kraftor/kraftor-screen-shot-6.jpg",
      "/apps/app-data/kraftor/kraftor-screen-shot-7.jpg",
      "/apps/app-data/kraftor/kraftor-screen-shot-8.jpg"
    ],
    specs: {
      "Operating System": "Android (APK Available)",
      "Sync Mode": "Live Database Sync",
      "Backend Framework": "PHP Laravel Core API",
      "Features Integrations": "Push Announcements & HR Ledger"
    }
  },
  {
    id: "ustad",
    name: "Ustad",
    tagline: "Razorpay-Integrated Course Selling App",
    category: "Education",
    rating: "4.8",
    size: "30.4 MB",
    downloads: "50K+",
    lastUpdated: "July 2026",
    version: "3.2.1",
    developer: "Prakhar",
    accentColor: "from-sky-400 to-blue-600",
    logoUrl: "/apps/app-data/ustad/logo_appustad.jpeg",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.ustad.app",
    downloadLabel: "Get on Play Store",
    downloadIcon: "play_store",
    shortDesc: "A feature-rich e-learning platform built for Tassawar Khan Academy. Includes Firebase student authentication, Razorpay payment triggers, embedded video lessons, and PDF note downloaders.",
    longDesc: "Ustad is an educational mobile application tailored for course distribution. It allows students to sign up, explore catalogs, enroll in courses securely using Razorpay, watch video lectures, and download study notes. Administrators have full course curation models, manual payment approvals, and client ticket resolvers built-in.",
    techStack: ["React Native", "Expo", "Redux Toolkit", "Node.js", "Express", "Firebase", "Razorpay"],
    features: [
      {
        icon: "🎓",
        title: "Course Catalog & Previews",
        desc: "Browse categorized courses, read course overviews, and watch designated 'Free Preview' lessons before purchasing."
      },
      {
        icon: "💳",
        title: "Razorpay Checkout Gateway",
        desc: "Seamless, secure in-app payments to enroll in premium courses, with support for manual payment slips approval by admins."
      },
      {
        icon: "🎬",
        title: "Video Learning Studio",
        desc: "Watch lessons directly inside the app with YouTube-embedded players and fetch notes (PDF/docs) linked to specific lessons."
      },
      {
        icon: "🛠️",
        title: "Admin CMS & CRM Desks",
        desc: "Admins create courses, coordinate lessons, toggle free previews, manage registered users, and resolve customer support tickets."
      }
    ],
    screenshots: [
      "/apps/app-data/ustad/ustad-screen-shot-1.jpg",
      "/apps/app-data/ustad/ustad-screen-shot-2.jpg",
      "/apps/app-data/ustad/ustad-screen-shot-3.jpg",
      "/apps/app-data/ustad/ustad-screen-shot-4.jpg",
      "/apps/app-data/ustad/ustad-screen-shot-5.jpeg",
      "/apps/app-data/ustad/ustad-screen-shot-6.jpg",
      "/apps/app-data/ustad/ustad-screen-shot-7.jpg",
      "/apps/app-data/ustad/ustad-screen-shot-8.jpg"
    ],
    specs: {
      "Operating System": "Android (Play Store Active)",
      "Academy Affiliate": "Tassawar Khan Academy",
      "Payment Gateway": "Razorpay In-App Billing",
      "State Handler": "Redux Toolkit Store",
      "Database Layer": "Firebase Firestore Cloud",
      "Video Stream": "YouTube API Integration"
    }
  },
  {
    id: "cloudkitchen",
    name: "Cloud Kitchen",
    tagline: "Dynamic Food Delivery & Restaurant Platform",
    category: "Food & Drink",
    rating: "4.8",
    size: "25.4 MB",
    downloads: "10K+",
    lastUpdated: "July 2026",
    version: "1.0.4",
    developer: "Prakhar",
    accentColor: "from-red-500 to-rose-700",
    downloadUrl: "https://expo.dev/accounts/kraftor/projects/cloud-kitchen-app/builds/9c591c38-e993-42a6-96d5-2c05a6315de5",
    downloadLabel: "Download Expo Build",
    downloadIcon: "download",
    shortDesc: "An end-to-end restaurant ecosystem combining customer ordering apps (Veg/Non-Veg toggles, live COD checkout, status tracker), delivery partner modules, and Laravel admin dashboards.",
    longDesc: "Cloud Kitchen is a fully integrated, multi-app catering ecosystem. It bridges the gap between hungry customers, delivery personnel, and restaurant operators. The platform handles menus, order routing, real-time location streaming, promotional banners scheduling, and monthly revenue analytics securely.",
    techStack: ["React Native", "Expo", "PHP Laravel Backend", "MySQL", "Expo Push Notifications"],
    features: [
      {
        icon: "🍔",
        title: "Customer Mobile Ordering",
        desc: "Guest mode browsing, dietary filters (Veg / Non-Veg toggle), food categories, cart editor, and Cash on Delivery (COD) order placement."
      },
      {
        icon: "📍",
        title: "Live Order Status Tracking",
        desc: "Real-time updates on orders (Pending, Cooking, Out for Delivery), including invoice generation, history, and push notifications."
      },
      {
        icon: "🛵",
        title: "Delivery Partner Client",
        desc: "A dedicated mobile app for delivery agents to accept tasks, update delivery progress, and stream live coordinate location vectors."
      },
      {
        icon: "📈",
        title: "Laravel Admin Dashboard",
        desc: "Web panel to view incoming orders, assign them to partners, manage menus (CRUD), upload festival banners, and download PDF sales reports."
      }
    ],
    screenshots: [
      "/apps/app-data/cloud-kitchen/cloud-screen-shot-1.jpeg",
      "/apps/app-data/cloud-kitchen/cloud-screen-shot-2.jpg",
      "/apps/app-data/cloud-kitchen/cloud-screen-shot-3.jpg",
      "/apps/app-data/cloud-kitchen/cloud-screen-shot-4.jpg",
      "/apps/app-data/cloud-kitchen/cloud-screen-shot-5.jpg",
      "/apps/app-data/cloud-kitchen/cloud-screen-shot-6.jpg",
      "/apps/app-data/cloud-kitchen/cloud-screen-shot-7.jpg",
      "/apps/app-data/cloud-kitchen/cloud-screen-shot-8.jpg"
    ],
    specs: {
      "Operating System": "Android & iOS Clients",
      "Backend Service": "PHP Laravel Framework",
      "Database Core": "MySQL Database Server",
      "Payment Support": "Cash On Delivery (COD)",
      "Partner App": "React Native Delivery App",
      "Push Channels": "Expo Notifications Hub"
    }
  }
];

export default function AppsPage() {
  const [selectedApp, setSelectedApp] = useState<MobileApp>(APPS_DATA[0]);
  const [activeTab, setActiveTab] = useState<'screenshots' | 'features' | 'specs'>('screenshots');
  const [activeScreenshot, setActiveScreenshot] = useState<number>(0);

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-violet-500 selection:text-white">
      {/* Background Glow Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/80 border-b border-white/10 px-4 lg:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/#work"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-xs font-medium text-white/70 hover:text-white transition-all"
          >
            ← Back to Portfolio
          </Link>
          <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
          <div>
            <h1 className="text-base font-semibold tracking-tight text-white flex items-center gap-2">
              Mobile Applications Suite
            </h1>
            <p className="text-xs text-white/50">Built & Developed by Prakhar</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-block text-xs px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-medium">
            3 Production Mobile Apps
          </span>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* App Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {APPS_DATA.map((app) => {
            const isSelected = selectedApp.id === app.id;
            return (
              <button
                key={app.id}
                onClick={() => {
                  setSelectedApp(app);
                  setActiveScreenshot(0);
                }}
                className={`relative text-left p-5 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? 'bg-white/10 border-violet-500/50 shadow-lg shadow-violet-500/10 ring-1 ring-violet-500/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  {app.logoUrl ? (
                    <img
                      src={app.logoUrl}
                      alt={app.name}
                      className="w-12 h-12 rounded-xl object-cover border border-white/10 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center font-bold text-lg text-white flex-shrink-0">
                      CK
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-white truncate">{app.name}</h3>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/10 text-white/70">
                        {app.category}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 truncate mt-1">{app.tagline}</p>
                    <div className="flex items-center gap-3 mt-3 text-[11px] text-white/60">
                      <span>⭐ {app.rating}</span>
                      <span>•</span>
                      <span>📦 {app.size}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected App Detailed Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedApp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-900/60 border border-white/10 rounded-3xl p-6 lg:p-8 backdrop-blur-xl"
          >
            {/* Left Column: App Summary & Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {selectedApp.logoUrl ? (
                    <img
                      src={selectedApp.logoUrl}
                      alt={selectedApp.name}
                      className="w-16 h-16 rounded-2xl object-cover border border-white/20 shadow-xl"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center font-bold text-2xl text-white shadow-xl">
                      CK
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                      {selectedApp.name}
                    </h2>
                    <p className="text-xs text-violet-400 font-medium">{selectedApp.tagline}</p>
                  </div>
                </div>

                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {selectedApp.longDesc}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                    Tech Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedApp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specs List */}
                <div className="space-y-2 mb-8 bg-white/5 border border-white/10 rounded-2xl p-4 text-xs">
                  {Object.entries(selectedApp.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-1 border-b border-white/5 last:border-0">
                      <span className="text-white/50">{key}</span>
                      <span className="font-medium text-white/90 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                {selectedApp.downloadUrl ? (
                  <a
                    href={selectedApp.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[180px] flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-violet-600/25"
                  >
                    <span>📥</span>
                    <span>{selectedApp.downloadLabel}</span>
                  </a>
                ) : (
                  <span className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white/60 font-medium text-sm">
                    🔒 Internal Enterprise App
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: Screenshots & Interactive Gallery */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Navigation Bar inside Details */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('screenshots')}
                    className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      activeTab === 'screenshots'
                        ? 'bg-white/15 text-white'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    Screenshots ({selectedApp.screenshots.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('features')}
                    className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      activeTab === 'features'
                        ? 'bg-white/15 text-white'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    Key Features
                  </button>
                </div>
              </div>

              {/* Tab 1: Screenshots */}
              {activeTab === 'screenshots' && (
                <div className="space-y-6">
                  {/* Featured Mobile Phone Device Frame */}
                  <div className="relative mx-auto w-[230px] sm:w-[250px] h-[470px] sm:h-[510px] bg-black border-[9px] border-slate-800 rounded-[38px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-white/20 flex flex-col items-center">
                    {/* Dynamic Island / Camera Notch */}
                    <div className="absolute top-2 w-20 h-4 bg-slate-900 rounded-full z-20 flex items-center justify-center border border-white/10 shadow-inner">
                      <div className="w-2.5 h-2.5 rounded-full bg-black/80 mr-2 border border-white/10"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-900/60"></div>
                    </div>

                    {/* Screen Content */}
                    <div className="w-full h-full pt-1 pb-1 px-0.5 bg-black overflow-hidden flex items-center justify-center">
                      <img
                        src={selectedApp.screenshots[activeScreenshot]}
                        alt={`${selectedApp.name} screenshot ${activeScreenshot + 1}`}
                        className="w-full h-full object-cover object-top rounded-[28px]"
                      />
                    </div>

                    {/* Bottom Home Indicator Bar */}
                    <div className="absolute bottom-1.5 w-24 h-1 bg-white/40 rounded-full z-20"></div>
                  </div>

                  {/* Horizontal Scrollable Row of Phone Mockup Cards */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                      All App Screens ({selectedApp.screenshots.length})
                    </h4>
                    <div className="flex gap-3 overflow-x-auto pb-3 pt-1 px-1 scrollbar-thin scrollbar-thumb-white/20">
                      {selectedApp.screenshots.map((screen, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveScreenshot(idx)}
                          className={`relative flex-shrink-0 w-[125px] h-[255px] bg-black border-[4px] rounded-[20px] overflow-hidden shadow-lg transition-all duration-300 ${
                            activeScreenshot === idx
                              ? 'border-violet-500 ring-2 ring-violet-500/60 scale-105 shadow-violet-500/30'
                              : 'border-slate-800 opacity-60 hover:opacity-100 hover:scale-[1.02]'
                          }`}
                        >
                          {/* Mini Camera Notch */}
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-slate-900 rounded-full z-20"></div>

                          {/* Screen Image */}
                          <img
                            src={screen}
                            alt={`Mockup screen ${idx + 1}`}
                            className="w-full h-full object-cover object-top rounded-[14px]"
                          />

                          {/* Mini Home Bar */}
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-white/30 rounded-full z-20"></div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Key Features */}
              {activeTab === 'features' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedApp.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-start"
                    >
                      <div className="text-2xl mb-2">{feature.icon}</div>
                      <h4 className="font-semibold text-sm text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
