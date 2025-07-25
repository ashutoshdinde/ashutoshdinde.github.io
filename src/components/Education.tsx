import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Savitribai Phule Pune University (SPPU)",
      degree: "Bachelor of Engineering - Computer Science",
      duration: "2021 - 2025",
      grade: "CGPA: 8.08",
      location: "Pune",
      status: "Pursuing",
      description: "Comprehensive computer science curriculum covering software engineering, algorithms, database systems, and modern development practices."
    },
    {
      institution: "Maharashtra State Board",
      degree: "Higher Secondary Certificate (HSC) - Science",
      duration: "2019 - 2021", 
      grade: "92%",
      location: "Pune",
      status: "Completed",
      description: "Science stream with focus on Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundations."
    },
    {
      institution: "Maharashtra State Board", 
      degree: "Secondary School Certificate (SSC)",
      duration: "2018",
      grade: "84%",
      location: "Pune",
      status: "Completed",
      description: "Secondary education with strong performance across all subjects, demonstrating consistent academic excellence."
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Pursuing" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground";
  };

  const getGradeColor = (grade: string) => {
    if (grade.includes("7.95") || grade.includes("92%")) return "text-primary font-bold";
    return "text-foreground font-semibold";
  };

  return (
    <section id="education" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey building the foundation for a successful career in software engineering.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-background shadow-medium ${
                    edu.status === "Pursuing" ? "bg-primary" : "bg-muted-foreground"
                  }`}></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <Card className="card-elegant hover-lift border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {/* Header */}
                          <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <Badge className={getStatusColor(edu.status)}>
                                {edu.status}
                              </Badge>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{edu.duration}</span>
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            
                            <div className="flex items-center gap-2 text-primary font-semibold">
                              <GraduationCap className="h-4 w-4" />
                              <span>{edu.institution}</span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <Award className="h-4 w-4 text-muted-foreground" />
                              <span className={getGradeColor(edu.grade)}>{edu.grade}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="card-elegant border-0 shadow-soft max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Academic Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">8.08</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">92%</div>
                  <div className="text-sm text-muted-foreground">HSC Percentage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years in Engineering</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
