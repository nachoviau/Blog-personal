import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';

interface PaperPendiente {
  titulo: string;
  link: string;
}

interface PaperLeido {
  titulo: string;
  link: string;
  analisis: string; // nombre del archivo markdown
}

interface PapersData {
  pendientes: PaperPendiente[];
  leidos: PaperLeido[];
}

interface PapersPageProps {
  pendientes: PaperPendiente[];
  leidos: PaperLeido[];
  analisisInicial: string | null;
  paperSeleccionado: PaperLeido | null;
}

function Sidebar({ pendientes, leidos, selectedPaper, handleSelectPaper }: {
  pendientes: PaperPendiente[];
  leidos: PaperLeido[];
  selectedPaper: PaperLeido | null;
  handleSelectPaper: (paper: PaperLeido) => void;
}) {
  return (
    <div className="p-4">
      <div className="mb-10">
        <h2 className="text-lg font-bold text-orange-400 mb-2">Pendientes</h2>
        <ul className="space-y-2">
          {pendientes.map((paper, idx) => (
            <li key={idx}>
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                {paper.titulo}
              </a>
            </li>
          ))}
        </ul>
      </div>
              <div>
        <h2 className="text-lg font-bold text-orange-400 mb-2">Leídos</h2>
        <ul className="space-y-2">
          {leidos.map((paper, idx) => (
            <li key={idx}>
              <button
                className={`text-left w-full hover:underline ${selectedPaper?.analisis === paper.analisis ? 'text-orange-400 font-bold' : 'text-blue-400'}`}
                onClick={() => handleSelectPaper(paper)}
              >
                {paper.titulo}
              </button>
            </li>
                  ))}
        </ul>
                </div>
            </div>
  );
}

export default function PapersPage({ pendientes, leidos, analisisInicial, paperSeleccionado }: PapersPageProps) {
  const [selectedPaper, setSelectedPaper] = useState<PaperLeido | null>(paperSeleccionado);
  const [analisis, setAnalisis] = useState<string | null>(analisisInicial);

  // Handler para seleccionar un paper leído y cargar su análisis
  const handleSelectPaper = async (paper: PaperLeido) => {
    setSelectedPaper(paper);
    // Fetch del análisis markdown
    const res = await fetch(`/posts/${paper.analisis}`);
    const text = await res.text();
    setAnalisis(text);
  };

  const sidebarContent = (
    <Sidebar 
      pendientes={pendientes} 
      leidos={leidos} 
      selectedPaper={selectedPaper} 
      handleSelectPaper={handleSelectPaper} 
    />
  );

  return (
    <Layout sidebar={sidebarContent}>
      {/* Sidebar mobile */}
      <aside className="sm:hidden w-full bg-gray-900 border-b border-gray-800 py-6 px-4 mb-6">
        <Sidebar pendientes={pendientes} leidos={leidos} selectedPaper={selectedPaper} handleSelectPaper={handleSelectPaper} />
      </aside>
      {/* Panel principal */}
      {selectedPaper && analisis ? (
        <article>
          <h1 className="text-3xl font-bold mb-4 text-white font-mono">{selectedPaper.titulo}</h1>
          <a href={selectedPaper.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mb-6 block">
            Ver paper original
          </a>
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{analisis}</ReactMarkdown>
        </div>
        </article>
      ) : (
        <div className="text-gray-400 text-xl font-mono mt-16">Seleccioná un paper leído para ver el análisis.</div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const papersPath = path.join(process.cwd(), 'posts', 'papers.json');
  const papersRaw = fs.readFileSync(papersPath, 'utf8');
  const papers: PapersData = JSON.parse(papersRaw);

  // Por defecto, no se selecciona ningún paper
  let analisisInicial = null;
  let paperSeleccionado = null;

  // Si hay leídos, podés setear el primero como seleccionado por defecto (opcional)
  // if (papers.leidos.length > 0) {
  //   const first = papers.leidos[0];
  //   const analisisPath = path.join(process.cwd(), 'posts', first.analisis);
  //   analisisInicial = fs.readFileSync(analisisPath, 'utf8');
  //   paperSeleccionado = first;
  // }

    return {
      props: {
      pendientes: papers.pendientes,
      leidos: papers.leidos,
      analisisInicial,
      paperSeleccionado,
      },
    };
} 