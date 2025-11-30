"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, PhoneCall, ShieldCheck, ShoppingBag, Zap } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "Entrega 24/7",
    description:
      "Solicita productos sin importar la hora. Nuestro equipo está listo los 365 días del año.",
    icon: Clock,
  },
  {
    title: "Cobertura Local",
    description:
      "Zaragoza, Puebla, y municipios cercanos. Conocemos cada calle y llegamos sin retrasos.",
    icon: Zap,
  },
  {
    title: "Pago Flexible",
    description:
      "Aceptamos efectivo, transferencias y pago al recibir. Sin complicaciones para ti.",
    icon: ShieldCheck,
  },
  {
    title: "Compra Personalizada",
    description:
      "Vamos a la fonda, farmacia, mercado o tienda de tu preferencia. Tú decides.",
    icon: ShoppingBag,
  },
  {
    title: "Atención Humana",
    description:
      "Trato directo por WhatsApp para que cada pedido tenga seguimiento personalizado.",
    icon: PhoneCall,
  },
];

const steps = [
  {
    title: "Escríbenos",
    detail: "Manda tu pedido al WhatsApp 233 125 2947 y cuéntanos qué necesitas.",
  },
  {
    title: "Confirmamos",
    detail: "Validamos disponibilidad, tiempo estimado y forma de pago contigo.",
  },
  {
    title: "Compramos",
    detail: "Nuestro rider local acude al comercio que elijas y realiza la compra por ti.",
  },
  {
    title: "Entregamos",
    detail: "Recibe tus productos con seguimiento en tiempo real y la calidez de GRUPO MAYIN.",
  },
];

const faqs = [
  {
    question: "¿Qué zonas cubre MAYIN EXPRESS?",
    answer:
      "Operamos en Zaragoza, Puebla, y atendemos pedidos hacia municipios como Huehuetlán el Grande, Tepeaca, Tepeyahualco, y comunidades aledañas. Pregunta por tu zona y te confirmamos al instante.",
  },
  {
    question: "¿Hay compra mínima?",
    answer:
      "No exigimos montos mínimos. Solo cubrimos el costo de los productos más nuestra tarifa de servicio, calculada según distancia y horario.",
  },
  {
    question: "¿Cómo pago mi pedido?",
    answer:
      "Puedes pagar en efectivo al entregar, mediante transferencia bancaria o con pago mixto. Te compartimos los métodos al confirmar la orden.",
  },
  {
    question: "¿Qué comercios atienden?",
    answer:
      "Trabajamos con fondas, restaurantes, supermercados, farmacias, ferreterías, mercados locales y tiendas de conveniencia. Si está abierto, lo conseguimos para ti.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-mayin-night/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20 md:px-10">
        <section className="grid gap-10 md:grid-cols-[1.5fr,1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-mayin-gold">
              ⚜️ Grupo Mayin
            </span>
            <h1 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
              Tu aliado 24/7 para conseguir lo que necesitas en Zaragoza y alrededores.
            </h1>
            <p className="mb-8 max-w-xl text-lg text-white/80">
              MAYIN EXPRESS es la red de mensajeros de confianza de GRUPO MAYIN. Llevamos comida, medicamentos,
              despensa, herramientas y lo que haga falta, con atención cercana y tiempos reales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://wa.me/523331252947"
                target="_blank"
                className="group inline-flex items-center gap-3 rounded-full bg-mayin-gold px-6 py-3 text-base font-semibold text-mayin-night shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
              >
                Pedir por WhatsApp
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Ver servicios
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-left text-sm text-white/70 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-3xl font-bold text-mayin-gold">15+</p>
                <p>Colonias atendidas sin recargos ocultos.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-3xl font-bold text-mayin-gold">10 min</p>
                <p>Tiempo promedio para asignar rider.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 sm:col-span-1">
                <p className="text-3xl font-bold text-mayin-gold">24/7</p>
                <p>Disponibilidad real todo el año.</p>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">MAYIN EXPRESS</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">El motor de logística de Grupo Mayin</h2>
            </div>
            <p className="text-base text-white/80">
              Somos el “delivery vecino” que resuelve el día a día en Zaragoza. Coordinamos compras rápidas, pedidos urgentes y entregas programadas con la calidez de un equipo local.
            </p>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-mayin-gold/20 text-mayin-gold">1</span>
                <span>Entregas en moto y auto para pedidos pequeños y voluminosos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-mayin-gold/20 text-mayin-gold">2</span>
                <span>Rastreo directo por WhatsApp con mensajes cada etapa.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-mayin-gold/20 text-mayin-gold">3</span>
                <span>Protocolos de seguridad y entregas nocturnas con verificación.</span>
              </li>
            </ul>
          </motion.aside>
        </section>

        <section id="servicios" className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-mayin-gold">Servicios clave</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Soluciones creadas para la vida diaria en la región</h2>
            </div>
            <p className="max-w-xl text-base text-white/80">
              Desde un antojo nocturno hasta reabastecer tu negocio, MAYIN EXPRESS responde con logística inteligente y un trato que solamente un equipo local puede brindar.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {highlights.map((feature) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-mayin-gold/60"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mayin-gold/15 text-mayin-gold">
                    <feature.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="mt-4 text-sm text-white/80">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-mayin-gold">Cómo funciona</p>
              <h2 className="text-3xl font-semibold text-white">Tu pedido en cuatro pasos sencillos</h2>
            </div>
            <Link
              href="https://wa.me/523331252947"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-mayin-gold/60 hover:text-mayin-gold"
            >
              Pedir ahora <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col gap-3 rounded-2xl bg-white/5 p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mayin-gold/20 text-base font-semibold text-mayin-gold">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-white/70">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-mayin-purple/80 via-mayin-night/80 to-mayin-night/90 p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-mayin-gold">Grupo Mayin</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">Una familia de soluciones para Zaragoza</h2>
              <p className="text-white/80">
                GRUPO MAYIN integra servicios que acompañan la vida y los negocios de la región. MAYIN EXPRESS conecta la logística de última milla con la cercanía y experiencia local.
              </p>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-mayin-gold" />
                  Servicios diseñados para la realidad de Zaragoza y sus municipios.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-mayin-gold" />
                  Innovación constante, tecnología accesible y talento humano confiable.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-mayin-gold" />
                  Visión integral: entregas, soporte a comercios y soluciones de valor agregado.
                </li>
              </ul>
            </div>
            <div className="grid gap-4 text-white/80">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6">
                <h3 className="text-lg font-semibold text-white">¿Necesitas alianzas comerciales?</h3>
                <p className="mt-2 text-sm">
                  Diseñamos planes de entregas recurrentes para restaurantes, farmacias, comercios y oficinas locales.
                </p>
                <Link
                  href="mailto:hola@grupomayin.com"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-mayin-gold hover:underline"
                >
                  Escribir a GRUPO MAYIN <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="rounded-2xl border border-white/5 bg-mayin-night/40 p-6 text-sm">
                <p className="text-white/90">
                  &ldquo;Mayin Express resolvió los pedidos nocturnos de mi restaurante. Ahora llegamos a más clientes sin invertir en flota propia.&rdquo;<br />
                  <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-white/50">— Socio comercial en Zaragoza</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-[1.2fr,1fr] md:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-mayin-gold">Cobertura</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Zaragoza como base, municipios conectados</h2>
            <p className="mt-4 text-base text-white/80">
              Operamos con mapas urbanos propios y aliados estratégicos para llegar a colonias, fraccionamientos y comunidades rurales en horarios extendidos.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-white/75 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="font-semibold text-mayin-gold">Zonas prioritarias</p>
                <p className="mt-2">Centro de Zaragoza, La Colonia, San José, Barrio de Guadalupe, San Sebastián.</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="font-semibold text-mayin-gold">Municipios conectados</p>
                <p className="mt-2">Huehuetlán el Grande, Tepeaca, Tepeyahualco, Tepetzitzintla, comunidades vecinas.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-mayin-gold/20 to-mayin-purple/30 p-6 text-sm text-white/75">
            <h3 className="text-lg font-semibold text-white">Logística inteligente</h3>
            <p className="mt-3">
              Usamos dashboards internos para estimar tiempos y asignar repartidores según tráfico, clima y demanda. Así garantizamos entregas rápidas incluso en horarios pico.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-3">
                <span>Asignación promedio</span>
                <span className="font-semibold text-mayin-gold">10 min</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-3">
                <span>Pedidos nocturnos</span>
                <span className="font-semibold text-mayin-gold">30% operación</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-3">
                <span>Nivel de satisfacción</span>
                <span className="font-semibold text-mayin-gold">4.9/5</span>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[0.4em] text-mayin-gold">Preguntas frecuentes</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Todo lo que necesitas saber antes de pedir</h2>
              <p className="mt-4 text-base text-white/80">
                Si tu duda no aparece aquí, escríbenos directo al WhatsApp 233 125 2947 y te ayudamos en minutos.
              </p>
            </div>
            <div className="flex-1 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
                  <summary className="text-base font-semibold text-white marker:hidden">
                    <span className="inline-flex items-center justify-between gap-3">
                      {faq.question}
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-white/75">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-mayin-night/70 p-8 text-center md:p-12">
          <p className="text-sm uppercase tracking-[0.4em] text-mayin-gold">¿Listo para tu próximo pedido?</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Estamos en línea, de día y de noche</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
            Escribe a MAYIN EXPRESS y descubre por qué somos el aliado más confiable de Zaragoza. Atención directa, tiempos honestos y soluciones a la medida.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="https://wa.me/523331252947"
              target="_blank"
              className="group inline-flex items-center gap-3 rounded-full bg-mayin-gold px-6 py-3 text-base font-semibold text-mayin-night shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
            >
              Pedir por WhatsApp
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="tel:2331252947"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Llamar ahora
              <PhoneCall className="h-5 w-5" />
            </Link>
          </div>
        </section>

        <footer className="flex flex-col items-center gap-3 border-t border-white/10 pt-10 text-center text-xs uppercase tracking-[0.3em] text-white/50">
          <span>⚜️ Grupo Mayin</span>
          <span>MAYIN EXPRESS · Entregas a domicilio 24/7 · Zaragoza, Puebla</span>
          <Link href="mailto:hola@grupomayin.com" className="text-white/60 hover:text-mayin-gold">
            hola@grupomayin.com
          </Link>
        </footer>
      </div>
    </main>
  );
}
