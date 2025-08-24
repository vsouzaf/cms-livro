import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ReactCountryFlag from 'react-country-flag';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'pt-BR', name: t('language.portuguese'), cc: 'BR' },
    { code: 'en-US', name: t('language.english'), cc: 'US' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2">
          <ReactCountryFlag
            svg
            countryCode={currentLanguage.cc}
            aria-label={currentLanguage.name}
            style={{ width: '1.25rem', height: '1.25rem', borderRadius: '2px' }}
          />
          <span className="ml-2 inline sm:hidden">{currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="gap-2"
          >
            <ReactCountryFlag
              svg
              countryCode={language.cc}
              aria-label={language.name}
              style={{ width: '1.25rem', height: '1.25rem', borderRadius: '2px' }}
            />
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;