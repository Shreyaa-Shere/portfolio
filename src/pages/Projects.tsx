import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CareSummarize",
      subtitle: "Responsible AI for Clinical Note Summarization",
      description:
        "LLM-powered clinical summarization system using LangChain and FAISS for efficient doctor-patient transcript processing. AWS-deployed solution achieving 25% accuracy improvement and 40% faster note writing.",
      tags: ["AI", "LLM", "Healthcare", "LangChain", "FAISS", "AWS"],
      metrics: ["25% accuracy gain", "40% faster notes", "AWS deployed"],
    },
    {
      title: "AutoPilot AI",
      subtitle: "Intelligent Workflow Automation Agent",
      description:
        "FastAPI-based automation system integrated with n8n for Slack workflows. Reduced manual status updates by 50% through intelligent automation and seamless team communication.",
      tags: ["AI", "FastAPI", "n8n", "Slack", "Automation"],
      metrics: ["50% less manual work", "Slack integration", "Real-time updates"],
    },
    {
      title: "Receipt Genie",
      subtitle: "AI Receipt Dashboard & Budgeting App",
      description:
        "Streamlit-based receipt management system with OCR and OpenAI API integration. Features 95% OCR accuracy, smart budget alerts, and comprehensive PDF/Excel export capabilities.",
      tags: ["AI", "OCR", "OpenAI", "Streamlit", "FinTech"],
      metrics: ["95% OCR accuracy", "Budget tracking", "Multi-format export"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">Real-world applications of AI and software engineering</p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-medium transition-all hover:-translate-y-2 flex flex-col animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-sm text-primary font-semibold mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 mb-4 flex-1">
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* <div className="flex gap-3 pt-4 border-t border-border">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div> */}
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
