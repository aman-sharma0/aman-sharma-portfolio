import { Shield, Settings, Cloud, Wifi, Code, Monitor } from "lucide-react";

export function SkillsSection() {
  const skills = [
    {
      icon: Shield,
      title: "Penetration Testing",
      color: "cyber-green",
      items: [
        "Web Application Testing (OWASP Top 10)",
        "Android App Pentesting",
        "Infrastructure Testing",
        "Hardware Security Testing"
      ]
    },
    {
      icon: Settings,
      title: "Security Tools",
      color: "cyber-blue",
      tools: ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "MobSF", "Frida"]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      color: "green-500",
      items: [
        "AWS Security Fundamentals",
        "Identity & Access Management",
        "Cloud Architecture Security"
      ]
    },
    {
      icon: Wifi,
      title: "Networking",
      color: "amber-500",
      items: [
        "TCP/IP, DNS, DHCP",
        "Firewalls & VPNs",
        "Active Directory Security"
      ]
    },
    {
      icon: Code,
      title: "Programming",
      color: "purple-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "Bash", level: 85 }
      ]
    },
    {
      icon: Monitor,
      title: "Practice Platforms",
      color: "red-500",
      tools: ["HackTheBox", "TryHackMe", "PortSwigger", "VulnHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-card/30" data-testid="skills-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="skills-title">
            <span className="text-cyber-blue">&gt;</span> Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="skills-subtitle">
            Comprehensive skillset spanning offensive security, cloud platforms, and enterprise technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`bg-dark-card border border-dark-border rounded-lg p-6 hover:border-${skill.color}/50 transition-all duration-300 hover:shadow-lg hover:shadow-${skill.color}/10`}
              data-testid={`skill-card-${skill.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center mb-4">
                <skill.icon className={`w-8 h-8 text-${skill.color} mr-3`} />
                <h3 className={`text-xl font-semibold text-${skill.color}`}>
                  {skill.title}
                </h3>
              </div>

              {skill.items && (
                <ul className="space-y-2 text-gray-300">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className={`text-${skill.color} mr-2`}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {skill.tools && (
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {skill.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 bg-dark-bg rounded text-center font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}

              {skill.skills && (
                <div className="space-y-2">
                  {skill.skills.map((progSkill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{progSkill.name}</span>
                        <span className={`text-${skill.color} font-mono`}>{progSkill.level}%</span>
                      </div>
                      <div className="w-full bg-dark-bg rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-purple-500 h-2 rounded-full transition-all duration-1000 text-[#00ff80]"
                          style={{ width: `${progSkill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
