import { dadosAnalise } from '../data';
import { CardAnalise } from '../components/CardAnalise';

export function Pilares() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-white text-center md:text-left">Pilares Analisados</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {dadosAnalise.map((item) => (
          <CardAnalise key={item.id} dados={item} />
        ))}
      </div>
    </div>
  );
}