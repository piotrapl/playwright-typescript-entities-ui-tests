export const invalidRegons = [

    {
        regon: '12345678',
        description: 'Liczba znaków w polu REGON (8) jest inna niż 9 lub 14',
        expectedRegex: /długość|liczba|zawiera|zawierać|.*9.*14|znaków/i
    },
    {
      title: 'Liczba znaków w polu REGON (10) jest inna niż 9 lub 14',
      regon: '1234567891',
      expectedRegex: /długość|liczba|zawiera|zawierać|.*9.*14|znaków/i
    },
    {
      title: 'Podany REGON 9-znakowy: nieprawidłowy - błędna cyfra kontrolna)',
      regon: '123456789',
      expectedRegex: /nieprawidłowy|nieprawidłowa|błędny|błędna/i
    },
    {
      title: 'Podany REGON 9-znakowy jest nieprawidłowy - zawiera minimum 1 znak inny niż cyfra',
      regon: '1234567AB',
      expectedRegex: /nieprawidłowy|nieprawidłowa|błędny|błędna/i
    },
    {
      title: 'Podany REGON 14-znakowy jest nieprawidłowy - zawiera minimum 1 znak inny niż cyfra',
      regon: '123456789012CD',
      expectedRegex: /nieprawidłowy|nieprawidłowa|błędny|błędna/i
    }
]
