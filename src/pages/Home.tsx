import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      
      <div className="bg-[#171a21] p-8 md:p-12 rounded-3xl shadow-2xl border border-white/5 max-w-4xl relative overflow-hidden">
        {/* Efeito visual de fundo na caixa */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#66c0f4] to-[#1b98e0]"></div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Qualidade de Software na Prática
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Bem-vindo ao projeto de análise da plataforma <strong>Steam</strong>. 
          Aqui, avaliamos o software da Valve Corporation através das lentes do modelo 
          padrão internacional <span className="text-[#66c0f4] font-semibold">ISO/IEC 25010</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
          <Link 
            to="/pilares" 
            className="bg-[#66c0f4] hover:bg-[#1b98e0] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(102,192,244,0.4)] hover:shadow-[0_0_25px_rgba(102,192,244,0.6)] transform hover:-translate-y-1 text-lg"
          >
            Explorar a Análise
          </Link>
          <Link 
            to="/resumo" 
            className="bg-transparent border-2 border-white/20 hover:border-white/50 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-lg"
          >
            Ver Conclusão Geral
          </Link>
        </div>
      </div>

    </div>
  );
}