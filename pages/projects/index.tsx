import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 'personal-blog',
    title: 'Blog Personal',
    description: 'Este mismo sitio web construido con Next.js y TypeScript. Un espacio para compartir análisis de papers técnicos y proyectos.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Markdown'],
    githubUrl: 'https://github.com/nachoviau/Blog-personal', // Enlace real al repo
  },
  {
    id: 'file-transfer-redes',
    title: 'File Transfer Protocol',
    description: 'Implementación de un protocolo de transferencia de archivos para Redes (FIUBA). Desarrollado en Python con mininet.',
    tags: ['Python', 'Networking', 'Protocols', 'Mininet', 'Sistemas Distribuidos'],
    githubUrl: 'https://github.com/nachoviau/redes-20242c',
  },
  {
    id: 'hospice-webapp',
    title: 'Hospice San Camilo - Sistema de Gestión',
    description: 'Aplicación web para gestión de voluntarios y partes diarios. Diseñado para adultos mayores con login simplificado y envío automático de emails.',
    tags: ['React', 'Firebase', 'Firestore', 'SendGrid', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/nachoviau/hospice-webapp',
  },
];

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="mb-8 font-mono">
        <h1 className="text-4xl font-bold text-white mb-4">Proyectos</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 font-mono">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-200 hover:shadow-lg"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.githubUrl && project.githubUrl !== '#' && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {project.githubUrl === '#' && (
                <span className="inline-flex items-center bg-gray-600 text-gray-400 px-4 py-2 rounded-lg font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Próximamente
                </span>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-12 text-center font-mono">
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-4">
            ¿Tenes algo en mente?
          </h3>
          <p className="text-gray-300 mb-6">
            Me gusta colaborar en proyectos interesantes. Si tenés una idea o necesitas ayuda con desarrollo, charlemos.
          </p>
          <Link 
            href="/about"
            className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Conoce más sobre mí
          </Link>
        </div>
      </div>
    </Layout>
  );
} 