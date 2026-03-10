import { Routes, Route, Link, useParams } from "react-router-dom";

const projects = [
  {
    slug: "prediccion-precios-autos",
    title: "Predicción de precios de autos",
    subtitle: "Machine Learning · Random Forest · Streamlit",
    description:
      "Modelo de regresión para estimar precios de vehículos usados, con pipeline de preprocesamiento, evaluación y despliegue interactivo.",
    impact:
      "Enfoque en precisión, interpretabilidad y presentación profesional del proyecto.",
    problem:
      "El objetivo fue estimar el precio de vehículos usados a partir de variables técnicas y comerciales, para apoyar decisiones de compra, venta o valuación.",
    approach:
      "Se realizó limpieza de datos, tratamiento de valores faltantes, codificación de variables categóricas y comparación de modelos de regresión para elegir la mejor alternativa.",
    metrics:
      ["RMSE para medir error de predicción", "Comparación entre modelos base y modelo final", "Evaluación de capacidad de generalización"],
    result:
      "Se obtuvo un modelo capaz de estimar precios con desempeño competitivo, mostrando dominio de un flujo completo de regresión aplicado a un caso realista.",
    stack: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Streamlit"],
    dataset: "Dataset de vehículos usados con variables como marca, modelo, kilometraje, potencia y año de registro.",
    learnings: [
      "Importancia del preprocesamiento en variables categóricas",
      "Relación entre interpretabilidad y desempeño del modelo",
      "Valor de desplegar un modelo para hacerlo tangible al usuario final",
    ],
    github: "https://github.com/jfrf98/RustyBargain",
    demo: "https://tu-demo-autos.streamlit.app",
  },
  {
    slug: "analisis-churn-clientes",
    title: "Análisis de churn de clientes",
    subtitle: "Clasificación · EDA · Métricas de negocio",
    description:
      "Proyecto orientado a detectar clientes con riesgo de abandono, conectando variables clave con decisiones de retención.",
    impact:
      "Traducción de resultados técnicos a recomendaciones accionables para negocio.",
    problem:
      "El objetivo fue identificar clientes con alta probabilidad de abandono para apoyar estrategias de retención y priorización comercial.",
    approach:
      "Se desarrolló análisis exploratorio, transformación de variables, entrenamiento de modelos de clasificación y comparación con métricas alineadas al negocio.",
    metrics:
      ["F1-score para balancear precision y recall", "AUC-ROC para evaluar capacidad discriminativa", "Análisis de matriz de confusión"],
    result:
      "El proyecto permitió detectar patrones de abandono y convertirlos en una lógica accionable para negocio y retención de clientes.",
    stack: ["Python", "Pandas", "Scikit-learn", "EDA", "Classification"],
    dataset: "Dataset de clientes con variables demográficas, de uso del servicio y comportamiento histórico.",
    learnings: [
      "No siempre la accuracy es la mejor métrica",
      "El problema de churn requiere conectar modelo con impacto de negocio",
      "El análisis exploratorio mejora mucho la calidad del modelado",
    ],
    github: "https://github.com/tuusuario/proyecto-churn",
    demo: "https://tu-demo-churn.streamlit.app",
  },
  {
    slug: "dashboards-analisis-datos",
    title: "Dashboards y análisis de datos",
    subtitle: "Python · SQL · Storytelling",
    description:
      "Exploración de datos, generación de insights y visualización clara para apoyar decisiones basadas en datos.",
    impact:
      "Comunicación efectiva entre análisis técnico y contexto de negocio.",
    problem:
      "El objetivo fue convertir datos crudos en información útil para monitoreo, análisis y toma de decisiones ejecutivas.",
    approach:
      "Se trabajó con consultas, limpieza, análisis exploratorio, visualización de métricas clave y estructuración narrativa de hallazgos.",
    metrics:
      ["KPIs de negocio definidos según el caso", "Consistencia de indicadores", "Claridad visual y capacidad de interpretación"],
    result:
      "Se construyó un caso sólido de análisis orientado a negocio, fortaleciendo la parte de storytelling y comunicación de insights.",
    stack: ["Python", "SQL", "Pandas", "Data Visualization", "Storytelling"],
    dataset: "Conjunto de datos de negocio con información transaccional, usuarios, métricas de comportamiento y variables temporales.",
    learnings: [
      "La visualización debe responder preguntas, no solo verse bien",
      "SQL y Python se complementan muy bien en análisis profesional",
      "Storytelling hace que un análisis tenga más impacto",
    ],
    github: "https://github.com/tuusuario/proyecto-dashboards",
    demo: "https://tu-demo-dashboards.streamlit.app",
  },
];

const skills = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Machine Learning",
  "EDA",
  "Model Evaluation",
  "Data Visualization",
  "Streamlit",
  "Git & GitHub",
  "Jupyter Notebook",
];

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-cyan-400/5 to-emerald-400/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                Data Scientist Jr · QA Background · Personal Brand
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Hi, I'm <span className="text-cyan-300">Francisco</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                My goal is to transform data analysis, machine learning models, and 
                visualizations into actionable insights that support data-driven decisions. 
                I focus on identifying relevant patterns in data and communicating results 
                clearly to both technical and non-technical stakeholders, ensuring that 
                analytical work translates into real business value.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#proyectos"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-950 shadow-lg transition hover:scale-[1.02]"
                >
                  Ver proyectos
                </a>
                <a
                  href="#contacto"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-slate-100 transition hover:bg-white/5"
                >
                  Contacto
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Resumen profesional</h2>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Disponible para oportunidades
                  </span>
                </div>
                <p className="text-slate-300 leading-7">
                  Transition is a natural part of human development: learning, adapting, and continuously evolving. 
                  In my case, that journey led me from the world of QA into the field of Data Science, where I discovered 
                  the opportunity to turn data into meaningful insights and data-driven decisions.

                  Today, I am developing my career in Data Science and Machine Learning, building analytical solutions 
                  that combine data exploration, modeling, and rigorous evaluation. My background in QA strengthened my 
                  attention to detail, validation mindset, and focus on data quality—skills that are essential when working 
                  with data and machine learning models.

                  I have developed projects using Python and SQL for data analysis, feature engineering, and predictive 
                  modeling, applying machine learning techniques and evaluation metrics to assess model performance. I enjoy 
                  working across the full analytical workflow, from exploratory data analysis and data preparation to model 
                  development and communicating insights through data storytelling.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-slate-400">Enfoque</p>
                    <p className="mt-1 font-medium">ML, análisis y portafolio profesional</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-slate-400">Fortaleza</p>
                    <p className="mt-1 font-medium">Rigor analítico + mentalidad de negocio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Sobre mí
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Datos, negocio y comunicación</h2>
            <p className="mt-6 text-slate-300 leading-8">
              Me interesa construir una carrera sólida como Data Scientist / ML Engineer. Estoy
              desarrollando proyectos donde combino análisis exploratorio, modelado, validación y
              narrativa visual para presentar soluciones más profesionales, legibles y alineadas con
              necesidades reales del negocio.
            </p>
            <p className="mt-4 text-slate-300 leading-8">
              Mi experiencia en QA fortaleció mi disciplina, mi atención al detalle y mi enfoque en la
              calidad, lo que hoy se traduce en mejores prácticas para trabajar con datos, pipelines y
              modelos de machine learning.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Stack principal</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Proyectos destacados
          </p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold md:text-4xl">Trabajo técnico con enfoque profesional</h2>
            <p className="max-w-2xl text-slate-300 leading-7">
              Cada proyecto busca demostrar capacidad técnica, estructura, criterio analítico y conexión
              con impacto de negocio.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl transition hover:-translate-y-1"
              >
                <p className="text-sm text-cyan-300">{project.subtitle}</p>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-slate-300 leading-7">{project.description}</p>

                <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-emerald-300">Lo que demuestra</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">{project.impact}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={`/proyecto/${project.slug}`}
                    className="inline-block rounded-2xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5"
                  >
                    Ver caso
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/20"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:opacity-90"
                  >
                    Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Python y ML</h3>
            <p className="mt-3 text-slate-300 leading-7">
              Desarrollo de notebooks y pipelines para clasificación, regresión, evaluación y mejora de modelos.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">SQL y análisis</h3>
            <p className="mt-3 text-slate-300 leading-7">
              Consultas, limpieza, exploración y transformación de datos para responder preguntas de negocio.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Storytelling</h3>
            <p className="mt-3 text-slate-300 leading-7">
              Comunicación clara de hallazgos con visualizaciones, estructura narrativa e impacto ejecutivo.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 md:p-10">
            <h2 className="text-3xl font-bold md:text-4xl">Construyamos algo juntos</h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-8">
              Estoy buscando oportunidades para crecer en Data Science, Data Analytics y Machine Learning.
              También me interesa colaborar en proyectos donde los datos ayuden a tomar mejores decisiones.
            </p>
            <div className="mt-8 flex flex-col items-center gap-6">

              {/* botones sociales */}
              <div className="flex gap-4">
                <a
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-950"
                  href="https://www.linkedin.com/in/TU-USUARIO"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a
                  className="rounded-2xl border border-white/15 px-6 py-3 font-medium"
                  href="https://github.com/jfrf98"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>

              {/* formulario */}
              <form
                action="https://formspree.io/f/TU_FORM_ID"
                method="POST"
                className="flex flex-col gap-4 w-full max-w-md"
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Asunto"
                  className="rounded-lg bg-slate-800 border border-white/10 px-4 py-3"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Mensaje"
                  rows="4"
                  className="rounded-lg bg-slate-800 border border-white/10 px-4 py-3"
                  required
                />

                <button
                  type="submit"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-medium text-slate-950"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-20 text-slate-100">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-block rounded-2xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5"
          >
            ← Volver al inicio
          </Link>
          <h1 className="mt-8 text-4xl font-bold">Proyecto no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="border-b border-white/10 bg-gradient-to-br from-sky-500/10 via-cyan-400/5 to-emerald-400/10">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Link
            to="/"
            className="inline-block rounded-2xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5"
          >
            ← Volver al inicio
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Caso de estudio
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">{project.title}</h1>
          <p className="mt-4 text-lg text-cyan-200">{project.subtitle}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 font-medium text-cyan-100 transition hover:bg-cyan-400/20"
            >
              Ver GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:opacity-90"
            >
              Ver demo
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Problema de negocio</h2>
            <p className="mt-4 leading-7 text-slate-300">{project.problem}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Enfoque técnico</h2>
            <p className="mt-4 leading-7 text-slate-300">{project.approach}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Dataset</h2>
            <p className="mt-4 leading-7 text-slate-300">{project.dataset}</p>
          </div>

          <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/5 p-6">
            <h2 className="text-xl font-semibold text-emerald-300">Resultado / impacto</h2>
            <p className="mt-4 leading-7 text-slate-200">{project.result}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Métricas / evaluación</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {project.metrics.map((metric) => (
                <li key={metric} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {metric}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Aprendizajes</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {project.learnings.map((learning) => (
                <li
                  key={learning}
                  className="rounded-xl border border-cyan-400/10 bg-cyan-400/5 px-4 py-3"
                >
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Stack utilizado</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/proyecto/:slug" element={<ProjectPage />} />
    </Routes>
  );
}
