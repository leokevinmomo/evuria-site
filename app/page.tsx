export default function EvuriaLandingPage() {
  const services = [
    {
      title: "Cybersécurité",
      description:
        "Protection des postes, serveurs et Microsoft 365 avec des solutions modernes et efficaces.",
    },
    {
      title: "Infrastructure TI",
      description:
        "Serveurs, virtualisation, réseaux et optimisation des environnements.",
    },
    {
      title: "Backup & reprise",
      description:
        "Sauvegarde, restauration et continuité. Notre priorité pour protéger vos données.",
      featured: true,
    },
    {
      title: "Cloud & Microsoft 365",
      description:
        "Migration, gestion et sécurisation de vos services cloud.",
    },
    {
      title: "Support informatique",
      description:
        "Dépannage rapide pour PME et particuliers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020c1b] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#020c1b] via-[#061a3a] to-[#0b2e66]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,#4da3ff33,transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold">
            EVURIA <span className="text-[#4da3ff]">Technologies</span>
          </h1>

          <p className="mt-4 text-xl text-gray-300">
            Sécuriser. Optimiser. Simplifier vos TI.
          </p>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Solutions TI professionnelles pour PME et particuliers : infrastructure,
            cybersécurité, cloud, support et protection des données.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:18433779297"
              className="bg-[#4da3ff] text-black px-6 py-3 rounded-xl font-semibold shadow-lg"
            >
              Appeler maintenant
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=18433779297&text=Bonjour%20Evuria%2C%20j%E2%80%99ai%20un%20probl%C3%A8me%20informatique%20et%20j%E2%80%99ai%20besoin%20d%E2%80%99une%20intervention%20rapide.%20Pouvez-vous%20me%20prendre%20en%20charge%20%3F"
              className="border border-white px-6 py-3 rounded-xl"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-10 text-[#4da3ff] font-semibold">
            Disponible 24/7 pour vous accompagner
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Nos services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`p-6 rounded-2xl transition transform hover:-translate-y-1 hover:shadow-xl ${
                s.featured
                  ? "bg-gradient-to-b from-[#071a33] to-[#020c1b] border border-[#4da3ff]"
                  : "bg-[#061529] border border-gray-700"
              }`}
            >
              {s.featured && (
                <div className="text-xs mb-2 text-[#4da3ff] font-bold">
                  PRIORITÉ
                </div>
              )}
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#061529] py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Besoin d’un expert TI ?
        </h2>
        <p className="mt-4 text-gray-400">
          Contactez Evuria pour une solution rapide et efficace.
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:18733779297"
            className="bg-[#4da3ff] text-black px-6 py-3 rounded-xl font-semibold"
          >
            Appeler
          </a>
          <a
            href="mailto:contact@evuria.ca"
            className="border border-white px-6 py-3 rounded-xl"
          >
            Email
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>

        <div className="mt-6 space-y-2 text-gray-300">
          <div>📞 873-377-9297</div>
          <div>📧 contact@evuria.ca</div>
          <div>📍 Centre du Québec</div>
        </div>
      </section>

    </div>
  );
}
