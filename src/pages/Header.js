import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

function Header () {
  const { t, i18n } = useTranslation();
  return <h1>{t('header')}</h1>
}

export default Header;
