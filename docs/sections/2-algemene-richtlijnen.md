# Algemene richtlijnen

In dit hoofdstuk beschrijven we algemene richtlijnen voor het implementeren van [=informatiemodellen=] en [=gegevensverzamelingen=].

## Traceerbaarheid van de richtlijnen

De richtlijnen in dit document zijn gebaseerd op de [[NEN2660-2]] en de bovenliggende Europese standaard de [[EN17632]]. Voor [=woordenboeken=] baseren we ons bovendien ook op de [[NL-SBB]]. Tenzij anders aangegeven sluiten onze richtlijnen aan bij deze standaarden. Waar we van deze standaarden afwijken, geven we dit ook aan.

## Trefwoorden om interoperabiliteitsniveaus mee aan te geven

De hier beschreven richtlijnen zijn niet normatief van aard; het adopteren ervan is vrijwillig, maar niet vrijblijvend. In onze richtlijnen geven we per onderdeel met trefwoorden in hoofdletters (MOET, ZOU MOETEN, MAG, enzovoort) aan in hoeverre het opvolgen ervan bijdraagt aan interoperabiliteit. De volledige betekenis van deze trefwoorden en de bijbehorende interoperabiliteitsniveaus is beschreven in [[[#conformance]]].

## URI-strategie en naamgeving

Binnen linked data worden webgebaseerde Uniform Resource Identifiers ([=URI=]'s) gebruikt om resources (alle dingen die je wilt identificeren) te identificeren. Bijvoorbeeld in [=SKOS=] zijn dat begrippen (Engels: concepts), in [=RDFS=] en [=OWL=] zijn dat klassen (Engels: classes). In paragraaf 8.3 van de [[NEN2660-2]] worden opties voor een URI-strategie gegeven. In dit document worden hier een aantal richtlijnen aan toegevoegd.

Voor URI's gebruiken we webadressen waardoor er direct aan een resource kan worden gerefereerd. De resource kan zo direct worden ontsloten door via bijvoorbeeld een browser naar de URI te navigeren. Een voorbeeld is de URI van het concept `PhysicalObject` uit de [[NEN2660-2]]: [`http://w3id.org/nen2660/def#PhysicalObject`](http://w3id.org/nen2660/def#PhysicalObject).

Een URI dient ter identificatie voor computers en moet daarom vooral uniek en stabiel zijn. Een URI moet daarom zo eenvoudig mogelijk blijven. Hoe meer informatie in een URI wordt gestopt (bijvoorbeeld door een uitgebreid pad op te nemen), hoe meer kans dat er later iets wijzigt in de naam.

Een URI ZOU als volgt MOETEN worden opgebouwd:

| Algemene opbouw | `http://`<span style="color:#0077c8">`<subdomein>`</span>`.`<span style="color:#2e7d32">`<domein>`</span>`/`<span style="color:#d32f2f">`<pad>`</span>`/`<span style="color:#7b1fa2">`<referentie>`</span> |
|-----------------|---------------------------------------------------|
| Voorbeeld       | `http://`<span style="color:#0077c8">`data`</span>`.`<span style="color:#2e7d32">`digigo.nu`</span>`/`<span style="color:#d32f2f">`nlcs`</span>`/`<span style="color:#7b1fa2">`def/738ec21e-fc9c-44ff-aa80-1e84453cf25f`</span> |
| {.data}         | |

Per onderdeel geldt (met de kleur van het bijbehorende onderdeel hierboven):

* <span style="color:#2e7d32">`<domein>`</span>: gebruik hier het webdomein van de organisatie;
* <span style="color:#0077c8">`<subdomein>`</span> (optioneel): gebruik een subdomein om de data te scheiden van overig gebruik van het domein (bijvoorbeeld de website);
* <span style="color:#d32f2f">`<pad>`</span> (optioneel): gebruik dit alleen als er een strikte scheiding van verschillende onderwerpen noodzakelijk is. Zie het voorbeeld hierboven, waar één organisatie meerdere standaarden beheert;
* de <span style="color:#7b1fa2">`<referentie>`</span> is als volgt opgebouwd: `<referentie> = {'term'|'def'|'id'} + '/' + <naam>`:
  * gebruik in een woordenboek `term`, in een [=ontologie=] (inclusief enumeratiewaarden) `def` en in een gegevensverzameling `id`;
  * voeg dan een `/` toe;
  * `<naam>`: gebruik een unieke en stabiele naam. We raden aan om een universally unique identifier (UUID) te gebruiken en alleen voor stabiele, sectorale modellen zoals het toplevelmodel van de [[NEN2660-2]] leesbare namen te gebruiken (bijv. `http://w3id.org/nen2660/def#PhysicalObject`). De reden hiervoor is dat naamgeving in dit soort modellen stabiel blijft. Voor alle andere modellen raden we aan om een UUID te gebruiken.

<aside class="note" title="Geen UUID's in codevoorbeelden">
In onze codevoorbeelden wijken we bewust af van het gebruik van een UUID. Dit doen we alleen om de leesbaarheid van deze voorbeelden te vergroten. In normaal operationeel gebruik zou dit, met de juiste tooling, geen overweging moeten zijn.
</aside>

## Taalondersteuning

Informatiemodellen en gegevensverzamelingen worden vaak in meerdere talen (bijv. Nederlands en Engels) opgesteld. Het gebruik van meerdere talen wordt in linked data ondersteund met zogenoemde language-tagged literals. Voorbeeld: `"Een beschrijvend voorbeeld"@nl`.

Alle voor menselijke consumptie bedoelde strings ZOUDEN als language-tagged literals MOETEN worden opgesteld.

Hier volgen we de lijst van taalcodes zoals opgesteld door de internetstandaard [[BCP47]]. In Nederland zijn de belangrijkste algemene taalcodes `@nl` voor Nederlands, `@en` voor Engels en `@fy` voor Fries. Aanvullend kun je regiospecifieke codes gebruiken zoals `@nl-BE` voor Belgisch Nederlands.
