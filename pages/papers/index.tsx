import React, { useState } from 'react';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
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
  analisisMap: { [key: string]: string };
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
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-orange-400 mb-4 flex items-center">
          <span className="mr-2">📖</span>
          Leídos
        </h2>
        <ul className="space-y-3">
          {leidos.map((paper, idx) => (
            <li key={idx}>
              <button
                className={`text-left w-full p-3 rounded-lg transition-all duration-200 ${
                  selectedPaper?.analisis === paper.analisis 
                    ? 'bg-orange-500/20 text-orange-400 font-semibold border border-orange-500/30' 
                    : 'text-blue-400 hover:bg-blue-500/10 hover:text-blue-300'
                }`}
                onClick={() => handleSelectPaper(paper)}
              >
                <div className="text-sm font-medium leading-tight">{paper.titulo}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold text-orange-400 mb-4 flex items-center">
          <span className="mr-2">⏳</span>
          Próximamente...
        </h2>
        <ul className="space-y-3">
          {pendientes.map((paper, idx) => (
            <li key={idx}>
              <a 
                href={paper.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block p-3 rounded-lg text-gray-400 hover:bg-gray-700/50 hover:text-gray-300 transition-all duration-200"
              >
                <div className="text-sm font-medium leading-tight">{paper.titulo}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PapersPage({ pendientes, leidos, analisisMap, analisisInicial, paperSeleccionado }: PapersPageProps) {
  const [selectedPaper, setSelectedPaper] = useState<PaperLeido | null>(paperSeleccionado);
  const [analisis, setAnalisis] = useState<string | null>(analisisInicial);

  // Handler para seleccionar un paper leído y cargar su análisis
  const handleSelectPaper = (paper: PaperLeido) => {
    setSelectedPaper(paper);
    // Usar el análisis ya cargado desde el servidor
    setAnalisis(analisisMap[paper.analisis] || null);
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
        <article className="w-full pr-60">
          <div className="mb-6">
            <a href="https://www.nature.com/articles/s41586-021-03819-2.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-semibold">
              <span>Ver PDF original del paper</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          <div className="prose prose-invert max-w-none w-full prose-headings:text-white prose-p:text-gray-200 prose-strong:text-orange-400 prose-a:text-blue-400 prose-a:hover:text-blue-300 prose-blockquote:text-gray-400 prose-code:text-green-400 prose-pre:bg-gray-800 prose-pre:text-gray-200 prose-li:text-gray-200 prose-ul:text-gray-200 prose-ol:text-gray-200">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 className="text-4xl font-bold text-white mt-12 mb-8">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-semibold text-white mt-10 mb-6">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-semibold text-white mt-8 mb-4">{children}</h3>,
                p: ({ children }) => <p className="mb-4 leading-relaxed text-lg text-gray-200">{children}</p>,
                strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                code: ({ children }) => <code className="bg-gray-700 px-2 py-1 rounded text-sm font-mono">{children}</code>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-lg text-gray-200">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-lg text-gray-200">{children}</ol>,
                li: ({ children }) => <li className="text-gray-200 text-lg">{children}</li>,
                blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 mb-4">{children}</blockquote>,
              }}
            >
              {analisis}
            </ReactMarkdown>
          </div>
        </article>
      ) : (
        <div className="text-center text-gray-400 text-xl font-mono mt-16">
          <div className="mb-4">📚</div>
          <div>Seleccioná un paper leído para ver el análisis.</div>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const papersPath = path.join(process.cwd(), 'posts', 'papers.json');
  const papersRaw = fs.readFileSync(papersPath, 'utf8');
  const papers: PapersData = JSON.parse(papersRaw);

  // Cargar todos los análisis markdown en el servidor
  const analisisMap: { [key: string]: string } = {};
  
  for (const paper of papers.leidos) {
    try {
      const analisisPath = path.join(process.cwd(), 'posts', paper.analisis);
      if (fs.existsSync(analisisPath)) {
        analisisMap[paper.analisis] = fs.readFileSync(analisisPath, 'utf8');
      }
    } catch (error) {
      console.error(`Error loading ${paper.analisis}:`, error);
    }
  }

  return {
    props: {
      pendientes: papers.pendientes,
      leidos: papers.leidos,
      analisisMap,
      analisisInicial: null,
      paperSeleccionado: null,
    },
  };
} 