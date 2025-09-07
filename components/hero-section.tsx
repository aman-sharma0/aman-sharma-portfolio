import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20" data-testid="hero-section">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080"
          alt="Cybersecurity workspace with multiple monitors"
          className="w-full h-full object-cover opacity-0"
          data-testid="hero-background-image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-dark-bg"></div>
        
        {/* Cybersecurity Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-40"></div>
        
        {/* Scanning Lines */}
        <div className="scanning-line" style={{ animationDelay: '0s' }}></div>
        <div className="scanning-line" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Code Elements */}
        <div className="floating-code" style={{ top: '20%', left: '10%', animationDelay: '0s' }}>
          $ nmap -sS -O target
        </div>
        <div className="floating-code" style={{ top: '60%', right: '15%', animationDelay: '2s' }}>
          exploit/multi/handler
        </div>
        <div className="floating-code" style={{ top: '40%', left: '70%', animationDelay: '4s' }}>
          sqlmap -u "target"
        </div>
        <div className="floating-code" style={{ top: '80%', left: '25%', animationDelay: '6s' }}>
          hydra -l admin -P pass.txt
        </div>
        
        {/* Hex Pattern Drift */}
        <div className="hex-pattern" style={{ top: '15%', animationDelay: '0s' }}>
          0x7ff4a8b2c000
        </div>
        <div className="hex-pattern" style={{ top: '35%', animationDelay: '3s' }}>
          0xdeadbeef
        </div>
        <div className="hex-pattern" style={{ top: '65%', animationDelay: '6s' }}>
          0x41414141
        </div>
        <div className="hex-pattern" style={{ top: '85%', animationDelay: '9s' }}>
          0x90909090
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4" data-testid="hero-title">
            <span className="text-white">Hi, I'm </span>
            <span className="gradient-text animate-glitch">Aman Sharma</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2" data-testid="hero-subtitle">
            Cybersecurity Enthusiast
          </p>
          <p className="text-lg text-gray-400 font-mono" data-testid="hero-description">
            Penetration Tester • Red Team Aspirant • Security Engineer
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8" data-testid="hero-badges">
          <span className="px-4 py-2 bg-dark-card border border-cyber-green/30 rounded-full text-sm font-mono text-cyber-green">
            VAPT Specialist
          </span>
          <span className="px-4 py-2 bg-dark-card border border-cyber-blue/30 rounded-full text-sm font-mono text-cyber-blue">
            Cloud Security
          </span>
          <span className="px-4 py-2 bg-dark-card border border-green-500/30 rounded-full text-sm font-mono text-green-500">
            Red Teaming
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6" data-testid="hero-cta">
          <Button
            onClick={() => scrollToSection("about")}
            className="bg-gradient-to-r from-cyber-green to-cyber-blue px-8 py-3 rounded-lg font-semibold text-black hover:shadow-lg hover:shadow-cyber-green/25 transition-all duration-300 transform hover:scale-105"
            data-testid="button-explore"
          >
            Explore My Work
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-cyber-green px-8 py-3 rounded-lg font-semibold text-cyber-green hover:bg-cyber-green hover:text-black transition-all duration-300"
            data-testid="button-contact"
          >
            <a href="mailto:amansharma505152@gmail.com">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
