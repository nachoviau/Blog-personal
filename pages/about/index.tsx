import React from 'react';
import Layout from '../../components/Layout';

interface Client {
  name: string;
  kind: string;
  url: string;
  logo: string;
  bullets: string[];
}

interface Job {
  role: string;
  company: string;
  url?: string;
  logo: string;
  period: string;
  summary?: string;
  bullets?: string[];
  tech?: string[];
  clients?: Client[];
}

const jobs: Job[] = [
  {
    role: 'Desarrollador de software',
    company: 'Yieldy',
    url: 'https://yieldy.ai/',
    logo: '/logos/yieldy.png',
    period: 'Actualidad',
    summary: 'Agtech que combina datos georreferenciados, machine learning e imágenes satelitales para el agro.',
    bullets: [
      'Desarrollo de la plataforma',
      'Modelo de transacción de los lotes',
      'Procesamiento y almacenamiento de los datos',
      'Pruebas, backtests y as-ifs para evaluar la viabilidad del modelo y del negocio',
    ],
  },
  {
    role: 'Desarrollador de software',
    company: 'Blue Pampa Company',
    url: 'https://www.bluepampacompany.com/',
    logo: '/logos/bluepampa.png',
    period: 'Actualidad',
    summary: 'Consultora de estrategia de negocios y cumplimiento regulatorio.',
    bullets: [
      'Desarrollo de una plataforma de permisología minera (gestión de permisos regulatorios de proyectos mineros), actualmente en desarrollo',
    ],
    tech: ['React', 'Laravel (PHP)', 'MariaDB', 'Docker', 'AWS (EC2, S3, SES, Bedrock)'],
  },
  {
    role: 'Desarrollador de software',
    company: 'GAMU Partners',
    url: 'https://gamupartners.com/',
    logo: '/logos/gamu.png',
    period: 'Actualidad',
    summary: 'Desarrollo de software para GAMU Partners y para distintos clientes de la consultora.',
    bullets: [
      'Desarrollo de la plataforma que usan para modelar riesgos y llevar adelante la planificación estratégica de sus clientes, hosteada en un VPS',
    ],
    clients: [
      {
        name: 'Santa María de la Salud',
        kind: 'centro médico',
        url: 'https://santamariadelasalud.com.ar/',
        logo: '/logos/santamaria.jpg',
        bullets: ['Plataforma para automatizar la liquidación de los médicos'],
      },
      {
        name: 'Pentamar',
        kind: 'construcciones y dragados',
        url: 'https://www.pentamar.com/',
        logo: '/logos/pentamar.png',
        bullets: [
          'Plataforma para relevar información de la maquinaria, analizar sus rendimientos y brindar balances',
          'Migración del sistema de compras, de uno desactualizado a uno más moderno, junto con todos sus datos',
          'Automatización de la contabilidad de horas de los trabajadores',
        ],
      },
    ],
  },
  {
    role: 'Ayudante de Sistemas Distribuidos I (TA050)',
    company: 'Facultad de Ingeniería, UBA',
    url: 'https://fiubata050.github.io/',
    logo: '/logos/fiuba.png',
    period: '1er cuatrimestre 2026',
  },
  {
    role: 'Profesor',
    company: 'Colegio San Esteban',
    url: 'https://colegiosanesteban.edu.ar/',
    logo: '/logos/sanesteban.png',
    period: 'Marzo 2024 - Diciembre 2024',
    bullets: [
      'Docente en nivel secundario',
      'Diseño de materiales educativos y ejercicios prácticos',
      'Acompañamiento y tutoría de jóvenes en su desarrollo académico',
    ],
  },
];

const skillGroups: { title: string; color: string; skills: string[] }[] = [
  { title: 'Lenguajes', color: 'bg-orange-600', skills: ['Python', 'TypeScript', 'JavaScript', 'Go', 'PHP', 'C', 'C++', 'Rust', 'SQL'] },
  { title: 'Backend', color: 'bg-blue-600', skills: ['FastAPI', 'Node.js', 'Express', 'Laravel', 'Prisma', 'API REST'] },
  { title: 'Frontend', color: 'bg-green-600', skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'] },
  { title: 'Datos', color: 'bg-purple-600', skills: ['PostgreSQL', 'PostGIS', 'MariaDB', 'MongoDB', 'Supabase', 'Pandas', 'Spark', 'Web scraping'] },
  { title: 'Infraestructura', color: 'bg-teal-600', skills: ['Docker', 'AWS', 'Firebase', 'Heroku', 'Linux', 'VPS', 'Home server', 'Git'] },
  { title: 'IA', color: 'bg-pink-600', skills: ['Claude Code', 'Claude (AWS Bedrock)', 'OpenAI API'] },
  { title: 'Testing', color: 'bg-gray-600', skills: ['Playwright', 'Jest', 'pytest', 'PHPUnit'] },
];

function Logo({ src, alt, small }: { src: string; alt: string; small?: boolean }) {
  return (
    <div className={`bg-white rounded-md flex items-center justify-center shrink-0 p-2 ${small ? 'w-24 h-12' : 'w-32 h-16'}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {items.map((item) => (
        <span key={item} className="bg-gray-700 text-gray-200 px-2 py-0.5 rounded text-xs">
          {item}
        </span>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto font-mono">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-8">Hola, soy Nacho</h1>
        </div>

        {/* Main content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                Soy Ingeniero Informático, recibido en la UBA (título en trámite). Hoy trabajo desarrollando software en Yieldy, Blue Pampa y GAMU Partners.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Creo en lo importante que es mantenerse un poco despierto y siempre aprendiendo algo nuevo. Por eso en parte arme esta pagina para compartir un poco de esto.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Experiencia</h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.company} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <Logo src={job.logo} alt={`Logo de ${job.company}`} />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-white">{job.role}</h3>
                      <p className="text-orange-400">
                        {job.url ? (
                          <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 underline-offset-4 hover:underline">
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                      </p>
                      <p className="text-gray-400 text-sm mb-2">{job.period}</p>
                      {job.summary && <p className="text-gray-300 text-sm mb-2">{job.summary}</p>}
                      {job.bullets && (
                        <ul className="text-gray-300 space-y-1 text-sm">
                          {job.bullets.map((b) => (
                            <li key={b}>• {b}</li>
                          ))}
                        </ul>
                      )}
                      {job.tech && <Chips items={job.tech} />}
                      {job.clients && (
                        <div className="mt-4 space-y-4">
                          {job.clients.map((client) => (
                            <div key={client.name} className="flex flex-col sm:flex-row gap-3 sm:gap-4 border-l-2 border-gray-700 pl-4">
                              <Logo src={client.logo} alt={`Logo de ${client.name}`} small />
                              <div className="flex-1 min-w-0">
                                <p className="text-white font-medium">
                                  <a href={client.url} target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 underline-offset-4 hover:underline">
                                    {client.name}
                                  </a>
                                  <span className="text-gray-400 font-normal text-sm"> · {client.kind}</span>
                                </p>
                                <ul className="text-gray-300 space-y-1 text-sm mt-1">
                                  {client.bullets.map((b) => (
                                    <li key={b}>• {b}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Experiencia anterior */}
              <div className="bg-gray-800 rounded-lg p-6">
                <div>
                  <h3 className="text-lg font-medium text-white">Tutor Particular</h3>
                  <p className="text-orange-400">Química, Física y Matemática</p>
                  <ul className="text-gray-300 space-y-1 text-sm mt-2">
                    <li>• Apoyo personalizado a estudiantes en niveles secundarios y preuniversitarios</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Educación</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white">Ingeniería Informática</h3>
                  <p className="text-orange-400">Universidad de Buenos Aires - Facultad de Ingeniería (FIUBA)</p>
                  <p className="text-gray-400 text-sm">Recibido · título en trámite</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Bachillerato</h3>
                  <p className="text-orange-400">Holy Cross</p>
                  <p className="text-gray-400 text-sm">2019</p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Habilidades Técnicas</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-6 border-l-2 border-orange-500 pl-3">
                Trabajo principalmente con Claude Code.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-lg font-medium text-white mb-3">{group.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className={`${group.color} text-white px-3 py-1 rounded-full text-sm`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Intereses</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Técnicos</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Matemática y Física</li>
                    <li>• Programación y desarrollo de software</li>
                    <li>• Análisis de datos</li>
                    <li>• Machine Learning</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-3">Personales</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Literatura, música y deportes</li>
                    <li>• Fotografía</li>
                    <li>• Voluntariado social</li>
                    <li>• Enseñanza y tutoría</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Voluntariado */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Voluntariado</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300">• Hospice San Camilo</p>
                    <p className="text-gray-300">• Barrio &quot;El Garrote&quot;</p>
                    <p className="text-gray-300">• Fundación Espartanos</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  Actividades de cuidados paliativos, coordinación de juegos, clases de apoyo escolar y visitas a presos.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contacto</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                Si te interesa colaborar en un proyecto o simplemente charlar de lo que sea, no dudes en contactarme.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:nachoviau@gmail.com"
                  className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
                <a
                  href="https://github.com/nachoviau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nacho-viau-2a47462b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
} 