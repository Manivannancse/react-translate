import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

function Card () {
  const { t, i18n } = useTranslation();
  return (
    <h1>{t('myName')}</h1>
  )
}

export default Card;
