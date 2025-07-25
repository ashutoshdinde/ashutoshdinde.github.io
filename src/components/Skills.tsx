import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, GitBranch } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: "Advanced" },
        { name: "Python", level: "Intermediate" },
        { name: "Shell Scripting", level: "Intermediate" }
      ],
      description: "Core programming languages for application development"
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: [
        { name: "Spring", level: "Intermediate" },
        { name: "Spring Boot", level: "Advanced" },
        { name: "Hibernate", level: "Intermediate" },
        { name: "Spring Data JPA", level: "Intermediate" },
        { name: "JUnit", level: "Intermediate" },
        { name: "Django", level: "Intermediate" }
      ],
      description: "Modern frameworks for scalable application development"
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: "Intermediate" },
        { name: "PostgreSQL", level: "Intermediate" }
      ],
      description: "Relational database management systems"
    },
    {
      title: "Tools & Platforms",
      icon: GitBranch,
      skills: [
        { name: "Git", level: "Intermediate" },
        { name: "GitLab", level: "Intermediate" },
        { name: "IntelliJ IDEA", level: "Intermediate" }
      ],
      description: "Development tools and version control systems"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-primary text-primary-foreground";
      case "Intermediate": return "bg-primary/70 text-primary-foreground";
      case "Beginner": return "bg-primary/40 text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="card-elegant hover-lift border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${getLevelColor(skill.level)}`}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center animate-fade-in">
          <Card className="card-elegant border-0 shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Additional Competencies</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "JWT Authentication", "Spring Security", "Maven", "Email Integration",
                  "Problem Solving", "Team Collaboration", "Code Review",
                  "Documentation", "Testing"
                ].map((skill, index) => (
                  <Badge key={index} variant="outline" className="hover-lift">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;