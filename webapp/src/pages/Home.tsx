import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Quote, ExternalLink } from "lucide-react";
import { benefits, testimonials, faqs } from "@/data/mockData";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white py-20 sm:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Novo Lançamento
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-serif">
                  {t('home.hero.title')}
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-lg">
                  {t('home.hero.subtitle')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  {t('home.hero.cta')} <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/artifacts">
                    {t('home.hero.viewArtifacts')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-white/10 rounded-lg shadow-book backdrop-blur border border-white/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-white/90">
                      <p className="font-semibold">Preview da Capa</p>
                      <p className="text-sm text-white/70">Livro em desenvolvimento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('home.about.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Badge variant="outline">300+ páginas</Badge>
              <Badge variant="outline">50+ artefatos visuais</Badge>
              <Badge variant="outline">12 capítulos</Badge>
              <Badge variant="outline">Casos práticos</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">
              {t('home.benefits.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvido com foco na experiência de aprendizado, oferecendo muito mais que texto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const translatedBenefit = (t('home.benefits.items', { returnObjects: true }) as any[])[index];
              return (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="text-4xl">{benefit.icon}</div>
                    <h3 className="font-semibold text-lg">{translatedBenefit?.title || benefit.title}</h3>
                    <p className="text-muted-foreground">{translatedBenefit?.description || benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif">
              {t('home.testimonials.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              Feedback de profissionais que transformaram seu conhecimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const translatedTestimonial = (t('home.testimonials.items', { returnObjects: true }) as any[])[index];
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <Quote className="h-8 w-8 text-primary opacity-50" />
                    <p className="text-muted-foreground italic">"{translatedTestimonial?.content || testimonial.content}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{translatedTestimonial?.name || testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{translatedTestimonial?.role || testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif">
                {t('home.faq.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                Tire suas dúvidas sobre o livro e os artefatos
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => {
                const translatedFaq = (t('home.faq.items', { returnObjects: true }) as any[])[index];
                return (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border px-6">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      {translatedFaq?.question || faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground">
                      {translatedFaq?.answer || faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hero-gradient rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif">
                Comece Sua Jornada Hoje
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Transforme sua compreensão sobre arquitetura de software com recursos visuais únicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  {t('home.hero.cta')} <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link to="/artifacts">
                    {t('home.hero.viewArtifacts')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;