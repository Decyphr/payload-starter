"use client";

import { FacebookIcon, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import type { Footer as FooterType } from "~/cms/payload-types";

import { Logo } from "~/components/logo";

interface FooterClientProps {
  data: FooterType;
}

export function FooterClient({ data }: FooterClientProps) {
  // Base will only show an example for the footer
  const _navItems = data.navItems ?? [];

  return (
    <footer className="bg-foreground text-background w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Logo variant="light" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#" className="hover:underline">
                About Us
              </Link>
              <Link href="#" className="hover:underline">
                Our Team
              </Link>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
              <Link href="#" className="hover:underline">
                Press
              </Link>
              <Link href="#" className="hover:underline">
                News
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Products</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#" className="hover:underline">
                Features
              </Link>
              <Link href="#" className="hover:underline">
                Pricing
              </Link>
              <Link href="#" className="hover:underline">
                Solutions
              </Link>
              <Link href="#" className="hover:underline">
                Integrations
              </Link>
              <Link href="#" className="hover:underline">
                Enterprise
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Resources</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="#" className="hover:underline">
                Blog
              </Link>
              <Link href="#" className="hover:underline">
                Documentation
              </Link>
              <Link href="#" className="hover:underline">
                Guides
              </Link>
              <Link href="#" className="hover:underline">
                Help Center
              </Link>
              <Link href="#" className="hover:underline">
                Webinars
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <address className="not-italic">
                  123 Market St. Suite 1234
                  <br />
                  San Francisco, CA 94111
                </address>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@company.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-4">
              <Link href="#" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>

            <div className="text-sm text-muted">
              ©
              {" "}
              {new Date().getFullYear()}
              {" "}
              Company, Inc. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="hover:underline">
                Cookie Policy
              </Link>
              <Link href="#" className="hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
