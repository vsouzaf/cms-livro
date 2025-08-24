import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Book, Grid3x3, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: 'Home', href: '/', icon: Book },
    { name: t('artifacts.title'), href: '/artifacts', icon: Grid3x3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 font-semibold text-lg">
              <Book className="h-6 w-6 text-primary" />
              <span>Meu livro</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <LanguageSwitcher />
              <Button>{t('home.hero.cta')}</Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 pt-2 border-t">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:text-primary hover:bg-muted'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
                <div className="pt-2 flex flex-col gap-2">
                  <LanguageSwitcher />
                  <Button className="w-full">{t('home.hero.cta')}</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t bg-muted/50 mt-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 font-semibold text-lg mb-4">
                <Book className="h-6 w-6 text-primary" />
                <span>Meu livro</span>
              </div>
              <p className="text-muted-foreground">
                Explore todos os recursos visuais e artefatos do livro de forma organizada e intuitiva.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/artifacts" className="hover:text-primary transition-colors">{t('artifacts.title')}</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('home.hero.cta')}</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="mailto:contato@exemplo.com" className="hover:text-primary transition-colors">contato@exemplo.com</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Meu livro. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};