
# Ticketing API 2024

Ebben a repóban a Kir-Dev 2024-es Node.js tanfolyamán megvalósított hibajegy kezelő alkalmazás backend kódja található. Ezt az alkalmazást használhatná a körünk arra, hogy a felhasználóink itt jelezhessék, milyen hibákat, fejlesztési lehetőségeket találtak oldalainkon.

Az API publikusan elérhető az alábbi címen: [https://api.ticketing.kir-dev.hu](https://api.ticketing.kir-dev.hu)

OpenAPI specifikáció: [https://api.ticketing.kir-dev.hu/api](https://api.ticketing.kir-dev.hu/api)

A tanfolyam visszanézhető YouTube-on:

-  [1. előadás - TypeScript, Node.js alapok](https://www.youtube.com/watch?v=9K7L8kqYnRE) (ebben még nem foglakozunk ezzel a projekttel)

-  [2. előadás - NestJS gyakorlat 1.](https://www.youtube.com/watch?v=wtzeZ0WopWU)

-  [3. előadás - NestJS gyakorlat 2.](https://www.youtube.com/watch?v=g-wi7PgXIxc)

A gyakorlati alkalmak során előre elkészített branch-ekre válthattak azok, akik elakadtak. Ezek a branchek továbbra is léteznek a repóban, a legutolsó azonban be lett mergelve masterbe, azaz a master branchen az az állapot található, ahol befejeztük a tanfolyamot (plusz egy pár dolog, erről később).

Tanfolyam közben nem lokális gépen, hanem a GitHub Codespaces szolgáltatás segítségével futtattuk a projektet, így nem volt szükség semmilyen extra programra. Ezt továbbra is használhatjátok, a Code -> Codespaces fülön tudtok újat indítani, de lehet hogy még az előző is elérhető.

## Változtatások a tanfolyam óta
A tanfolyam után pár dolgot megcsináltam még a repóban, csak hogy teljes legyen az app és tudjuk deployolni. Ezek sorban:
- Az adatbázis connection_url-jét és a portot kivettem a kódból, környezeti változóként tároljuk őket.
- Létrehoztam DTO-kat a ticket és board entitásokhoz, beállítottam itt is az OpenAPI-t.
- Az npm package managert yarnra cseréltem. Kb ugyanazt tudja, csak kicsit jobb (`npm install` helyett `yarn add` paranccsal kell telepíteni)
- Konténerizáltam az alkalmazást (mentorálás során erről is lehet szó, deploy-hoz kell)
- CORS support

## Indítás
Ha szeretnéd a saját gépen is futtatni az alkalmazást, a következő dolgokra lesz szükséged:
- [Node.js](https://nodejs.org/en) (18 vagy újabb)
- [PostgreSQL](https://www.postgresql.org/download/windows/) (13 vagy  újabb)
- [Git](https://git-scm.com/downloads)
- (opcionális) [Visual Studio Code](https://code.visualstudio.com/) (ajánlott bővítmények: Prisma, ThunderClient)

Akár saját gépen, akár Codespacesben, a következő lépesek kellenek az első futtatáshoz (kicsit változott tanfolyam óta):
1. Másold le a `.env.example` fájlt és az új fájlt nevezd el `.env`-nek.
2. Telepítsd a függőségeket: `yarn` (ha nem lenne yarn, előtte add ki ezt: `npm i -g yarn`)
3. Futtasd a migrációkat: `yarn prisma migrate dev`
4. Indítsd el az appot: `yarn start:dev` vagy VS Code-ban nyomj F5-öt a debbugolás indításához

