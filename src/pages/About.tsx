import { GraduationCap, Brain, Cloud, Code } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import profilePicture from "@/assets/profile-picture.jpg";

const About = () => {
  const education = [
    {
      degree: "M.S. in Software Engineering",
      school: "Arizona State University",
      period: "2024 – 2026",
      gpa: "3.89",
    },
    {
      degree: "B.E. in Information Technology",
      school: "University of Pune",
      period: "2018 – 2022",
      gpa: "8.68",
    },
  ];

  const expertise = [
    {
      icon: Brain,
      title: "Machine Learning & NLP",
      description: "Advanced expertise in LLM deployment, fine-tuning, and RAG pipelines",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Proficient in AWS, Azure DevOps, and scalable system architecture",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building production-ready applications with modern frameworks",
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
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground">Get to know who I am and what I do</p>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-slide-up">
            <div className="flex justify-center">
              <img
                src="https://i.postimg.cc/G2g43VSY/GHCProfile-pic.jpg"
                alt="Shreya Shere"
                className="w-80 h-80 rounded-2xl object-cover shadow-medium"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Hi, I'm Shreya Shere</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I’m a Software Engineer and AI specialist pursuing my Master’s in Software Engineering at Arizona State
                University (GPA: 3.89). I design scalable, responsible AI solutions ranging from clinical summarization
                systems that cut documentation time by 40% to automation agents that reduced workflows by 50%.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over two years of enterprise experience at Capgemini, I’ve built production-ready systems that
                balance technical excellence with user empathy. My goal is to create human-centered AI that turns
                research into real-world solutions, helping people focus on meaningful work.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-1">{edu.school}</p>
                  <p className="text-muted-foreground text-sm mb-2">{edu.period}</p>
                  <p className="text-sm">
                    <span className="font-medium">GPA:</span> {edu.gpa}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Expertise Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Areas of Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-medium transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
