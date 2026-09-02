const technologies = {
  backend: ["C#", "ASP.NET Core", "Minimal APIs", "API REST", "Java", "Spring Boot"],
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Flutter", "Tailwind CSS"],
  data: ["PostgreSQL", "SQL", "MySQL", "Firebase", "Docker", "Git", "JWT"],
};

const projects = [
  {
    number: "01",
    eyebrow: "E-commerce · Proyecto funcional",
    title: "Plataforma de cursos jurídicos",
    description:
      "API y experiencia responsive con catálogo, filtros, buscador, ficha de curso, carrito persistente y checkout demostrativo.",
    stack: ["ASP.NET Core", "C#", "React", "TypeScript"],
    accent: "mint",
  },
  {
    number: "02",
    eyebrow: "Backend · API REST",
    title: "Gestión de casos y citas",
    description:
      "API segura para casos jurídicos, agendamiento, roles, fechas límite y vencimientos, desarrollada con pruebas unitarias.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    accent: "blue",
  },
  {
    number: "03",
    eyebrow: "Full stack · En desarrollo",
    title: "Servicios jurídicos",
    description:
      "Base de plataforma para autenticación, reserva de citas, pagos, agenda, mensajería y panel administrativo.",
    stack: ["Next.js", "Prisma", "Supabase", "JWT"],
    accent: "coral",
  },
  {
    number: "04",
    eyebrow: "Multiplataforma · Terminado",
    title: "Aplicación de Sudoku",
    description:
      "Juego con dificultades, límites de errores, cronómetro, pistas, puntuación, temas y soporte multilingüe.",
    stack: ["Flutter", "Dart", "Provider", "Hive"],
    accent: "lime",
  },
];

const experienceHighlights = [
  "Diseñé y estructuré en PostgreSQL la base de datos en línea de una plataforma web de compras e inventarios.",
  "Construí consultas SQL, joins y triggers para sincronizar productos y generar reservas entre bases de datos.",
  "Desarrollé y mejoré componentes en React y JavaScript para productos, compras en línea y gestión de reservas.",
  "Participé en un sistema de invernaderos con Python y Firebase para procesar mediciones de humedad y temperatura.",
  "Apliqué Random Forest y reglas por cultivo para automatizar aspersores y ventiladores según los sensores.",
  "Creé en MySQL la estructura de usuarios y parámetros operativos, junto con su interfaz de consulta y edición.",
];

export default function Home() {
  return (
    <main id="inicio">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <section className="hero" aria-labelledby="hero-title">
        <header className="site-header shell">
          <a className="brand" href="#inicio" aria-label="Ir al inicio">
            <span className="brand-mark">OG</span>
            <span className="brand-name">Oscar Gaviria</span>
          </a>
          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#perfil">Perfil</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#formacion">Formación</a>
          </nav>
          <a className="header-cta" href="mailto:oscardavid21.96@gmail.com">
            Hablemos <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse" aria-hidden="true" />
              Perfil tecnológico con visión de negocio
            </div>
            <p className="hero-kicker">Desarrollador .NET · Backend · Datos</p>
            <h1 id="hero-title">
              Hago que el código
              <span>entienda el negocio.</span>
            </h1>
            <p className="hero-lead">
              Soy <strong>Oscar David Gaviria Martínez</strong>, Ingeniero de Sistemas y
              Administrador Financiero. Construyo soluciones web claras, funcionales y
              respaldadas por datos para resolver necesidades reales.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">
                Ver proyectos <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-secondary" href="/Oscar-David-Gaviria-CV.pdf" download>
                Descargar CV <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-socials" aria-label="Perfiles y contacto">
              <a href="https://github.com/oscardavid2196" target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/oscar-david-gaviria-martinez-a408602b1/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <span>Ibagué, Colombia</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Retrato profesional de Oscar Gaviria">
            <div className="portrait-frame">
              <div className="portrait-label">PORTFOLIO / 2026</div>
              <img
                src="/oscar-gaviria.jpg"
                width="354"
                height="472"
                alt="Oscar David Gaviria Martínez"
                fetchPriority="high"
              />
              <div className="portrait-code" aria-hidden="true">
                <span>&lt;developer&gt;</span>
                <span>business-minded</span>
              </div>
            </div>
            <div className="hero-metric metric-experience">
              <strong>2+</strong>
              <span>años de experiencia</span>
            </div>
            <div className="hero-metric metric-focus">
              <span className="metric-dot" aria-hidden="true" />
              <span>.NET · SQL · APIs</span>
            </div>
          </div>
        </div>

        <div className="hero-strip" aria-label="Resumen profesional">
          <div className="shell hero-strip-inner">
            <div><strong>01</strong><span>Software con propósito</span></div>
            <div><strong>02</strong><span>Datos bien estructurados</span></div>
            <div><strong>03</strong><span>Visión financiera</span></div>
            <div><strong>B2</strong><span>Inglés intermedio alto</span></div>
          </div>
        </div>
      </section>

      <div id="contenido">
        <section className="section profile-section" id="perfil" aria-labelledby="perfil-title">
          <div className="shell split-heading">
            <div className="section-index">
              <span>01</span>
              <p>Perfil profesional</p>
            </div>
            <div className="profile-content">
              <h2 id="perfil-title">Tecnología que habla el idioma de la empresa.</h2>
              <div className="profile-columns">
                <p className="profile-intro">
                  He participado en soluciones empresariales de compras, inventarios e
                  invernaderos. Mi perfil combina desarrollo, bases de datos y análisis para
                  convertir procesos complejos en productos digitales útiles.
                </p>
                <div className="recruiter-note">
                  <span>Mi diferencial</span>
                  <p>
                    Entiendo tanto la lógica del software como las decisiones financieras y
                    operativas que ese software debe apoyar.
                  </p>
                </div>
              </div>

              <div className="value-grid">
                <article>
                  <span className="value-number">A</span>
                  <h3>Backend confiable</h3>
                  <p>APIs, lógica de negocio y seguridad con C#, ASP.NET Core y Java.</p>
                </article>
                <article>
                  <span className="value-number">B</span>
                  <h3>Datos con estructura</h3>
                  <p>Modelado, consultas e integración con PostgreSQL, SQL y MySQL.</p>
                </article>
                <article>
                  <span className="value-number">C</span>
                  <h3>Contexto de negocio</h3>
                  <p>Formación financiera para comprender costos, procesos e indicadores.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experiencia" aria-labelledby="experiencia-title">
          <div className="shell split-heading">
            <div className="section-index light-index">
              <span>02</span>
              <p>Trayectoria</p>
            </div>
            <div className="experience-content">
              <div className="section-title-row">
                <h2 id="experiencia-title">Experiencia profesional</h2>
                <span className="experience-total">2+ años construyendo soluciones</span>
              </div>

              <article className="timeline-card">
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-head">
                  <div>
                    <p>PANACEA S.A.S.</p>
                    <h3>Desarrollador Junior</h3>
                  </div>
                  <time>Jun 2022 — Jul 2024</time>
                </div>
                <ul>
                  {experienceHighlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="experience-stack" aria-label="Tecnologías utilizadas">
                  {[
                    "PostgreSQL",
                    "SQL",
                    "React",
                    "JavaScript",
                    "Python",
                    "Firebase",
                    "MySQL",
                    "Random Forest",
                  ].map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="proyectos" aria-labelledby="proyectos-title">
          <div className="shell">
            <div className="projects-heading">
              <div className="section-index dark-index">
                <span>03</span>
                <p>Práctica aplicada</p>
              </div>
              <div>
                <h2 id="proyectos-title">Proyectos que convierten ideas en producto.</h2>
                <p>Experiencias de backend, web y desarrollo multiplataforma.</p>
              </div>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className={`project-card project-${project.accent}`} key={project.number}>
                  <div className="project-topline">
                    <span>{project.number}</span>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section stack-section" aria-labelledby="stack-title">
          <div className="shell split-heading">
            <div className="section-index">
              <span>04</span>
              <p>Herramientas</p>
            </div>
            <div className="stack-content">
              <h2 id="stack-title">Un stack versátil, con foco en backend y datos.</h2>
              <div className="stack-groups">
                <div>
                  <p>Backend</p>
                  <ul>{technologies.backend.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <p>Frontend</p>
                  <ul>{technologies.frontend.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <p>Datos y herramientas</p>
                  <ul>{technologies.data.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section education-section" id="formacion" aria-labelledby="formacion-title">
          <div className="shell split-heading">
            <div className="section-index light-index">
              <span>05</span>
              <p>Formación</p>
            </div>
            <div className="education-content">
              <div className="section-title-row">
                <h2 id="formacion-title">Formación técnica y visión financiera.</h2>
                <p>Dos disciplinas que se complementan para construir mejor.</p>
              </div>

              <div className="education-grid">
                <article className="education-card featured-degree">
                  <span>2024</span>
                  <p>Universidad Cooperativa de Colombia</p>
                  <h3>Ingeniería de Sistemas</h3>
                  <div className="degree-footer">Tecnología · Software · Datos</div>
                </article>
                <article className="education-card finance-degree">
                  <span>27 SEP 2024</span>
                  <p>Universidad del Tolima</p>
                  <h3>Administración Financiera</h3>
                  <div className="degree-footer">Finanzas · Gestión · Negocio</div>
                </article>
                <article className="education-card technical-degree">
                  <span>FORMACIÓN TÉCNICA</span>
                  <p>Perfil auxiliar contable</p>
                  <h3>Contabilización de operaciones comerciales y financieras</h3>
                  <div className="degree-footer">Contabilidad · Operación · Precisión</div>
                </article>
              </div>

              <div className="continuous-learning">
                <div>
                  <span>Aprendizaje continuo</span>
                  <h3>Siempre actualizando la caja de herramientas.</h3>
                </div>
                <ul>
                  <li><strong>Platzi</strong><span>.NET, C#, SQL, PostgreSQL, Java, Python, prompts, LLM e IA aplicada.</span></li>
                  <li><strong>Udemy</strong><span>Spring Boot, Spring Framework, React, Angular y Máster en Java.</span></li>
                  <li><strong>IA para desarrollo</strong><span>Copilot, ChatGPT, Claude, Cursor y Codex para planear y construir software.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contacto" aria-labelledby="contacto-title">
          <div className="shell contact-grid">
            <div>
              <p className="contact-kicker">¿Tienes un reto técnico o una vacante?</p>
              <h2 id="contacto-title">Construyamos algo útil juntos.</h2>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href="mailto:oscardavid21.96@gmail.com">
                <span>Escríbeme</span>
                oscardavid21.96@gmail.com <b aria-hidden="true">↗</b>
              </a>
              <a href="tel:+573156557287">
                <span>Llámame</span>
                +57 315 655 7287 <b aria-hidden="true">↗</b>
              </a>
            </div>
          </div>
          <footer className="site-footer shell">
            <p>© {new Date().getFullYear()} Oscar David Gaviria Martínez</p>
            <div>
              <a href="https://github.com/oscardavid2196" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/oscar-david-gaviria-martinez-a408602b1/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="#inicio">Volver arriba ↑</a>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
