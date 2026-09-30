# Richtlijnen voor woordenboeken

In dit hoofdstuk beschrijven we de richtlijnen voor het implementeren van een woordenboek in linked data. Hiervoor gebruiken we Simple Knowledge Organization System (SKOS) als vocabulaire en zowel de [[NEN2660-2]] als de Nederlandse Standaard voor het beschrijven van begrippen ([[NL-SBB]]). Dit hoofdstuk is praktisch van opzet: het laat zien hoe je een woordenboek stap voor stap opbouwt in SKOS. Dit komt overeen met "Toepassingstype 1: afstemming van termen en definities" in de [[NEN2660-2]].

<aside class="note" title="Leesbare namen in plaats van UUIDs">
In onze codevoorbeelden gebruiken we, ten behoeve van de leesbaarheid, menselijk leesbare namen in de referentie in plaats van UUIDs. In normaal gebruik MOETEN UUIDs worden gebruikt, zie [[#uri-strategie-en-naamgeving]].
</aside>

## Woordenboek

Een woordenboek is een verzameling van begrippen. We starten met het definiëren van het woordenboek zelf: de verzameling die alle begrippen bevat.

Het woordenboek MOET:

* worden gedefinieerd middels `skos:ConceptScheme`;
* per taal precies één leesbare titel hebben. Deze titel MOET tweemaal worden geannoteerd: met `skos:prefLabel` en met `dct:title`, om compliant te zijn met zowel de [[NEN2660-2]] (die `skos:prefLabel` voorschrijft) als de [[NL-SBB]] (die `dct:title` voorschrijft);
* een versieaanduiding hebben middels `owl:versionInfo`.

Het woordenboek ZOU de volgende metadata MOETEN hebben:

* een publicatiedatum middels `dct:date`;
* een licentie middels `dct:license`.

Het woordenboek MAG andere metadata bevatten, zoals `dct:creator`, `dct:contributor`, `dct:publisher` of `schema:maintainer`.

<pre><code class="turtle" data-include="data/woordenboek-definitie.ttl" data-include-format="text"></code></pre>

## Begrippen

Na het definiëren van het woordenboek volgen de begrippen. Elk begrip:

* MOET worden gedefinieerd als een `skos:Concept`;
* MOET per taal precies één voorkeursnaam hebben middels `skos:prefLabel`;
* MAG expliciet vastgelegd hebben bij welk woordenboek het hoort middels `skos:inScheme`.

<pre><code class="turtle" data-include="data/woordenboek-begrippen.ttl" data-include-format="text"></code></pre>

## Synoniemen en overige metadata

Na het vastleggen van een begrip MAG er extra metadata aan worden toegevoegd.

* Een begrip MAG nul of meer synoniemen per taal hebben middels `skos:altLabel`.
* Een begrip ZOU één definitie (`skos:definition`) per taal MOETEN hebben. Een begrip MOET NIET meer dan één definitie per taal hebben.
* Tot slot MAG een begrip nul of meer codes (`skos:notation`) hebben. Een code is een tekenreeks ter aanduiding van een begrip. Een code MOET uniek zijn voor een begrip. Een code is taalonafhankelijk en MOET zonder taalaanduiding worden opgegeven.

<pre><code class="turtle" data-include="data/woordenboek-synoniemen.ttl" data-include-format="text"></code></pre>

## Hiërarchie en relaties

Een begrippenlijst kan hiërarchisch worden geordend door het gebruik van "breder dan"-relaties. Deze relatie kan breed geïnterpreteerd worden: "dier" is een breder begrip dan "hond", maar "hond" is ook een breder begrip dan "poot". Het aangeven van een hiërarchische relatie MOET middels `skos:broader`.

Naast hiërarchische relaties MAG een begrip een relatie hebben met een gerelateerd begrip. Het kan dan gaan om begrippen die qua betekenis dicht bij elkaar liggen, zonder dat er een duidelijke hiërarchische relatie bestaat. Dergelijke relaties MOETEN middels `skos:related` worden aangegeven. In het voorbeeld hieronder zijn `ex-term:Gebouw` en `ex-term:InpandigeRuimteGebouw` op deze wijze aan elkaar gerelateerd.

<pre><code class="turtle" data-include="data/woordenboek-hierarchie.ttl" data-include-format="text"></code></pre>

## Groepen

Begrippen kunnen geclusterd worden in een groep. Dit wordt bijvoorbeeld gedaan om begrippen gezamenlijk te kunnen presenteren. Een groep MOET als `skos:Collection` worden geïmplementeerd. Begrippen MOETEN middels `skos:member` worden toegewezen aan de groep. In het voorbeeld hieronder zijn de begrippen `ex-term:Gebouw` en `ex-term:InpandigeRuimteGebouw` gegroepeerd middels de groep `ex-term:FunctioneleRuimten`.

Een groep MOET per taal precies één voorkeursnaam hebben middels `skos:prefLabel`. Een groep ZOU één definitie (`skos:definition`) per taal MOETEN hebben. Een groep MOET NIET meer dan één definitie per taal hebben.

<pre><code class="turtle" data-include="data/woordenboek-groepen.ttl" data-include-format="text"></code></pre>

## Relaties met andere woordenboeken

Begrippen kunnen gerelateerd worden aan begrippen in andere woordenboeken, bijvoorbeeld om twee sectorale woordenboeken op elkaar af te stemmen. Voor dergelijke verwijzingen bestaan aparte relaties. Deze zijn te herkennen aan het woord *Match* aan het einde. De volgende tabel toont de relaties die gebruikt MOETEN worden voor het aan elkaar relateren van begrippen tussen woordenboeken.

| Relatie            | Betekenis                                            |
|--------------------|------------------------------------------------------|
| `skos:exactMatch`  | De twee begrippen betekenen hetzelfde.               |
| `skos:closeMatch`  | De twee begrippen liggen dicht bij elkaar.           |
| `skos:relatedMatch`| De twee begrippen zijn gerelateerd aan elkaar.       |
| `skos:broadMatch`  | Het tweede begrip is een breder begrip dan het eerste. |
| {.data caption="Relaties naar begrippen in andere woordenboeken."} | |

<pre><code class="turtle" data-include="data/woordenboek-matches.ttl" data-include-format="text"></code></pre>

Voor formele mappingen van ontologieën (niet geschikt voor woordenboeken) is het ook mogelijk om andere relaties te gebruiken; zie hiervoor de CROW-whitepaper over ontologie alignment.

## Hergebruik van begrippen

Begrippen worden hergebruikt door ze op te nemen in meerdere woordenboeken. Dit MOET worden vastgelegd middels `skos:inScheme`: een begrip kan dan bij meerdere `skos:ConceptScheme`-instanties worden aangemeld.

Voor meer achtergrond over het harmoniseren en hergebruiken van woordenboeken verwijzen we naar de [[NL-SBB]].
