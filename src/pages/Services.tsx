import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="bg-white min-h-screen">
      <Header className="bg-neutral-900" />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <p className="text-lg text-neutral-700 leading-relaxed mb-10 border-l-4 border-black pl-6">
          «Магазин недвижимости» — подберём для Вас наилучший вариант помещения для аренды или
          приобретения в собственность. Продажа доходных помещений с арендаторами (ГАБ) или для
          Вашего бизнеса.
          <br /><br />
          Специализируемся на работе с коммерческой и жилой недвижимостью города Тольятти с 2009 года.
        </p>

        <p className="text-neutral-700 leading-relaxed mb-12">
          Мы являемся одним из крупнейших агентств, специализирующихся на работе с коммерческой
          недвижимостью в Тольятти. Среди наших клиентов ведущие региональные и федеральные
          ретэйлеры, а также собственники торговых центров и нежилых объектов недвижимости.
          <br /><br />
          Наша компания оказывает широкий спектр услуг, связанных с покупкой, продажей, арендой
          и обменом недвижимости в г. Тольятти.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide mb-6 pb-3 border-b border-neutral-200">
              Коммерческая недвижимость
            </h2>
            <ul className="space-y-4 text-neutral-700">
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Аренда и продажа торгово-офисных, производственно-складских площадей и земельных участков</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Быстрый подбор недвижимости для покупки или аренды</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Выкуп залоговой недвижимости с торгов и аукционов</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Составление инвестиционной стратегии и рекомендации наилучшего использования недвижимости</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Разработка концепции недвижимости и продвижение на рынке</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Юридический анализ, оформление документов и сопровождение сделок</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Независимая оценка объекта</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide mb-6 pb-3 border-b border-neutral-200">
              Жилая недвижимость
            </h2>
            <ul className="space-y-4 text-neutral-700">
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Продажа, покупка и обмен жилья</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Регистрация сделок с недвижимостью и оформление документов</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Полное юридическое сопровождение сделок</span>
              </li>
              <li className="flex gap-3">
                <span className="text-black font-bold mt-0.5">—</span>
                <span>Подготовка документов и проверка юридической чистоты покупаемого жилья</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-block bg-black text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors duration-300"
          >
            На главную
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
