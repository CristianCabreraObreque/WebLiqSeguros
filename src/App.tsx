import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Building2,
  Users,
  Flame,
  Wrench,
  Building,
  History,
  Award,
  Briefcase,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/logo.jpeg" alt="PLS" className="h-12" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors`}
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors`}
              >
                Nosotros
              </a>
              <a
                href="#historia"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors`}
              >
                Historia
              </a>
              <a
                href="#servicios"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors`}
              >
                Servicios
              </a>
              <a
                href="#contacto"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors`}
              >
                Contacto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
              <div className="flex flex-col space-y-4 px-4">
                <a
                  href="#inicio"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </a>
                <a
                  href="#nosotros"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nosotros
                </a>
                <a
                  href="#historia"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Historia
                </a>
                <a
                  href="#servicios"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </a>
                <a
                  href="#contacto"
                  className="text-gray-800 hover:text-blue-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expertos en Liquidación de Seguros
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Más de 30 años de experiencia en el mercado asegurador chileno
            </p>
            <a
              href="#contacto"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Empresa
            </h2>
            <p className="text-lg text-gray-600">
              Somos una empresa líder en liquidación de seguros, comprometida
              con la excelencia y la satisfacción de nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <History className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Experiencia</h3>
              <p className="text-gray-600">
                Más de tres décadas de experiencia en el mercado asegurador
                chileno, brindando soluciones efectivas y profesionales.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Award className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Profesionalismo</h3>
              <p className="text-gray-600">
                Equipo altamente calificado y comprometido con la excelencia en
                cada proceso de liquidación.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Servicio Integral</h3>
              <p className="text-gray-600">
                Atención personalizada y seguimiento detallado de cada caso para
                garantizar la mejor resolución.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="historia" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Nuestra Historia
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed text-gray-700">
                  Paredes Liquidadores de Seguros (PLS) es una firma de
                  liquidación de seguros que nace con el propósito de brindar un
                  servicio altamente especializado en la gestión y resolución de
                  siniestros comerciales e industriales.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                  La empresa se constituye bajo la sociedad de Rogelio Paredes
                  Flores, un reconocido Liquidador Oficial de Seguros con una
                  vasta trayectoria en el mercado de liquidaciones de
                  siniestros, consolidada a lo largo de décadas de experiencia
                  en el sector asegurador.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                  Además, cuenta con la participación de Mauricio Pardes
                  Espinoza como Gestor Comercial y Operaciones, quien aporta su
                  experiencia en la administración y gestión estratégica de
                  siniestros, fortaleciendo el compromiso de la empresa con la
                  excelencia y la eficiencia en el servicio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Nuestros Servicios
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Building2 className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Seguros Generales</h3>
              <p className="text-gray-600">
                Liquidación de siniestros en todas las áreas de seguros
                generales, incluyendo property, responsabilidad civil y
                transportes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Flame className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Incendio y Aliados</h3>
              <p className="text-gray-600">
                Especialistas en siniestros de incendio y riesgos catastróficos,
                con amplia experiencia en eventos de gran magnitud.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Building className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Ingeniería y Construcción
              </h3>
              <p className="text-gray-600">
                Liquidación especializada en proyectos de construcción,
                maquinaria y equipos industriales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Wrench className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Averías de Maquinaria
              </h3>
              <p className="text-gray-600">
                Evaluación y liquidación de daños en maquinaria industrial y
                equipos especializados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Responsabilidad Civil
              </h3>
              <p className="text-gray-600">
                Gestión de siniestros de responsabilidad civil general,
                profesional y de productos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Briefcase className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Riesgos Varios</h3>
              <p className="text-gray-600">
                Atención integral de siniestros en diversos ramos, adaptándonos
                a las necesidades específicas de cada caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Cases Section */}
      <section id="casos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Casos Relevantes
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🔥</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Incendio en Planta Industrial
                  </h3>
                  <p className="text-blue-600 font-semibold">$299.359.921</p>
                  <p className="text-gray-600 text-sm">Región Metropolitana</p>
                </div>
              </div>
              <p className="text-gray-600">
                Un devastador incendio arrasó con más de 1.000 m² de galpones en
                una empresa agrícola, consumiendo toda la infraestructura y
                activos. Nuestro equipo gestionó exitosamente la liquidación del
                siniestro, asegurando una rápida indemnización para la pronta
                recuperación del negocio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🏗️</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Derrumbe de Excavadora
                  </h3>
                  <p className="text-blue-600 font-semibold">$31.462.363</p>
                  <p className="text-gray-600 text-sm">Octava Región</p>
                </div>
              </div>
              <p className="text-gray-600">
                Mientras operaba al interior de una cantera, una excavadora fue
                impactada por un derrumbe masivo desde el talud. Gracias a la
                intervención oportuna del operador, se evitó una tragedia.
                Nuestro rol fue clave para agilizar la resolución y compensación
                por los daños estructurales.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🍔</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Incendio en Cadena de Comida Rápida
                  </h3>
                  <p className="text-blue-600 font-semibold">$184.081.264</p>
                  <p className="text-gray-600 text-sm">Región Metropolitana</p>
                </div>
              </div>
              <p className="text-gray-600">
                Un voraz incendio consumió un reconocido local comercial,
                propagándose a otros negocios colindantes. Nuestro equipo apoyó
                en cada paso del proceso, permitiendo a los asegurados enfrentar
                con éxito este siniestro total.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🌊</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Volcamiento de Retroexcavadora
                  </h3>
                  <p className="text-blue-600 font-semibold">$25.803.310</p>
                  <p className="text-gray-600 text-sm">Octava Región</p>
                </div>
              </div>
              <p className="text-gray-600">
                Una máquina móvil fue arrastrada por el terreno inestable hasta
                el mar. Los daños a los sistemas mecánicos fueron
                significativos. Intervinimos de inmediato para validar la
                cobertura y asegurar una compensación justa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🧯</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Incendio en Mall del Centro
                  </h3>
                  <p className="text-blue-600 font-semibold">$72.207.980</p>
                  <p className="text-gray-600 text-sm">Región Metropolitana</p>
                </div>
              </div>
              <p className="text-gray-600">
                Un siniestro en el segundo nivel de un mall afectó gravemente a
                un local de comida rápida, obligándolo a detener operaciones.
                Nuestro trabajo permitió cubrir tanto los daños materiales como
                las pérdidas por interrupción de actividades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🏠</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Incendio en Vivienda
                  </h3>
                  <p className="text-blue-600 font-semibold">$59.572.557</p>
                  <p className="text-gray-600 text-sm">Octava Región</p>
                </div>
              </div>
              <p className="text-gray-600">
                Un incendio amenazó con destruir por completo una casa
                habitación. La rápida actuación de Bomberos evitó una tragedia
                mayor. Nuestro respaldo fue clave para restaurar el hogar y la
                tranquilidad de la familia afectada.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🔒</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Robo en Empresa Minera
                  </h3>
                  <p className="text-blue-600 font-semibold">$51.595.421</p>
                  <p className="text-gray-600 text-sm">Región Metropolitana</p>
                </div>
              </div>
              <p className="text-gray-600">
                Delincuentes accedieron a oficinas y bodegas de una empresa
                proveedora de insumos mineros. Nuestro equipo facilitó una
                investigación ágil y una liquidación eficiente para reponer los
                activos sustraídos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🚨</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Robo a Empresa de Ingeniería
                  </h3>
                  <p className="text-blue-600 font-semibold">$48.395.367</p>
                  <p className="text-gray-600 text-sm">Octava Región</p>
                </div>
              </div>
              <p className="text-gray-600">
                Tras cortar la energía y desactivar alarmas, delincuentes
                sustrajeron especies clave para el funcionamiento de la empresa.
                Se gestionó la indemnización y reactivación de sus operaciones
                en tiempo récord.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🚗</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Incendio en Firma Automotriz
                  </h3>
                  <p className="text-blue-600 font-semibold">$326.729.996</p>
                  <p className="text-gray-600 text-sm">Región Metropolitana</p>
                </div>
              </div>
              <p className="text-gray-600">
                Un incendio nocturno en una firma automotriz causó graves
                pérdidas. La rápida intervención de nuestro equipo fue
                fundamental para contener el impacto económico y permitir la
                reconstrucción de la operación.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">💨</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Daños por Temporal
                  </h3>
                  <p className="text-blue-600 font-semibold">$38.259.878</p>
                  <p className="text-gray-600 text-sm">Octava Región</p>
                </div>
              </div>
              <p className="text-gray-600">
                Vientos extremos afectaron la techumbre de un galpón industrial.
                Nuestra evaluación técnica permitió una pronta reposición y
                continuidad operativa del asegurado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-3">🚜</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Robo de Maquinaria
                  </h3>
                  <p className="text-blue-600 font-semibold">$47.537.925</p>
                  <p className="text-gray-600 text-sm">Región Metropolitana</p>
                </div>
              </div>
              <p className="text-gray-600">
                Durante la madrugada, antisociales robaron maquinaria pesada
                tras intimidar a los guardias. Activamos el proceso de
                liquidación con celeridad, recuperando parte de las pérdidas
                gracias a nuestra gestión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Contáctanos
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-gray-600">+56 2 2234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">contacto@pls.cl</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-gray-600">
                        Av. Providencia 1208, Providencia, Santiago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="font-medium">Horario de Atención</p>
                      <p className="text-gray-600">
                        Lunes a Viernes: 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/logo.png" alt="PLS" className="h-12 mb-4" />
              <p className="text-gray-400">
                Expertos en liquidación de seguros con más de 30 años de
                experiencia en el mercado chileno.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-gray-400 hover:text-white">
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="text-gray-400 hover:text-white"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#historia"
                    className="text-gray-400 hover:text-white"
                  >
                    Historia
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-white"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-gray-400 hover:text-white"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Horario de Atención
              </h3>
              <p className="text-gray-400">Lunes a Viernes</p>
              <p className="text-gray-400">9:00 - 18:00</p>
              <div className="mt-4">
                <p className="text-gray-400">Emergencias 24/7</p>
                <p className="text-white font-semibold">+56 9 9876 5432</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Paredes Liquidadores de Seguros.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
