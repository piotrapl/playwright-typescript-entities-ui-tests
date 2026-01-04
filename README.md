# playwright-gui-typescript-wyszukiwanie_po_regon-tests
Pojekt wykonujący testy funcjonalności wyszukiwania podmiotów na podstawie numeru wpisanego w polu REGON.
Obejmuje: testy przypadków negtatywnych (negative test cases)
- długość podanego numeru jest inna niż 9 lub 14
- podany REGON (9- lub 14-cyfrowy) zawiera znaki inne niż cyfry
- podany REGON (9- lub 14-cyfrowy) ma błędną liczbę kontrolną

oraz przypadków pozytywnych (positive test cases):
- po podaniu REGON-u (9- lub 14-cyfrowy) został wyszukany podmiot