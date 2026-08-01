import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Copy, Check, Play, X, Disc3, Youtube, Music2 } from "lucide-react";
import heroAsset from "@/assets/francis-hero.jpg.asset.json";
import eternoDeusAsset from "@/assets/ETERNO_DEUS.jpg.asset.json";
import filhoDeDaviAsset from "@/assets/FILHO_DE_DAVI.jpg.asset.json";
import meuSocorroAsset from "@/assets/MEU_SOCORRO.jpg.asset.json";
import aCruzAsset from "@/assets/A_CRUZ.jpg.asset.json";
import diaDeFestaAsset from "@/assets/DIA_DE_FESTA.jpg.asset.json";
import aPromessaAsset from "@/assets/A_PROMESSA.jpg.asset.json";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Francis Santos — Cantor e Ministro Cristão" },
      {
        name: "description",
        content:
          "Site oficial de Francis Santos: músicas, vídeos, lançamentos e como apoiar o ministério. Jesus é o caminho, a verdade e a vida.",
      },
      { property: "og:title", content: "Francis Santos — Cantor e Ministro Cristão" },
      {
        property: "og:description",
        content: "Músicas, vídeos e lançamentos de Francis Santos. Deus Abençoe!!",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ───────── PLACEHOLDERS EDITÁVEIS ─────────
 * 1. HERO_IMG: troque pela foto oficial do artista.
 * 2. LAUNCH_DATE: data do próximo lançamento (contagem regressiva).
 * 3. PIX_KEY: insira a chave PIX real.
 * 4. videos[]: IDs reais dos vídeos do canal @francissantos.oficial.
 * 5. Biografia: texto é um RASCUNHO — deve ser revisado/expandido pelo artista.
 */

// PLACEHOLDER: foto do hero (substituir pela foto oficial em alta resolução)
const HERO_IMG = heroAsset.url;

// PLACEHOLDER: data do próximo lançamento — 30 dias a partir de hoje
const LAUNCH_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

// PLACEHOLDER: chave PIX do ministério
const PIX_KEY = "[inserir aqui]";

const SPOTIFY_ARTIST = "https://open.spotify.com/artist/31JPyrr0LIkwyB9J055x6z";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@francissantos.oficial";

const releases = [
  {
    titulo: "Eterno Deus",
    tipo: "Single · Lançamento mais recente",
    url: "https://open.spotify.com/album/7ekaPOlFO6XcvKfyqqXQCJ",
  },
  {
    titulo: "Filho de Davi",
    tipo: "Single · 2026",
    url: "https://open.spotify.com/album/6R2NtBQGRDsby0RF2TuIH4",
  },
  {
    titulo: "Meu Socorro (Acústico)",
    tipo: "Single · 2026",
    url: "https://open.spotify.com/album/4V8Kl0rDAnnWBENNyJ2KT0",
  },
  {
    titulo: "A Cruz",
    tipo: "Single · 2025",
    url: "https://open.spotify.com/album/7980hUG48qNPLZnQu1rcMJ",
  },
  {
    titulo: "Dia de Festa",
    tipo: "Single · 2025",
    url: "https://open.spotify.com/album/3kRxxWldRTwc1ZK2T2y8Bx",
  },
  {
    titulo: "A Promessa",
    tipo: "Single · 2025",
    url: "https://open.spotify.com/album/0f4Llv3brFKDJJ6gljjLUH",
  },
];

/* PLACEHOLDER: lista de canções disponíveis no Spotify.
 * Ao lançar novas músicas, basta adicionar um item aqui. */
const tracks = [
  { titulo: "Eterno Deus", ano: "2026", url: "https://open.spotify.com/album/7ekaPOlFO6XcvKfyqqXQCJ" },
  { titulo: "Filho de Davi", ano: "2026", url: "https://open.spotify.com/album/6R2NtBQGRDsby0RF2TuIH4" },
  { titulo: "Meu Socorro (Acústico)", ano: "2026", url: "https://open.spotify.com/album/4V8Kl0rDAnnWBENNyJ2KT0" },
  { titulo: "A Cruz", ano: "2025", url: "https://open.spotify.com/album/7980hUG48qNPLZnQu1rcMJ" },
  { titulo: "Dia de Festa", ano: "2025", url: "https://open.spotify.com/album/3kRxxWldRTwc1ZK2T2y8Bx" },
  { titulo: "A Promessa", ano: "2025", url: "https://open.spotify.com/album/0f4Llv3brFKDJJ6gljjLUH" },
];

// PLACEHOLDER: substituir pelos IDs reais dos vídeos do canal
const videos = [
  { id: "_bpHhRC5EQI", titulo: "Rei dos Reis - Live Session" },
  { id: "KreeogXYJbw", titulo: "Salmos - Live Session" },
  { id: "QX3IEIiKYqg", titulo: "Meu Socorro – Francis Santos" },
  { id: "63O-z4AYYQg", titulo: "Eterno Deus – Francis Santos" },
  { id: "u09kGb2aTtY", titulo: "A Promessa - Francis Santos" },
  { id: "9wvDdNfkX2Q", titulo: "Dia de Festa - Francis Santos" },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="reveal mb-10 text-center" data-reveal>
      <p className="text-xs uppercase tracking-[0.35em] text-gold">{kicker}</p>
      <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">{title}</h2>
    </div>
  );
}

function Countdown({ target }: { target: Date }) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, [target]);

  const items = [
    { v: left.d, l: "dias" },
    { v: left.h, l: "horas" },
    { v: left.m, l: "min" },
    { v: left.s, l: "seg" },
  ];

  return (
    <div className="mt-8 grid grid-cols-4 gap-3">
      {items.map((it) => (
        <div key={it.l} className="glass px-2 py-4 text-center">
          <div className="font-display text-3xl text-foreground tabular-nums sm:text-4xl">
            {String(it.v).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            {it.l}
          </div>
        </div>
      ))}
    </div>
  );
}

function VideoThumb({ id, titulo }: { id: string; titulo: string }) {
  const [src, setSrc] = useState(`https://img.youtube.com/vi/${id}/maxresdefault.jpg`);
  return (
    <img
      src={src}
      alt={`Miniatura do vídeo ${titulo}`}
      loading="lazy"
      onError={() => setSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`)}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
}

function Index() {
  const containerRef = useReveal<HTMLDivElement>();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveVideo(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const copyPix = async () => {
    await navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Atualize a capa do single Eterno Deus com a imagem que está em anexo */}
      {/* ─── 1. HERO ─── */}
      <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden px-4">
        {/* PLACEHOLDER: imagem de fundo do hero */}
        <img
          src={HERO_IMG}
          alt="Francis Santos"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />

        <div className="reveal relative z-10 w-full text-center" data-reveal>
          {/* Fonte "Fixture Light": aproximada por uma grotesca leve e larga */}
          <h1 className="font-[family-name:var(--font-fixture)] whitespace-nowrap text-[clamp(1.75rem,4.2vw,5.5rem)] font-light uppercase leading-none tracking-[0.16em] text-foreground">
            Francis Santos
          </h1>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SPOTIFY_ARTIST}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium"
            >
              <Music2 className="h-4 w-4" /> Ouvir no Spotify
            </a>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium"
            >
              <Youtube className="h-4 w-4" /> Assistir no YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ─── 2. BIOGRAFIA ─── */}
      <section className="mx-auto max-w-3xl px-4 py-28">
        <SectionTitle kicker="Sobre" title="Biografia" />
        {/* RASCUNHO: este texto deve ser revisado e expandido pelo próprio artista. */}
        <div className="reveal glass px-7 py-12 text-center sm:px-12" data-reveal>
          <p className="text-base leading-loose text-foreground/85">
            Francis Santos é um cantor e ministro cristão que dedica sua vida e sua música a
            espalhar a mensagem de fé em Jesus Cristo. Guiado pela convicção de que “Jesus é o
            caminho, a verdade e a vida”, Francis usa sua voz e seu ministério para conduzir pessoas
            a uma vida de entrega e transformação em Deus. Com lançamentos que já somam milhares de
            ouvintes, seu trabalho é marcado pela simplicidade da mensagem e pela profundidade da
            adoração.
          </p>
          <p className="mt-8 font-display text-xl italic text-gold">“Deus Abençoe!!”</p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            assinatura que resume o coração de seu ministério
          </p>
        </div>
      </section>

      {/* ─── 3. LANÇAMENTOS ─── */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <SectionTitle kicker="Discografia" title="Últimos Lançamentos" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {releases.map((r, i) => (
            <a
              key={r.titulo}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal glass group flex flex-col items-center px-6 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[var(--glow-gold-strong)]"
            >
              {r.titulo === "Eterno Deus" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src={eternoDeusAsset.url}
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : r.titulo === "Filho de Davi" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src={filhoDeDaviAsset.url}
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : r.titulo === "Meu Socorro (Acústico)" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src={meuSocorroAsset.url}
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : r.titulo === "A Cruz" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src={aCruzAsset.url}
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : r.titulo === "Dia de Festa" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src={diaDeFestaAsset.url}
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : r.titulo === "A Promessa" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src={aPromessaAsset.url}
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : (
                <div className="glass grid h-24 w-24 place-items-center rounded-full">
                  <Disc3 className="h-10 w-10 text-gold transition-transform duration-700 group-hover:rotate-180" />
                </div>
              )}
              <h3 className="mt-6 text-xl text-foreground">{r.titulo}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {r.tipo}
              </p>
            </a>
          ))}
        </div>

        <div className="reveal mt-10 text-center" data-reveal>
          <a
            href={SPOTIFY_ARTIST}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium"
          >
            <Music2 className="h-4 w-4 text-gold" /> Ver todos no Spotify
          </a>
        </div>

        <div className="reveal glass mx-auto mt-12 max-w-2xl overflow-hidden p-3" data-reveal>
          <iframe
            title="Eterno Deus no Spotify"
            src="https://open.spotify.com/embed/album/7ekaPOlFO6XcvKfyqqXQCJ?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-2xl"
          />
        </div>

        {/* Todas as canções disponíveis no Spotify */}
        <div className="reveal glass mx-auto mt-6 max-w-2xl overflow-hidden px-4 py-6 sm:px-7" data-reveal>
          <p className="px-2 text-xs uppercase tracking-[0.3em] text-gold">Todas as canções</p>
          <ul className="mt-4 divide-y divide-border">
            {tracks.map((t, i) => (
              <li key={t.titulo}>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl px-3 py-4 transition-colors duration-300 hover:bg-gold/10"
                >
                  <span className="w-5 shrink-0 text-sm tabular-nums text-muted-foreground">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
                    {t.titulo}
                  </span>
                  <span className="shrink-0 text-xs text-muted-foreground">{t.ano}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition-shadow duration-300 group-hover:shadow-[var(--glow-gold-strong)]">
                    <Play className="h-3.5 w-3.5 translate-x-[1px] fill-gold" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── 3.1 VÍDEOS ─── */}
      <section className="mx-auto max-w-5xl px-4 py-20">
        <SectionTitle kicker="Canal" title="Vídeos" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActiveVideo(v.id)}
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
              className="reveal glass group overflow-hidden p-2 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[var(--glow-gold-strong)]"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl">
                <VideoThumb id={v.id} titulo={v.titulo} />
                <div className="absolute inset-0 grid place-items-center bg-black/40">
                  <span className="glass grid h-14 w-14 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-5 w-5 translate-x-[1px] fill-gold text-gold" />
                  </span>
                </div>
              </div>
              <p className="px-3 py-4 text-sm font-medium text-foreground">{v.titulo}</p>
            </button>
          ))}
        </div>
        <div className="reveal mt-10 text-center" data-reveal>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium"
          >
            <Youtube className="h-4 w-4 text-gold" /> Ver todos no YouTube
          </a>
        </div>
      </section>

      {/* ─── 4. PRÓXIMOS LANÇAMENTOS ─── */}
      <section className="mx-auto max-w-2xl px-4 py-20">
        <SectionTitle kicker="Em breve" title="Próximos Lançamentos" />
        <div className="reveal glass px-7 py-12 text-center sm:px-12" data-reveal>
          <p className="font-display text-xl text-foreground">
            Em breve, um novo lançamento chegando
          </p>
          <Countdown target={LAUNCH_DATE} />
        </div>

        <div className="reveal glass mt-6 px-7 py-10 text-center sm:px-12" data-reveal>
          <h3 className="text-2xl text-foreground">Material exclusivo</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Em breve, conteúdo exclusivo para quem se inscrever.
          </p>
          {/* Formulário apenas visual — sem backend por enquanto */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="seu melhor e-mail"
              className="glass min-w-0 flex-1 px-5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-gold"
            />
            <button
              type="submit"
              className="btn-gold shrink-0 px-6 py-3 text-sm font-medium"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </section>

      {/* ─── 5. DOAÇÕES ─── */}
      <section className="mx-auto max-w-2xl px-4 py-20">
        <SectionTitle kicker="Contribua" title="Apoie este Ministério" />
        <div className="reveal glass px-7 py-12 text-center sm:px-12" data-reveal>
          <p className="text-base leading-loose text-foreground/85">
            Sua contribuição ajuda a levar essa mensagem de fé a mais pessoas. Se Deus tocar seu
            coração, você pode contribuir com este ministério das seguintes formas:
          </p>

          {/* PLACEHOLDER: inserir a chave PIX real em PIX_KEY */}
          <div className="glass mt-8 flex items-center justify-between gap-3 px-5 py-4 text-left">
            <div className="min-w-0">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                Chave PIX
              </p>
              <p className="truncate text-sm text-foreground">{PIX_KEY}</p>
            </div>
            <button
              type="button"
              onClick={copyPix}
              aria-label="Copiar chave PIX"
              className="btn-gold grid h-10 w-10 shrink-0 place-items-center"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* PLACEHOLDER: adicionar link da vaquinha / plataforma de doação */}
          <button
            type="button"
            className="btn-gold mt-5 w-full px-8 py-3.5 text-sm font-medium"
          >
            Doar agora
          </button>
        </div>
      </section>

      {/* ─── 6. RODAPÉ ─── */}
      <footer className="px-4 pb-14 pt-10">
        <div className="reveal glass mx-auto max-w-2xl px-7 py-10 text-center" data-reveal>
          <div className="flex items-center justify-center gap-3">
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="btn-gold grid h-11 w-11 place-items-center"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href={SPOTIFY_ARTIST}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              className="btn-gold grid h-11 w-11 place-items-center"
            >
              <Music2 className="h-4 w-4" />
            </a>
            {/* Espaço reservado para Instagram e TikTok futuramente */}
          </div>
          <p className="mt-7 font-display text-lg italic text-foreground">
            Feito com fé, para a glória de Deus.
          </p>
          <p className="mt-3 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} Francis Santos
          </p>
        </div>
      </footer>

      {/* ─── MODAL DE VÍDEO ─── */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 px-4 backdrop-blur-xl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-3xl overflow-hidden p-2"
          >
            <div className="flex justify-end p-1">
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Fechar vídeo"
                className="btn-gold grid h-9 w-9 place-items-center"
              >
                <X className="h-4 w-4 text-foreground" />
              </button>
            </div>
            <div className="aspect-video overflow-hidden rounded-2xl">
              <iframe
                title="Vídeo do YouTube"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
