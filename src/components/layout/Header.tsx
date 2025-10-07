"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const topNavItems = [
    { name: "About us", href: "/about" },
    { name: "Events & Photo Gallery", href: "/events" },
    { name: "News", href: "/news" },
    { name: "Journals", href: "/journals" },
    { name: "Learnings", href: "/learnings" },
    { name: "Contact", href: "/contact" },
  ];

  const mainNavItems = [
    {
      name: "Guidance",
      href: undefined,
      dropdown: [
        { name: "Evidence-Based Protocols", href: "/guidance/protocols" },
        { name: "RCOG IRC BD HelpDesk", href: "/guidance/helpdesk" },
        { name: "Clinical Guidelines", href: "/guidance/clinical-guidelines" },
        { name: "Quality Standards", href: "/guidance/quality-standards" },
      ],
    },
    {
      name: "Training",
      href: "/training",
      dropdown: [
        { name: "Training Programs", href: "/training/programs" },
        { name: "Current Opportunities", href: "/training/opportunities" },
        { name: "Examination Info", href: "/training/examinations" },
        { name: "CPD Information", href: "/training/cpd" },
      ],
    },
    {
      name: "Membership",
      href: "/membership",
      dropdown: [
        { name: "Membership Types", href: "/membership/types" },
        { name: "How to Apply", href: "/membership/apply" },
        { name: "Benefits", href: "/membership/benefits" },
        { name: "Member Directory", href: "/membership/directory" },
      ],
    },
    {
      name: "Research",
      href: "/research",
      dropdown: [
        { name: "Research Projects", href: "/research/projects" },
        { name: "Publications", href: "/research/publications" },
        { name: "Research Grants", href: "/research/grants" },
        { name: "Collaborations", href: "/research/collaborations" },
      ],
    },
    {
      name: "Advocacy",
      href: "/advocacy",
      dropdown: [
        { name: "Policy Development", href: "/advocacy/policy" },
        { name: "Public Health", href: "/advocacy/public-health" },
        { name: "Women's Health", href: "/advocacy/womens-health" },
        { name: "Community Engagement", href: "/advocacy/community" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* Header with Logo and Two-Row Menu Layout */}
      <div className="bg-gradient-to-r from-[#1b75bc] to-[#2a88cc] text-white">
        <div className="container mx-auto px-4 py-4">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-4">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="/images/logo.jpeg"
                  alt="RCOG IRC Bangladesh Logo"
                  className="w-12 h-12 object-contain"
                />
                <div className="hidden sm:block">
                  <div className="font-poppins font-bold text-sm leading-tight">
                    Royal College of Obstetricians & Gynaecologists
                  </div>
                  <div className="text-xs opacity-90">RCOG IRC Bangladesh</div>
                </div>
              </Link>
            </div>

            {/* Top Menu - Right Side */}
            <div className="flex items-center space-x-6">
              <nav className="hidden lg:flex items-center space-x-6">
                {topNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm hover:text-orange-300 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <Link
                href="/contact"
                className="bg-[#ff6b35] hover:bg-[#ff5722] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Bottom Row - Main Navigation */}
          <div className="flex items-center justify-between">
            <nav className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 py-3 px-2 hover:bg-white/10 transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center space-x-1 py-3 px-2 hover:bg-white/10 transition-colors duration-200"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      aria-haspopup="menu"
                      aria-expanded={activeDropdown === item.name}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  )}

                  {/* Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                      {item.dropdown?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-[#e8f4fa] hover:text-[#1b75bc] transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20">
            <div className="container mx-auto px-4 py-4">
              {/* Top Navigation - Mobile */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-orange-300 mb-3">
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {topNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm py-2 px-3 rounded hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Main Navigation - Mobile */}
              <div>
                <h3 className="text-sm font-semibold text-orange-300 mb-3">
                  Main Menu
                </h3>
                <div className="space-y-2">
                  {mainNavItems.map((item) => (
                    <div key={item.name}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="block py-2 px-3 rounded hover:bg-white/10 transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          className="w-full text-left py-2 px-3 rounded hover:bg-white/10 transition-colors duration-200"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            )
                          }
                          aria-haspopup="menu"
                          aria-expanded={activeDropdown === item.name}
                        >
                          {item.name}
                        </button>
                      )}
                      {item.dropdown && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-1 px-3 text-sm text-gray-300 rounded hover:bg-white/10 transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
