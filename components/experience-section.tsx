import { Building, Calendar, ChevronRight } from "lucide-react";

export function ExperienceSection() {
  const responsibilities = [
    "Performing product security testings",
    "Involving in infrastructure security activities",
    "Collaborating with core VAPT team to find vulnerabilities and report them to stakeholders",
    "Staying updated with emerging technologies and industry best practices"
  ];

  const parallelDevelopment = [
    "Active participation in penetration testing labs",
    "Red team exercise simulations",
    "Cybersecurity certification pursuit",
    "Network security research and testing"
  ];

  const projects = [
    {
      title: "Web Application Security",
      description: "Advanced penetration testing on PortSwigger Academy and HackTheBox platforms",
      tags: ["SQLi", "XSS", "CSRF", "IDOR"],
      color: "cyber-green"
    },
    {
      title: "Android Pentesting",
      description: "Mobile application security analysis using static and dynamic testing methodologies",
      tags: ["MobSF", "Frida", "Drozer"],
      color: "cyber-blue"
    },
    {
      title: "Hardware Security",
      description: "OS image analysis and root filesystem security testing on IoT devices",
      tags: ["Raspberry Pi", "NVIDIA Orin"],
      color: "green-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-card/30" data-testid="experience-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="experience-title">
            <span className="text-cyber-blue">&gt;</span> Professional Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="experience-subtitle">
            Building expertise through hands-on experience and continuous learning
          </p>
        </div>

        {/* Current Role */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-8 hover:border-cyber-green/50 transition-all duration-300" data-testid="current-role">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-cyber-green mb-2 flex items-center">
                <Building className="w-6 h-6 mr-2" />
                Associate Software Engineer
              </h3>
              <p className="text-xl text-cyber-blue">Tech Mahindra</p>
              <p className="text-gray-400 font-mono">ENS – Digital Engineering Solutions</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-cyber-green font-semibold flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Mar 2024 – Present
              </p>
              <p className="text-sm text-gray-400">Current Role</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-testid="responsibilities">
              <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
              <ul className="space-y-2 text-gray-300">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="text-cyber-green mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            <div data-testid="parallel-development">
              <h4 className="text-lg font-semibold text-white mb-4">Parallel Development</h4>
              <ul className="space-y-2 text-gray-300">
                {parallelDevelopment.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="text-cyber-blue mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="project-highlights">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-dark-card border border-dark-border rounded-lg p-6 hover:border-${project.color}/30 transition-all duration-300`}
              data-testid={`project-${index}`}
            >
              <h4 className={`text-lg font-semibold text-${project.color} mb-3`}>
                {project.title}
              </h4>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-dark-bg text-xs rounded font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
