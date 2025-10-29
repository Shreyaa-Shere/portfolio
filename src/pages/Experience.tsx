import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Briefcase, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Capgemini Technology Services",
      period: "Jul 2022 – Jun 2024",
      location: "India",
      achievements: [
        "Developed 10+ WordPress themes improving performance by 30%",
        "Reduced release cycles from weekly to daily with CI/CD automation",
        "Partnered cross-functionally, cutting post-release bugs 15%",
        "Led migration projects improving system scalability and maintainability",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Capgemini",
      period: "Mar 2022 – May 2022",
      location: "India",
      achievements: [
        "Built Docker-based microservices improving scalability 30%",
        "Delivered secure REST APIs handling 1K+ daily transactions",
        "Assisted CI/CD with GitHub Actions and Azure DevOps",
        "Collaborated with senior developers on production deployments",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground">My journey in software engineering and development</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-glow hidden md:block" />
                  
                  <Card className="md:ml-20 p-8 hover:shadow-medium transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-1">{exp.title}</h2>
                        <p className="text-lg text-primary font-semibold mb-1">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period} • {exp.location}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mt-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
