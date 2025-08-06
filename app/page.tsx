"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Users,
  Briefcase,
  User,
  LogOut,
  Home,
  FileText,
  MessageCircle,
  Plus,
  Eye,
  EyeOff,
  Shield,
  Mail,
  Phone,
  Calendar,
  Star,
  Edit,
  Camera,
  ArrowLeft,
  Bell,
  Settings,
  Code,
  BookOpen,
  FileEdit,
  ChevronDown,
} from "lucide-react"

type UserType = "student" | "employer"
type ViewType =
  | "login"
  | "dashboard"
  | "jobs"
  | "explore"
  | "applications"
  | "application-confirm"
  | "profile"
  | "post-job"
  | "messages"
  | "public-profile"

export default function UNAHChamba() {
  const [currentView, setCurrentView] = useState<ViewType>("login")
  const [userType, setUserType] = useState<UserType>("student")
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    account: "",
    email: "",
    password: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentView("dashboard")
  }

  const jobs = [
    {
      id: 1,
      title: "Asistente de Investigación",
      company: "UNAH",
      location: "Tegucigalpa",
      type: "Medio tiempo",
      salary: "L. 8,000 - L. 12,000",
      description: "Apoyo en proyectos de investigación científica y análisis de datos.",
      icon: Settings,
      requirements: [
        "Estudiante de Biología o carreras afines",
        "Conocimientos básicos de estadística",
        "Disponibilidad de 20 horas semanales",
      ],
      posted: "Hace 2 días",
      status: "active",
    },
    {
      id: 2,
      title: "Desarrollador Web",
      company: "Empresa Tech",
      location: "San Pedro Sula",
      type: "Por horas",
      salary: "L. 150/hora",
      description: "Desarrollo de aplicaciones web usando tecnologías modernas.",
      icon: Code,
      requirements: [
        "Estudiante de Ingeniería en Sistemas",
        "Conocimientos en React y Node.js",
        "Portfolio de proyectos",
      ],
      posted: "Hace 1 día",
      status: "active",
    },
    {
      id: 3,
      title: "Tutor de Matemáticas",
      company: "Curso Integral",
      location: "Tegucigalpa",
      type: "Tiempo completo",
      salary: "L. 15,000 - L. 18,000",
      description: "Brindar tutorías personalizadas a estudiantes de primer año.",
      icon: BookOpen,
      requirements: [
        "Estudiante de Matemáticas o Ingeniería",
        "Promedio académico mínimo de 85%",
        "Habilidades de comunicación",
      ],
      posted: "Hace 3 días",
      status: "active",
    },
    {
      id: 4,
      title: "Redactor de Contenidos",
      company: "Agencia Creativa",
      location: "La Ceiba",
      type: "Freelance",
      salary: "L. 200/artículo",
      description: "Creación de contenido digital para redes sociales y blogs.",
      icon: FileEdit,
      requirements: ["Estudiante de Comunicación o Periodismo", "Experiencia en redacción", "Conocimientos de SEO"],
      posted: "Hace 1 semana",
      status: "active",
    },
  ]

  const applications = [
    {
      id: 1,
      jobTitle: "Asistente de Investigación",
      company: "UNAH",
      appliedDate: "2024-01-15",
      status: "En revisión",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: 2,
      jobTitle: "Tutor de Matemáticas",
      company: "Curso Integral",
      appliedDate: "2024-01-10",
      status: "Aceptada",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      jobTitle: "Desarrollador Web",
      company: "Empresa Tech",
      appliedDate: "2024-01-08",
      status: "Rechazada",
      statusColor: "bg-red-100 text-red-800",
    },
  ]

  const messages = [
    {
      id: 1,
      name: "Dr. María González",
      company: "UNAH",
      lastMessage: "Hemos revisado tu aplicación y nos gustaría programar una entrevista...",
      time: "10:30 AM",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      company: "Empresa Tech",
      lastMessage: "Gracias por tu interés en la posición de desarrollador. Te contactaremos pronto.",
      time: "Ayer",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Mobile Header Component
  const MobileHeader = ({
    title,
    showBack = false,
    onBack,
  }: { title: string; showBack?: boolean; onBack?: () => void }) => (
    <div className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          {showBack && (
            <Button variant="ghost" size="sm" onClick={onBack} className="p-1">
              <ArrowLeft className="w-5 h-5 text-unah-blue" />
            </Button>
          )}
          <div className="flex items-center space-x-2">
          <div className="w-8 h-8 relative">
            <img src="/logo.png" alt="UNAHChamba" className="w-full h-full object-contain" />
          </div>
            <h1 className="text-lg font-bold text-unah-blue">{title}</h1>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5 text-unah-blue" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setCurrentView("login")} className="p-2">
            <LogOut className="w-5 h-5 text-unah-blue" />
          </Button>
        </div>
      </div>
    </div>
  )

  // Mobile Bottom Navigation
  const BottomNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-10">
      <div className="flex justify-around py-2">
        <Button
          variant="ghost"
          onClick={() => setCurrentView("dashboard")}
          className={`flex flex-col items-center space-y-1 p-2 ${
            currentView === "dashboard" ? "text-unah-blue" : "text-gray-500"
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-xs">Inicio</span>
        </Button>
        <Button
          variant="ghost"
          onClick={() => setCurrentView("explore")}
          className={`flex flex-col items-center space-y-1 p-2 ${
            currentView === "explore" ? "text-unah-blue" : "text-gray-500"
          }`}
        >
          <Search className="w-5 h-5" />
          <span className="text-xs">Ofertas</span>
        </Button>
        <Button
          variant="ghost"
          onClick={() => setCurrentView("applications")}
          className={`flex flex-col items-center space-y-1 p-2 ${
            currentView === "applications" ? "text-unah-blue" : "text-gray-500"
          }`}
        >
          <FileText className="w-5 h-5" />
          <span className="text-xs">Postulaciones</span>
        </Button>
        <Button
          variant="ghost"
          onClick={() => setCurrentView("messages")}
          className={`flex flex-col items-center space-y-1 p-2 ${
            currentView === "messages" ? "text-unah-blue" : "text-gray-500"
          }`}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs">Mensajes</span>
        </Button>
        <Button
          variant="ghost"
          onClick={() => setCurrentView("public-profile")}
          className={`flex flex-col items-center space-y-1 p-2 ${
            currentView === "public-profile" ? "text-unah-blue" : "text-gray-500"
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-xs">Perfil</span>
        </Button>
      </div>
    </div>
  )

  // Login View - Mobile Optimized
  if (currentView === "login") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-sm shadow-lg border-0">
          <CardHeader className="text-center space-y-4 pb-6">
          <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center relative">
            <img src="/logo.png" alt="UNAHChamba" className="w-full h-full object-contain" />
          </div>
            <div>
              <CardTitle className="text-xl font-bold text-unah-blue mb-1">UNAHChamba</CardTitle>
              <p className="text-sm text-gray-600">
                {userType === "student" ? "Ingresa como Estudiante" : "Ingrese como Empleador"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {userType === "student"
                  ? "Ingresa tus datos para acceder a la plataforma."
                  : "Ingrese sus datos para acceder a la plataforma."}
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-unah-blue">
                  {userType === "student" ? "No. de Cuenta" : "Correo Institucional"}
                </label>
                <div className="relative">
                  <Input
                    type={userType === "student" ? "text" : "email"}
                    placeholder={userType === "student" ? "Número de Cuenta" : "Correo Institucional"}
                    value={userType === "student" ? loginData.account : loginData.email}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        [userType === "student" ? "account" : "email"]: e.target.value,
                      })
                    }
                    className="pl-10 pr-10 h-12 border-gray-200 focus:border-unah-blue rounded-lg"
                    required
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Shield className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-unah-blue">Contraseña</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Contraseña"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="pl-10 pr-16 h-12 border-gray-200 focus:border-unah-blue rounded-lg"
                    required
                  />
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                      className="p-0 h-auto"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Shield className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {userType === "employer" && (
                <div className="text-center">
                  <a href="#" className="text-sm text-unah-blue hover:underline">
                    ¿Ha olvidado su contraseña?
                  </a>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-unah-blue hover:bg-blue-800 text-white h-12 font-medium rounded-lg"
              >
                Iniciar Sesión
              </Button>

              <div className="text-center">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setUserType(userType === "student" ? "employer" : "student")}
                  className="text-sm text-unah-blue border-unah-blue hover:bg-unah-blue hover:text-white w-full h-10 rounded-lg"
                >
                  {userType === "student" ? "¿Eres empleador (a)? Ingresa aquí" : "¿Es estudiante? Ingrese aquí"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Dashboard View - Mobile Optimized
  if (currentView === "dashboard") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <MobileHeader title="UNAHChamba" />

        <main className="p-4 space-y-4">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-unah-blue to-blue-700 text-white rounded-xl p-4">
            <h2 className="text-lg font-bold mb-2">¡Bienvenido a UNAHChamba!</h2>
            <p className="text-blue-100 text-sm mb-3">
              Encuentra oportunidades de empleo exclusivas para la comunidad universitaria
            </p>
            <Button
              onClick={() => setCurrentView("explore")}
              className="bg-unah-yellow text-unah-blue hover:bg-yellow-500 text-sm px-4 py-2 rounded-lg font-medium"
            >
              Explorar Ofertas
            </Button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => setCurrentView("jobs")}
              className="bg-unah-blue text-white hover:bg-blue-800 h-16 flex flex-col items-center justify-center space-y-1 rounded-xl shadow-sm"
            >
              <Briefcase className="w-5 h-5" />
              <span className="text-xs font-medium">Ver Ofertas</span>
            </Button>
            <Button
              onClick={() => setCurrentView("post-job")}
              className="bg-unah-yellow text-unah-blue hover:bg-yellow-600 h-16 flex flex-col items-center justify-center space-y-1 rounded-xl shadow-sm"
            >
              <Plus className="w-5 h-5" />
              <span className="text-xs font-medium">Publicar</span>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="border-0 shadow-sm rounded-xl">
              <CardContent className="p-3 text-center">
                <Briefcase className="w-6 h-6 text-unah-yellow mx-auto mb-1" />
                <div className="text-xl font-bold text-unah-blue">24</div>
                <div className="text-xs text-gray-600">Ofertas Activas</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm rounded-xl">
              <CardContent className="p-3 text-center">
                <Users className="w-6 h-6 text-unah-blue mx-auto mb-1" />
                <div className="text-xl font-bold text-unah-blue">156</div>
                <div className="text-xs text-gray-600">Estudiantes</div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Jobs */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-unah-blue">Ofertas Recientes</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentView("explore")}
                className="text-unah-blue text-xs font-medium"
              >
                Ver Todas
              </Button>
            </div>
            <div className="space-y-3">
              {jobs.slice(0, 2).map((job) => {
                const IconComponent = job.icon
                return (
                  <Card key={job.id} className="border-0 shadow-sm rounded-xl hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-unah-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-unah-blue text-sm truncate">{job.title}</h4>
                          <p className="text-xs text-gray-600">{job.company}</p>
                          <p className="text-xs text-gray-500">{job.location}</p>
                        </div>
                        <Button
                          size="sm"
                          className="bg-unah-blue hover:bg-blue-800 text-white text-xs px-3 py-1 rounded-lg"
                        >
                          Ver más
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </main>

        <BottomNavigation />
      </div>
    )
  }

  // Explore View - Mobile Optimized (Main Job Offers Page)
  if (currentView === "explore") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <MobileHeader title="Ofertas de Empleo" />

        {/* Search and Filters */}
        <div className="bg-white border-b border-gray-100 p-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar..."
              className="pl-10 h-10 border-gray-200 focus:border-unah-blue rounded-lg bg-gray-50"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <select className="w-full p-2 border border-gray-200 rounded-lg focus:border-unah-blue bg-gray-50 text-sm appearance-none pr-8">
                <option>Categoría</option>
                <option>Tecnología</option>
                <option>Educación</option>
                <option>Investigación</option>
                <option>Administración</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <div className="relative">
              <select className="w-full p-2 border border-gray-200 rounded-lg focus:border-unah-blue bg-gray-50 text-sm appearance-none pr-8">
                <option>Ubicación</option>
                <option>Tegucigalpa</option>
                <option>San Pedro Sula</option>
                <option>La Ceiba</option>
                <option>Choluteca</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <Button className="w-full bg-unah-yellow text-unah-blue hover:bg-yellow-500 font-bold rounded-lg h-10">
            Buscar
          </Button>
        </div>

        <main className="p-4">
          <div className="space-y-4">
            {jobs.map((job) => {
              const IconComponent = job.icon
              return (
                <Card key={job.id} className="border-0 shadow-sm rounded-xl hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="w-12 h-12 bg-unah-blue rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-unah-blue text-base">{job.title}</h3>
                          <p className="text-sm text-gray-700">{job.company}</p>
                          <p className="text-sm text-gray-500">{job.location}</p>
                        </div>
                      </div>
                      <Button
                        className="bg-unah-blue hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-lg font-medium"
                        onClick={() => setCurrentView("application-confirm")}
                      >
                        Ver más
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </main>

        <BottomNavigation />
      </div>
    )
  }

  // Jobs View - Mobile Optimized (Detailed Job View)
  if (currentView === "jobs") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <MobileHeader title="Detalles de Oferta" showBack onBack={() => setCurrentView("explore")} />

        <main className="p-4">
          <div className="space-y-4">
            {jobs.slice(0, 1).map((job) => {
              const IconComponent = job.icon
              return (
                <Card key={job.id} className="border-0 shadow-sm rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-unah-blue rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h1 className="text-xl font-bold text-unah-blue mb-1">{job.title}</h1>
                        <p className="text-gray-700 font-medium">{job.company}</p>
                        <p className="text-gray-500 text-sm">{job.location}</p>
                      </div>
                      <Badge className="bg-unah-yellow text-unah-blue font-medium px-3 py-1 rounded-full">
                        {job.type}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-bold text-unah-blue mb-2">Descripción</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{job.description}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-unah-blue mb-2">Requisitos</h3>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-700">
                              <span className="w-2 h-2 bg-unah-yellow rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Salario</p>
                            <p className="font-bold text-unah-blue">{job.salary}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Publicado</p>
                            <p className="font-medium text-gray-700">{job.posted}</p>
                          </div>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-unah-blue hover:bg-blue-800 text-white h-12 font-bold rounded-lg"
                        onClick={() => setCurrentView("application-confirm")}
                      >
                        Postularme Ahora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </main>

        <BottomNavigation />
      </div>
    )
  }

  // Applications View - Mobile Optimized
  if (currentView === "applications") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <MobileHeader title="Mis Postulaciones" />

        <main className="p-4">
          <div className="space-y-3">
            {applications.map((app) => (
              <Card key={app.id} className="border-0 shadow-sm rounded-xl">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-unah-blue mb-1">{app.jobTitle}</h3>
                      <p className="text-gray-600 text-sm">{app.company}</p>
                    </div>
                    <Badge className={`${app.statusColor} text-xs font-medium px-2 py-1 rounded-full`}>
                      {app.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Aplicado: {new Date(app.appliedDate).toLocaleDateString()}
                    </span>
                    <Button className="bg-unah-blue text-white hover:bg-blue-800 text-xs px-3 py-1 rounded-lg">
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        <BottomNavigation />
      </div>
    )
  }

  // Application Confirmation View - Mobile Optimized
  if (currentView === "application-confirm") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <MobileHeader title="Confirmación" showBack onBack={() => setCurrentView("explore")} />

        <main className="p-4 flex items-center justify-center min-h-[60vh]">
          <Card className="w-full max-w-sm border-0 shadow-lg rounded-xl">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-unah-blue mb-2">¡Postulación Enviada!</h2>
              <p className="text-gray-600 text-sm mb-6">
                Tu postulación ha sido enviada exitosamente. El empleador revisará tu perfil y se pondrá en contacto
                contigo pronto.
              </p>
              <div className="space-y-3">
                <Button
                  className="w-full bg-unah-blue hover:bg-blue-800 text-white rounded-lg h-10"
                  onClick={() => setCurrentView("applications")}
                >
                  Ver Mis Postulaciones
                </Button>
                <Button
                  className="w-full bg-unah-yellow text-unah-blue hover:bg-yellow-600 rounded-lg h-10"
                  onClick={() => setCurrentView("explore")}
                >
                  Buscar Más Ofertas
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>

        <BottomNavigation />
      </div>
    )
  }

  // Profile View - Mobile Optimized
  if (currentView === "profile") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <MobileHeader title="Mi Perfil" />

        <main className="p-4 space-y-4">
          <Card className="border-0 shadow-sm rounded-xl">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder.svg?height=64&width=64" />
                    <AvatarFallback className="bg-unah-blue text-white text-lg font-bold">JP</AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-1 -right-1 w-6 h-6 p-0 bg-unah-yellow text-unah-blue hover:bg-yellow-500 rounded-full"
                  >
                    <Camera className="w-3 h-3" />
                  </Button>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-unah-blue">Juan Pérez</h2>
                  <p className="text-gray-600 text-sm">Estudiante de Ingeniería</p>
                  <p className="text-xs text-gray-500">20151234567</p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-sm font-bold text-unah-blue">Nombre Completo</label>
                  <Input defaultValue="Juan Pérez" className="mt-1 h-10 border-gray-200 rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-bold text-unah-blue">Correo Electrónico</label>
                  <Input defaultValue="juan.perez@unah.hn" className="mt-1 h-10 border-gray-200 rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-bold text-unah-blue">Teléfono</label>
                  <Input defaultValue="+504 9999-9999" className="mt-1 h-10 border-gray-200 rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-bold text-unah-blue">Carrera</label>
                  <Input defaultValue="Ingeniería en Sistemas" className="mt-1 h-10 border-gray-200 rounded-lg" />
                </div>
                <div>
                  <label className="text-sm font-bold text-unah-blue">Biografía</label>
                  <Textarea placeholder="Cuéntanos sobre ti..." className="mt-1 border-gray-200 rounded-lg" rows={3} />
                </div>
              </div>

              <div className="flex space-x-2 mt-4">
                <Button className="flex-1 bg-unah-blue hover:bg-blue-800 text-white rounded-lg">Guardar</Button>
                <Button className="flex-1 bg-unah-yellow text-unah-blue hover:bg-yellow-600 rounded-lg">
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => setCurrentView("public-profile")}
              className="bg-unah-blue text-white hover:bg-blue-800 h-16 flex flex-col items-center justify-center space-y-1 rounded-xl shadow-sm"
            >
              <User className="w-5 h-5" />
              <span className="text-xs font-medium">Perfil Público</span>
            </Button>
            <Button
              onClick={() => setCurrentView("post-job")}
              className="bg-unah-yellow text-unah-blue hover:bg-yellow-600 h-16 flex flex-col items-center justify-center space-y-1 rounded-xl shadow-sm"
            >
              <Plus className="w-5 h-5" />
              <span className="text-xs font-medium">Publicar</span>
            </Button>
          </div>
        </main>

        <BottomNavigation />
      </div>
    )
  }

  // Post Job View - Mobile Optimized
  if (currentView === "post-job") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <MobileHeader title="Publicar Oferta" showBack onBack={() => setCurrentView("dashboard")} />

        <main className="p-4">
          <Card className="border-0 shadow-sm rounded-xl">
            <CardContent className="p-4">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-bold text-unah-blue">Título del Puesto</label>
                  <Input placeholder="Ej: Tutor de Matemáticas" className="mt-1 h-10 border-gray-200 rounded-lg" />
                </div>

                <div>
                  <label className="text-sm font-bold text-unah-blue">Tipo de Empleo</label>
                  <div className="relative mt-1">
                    <select className="w-full p-2 border border-gray-200 rounded-lg focus:border-unah-blue h-10 appearance-none pr-8">
                      <option>Seleccionar tipo</option>
                      <option>Tiempo completo</option>
                      <option>Medio tiempo</option>
                      <option>Por horas</option>
                      <option>Proyecto</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-unah-blue">Ubicación</label>
                  <Input placeholder="Ej: Ciudad Universitaria" className="mt-1 h-10 border-gray-200 rounded-lg" />
                </div>

                <div>
                  <label className="text-sm font-bold text-unah-blue">Salario</label>
                  <Input placeholder="Ej: L. 150/hora" className="mt-1 h-10 border-gray-200 rounded-lg" />
                </div>

                <div>
                  <label className="text-sm font-bold text-unah-blue">Descripción</label>
                  <Textarea
                    placeholder="Describe las responsabilidades..."
                    className="mt-1 border-gray-200 rounded-lg"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-unah-blue">Requisitos</label>
                  <Textarea
                    placeholder="Lista los requisitos..."
                    className="mt-1 border-gray-200 rounded-lg"
                    rows={3}
                  />
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button className="flex-1 bg-unah-blue hover:bg-blue-800 text-white rounded-lg">Publicar</Button>
                  <Button className="flex-1 bg-unah-yellow text-unah-blue hover:bg-yellow-600 rounded-lg">
                    Borrador
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>

        <BottomNavigation />
      </div>
    )
  }

  // Messages View - Mobile Optimized
  if (currentView === "messages") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <MobileHeader title="Mensajes" />

        <main className="p-4">
          <div className="space-y-3">
            {messages.map((message) => (
              <Card key={message.id} className="border-0 shadow-sm rounded-xl hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={message.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-unah-blue text-white font-bold">
                        {message.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-bold text-unah-blue truncate">{message.name}</p>
                        <span className="text-xs text-gray-500">{message.time}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-1">{message.company}</p>
                      <p className="text-xs text-gray-700 line-clamp-2">{message.lastMessage}</p>
                      {message.unread && (
                        <div className="flex items-center mt-2">
                          <div className="w-2 h-2 bg-unah-yellow rounded-full mr-2"></div>
                          <span className="text-xs text-unah-blue font-bold">Nuevo mensaje</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        <BottomNavigation />
      </div>
    )
  }

  // Public Profile View - Mobile Optimized
  if (currentView === "public-profile") {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        <MobileHeader title="Perfil Público" showBack onBack={() => setCurrentView("profile")} />

        <main className="p-4 space-y-4">
          {/* Profile Header */}
          <Card className="border-0 shadow-sm rounded-xl">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3 mb-3">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" />
                  <AvatarFallback className="bg-unah-blue text-white text-lg font-bold">JP</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-lg font-bold text-unah-blue">Juan Pérez</h1>
                  <p className="text-gray-600 text-sm">Estudiante de Ingeniería en Sistemas</p>
                  <p className="text-xs text-gray-500">Universidad Nacional Autónoma de Honduras</p>
                </div>
                <Button
                  size="sm"
                  className="bg-unah-yellow text-unah-blue hover:bg-yellow-600 p-2 rounded-lg"
                  onClick={() => setCurrentView("profile")}
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-4 text-xs text-gray-600">
                <span className="flex items-center">
                  <Mail className="w-3 h-3 mr-1" />
                  juan.perez@unah.hn
                </span>
                <span className="flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  +504 9999-9999
                </span>
              </div>
            </CardContent>
          </Card>

          {/* About Section */}
          <Card className="border-0 shadow-sm rounded-xl">
            <CardContent className="p-4">
              <h2 className="text-base font-bold text-unah-blue mb-2">Acerca de mí</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Estudiante de quinto año de Ingeniería en Sistemas con experiencia en desarrollo web y tutorías
                académicas. Apasionado por la tecnología y el aprendizaje continuo.
              </p>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="border-0 shadow-sm rounded-xl">
            <CardContent className="p-4">
              <h2 className="text-base font-bold text-unah-blue mb-3">Habilidades</h2>
              <div className="flex flex-wrap gap-2">
                {["JavaScript", "React", "Python", "Matemáticas", "Tutorías", "Trabajo en equipo"].map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-unah-yellow text-unah-blue text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="border-0 shadow-sm rounded-xl">
            <CardContent className="p-4">
              <h2 className="text-base font-bold text-unah-blue mb-3">Experiencia</h2>
              <div className="space-y-3">
                <div className="border-l-4 border-unah-yellow pl-3">
                  <h3 className="font-bold text-unah-blue text-sm">Tutor de Programación</h3>
                  <p className="text-xs text-gray-600">Centro de Tutorías UNAH • 2023 - Presente</p>
                  <p className="text-xs text-gray-700 mt-1">
                    Brindo tutorías personalizadas en programación básica y estructuras de datos.
                  </p>
                </div>
                <div className="border-l-4 border-unah-yellow pl-3">
                  <h3 className="font-bold text-unah-blue text-sm">Desarrollador Web Freelance</h3>
                  <p className="text-xs text-gray-600">Independiente • 2022 - 2023</p>
                  <p className="text-xs text-gray-700 mt-1">
                    Desarrollo de sitios web básicos para pequeños negocios locales.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reviews Section */}
          <Card className="border-0 shadow-sm rounded-xl">
            <CardContent className="p-4">
              <h2 className="text-base font-bold text-unah-blue mb-3">Reseñas</h2>
              <div className="border border-gray-100 rounded-lg p-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="bg-unah-blue text-white text-xs font-bold">AM</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-xs font-bold text-unah-blue">Ana Martínez</p>
                      <p className="text-xs text-gray-500">Estudiante</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-unah-yellow text-unah-yellow" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-700">
                  Excelente tutor! Juan me ayudó mucho a entender los conceptos de programación. Muy paciente y claro.
                </p>
              </div>
            </CardContent>
          </Card>
        </main>

        <BottomNavigation />
      </div>
    )
  }

  return null
}
