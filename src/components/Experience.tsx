import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Coditas",
      position: "Associate Software Engineer (ASE)",
      location: "Pune",
      duration: "Aug 2025 - Present",
      type: "Full-time",
      description: "Working as a full-time Associate Software Engineer after completing the internship program. Contributing to enterprise-level software solutions and implementing best practices in professional software development.",
      skills: ["Java", "Spring Boot", "Enterprise Development", "Team Collaboration"],
      isActive: true
    },
    {
      company: "Coditas",
      position: "Associate Software Engineer Intern",
      location: "Pune", 
      duration: "Jan 2025 - July 2025",
      type: "Internship",
      description: "Completed a comprehensive internship program as Associate Software Engineer Intern, gaining hands-on experience in enterprise software development and learning industry best practices.",
      skills: ["Java", "Spring Boot", "Software Development", "Code Review"],
      isActive: false
    },
    {
      company: "ICEM",
      position: "Software Development Engineer (SDE)",
      location: "Pune", 
      duration: "Jan 2024 - March 2024",
      type: "Internship",
      description: "Worked as a Software Development Engineer, focusing on building scalable applications and learning industry best practices in software development lifecycle.",
      skills: ["Software Development", "Application Design", "Code Optimization"],
      isActive: false
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey in the software industry, building real-world applications and 
            collaborating with talented teams.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-background bg-primary shadow-medium"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <Card className="card-elegant hover-lift border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {/* Header */}
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-xl font-bold">{exp.position}</h3>
                              {exp.isActive && (
                                <Badge className="bg-primary text-primary-foreground">
                                  Current
                                </Badge>
                              )}
                              <Badge variant="outline">{exp.type}</Badge>
                            </div>
                            
                            <div className="flex items-center gap-2 text-primary font-semibold">
                              <Building className="h-4 w-4" />
                              <span>{exp.company}</span>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Skills */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">Key Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;