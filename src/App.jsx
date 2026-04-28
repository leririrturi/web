import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference">
        <h2 className="font-serif text-xl md:text-2xl font-semibold tracking-wide">Fedor Zaitsev</h2>
        <a
          href="https://www.skema.edu/en"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs md:text-sm uppercase tracking-widest text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-1"
        >
          SKEMA x EADA
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 pt-32 pb-20">
          <div className="max-w-5xl z-10">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-balance">
              Цифровая трансформация малого бизнеса.
            </h1>
            <p className="font-sans text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-12">
              Бесплатно разрабатываю сайты для малого бизнеса в рамках персонального проекта в Global BBA SKEMA x EADA.
            </p>
          </div>

          {/* Abstract Design Element / Accent */}
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>

        {/* About Section */}
        <section className="relative py-32 px-6 md:px-20 lg:px-32 bg-white text-black">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="w-full md:w-1/2">
              <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                <img
                  src="/img/fedor.jpg"
                  alt="Fedor Zaitsev"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">Обо мне</h2>
              <div className="font-sans text-lg md:text-xl text-gray-800 leading-relaxed space-y-6">
                <p>
                  Меня зовут <strong>Федор Зайцев</strong>, я студент программы Global BBA SKEMA x EADA,
                  исследователь цифровых технологий и начинающийвеб-разработчик.
                </p>
                <p>
                  В рамках своего проекта я изучаю внедрение инноваций в традиционные бизнес-модели.
                  Создавая современные и эффективные цифровые решения, я помогаю малому бизнесу использовать преимущества ИИ.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10">
        <h3 className="font-serif text-2xl">Связь со мной</h3>

        <div className="flex flex-wrap items-center gap-6 md:gap-8 font-sans">
          <a href="mailto:fedor.zaitsev@skema.edu" className="hover:text-gray-300 transition-colors">
            <span>fedor.zaitsev@skema.edu</span>
          </a>
          <span className="hidden md:inline text-white/20">|</span>
          <a href="https://wa.me/34611883206" className="hover:text-gray-300 transition-colors">
            <span>WhatsApp</span>
          </a>
          <span className="hidden md:inline text-white/20">|</span>
          <a href="https://www.linkedin.com/in/fedor-zaitsev-643316404/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            <span>LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
