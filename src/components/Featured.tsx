import { useState } from "react";
import func2url from "../../backend/func2url.json";

export default function Featured() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(func2url["send-email"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, email, text }),
      });
      if (res.ok) {
        setStatus("success");
        setPhone(""); setEmail(""); setText("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/ea3293d6-c573-47ab-b18c-79d38a469788/files/09c5aaed-75b1-4e51-9b33-6eca3fae8cf2.jpg"
            alt="Коммерческий офис в аренду"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
          <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
            На рынке коммерческой недвижимости Тольятти с 2009 года. Более 1000 сделок по аренде и продаже — офисы, склады, торговые площади и производственные помещения под ключ.
          </p>
          <ul className="mb-8 space-y-2 text-neutral-700 text-base">
            <li>— Подбор объекта под ваш бюджет и задачи</li>
            <li>— Юридическое сопровождение сделки</li>
            <li>— Актуальная база объектов без посредников</li>
          </ul>
          <button
            onClick={() => { setOpen(true); setStatus("idle"); }}
            className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
          >
            Оставить заявку
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="bg-white w-full max-w-md p-8 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black text-xl leading-none cursor-pointer"
            >
              ✕
            </button>

            {status === "success" ? (
              <div className="text-center py-8">
                <p className="text-2xl font-bold mb-2">Заявка отправлена!</p>
                <p className="text-neutral-600">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 bg-black text-white px-6 py-2 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold uppercase tracking-tight mb-6">Оставить заявку</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      Телефон <span className="text-black">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      E-mail <span className="text-neutral-400">(необязательно)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@mail.ru"
                      className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-1">
                      Сообщение <span className="text-neutral-400">(необязательно)</span>
                    </label>
                    <textarea
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Опишите, что вас интересует..."
                      rows={3}
                      className="w-full border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-black resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-red-500 text-sm">Ошибка отправки. Попробуйте ещё раз.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-black text-white py-3 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {status === "loading" ? "Отправляем..." : "Отправить заявку"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}