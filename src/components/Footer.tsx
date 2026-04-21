export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-20">
              <div className="flex flex-col gap-1 text-sm sm:text-base">
                <p className="text-neutral-400 uppercase text-xs mb-1">Контакты</p>
                <p className="text-white">Самарская обл., Тольятти, ул. Карла Маркса, 82</p>
                <a href="tel:+78482632701" className="text-white hover:text-neutral-400 transition-colors duration-300">+7 (8482) 63-27-01</a>
                <a href="mailto:mn-tlt@mail.ru" className="text-white hover:text-neutral-400 transition-colors duration-300">mn-tlt@mail.ru</a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-neutral-400 uppercase text-xs mb-1">Перейти</p>
                <a
                  href="#services"
                  className="border border-white text-white px-4 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 text-center"
                >
                  Услуги
                </a>
                <a
                  href="https://www.avito.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-4 py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 text-center"
                >
                  Смотреть объекты на Avito
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[11vw] sm:text-[10vw] lg:text-[9vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                МАГАЗИН НЕДВИЖИМОСТИ
              </h1>
              <p className="text-white text-sm sm:text-base">{new Date().getFullYear()} Магазин недвижимости</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}