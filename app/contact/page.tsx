import ContactForm from '@/components/Contact/ContactForm'
import ContactHero from '@/components/Contact/ContactHero'
import ContactInfoSection from '@/components/Contact/ContactInfoSection'

const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <ContactInfoSection />
    </div>
  )
}

export default page
