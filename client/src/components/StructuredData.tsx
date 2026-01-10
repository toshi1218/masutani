/**
 * Structured Data Component
 * Adds JSON-LD schema markup for SEO
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'みなと司法書士事務所',
    description: '遺産承継、遺言執行、任意後見の専門家。相続に関する複雑な手続きを丁寧にサポートいたします。',
    url: 'https://minato-office.jp',
    telephone: '03-1234-5678',
    email: 'info@minato-office.jp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '赤坂1-1-1 赤坂ビジネスセンター 5階',
      addressLocality: '東京都港区',
      postalCode: '107-0052',
      addressCountry: 'JP'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [],
    image: 'https://minato-office.jp/logo.png',
    priceRange: '¥¥'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const services = [
    {
      name: '遺産承継業務',
      description: '相続人の調査から遺産分割、不動産登記まで、相続に関わる一連の手続きをサポートします。',
      url: 'https://minato-office.jp/services/inheritance-succession',
      areaServed: ['東京都', '神奈川県', '千葉県', '埼玉県']
    },
    {
      name: '遺言執行業務',
      description: '遺言者の想いを尊重し、遺言の内容を正確に実行いたします。相続人間のトラブル防止にも。',
      url: 'https://minato-office.jp/services/will-execution',
      areaServed: ['東京都', '神奈川県', '千葉県', '埼玉県']
    },
    {
      name: '任意後見業務',
      description: '将来に備えて、信頼できるパートナーとして財産管理や生活支援の契約をサポートいたします。',
      url: 'https://minato-office.jp/services/voluntary-guardianship',
      areaServed: ['東京都', '神奈川県', '千葉県', '埼玉県']
    }
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: services.map((service, idx) => ({
      '@type': 'Service',
      position: idx + 1,
      name: service.name,
      description: service.description,
      url: service.url,
      provider: {
        '@type': 'LocalBusiness',
        name: 'みなと司法書士事務所'
      },
      areaServed: service.areaServed.map(area => ({
        '@type': 'AdministrativeArea',
        name: area
      }))
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
