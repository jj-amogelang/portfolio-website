import Image from 'next/image';

export default function ProjectCard({ title, description, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="relative w-full h-48 mb-4">
        <Image src={image} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
