import { Award, Zap, Target } from "lucide-react";

export function CertificationsSection() {
  const recentCertifications = [
    {
      title: "AWS Cloud Practitioner",
      subtitle: "CLF-C02",
      year: "2025"
    },
    {
      title: "Cisco Linux Unhatched",
      subtitle: "Network Academy",
      year: "2025"
    },
    {
      title: "Cisco Cybersecurity Intro",
      subtitle: "Network Academy",
      year: "2025"
    }
  ];

  const nuixCertifications = [
    "Data Discovery Core v9.10",
    "Data Discovery Admin v9.10",
    "Neo Investigations - Advanced",
    "Neo ID, Processing & Admin"
  ];

  const plannedCertifications = [
    { name: "CEH", description: "Certified Ethical Hacker", color: "amber-500" },
    { name: "OSCP", description: "Offensive Security", color: "red-500" },
    { name: "CRTP", description: "Red Team Professional", color: "purple-500" }
  ];

  return (
    <section id="certifications" className="py-20" data-testid="certifications-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" data-testid="certifications-title">
            <span className="text-cyber-green">&gt;</span> Certifications & Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" data-testid="certifications-subtitle">
            Continuous learning and professional development in cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Recent Certifications */}
          <div className="bg-dark-card border border-dark-border rounded-lg p-6" data-testid="recent-certifications">
            <h3 className="text-xl font-semibold text-cyber-green mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2" />
              Recent Achievements (2025)
            </h3>
            <div className="space-y-4">
              {recentCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-dark-bg rounded-lg"
                  data-testid={`recent-cert-${index}`}
                >
                  <div>
                    <h4 className="font-semibold text-cyber-blue">{cert.title}</h4>
                    <p className="text-sm text-gray-400">{cert.subtitle}</p>
                  </div>
                  <span className="text-green-500 text-sm font-mono">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Certifications */}
          <div className="bg-dark-card border border-dark-border rounded-lg p-6" data-testid="nuix-certifications">
            <h3 className="text-xl font-semibold text-cyber-blue mb-6 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Nuix Specializations
            </h3>
            <div className="space-y-3">
              {nuixCertifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-3 bg-dark-bg rounded-lg"
                  data-testid={`nuix-cert-${index}`}
                >
                  <h4 className="font-semibold text-green-500 text-sm">{cert}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Planned Certifications */}
          <div className="md:col-span-2 bg-gradient-to-r from-dark-card to-dark-card/50 border border-amber-500/30 rounded-lg p-6" data-testid="planned-certifications">
            <h3 className="text-xl font-semibold text-amber-500 mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-2" />
              Upcoming Certification Goals
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {plannedCertifications.map((cert, index) => (
                <div
                  key={index}
                  className={`text-center p-4 bg-dark-bg/50 rounded-lg border border-${cert.color}/20`}
                  data-testid={`planned-cert-${index}`}
                >
                  <h4 className={`font-semibold text-${cert.color} mb-2`}>{cert.name}</h4>
                  <p className="text-sm text-gray-400">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
