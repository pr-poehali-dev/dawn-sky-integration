import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  return (
    <div className="bg-white min-h-screen">
      <Header className="bg-neutral-900" />

      <main className="max-w-2xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-3xl font-bold uppercase tracking-tight mb-12">Контакты</h1>

        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Icon name="MapPin" size={22} className="text-black mt-0.5 shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">Адрес</p>
              <p className="text-neutral-900 text-lg">Самарская обл., Тольятти, ул. Карла Маркса, 82</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Icon name="Phone" size={22} className="text-black mt-0.5 shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">Телефон</p>
              <a
                href="tel:+78482632701"
                className="text-neutral-900 text-lg hover:text-neutral-500 transition-colors duration-300"
              >
                +7 (8482) 63-27-01
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Icon name="Mail" size={22} className="text-black mt-0.5 shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-400 mb-1">E-mail</p>
              <a
                href="mailto:mn-tlt@mail.ru"
                className="text-neutral-900 text-lg hover:text-neutral-500 transition-colors duration-300"
              >
                mn-tlt@mail.ru
              </a>
            </div>
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
