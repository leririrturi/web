import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 w-full px-4 py-5 sm:px-8 sm:py-6 md:px-12 md:py-8 lg:px-20 lg:py-10 flex justify-between items-center z-50 mix-blend-difference">
        <h2 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide">Fedor Zaitsev</h2>
        <a
          href="https://www.skema.edu/en"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-widest text-gray-300 hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-1"
        >
          SKEMA x EADA
        </a>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[75vh] sm:min-h-[85vh] lg:min-h-screen flex flex-col justify-center items-center lg:items-start px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 pt-32 pb-20">
          <div className="max-w-5xl z-10 text-center lg:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.1] mb-6 sm:mb-8 text-balance">
              Цифровая трансформация малого бизнеса.
            </h1>
            <p className="font-sans text-lg sm:text-xl md:text-2xl xl:text-3xl text-gray-300 max-w-2xl xl:max-w-4xl leading-relaxed mb-10 sm:mb-12">
              Бесплатно разрабатываю сайты для малого бизнеса в рамках персонального проекта в Global BBA SKEMA x EADA.
            </p>
          </div>

          {/* Abstract Design Element / Accent */}
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>

        {/* About Section */}
        <section className="relative py-20 sm:py-32 px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 bg-white text-black">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-16 md:gap-24">
            <div className="w-full lg:w-1/2 max-w-md lg:max-w-none mx-auto lg:mx-0">
              <div className="aspect-[3/4] overflow-hidden bg-gray-200 rounded-lg sm:rounded-none">
                <img
                  src="/img/fedor.jpg"
                  alt="Fedor Zaitsev"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8">Обо мне</h2>
              <div className="font-sans text-base sm:text-lg md:text-xl xl:text-2xl text-gray-800 leading-relaxed space-y-4 sm:space-y-6">
                <p>
                  Меня зовут <strong>Федор Зайцев</strong>, я студент программы Global BBA SKEMA x EADA,
                  исследователь цифровых технологий и начинающий веб-разработчик.
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
      <footer className="py-12 sm:py-20 px-4 sm:px-8 md:px-20 lg:px-32 xl:px-48 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 border-t border-white/10">
        <h3 className="font-serif text-xl sm:text-2xl xl:text-3xl text-center md:text-left">Связь со мной</h3>

        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-6 md:gap-8 font-sans text-sm sm:text-base xl:text-lg">
          <a href="mailto:fedor.zaitsev@skema.edu" className="hover:text-gray-300 transition-colors">
            <span>fedor.zaitsev@skema.edu</span>
          </a>
          <span className="hidden sm:inline text-white/20">|</span>
          <a href="https://wa.me/34611883206" className="hover:text-gray-300 transition-colors">
            <span>WhatsApp</span>
          </a>
          <span className="hidden sm:inline text-white/20">|</span>
          <a href="https://www.linkedin.com/in/fedor-zaitsev-643316404/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
            <span>LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
