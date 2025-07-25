import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Conference Management Software",
      description: "Developed a comprehensive Conference Management System using Spring Boot with JWT-based authentication and role-based access control. Features include user and conference management, email notifications, and secure API access.",
      techStack: ["Java", "Spring Boot", "JWT", "Spring Security", "PostgreSQL", "Maven", "JUnit", "OpenAPI"],
      category: "Full-Stack Application",
      highlights: ["Multi-role authentication", "Email notifications", "API documentation"]
    },
    {
      title: "Tool Management Software", 
      description: "Built a Tool Management System enabling multi-level role-based access for efficient tool inventory tracking, request/approval workflows, and real-time reporting across multiple workplaces.",
      techStack: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Role-based Access"],
      category: "Enterprise Solution",
      highlights: ["Workflow automation", "Real-time reporting", "Multi-workplace support"]
    },
    {
      title: "ProjPoint",
      description: "Developed a centralized project hub for college students to share projects, access documentation, and seek technical assistance. Integrated recommendation engine for domain-specific project suggestions.",
      techStack: ["Python", "Django", "Machine Learning", "Recommendation System"],
      category: "Educational Platform",
      highlights: ["Recommendation engine", "Collaborative platform", "User categorization"]
    },
    {
      title: "ERP System",
      description: "Built an ERP system to simplify and automate administrative and academic tasks in a college setting. Increased efficiency with real-time data management and seamless department integration.",
      techStack: ["Python", "Django", "Database Design", "Real-time Systems"],
      category: "Enterprise Software",
      highlights: ["Automation", "Real-time data", "Department integration"]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work showcasing full-stack development, 
            enterprise solutions, and innovative problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-elegant hover-lift border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                
                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            More projects available upon request
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;