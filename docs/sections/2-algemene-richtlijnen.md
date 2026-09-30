# Algemene richtlijnen

In dit hoofdstuk beschrijven we algemene richtlijnen voor het implementeren van informatiemodellen en gegevensverzamelingen.

## Traceerbaarheid van de richtlijnen

De richtlijnen in dit document zijn gebaseerd op de [[NEN2660-2]] en de bovenliggende Europese standaard de [[EN17632]]. Tenzij anders aangegeven sluiten onze richtlijnen aan bij deze standaarden. Waar we van deze standaarden afwijken, geven we dit ook aan.

## Trefwoorden om interoperabiliteitsniveaus mee aan te geven

Zoals eerder gesteld zijn de hier beschreven richtlijnen niet normatief van aard. Het adopteren van deze richtlijnen is vrijwillig. Het adopteren is echter niet vrijblijvend. In onze richtlijnen geven we per onderdeel aan in hoeverre deze opgevolgd worden om tot interoperabiliteit te komen. Hiervoor gebruiken we de trefwoorden MOET, MOET NIET, ZOU MOETEN, ZOU NIET MOETEN en MAG, geschreven in hoofdletters, zoals beschreven in de Conformiteit-sectie van dit document. Deze trefwoorden hebben de volgende betekenis:

* MOET / MOET NIET: de richtlijn is verplicht. Als een implementatie zich niet aan deze richtlijn houdt, dan is interoperabiliteit niet gegarandeerd;
* impliciet: als een trefwoord ontbreekt en iets simpelweg gesteld wordt, dan MOET dit worden geïnterpreteerd alsof het trefwoord MOET is gebruikt. Dit om in sommige gevallen te omslachtige taal- en codeconstructies te voorkomen. Voorbeeld: "Elk begrip wordt geclassificeerd als een `skos:Concept`.";
* ZOU MOETEN: er kunnen redenen zijn om af te wijken van de richtlijn. De keuze om af te wijken MOET doordacht worden gemaakt, met oog voor de gevolgen van de keuze. Als een implementatie zich niet aan deze richtlijn houdt, dan is interoperabiliteit nog steeds mogelijk maar met een beperking in functionaliteit;
* MAG of OPTIONEEL: de richtlijn is volledig optioneel. De ene implementatie zal deze richtlijn wel volgen, de andere niet. De keuze om af te wijken heeft weinig tot geen invloed op de interoperabiliteit.

Als een trefwoord niet in hoofdletters is geschreven, dan MOET het niet als een trefwoord worden geïnterpreteerd.

## URI-strategie en naamgeving

Binnen linked data worden unique resource identifiers (URI's) gebruikt om te identificeren. In paragraaf 8.3 van de [[NEN2660-2]] worden opties voor een URI-strategie gegeven. In dit document worden hier een aantal richtlijnen aan toegevoegd.

Voor URI's gebruiken we webadressen waardoor er direct naar een resource kan worden gerefereerd. De resource kan zo direct worden ontsloten door via bijvoorbeeld een browser naar de URI te navigeren. Een voorbeeld is de URI van het concept `PhysicalObject` uit de [[NEN2660-2]]: `https://w3id.org/nen2660/def#PhysicalObject`.

Een URI dient ter identificatie voor computers en moet daarom vooral uniek en stabiel zijn. Een URI moet daarom zo eenvoudig mogelijk blijven. Hoe meer informatie in een URI wordt gestopt (bijvoorbeeld door een uitgebreid pad op te nemen), hoe meer kans dat er later iets wijzigt in de naam.

Een URI ZOU als volgt MOETEN worden opgebouwd:

| Algemene opbouw | `http://<subdomein>.<domein>/<pad>/<referentie>` |
|-----------------|---------------------------------------------------|
| Voorbeeld       | `http://data.digigo.nu/nlcs/def/738ec21e-fc9c-44ff-aa80-1e84453cf25f` |
| {.data}         | |

Per onderdeel geldt:

* `<domein>`: gebruik hier het webdomein van de organisatie;
* `<subdomein>` (optioneel): gebruik een subdomein om de data te scheiden van overig gebruik van het domein (bijvoorbeeld de website);
* `<pad>` (optioneel): gebruik dit alleen als er een strikte scheiding van verschillende onderwerpen noodzakelijk is. Zie het voorbeeld hierboven, waar één organisatie meerdere standaarden beheert;
* de `<referentie>` is als volgt opgebouwd: `<referentie> = {'term'|'def'|'id'} + '/' + <naam>`:
  * gebruik in een woordenboek `term`, in een ontologie `def` en in een gegevensverzameling `id`;
  * voeg dan een `/` toe;
  * `<naam>`: gebruik een unieke, stabiele naam. We raden aan om voor stabiele, sectorale modellen zoals het toplevelmodel van de [[NEN2660-2]] leesbare namen te gebruiken (bijv. `https://w3id.org/nen2660/def#PhysicalObject`). De reden hiervoor is dat naamgeving in dit soort modellen stabiel blijft. Voor alle andere modellen raden we een UUID aan.

<aside class="note" title="Geen UUIDs in codevoorbeelden">
In onze codevoorbeelden wijken we bewust af van het gebruik van een UUID. Dit doen we alleen om de leesbaarheid van deze voorbeelden te vergroten. In normaal operationeel gebruik zou dit, met de juiste tooling, geen overweging moeten zijn.
</aside>

## Taalondersteuning

Informatiemodellen en gegevensverzamelingen worden vaak in meerdere talen (bijv. Nederlands en Engels) opgesteld. Het gebruik van meerdere talen wordt in linked data ondersteund met zogenoemde language-tagged literals. Voorbeeld: `"Een beschrijvend voorbeeld"@nl`.

Alle voor menselijke consumptie bedoelde strings ZOUDEN als language-tagged literals MOETEN worden opgesteld.

Hier volgen we de lijst van taalcodes zoals opgesteld door de internetstandaard [[BCP47]]. In Nederland zijn de belangrijkste algemene taalcodes `@nl` voor Nederlands, `@en` voor Engels en `@fy` voor Fries. Aanvullend kun je regiospecifieke codes gebruiken zoals `nl-BE` voor Belgisch Nederlands.
