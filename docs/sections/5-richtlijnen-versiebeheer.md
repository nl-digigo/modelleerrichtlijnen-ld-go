# Richtlijnen voor versiebeheer

Voor goed beheer van [=informatiemodellen=] ([=woordenboeken=] en [=ontologieën=]) is versiebeheer van groot belang. Binnen de toepassing van linked data zijn echter veel verschillende strategieën mogelijk, afhankelijk van het gewenste gebruik en van de manier waarop informatiemodellen worden gepubliceerd. Dit hoofdstuk bevat richtlijnen waarbij nieuwe versies van informatiemodellen in hun geheel worden gepubliceerd. Andere, meer gedetailleerde vormen van versiebeheer en levenscyclusmanagement zijn voor nu buiten scope. De richtlijnen zijn onafhankelijk opgesteld van de manier waarop een model wordt gepubliceerd. Deze richtlijnen gelden voor informatiemodellen (woordenboeken en ontologieën), niet voor [=gegevensverzamelingen=].

We schrijven de volgende richtlijnen voor:

* versionering geschiedt op het niveau van een informatiemodel. Informatiemodellen MOETEN in hun geheel worden gepubliceerd;
* resources MOETEN tussen versies dezelfde URI behouden. De URI van het informatiemodel en van een concept bevat dus geen versie-informatie;
* een ontologie MOET expliciet worden gedefinieerd met `owl:Ontology`;
* de URI van de `owl:Ontology` MAG versie-informatie bevatten;
* de ontologie MOET een versienummer hebben;
* de ontologie MOET een naam hebben;
* een woordenboek MOET expliciet worden gedefinieerd met `skos:ConceptScheme`;
* de URI van de `skos:ConceptScheme` MAG versie-informatie bevatten;
* het woordenboek MOET een versienummer hebben;
* het woordenboek MOET een titel hebben;
* in de ontsluiting ZOU een URI mét versienummer MOETEN refereren aan de betreffende versie van het informatiemodel. Een URI zónder versienummer ZOU MOETEN refereren naar de meest recente versie;
* verschillen tussen versies ZOUDEN NIET als onderdeel van het informatiemodel opgeslagen MOETEN worden, om vervuiling tussen inhoud en context te voorkomen;
* wel ZOU een overzicht van wijzigingen met gebruikers gedeeld MOETEN worden, om duidelijk te maken wat de impact is van iedere nieuwe versie.

Voor meer informatie over dit onderwerp verwijzen we naar een [verdiepend artikel](https://docs.crow.nl/wp/ldversiebeheer/) van CROW. Hierin staat een uitgebreide uitleg over verschillende strategieën voor versiebeheer, waaronder ook een aantal van de strategieën die buiten de scope van deze modelleerrichtlijnen vallen.
