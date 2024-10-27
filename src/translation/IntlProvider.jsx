import { IntlProvider as IntlProviderReact } from "react-intl";

import en from "./languages/en.json";
import fr from "./languages/fr.json";
import br from "./languages/br.json";
import { createContext, useContext } from "react";
import { usePersistentState } from "../utils/hook";

const LocaleContext = createContext()

const languages = { en, fr, br };
const defaultLocale = navigator.language.split(/[-_]/)[0] || "fr";

// eslint-disable-next-line react/prop-types
export const LocaleProvider = ({children}) => {
  const [locale, setLocale] = usePersistentState("language", defaultLocale)
  
  return <LocaleContext.Provider value={{locale, setLocale}} >
    <IntlProviderReact locale={locale} messages={languages[locale]}>
      {children}
    </IntlProviderReact>
  </LocaleContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLocale = () => {
  return useContext(LocaleContext)
}


