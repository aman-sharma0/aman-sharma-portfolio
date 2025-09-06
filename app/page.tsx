"use client";
import { MatrixBackground } from "@/components/matrix-background";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-dark-bg text-white overflow-x-hidden"
      data-testid="home-page"
    >
      <MatrixBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ExperienceSection />
      <ContactSection />

      {/* Footer */}
      <footer
        className="py-12 bg-dark-card border-t border-dark-border"
        data-testid="footer"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400"
                alt="Network security and data protection visualization"
                className="w-full max-w-2xl mx-auto rounded-lg opacity-50 hover:opacity-75 transition-opacity duration-300"
                data-testid="footer-image"
              />
            </div>
            <p className="text-gray-400 mb-4" data-testid="footer-tagline">
              Passionate about cybersecurity • Building a safer digital future
            </p>
            <p
              className="text-sm text-gray-500 font-mono"
              data-testid="footer-copyright"
            >
              © 2025 Aman Sharma. Securing the digital frontier, one
              vulnerability at a time.
            </p>
            <div
              className="mt-6 flex justify-center space-x-6"
              data-testid="footer-tags"
            >
              <span className="text-xs text-gray-600 font-mono">
                [ETHICAL_HACKING]
              </span>
              <span className="text-xs text-gray-600 font-mono">
                [PENETRATION_TESTING]
              </span>
              <span className="text-xs text-gray-600 font-mono">
                [RED_TEAMING]
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
