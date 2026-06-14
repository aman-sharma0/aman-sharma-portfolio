//import { useEffect, useState } from "react";

// export function AboutSection() {
//   const [labMachines, setLabMachines] = useState(0);
//   const [certifications, setCertifications] = useState(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             animateCounter(setLabMachines, 50);
//             animateCounter(setCertifications, 8);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     const element = document.getElementById("about");
//     if (element) {
//       observer.observe(element);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const animateCounter = (setter: (value: number) => void, target: number) => {
//     let current = 0;
//     const increment = target / 50;
//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= target) {
//         setter(target);
//         clearInterval(timer);
//       } else {
//         setter(Math.floor(current));
//       }
//     }, 50);
//   };

  return (
    <section id="about" className="py-20" data-testid="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="about-title">
            <span className="text-cyber-green">&gt;</span> About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="about-subtitle">
            I think like an attacker, validate like a consultant, and secure like a defender
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Cybersecurity professional analyzing security systems"
              className="rounded-lg shadow-2xl hover:shadow-cyber-green/10 transition-all duration-300"
              data-testid="about-image"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed" data-testid="about-intro">
              I am <span className="text-cyber-green font-semibold animate-glitch">Aman Sharma</span>, an
              <span className="text-cyber-blue font-semibold"> Information Security Consultant at AKS IT Services</span>, where I 
              conduct Security Audits, Vulnerability Assessments, and Penetration Testing engagements for PSU,
              government and private clients.
            </p>

            <p className="text-gray-300 leading-relaxed" data-testid="about-description">
              With a strong foundation in VAPT, network security, compliance auditing,
              I bring an <span className="text-cyber-green">Offensive Security mindset</span> to every engagement
              by identifying vulnerabilities before adversaries do and delivering actionable security recommendations.
            </p>

            <div className="bg-dark-card border border-dark-border rounded-lg p-6" data-testid="about-mission">
              <h3 className="text-cyber-green font-semibold mb-3 font-mono">[MISSION]</h3>
              <p className="text-gray-300 leading-relaxed">
                To grow as a well-rounded offensive security professional,
                delivering high-impact security assessments for critical infrastructure
                while continuously sharpening my skills across Network Security,
                Web Application Security, and compliance frameworks.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4" data-testid="about-stats">
              <div className="text-center p-4 bg-dark-card border border-cyber-green/20 rounded-lg">
                <div className="text-2xl font-bold text-cyber-green" data-testid="stat-lab-machines">
                  2+
                </div>
                <div className="text-sm text-gray-400">Years in Security</div>
                {/* <div className="text-sm text-gray-400">Lab Machines Pwned</div> */}
              </div>
              <div className="text-center p-4 bg-dark-card border border-cyber-blue/20 rounded-lg">
                <div className="text-2xl font-bold text-cyber-blue" data-testid="stat-certifications">
                  5+
                </div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
