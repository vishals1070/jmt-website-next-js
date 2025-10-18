"use client";

import React, { useState, useEffect } from 'react';

// --- ICONS (using inline SVG for simplicity in a single file) ---
const TruckIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 18H3c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v9" /><path d="M14 9h4l4 4v5h-2" /><circle cx="7" cy="18" r="2" /><path d="M9 18h6" /><circle cx="18" cy="18" r="2" />
  </svg>
);
const MenuIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
);
const XIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
);
const UsersIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const MapPinIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
const StarIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);
const ContainerIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12H2"/><path d="M2 12v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5"/><path d="M2 12V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="M12 2v20"/></svg>
);
const PackageIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 9.4a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
);
const WarehouseIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.18 6.5l8-4.21a2 2 0 0 1 1.64 0l8 4.21A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/></svg>
);
const SettingsIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2.1l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l-.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2.1l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);
const ArrowRightIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const PhoneIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const MailIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const FacebookIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4-.6-2.8-.9c-1.2 2.2-2.8 4-4.2 4.6-2.5.8-5.7-1.2-5.7-1.2s-2.8.2-4.2-2.2c-1.4-2.4-2.8-5-2.8-5s.7.2 1.4.2c.7 0 1.4-.2 1.4-.2s-2.8-.2-4.2-3.4c0 0-2.1 6.8 5.7 10.2 0 0 .7-3.4 4.2-3.4s4.2 2.2 4.2 2.2-2.1-1.4-2.8-3.4.7-2.2 2.1-2.2H22z"/></svg>
);
const LinkedinIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const EyeIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>;
const TargetIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const HeartIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const AwardIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
const CheckIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
// Adding CheckCircle for detailed feature lists as requested in prompt
const CheckCircleIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const IndustryIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 22H2"/><path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"/><path d="M10 10h4"/><path d="M10 16h4"/><path d="M10 22v-6"/><path d="M14 22v-6"/></svg>;
const LeafIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6c-2 3-4 5-6 7s-4 2-6 2-4-1-6-3"/><path d="M14 12c4 4 6 6 8 8"/><path d="M12 14c-4-4-6-6-8-8"/></svg>;
const ShieldIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const BoxesIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
);
const ImageIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
);
const CalculatorIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><line x1="16" y1="10" x2="12" y2="10"/><line x1="12" y1="10" x2="12" y2="14"/><line x1="12" y1="18" x2="8" y2="18"/><line x1="8" y1="18" x2="8" y2="14"/><line x1="8" y1="10" x2="8" y2="6"/></svg>
);
const ClockIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const CogIcon = ({ className }) => <SettingsIcon className={className} />; // Alias for SettingsIcon as used in the prompt

// --- CONTENT & DATA ---
const navLinks = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About Us' },
  { href: 'services', label: 'Services' },
  { href: 'industries', label: 'Industries' },
  { href: 'gallery', label: 'Gallery' },
  { href: 'contact', label: 'Contact' },
];

const stats = [
  { icon: UsersIcon, number: "500+", label: "Happy Clients" },
  { icon: TruckIcon, number: "30+", label: "Fleet Vehicles" },
  { icon: MapPinIcon, number: "25+", label: "Cities Covered" },
  { icon: StarIcon, number: "99%", label: "On-Time Delivery" }
];

const homeServices = [
  { icon: TruckIcon, title: "Road Transport", description: "Pan-India coverage for fast delivery.", features: ["24/7 Operations", "GPS Tracking", "Insured Cargo"], color: "from-blue-500 to-blue-600" },
  { icon: ContainerIcon, title: "Container Transport", description: "Secure cargo handling for bulk shipments.", features: ["Full Container Load", "Less Container Load", "Door-to-Door"], color: "from-orange-500 to-red-500" },
  { icon: PackageIcon, title: "Specialized Goods", description: "Perishable, fragile & hazardous goods handling.", features: ["Temperature Control", "Fragile Handling", "Hazmat Certified"], color: "from-green-500 to-emerald-600" },
  { icon: WarehouseIcon, title: "Warehousing & Packaging", description: "Reliable storage and safe packaging solutions.", features: ["Climate Control", "Security Systems", "Inventory Management"], color: "from-purple-500 to-indigo-600" },
  { icon: MapPinIcon, title: "Real-time Tracking", description: "Advanced GPS for real-time monitoring.", features: ["Live Location", "SMS Updates", "Delivery Proof"], color: "from-cyan-500 to-blue-500" },
  { icon: SettingsIcon, title: "Custom Solutions", description: "Tailored logistics for industry requirements.", features: ["Industry Specific", "Flexible Terms", "Dedicated Support"], color: "from-pink-500 to-rose-600" }
];

const testimonials = [
  { name: "Rajesh Kumar", company: "ABC Manufacturing", text: "JMT has been our trusted logistics partner for over 3 years. Their reliability and professionalism are unmatched." },
  { name: "Priya Sharma", company: "XYZ Pharmaceuticals", text: "Excellent service for our temperature-sensitive shipments. Always on time and goods arrive in perfect condition." },
  { name: "Amit Patel", company: "Global Exports Ltd", text: "Their container transport service has streamlined our export operations. Highly recommended!" }
];

const aboutValues = [
  { icon: TargetIcon, title: "Reliability", description: "We deliver on our promises with consistent, dependable service that our clients can count on." },
  { icon: HeartIcon, title: "Customer Focus", description: "Our clients' success is our priority. We tailor solutions to meet specific business needs." },
  { icon: AwardIcon, title: "Quality", description: "We maintain the highest standards in all aspects of our operations and service delivery." }
];

const leadershipTeam = [
  { name: "Mr. Punde", position: "Founder & CEO", description: "20+ years in logistics industry, leading JMT's vision and strategic growth." },
  { name: "Mr. Nilesh Punde", position: "Operations Director", description: "Expert in fleet management and operational excellence with 15+ years experience." },
  { name: "Mr. Darshan Punde", position: "Customer Relations Head", description: "Ensuring exceptional customer service and building lasting client relationships." }
];

const allServices = [
  { icon: TruckIcon, title: "Road Transport", description: "Comprehensive road transport solutions across India with our modern fleet of trucks and experienced drivers.", features: ["Full Truck Load (FTL) and Less Than Truck Load (LTL)", "Inter-state and intra-state transport", "24/7 customer support and tracking", "Insurance coverage for all shipments"] },
  { icon: BoxesIcon, title: "Container Transport", description: "Secure container transportation for import/export and domestic cargo movement with specialized handling.", features: ["20ft and 40ft container handling", "Port to door and door to port services", "Custom clearance assistance", "Temperature-controlled containers available"] },
  { icon: PackageIcon, title: "Specialized Goods Transport", description: "Expert handling of perishable, fragile, and hazardous materials with specialized equipment and trained staff.", features: ["Temperature-controlled transport for perishables", "Fragile goods handling with extra care", "Hazardous materials transport (certified)", "Oversized cargo transportation"] },
  { icon: WarehouseIcon, title: "Warehousing & Storage", description: "Modern warehousing facilities with comprehensive storage, packaging, and inventory management services.", features: ["Climate Control", "Security Systems", "Inventory Management"], color: "from-purple-500 to-indigo-600" },
  { icon: MapPinIcon, title: "Real-time Tracking", description: "Advanced GPS tracking system providing real-time shipment monitoring and regular updates to customers.", features: ["Live GPS tracking of vehicles", "SMS and email notifications", "Online tracking portal", "Delivery confirmation with POD"] },
  { icon: SettingsIcon, title: "Custom Logistics Solutions", description: "Tailored logistics solutions designed to meet specific industry requirements and unique business needs.", features: ["Supply chain consulting", "Route optimization", "Dedicated fleet services", "Project cargo handling"] }
];

// Data for the detailed IndustriesPage (Keep)
const industriesDataNew = [
    { icon: IndustryIcon, title: 'Manufacturing', description: 'Raw materials and finished goods transport' },
    { icon: LeafIcon, title: 'Agriculture', description: 'Fresh produce and agricultural products' },
    { icon: ShieldIcon, title: 'Pharmaceuticals', description: 'Temperature-sensitive medical supplies' },
    { icon: BoxesIcon, title: 'FMCG', description: 'Fast-moving consumer goods distribution' },
    { icon: TruckIcon, title: 'Automotive', description: 'Auto parts and vehicle transportation' },
    { icon: CogIcon, title: 'Industrial', description: 'Heavy machinery and equipment' }
];

// Simplified data structure for HomePage (Revert)
const industriesDataSimple = [
  { icon: IndustryIcon, name: "Manufacturing" },
  { icon: LeafIcon, name: "Agriculture" },
  { icon: ShieldIcon, name: "Pharmaceuticals" },
  { icon: BoxesIcon, name: "FMCG" },
  { icon: TruckIcon, name: "Automotive" },
  { icon: CogIcon, name: "Industrial" }
];


const galleryItems = [
  { title: 'Fleet Road Transport', url: 'https://images.unsplash.com/photo-1574889608246-8618a8b1397b?q=80&w=1600&auto=format&fit=crop', ratio: 1.2 }, // Wide
  { title: 'Warehouse Interior', url: 'https://images.unsplash.com/photo-1563820227914-7e8c352f75d1?q=80&w=1200&auto=format&fit=crop', ratio: 1 }, // Square
  { title: 'Loading Bay Operations', url: 'https://images.unsplash.com/photo-1550745165-9bc0bfe74585?q=80&w=1200&auto=format&fit=crop', ratio: 1.5 }, // Extra Wide
  { title: 'Container Yard Logistics', url: 'https://images.unsplash.com/photo-1549463283-6df7d2a7c493?q=80&w=1200&auto=format&fit=crop', ratio: 0.8 }, // Tall
  { title: 'Vehicle Maintenance Check', url: 'https://images.unsplash.com/photo-1588698501257-22f3e098485f?q=80&w=1200&auto=format&fit=crop', ratio: 1.3 }, // Wide
  { title: 'Driver Safety Training', url: 'https://images.unsplash.com/photo-1586230678248-18e0018f760e?q=80&w=1200&auto=format&fit=crop', ratio: 1 }, // Square
  { title: 'Packaging Process', url: 'https://images.unsplash.com/photo-1587391942006-25f0e137149d?q=80&w=1200&auto=format&fit=crop', ratio: 0.9 }, // Slightly Tall
  { title: 'Night Transport', url: 'https://images.unsplash.com/photo-1544837567-c1044458f3c7?q=80&w=1200&auto=format&fit=crop', ratio: 1.4 }, // Extra Wide
];

const processSteps = [
  { number: "1", title: "Book Your Shipment", description: "Contact us via phone, email, or online form to book your transport service." },
  { number: "2", title: "Pickup Scheduling", description: "We schedule pickup at your convenience and assign the appropriate vehicle." },
  { number: "3", title: "Safe Transit", description: "Your goods are transported safely with real-time tracking and regular updates." },
  { number: "4", title: "Timely Delivery", description: "On-time delivery with proof of delivery and customer satisfaction confirmation." }
];

// --- SHARED COMPONENTS ---

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const TopBar = () => (
    <div className="bg-[#0f172a] text-white py-2 px-4 text-xs hidden sm:block">
        <div className="container mx-auto flex justify-between items-center max-w-[1200px]">
            <div className="flex items-center gap-4">
                <a href="tel:+919876543210" className="flex items-center gap-1.5 hover:text-[#fb923c] transition-colors">
                    <PhoneIcon className="w-3.5 h-3.5" />
                    +91 8655294908
                </a>
                <a href="mailto:info@jmttransport.com" className="flex items-center gap-1.5 hover:text-[#fb923c] transition-colors">
                    <MailIcon className="w-3.5 h-3.5" />
                    info@jmttransport.com
                </a>
            </div>
            <div>24/7 Support Available</div>
        </div>
    </div>
  );

  return (
    <>
      <TopBar />
      <header className={`sticky top-0 z-[1000] transition-all duration-300 ${isScrolled ? 'h-[72px] shadow-lg bg-white/95 backdrop-blur-[20px] border-b border-gray-300' : 'h-[80px] bg-white/95 backdrop-blur-[20px] border-b border-gray-200'}`}>
        <div className="container mx-auto px-5 md:px-8 lg:px-10 h-full max-w-[1200px]">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a onClick={() => handleNavClick('home')} className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                  <TruckIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-extrabold text-[#0f172a] tracking-tight">
                Jai Malhar <span className="font-bold text-[#f97316]">Transport</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-3 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    currentPage === link.href
                      ? 'text-[#f97316] bg-orange-500/10'
                      : 'text-slate-600 hover:text-[#f97316] hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:flex items-center">
                 <a
                    onClick={() => handleNavClick('quote')}
                    className="ml-4 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                    Get Quote
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
                aria-label="Open main menu"
              >
                <div className="w-6 h-4 flex flex-col justify-between items-center">
                    <span className={`block w-full h-0.5 bg-gray-700 transition-transform duration-250 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-gray-700 transition-opacity duration-250 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-gray-700 transition-transform duration-250 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
       {/* Mobile Menu Panel */}
       <div className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-2xl z-[1001] transform transition-transform duration-250 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <div className="p-5 border-b border-gray-200 flex justify-between items-center">
               <a onClick={() => handleNavClick('home')} className="flex items-center gap-2 cursor-pointer">
                  <span className="text-xl font-extrabold text-[#0f172a]">
                    Jai Malhar <span className="font-bold text-[#f97316]">Transport</span>
                  </span>
                </a>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2">
                  <XIcon className="w-6 h-6 text-gray-600"/>
              </button>
          </div>
          <nav className="py-5 px-5 flex flex-col space-y-2">
               {navLinks.map((link) => (
              <a
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors cursor-pointer ${
                  currentPage === link.href
                    ? 'text-[#f97316] bg-orange-500/10'
                    : 'text-slate-700 hover:text-[#f97316] hover:bg-gray-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
           <div className="px-5 pt-5 border-t border-gray-100">
                <a onClick={() => handleNavClick('quote')} className="block w-full text-center px-4 py-3 text-base font-bold text-white bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full shadow-md">
                    Get a Quote
                </a>
           </div>
       </div>
        {/* Backdrop */}
      {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/50 z-[1000] lg:hidden"></div>}
    </>
  );
};

/* ... other components remain the same */
const Footer = ({ setCurrentPage }) => {
    const handleNavClick = (page, scrollToMap = false) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (scrollToMap) {
             setTimeout(() => {
                document.getElementById('find-us-section')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };
    
    return (
        <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300">
            <div className="container mx-auto px-5 md:px-8 lg:px-10 py-16 max-w-[1200px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <a onClick={() => handleNavClick('home')} className="flex items-center gap-3 mb-4 cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center"><TruckIcon className="w-6 h-6 text-white" /></div>
                            <span className="text-xl font-bold text-white">Jai Malhar Transport</span>
                        </a>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                            Reliable, timely, and safe transport solutions across India. Your trusted logistics partner.
                        </p>
                        <div className="flex space-x-3">
                            {/* Social Links (non-functional anchors) */}
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 hover:bg-[#f97316] hover:text-white transition-colors"><FacebookIcon className="h-5 w-5" /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 hover:bg-[#f97316] hover:text-white transition-colors"><TwitterIcon className="h-5 w-5" /></a>
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 hover:bg-[#f97316] hover:text-white transition-colors"><LinkedinIcon className="h-5 w-5" /></a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#f97316] tracking-wider uppercase mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a onClick={() => handleNavClick(link.href)} className="text-sm text-gray-400 hover:text-[#fb923c] transition-colors cursor-pointer">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#f97316] tracking-wider uppercase mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            {/* Make these functional */}
                            <li><a onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-[#fb923c] cursor-pointer transition-colors">Road Transport</a></li>
                            <li><a onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-[#fb923c] cursor-pointer transition-colors">Container Transport</a></li>
                            <li><a onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-[#fb923c] cursor-pointer transition-colors">Specialized Goods</a></li>
                            <li><a onClick={() => handleNavClick('services')} className="text-gray-400 hover:text-[#fb923c] cursor-pointer transition-colors">Warehousing</a></li>
                        </ul>
                    </div>
                    {/* Contact Info (Make lines clickable) */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#f97316] tracking-wider uppercase mb-4">Contact Info</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <PhoneIcon className="h-5 w-5 mr-3 mt-0.5 text-[#fb923c] flex-shrink-0" />
                                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">+91 8655294908</a>
                            </li>
                            <li className="flex items-start">
                                <MailIcon className="h-5 w-5 mr-3 mt-0.5 text-[#fb923c] flex-shrink-0" />
                                <a href="mailto:info@jmttransport.com" className="text-gray-400 hover:text-white transition-colors">info@jmttransport.com</a>
                            </li>
                            <li className="flex items-start">
                                <MapPinIcon className="h-5 w-5 mr-3 mt-0.5 text-[#fb923c] flex-shrink-0" />
                                {/* Changed to use anchor tag with internal scroll handler */}
                                <a 
                                    onClick={(e) => { 
                                        e.preventDefault(); 
                                        handleNavClick('contact', true); // Pass true to scroll to map
                                    }} 
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer block"
                                >
                                    Mumbai, Maharashtra, India
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-4 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-center">
                    <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Jai Malhar Transport. All rights reserved.</p>
                     <div className="flex space-x-4 mt-4 sm:mt-0">
                        {/* Legal Links (functional anchors) */}
                        <a onClick={() => handleNavClick('privacy')} href="#" className="text-xs text-gray-500 hover:text-white">Privacy Policy</a>
                        <a onClick={() => handleNavClick('terms')} href="#" className="text-xs text-gray-500 hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const HomePage = ({ setCurrentPage }) => {
  return (
    <>
      {/* Hero Section - Redesigned according to the new prompt */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background System */}
        <div className="absolute inset-0 z-[1]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(15,23,42,0.85)] to-[rgba(30,41,59,0.75)]"></div>
          <div className="absolute inset-0 hero-pattern z-[2]"></div>
        </div>

        
        <div className="container relative z-10 mx-auto px-5 text-center text-white animate-fadeInUp" style={{ animationFillMode: 'both', animationDelay: '0.5s' }}>
          <div className="hero-content">
            <div className="hero-badge inline-flex items-center justify-center px-5 py-3 mb-6 text-sm font-semibold rounded-full border border-orange-500/30 bg-orange-500/20 text-[#fb923c] backdrop-blur-md animate-bounceIn" style={{ animationFillMode: 'both', animationDelay: '0.8s' }}>
              🚛 Trusted Since 2010
            </div>

            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-6">
              <span className="block animate-slideInLeft" style={{ animationFillMode: 'both', animationDelay: '1.0s' }}>Reliable Transport.</span>
              <span className="title-line-highlight block bg-gradient-to-r from-[#f97316] to-[#fb923c] text-transparent bg-clip-text animate-slideInLeft" style={{ animationFillMode: 'both', animationDelay: '1.2s' }}>Timely Delivery.</span>
              <span className="block animate-slideInLeft" style={{ animationFillMode: 'both', animationDelay: '1.4s' }}>Trusted Nationwide.</span>
            </h1>

            <p className="hero-description max-w-xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed mb-8 animate-fadeIn" style={{ animationFillMode: 'both', animationDelay: '1.2s' }}>
              Jai Malhar Transport (JMT) provides secure and efficient logistics solutions for businesses across India. <strong>Join 500+ satisfied clients</strong> who trust us for their transport needs.
            </p>

            <div className="hero-features flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-full backdrop-blur-md animate-scaleIn" style={{ animationFillMode: 'both', animationDelay: '1.2s' }}>
                <TruckIcon className="w-4 h-4" /> 500+ Happy Clients
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-full backdrop-blur-md animate-scaleIn" style={{ animationFillMode: 'both', animationDelay: '1.4s' }}>
                <ClockIcon className="w-4 h-4" /> 99% On-Time Delivery
              </div>
              <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-full backdrop-blur-md animate-scaleIn" style={{ animationFillMode: 'both', animationDelay: '1.6s' }}>
                <ShieldIcon className="w-4 h-4" /> Fully Insured Transport
              </div>
            </div>

            <div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
              <a onClick={() => setCurrentPage('quote')} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer animate-bounceIn" style={{ animationFillMode: 'both', animationDelay: '1.8s' }}>
                Get Free Quote <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a onClick={() => setCurrentPage('contact')} className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-white/10 border-2 border-white/30 rounded-full backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer animate-bounceIn" style={{ animationFillMode: 'both', animationDelay: '2.0s' }}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-sm font-bold text-[#f97316] tracking-[0.1em] uppercase relative inline-block">
              OUR EXPERTISE
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full"></span>
            </h2>
            <p className="mt-8 text-3xl font-extrabold text-[#0f172a] tracking-tight sm:text-4xl lg:text-5xl max-w-3xl mx-auto" style={{lineHeight: 1.1}}>Integrated Logistics Solutions</p>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-[#475569]">From road transport to specialized cargo handling, we provide comprehensive logistics solutions tailored to your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map(service => (
              <div key={service.title} className="service-card flex flex-col bg-white p-8 sm:p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden border border-gray-200 hover:border-gray-300">
                <div className="flex justify-between items-start mb-8">
                  <div className={`flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl text-white shadow-lg bg-gradient-to-br ${service.color}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                    <CheckIcon className="w-4 h-4 text-green-600"/>
                    Verified
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#0f172a]">{service.title}</h3>
                  <p className="mt-2 text-base text-[#475569] leading-relaxed">{service.description}</p>
                  <div className="my-6 p-4 bg-[#f1f5f9] rounded-lg border-l-4 border-[#f97316]">
                    <ul className="space-y-3">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#475569]">
                          <CheckIcon className="w-4 h-4 text-[#10b981]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a onClick={() => setCurrentPage('services')} className="service-link mt-auto flex items-center justify-between p-3 bg-[#f1f5f9] rounded-xl text-sm font-semibold text-[#f97316] hover:bg-orange-500/10 transition-all duration-200">
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform" />
                </a>
              </div>
            ))}
          </div>
           <div className="services-cta relative text-center mt-16 md:mt-20 max-w-3xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white overflow-hidden">
                <h3 className="text-2xl font-bold">Explore All Our Logistics Capabilities</h3>
                <p className="mt-2 text-white/80">Find the perfect solution for your transportation needs.</p>
                <a onClick={() => setCurrentPage('services')} className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-base font-bold text-white bg-[#f97316] rounded-full shadow-lg hover:bg-[#fb923c] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer z-10 relative">
                    View All Services <ArrowRightIcon className="w-5 h-5"/>
                </a>
           </div>
        </div>
      </section>
      
      <div className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
            <div className="text-center">
                <h2 className="text-sm font-bold text-[#f97316] tracking-[0.1em] uppercase">THE JMT ADVANTAGE</h2>
                <p className="mt-2 text-3xl font-extrabold text-[#0f172a] tracking-tight sm:text-4xl">Why Businesses Trust Us</p>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-[#64748b]">With a proven track record, advanced technology, and a dedicated nationwide network, JMT is the name businesses trust.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl text-white text-center shadow-lg">
                        <stat.icon className="h-8 w-8 mx-auto mb-2 text-[#f97316]" />
                        <p className="text-3xl font-black">{stat.number}</p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/80">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

       <div className="py-16 sm:py-24 bg-[#f8fafc]">
            <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
                <div className="text-center mb-12">
                     <h2 className="text-sm font-bold text-[#f97316] tracking-[0.1em] uppercase">Our Process</h2>
                    <p className="mt-2 text-3xl font-extrabold text-[#0f172a] tracking-tight sm:text-4xl">Simple Steps to Reliable Delivery</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {processSteps.map((step) => (
                        <div key={step.number} className="text-center group">
                            <div className="relative flex items-center justify-center mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white text-3xl font-bold mb-4 shadow-lg transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#f97316] group-hover:to-[#fb923c]">{step.number}</div>
                            <h3 className="text-lg font-bold text-[#0f172a]">{step.title}</h3>
                            <p className="mt-2 text-base text-[#475569]">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Industries Section - SIMPLE HOME PAGE VERSION */}
        <div className="industries-section py-16 sm:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-sm font-semibold text-[#f97316] tracking-[0.1em] uppercase relative inline-block mb-4">
                      SECTORS WE SERVE
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full"></span>
                    </h2>
                    <p className="mt-8 font-extrabold text-[#0f172a] tracking-tight sm:text-4xl max-w-4xl mx-auto" style={{ lineHeight: 1.2, letterSpacing: '-0.025em', fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}>Industry-Specific Logistics Expertise</p>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-[#475569]" style={{ lineHeight: 1.7, fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', marginBottom: '60px' }}>
                        Whatever your industry, JMT has the network, expertise and capacity to deliver your goods securely and efficiently.
                    </p>
                </div>
                
                {/* Simplified Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                    {industriesDataNew.map(industry => (
                         <a key={industry.title} onClick={() => setCurrentPage('industries')} className="p-4 group cursor-pointer hover:bg-[#f8fafc] rounded-xl transition-all">
                             <div className="flex items-center justify-center h-16 w-16 rounded-full mx-auto mb-4 bg-gray-100 group-hover:bg-[#f97316] transition-colors duration-300">
                                <industry.icon className="h-8 w-8 text-[#0f172a] group-hover:text-white transition-colors duration-300"/>
                             </div>
                             <h3 className="font-bold text-base text-[#0f172a] mt-2">{industry.title}</h3>
                         </a>
                    ))}
                </div>

                {/* Simple CTA Link */}
                <div className="text-center mt-12">
                    <a onClick={() => setCurrentPage('industries')} className="inline-flex items-center text-base font-semibold text-[#f97316] hover:text-[#fb923c] cursor-pointer transition-colors">
                        View All Industry Solutions <ArrowRightIcon className="w-5 h-5 ml-2"/>
                    </a>
                </div>
            </div>
        </div>
      
       <div className="bg-[#f8fafc] py-16 sm:py-24 lg:py-32">
         <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
            <div className="section-header text-center mb-12 md:mb-16">
                <h2 className="section-subtitle text-sm font-semibold text-[#f97316] tracking-[0.1em] uppercase relative inline-block mb-4">
                    Trusted Voices
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full"></span>
                </h2>
                <p className="section-title mt-8 font-extrabold text-[#0f172a] tracking-tight sm:text-4xl max-w-4xl mx-auto" style={{ lineHeight: 1.2, letterSpacing: '-0.025em', marginBottom: '80px', fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}>What Our Clients Say</p>
            </div>
            <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="testimonial-card relative bg-white p-10 sm:p-12 rounded-[20px] shadow-sm border border-[#e2e8f0] group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#cbd5e1]">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] to-[#fb923c] testimonial-top-border"></div>
                    
                    <div className="testimonial-quote mb-8">
                        <svg className="quote-icon w-10 h-10 text-[#f97316] opacity-80" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                    </div>

                    <p className="testimonial-text text-lg italic text-[#475569] leading-relaxed mb-8">"{testimonial.text}"</p>

                    <div className="testimonial-author pt-6 border-t border-[#e2e8f0]">
                        <p className="author-name text-base font-bold text-[#0f172a] mb-1">{testimonial.name}</p>
                        <p className="author-company text-sm font-medium text-[#64748b]">{testimonial.company}</p>
                    </div>
                </div>
              ))}
            </div>
         </div>
       </div>

       <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
            <div className="container mx-auto text-center px-5 md:px-8 lg:px-10 py-20 sm:py-24 max-w-[800px]">
                <h2 className="text-4xl font-black text-white sm:text-5xl leading-tight">Ready to Ship with Confidence?</h2>
                <p className="mt-4 text-lg leading-relaxed text-white/80 max-w-xl mx-auto">Get a free, no-obligation quote today and experience the reliability and efficiency of Jai Malhar Transport.</p>
                <div className="mt-8 flex justify-center">
                    <a onClick={() => setCurrentPage('quote')} className="inline-block px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">Get My Free Quote</a>
                </div>
            </div>
        </div>
    </>
  );
};

const AboutPage = () => {
    return (
        <div className="bg-white">
            <div className="bg-[#0f172a] py-20 text-white text-center">
                 <h1 className="text-4xl sm:text-5xl font-black tracking-tight">About JMT</h1>
                 <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Your trusted logistics partner since 2010, committed to excellence and reliability.</p>
            </div>

            {/* Story Section */}
            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-4xl text-center">
                    <h2 className="text-3xl font-extrabold text-[#0f172a] mb-8">Our Story</h2>
                    <div className="space-y-6 text-lg text-[#475569] leading-relaxed">
                        <p>Founded in 2010 by Mr. Punde, Jai Malhar Transport began as a small family business with a single truck and a big dream. Starting from Mumbai, we recognized the growing need for reliable, professional transport services across India.</p>
                        <p>Over the years, we've grown from a local transport service to a pan-India logistics solution provider. Our commitment to timely delivery, cargo safety, and customer satisfaction has earned us the trust of over 500 businesses.</p>
                        <p>Today, JMT operates a modern fleet of 30+ vehicles, serves 25+ cities, and continues to expand our services to meet the evolving needs of Indian businesses.</p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="bg-[#f8fafc] py-16 sm:py-24">
                <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                        <div className="p-8">
                            <EyeIcon className="h-12 w-12 mx-auto mb-4 text-[#0f172a]" />
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Our Vision</h3>
                            <p className="text-[#475569]">To be India's most trusted and innovative logistics partner, connecting businesses across the nation with reliable, efficient, and sustainable transport solutions.</p>
                        </div>
                        <div className="p-8">
                            <TargetIcon className="h-12 w-12 mx-auto mb-4 text-[#f97316]" />
                            <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Our Mission</h3>
                            <p className="text-[#475569]">To provide exceptional transport and logistics services that exceed customer expectations through innovation, reliability, and unwavering commitment to safety and quality.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
                    <h2 className="text-3xl font-extrabold text-[#0f172a] text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {aboutValues.map(value => (
                            <div key={value.title} className="text-center p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <value.icon className="h-12 w-12 mx-auto mb-4 text-[#0f172a]" />
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{value.title}</h3>
                                <p className="text-[#475569]">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-[#f8fafc] py-16 sm:py-24">
                <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
                    <h2 className="text-3xl font-extrabold text-[#0f172a] text-center mb-12">Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {leadershipTeam.map(member => (
                            <div key={member.name} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center text-3xl font-bold mb-4">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <h3 className="text-xl font-bold text-[#0f172a]">{member.name}</h3>
                                <p className="text-[#f97316] font-semibold mb-2">{member.position}</p>
                                <p className="text-[#475569] text-sm">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
/* ... other page components ... */
const ServicesPage = ({ setCurrentPage }) => {
    return (
         <div className="bg-white">
            <div className="bg-[#0f172a] py-20 text-white text-center">
                 <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Our Services</h1>
                 <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">Comprehensive transport and logistics solutions tailored to your business needs, ensuring safety, efficiency, and on-time delivery.</p>
            </div>

            <div className="py-16 sm:py-24">
                <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
                    <div className="space-y-20">
                        {allServices.map((service, index) => (
                            <div key={service.title} className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16`}>
                                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                    <div className="mb-4 flex items-center gap-4">
                                        <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br from-[#f97316] to-[#fb923c] text-white flex items-center justify-center">
                                            <service.icon className="h-7 w-7" />
                                        </div>
                                        <h2 className="text-3xl font-extrabold text-[#0f172a]">{service.title}</h2>
                                    </div>
                                    <p className="text-lg text-[#475569] mb-6">{service.description}</p>
                                    <h3 className="text-lg font-bold text-[#0f172a] mb-3">Key Features:</h3>
                                    <ul className="space-y-3">
                                        {service.features.map(feature => (
                                            <li key={feature} className="flex items-start">
                                                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                                                   <CheckIcon className="h-4 w-4 text-green-600" />
                                                </div>
                                                <span className="text-[#475569]">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                                    <img src={`https://placehold.co/600x400/1e293b/f97316?text=${service.title.replace(' ', '+')}`} alt={service.title} className="rounded-2xl shadow-xl w-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             <div className="bg-[#0f172a]">
                <div className="container mx-auto text-center px-5 md:px-8 lg:px-10 py-20">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Need a Custom Solution?</h2>
                    <p className="mt-4 text-lg leading-6 text-white/70">Contact us to discuss your specific transport and logistics requirements.</p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <a onClick={() => setCurrentPage('quote')} className="px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">Get Custom Quote</a>
                        <a onClick={() => setCurrentPage('contact')} className="px-8 py-3 text-base font-bold text-white bg-white/10 border-2 border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">Discuss Requirements</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const IndustriesPage = () => {
    return (
        <div className="bg-white">
            <div className="bg-[#0f172a] py-20 text-white text-center">
                 <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Industries We Serve</h1>
                 <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">Providing industry-specific logistics expertise to power your business, no matter the sector.</p>
            </div>
            <div className="industries-section py-16 sm:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-sm font-semibold text-[#f97316] tracking-[0.1em] uppercase relative inline-block mb-4">
                      SECTORS WE SERVE
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full"></span>
                    </h2>
                    <p className="mt-8 font-extrabold text-[#0f172a] tracking-tight sm:text-4xl max-w-4xl mx-auto" style={{ lineHeight: 1.2, letterSpacing: '-0.025em', fontSize: 'clamp(2.25rem, 4vw, 3rem)' }}>Industry-Specific Logistics Expertise</p>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-[#475569]" style={{ lineHeight: 1.7, fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', marginBottom: '80px' }}>
                        Whatever your industry, JMT has the network, expertise and capacity to deliver your goods securely and efficiently.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
                    {industriesDataNew.map(industry => (
                        <div key={industry.title} className="industry-card relative bg-white p-8 sm:p-10 rounded-[20px] shadow-sm border border-[#e2e8f0] text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-[#cbd5e1]">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] to-[#fb923c] industry-top-border"></div>
                            <industry.icon className="w-12 h-12 text-[#f97316] mx-auto mb-6 transition-colors duration-300" style={{ fontSize: '48px' }} />
                            <h3 className="font-bold text-[#0f172a] mb-3 leading-tight" style={{ fontSize: 'clamp(20px, 2.5vw, 22px)' }}>{industry.title}</h3>
                            <p className="text-base text-[#475569] leading-relaxed" style={{ fontSize: 'clamp(15px, 1.5vw, 16px)' }}>{industry.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Box */}
                <div className="cta-box max-w-2xl mx-auto p-10 md:p-12 mt-20 rounded-2xl text-center bg-gradient-to-r from-[#dbeafe] to-[#bfdbfe] border-l-[6px] border-[#3b82f6]">
                    <h3 className="text-2xl font-extrabold text-[#0f172a] mb-3" style={{ fontSize: '28px'}}>Need a Custom Solution?</h3>
                    <p className="text-lg text-[#475569]">
                        If your sector isn't listed, <a onClick={() => setCurrentPage('contact')} className="text-[#f97316] font-bold hover:underline cursor-pointer">contact us</a> to discuss tailor-made logistics plans.
                    </p>
                </div>

            </div>
        </div>
        </div>
    );
};

const GalleryPage = () => {
    // Generate placeholder URLs for a staggered/masonry look
    const staggeredItems = galleryItems.map((item, index) => ({
        ...item,
        // Calculate grid span rows based on ratio for masonry effect
        // We use a row height unit of 10px, so item height / 10px
        span: Math.max(20, Math.round(150 * item.ratio)),
    }));

    return (
        <div className="bg-white">
            <div className="bg-[#0f172a] py-20 text-white text-center">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Our Gallery</h1>
                <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">A glimpse into our operations, state-of-the-art fleet, and dedicated team in action. </p>
            </div>
            
            <div className="py-16 sm:py-24 lg:py-32">
                <div className="container mx-auto px-5 md:px-8 lg:px-10 max-w-[1200px]">
                    <h2 className="text-3xl font-extrabold text-[#0f172a] text-center mb-12">Visualizing Reliability</h2>
                    
                    {/* Masonry/Staggered Grid Layout */}
                    <div className="masonry-grid">
                        {staggeredItems.map((item, index) => (
                            <div 
                                key={index} 
                                className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg bg-gray-100 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                                // The magic formula: grid-row-end: span [height] / [row unit]
                                style={{ gridRowEnd: `span ${item.span}` }} 
                            >
                                
                                {/* Image with object-fit: cover for aspect ratio handling */}
                                <img 
                                    src={item.url} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                />

                                {/* Overlay Caption */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-lg font-semibold tracking-wide border-l-2 border-[#f97316] pl-3">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


const ContactPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            e.target.reset();
        }, 5000);
    };

    const googleMapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15099.98595507743!2d72.84651336044738!3d19.10260401784902!2m3!1f0!2f0!1f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9197c73b067%3A0x6291a13e51240c57!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700684176465!5m2!1sen!2sin";

    return (
        <div className="bg-white">
            <div className="bg-[#0f172a] py-20 text-white text-center">
                 <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Contact Us</h1>
                 <p className="mt-4 text-lg text-white/80">We're here to help with your logistics needs.</p>
            </div>
             <div className="container mx-auto px-5 md:px-8 lg:px-10 py-16 max-w-[1200px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                     <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6 text-[#0f172a]">Send us a Message</h2>
                        {formSubmitted && (
                          <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-md">
                              <p className="font-bold">Message Sent Successfully!</p>
                              <p>Thank you for contacting us. We will get back to you shortly.</p>
                          </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="text" name="name" placeholder="Full Name *" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316] transition" />
                                <input type="tel" name="phone" placeholder="Phone Number *" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316] transition" />
                            </div>
                            <input type="email" name="email" placeholder="Email Address *" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316] transition" />
                            <input type="text" name="subject" placeholder="Subject" className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316] transition" />
                            <textarea name="message" placeholder="Your Message *" rows="5" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316] transition"></textarea>
                            <button type="submit" className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full hover:shadow-lg transition transform hover:-translate-y-0.5">Send Message</button>
                        </form>
                     </div>
                     <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold mb-6 text-[#0f172a]">Get In Touch</h2>
                         <div className="space-y-6 text-[#475569]">
                             <div className="flex items-start">
                                 <PhoneIcon className="w-6 h-6 mr-4 mt-1 text-[#f97316] flex-shrink-0" />
                                 <div>
                                     <h4 className="font-bold text-[#0f172a]">Phone</h4>
                                     <a href="tel:+919876543210" className="text-gray-400 hover:text-[#f97316] transition-colors">+91 8655294908</a>
                                     <a href="tel:+918765432109" className="text-gray-400 hover:text-[#f97316] transition-colors block">+91 87654 32109</a>
                                 </div>
                             </div>
                             <li className="flex items-start">
                                 <MailIcon className="w-6 h-6 mr-4 mt-1 text-[#f97316] flex-shrink-0" />
                                  <div>
                                     <h4 className="font-bold text-[#0f172a]">Email</h4>
                                     <a href="mailto:info@jmttransport.com" className="text-gray-400 hover:text-[#f97316] transition-colors block">info@jmttransport.com</a>
                                     <a href="mailto:quotes@jmttransport.com" className="text-gray-400 hover:text-[#f97316] transition-colors block">quotes@jmttransport.com</a>
                                 </div>
                             </li>
                             <li className="flex items-start">
                                 <MapPinIcon className="w-6 h-6 mr-4 mt-1 text-[#f97316] flex-shrink-0" />
                                 <div>
                                     <h4 className="font-bold text-[#0f172a]">Head Office</h4>
                                     <a href="#find-us" onClick={(e) => { e.preventDefault(); document.getElementById('find-us-section')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-gray-400 hover:text-[#f97316] transition-colors cursor-pointer block">123 Transport Hub, Andheri East, Mumbai, Maharashtra 400069</a>
                                 </div>
                            </li>
                         </div>
                    </div>
                </div>
                
                {/* Find Us Section - Google Map */}
                <div id="find-us-section" className="mt-20">
                    <h2 className="text-3xl font-extrabold text-[#0f172a] text-center mb-8">Find Us</h2>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl border-2 border-gray-200" style={{ height: '500px' }}>
                        <iframe 
                            src={googleMapEmbedUrl}
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map Location of Jai Malhar Transport Head Office"
                        ></iframe>
                    </div>
                </div>
             </div>
        </div>
    );
};

const QuotePage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            e.target.reset();
        }, 5000);
    };

    return (
        <div className="bg-white">
             <div className="bg-[#0f172a] py-20 text-white text-center">
                 <CalculatorIcon className="h-12 w-12 mx-auto mb-4 text-[#f97316]" />
                 <h1 className="text-4xl sm:text-5xl font-black tracking-tight">Get a Free Quote</h1>
                 <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">Fill out the form below and our logistics experts will provide a customized quote within 2 business hours.</p>
            </div>
            <div className="container mx-auto px-5 md:px-8 lg:px-10 py-16 max-w-4xl">
                 {formSubmitted && (
                      <div className="mb-8 p-4 bg-green-100 border-l-4 border-green-500 text-green-800 rounded-md">
                          <p className="font-bold">Quote Request Received!</p>
                          <p>Thank you! Our team will contact you within 2 business hours with a detailed quotation.</p>
                      </div>
                 )}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Contact Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <input type="text" name="name" placeholder="Full Name *" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]" />
                            <input type="tel" name="phone" placeholder="Phone Number *" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]" />
                            <input type="email" name="email" placeholder="Email Address *" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]" />
                            <input type="text" name="company" placeholder="Company Name" className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]" />
                        </div>
                    </div>

                     <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-200">
                        <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Shipment Details</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <select name="serviceType" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316] bg-white">
                                <option value="">Select Service Type *</option>
                                <option value="road-transport">Road Transport</option>
                                <option value="container-transport">Container Transport</option>
                                <option value="specialized-goods">Specialized Goods</option>
                                <option value="warehousing">Warehousing & Storage</option>
                            </select>
                            <input type="text" name="goodsType" placeholder="Type of Goods *" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:focus:border-[#f97316]" />
                            <input type="text" name="pickupLocation" placeholder="Pickup Location (City, State) *" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]" />
                            <input type="text" name="deliveryLocation" placeholder="Delivery Location (City, State) *" required className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]" />
                             <input type="text" name="weight" placeholder="Approx. Weight (e.g., 500 kg)" className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]" />
                            <input type="text" name="dimensions" placeholder="Dimensions (e.g., 10x5x3 ft)" className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]" />
                           <div className="sm:col-span-2">
                                 <textarea name="additionalInfo" placeholder="Additional Information (e.g., special handling)" rows="4" className="w-full px-4 py-3 border border-[#cbd5e1] rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-[#f97316]"></textarea>
                           </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#f97316] to-[#fb923c] rounded-full hover:shadow-xl transition transform hover:-translate-y-1">Request My Quote</button>
                    </div>
                </form>
            </div>
        </div>
    );
};


/* --- MAIN APP COMPONENT --- */

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Add custom animations to a style tag in the head
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }
      .animate-float { animation: float 6s ease-in-out infinite; }
      
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeInUp { animation: fadeInUp 1s ease-out forwards; }

      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .animate-slideInLeft { animation: slideInLeft 0.8s ease-out forwards; }
      
      @keyframes bounceIn {
        0% { transform: scale(0.5); opacity: 0; }
        50% { transform: scale(1.1); }
        70% { transform: scale(0.9); }
        100% { transform: scale(1); opacity: 1; }
      }
      .animate-bounceIn { animation: bounceIn 1s ease-out forwards; }
      
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }

      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.8); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }

      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .services-cta::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        animation: shimmer 4s infinite;
      }
      
      /* Base Card Setup for Hover Animation System */
      .service-card, .industry-card, .testimonial-card {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); /* Initial Shadow */
        border: 1px solid #e2e8f0;
      }

      /* Top Border Reveal (Fixed to be initially hidden) */
      .service-card::before, .industry-card::before, .testimonial-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #f97316, #fb923c);
          transform-origin: left;
          transform: scaleX(0); /* HIDDEN by default */
          transition: transform 0.3s ease;
          z-index: 1;
      }
      .service-card:hover::before, .industry-card:hover::before, .testimonial-card:hover::before {
          transform: scaleX(1); /* VISIBLE on hover */
      }

      /* Card Lift and Shadow Progression */
      .service-card:hover, .industry-card:hover, .testimonial-card:hover {
          transform: translateY(-8px); /* Lift Effect */
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); /* Stronger Shadow */
          border-color: #cbd5e1; /* Border Color Transition */
      }

      /* Other Link and Text Styles */
      .service-link:hover > svg {
          transform: translateX(4px);
      }
      .service-link > svg {
          transition: transform 150ms ease;
      }
      .testimonial-text {
          font-size: 18px;
          color: #475569;
          font-style: italic;
          line-height: 1.7;
          font-weight: 400;
          margin: 0 0 32px 0;
      }
      .author-name {
          font-weight: 700;
          color: #0f172a;
          font-size: 16px;
          margin: 0 0 4px 0;
      }
      .author-company {
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          margin: 0;
      }

      /* Gallery Specific Styles (Masonry/Staggered) */
      /* Note: We use a column-based grid layout with auto-fill to simulate masonry. */
      .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-auto-rows: 10px; /* Crucial for aspect ratio based sizing, sets row height unit */
          gap: 1.5rem; /* 24px gap */
      }
      .gallery-item {
          /* We calculate row span in JSX/JS based on image aspect ratio, then apply grid-row-end: span X */
          margin-bottom: 0 !important;
          overflow: hidden;
      }
      .gallery-item img {
          display: block; 
          width: 100%;
          height: auto;
      }

      /* Responsive Adjustments (Matching prompt specifications) */
      @media (max-width: 1199px) {
          .testimonials-section {
              padding-top: 80px !important;
              padding-bottom: 80px !important;
          }
          .section-header .section-title {
              margin-bottom: 60px !important;
          }
          .testimonials-grid {
               gap: 40px !important;
          }
      }
      @media (max-width: 767px) {
          .py-16 { padding-top: 60px !important; padding-bottom: 60px !important; }
          .sm\\:py-24 { padding-top: 60px !important; padding-bottom: 60px !important; }
          .lg\\:py-32 { padding-top: 60px !important; padding-bottom: 60px !important; }
          
          .testimonials-grid {
               grid-template-columns: 1fr !important;
               gap: 32px !important;
          }
          .testimonial-card {
              padding: 40px 32px !important;
          }
          .section-header .section-title {
               font-size: clamp(1.875rem, 6vw, 2.5rem) !important;
          }

          .p-8 { padding: 24px !important; }
          .sm\\:p-10 { padding: 24px !important; }
          .rounded-\\[20px\\] { border-radius: 16px !important; }
          .industries-section .mb-12, .industries-section .md\\:mb-16 { margin-bottom: 48px !important; }
          .industries-section .mb-\\[80px\\] { margin-bottom: 60px !important; }
          .industries-section .cta-box { padding: 32px 24px !important; }
      }
      /* Large Desktop Adjustments */
      @media (min-width: 1200px) {
          .testimonials-section {
              padding-top: 140px !important;
              padding-bottom: 140px !important;
          }
          .section-header .section-title {
              margin-bottom: 100px !important;
          }
          .testimonials-grid {
               gap: 48px !important;
          }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'industries':
        return <IndustriesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      case 'quote':
        return <QuotePage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-white font-sans antialiased text-[#475569]">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
