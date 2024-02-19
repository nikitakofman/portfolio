import initTranslations from "../i18n";
import Main from "../../Components/Main";
import TranslationsProvider from "../../Components/TranslationsProvider";
import Footer from "../../Components/Footer";

const i18nNamespaces = ["home", "common"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      {" "}
      {/* <Loading /> */}
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
        <main className="h-full border-box">
          {/* <LanguageChanger /> */}

          <Main />
          <Footer />
        </main>
      </TranslationsProvider>
    </>
  );
}
