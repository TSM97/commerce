import i18n from '../../../Utils/i18n';

export default function LocalSwitcher() {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'el', name: 'Greek' },
  ];
  return (
    <>
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => {
            i18n.changeLanguage(language.code);
          }}
        >
          {language.name}
        </button>
      ))}
    </>
  );
}
