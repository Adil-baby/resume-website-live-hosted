
import React, { useState } from 'react';
import { Tab, Stat, Repository } from './types';
import { INITIAL_STATS, REPOSITORIES } from './constants';
import { PixelBox } from './components/PixelBox';
import { StatBar } from './components/StatBar';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.PROFILE);
  const [stats] = useState<Stat[]>(INITIAL_STATS);

  const handleSave = () => {
    alert("GAME SAVED TO LOCAL STORAGE (SIMULATED)");
  };

  const renderProfile = () => (
    <>
      {/* Profile Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-4">
          <div className="pixel-border-inset p-2 bg-white flex items-center justify-center">
            <img 
              alt="AVATAR" 
              className="w-full aspect-square object-cover grayscale brightness-125 contrast-150" 
              src="https://picsum.photos/seed/adildev/400/400"
            />
          </div>
        </div>
        <div className="md:col-span-8 pixel-border-inset p-8 flex flex-col justify-center">
          <div className="bg-white text-black text-xl inline-block px-2 self-start mb-4">LEVEL 7 AI DEVELOPER</div>
          <h2 className="text-6xl mb-4 uppercase">ADIL.DEV</h2>
          <p className="text-2xl leading-none opacity-80 mb-6">"CODING IS A JOURNEY, NOT A DESTINATION. BROUGHT TO YOU IN 8-BIT RESOLUTION."</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xl">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined">location_on</span> Kuzhur</div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined">sync</span> STATUS: ACTIVE</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="mb-12">
        <PixelBox title="MAIN STATS">
          {stats.map((stat, idx) => (
            <StatBar key={idx} label={stat.label} value={stat.value} max={stat.max} unit={stat.unit} />
          ))}
        </PixelBox>
      </div>

    </>
  );

  const renderGear = () => (
    <PixelBox title="GEAR">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border-4 border-white p-4">
          <h4 className="text-xl border-b-2 border-white mb-2 pb-2">CPU</h4>
          <div className="text-lg">AMD Ryzen 5 5600H</div>
        </div>
        <div className="border-4 border-white p-4">
          <h4 className="text-xl border-b-2 border-white mb-2 pb-2">GPU</h4>
          <div className="text-lg">NVIDIA RTX 3050</div>
        </div>
        <div className="border-4 border-white p-4">
          <h4 className="text-xl border-b-2 border-white mb-2 pb-2">OS</h4>
          <div className="text-lg">Windows 11 Home</div>
        </div>
        <div className="border-4 border-white p-4">
          <h4 className="text-xl border-b-2 border-white mb-2 pb-2">MEMORY</h4>
          <div className="text-lg">16GB RAM</div>
          <div className="text-lg">512GB SSD</div>
        </div>
        <div className="border-4 border-white p-4">
          <h4 className="text-xl border-b-2 border-white mb-2 pb-2">DISPLAY</h4>
          <div className="text-lg">15.6" FHD</div>
        </div>
        <div className="border-4 border-white p-4">
          <h4 className="text-xl border-b-2 border-white mb-2 pb-2">DEVICE</h4>
          <div className="text-lg">HP Pavilion Gaming Laptop</div>
          <div className="text-sm opacity-75">Model: 15-ec2145AX</div>
        </div>
        <div className="border-4 border-white p-4">
          <h4 className="text-xl border-b-2 border-white mb-2 pb-2">KEYBOARD</h4>
          <div className="text-lg">60% Mechanical Keyboard</div>
          <div className="text-lg">RGB Backlit</div>
        </div>
        <div className="border-4 border-white p-4">
          <h4 className="text-xl border-b-2 border-white mb-2 pb-2">MOUSE</h4>
          <div className="text-lg">3200 DPI</div>
        </div>
      </div>
    </PixelBox>
  );

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 min-h-screen">
      <header className="flex flex-col lg:flex-row justify-between items-center mb-12 pixel-border-inset p-4 gap-4">
        <div 
          className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => setActiveTab(Tab.PROFILE)}
        >
          <span className="material-symbols-outlined !text-5xl">videogame_asset</span>
          <h1 className="text-4xl uppercase tracking-tighter">ADIL_OS v1.0</h1>
        </div>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-2xl">
          {Object.values(Tab).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 uppercase transition-all ${activeTab === tab ? 'bg-white text-black' : 'hover:bg-white/20'}`}
            >
              {tab}
            </button>
          ))}
          <button 
            onClick={handleSave}
            className="bg-white text-black px-4 font-bold border-2 border-black hover:bg-black hover:text-white hover:border-white transition-colors"
          >
            SAVE
          </button>
        </nav>
      </header>

      <main className="transition-all duration-300">
        {activeTab === Tab.PROFILE && renderProfile()}
        {activeTab === Tab.GEAR && renderGear()}
        {activeTab === Tab.ITEMS && (
          <PixelBox title="REPOSITORIES">
            <div className="mb-6">
              <button
                className="text-xl underline hover:opacity-80 transition-opacity"
                onClick={() => setActiveTab(Tab.PROFILE)}
              >
                ← BACK TO PROFILE
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {REPOSITORIES.map((repo) => (
                <div
                  key={repo.id}
                  className="border-4 border-white p-6 hover:bg-white hover:text-black transition-colors cursor-pointer group"
                >
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h4 className="text-2xl mb-3 border-b-2 border-white pb-2 group-hover:border-black transition-colors">
                      {repo.title}
                    </h4>
                    <p className="text-lg opacity-80 leading-tight">
                      {repo.description}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </PixelBox>
        )}
      </main>

      <footer className="pixel-border-inset p-6 mt-12 flex flex-col md:flex-row justify-between items-center text-xl">
        <div className="flex gap-8 mb-4 md:mb-0">
          <a className="hover:scale-125 transition-transform" href="#"><span className="material-symbols-outlined !text-4xl">terminal</span></a>
          <a className="hover:scale-125 transition-transform" href="#"><span className="material-symbols-outlined !text-4xl">code</span></a>
          <a className="hover:scale-125 transition-transform" href="#"><span className="material-symbols-outlined !text-4xl">mail</span></a>
        </div>
        <div className="text-center md:text-right">
          <p>PLAYER ONE: ADIL</p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-red-500 text-2xl">♥</span>
            ))}
          </div>
        </div>
      </footer>

      {/* Retro Status Bar */}
      <div className="fixed bottom-12 left-12 hidden lg:block pointer-events-none">
        <div className="pixel-border-inset p-4 bg-black flex items-center gap-4">
          <div className="w-4 h-4 bg-white animate-pulse"></div>
          <span className="text-2xl uppercase">SELECT START : {activeTab}</span>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
