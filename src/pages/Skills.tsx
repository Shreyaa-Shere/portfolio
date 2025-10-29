import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages & Databases",
      skills: ["Python", "Java", "C", "JavaScript", "SQL", "PostgreSQL", "MongoDB"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      category: "AI/ML & Data Libraries",
      skills: ["LangChain", "TensorFlow", "Hugging Face", "Numpy", "Pandas", "OpenCV", "Matplotlib", "Plotly"],
      color: "bg-secondary/10 text-secondary border-secondary/20",
    },
    {
      category: "Frameworks & Tools",
      skills: ["FastAPI", "Streamlit", "Docker", "GitHub Actions", "AWS", "Azure DevOps"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      category: "Specialized Expertise",
      skills: [
        "LLM Deployment",
        "Fine-Tuning",
        "RAG Pipelines",
        "NLP Workflows",
        "Model Evaluation",
        "Data Wrangling",
      ],
      color: "bg-primary/10 text-primary border-primary/20",
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
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with to build innovative solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8 animate-slide-up">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-shadow">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-primary rounded-full" />
                  {category.category}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`px-4 py-2 text-base font-medium ${category.color} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Proficiency Note */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground italic">
              Continuously learning and adapting to emerging technologies in AI and software engineering
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
