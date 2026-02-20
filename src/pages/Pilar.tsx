import { useParams, Link } from 'react-router-dom';
import { dadosAnalise } from '../data';

export function Pilar() {
  const { id } = useParams();
  const pilar = dadosAnalise.find(p => p.id === Number(id));

  if (!pilar) return <div className="text-center py-10 text-2xl">Pilar não encontrado.</div>;

  return (
    <div className="bg-white/5 rounded-3xl p-8 md:p-10 shadow-2xl max-w-3xl mx-auto border border-white/10 relative overflow-hidden">
      {/* Detalhe visual */}
      <div className="absolute top-0 left-0 w-2 h-full bg-[#66c0f4]"></div>

      <h2 className="text-3xl md:text-4xl font-bold pl-6 mb-6 text-white">
        <span className="text-[#66c0f4] mr-2">0{pilar.id}.</span> {pilar.titulo}
      </h2>
      
      <p className="text-gray-300 mb-8 text-lg leading-relaxed pl-6">
        {pilar.descricao}
      </p>
      
      <div className="pl-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
          Exemplos na Steam:
        </h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2 marker:text-[#66c0f4]">
          {pilar.exemplosPraticos.map((exemplo, index) => (
            <li key={index} className="pl-2">{exemplo}</li>
          ))}
        </ul>
      </div>

      <div className="bg-[#171a21] p-6 rounded-xl border border-[#66c0f4]/20 ml-6 shadow-inner">
        <p className="text-gray-100 text-lg">
          <strong className="text-[#66c0f4] uppercase tracking-wider text-sm block mb-1">Conclusão da Análise</strong> 
          {pilar.conclusao}
        </p>
      </div>

      <div className="mt-10 text-center">
         <Link to="/pilares" className="inline-block border border-white/20 hover:bg-white/10 text-white py-2 px-6 rounded-lg transition-colors font-semibold">
            ← Voltar para a lista de Pilares
         </Link>
      </div>
    </div>
  );
}