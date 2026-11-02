import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Visually | Marketing político que transforma nome em voto" }] }),
  staticData: { importedDocument: { html: { "lang": "pt-BR" }, body: {  } } },
  component: Index,
});

function Index() {
  return (
    <>
      <style>{capturedCSS}</style>
      <div className="min-h-screen overflow-x-clip bg-background text-foreground">
        <ImportedHeader />
        <ImportedSectionNinguMVotaEm />
        <div className={"overflow-hidden \x62order-y \x62order-border \x62g-primary py-4 text-primary-foreground"}>
          <div className={"\x61nimate-marquee flex w-max gap-10 whitespace-nowrap \x66ont-display text-lg font-bold uppercase tracking-wide"}>
            <div className="flex gap-10">
              <span className="flex items-center gap-10">Vereador<span>✦</span></span>
              <span className="flex items-center gap-10">Prefeito<span>✦</span></span>
              <span className="flex items-center gap-10">Deputado<span>✦</span></span>
              <span className="flex items-center gap-10">Senador<span>✦</span></span>
              <span className="flex items-center gap-10">Governador<span>✦</span></span>
              <span className="flex items-center gap-10">Mandatos<span>✦</span></span>
              <span className="flex items-center gap-10">Pré-campanha<span>✦</span></span>
            </div>
            <div className="flex gap-10" aria-hidden="true">
              <span className="flex items-center gap-10">Vereador<span>✦</span></span>
              <span className="flex items-center gap-10">Prefeito<span>✦</span></span>
              <span className="flex items-center gap-10">Deputado<span>✦</span></span>
              <span className="flex items-center gap-10">Senador<span>✦</span></span>
              <span className="flex items-center gap-10">Governador<span>✦</span></span>
              <span className="flex items-center gap-10">Mandatos<span>✦</span></span>
              <span className="flex items-center gap-10">Pré-campanha<span>✦</span></span>
            </div>
          </div>
        </div>
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <h2 className={"\x66ont-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"}>Boas propostas perdem eleição <span className={"\x66ont-serif font-normal italic text-primary"}>todos os anos.</span></h2>
            <div className={"\x73pace-y-6 text-lg leading-relaxed text-muted-foreground"}>
              <p>Não por falta de competência. Perdem porque o eleitor nunca ouviu falar delas — ou ouviu do jeito errado, na hora errada.</p>
              <p>Postar foto de evento não é estratégia. Impulsionar sem segmentação é queimar verba. E começar na última hora custa caro.</p>
              <p className="text-foreground">Campanha vencedora tem mensagem clara, presença constante e cada real investido no eleitor certo. É exatamente isso que montamos com você.</p>
            </div>
          </div>
        </section>
        <ImportedSectionTudoQueSuaCampanha />
        <ImportedSectionDoPrimeiroOiAo />
        <ImportedSectionGenteDeComunicaO />
        <ImportedSection />
        <ImportedSectionPerguntasFrequentes />
        <ImportedSectionAEleiON />
        <footer className={"\x62order-t \x62order-border py-10"}>
          <div className={"mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground \x6dd:\x66lex-row md:px-10"}>
            <div className="flex items-center gap-3">
              <img className="h-8 w-8 object-contain" src="/site-assets/c90fc2b2a740d3e4.webp" alt="" loading="lazy" decoding="async" width="64" height="63" />
              <span className={"\x66ont-display font-bold text-foreground"}>VISUALLY</span>
              <span>Marketing político</span>
            </div>
            <p>© 2026 Visually Mídia. Todos os direitos reservados.</p>
          </div>
        </footer>
        <a className={"fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full \x62g-whatsapp text-primary-foreground \x73hadow-2xl transition-transform \x68over:\x73cale-110"} aria-label="Falar no WhatsApp" href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Visually%20e%20quero%20conversar%20sobre%20minha%20campanha." rel="noopener noreferrer" target="_blank">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
          </svg>
        </a>
      </div>
    </>
  );
}

function ImportedHeader() {
  return (
    <header className={"fixed \x69nset-x-0 top-0 z-50 \x62order-b \x62order-border \x62g-background/\x380 \x62ackdrop-blur-md"}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <a className="flex items-center gap-3" aria-label="Visually — início" href="#topo">
          <img className={"h-12 w-12 object-contain \x64rop-shadow-[\x30_0_14px_var(\x2d-primary)] md:h-14 md:w-14"} src="/site-assets/e833cb2744300f41.webp" alt="" loading="eager" decoding="async" width="112" height="110" />
          <span className={"\x66ont-display text-2xl font-extrabold tracking-tight md:text-3xl"}>VISUALLY<span className="text-primary">.</span></span>
        </a>
        <nav className={"hidden items-center gap-8 text-sm font-semibold text-muted-foreground \x6cg:\x66lex"}>
          <a className="hover:text-foreground" href="#servicos">O que fazemos</a>
          <a className="hover:text-foreground" href="#metodo">Método</a>
          <a className="hover:text-foreground" href="#quem-somos">Quem somos</a>
          <a className="hover:text-foreground" href="#faq">Dúvidas</a>
        </nav>
        <a className={"inline-flex items-center gap-2 rounded-full \x62g-primary px-4 py-2.5 text-sm font-bold text-primary-foreground \x68over:\x62rightness-110 md:px-5"} href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Visually%20e%20quero%20conversar%20sobre%20minha%20campanha." rel="noopener noreferrer" target="_blank">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
          </svg>
          <span className={"hidden \x73m:\x69nline"}>Falar no WhatsApp</span>
          <span className={"\x73m:\x68idden"}>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function ImportedSectionNinguMVotaEm() {
  return (
    <section className="grain relative flex min-h-[100svh] items-end pt-20" id="topo">
      <img className="absolute inset-0 h-full w-full object-cover" src="/site-assets/089b8ba0878dc157.webp" srcSet="/site-assets/85936446efd78cb6.webp 640w, /site-assets/ca69682e6d0e1169.webp 1024w, /site-assets/089b8ba0878dc157.webp 1600w" alt="Multidão em comício ao entardecer com celulares erguidos" sizes="100vw" loading="eager" fetchPriority="high" decoding="async" width="1600" height="1008" />
      <div className={"absolute inset-0 \x62g-gradient-to-t \x66rom-background \x76ia-background/\x385 \x74o-background/\x330"} />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
        <p className={"mb-6 inline-flex items-center gap-2 rounded-full \x62order \x62order-primary/\x340 \x62g-background/\x360 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary"}><span className={"h-1.5 w-1.5 rounded-full \x62g-primary"} /> Marketing político</p>
        <h1 className={"max-w-5xl \x66ont-display text-[2.6rem] font-extrabold leading-[0.95] tracking-tight sm:text-6xl \x6cg:\x74ext-[\x35.\x35rem]"}>Ninguém vota em quem <span className={"\x66ont-serif font-normal italic text-gold"}>não conhece.</span></h1>
        <p className={"mt-7 max-w-2xl text-lg leading-relaxed \x74ext-foreground/\x380 md:text-xl"}>A Visually faz seu nome ser lembrado, sua proposta ser entendida e sua campanha chegar ao eleitor certo — com estratégia, conteúdo e tráfego que respeitam a lei eleitoral.</p>
        <div className={"mt-10 flex flex-col gap-4 \x73m:\x66lex-row \x73m:\x69tems-center"}>
          <a className={"h-12 px-8 py-3.5 text-sm inline-flex shrink-0 items-center justify-center gap-3 rounded-full font-semibold transition-all \x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-(\x2d-gold) \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 \x62g-primary text-primary-foreground \x68over:\x62rightness-110 \x68over:\x2dtranslate-y-0.\x35 \x73hadow-[\x30_10px_40px_-10px_var(\x2d-primary)]"} href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20um%20diagn%C3%B3stico%20gratuito%20da%20minha%20campanha." rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" /></svg>Quero meu diagnóstico gratuito<span className={"transition-transform \x67roup-hover:\x74ranslate-x-1"} aria-hidden="true">→</span></a>
          <span className="text-sm text-muted-foreground">Resposta em até 1 dia útil · sem compromisso</span>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionTudoQueSuaCampanha() {
  return (
    <section className={"\x62order-t \x62order-border \x62g-card py-24 md:py-32"} id="servicos">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className={"mb-16 flex flex-col justify-between gap-6 \x6dd:\x66lex-row \x6dd:\x69tems-end"}>
          <h2 className={"max-w-2xl \x66ont-display text-4xl font-extrabold tracking-tight md:text-5xl"}>Tudo que sua campanha precisa, <span className="text-gold">num só lugar.</span></h2>
          <p className="max-w-sm text-muted-foreground">Uma equipe, uma estratégia, um responsável. Nada de conversar com cinco fornecedores diferentes.</p>
        </div>
        <div className={"grid \x62order-l \x62order-t \x62order-border sm:grid-cols-2 lg:grid-cols-3"}>
          <article className={"group \x62order-b \x62order-r \x62order-border p-8 transition-colors \x68over:\x62g-secondary md:p-10"}>
            <span className={"\x66ont-serif text-4xl italic text-primary"}>01</span>
            <h3 className={"mt-6 \x66ont-display text-xl font-bold"}>Posicionamento e narrativa</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">Descobrimos o que faz você diferente e transformamos isso em uma mensagem que o eleitor entende em 5 segundos e lembra no dia da urna.</p>
          </article>
          <article className={"group \x62order-b \x62order-r \x62order-border p-8 transition-colors \x68over:\x62g-secondary md:p-10"}>
            <span className={"\x66ont-serif text-4xl italic text-primary"}>02</span>
            <h3 className={"mt-6 \x66ont-display text-xl font-bold"}>Gestão de redes sociais</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">Calendário, roteiros, design e publicação. Presença constante, com cara de gente — não de panfleto.</p>
          </article>
          <article className={"group \x62order-b \x62order-r \x62order-border p-8 transition-colors \x68over:\x62g-secondary md:p-10"}>
            <span className={"\x66ont-serif text-4xl italic text-primary"}>03</span>
            <h3 className={"mt-6 \x66ont-display text-xl font-bold"}>Vídeo e conteúdo</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">Reels, cortes, depoimentos e bastidores gravados e editados para prender a atenção no primeiro segundo.</p>
          </article>
          <article className={"group \x62order-b \x62order-r \x62order-border p-8 transition-colors \x68over:\x62g-secondary md:p-10"}>
            <span className={"\x66ont-serif text-4xl italic text-primary"}>04</span>
            <h3 className={"mt-6 \x66ont-display text-xl font-bold"}>Tráfego pago segmentado</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">Anúncios no Meta e Google por bairro, faixa etária e tema, dentro das regras eleitorais e com relatório de cada real investido.</p>
          </article>
          <article className={"group \x62order-b \x62order-r \x62order-border p-8 transition-colors \x68over:\x62g-secondary md:p-10"}>
            <span className={"\x66ont-serif text-4xl italic text-primary"}>05</span>
            <h3 className={"mt-6 \x66ont-display text-xl font-bold"}>Identidade visual</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">Logo, número, cores e materiais que fazem seu nome ser reconhecido de longe — no santinho, no carro e no feed.</p>
          </article>
          <article className={"group \x62order-b \x62order-r \x62order-border p-8 transition-colors \x68over:\x62g-secondary md:p-10"}>
            <span className={"\x66ont-serif text-4xl italic text-primary"}>06</span>
            <h3 className={"mt-6 \x66ont-display text-xl font-bold"}>Gestão de crise e reputação</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">Monitoramento diário e resposta rápida. Quando o ataque vem, você já tem a resposta pronta.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionDoPrimeiroOiAo() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32" id="metodo">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary">Como funciona</p>
      <h2 className={"max-w-3xl \x66ont-display text-4xl font-extrabold tracking-tight md:text-5xl"}>Do primeiro "oi" ao dia da eleição, em 4 passos.</h2>
      <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <li className={"relative \x62order-t-2 \x62order-primary pt-6"}>
          <span className={"\x66ont-display text-sm font-bold text-primary"}>Passo 1</span>
          <h3 className={"mt-2 \x66ont-display text-2xl font-bold"}>Diagnóstico</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">Uma conversa franca pelo WhatsApp sobre seu cargo, sua cidade e seu momento. Sem custo e sem compromisso.</p>
        </li>
        <li className={"relative \x62order-t-2 \x62order-primary pt-6"}>
          <span className={"\x66ont-display text-sm font-bold text-primary"}>Passo 2</span>
          <h3 className={"mt-2 \x66ont-display text-2xl font-bold"}>Plano de voo</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">Você recebe a estratégia com público, mensagem, canais, cronograma e investimento. Tudo por escrito.</p>
        </li>
        <li className={"relative \x62order-t-2 \x62order-primary pt-6"}>
          <span className={"\x66ont-display text-sm font-bold text-primary"}>Passo 3</span>
          <h3 className={"mt-2 \x66ont-display text-2xl font-bold"}>Execução</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">Nossa equipe produz, publica e impulsiona. Você foca em rua, reunião e eleitor.</p>
        </li>
        <li className={"relative \x62order-t-2 \x62order-primary pt-6"}>
          <span className={"\x66ont-display text-sm font-bold text-primary"}>Passo 4</span>
          <h3 className={"mt-2 \x66ont-display text-2xl font-bold"}>Ajuste semanal</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">Números na mesa toda semana. O que funciona ganha força; o que não funciona sai.</p>
        </li>
      </ol>
      <div className="mt-14">
        <a className={"h-12 px-8 py-3.5 text-sm inline-flex shrink-0 items-center justify-center gap-3 rounded-full font-semibold transition-all \x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-(\x2d-gold) \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 \x62g-primary text-primary-foreground \x68over:\x62rightness-110 \x68over:\x2dtranslate-y-0.\x35 \x73hadow-[\x30_10px_40px_-10px_var(\x2d-primary)]"} href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20pelo%20passo%201%3A%20o%20diagn%C3%B3stico%20gratuito." rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" /></svg>Começar pelo passo 1<span className={"transition-transform \x67roup-hover:\x74ranslate-x-1"} aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}

function ImportedSectionGenteDeComunicaO() {
  return (
    <section className={"\x62g-paper py-24 text-paper-foreground md:py-32"} id="quem-somos">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <img className="aspect-[4/5] w-full rounded-2xl object-cover" src="/site-assets/de4210a9bba75c7a.webp" srcSet="/site-assets/a6c8d1b1ec0b41b9.webp 480w, /site-assets/f42a01ac8b2f13bc.webp 800w, /site-assets/de4210a9bba75c7a.webp 1200w" alt="Equipe da Visually trabalhando na estratégia de uma campanha" sizes="(min-width: 1024px) 50vw, 100vw" loading="lazy" decoding="async" width="1200" height="1408" />
          <img className={"absolute -bottom-8 -right-4 h-28 w-28 rounded-2xl bg-background object-contain p-3 \x73hadow-2xl md:-right-8 md:h-36 md:w-36"} src="/site-assets/8fc2f5449311cd6d.webp" alt="" loading="lazy" decoding="async" width="288" height="284" />
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em]">Quem somos</p>
          <h2 className={"\x66ont-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"}>Gente de comunicação que <span className={"\x66ont-serif font-normal italic"}>entende de política.</span></h2>
          <div className={"mt-8 \x73pace-y-5 text-lg leading-relaxed opacity-80"}>
            <p>A Visually nasceu de uma agência de marketing digital que percebeu algo simples: campanha política tem regras, ritmo e pressão que nenhum outro cliente tem.</p>
            <p>Por isso juntamos estrategistas, roteiristas, designers, editores de vídeo e gestores de tráfego numa equipe dedicada a candidatos e mandatos. Trabalhamos lado a lado, com reunião semanal e um canal direto no WhatsApp.</p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            <li className="flex items-start gap-3 font-semibold"><span className={"mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full \x62g-paper-foreground text-xs text-paper"}>✓</span>Atendimento direto, sem intermediário</li>
            <li className="flex items-start gap-3 font-semibold"><span className={"mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full \x62g-paper-foreground text-xs text-paper"}>✓</span>100% dentro das regras do TSE</li>
            <li className="flex items-start gap-3 font-semibold"><span className={"mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full \x62g-paper-foreground text-xs text-paper"}>✓</span>Relatório semanal com números</li>
            <li className="flex items-start gap-3 font-semibold"><span className={"mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full \x62g-paper-foreground text-xs text-paper"}>✓</span>Sigilo total sobre sua estratégia</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ImportedSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-6 md:grid-cols-3">
        <a className={"group rounded-2xl \x62order \x62order-border \x62g-card p-8 transition-colors \x68over:\x62order-primary"} href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Sou%20pr%C3%A9-candidato%20e%20quero%20entender%20como%20a%20Visually%20pode%20me%20ajudar." rel="noopener noreferrer" target="_blank">
          <p className="text-sm font-semibold text-muted-foreground">Sou</p>
          <h3 className={"mt-1 \x66ont-display text-3xl font-extrabold"}>Pré-candidato</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">Quer ser conhecido antes de agosto e chegar na campanha com base formada.</p>
          <span className="mt-8 inline-flex items-center gap-2 font-bold text-primary"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" /></svg> Conversar agora <span className={"transition-transform \x67roup-hover:\x74ranslate-x-1"}>→</span></span>
        </a>
        <a className={"group rounded-2xl \x62order \x62order-border \x62g-card p-8 transition-colors \x68over:\x62order-primary"} href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Sou%20candidato%20e%20quero%20entender%20como%20a%20Visually%20pode%20me%20ajudar." rel="noopener noreferrer" target="_blank">
          <p className="text-sm font-semibold text-muted-foreground">Sou</p>
          <h3 className={"mt-1 \x66ont-display text-3xl font-extrabold"}>Candidato</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">Precisa de máquina rodando já: conteúdo diário, anúncios e resposta rápida.</p>
          <span className="mt-8 inline-flex items-center gap-2 font-bold text-primary"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" /></svg> Conversar agora <span className={"transition-transform \x67roup-hover:\x74ranslate-x-1"}>→</span></span>
        </a>
        <a className={"group rounded-2xl \x62order \x62order-border \x62g-card p-8 transition-colors \x68over:\x62order-primary"} href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Sou%20mandato%20e%20quero%20entender%20como%20a%20Visually%20pode%20me%20ajudar." rel="noopener noreferrer" target="_blank">
          <p className="text-sm font-semibold text-muted-foreground">Sou</p>
          <h3 className={"mt-1 \x66ont-display text-3xl font-extrabold"}>Mandato</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">Quer mostrar o trabalho feito, manter a base engajada e preparar a reeleição.</p>
          <span className="mt-8 inline-flex items-center gap-2 font-bold text-primary"><svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" /></svg> Conversar agora <span className={"transition-transform \x67roup-hover:\x74ranslate-x-1"}>→</span></span>
        </a>
      </div>
    </section>
  );
}

function ImportedSectionPerguntasFrequentes() {
  return (
    <section className={"\x62order-t \x62order-border \x62g-card py-24 md:py-32"} id="faq">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <h2 className={"\x66ont-display text-4xl font-extrabold tracking-tight md:text-5xl"}>Perguntas <span className={"\x66ont-serif font-normal italic text-primary"}>frequentes.</span></h2>
          <p className="mt-5 text-muted-foreground">Sua dúvida não está aqui? Pergunte direto pra gente.</p>
          <div className="mt-8">
            <a className={"h-12 px-8 py-3.5 text-sm inline-flex shrink-0 items-center justify-center gap-3 rounded-full font-semibold transition-all \x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-(\x2d-gold) \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 \x62order \x62order-foreground/\x325 text-foreground \x68over:\x62order-primary hover:text-primary"} href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20trabalho%20da%20Visually." rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" /></svg>Tirar minha dúvida<span className={"transition-transform \x67roup-hover:\x74ranslate-x-1"} aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className={"\x64ivide-y \x64ivide-border \x62order-y \x62order-border"}>
          <details className="group py-6">
            <summary className={"flex cursor-pointer list-none items-center justify-between gap-6 \x66ont-display text-lg font-bold md:text-xl"}>Vocês atendem quais cargos?<span className={"grid h-8 w-8 shrink-0 place-items-center rounded-full \x62order \x62order-border text-primary transition-transform \x67roup-open:\x72otate-45"}>+</span></summary>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Vereador, prefeito, deputado estadual e federal, senador e governador — além de mandatos em exercício e pré-candidatos que querem construir nome antes do período eleitoral.</p>
          </details>
          <details className="group py-6">
            <summary className={"flex cursor-pointer list-none items-center justify-between gap-6 \x66ont-display text-lg font-bold md:text-xl"}>Preciso esperar a campanha começar?<span className={"grid h-8 w-8 shrink-0 place-items-center rounded-full \x62order \x62order-border text-primary transition-transform \x67roup-open:\x72otate-45"}>+</span></summary>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Não, e o ideal é não esperar. Quem chega em agosto conhecido sai na frente. A pré-campanha é quando se constrói reconhecimento, e há muito que pode ser feito legalmente nesse período.</p>
          </details>
          <details className="group py-6">
            <summary className={"flex cursor-pointer list-none items-center justify-between gap-6 \x66ont-display text-lg font-bold md:text-xl"}>O trabalho respeita a legislação eleitoral?<span className={"grid h-8 w-8 shrink-0 place-items-center rounded-full \x62order \x62order-border text-primary transition-transform \x67roup-open:\x72otate-45"}>+</span></summary>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Sim. Toda peça e todo anúncio seguem as resoluções do TSE: identificação de propaganda paga, contratação de impulsionamento apenas pelas vias permitidas e prestação de contas organizada.</p>
          </details>
          <details className="group py-6">
            <summary className={"flex cursor-pointer list-none items-center justify-between gap-6 \x66ont-display text-lg font-bold md:text-xl"}>Quanto custa?<span className={"grid h-8 w-8 shrink-0 place-items-center rounded-full \x62order \x62order-border text-primary transition-transform \x67roup-open:\x72otate-45"}>+</span></summary>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Depende do cargo, do tamanho do território e do que você já tem pronto. Por isso começamos com um diagnóstico gratuito: você recebe uma proposta sob medida, sem pacote engessado.</p>
          </details>
          <details className="group py-6">
            <summary className={"flex cursor-pointer list-none items-center justify-between gap-6 \x66ont-display text-lg font-bold md:text-xl"}>Vocês atendem fora da minha cidade?<span className={"grid h-8 w-8 shrink-0 place-items-center rounded-full \x62order \x62order-border text-primary transition-transform \x67roup-open:\x72otate-45"}>+</span></summary>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Sim. Trabalhamos com campanhas em todo o Brasil, com reuniões online e, quando necessário, equipe de gravação no local.</p>
          </details>
          <details className="group py-6">
            <summary className={"flex cursor-pointer list-none items-center justify-between gap-6 \x66ont-display text-lg font-bold md:text-xl"}>Atendem qualquer partido?<span className={"grid h-8 w-8 shrink-0 place-items-center rounded-full \x62order \x62order-border text-primary transition-transform \x67roup-open:\x72otate-45"}>+</span></summary>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Atendemos candidatos comprometidos com uma campanha limpa e propositiva. Na conversa inicial avaliamos juntos se faz sentido para os dois lados.</p>
          </details>
          <details className="group py-6">
            <summary className={"flex cursor-pointer list-none items-center justify-between gap-6 \x66ont-display text-lg font-bold md:text-xl"}>Quanto tempo leva para ver resultado?<span className={"grid h-8 w-8 shrink-0 place-items-center rounded-full \x62order \x62order-border text-primary transition-transform \x67roup-open:\x72otate-45"}>+</span></summary>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Os primeiros sinais — alcance, seguidores locais e mensagens — aparecem nas primeiras semanas. Reconhecimento de nome se constrói com constância, por isso quanto antes, melhor.</p>
          </details>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionAEleiON() {
  return (
    <section className="grain relative overflow-hidden py-28 md:py-40">
      <div className={"pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 rounded-full \x62g-primary/\x315 \x62lur-3xl"} />
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <img className={"mx-auto mb-10 h-32 w-32 object-contain \x64rop-shadow-[\x30_0_30px_var(\x2d-primary)] md:h-40 md:w-40"} src="/site-assets/ca51e846d6087d5e.webp" alt="Logo Visually" loading="lazy" decoding="async" width="320" height="316" />
        <h2 className={"\x66ont-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"}>A eleição não espera. <span className={"block \x66ont-serif font-normal italic text-gold"}>Seu adversário também não.</span></h2>
        <p className="mx-auto mt-7 max-w-xl text-lg text-muted-foreground">Chame a gente no WhatsApp agora. Em 20 minutos de conversa você sai com um diagnóstico claro do que fazer primeiro.</p>
        <div className="mt-10 flex justify-center">
          <a className={"h-12 px-8 py-3.5 text-sm inline-flex shrink-0 items-center justify-center gap-3 rounded-full font-semibold transition-all \x6futline-none \x66ocus-visible:\x72ing-2 \x66ocus-visible:\x72ing-(\x2d-gold) \x66ocus-visible:\x72ing-offset-2 \x64isabled:\x70ointer-events-none disabled:opacity-50 \x62g-primary text-primary-foreground \x68over:\x62rightness-110 \x68over:\x2dtranslate-y-0.\x35 \x73hadow-[\x30_10px_40px_-10px_var(\x2d-primary)]"} href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20minha%20campanha%20com%20a%20Visually." rel="noopener noreferrer" target="_blank"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" /></svg>Falar com um estrategista<span className={"transition-transform \x67roup-hover:\x74ranslate-x-1"} aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}
