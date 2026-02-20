import { Link } from 'react-router-dom';
import type { AnaliseIso } from '../data';

interface Props {
  dados: AnaliseIso;
}

export function CardAnalise({ dados }: Props) {
  return (
    <Link to={`/pilar/${dados.id}`} className="block bg-white/5 rounded-2xl p-6 shadow-[0_8px_25px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]">
      <h2 className="text-xl font-bold border-l-4 border-[#66c0f4] pl-3 mb-3 text-white">
        {dados.id}. {dados.titulo}
      </h2>
      <p className="text-gray-300 mb-3">
        {dados.descricao}
      </p>
      <p className="text-gray-100">
        <strong className="text-[#66c0f4]">Conclusão:</strong> {dados.conclusao}
      </p>
    </Link>
  );
}