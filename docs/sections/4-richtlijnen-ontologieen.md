# Richtlijnen voor ontologieën en gegevensverzamelingen

In dit hoofdstuk beschrijven we de richtlijnen voor het implementeren van een ontologie en bijbehorende gegevensverzameling (de instanties van de ontologie) in linked data. Dit hoofdstuk is praktisch van opzet: het laat zien hoe je een ontologie stap voor stap opbouwt en instantieert.

Een ontologie kan worden gebruikt voor verschillende soorten doelen. In dit hoofdstuk kiezen we voor een ontologie die het ons toelaat de structuur van instantiedata formeel voor te schrijven en te verifiëren. We gebruiken daarom RDFS om de semantische structuur neer te zetten en SHACL voor het formaliseren en valideren van constraints op instantiedata. Dit komt overeen met toepassingstypes 2 (informatie-uitwisseling of -deling) en 3 (informatie-integratie en innovatie) in de [[NEN2660-2]]. We gebruiken OWL om de ontologie als geheel te definiëren.

In onze codevoorbeelden gebruiken we de prefixes die zijn gedefinieerd in [[#codevoorbeelden-en-gebruikte-prefixes]]. Merk op dat we in onze codevoorbeelden, ten behoeve van de leesbaarheid, menselijk leesbare namen in de referentie gebruiken in plaats van UUIDs. In normaal gebruik MOETEN UUIDs worden gebruikt, zie [[#uri-strategie-en-naamgeving]].

## Ontologie definiëren

Een ontologie is een verzameling van klassen, attributen en relaties. Een ontologie wordt doorgaans in zijn geheel gepubliceerd. Metadatering van de ontologie is een vereiste voor versiebeheer, zie ook [[#richtlijnen-voor-versiebeheer]]. We starten daarom met het definiëren van de ontologie zelf.

Een ontologie:

* MOET worden geïnstantieerd als een `owl:Ontology`;
* ZOU als URI hetzelfde MOETEN hebben als de namespace die wordt gebruikt, minus de `/` op het einde;
* MOET de [[NEN2660-2]] importeren middels `owl:imports`. Het topmodel importeren we omdat je ontologie niet compleet is zonder het topmodel. Dat onderscheidt het van referentiemodellen of delen van modellen die hergebruikt worden;
* MOET een versieaanduiding hebben middels `owl:versionInfo`;
* MOET een verwijzing naar een versie hebben middels `owl:versionIRI`;
* MOET een naam hebben middels `rdfs:label`;
* ZOU een publicatiedatum MOETEN hebben middels `dct:date`;
* ZOU een licentie MOETEN hebben middels `dct:license`;
* MAG andere metadata bevatten (bijvoorbeeld `dct:creator`, `dct:contributor`, `dct:publisher` of `schema:maintainer`).

<pre><code class="turtle" data-include="data/ontologie-definitie.ttl" data-include-format="text"></code></pre>

## Klassen definiëren en instantiëren

Een klasse MOET worden gedefinieerd middels `rdfs:Class`. De klasse:

* MOET per taal precies één voorkeursnaam hebben (`skos:prefLabel`);
* ZOU per taal één definitie MOETEN hebben (`skos:definition`). Een klasse MOET NIET meer dan één definitie per taal hebben;
* MAG een of meer toelichtingen per taal hebben (`rdfs:comment`) om het gewenst gebruik te verduidelijken.

Instantiatie van een klasse MOET middels `rdf:type` worden gedaan.

<pre><code class="turtle" data-include="data/ontologie-klassen.ttl" data-include-format="text"></code></pre>

## Klassen relateren aan een begrip

Een klasse uit een ontologie mag gerelateerd worden aan een begrip uit een woordenboek, bijvoorbeeld om de formele typering van een menselijke definitie te voorzien. Hiervoor wordt `rdfs:seeAlso` gebruikt.

<pre><code class="turtle" data-include="data/ontologie-seealso.ttl" data-include-format="text"></code></pre>

## Overerven (van het NEN 2660-2-topmodel)

Klassen kunnen overerven van een bovenliggende klasse. Daarmee erven ze alle eigenschappen en relaties van de bovenliggende klasse. Een klasse MAG van meerdere klassen overerven. Merk op dat het overerven van meerdere klassen extra complexiteit introduceert.

Elke klasse MOET direct of indirect overerven van het [[NEN2660-2]]-topmodel middels `rdfs:subClassOf`. Dit betekent dat de klasse zelf direct overerft van het topmodel, of dat het overerft van een klasse die (indirect) overerft van het topmodel.

<pre><code class="turtle" data-include="data/ontologie-overerving.ttl" data-include-format="text"></code></pre>

## Enumeraties

Enumeraties worden gebruikt door eigenschappen om een waarde uit een lijst van waarden te kiezen. Voor enumeraties gelden de volgende richtlijnen. Een enumeratie:

* MOET worden geïmplementeerd als een instantie van een `nen2660:EnumerationType`;
* MOET per taal precies één voorkeursnaam hebben (`skos:prefLabel`);
* ZOU per taal een definitie MOETEN hebben (`skos:definition`). Een enumeratie MOET NIET meer dan één definitie per taal hebben;
* MAG een of meer toelichtingen per taal hebben (`rdfs:comment`).

Voor de waarden van de enumeratie gelden de volgende richtlijnen. Een enumeratiewaarde:

* MOET worden geïmplementeerd als instantie van de enumeratie;
* MOET per taal precies één voorkeursnaam hebben (`skos:prefLabel`);
* MAG per taal een definitie hebben (`skos:definition`). Een enumeratiewaarde MOET NIET meer dan één definitie per taal hebben;
* MAG een of meer toelichtingen per taal hebben (`rdfs:comment`).

Het onderstaande codevoorbeeld toont een enumeratie met twee waarden.

<pre><code class="turtle" data-include="data/ontologie-enumeraties.ttl" data-include-format="text"></code></pre>

## Eigenschappen

De [[NEN2660-2]] biedt diverse opties voor het modelleren van eigenschappen, waar we aan refereren als *simpel*, *complex* en *waarnemingen*:

* **simpel**: een directe relatie tussen het object en de waarde;
* **complex**: de waarde wordt vervangen door een tussenliggende node, waar metadata op vastgelegd kan worden. In de praktijk wordt dit vooral toegepast om eenheden aan te kunnen geven;
* **waarnemingen** (out of scope en alleen in SML aanwezig): de kenmerken worden gekoppeld aan een waarneming in plaats van een object. Dit leidt tot een erg uitgebreid patroon, waardoor het complex wordt om deze in een ontologie voor te schrijven. Ook is dit patroon alleen relevant wanneer er series aan metingen (bijvoorbeeld van sensoren) worden vastgelegd op hetzelfde kenmerk van hetzelfde object, op verschillende tijdstippen. Dit modelleerpatroon valt daarom buiten de scope van deze modelleerrichtlijn.

<figure>
<img src="./media/eigenschappen-simpel-complex.png" alt="Onderscheid tussen een simpele en complexe eigenschap">
<figcaption>Onderscheid tussen een simpele en complexe eigenschap</figcaption>
</figure>

> TODO: afbeelding toevoegen (onderscheid simpele/complexe eigenschap, bron: conceptdocument, Afbeelding 4).

Uitgangspunt bij het modelleren van eigenschappen is om het zo simpel mogelijk te houden, en alleen uit te wijken naar complexere modellering als het noodzakelijk is. Hiermee worden de principes uit de introductie van de [[NEN2660-2]] gevolgd. Daardoor is het goed mogelijk dat er in één ontologie een combinatie van simpele en complexe kenmerken gebruikt wordt. Alleen eigenschappen zonder eenheid kunnen als simpele eigenschap worden gemodelleerd. Een eigenschap met een eenheid MOET als complexe eigenschap worden gemodelleerd.

In de volgende paragrafen modelleren we eigenschappen eerst simpel, daarna complex.

### Simpele eigenschappen

Hier beschrijven we hoe een simpele eigenschap te definiëren en instantiëren. Daarbij maken we onderscheid tussen eigenschappen met een primair waardetype (d.w.z. een XSD-waardetype) en met een enumeratie als waardetype. Merk op dat je bij simpele eigenschappen geen eenheden kunt aangeven.

Een simpele eigenschap MOET als volgt worden geïmplementeerd:

* we implementeren de eigenschap als instantie van `rdf:Property`, en implementeren beperkingen middels een `sh:PropertyShape`. Eigenschappen worden toegekend aan een klasse middels `sh:property` (via een `sh:NodeShape`).

Voor de eigenschap zelf (de instantie van `rdf:Property`) geldt:

* een eigenschap MOET per taal precies één voorkeursnaam hebben (`skos:prefLabel`);
* een eigenschap ZOU per taal precies één definitie MOETEN hebben (`skos:definition`). Een eigenschap MOET NIET meer dan één definitie per taal hebben;
* aan elke klasse MOGEN één of meer eigenschappen worden toegekend;
* een eigenschap MAG aan één of meerdere klassen worden toegekend;
* een eigenschap MAG een of meer toelichtingen per taal hebben (`rdfs:comment`).

Voor de beperkingen die aan de `sh:PropertyShape` hangen, geldt:

* aan de `sh:PropertyShape` MAG maximaal één `sh:minCount` worden toegekend: hiermee geef je aan hoe vaak de eigenschap minimaal moet voorkomen bij een instantie van de klasse. Het ontbreken van een `sh:minCount` geeft aan dat er geen minimum is en dat de eigenschap dus mag ontbreken;
* aan de `sh:PropertyShape` MAG maximaal één `sh:maxCount` worden toegekend: hiermee geef je aan hoe vaak de eigenschap maximaal mag voorkomen bij een instantie van de klasse. Het ontbreken van een `sh:maxCount` geeft aan dat er geen maximum is.

Een bepalend onderdeel van de `sh:PropertyShape` is het waardetype. We maken een onderscheid tussen eigenschappen met een primair waardetype en met een enumeratie als waardetype:

* een eigenschap met een primair waardetype MOET een XSD-waardetype toegekend krijgen middels `sh:datatype`;
* een eigenschap met een enumeratie als waardetype MOET een instantie van `nen2660:EnumerationType` toegekend krijgen middels `sh:class`.

Het onderstaande codevoorbeeld toont een eigenschap met een primair waardetype (een jaartal: `xsd:gYear`).

<pre><code class="turtle" data-include="data/ontologie-eigenschap-simpel.ttl" data-include-format="text"></code></pre>

Het onderstaande codevoorbeeld toont een eigenschap met een enumeratie als waardetype.

<pre><code class="turtle" data-include="data/ontologie-eigenschap-enum.ttl" data-include-format="text"></code></pre>

### Complexe eigenschappen met eenheden

Hier beschrijven we hoe een complexe eigenschap te definiëren en instantiëren. Een belangrijk verschil met simpele eigenschappen is dat met complexe eigenschappen eenheden en andere metadata in de gegevensverzameling kunnen worden vastgelegd op de waarde. Dit vereist dat zowel de waarde als de eenheid van een eigenschap allebei moeten worden vastgelegd. Hiervoor kent de [[NEN2660-2]] de klasse `nen2660:QuantityValue`. Voor instantiedata is de impact relatief klein, maar vooral op klasseniveau wordt het patroon een stuk complexer.

Het codevoorbeeld hieronder toont de structuur om een complexe eigenschap te definiëren en instantiëren. Merk op dat we voor de leesbaarheid hier geen gebruik maken van blank nodes, maar dat deze wel mogen worden toegepast.

Een complexe eigenschap wordt als volgt gedefinieerd:

* de semantische structuur van de eigenschap is een instantie van `rdf:Property`;
* beperkingen op de eigenschap worden aangebracht middels een `sh:PropertyShape`;
* de `sh:PropertyShape` MAG een `sh:class nen2660:QuantityValue`-restrictie hebben. In dat geval wordt het verplicht om bij elke waarde expliciet aan te geven dat dit een instantie is van `nen2660:QuantityValue`;
* er MOET middels een `sh:node` verwezen worden naar de tussenliggende `sh:NodeShape`;
* `sh:minCount` en `sh:maxCount` kunnen worden toegepast op dezelfde manier als voor een simpele eigenschap;
* een tussenliggende `sh:NodeShape` verwijst naar de beperkingen op de waarde en de eenheid middels `sh:property`;
* de beperkingen op de waarde middels een `sh:PropertyShape`: deze MOET `sh:path rdf:value`, `sh:minCount 1` en `sh:maxCount 1` hebben en MAG een `sh:datatype` met een primair datatype hebben;
* de beperkingen op de eenheid middels een `sh:PropertyShape`: deze MOET een `sh:path nen2660:hasUnit`, `sh:maxCount 1` en `sh:minCount 1` hebben, en ZOU een `sh:hasValue qudt:...` MOETEN hebben, behalve voor eenheden waarin QUDT niet voorziet.

Een complexe eigenschap wordt als volgt geïnstantieerd (in het voorbeeld is dit `ex-data:Gebouw_123Massa`):

* deze node MOET de waarde aangeven middels `rdf:value`;
* deze node MOET de eenheid aangeven middels `nen2660:hasUnit`;
* voor de eenheden ZOU QUDT gebruikt MOETEN worden, behalve voor eenheden waarin QUDT niet voorziet;
* deze node MOET een instantie van `nen2660:QuantityValue` zijn als de `sh:PropertyShape` van de eigenschap de restrictie `sh:class nen2660:QuantityValue` heeft.

<pre><code class="turtle" data-include="data/ontologie-eigenschap-complex.ttl" data-include-format="text"></code></pre>

Hetzelfde patroon MAG gebruikt worden voor kenmerken zonder eenheid. Op deze manier kan extra informatie vastgelegd worden op de waarde (bijvoorbeeld wanneer of door wie deze is vastgelegd). Vanwege de extra complexiteit die dit aan de modellering toevoegt, heeft de simpele modellering echter de voorkeur.

### Waardebeperkingen op eigenschappen

In de voorgaande paragrafen zijn de meest voorkomende beperkingen behandeld voor eigenschappen, zoals datatypes, waardenlijsten en eenheden. In deze paragraaf schrijven we twee manieren voor hoe beperkingen op de waarde van een eigenschap kunnen worden gemodelleerd.

Voor numerieke datatypes MAG een minimum en/of een maximum worden voorgeschreven voor de waarde van een eigenschap. Hiervoor dienen `sh:minInclusive` (>=), `sh:maxInclusive` (<=), `sh:minExclusive` (>) en `sh:maxExclusive` (<) gebruikt te worden.

<pre><code class="turtle" data-include="data/ontologie-waarde-minmax.ttl" data-include-format="text"></code></pre>

Daarnaast MAG een patroon worden voorgeschreven (denk aan een Nederlands kenteken, met een specifieke combinatie van letters, cijfers en streepjes) voor de waarde van een eigenschap. Hiervoor wordt `sh:pattern` gebruikt. Het patroon dient uitgedrukt te worden als een reguliere expressie.

<pre><code class="turtle" data-include="data/ontologie-waarde-patroon.ttl" data-include-format="text"></code></pre>

## Relaties

Klassen kunnen onderling gerelateerd zijn. Als deze relaties in het informatiemodel zijn vastgelegd, bepalen ze hoe objecten (instanties) met elkaar verbonden mogen of moeten zijn in de data. De [[NEN2660-2]] biedt diverse gedefinieerde relaties met verschillende betekenissen. Voorbeelden zijn `nen2660:hasPart`, `nen2660:contains` en `nen2660:isConnectedTo`. De complete lijst is te vinden in paragraaf 6.14 van de [[NEN2660-2]] of in de [GitHub-repository](https://w3id.org/nen2660) van de NEN.

Een relatie:

* MOET per taal precies één voorkeursnaam hebben (`skos:prefLabel`);
* ZOU per taal precies één definitie MOETEN hebben (`skos:definition`) en MOET NIET meer dan één definitie per taal hebben;
* MAG een of meer toelichtingen per taal hebben (`rdfs:comment`);
* ZOU altijd een multipliciteit MOETEN hebben.

In deze richtlijnen raden we aan om alleen de relaties uit de [[NEN2660-2]] te gebruiken en deze ook alleen te gebruiken zoals de [[NEN2660-2]] dit voorschrijft. Bijvoorbeeld dat de `nen2660:executes`-relatie alleen maar van een `nen2660:PhysicalObject` naar een `nen2660:Activity` mag lopen.

In een ontologie MOGEN eigen relaties aangemaakt worden. Deze ZOUDEN waar mogelijk middels `rdfs:subPropertyOf` een extensie van een [[NEN2660-2]]-relatie MOETEN zijn. Het is handig als de relatie een duidelijke, inhoudelijk relevante en semantisch consistente verfijning is van een bestaande [[NEN2660-2]]-relatie, die noodzakelijk is om het domein correct en nog eenduidiger te modelleren.

Hieronder laten we door middel van codevoorbeelden en toelichtingen zien hoe:

* een relatie uit de [[NEN2660-2]] zonder aanvullende beperkingen en annotaties kan worden gebruikt;
* een relatie uit de [[NEN2660-2]] mét aanvullende beperkingen en annotaties kan worden gebruikt;
* een eigen relatie kan worden aangemaakt en gebruikt.

### Gebruik van een relatie uit de NEN 2660-2

Het onderstaande codevoorbeeld laat zien hoe een relatie uit de [[NEN2660-2]] direct kan worden gebruikt, zonder aanvullende beperkingen en annotaties.

<pre><code class="turtle" data-include="data/ontologie-relatie-nen2660.ttl" data-include-format="text"></code></pre>

### Gebruik van een relatie uit de NEN 2660-2 met aanvullende beperkingen en annotaties

Het onderstaande codevoorbeeld laat zien hoe aanvullende beperkingen en annotaties op de bestaande relatie `nen2660:hasPart` kunnen worden aangebracht.

<pre><code class="turtle" data-include="data/ontologie-relatie-beperkingen.ttl" data-include-format="text"></code></pre>

Beperkingen en annotaties worden middels een `sh:PropertyShape` gedefinieerd. Hiervoor gelden de volgende richtlijnen:

* de bestaande relatie MOET worden gebruikt middels `sh:path`;
* `sh:qualifiedValueShape` MOET worden gebruikt om de "andere kant" van de relatie (het object) te typeren;
* een minimum aantal keren dat een relatie moet voorkomen, MOET worden gedefinieerd met `sh:qualifiedMinCount`. Deze beperking MAG ontbreken; dat betekent dat er geen minimum is;
* een maximum aantal keren dat een relatie mag voorkomen, MOET worden gedefinieerd met `sh:qualifiedMaxCount`. Deze beperking MAG ontbreken; dat betekent dat er geen maximum is;
* de relatie MAG een naam worden toegewezen met `sh:name`;
* de relatie MAG een definitie worden toegewezen middels `sh:description`. Als de relatie een definitie wordt toegewezen, dan ZOU de relatie in elke taal precies één definitie MOETEN hebben.

### Definitie en gebruik van eigen relaties

Het onderstaande codevoorbeeld laat zien hoe een eigen relatie kan worden gedefinieerd, voorzien van annotaties en beperkingen, en worden gebruikt.

<pre><code class="turtle" data-include="data/ontologie-relatie-eigen.ttl" data-include-format="text"></code></pre>

De richtlijnen voor het zelf definiëren van een relatie zijn als volgt:

* de relatie MOET worden gedefinieerd als een `rdf:Property`;
* de relatie ZOU een extensie van een [[NEN2660-2]]-relatie MOETEN zijn middels `rdfs:subPropertyOf`;
* de `rdf:Property` MOET één naam per taal hebben middels `skos:prefLabel`;
* de `rdf:Property` ZOU per taal precies één definitie MOETEN hebben (`skos:definition`). Een eigenschap MOET NIET meer dan één definitie per taal hebben;
* de `rdf:Property` MAG een of meer toelichtingen per taal hebben (`rdfs:comment`);
* beperkingen en annotaties MOETEN middels een `sh:PropertyShape` worden gedefinieerd; hiervoor gelden dezelfde richtlijnen als gedefinieerd in [[#gebruik-van-een-relatie-uit-de-nen-2660-2-met-aanvullende-beperkingen-en-annotaties]].

## Groepen

Klassen, enumeraties, eigenschappen en instanties kunnen worden gegroepeerd middels `rdfs:Container` en `rdfs:member`, bijvoorbeeld om te groeperen naar discipline. Een groep:

* MOET per taal precies één voorkeursnaam hebben (`skos:prefLabel`);
* ZOU per taal precies één definitie MOETEN hebben (`skos:definition`). Een groep MOET NIET meer dan één definitie per taal hebben;
* MAG een of meer toelichtingen per taal hebben (`rdfs:comment`).

<pre><code class="turtle" data-include="data/ontologie-groepen.ttl" data-include-format="text"></code></pre>
