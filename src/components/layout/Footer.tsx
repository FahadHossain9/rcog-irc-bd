"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Protocols", href: "/guidance/protocols" },
    { name: "Events", href: "/events" },
    { name: "News", href: "/news" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  const guidanceLinks = [
    { name: "Evidence-Based Protocols", href: "/guidance/protocols" },
    { name: "HelpDesk", href: "/guidance/helpdesk" },
    { name: "Clinical Guidelines", href: "/guidance/clinical-guidelines" },
    { name: "Quality Standards", href: "/guidance/quality-standards" },
  ];

  const trainingLinks = [
    { name: "Training Programs", href: "/careers/training" },
    { name: "Current Opportunities", href: "/careers/opportunities" },
    { name: "Examination Info", href: "/careers/examinations" },
    { name: "CPD Information", href: "/careers/cpd" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-[#1e293b] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About RCOG IRC */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/logo.jpeg"
                  alt="RCOG IRC Bangladesh Logo"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h3 className="font-poppins font-bold text-lg">
                    RCOG IRC Bangladesh
                  </h3>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Advancing women's healthcare in Bangladesh through excellence,
                education, and evidence-based practice.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                <span className="text-gray-300">info@rcog-irc.org.bd</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-[#ff6b35] flex-shrink-0" />
                <span className="text-gray-300">+880 2 1234 5678</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-[#ff6b35] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  House 123, Road 45, Dhanmondi
                  <br />
                  Dhaka 1205, Bangladesh
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff6b35] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guidance */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">
              Guidance
            </h4>
            <ul className="space-y-3">
              {guidanceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff6b35] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Training & Social */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">
              Training & Careers
            </h4>
            <ul className="space-y-3 mb-8">
              {trainingLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff6b35] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="font-poppins font-semibold text-base mb-4">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 hover:bg-[#1b75bc] rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="font-poppins font-semibold text-base mb-3">
                Newsletter
              </h5>
              <p className="text-gray-300 text-sm mb-3">
                Subscribe to get updates on events and protocols
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md text-sm focus:outline-none focus:border-[#1b75bc]"
                />
                <button className="bg-[#1b75bc] hover:bg-[#155a94] px-4 py-2 rounded-r-md text-sm font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} RCOG IRC Bangladesh. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#ff6b35] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#ff6b35] transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-[#ff6b35] transition-colors duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
