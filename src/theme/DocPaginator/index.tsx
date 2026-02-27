import React from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import {useLocation} from '@docusaurus/router';
import type {Props} from '@theme/DocPaginator';

// 动态标题映射规则
const getCustomTitle = (permalink: string, locale: string): string | null => {
  const rules = {
    en: [
      // s100

    ],
    // zh: [
    //   { pattern: /\/Quick_start/, title: '1. 快速开始' },
    //   { pattern: /\/System_configuration/, title: '2. 系统配置' },
    //   { pattern: /\/Basic_Application/, title: '3. 基础应用' },
    //   { pattern: /\/Algorithm_Application/, title: '4. 算法应用' },
    // ]
  };

  const localeRules = rules[locale as keyof typeof rules] || rules.en;
  const matchedRule = localeRules.find((rule: { pattern: RegExp; title: string }) => rule.pattern.test(permalink));
  return matchedRule ? (matchedRule as { title: string }).title : null;
};

import type { JSX } from 'react';

export default function DocPaginatorWrapper(props: Props): JSX.Element {
  const { pathname } = useLocation();
  const { previous, next } = props;
  
  const getCurrentLocale = () => {
    if (pathname.includes('/zh/')) return 'zh';
    if (pathname.includes('/en/')) return 'en';
    return 'en';
  };
  
  const currentLocale = getCurrentLocale();
  
  const customNext = next ? {
    ...next,
    title: getCustomTitle(next.permalink, currentLocale) || next.title
  } : null;

  const customPrevious = previous ? {
    ...previous,
    title: getCustomTitle(previous.permalink, currentLocale) || previous.title
  } : null;

  return (
    <DocPaginator
      previous={customPrevious}
      next={customNext}
    />
  );
}