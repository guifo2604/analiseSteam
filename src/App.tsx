import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Pilares } from './pages/Pilares';
import { Pilar } from './pages/Pilar';
import { Resumo } from './pages/Resumo';

function App() {
  const location = useLocation();

  const isLinkActive = (path: string) => {
    return location.pathname === path ? "text-white border-b-2 border-[#66c0f4] pb-1" : "text-[#66c0f4] hover:text-white pb-1";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1b2838] to-[#2a475e] text-white font-sans">
      
      <header className="py-6 px-5 text-center bg-[#171a21]/80 backdrop-blur-md sticky top-0 z-50 border-b border-white/10 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wider mb-4 flex items-center justify-center gap-3">
          <img src="../src/assets/pngegg.png" className='w-50 h-10'/>
          Análise Steam
        </h1>
        
        {/* Menu de Navegação Atualizado */}
        <nav className="flex justify-center gap-6 md:gap-10">
          <Link to="/" className={`transition-colors font-semibold uppercase tracking-wider text-sm ${isLinkActive('/')}`}>
            Início
          </Link>
          <Link to="/pilares" className={`transition-colors font-semibold uppercase tracking-wider text-sm ${isLinkActive('/pilares')}`}>
            Os 8 Pilares
          </Link>
          <Link to="/resumo" className={`transition-colors font-semibold uppercase tracking-wider text-sm ${isLinkActive('/resumo')}`}>
            Resumo Geral
          </Link>
        </nav>
      </header>

      {/* Container de Rotas */}
      <main className="flex-grow w-full max-w-6xl mx-auto my-12 px-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pilares" element={<Pilares />} />
          <Route path="/pilar/:id" element={<Pilar />} />
          <Route path="/resumo" element={<Resumo />} />
        </Routes>
      </main>

      <footer className="text-center py-8 bg-[#171a21] mt-auto border-t border-white/5">
        <p className="text-gray-400 text-sm">
          © 2026 - Avaliação Acadêmica baseada na ISO/IEC 25010
        </p>
      </footer>
      
    </div>
  );
}

export default App;