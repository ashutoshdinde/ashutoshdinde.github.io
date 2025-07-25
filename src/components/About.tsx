import { Code, Database, Server, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in Java, Spring Boot, and modern web technologies"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient with MySQL, PostgreSQL, and data modeling"
    },
    {
      icon: Server,
      title: "Backend Systems",
      description: "Building scalable APIs and microservices architecture"
    },
    {
      icon: Smartphone,
      title: "Problem Solving",
      description: "Strong analytical skills and passion for innovative solutions"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-subtle">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Engineering student with hands-on experience in building robust 
            software solutions. Completed my BE at SPPU with a CGPA of 8.08, I specialize in 
            Java development and Spring Boot framework.
          </p>
        </div>

        <div className="space-y-12">
          {/* Story */}
          <div className="max-w-4xl mx-auto animate-slide-up">
            <Card className="card-elegant border-0 shadow-medium">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My journey in software development began during my undergraduate studies, where I discovered 
                  my passion for creating efficient, scalable solutions. With professional experience at 
                  <strong className="text-foreground"> Coditas</strong> and <strong className="text-foreground"> ICEM</strong>, 
                  I've worked on enterprise-level applications including conference management systems, 
                  tool management platforms, and ERP solutions.
                </p>
                <br />
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I believe in writing clean, maintainable code and am always eager to learn new technologies. 
                  My goal is to contribute to innovative projects that make a positive impact while continuously 
                  growing as a software engineer.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="card-elegant hover-lift border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;