import {
  Phone, Mail, MapPin, Clock, Target, Telescope, Rocket,
  Handshake, Star, Globe, GraduationCap, Smartphone, Lightbulb,
  CreditCard, UserCircle, Bot, Settings, Plane, Languages, Calculator
} from 'lucide-react'

const icons = {
  Phone, Mail, MapPin, Clock, Target, Telescope, Rocket,
  Handshake, Star, Globe, GraduationCap, Smartphone, Lightbulb,
  CreditCard, UserCircle, Bot, Settings, Plane, Languages, Calculator
}

const Icon = ({ name, size = 20, className = '' }) => {
  const LucideIcon = icons[name]
  if (!LucideIcon) return null
  return <LucideIcon size={size} className={className} />
}

export default Icon