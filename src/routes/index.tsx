import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { Copy, Check, Play, X, Disc3, Youtube, Music2, ChevronLeft, ChevronRight, Calendar, Send, ShoppingBag, MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { IntroOverlay } from "@/components/IntroOverlay";
import { useReveal } from "@/hooks/use-reveal";
import { buildPixPayload } from "@/lib/pix";
import { QRCodeSVG } from "qrcode.react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Francis Santos — Official Website" },
      {
        name: "description",
        content:
          "Site oficial de Francis Santos: músicas, vídeos, lançamentos e como apoiar o ministério. Jesus é o caminho, a verdade e a vida.",
      },
      { property: "og:title", content: "Francis Santos — Official Website" },
      {
        property: "og:description",
        content: "Site oficial de Francis Santos: músicas, vídeos, lançamentos e como apoiar o ministério. Jesus é o caminho, a verdade e a vida.",
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
  const HERO_IMG = "/images/francis-hero-new.png";
  const HERO_VIDEO_URL = "/video-hero.mp4";

// PLACEHOLDER: data do próximo lançamento — 30 dias a partir de hoje
const LAUNCH_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

// Chave PIX do ministério
const PIX_KEY = "francissilveira.adv@gmail.com";
const PIX_BANK = "Mercado Pago";
const PIX_PAYLOAD = buildPixPayload({
  key: PIX_KEY,
  merchant: "FRANCIS SANTOS",
  city: "SAO PAULO",
});

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
  { id: "8Q7-yICdmJo", titulo: "Salmos - Clipe Oficial" },
  { id: "QX3IEIiKYqg", titulo: "Meu Socorro – Francis Santos" },
  { id: "63O-z4AYYQg", titulo: "Eterno Deus – Francis Santos" },
  { id: "u09kGb2aTtY", titulo: "A Promessa - Francis Santos" },
  { id: "9wvDdNfkX2Q", titulo: "Dia de Festa - Francis Santos" },
];

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Francis Santos Live 1" },
  { src: "/images/gallery-2.jpg", alt: "Francis Santos Live 2" },
  { src: "/images/gallery-3.jpg", alt: "Francis Santos Live 3" },
  { src: "/images/gallery-4.jpg", alt: "Francis Santos Live 4" },
  { src: "/images/gallery-5.jpg", alt: "Francis Santos Live 5" },
];

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="reveal mb-12 text-center" data-reveal>
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-gold">{kicker}</p>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50" />
      </div>
      <h2 className="mt-4 text-3xl text-foreground sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
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
        <div key={it.l} className="glass group relative overflow-hidden px-2 py-4 text-center transition-all duration-300 hover:border-gold/40">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="font-display text-3xl text-foreground tabular-nums transition-colors duration-300 group-hover:text-gold sm:text-4xl">
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
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ state: "", type: "", description: "" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
        setActiveGallery(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (activeGallery !== null || activeVideo !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeGallery, activeVideo]);

  const copyPix = async () => {
    await navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Francis! Gostaria de fazer um convite para um evento.\n\nEstado: ${formData.state}\nTipo do Evento: ${formData.type}\nDescrição: ${formData.description}`;
    const whatsappUrl = `https://wa.me/5598991738473?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const brazilianStates = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", 
    "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      <IntroOverlay />

      {/* ─── 1. HERO ─── */}
      <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden px-4">
        {/* fundo do hero: vídeo (quando definido) ou imagem estática */}
        <div className="absolute inset-0">
          {HERO_VIDEO_URL ? (
            <video
              className="h-full w-full object-cover opacity-[0.65]"
              src={HERO_VIDEO_URL}
              autoPlay
              muted
              loop
              playsInline
              poster={HERO_IMG}
            />
          ) : (
            <img
              src={HERO_IMG}
              alt="Francis Santos"
              className="h-full w-full object-cover opacity-75"
            />
          )}
        </div>

        {/* iluminação azul sutil no hero */}
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-blue-glow absolute -left-[10%] top-[10%] h-[45%] w-[55%] rounded-full opacity-40 blur-[120px]" />
          <div className="hero-blue-glow absolute bottom-[20%] right-[5%] h-[35%] w-[40%] rounded-full opacity-30 blur-[100px]" />
        </div>

        {/* fade inferior para integração orgânica com o site */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-[var(--background)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent" />

        <div className="reveal relative z-10 w-full text-center" data-reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-gold-soft/80">
            Cantor &amp; Ministro Cristão
          </p>
          <h1 className="hero-name font-[family-name:var(--font-fixture)] whitespace-nowrap text-[clamp(1.75rem,4.2vw,5.5rem)] font-light uppercase leading-none tracking-[0.16em] text-foreground">
            Francis Santos
          </h1>
          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
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
        <div className="reveal glass relative overflow-hidden px-7 py-14 text-center sm:px-14" data-reveal>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-gold/5">
            <span className="font-display text-2xl italic text-gold">"</span>
          </div>
          <p className="text-base leading-loose text-foreground/85">
            Francis Santos é um cantor e ministro cristão que dedica sua vida e sua música a
            espalhar a mensagem de fé em Jesus Cristo. Guiado pela convicção de que "Jesus é o
            caminho, a verdade e a vida", Francis usa sua voz e seu ministério para conduzir pessoas
            a uma vida de entrega e transformação em Deus. Com lançamentos que já somam milhares de
            ouvintes, seu trabalho é marcado pela simplicidade da mensagem e pela profundidade da
            adoração.
          </p>
          <div className="mx-auto mt-8 h-px w-20 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <p className="mt-6 font-display text-xl italic text-gold">"Deus Abençoe!!"</p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            assinatura que resume o coração de seu ministério
          </p>
        </div>
      </section>

      {/* ─── 2.1 AGENDA ─── */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <SectionTitle kicker="Compromissos" title="Agenda" />
        <div className="reveal glass relative overflow-hidden px-7 py-16 text-center sm:px-12" data-reveal>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-gold/10" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30">
              <Calendar className="h-8 w-8" />
            </div>
          </div>
          <p className="text-lg text-foreground/90">
            No momento a agenda não tem nenhum show, mas vou atualizando quando aparecer algum convite.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Fique atento às nossas redes sociais para novidades.
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
              className="reveal glass group relative flex flex-col items-center overflow-hidden px-6 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[var(--glow-gold-strong)]"
            >
              <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              {r.titulo === "Eterno Deus" && (
                <span className="absolute right-4 top-4 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-gold">
                  Novo
                </span>
              )}
              {r.titulo === "Eterno Deus" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src="/images/eterno-deus.jpg"
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : r.titulo === "Filho de Davi" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src="/images/filho-de-davi.jpg"
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : r.titulo === "Meu Socorro (Acústico)" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src="/images/meu-socorro.jpg"
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : r.titulo === "A Cruz" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src="/images/a-cruz.jpg"
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : r.titulo === "Dia de Festa" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src="/images/dia-de-festa.jpg"
                    alt={r.titulo}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
                </div>
              ) : r.titulo === "A Promessa" ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/20 transition-all duration-500 group-hover:ring-gold/60">
                  <img
                    src="/images/a-promessa.jpg"
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
              className="reveal glass group relative overflow-hidden p-2 text-left transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[var(--glow-gold-strong)]"
            >
              <div className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-transparent via-gold/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
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
      
      {/* ─── 3.2 MOMENTOS / GALERIA ─── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle kicker="Galeria" title="Momentos" />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveGallery(index)}
                className="group relative aspect-[4/5] sm:aspect-[3/4] cursor-pointer overflow-hidden rounded-xl border border-gold/30 bg-card shadow-md transition-all duration-300 hover:border-gold active:scale-95"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-xs sm:text-sm font-medium text-white line-clamp-1">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Galeria em Tamanho Maior */}
      {activeGallery !== null && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"
          onClick={() => setActiveGallery(null)}
        >
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={() => setActiveGallery(null)}
              className="btn-gold grid h-12 w-12 place-items-center"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div 
            className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl border border-gold/20 shadow-[0_0_50px_rgba(212,175,55,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[activeGallery]?.src}
              alt={galleryImages[activeGallery]?.alt}
              className="max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* ─── 4. PRÓXIMOS LANÇAMENTOS ─── */}
      <section className="mx-auto max-w-2xl px-4 py-20">
        <SectionTitle kicker="Em breve" title="Próximos Lançamentos" />
        <div className="reveal glass relative overflow-hidden px-7 py-12 text-center sm:px-12" data-reveal>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <p className="font-display text-xl text-foreground">
            Em breve, um novo lançamento chegando
          </p>
          <Countdown target={LAUNCH_DATE} />
        </div>

        <div className="reveal glass relative mt-6 overflow-hidden px-7 py-10 text-center sm:px-12" data-reveal>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
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
        <div className="reveal glass relative overflow-hidden px-7 py-12 text-center sm:px-12" data-reveal>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <p className="text-base leading-loose text-foreground/85">
            Sua contribuição ajuda a levar essa mensagem de fé a mais pessoas. Se Deus tocar seu
            coração, você pode contribuir com este ministério das seguintes formas:
          </p>

          <div className="glass-dark mt-9 flex flex-col items-center gap-6 p-6 text-left sm:flex-row sm:items-stretch sm:gap-7">
            <div className="relative shrink-0 self-center">
              <div className="absolute -inset-2 rounded-2xl bg-gold/5 blur-sm" />
              <div className="relative rounded-2xl bg-foreground p-3 shadow-[var(--glow-gold)]">
                <QRCodeSVG value={PIX_PAYLOAD} size={132} level="M" bgColor="transparent" fgColor="#000000" />
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center gap-4">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Banco
                </p>
                <p className="text-sm font-medium text-foreground">{PIX_BANK}</p>
              </div>

              <div className="min-w-0">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Chave PIX
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <p className="truncate text-sm text-foreground">{PIX_KEY}</p>
                  <button
                    type="button"
                    onClick={copyPix}
                    aria-label="Copiar chave PIX"
                    className="btn-gold grid h-9 w-9 shrink-0 place-items-center"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="mt-2 text-[0.7rem] text-gold-soft">Chave copiada!</p>
                )}
              </div>

              <p className="text-[0.7rem] leading-relaxed text-muted-foreground">
                Aponte a câmera do seu banco para o QR Code ou copie a chave acima.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 5.1 LOJA ─── */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <SectionTitle kicker="Produtos" title="Loja Oficial" />
        <div className="reveal glass group relative overflow-hidden px-7 py-20 text-center sm:px-12" data-reveal>
          {/* Brilho de fundo animado para a loja */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[var(--glow-gold)]">
            <ShoppingBag className="h-10 w-10" />
          </div>
          
          <h3 className="text-3xl font-light tracking-widest text-foreground uppercase">Em Breve</h3>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Estamos preparando uma linha exclusiva de produtos para abençoar sua vida. 
            Em breve você poderá adquirir camisetas, acessórios e muito mais.
          </p>
          
          <div className="mt-8 inline-block rounded-full border border-gold/20 px-6 py-2 text-xs uppercase tracking-[0.3em] text-gold/60">
            Processo de confecção
          </div>
        </div>
      </section>

      {/* ─── 5.2 CONTATO E CONVITE ─── */}
      <section className="mx-auto max-w-3xl px-4 py-20">
        <SectionTitle kicker="Ministração" title="Convide o Cantor" />
        <div className="reveal glass relative overflow-hidden px-7 py-12 sm:px-12" data-reveal>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <p className="mb-10 text-center text-base leading-loose text-foreground/85">
            Deseja convidar Francis Santos para o seu evento? Preencha as informações abaixo e nossa equipe entrará em contato via WhatsApp.
          </p>
          
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-gold/80 ml-1">Estado (UF)</label>
                <select
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="glass w-full bg-transparent px-5 py-3 text-sm text-foreground outline-none transition-all focus:border-gold focus:shadow-[var(--glow-gold-soft)]"
                >
                  <option value="" disabled className="bg-[#0c0c0c]">Selecione o estado</option>
                  {brazilianStates.map(uf => (
                    <option key={uf} value={uf} className="bg-[#0c0c0c]">{uf}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] text-gold/80 ml-1">Tipo do Evento</label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Culto, Congresso, Show..."
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="glass w-full px-5 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-gold focus:shadow-[var(--glow-gold-soft)]"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-gold/80 ml-1">Descrição do Evento</label>
              <textarea
                required
                rows={4}
                placeholder="Conte-nos um pouco sobre o evento (data prevista, local, público esperado...)"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="glass w-full resize-none px-5 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-gold focus:shadow-[var(--glow-gold-soft)]"
              />
            </div>
            
            <button
              type="submit"
              className="btn-gold group flex w-full items-center justify-center gap-3 py-4 text-sm font-bold uppercase tracking-[0.2em]"
            >
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              Enviar Convite
            </button>
          </form>
        </div>
      </section>

      {/* ─── 6. RODAPÉ ─── */}
      <footer className="px-4 pb-14 pt-10">
        <div className="reveal glass relative mx-auto max-w-2xl overflow-hidden px-7 py-10 text-center" data-reveal>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
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
