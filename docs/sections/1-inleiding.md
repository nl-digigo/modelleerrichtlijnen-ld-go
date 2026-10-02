# Inleiding

In dit document geven we technische richtlijnen voor het modelleren van de gebouwde omgeving conform linked data-standaarden. Dit hoofdstuk schetst de aanleiding, context, het doel en doelgroep, scope en technische achtergrond van dit document. Om direct aan de slag te gaan, lees de volgende paragraaf.

## Direct aan de slag

Wil je direct aan de slag? Begin in een van de volgende hoofdstukken:

* [[#richtlijnen-voor-woordenboeken]] om een woordenboek te definiëren;
* [[#richtlijnen-voor-ontologieën-en-gegevensverzamelingen]] om een ontologie te implementeren en als gegevensverzameling te instantiëren;
* [[#richtlijnen-voor-versiebeheer]] om versiebeheer in te richten.

Alle drie de hoofdstukken bouwen verder op de algemene richtlijnen in [[#algemene-richtlijnen]].

## Status van dit document

De richtlijnen in dit document zijn opgesteld door een expertwerkgroep en gevalideerd met een aantal grote partijen uit de ontwerp-, bouw- en technieksector (OBT). Ze zijn gebaseerd op de [[NEN2660-2]], de [[EN17632]] (ook wel SML genoemd, de bovenliggende Europese standaard) en de Nederlandse Standaard voor het beschrijven van begrippen ([[NL-SBB]]). De richtlijnen zijn (vooralsnog) niet normatief; semantische definities en normatieve betekenissen liggen nog steeds bij de standaarden. De richtlijnen geven sturing aan de technische modellering en implementatie van deze standaarden.

Het streven is dat deze richtlijnen de komende jaren door de sector zullen worden omarmd en toegepast, zodat we ze tot norm kunnen verheffen. Periodiek zullen we daarom de sector om feedback vragen en zullen er nieuwe versies verschijnen van deze richtlijnen, waarbij voortschrijdend inzicht aan de hand van praktijkervaring zal worden toegepast om ze te verbeteren. Op termijn zullen we deze richtlijnen als praktijkrichtlijn aanbieden aan de NEN-normcommissie "Modellering, integratie en interoperabiliteit van informatie in de gebouwde omgeving en procesindustrie" en aan het afsprakenstelsel DSGO.

We nodigen je uit om deze richtlijnen toe te passen en om ervaringen in het gebruik met ons te delen. Contactpersoon hiervoor is [Henk Hutink](mailto:henk.hutink@digigo.nu).

## Aanleiding en context

Interoperabiliteit in de OBT-sector is noodzakelijk zodat opdrachtgevers, opdrachtnemers en combinanten efficiënt informatie digitaal kunnen vastleggen, uitwisselen en delen met elkaar. Interoperabiliteit wordt onder meer bereikt door middel van standaardisatie: het komen tot uniforme juridische, organisatorische, semantische en technische afspraken. Hier zit een simpele business case achter: zonder uniforme afspraken moeten voor elk project en voor elke samenwerking deze afspraken opnieuw worden opgesteld, geïmplementeerd en uitgevoerd. Mét uniforme afspraken kan daar simpelweg naar worden verwezen, treedt er gewenning en daarmee ervaring op, verbetert daarmee de kwaliteit, treden er schaalvoordelen op, en kom je tot een duurzamere samenwerking in de hele keten.

Binnen de Nederlandse OBT-sector geldt de [[NEN2660-2]] als de facto standaard voor het modelleren van de gebouwde omgeving. De standaard bevat semantische en technische afspraken:

* semantisch: de standaard beschrijft de concepten waaruit de gebouwde omgeving bestaat en hoe deze kunnen worden gebruikt in een informatiemodel om de wereld semantisch te modelleren.
* technisch: de standaard beschrijft hoe een informatiemodel kan worden gedefinieerd in linked data.

De [[NEN2660-2]] wordt steeds meer als standaard gebruikt voor het modelleren van de gebouwde omgeving en is een grote stap voorwaarts om tot sectorbrede interoperabiliteit te komen. Toch heeft de standaard nog niet geleid tot het gewenste interoperabiliteitsniveau. Op technisch vlak zijn de voornaamste redenen hiervoor:

* de standaard kent nog veel vrijheidsgraden, waardoor implementaties die compliant zijn aan de [[NEN2660-2]] vaak nog steeds niet-interoperabel met elkaar zijn;
* voor mensen die relatief onervaren zijn met linked data heeft de standaard een hoog instapniveau, wat een drempel oplevert in het gebruik;
* hierdoor wordt de standaard niet altijd juist en volledig begrepen.

Op semantisch vlak geldt er een sectorbrede afstemming ontbreekt, zoals een gedeeld woordenboek.

Mede vanwege bovenstaande punten worden door de sector aanvullende richtlijnen opgesteld. Op semantisch vlak is recentelijk de [[NPR4660]] opgesteld: deze praktijkrichtlijn biedt richtlijnen en voorbeelden voor het semantisch modelleren van de gebouwde omgeving. Samen met de [[NEN2660-2]] vormt dit een basis: aanvullende semantische afspraken (middels een woordenboek of ontologie) zijn nog noodzakelijk. In het document dat voor je ligt stellen we richtlijnen op voor het technisch implementeren van een semantisch model in linked data.

<figure>
<img src="./media/interoperabiliteitslagen.svg" alt="Plaatsing van deze richtlijnen binnen de vier interoperabiliteitslagen en ten opzichte van de NEN 2660-2">
<figcaption>Plaatsing van deze richtlijnen binnen de vier interoperabiliteitslagen en ten opzichte van de NEN 2660-2</figcaption>
</figure>

## Doel en doelgroep

In dit document geven we richtlijnen (een gedeelde set van basisregels) voor het modelleren van de gebouwde omgeving in linked data. Deze richtlijnen moeten als een OBT-sectoraal profiel boven op de stack van linked data-standaarden worden gezien. Dit document heeft de volgende doelen:

* technische interoperabiliteit bereiken bij informatiemodellen;
* de drempel verlagen om informatiemodellen op te stellen conform de [[NEN2660-2]].

Met deze richtlijnen wordt het eenvoudiger om met linked data aan de slag te gaan en op een interoperabele manier de gebouwde omgeving te modelleren. Dit leidt op termijn tot een situatie waarin organisaties in Nederland makkelijker met elkaar kunnen samenwerken.

Dit document is bedoeld voor:

* eenieder die actief is met het modelleren van de gebouwde omgeving, met name de technische aspecten daarvan die relevant zijn voor integratie met andere systemen en modellen;
* softwareontwikkelaars die tooling ontwikkelen om woordenboeken, ontologieën en gegevensverzamelingen in te beheren.

Dit document gaat ervan uit dat de lezer een basiskennis heeft van linked data(-standaarden) en het modelleren hierin. Het heeft niet als doel om de basisconcepten van linked data opnieuw uit te leggen.

Op dit moment wordt er nog veel handmatig in linked data gemodelleerd. Naarmate de beschikbare software hiervoor toeneemt, zal dit steeds minder het geval zijn en zal modellering vooral via gebruiksvriendelijke tooling geschieden. Deze richtlijnen zijn bedoeld om de interoperabiliteit van de data en informatie te waarborgen die wordt gemodelleerd en uitgewisseld via deze tools. Softwaretools dienen daarvoor op termijn een implementatie van [[rdf11-concepts|RDF]] te ondersteunen die conform deze richtlijnen is.

## Scope

De scope van de richtlijnen is als volgt. De richtlijnen richten zich op een aantal use cases die in de praktijk vaak voorkomen in de OBT-sector en houden rekening met het algemene volwassenheidsniveau van de sector als het gaat om het modelleren in linked data. Meer geavanceerde onderwerpen vermijden we om die reden. Dit heeft geleid tot de volgende keuzes. In dit document geven we:

* algemene richtlijnen voor het modelleren in linked data (in [[#algemene-richtlijnen]]);
* richtlijnen voor het implementeren van een woordenboek ([[#richtlijnen-voor-woordenboeken]]);
* richtlijnen voor het implementeren van een ontologie ([[#richtlijnen-voor-ontologieën-en-gegevensverzamelingen]]);
* richtlijnen voor het instantiëren van een ontologie als gegevensverzameling ([[#richtlijnen-voor-ontologieën-en-gegevensverzamelingen]]);
* richtlijnen voor versiebeheer van informatiemodellen ([[#richtlijnen-voor-versiebeheer]]).

## Achtergrond: woordenboeken, ontologieën en gegevensverzamelingen

In dit document schrijven we richtlijnen voor hoe een woordenboek, ontologie en gegevensverzameling op te stellen. In deze paragraaf geven we aan wat we onder deze modellen verstaan. We classificeren deze modellen als volgt:

* we gebruiken de term <dfn data-lt="informatiemodel|informatiemodellen">informatiemodel</dfn> als een generieke term voor het structureren van data op typeniveau. We onderscheiden de volgende informatiemodellen:
  * <dfn data-lt="woordenboek|woordenboeken">woordenboeken</dfn> met daarin begrippen en hun onderlinge relaties, en de termen en definities waarmee deze begrippen in één of meerdere natuurlijke talen worden aangeduid. Ze zijn bedoeld voor mensen om tot een gezamenlijk begrip over begrippen te komen, hoewel dit met de opkomst van Large Language Models (LLM's) ook steeds belangrijker wordt voor machinale verwerking;
  * <dfn data-lt="ontologie|ontologieën">ontologieën</dfn> met daarin klassen en hun onderlinge relaties, en identifiers waarmee deze klassen in een machine-readable taal worden aangeduid. Ze zijn voornamelijk bedoeld voor machines om structuren vast te leggen, en voor mensen om tot gezamenlijk begrip over de wereld te komen;
* we gebruiken de term <dfn data-lt="gegevensverzameling|gegevensverzamelingen">gegevensverzameling</dfn> (ook wel informatieverzameling, instantiedata of dataset genoemd) voor gestructureerde instantiedata; de gegevens waarmee mensen en machines dagelijks werken in de OBT-sector. Het betreft dus een verzameling van instanties van onderdelen uit een ontologie. Hoe je een dergelijke gegevensverzameling instantieert of beheert, is op dit moment buiten scope van dit document.

We vermijden het gebruik van de term object type library (OTL); deze term heeft geen duidelijke definitie en wordt vaak als containerbegrip gebruikt.

<figure>
<img src="./media/modellen-verzamelingen-concepten.svg" alt="Modellen, verzamelingen en concepten">
<figcaption>Modellen, verzamelingen en concepten</figcaption>
</figure>

Informatiemodellen worden ingezet om tot gezamenlijk begrip en interoperabele data-uitwisseling te komen binnen en tussen organisaties. Daarbij wordt doorgaans het volgende model voorgeschreven:

* start met het opzetten van een woordenboek waarbij elk begrip voorzien is van een definitie en hiërarchisch is geordend;
* ontwikkel een ontologie waarbij elke klasse, elke eigenschap en elke relatie verwijst naar een begrip in het woordenboek. De hiërarchische ordening van de ontologie zou overeen moeten komen met die van het woordenboek;
* gebruik de ontologie als structuur voor het uitwisselen en delen van instantiedata.

In de volgende paragrafen lichten we de woordenboeken, ontologieën en gegevensverzamelingen in meer detail toe.

### Woordenboeken

Een woordenboek (synoniem: begrippenkader) is een lijst van begrippen, voorzien van termen en definities, eventueel aangevuld met (hiërarchische) relaties. Een woordenboek is bedoeld voor mensen om tot overeenstemming te komen over de betekenis van termen. Voorbeelden van woordenboeken zijn [IMBOR](https://begrippen.crow.nl/imbor/nl/) (Informatiemodel beheer openbare ruimte) en de [Algemene begrippen- en definitielijst (ABDL)](https://www.begrippenxl.nl/ABDL/nl/index) van Rijkswaterstaat (merk op dat dit laatste woordenboek niet per se conform de hier geldende richtlijnen is opgesteld).

In Nederland kennen we twee standaarden voor het opzetten van een woordenboek: de [[NEN2660-2]] en de [[NL-SBB]] ("Standaard voor het beschrijven van begrippen") van Geonovum. Beide zijn gebaseerd op [[skos-reference|SKOS]]. De [[NL-SBB]] is in lijn met de [[NEN2660-2]] maar schrijft ook aanvullende kenmerken voor. In deze modelleerrichtlijnen volgen we de [[NEN2660-2]] volledig. Waar aanvullende keuzes gemaakt moeten worden, wordt de [[NL-SBB]] aangehouden.

De meest basale vorm van een woordenboek is een begrippenlijst (synoniem: termenlijst): een lijst van begrippen zonder relaties.

Je kunt een begrippenlijst hiërarchisch ordenen door het gebruik van "breder dan"- en "nauwer dan"-relaties. Een hond is een nauwer begrip dan een dier; een dier is een breder begrip dan een hond. Merk op dat de hiërarchie binnen een woordenboek informeler/zwakker is dan van een ontologie.

Een woordenboek kan (ook) niet-hiërarchische relaties bevatten. Dan wordt het een thesaurus genoemd. Een voorbeeld van zo'n relatie is de "is gerelateerd aan"-relatie. Deze relatie verbindt een begrip met een ander begrip waarmee het semantisch samenhangt.

In [[#richtlijnen-voor-woordenboeken]] beschrijven we de richtlijnen voor het implementeren van een woordenboek in [[skos-reference|SKOS]].

### Ontologieën

Een ontologie is een formeel conceptueel model van een domein. Een ontologie kan onder andere bestaan uit klassen die attributen hebben en onderlinge (al dan niet hiërarchische) relaties, lijsten van standaard domeinwaardes (enumeraties) en ontologie-eigen datatypes. Een ontologie is bedoeld voor machines om de structuur van gegevens vast te leggen, en voor mensen om tot overeenstemming te komen over hoe ze de wereld zien. Voorbeelden van ontologieën zijn de [IMBOR-ontologie](https://imbor-viewer.apps.crow.nl/) en de [ontologie van Waternet](https://otl.waternet.nl/).

Een ontologie kent:

* klassen, het primaire concept in een ontologie (voorbeeld: "Gebouw");
* hiërarchische relaties tussen klassen (voorbeeld: "een Gebouw is een subtype van een Bouwwerk");
* niet-hiërarchische relaties: andere verbanden, zoals "is gemaakt van" of "veroorzaakt";
* attributen van klassen (voorbeeld: "aanlegjaar");
* beperkingen (synoniem: restricties): logische voorwaarden waar instantiedata zich aan moeten houden (voorbeeld: "een gebouw moet precies één bouwjaar hebben");
* formele semantiek: machine-interpreteerbare relaties en regels die afleidingen mogelijk maken (voorbeeld: "een Hoogdebietklep heeft een nominale diameter groter dan 500 mm en drukklasse PN16", waardoor instanties als Hoogdebietklep kunnen worden afgeleid).

Een ontologie kan worden gebruikt om:

* de structuur van een gegevensverzameling vast te leggen;
* een gegevensverzameling te valideren;
* automatisch informatie af te leiden over de ontologie zelf of over de bijbehorende gegevensverzameling.

In [[#richtlijnen-voor-ontologieën-en-gegevensverzamelingen]] beschrijven we de richtlijnen voor het implementeren van een ontologie in [[rdf-schema|RDFS]] + [[shacl|SHACL]].

### Gegevensverzamelingen

Een gegevensverzameling bevat de eigenlijke instantiedata (synoniem: instanties) waarmee zowel mensen als machines doorgaans werken. Bijvoorbeeld de factuur van 12 mei of de materiaallijst v1 van het uitvoeringsontwerp van een garage.

Instantiedata kunnen alleen juist worden geïnterpreteerd als de structuur is vastgelegd in een ontologie of andersoortig schema, en als elke instantie een verwijzing heeft naar de typering in de ontologie (of het schema) waar het een instantie van is. Dit is weergegeven met de relatie "isVanType" in Afbeelding 2 (`rdf:type` in [[rdf11-concepts|RDF]]).

In [[#richtlijnen-voor-ontologieën-en-gegevensverzamelingen]] geven we richtlijnen hoe een ontologie te instantiëren conform de [[NEN2660-2]].

## Achtergrond: taalkeuze (SKOS, RDFS en SHACL)

In de richtlijnen in dit document schrijven we het gebruik van SKOS (Simple Knowledge Organization System), RDFS (RDF Schema) en SHACL (Shapes Constraint Language) voor. Dit zijn standaard datatalen die voor het semantische web worden gebruikt. In deze paragraaf beschrijven we deze en andere standaarden, lichten we toe hoe ze worden toegepast, en hoe we tot de keuze voor SKOS, RDFS en SHACL zijn gekomen.

### Standaarden voor het semantische web

RDF (Resource Description Framework), RDFS, SKOS, SHACL en OWL (Web Ontology Language) zijn allemaal standaarden voor het semantische web, opgesteld door het W3C. De standaarden zijn verschillend van aard en zijn elk met een ander doel in gedachten ontwikkeld. Het volgende is een versimpelde typering van de verschillende standaarden en waarvoor ze worden gebruikt:

* [[rdf11-primer|RDF]] is een taal die de basisstructuren biedt voor het representeren van data als triples in een grafenmodel;
* [[skos-primer|SKOS]] is een taal voor woordenboeken;
* [[rdf-schema|RDFS]] is een lichtgewicht ontologie-taal waarmee je ontologieën kunt opstellen met een beperkte structuur, logica en beperkingen;
* [[owl2-overview|OWL]] is een ontologie-taal met krachtige formele semantiek die meer geavanceerd automatisch redeneren over data mogelijk maakt;
* [[shacl|SHACL]] is een taal om (i) beperkingen op RDF-data te formaliseren en te verifiëren (SHACL Core) en (ii) regels voor afleiding en bijwerken op te stellen (SHACL Rules).

<figure>
<img src="./media/linked-data-standaarden.svg" alt="'linked data'-standaarden: W3C-standaarden voor het semantische web">
<figcaption>"linked data"-standaarden: W3C-standaarden voor het semantische web</figcaption>
</figure>

Hoewel we SKOS, RDFS, SHACL en OWL hier als talen presenteren, wordt de term vocabulaire ook vaak gebruikt. Een vocabulaire is een set van termen met bijbehorende betekenis en regels voor gebruik voor zowel mens als machine. Vocabulaires kunnen door elkaar heen worden gebruikt. Zoals we op andere plekken in dit document laten zien, worden SKOS, RDFS, SHACL en OWL vaak door elkaar heen gebruikt.

### Het toepassen van de standaarden

Modellen kunnen met verschillende doelstellingen in gedachten worden opgesteld. Allereerst is er de functie van het model: woordenboek, ontologie of gegevensverzameling. Voor een ontologie geldt dat het primaire doel is om structuren vast te leggen. Daarnaast zijn er twee secundaire doelen mogelijk: (i) het formaliseren van beperkingen op instantiedata en deze verifiëren en (ii) het afleiden van nieuwe feiten uit bestaande data.

Vaak kan een bepaald doel op verschillende manieren en met verschillende talen worden gemodelleerd, maar voor effectieve toepassing is het belangrijk dat de gekozen taal aansluit op het beoogde gebruik. In onze richtlijnen hebben we dergelijke keuzes gemaakt. Hierbij laten we ons leiden door de [[NEN2660-2]] en de [[NL-SBB]]. De lezer met verstand van zaken zal daarbij opmerken dat de scheiding van talen en de methodes om een bepaald doel te bereiken soms genuanceerder liggen dan hier wordt gepresenteerd. Dit hebben we gedaan omwille van de leesbaarheid.

| Soort model          | Doel                                                              | Vocabulaire      |
|----------------------|-------------------------------------------------------------------|------------------|
| Woordenboek          | Begrippen definiëren                                              | SKOS             |
| Ontologie            | Simpele structuur vastleggen                                      | RDFS             |
| Ontologie            | Het formaliseren van beperkingen op instantiedata en deze verifiëren | RDFS + SHACL  |
| Ontologie            | Het afleiden van nieuwe feiten uit bestaande data                 | RDFS + OWL       |
| Gegevensverzameling  | Klassen instantiëren                                              | Volgt de ontologie |
| {.data caption="Keuzetabel voor een linked data-standaard."} | | |

Het is belangrijk om de simpelste standaard te kiezen voor het beoogde doel. De hoeveelheid tijd en geld die nodig zijn, neemt snel toe naarmate de gekozen standaard complexer is. Een ontologie is complexer dan een woordenboek. SHACL en OWL bieden meer functionaliteit dan RDFS, maar zijn ook een stuk complexer. Als je niet van plan bent je ontologie te instantiëren, dan kun je beter voor een woordenboek kiezen.

### Taalkeuze voor deze richtlijnen

In de richtlijnen schrijven we het gebruik van SKOS voor woordenboeken voor en RDFS + SHACL voor ontologieën. Voor woordenboeken geldt dat SKOS de standaardkeuze is. Voor ontologieën geldt dat er meerdere keuzes zijn, zoals toegelicht in de voorgaande paragraaf. De richtlijnen in dit document richten zich op een aantal use cases die in de praktijk vaak voorkomen in de OBT-sector en houden rekening met het algemene volwassenheidsniveau van de sector als het gaat om het modelleren in linked data. In dit document kiezen we daarom voor een type ontologie die het ons toelaat de structuur van instantiedata formeel voor te schrijven en te verifiëren. Hiervoor gebruiken we RDFS om de semantische structuur neer te zetten en SHACL voor het formaliseren en valideren van beperkingen en afleidingen op instantiedata.

## Codevoorbeelden

Codevoorbeelden in dit document zijn opgesteld in [[turtle|Turtle]]. Voor elk codevoorbeeld geldt de volgende set van prefixes:

<pre><code class="turtle" data-include="data/prefixes.ttl" data-include-format="text"></code></pre>

We lichten onze richtlijnen toe door voorbeelden van woordenboeken, ontologieën en gegevensverzamelingen te definiëren en te instantiëren. We hebben deze voorzien van de prefixes `ex-term`, `ex-ont` en `ex-data`, waarbij `ex` staat voor *example*.
