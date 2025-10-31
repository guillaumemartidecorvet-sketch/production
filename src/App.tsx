import { useState } from 'react';
import { X } from 'lucide-react';

const products = [
  { id: 1, name: 'Gagne ton Dofus Ivoire', subtitle: 'Ivoire', image: '/boutiquelogo1.png', command: '!shop buy dofusivoire', points: 12500 },
  { id: 2, name: 'Gagne ton Dofus ébène', subtitle: '9 à 12 Dommages', image: '/boutiquelogo2.png', command: '!shop buy dofusebene', points: 9500 },
  { id: 3, name: 'Gagne ton Dofus ébène', subtitle: '12 à 14 Dommages', image: '/boutiquelogo3.png', command: '!shop buy dofusebene2', points: 14500 },
  { id: 4, name: 'Gagne ton EXO PA', subtitle: 'Sous-Bois - Gladia - Cape ToT', image: '/boutiquelogo4.png', command: '!shop buy itemspa', points: 7500 },
  { id: 5, name: 'Gagne ton EXO PA', subtitle: "Qu'Tan - Ily (sauf ini) - Frima - Krala", image: '/boutiquelogo5.png', command: '!shop buy itemspa2', points: 10000 },
  { id: 6, name: 'Gagne ta panoplie EXO', subtitle: 'Sous-bois complète', image: '/boutiquelogo6.png', command: '!shop buy pannocmpt', points: 17500 },
  { id: 7, name: 'Gagne ta panoplie EXO', subtitle: 'Gladia complète', image: '/boutiquelogo7.png', command: '!shop buy panogladia', points: 20000 },
  { id: 8, name: 'Gagne ta panoplie EXO', subtitle: "Ily - Qu'Tan EXO PA/PM (sauf ini)", image: '/boutiquelogo8.png', command: '!shop buy itemspanno', points: 30000 },
  { id: 9, name: 'Gagne ton Annolamour', subtitle: 'JP over 14 ini', image: '/boutiquelogo9.png', command: '!shop buy Lamourini', points: 15000 },
  { id: 10, name: 'Gagne ton Dofus Vulbis', subtitle: 'LE Vulbis', image: '/boutiquelogo10.png', command: '!shop buy dofusvulbis', points: 75000 },
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/aniamted_backgorundred.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Title */}
        <div className="flex justify-center mb-16">
  <div className="bg-black/80 border border-gray-800 rounded-lg py-3 px-6">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] tracking-wider">
      Shop de Pro-Duction
    </h1>
  </div>
</div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gradient-to-b from-slate-800/90 to-slate-900/90 rounded-lg p-6 border-2 border-slate-700/50 hover:border-red-500/50 transition-all duration-300 shadow-2xl backdrop-blur-sm"
            >
              <div className="text-center mb-4">
  <div className="bg-black/80 border border-gray-800 rounded-lg py-2 px-4 mb-2">
    <h3 className="text-red-500 font-bold text-lg tracking-wide">
      {product.name}
    </h3>
  </div>
  <p className="text-gray-400 text-sm mt-1 normal-case">
    {product.subtitle}
  </p>
</div>
              <div className="bg-slate-900/50 rounded-lg p-4 mb-6 h-48 flex items-center justify-center border-2 border-black">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="text-gray-500 text-center">Image</div>';
                  }}
                />
              </div>
              <div className="bg-black/80 border border-gray-800 rounded-lg py-3 px-4">
  <div className="flex items-center justify-between gap-3">
    <div className="flex items-center gap-2 text-red-500 font-bold text-lg">
      <img
        src="/tune.png"
        alt="pièce"
        className="w-6 h-6 object-contain"
      />
      <span>{product.points.toLocaleString()} points</span>
    </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/50 uppercase tracking-wide text-sm"
                >
                  Acheter
                </button>
              </div>
            </div>
</div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="relative bg-gradient-to-br from-black via-red-950/30 to-black border-2 border-red-600/50 rounded-xl p-8 max-w-md w-full shadow-2xl shadow-red-900/50">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-red-500">
                {selectedProduct.name}
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                {selectedProduct.subtitle}
              </p>
            </div>
            <p className="text-gray-400 mb-4 text-center">Cliquez pour copier la commande :</p>
            <button
              onClick={() => handleCopyCommand(selectedProduct.command)}
              className="w-full bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-red-400 hover:text-red-300 font-mono text-lg py-4 px-6 rounded-lg border-2 border-red-600/30 hover:border-red-500/50 transition-all duration-300 mb-4"
            >
              {selectedProduct.command}
            </button>
            {copied && (
              <p className="text-green-400 text-center text-sm animate-pulse">
                Commande copiée dans le presse-papier!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
