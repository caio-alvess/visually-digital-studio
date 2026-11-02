import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";
import heroStudio from "@/assets/hero-studio.jpg";

const TITLE = "Visually | Agência de marketing digital";
const DESCRIPTION =
  "Redes sociais, anúncios, vídeo, identidade visual e marketing político. Estratégia clara e relatório semanal com números.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { lang: "pt-BR" }, body: {} } },
  component: Index,
});

const WHATSAPP = "5500000000000";
const wa = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

const btnBase =
  "group inline-flex shrink-0 items-center justify-center gap-3 rounded-full font-semibold transition-all outline-none focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:ring-offset-2";
const btnPrimary = `${btnBase} h-14 px-8 text-base bg-primary text-primary-foreground hover:brightness-110 hover:-translate-y-0.5 shadow-[0_10px_40px_-10px_var(--primary)]`;
const btnOutline = `${btnBase} h-12 px-8 text-sm border border-foreground/25 text-foreground hover:border-primary hover:text-primary`;

function WhatsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
    </svg>
  );
}

function CtaPrimary({ text, label }: { text: string; label: string }) {
  return (
    <a className={btnPrimary} href={wa(text)} rel="noopener noreferrer" target="_blank">
      <WhatsIcon />
      {label}
      <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
    </a>
  );
}

const SEGMENTS = [
  "Comércio local",
  "Clínicas e saúde",
  "E-commerce",
  "Restaurantes",
  "Imobiliárias",
  "Advogados e consultores",
  "Educação",
  "Campanhas políticas",
];

const SERVICES = [
  ["Estratégia e posicionamento", "Definimos para quem você vende, o que te diferencia e como dizer isso em uma frase que o cliente entende e lembra."],
  ["Gestão de redes sociais", "Calendário, roteiro, design e publicação. Você aprova, a gente posta. Presença constante, sem sumir por semanas."],
  ["Vídeo e conteúdo", "Reels, depoimentos, bastidores e vídeos de produto gravados e editados para segurar a atenção nos primeiros segundos."],
  ["Tráfego pago", "Anúncios no Meta e no Google para o público certo, com orçamento controlado e relatório de quanto custou cada contato."],
  ["Identidade visual e site", "Logo, cores, materiais e páginas de venda que deixam sua marca reconhecível e fácil de contratar."],
  ["Marketing político", "Pré-campanha, campanha e mandato, dentro das regras do TSE. Uma das áreas em que temos mais experiência."],
];

const STEPS = [
  ["Diagnóstico", "Uma conversa pelo WhatsApp sobre o seu negócio, seu público e onde você está hoje. Sem custo e sem compromisso."],
  ["Plano", "Você recebe por escrito: público, mensagem, canais, cronograma e investimento. Sabe o que vai ser feito antes de começar."],
  ["Execução", "Nossa equipe cria, publica e anuncia. Você aprova o que vai ao ar e volta a cuidar do seu negócio."],
  ["Ajuste semanal", "Toda semana olhamos os números juntos. O que traz resultado recebe mais verba; o que não traz, sai."],
];

const AUDIENCES = [
  ["Empresas e marcas", "Quer vender mais, aparecer para quem está procurando e parar de depender só de indicação.", "Olá! Tenho uma empresa e quero entender como a Visually pode me ajudar."],
  ["Profissionais e especialistas", "Médico, advogado, consultor ou criador: quer ser a referência da sua área na sua cidade.", "Olá! Sou profissional autônomo e quero entender como a Visually pode me ajudar."],
  ["Política", "Pré-candidato, candidato ou mandato: quer ser conhecido, ser entendido e chegar ao eleitor certo.", "Olá! Trabalho com política e quero entender como a Visually pode me ajudar."],
];

const FAQ = [
  ["Que tipo de cliente vocês atendem?", "Empresas de todos os tamanhos, profissionais liberais, marcas pessoais e campanhas políticas. Se você precisa ser encontrado e escolhido na internet, a gente consegue ajudar."],
  ["Preciso já ter redes sociais funcionando?", "Não. Podemos começar do zero, com identidade, perfis e primeiros conteúdos, ou assumir o que você já tem e organizar."],
  ["Quanto custa?", "Depende do que você precisa e do tamanho do seu mercado. Por isso começamos com um diagnóstico gratuito e mandamos uma proposta sob medida, sem pacote engessado."],
  ["Em quanto tempo vejo resultado?", "Anúncios trazem os primeiros contatos já nas primeiras semanas. Reconhecimento de marca leva mais tempo e depende de constância."],
  ["Vocês atendem fora da minha cidade?", "Sim. Atendemos clientes em todo o Brasil, com reuniões online e, quando faz sentido, equipe de gravação no local."],
  ["Como funciona o marketing político?", "É uma área com regras próprias. Seguimos as resoluções do TSE em toda peça e anúncio e trabalhamos da pré-campanha ao mandato."],
];

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="min-h-screen overflow-x-clip bg-background text-foreground">
        <Header />
        <Hero />
        <div className="overflow-hidden border-y border-border bg-primary py-4 text-primary-foreground">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-lg font-bold uppercase tracking-wide">
            {[0, 1].map((k) => (
              <div className="flex gap-10" key={k} aria-hidden={k === 1 ? true : undefined}>
                {SEGMENTS.map((s) => (
                  <span className="flex items-center gap-10" key={s}>{s}<span>✦</span></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Postar todo dia <span className="font-serif font-normal italic text-primary">não é estratégia.</span></h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>Muito negócio bom passa despercebido na internet. Não por falta de qualidade, mas porque ninguém encontra, ou encontra e não entende o que ele oferece.</p>
              <p>Anunciar sem público definido é gastar à toa. Contratar um designer, um editor e um gestor de anúncios separados é passar o dia coordenando gente.</p>
              <p className="text-foreground">O que funciona é simples: mensagem clara, presença constante e anúncio para a pessoa certa. É isso que a gente faz.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card py-24 md:py-32" id="servicos">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="max-w-2xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">Todo o seu marketing, <span className="text-gold">numa equipe só.</span></h2>
              <p className="max-w-sm text-muted-foreground">Um contato, uma estratégia, um responsável. Você não precisa juntar cinco fornecedores.</p>
            </div>
            <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(([title, text], i) => (
                <article className="group border-b border-r border-border p-8 transition-colors hover:bg-secondary md:p-10" key={title}>
                  <span className="font-serif text-4xl italic text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 font-display text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32" id="metodo">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Como funciona</p>
          <h2 className="max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">Do primeiro contato ao resultado, em 4 passos.</h2>
          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([title, text], i) => (
              <li className="relative border-t-2 border-primary pt-6" key={title}>
                <span className="font-display text-sm font-bold text-primary">Passo {i + 1}</span>
                <h3 className="mt-2 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14">
            <CtaPrimary text="Olá! Quero começar pelo passo 1: o diagnóstico gratuito." label="Quero meu diagnóstico gratuito" />
          </div>
        </section>

        <section className="bg-paper py-24 text-paper-foreground md:py-32" id="quem-somos">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <img className="aspect-[4/5] w-full rounded-2xl object-cover" src="/site-assets/de4210a9bba75c7a.webp" srcSet="/site-assets/a6c8d1b1ec0b41b9.webp 480w, /site-assets/f42a01ac8b2f13bc.webp 800w, /site-assets/de4210a9bba75c7a.webp 1200w" alt="Equipe da Visually reunida planejando a estratégia de um cliente" sizes="(min-width: 1024px) 50vw, 100vw" loading="lazy" decoding="async" width="1200" height="1408" />
              <img className="absolute -bottom-8 -right-4 h-28 w-28 rounded-2xl bg-background object-contain p-3 shadow-2xl md:-right-8 md:h-36 md:w-36" src="/site-assets/8fc2f5449311cd6d.webp" alt="" loading="lazy" decoding="async" width="288" height="284" />
            </div>
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em]">Quem somos</p>
              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Uma equipe completa, <span className="font-serif font-normal italic">sem intermediário.</span></h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed opacity-80">
                <p>A Visually é uma agência de marketing digital. Juntamos estrategistas, redatores, designers, editores de vídeo e gestores de tráfego no mesmo time.</p>
                <p>Atendemos empresas, profissionais e marcas pessoais, e temos uma área dedicada a campanhas políticas. Em todos os casos, você fala direto com quem faz o trabalho.</p>
              </div>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {["Atendimento direto pelo WhatsApp", "Relatório semanal com números", "Criação e anúncios no mesmo time", "Sigilo sobre sua estratégia"].map((t) => (
                  <li className="flex items-start gap-3 font-semibold" key={t}><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-paper-foreground text-xs text-paper">✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32" id="para-quem">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Para quem</p>
          <h2 className="mb-14 max-w-3xl font-display text-4xl font-extrabold tracking-tight md:text-5xl">Qual é o seu caso?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {AUDIENCES.map(([title, text, msg]) => (
              <a className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary" href={wa(msg)} rel="noopener noreferrer" target="_blank" key={title}>
                <h3 className="font-display text-3xl font-extrabold">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-8 inline-flex items-center gap-2 font-bold text-primary"><WhatsIcon className="h-4 w-4" /> Conversar agora <span className="transition-transform group-hover:translate-x-1">→</span></span>
              </a>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-card py-24 md:py-32" id="faq">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">Perguntas <span className="font-serif font-normal italic text-primary">frequentes.</span></h2>
              <p className="mt-5 text-muted-foreground">Sua dúvida não está aqui? Pergunte direto pra gente.</p>
              <div className="mt-8">
                <a className={btnOutline} href={wa("Olá! Tenho uma dúvida sobre o trabalho da Visually.")} rel="noopener noreferrer" target="_blank"><WhatsIcon />Tirar minha dúvida<span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {FAQ.map(([q, a]) => (
                <details className="group py-6" key={q}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold md:text-xl">{q}<span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">+</span></summary>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="grain relative overflow-hidden py-28 md:py-40">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <img className="mx-auto mb-10 h-32 w-32 object-contain drop-shadow-[0_0_30px_var(--primary)] md:h-40 md:w-40" src="/site-assets/ca51e846d6087d5e.webp" alt="Logo Visually" loading="lazy" decoding="async" width="320" height="316" />
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">Peça seu diagnóstico gratuito. <span className="block font-serif font-normal italic text-gold">Leva 20 minutos.</span></h2>
            <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground">Chame no WhatsApp e conte o que você vende e para quem. Você sai da conversa sabendo o que fazer primeiro, fechando com a gente ou não.</p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <CtaPrimary text="Olá! Quero meu diagnóstico gratuito com a Visually." label="Quero meu diagnóstico gratuito" />
              <span className="text-sm text-muted-foreground">Resposta em até 1 dia útil · sem compromisso</span>
            </div>
          </div>
        </section>

        <footer className="border-t border-border py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row md:px-10">
            <div className="flex items-center gap-3">
              <img className="h-8 w-8 object-contain" src="/site-assets/c90fc2b2a740d3e4.webp" alt="" loading="lazy" decoding="async" width="64" height="63" />
              <span className="font-display font-bold text-foreground">VISUALLY</span>
              <span>Marketing digital</span>
            </div>
            <p>© 2026 Visually Mídia. Todos os direitos reservados.</p>
          </div>
        </footer>
        <a className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-2xl transition-transform hover:scale-110" aria-label="Falar no WhatsApp" href={wa("Olá! Vim pelo site da Visually e quero conversar.")} rel="noopener noreferrer" target="_blank">
          <WhatsIcon className="h-7 w-7" />
        </a>
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <a className="flex items-center gap-3" aria-label="Visually — início" href="#topo">
          <img className="h-12 w-12 object-contain drop-shadow-[0_0_14px_var(--primary)] md:h-14 md:w-14" src="/site-assets/e833cb2744300f41.webp" alt="" loading="eager" decoding="async" width="112" height="110" />
          <span className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">VISUALLY<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-muted-foreground lg:flex">
          <a className="hover:text-foreground" href="#servicos">Serviços</a>
          <a className="hover:text-foreground" href="#metodo">Como funciona</a>
          <a className="hover:text-foreground" href="#para-quem">Para quem</a>
          <a className="hover:text-foreground" href="#faq">Dúvidas</a>
        </nav>
        <a className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:brightness-110 md:px-5" href={wa("Olá! Vim pelo site da Visually e quero conversar.")} rel="noopener noreferrer" target="_blank">
          <WhatsIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-end pt-20" id="topo">
      <img className="absolute inset-0 h-full w-full object-cover" src={heroStudio} alt="Criadora gravando vídeo de produto enquanto colega acompanha os resultados dos anúncios" loading="eager" fetchPriority="high" decoding="async" width={1920} height={1200} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
        <img className="mb-8 h-24 w-24 object-contain drop-shadow-[0_0_30px_var(--primary)] md:h-32 md:w-32" src="/site-assets/ca51e846d6087d5e.webp" alt="Logo Visually" loading="eager" decoding="async" width="320" height="316" />
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Agência de marketing digital</p>
        <h1 className="max-w-5xl font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.5rem]">Marketing digital que <span className="font-serif font-normal italic text-gold">vira cliente.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">Redes sociais, anúncios, vídeo e identidade visual para empresas, profissionais e campanhas políticas. Toda semana você vê os números e sabe para onde foi cada real.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <CtaPrimary text="Olá! Quero um diagnóstico gratuito do meu marketing." label="Quero meu diagnóstico gratuito" />
          <a className={btnOutline} href="#servicos">Ver serviços</a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Resposta em até 1 dia útil · sem compromisso</p>
      </div>
    </section>
  );
}
