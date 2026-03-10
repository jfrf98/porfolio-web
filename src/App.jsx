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
    slug: "online-gaming-bahavior",
    title: "Online Gaming Behavior",
    subtitle: "Analysis · EDA · Predictive Modeling",
    description:
      "This project is oriented on the behavioral analysis of online gamers to detect the best correlation between key variables to predict the level of gaming engagement",
    impact:
      "Player retention, personlized marketing, game development and monetization strategy.",
    problem:
      "Identifying players bahavior to understand critical feature to predict, in this case level of engagement, to avoid gamers churn and develop new strategies for retention and improve players engagement.",
    approach:
      "Exploratory analysis, feature engineering, classifcation model training and metrics comparison align with business rules.",
    metrics:
      ["F1-score for balancing precision and recall", "AUC-ROC to evaluate discriminative capabilty", "Confusion Matrix Analysis"],
    result:
      "The project allowed detecting patterns in gamers behavior converting them into actionable logic, detecting key feature to make our predictive target. We find out that our different model were all good enough to be used in production, its just a matter of which has the best computational processing.",
    stack: ["Python", "Pandas", "Scikit-learn", "EDA", "Classification","Model Evaluation", "XGBoost", "Catboost","AUC-ROC","Precision","Accuracy","Recall", "F1 Score"],
    dataset: "Dataset with demographic variables, time spent in games and categorical variables such as game genre and level of egangement.",
    learnings: [
      "This project demonstrates how player behavior data can be leveraged to predict engagement levels using machine learning. The results show that gameplay intensity and progression metrics are the strongest indicators of engagement, highlighting the importance of activity patterns in understanding player commitment."
    ],
    github: "https://github.com/jfrf98/Online_Gaming_Behavior",
    demo: "https://tu-demo-churn.streamlit.app",
  },
  {
    slug: "dashboards-data-analysis",
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
          <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                Data Scientist · QA Background · Personal Brand
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
                  Projects
                </a>
                <a
                  href="#contacto"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-slate-100 transition hover:bg-white/5"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-cyan-400/20 bg-slate-900 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Professional Summary</h2>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    Open to new opportunities
                  </span>
                </div>
                <div className="flex flex-col items-center text-left">
                  <div className="w-full text-slate-300 leading-8 space-y-4">

                    <p>
                      Data Scientist with hands-on experience in end-to-end machine learning workflows, predictive modeling, 
                      and large-scale data analysis. Skilled in data curation, feature engineering, model evaluation, and 
                      quality assessment across multiple business use cases. Experienced in working with structured and 
                      unstructured data, leveraging Python and SQL to build analytical pipelines and support model development. 
                      Strong experimental mindset with attention to detail and ability to translate technical findings into business 
                      insights. Background in QA testing enhances rigor in validation, data governance, and quality control processes.
                    </p>

                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-slate-400">Focus</p>
                    <p className="mt-1 font-medium">ML, data analysis and modeling</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-slate-400">Strengths</p>
                    <p className="mt-1 font-medium">Analitical criteria + Business perspective</p>
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
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Data, Business and Communication</h2>
            <p className="mt-6 text-slate-300 leading-8">
              I am interested in building a solid career as a Data Scientist / ML Engineer. I am
              developing projects where I combine exploratory analysis, modeling, and validation with
              visual narrative and presenting professional solutions, readability and alignment with real business needs.
            </p>
            <p className="mt-4 text-slate-300 leading-8">
              My experience in QA strengthened my discipline, attention to detail and focus on quality,
              which today translates into better practices for working with data, pipelines and
              machine learning models.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Tech Stack</h3>
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
            Featured Projects
          </p>
          <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold md:text-4xl">Technical Work with Professional Focus</h2>
            <p className="max-w-2xl text-slate-300 leading-7">
              Each project aims to demonstrate technical capability, structure, analytical criteria and connection
              with business impact. The goal is to show not only the technical solution, but also the process, 
              learnings and value generated in each case, presenting valuable insights and patterns for a better
              understanding of the work done and the potential solutions.
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
                    See details
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
            <h3 className="text-lg font-semibold">Python & MachineLearning</h3>
            <p className="mt-3 text-slate-300 leading-7">
              Develope notebooks and pipelines for classification, regression, evaluation and improvement of models.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">SQL & analysis</h3>
            <p className="mt-3 text-slate-300 leading-7">
              Queries, data cleaning, exploration and transformation to answer business questions.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Storytelling</h3>
            <p className="mt-3 text-slate-300 leading-7">
              Clear communication of findings with visualizations, narrative structure and executive impact.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 p-8 md:p-10">
            <h2 className="text-3xl font-bold md:text-4xl">Construyamos algo juntos</h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-8">
              I'm looking for new opportunities to develop and grow in Data Science, Data Analytics and Machine Learning. 
              I am also interested in collaborating on projects where data helps to make strategic decisions for a with 
              real business impact.
            </p>
            <div className="mt-8 flex flex-col items-center gap-6">

              {/* botones sociales */}
              <div className="flex gap-4">
                <a
                  className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-950"
                  href="https://www.linkedin.com/in/franciscorodriguez-datascientist/"
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
                action="https://formspree.io/f/mgonepqj"
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
                  Send message
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
            ← Home
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
            ← Home
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Case Study
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
              See GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:opacity-90"
            >
              See demo
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Business Problem</h2>
            <p className="mt-4 leading-7 text-slate-300">{project.problem}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Technical approach</h2>
            <p className="mt-4 leading-7 text-slate-300">{project.approach}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Dataset</h2>
            <p className="mt-4 leading-7 text-slate-300">{project.dataset}</p>
          </div>

          <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/5 p-6">
            <h2 className="text-xl font-semibold text-emerald-300">Result / Impact</h2>
            <p className="mt-4 leading-7 text-slate-200">{project.result}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">MMetrics / Evaluation</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {project.metrics.map((metric) => (
                <li key={metric} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {metric}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Learnings</h2>
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
          <h2 className="text-xl font-semibold">Stack utilized</h2>
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
