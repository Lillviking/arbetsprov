# VÄDERAPPLIKATION

## Kort om applikationen
Denna applikation visar väderdata från SMHI. På förstasidan visas vädret i Sundsvall med temperatur och matchande väderikon. Genom att klicka på en knapp kan användaren navigera till en sida med mer detaljerad väderinformation. På förstasidan finns även möjligheten att ändra plats genom att klicka på "byt plats" och välja en ny plats på kartan. När användaren återvänder till förstasidan kommer platsnamnet och väderinformationen att uppdateras.

## Tillgängliga skript
I projektkatalogen kan du köra följande:

### `npm start`

Kör applikationen i utvecklingsläge.\
Öppna [http://localhost:3000](http://localhost:3000) i webbläsaren för att se den.

Sidan kommer att uppdateras vid ändringar.\
Du kommer också att se eventuella lint-fel i konsolen.

### `npm test`

Startar testköraren i interaktivt läge.\
Se avsnittet om [att köra tester](https://facebook.github.io/create-react-app/docs/running-tests) för mer information.

### `npm run build`

Bygger applikationen för produktion i `build`-mappen.\
Den paketerar React korrekt i produktionsläge och optimerar bygget för bästa prestanda.

Bygget minifieras och filnamnen inkluderar hash-värden.\
Din applikation är redo att distribueras!

Se avsnittet om [distribution](https://facebook.github.io/create-react-app/docs/deployment) för mer information.

### `npm run eject`

**Observera: detta är en engångsoperation. När du `eject` kan du inte ångra det!**

Om du inte är nöjd med byggverktyget och konfigurationsvalen kan du köra `eject` när som helst. Detta kommando tar bort den enskilda byggberoendet från ditt projekt.

Istället kommer det att kopiera alla konfigurationsfiler och de transitiva beroendena (webpack, Babel, ESLint, etc) direkt till ditt projekt så att du har full kontroll över dem. Alla kommandon förutom `eject` kommer fortfarande att fungera, men de kommer att peka på de kopierade skripten så att du kan justera dem. Vid det här laget är du på egen hand.

Du behöver inte använda `eject` alls. Den kuraterade uppsättningen av funktioner är lämplig för små och medelstora distributioner, och du bör inte känna dig skyldig att använda den här funktionen. Men vi förstår att verktyget inte skulle vara användbart om du inte kunde anpassa det när du är redo.

---

# WCAG
## Perceptibilitet
Användare kan uppfatta informationen då appen använder tydliga och kontrastrika färgval som uppfyller kontrastförhållandet på minst 4.5:1, vilket gör text och användargränssnittselement lättlästa även för personer med synnedsättning.

## Användbarhet
Appen är enkel att navigera och använda, med konsekvent och tydlig navigeringsstruktur som gör det möjligt för användare, inklusive dem som använder tangentbordsnavigering, att enkelt interagera med appens funktioner.
Interaktiva element som knappar är tillräckligt stora och har tydlig indikering när de är fokuserade eller aktiverade, vilket hjälper användare med motoriska funktionsnedsättningar.

## Förståelighet
Appen använder enkel och klar text som är lätt att förstå. Gränssnittet är intuitivt, med konsekventa svar på användarinteraktioner, vilket minimerar risken för förvirring eller misstag.
