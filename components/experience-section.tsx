import { Building, Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceSection() {

  const aksResponsibilities = [
    "Conducting infrastructure & network penetration testing for PSU, government, and private clients",
    "Performing credentialed & non-credentialed vulnerability assessments using Nessus Pro",
    "Executing security configuration audits and network architecture reviews",
    "Filing compliance reports against CERT-In 2022 and ISO 27001 frameworks"
  ];

  const aksParallelDevelopment = [
    "Pursuing CPTS certification on HackTheBox",
    "Android & web application security research",
    "Building expertise in enterprise network security",
    "Continuous upskilling in offensive security techniques"
  ];

  const TechmResponsibilities = [
    "Performing product security testings",
    "Involving in infrastructure security activities",
    "Collaborating with core VAPT team to find vulnerabilities and report them to stakeholders",
    "Staying updated with emerging technologies and industry best practices"
  ];

  const TechmparallelDevelopment = [
    "Active participation in penetration testing labs",
    "Learning and understanding security frameworks",
    "Cybersecurity certification pursuit",
    "Network security research and testing"
  ];

  const projects = [
    {
      title: "Network Security Auditing",
      description: "Infrastructure vulnerability assessments and compliance audits for PSU and government clients",
      tags: ["Active Directory", "Firewall ACLs", "DC/DR Infrastructure", "Network Devices"],
      color: "cyber-green"
    },
    {
      title: "Web Application Security",
      description: "Advanced penetration testing on PortSwigger Academy and HackTheBox platforms",
      tags: ["OWASP Top 10", "API Security", "Auth Testing", "Business Logic"],
      color: "cyber-blue"
    },
    {
      title: "Android Pentesting",
      description: "Mobile application security analysis using static and dynamic testing methodologies",
      tags: ["Static Analysis", "Dynamic Analysis", "Network Traffic", "Reverse Engineering"],
      color: "green-500"
    },
  ];

  const projectColorVariants: Record<
    string,
    { text: string; borderHover: string }
  > = {
    "cyber-green": {
      text: "text-cyber-green",
      borderHover: "hover:border-cyber-green/30",
    },
    "cyber-blue": {
      text: "text-cyber-blue",
      borderHover: "hover:border-cyber-blue/30",
    },
    "green-500": {
      text: "text-green-500",
      borderHover: "hover:border-green-500/30",
    },
  };

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

        {/* AKS - Current Role */}
        <div className="bg-dark-card border border-cyber-green/50 rounded-lg p-8 mb-8 hover:border-cyber-green transition-all duration-300" data-testid="aks-role">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-cyber-green mb-2 flex items-center">
                <Building className="w-6 h-6 mr-2" />
                Infosec Consultant (Network Security)
              </h3>
              <p className="text-xl text-cyber-blue">AKS IT Services Pvt Ltd</p>
              <p className="text-gray-400 font-mono">Information Security & Audit</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-cyber-green font-semibold flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Apr 2026 – Present
              </p>
              <p className="text-sm text-gray-400">Current Role</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
              <ul className="space-y-2 text-gray-300">
                {aksResponsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="text-cyber-green mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Parallel Development</h4>
              <ul className="space-y-2 text-gray-300">
                {aksParallelDevelopment.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="text-cyber-blue mr-2 mt-1 w-4 h-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Previous Role */}
        <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-8 hover:border-cyber-green/50 transition-all duration-300" data-testid="current-role">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-cyber-green mb-2 flex items-center">
                <Building className="w-6 h-6 mr-2" />
                Associate Software Engineer - Cybersecurity
              </h3>
              <p className="text-xl text-cyber-blue">Tech Mahindra</p>
              <p className="text-gray-400 font-mono">ENS – Digital Engineering Solutions</p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="text-cyber-green font-semibold flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Mar 2024 – Apr 2026
              </p>
              <p className="text-sm text-gray-400">Previous Role</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div data-testid="responsibilities">
              <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
              <ul className="space-y-2 text-gray-300">
                {TechmResponsibilities.map((responsibility, index) => (
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
                {TechmparallelDevelopment.map((item, index) => (
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
              className={cn(
                "flex flex-col bg-dark-card border border-dark-border rounded-lg p-6 transition-all duration-300",
                projectColorVariants[project.color]?.borderHover
              )}
              data-testid={`project-${index}`}
            >
              <h4 className={cn("text-lg font-semibold mb-3", projectColorVariants[project.color]?.text)}>
                {project.title}
              </h4>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
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