# Technische modelleerrichtlijnen voor linked data in de gebouwde omgeving

Deze repository bevat de ReSpec-publicatie *"Technische modelleerrichtlijnen voor linked data in de gebouwde omgeving"*, opgesteld met het [ReSpec-template van DigiGO/CROW](https://github.com/stichting-crow/respec).

## Doel en doelgroep

Het document bevat richtlijnen (een gedeelde set van basisregels) voor het modelleren van de gebouwde omgeving in linked data, met als doelen:

* technische interoperabiliteit bereiken bij informatiemodellen;
* de drempel verlagen om informatiemodellen op te stellen conform de NEN 2660-2.

Het document is bedoeld voor modellenbouwers in de ontwerp-, bouw- en technieksector (OBT) en voor softwareontwikkelaars die tooling ontwikkelen voor het beheren van woordenboeken, ontologieën en gegevensverzamelingen.

## Wat staat in deze repo

Deze repo bevat **alleen het eindproduct**: de ReSpec-publicatie. De inhoud wordt direct in de markdown-secties en Turtle-voorbeelden bijgehouden.

| Map / bestand | Inhoud |
|---|---|
| `docs/` | De ReSpec-publicatie (index.html, config.js en de hoofdstukken in Markdown) |
| `docs/sections/` | De hoofdstukken van het document in Markdown, plus `glossary.html` (HTML-fragment met de glossary) |
| `docs/data/` | De Turtle-codevoorbeelden die in de hoofdstukken worden geïncludeerd. `prefixes.ttl` bevat de gedeelde prefixes; alle voorbeelden zijn valide Turtle mits deze prefixes erboven worden gezet |
| `docs/media/` | Afbeeldingen en diagrammen die in de publicatie worden gebruikt |
| `docs/.nojekyll` | Voorkomt Jekyll-processing door GitHub Pages |

Wijzigingen worden direct in `docs/sections/` (markdown) en `docs/data/` (Turtle) gedaan. 

Houd daarbij o.a. deze conventies aan:

* RFC 2119-trefwoorden in hoofdletters (MOET, ZOU MOETEN, MAG, ...);
* standaarden citeren als `[[KEY]]` (bijv. `[[NEN2660-2]]`, `[[NL-SBB]]`);
* interne sectielinks als `[[#sectie-id]]` (met diakrieten);
* elke term op één plek definiëren met `<dfn>`, elders verwijzen met `[=term=]`.

## Lokaal previewen

Serveer de `docs/`-map met een statische server en open de pagina in de browser:

```powershell
python -m http.server 8123 --directory docs
# open http://localhost:8123/
```

Geen build-stap nodig; wijzigingen zijn direct zichtbaar na een refresh.
