import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Code, Heart } from "lucide-react";

const Leadership = () => {
  const achievements = [
    {
      icon: Users,
      title: "Ladies Representative",
      organization: "University of Pune",
      period: "2020 – 2022",
      description:
        "Organized 6+ events including workshops and seminars. Improved student-faculty coordination and created a supportive environment for women in technology.",
      impact: ["6+ events organized", "Enhanced communication", "Mentored peers"],
    },
    {
      icon: Code,
      title: "Coordinator, CodeChef Club",
      organization: "University of Pune",
      period: "2019 – 2021",
      description:
        "Led coding sessions and competitive programming workshops. Boosted club participation by 30% and helped students prepare for technical interviews.",
      impact: ["30% participation increase", "Weekly coding sessions", "Interview prep"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Leadership & <span className="bg-gradient-primary bg-clip-text text-transparent">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering others through mentorship and community building
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-medium transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{achievement.title}</h2>
                    <p className="text-lg text-primary font-semibold mb-1">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground mb-4">{achievement.period}</p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {achievement.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {achievement.impact.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Community Values */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <Trophy className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Striving for the highest standards in everything I do
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Building strong teams through effective communication
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Empathy</h3>
              <p className="text-sm text-muted-foreground">
                Creating inclusive environments for all community members
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Leadership;
