import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

export default function Portfolio() {
  const projects = [
    {
      title: 'Robotics Automation',
      description: 'Developed an autonomous payload robot for mining applications, utilizing advanced robotics technologies.',
      image: '/images/project1.png',
    },
    {
      title: 'Travel Booking System',
      description: 'Built a sophisticated travel booking system with real-time insurance recommendations and dynamic data processing.',
      image: '/images/project2.jpeg',
    },
    {
      title: 'Employee Dashboard',
      description: 'Created a secure, full-stack employee dashboard application with role-based access control and time tracking features.',
      image: '/images/project3.jpeg',
    },
  ];

  return (
    <div className="bg-gray-100">
      <Navbar />

      {/* Portfolio Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">My Portfolio</h1>
          <p className="text-lg mb-12">Explore my work and projects that showcase my skills and expertise in technology and development.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

  