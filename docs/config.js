var respecConfig = {
  // this template doesn't use all possible config parameters
  // see https://github.com/stichting-crow/respec/wiki for all options
  specStatus: "DEF",
  imprint: "digigo",
  specType: "richtlijn",
  // subtitle: "Hier komt een subtitle",
  shortName: "modelleerrichtlijnen-ld-go/",
  publishDate: "2026-10-02",
  // previousPublishDate: "2026-01-01",
  // previousMaturity: "DEF",
  // prevVersion: "https://nl-digigo.github.io/modelleerrichtlijnen-ld-go/v/vorige-versie/index.html",
  license: "cc-by",
  editors: [
    {
      name: "Wouter Klein Wolterink",
      company: "Witteveen+Bos, digiGO",
      companyURL: "https://www.witteveenbos.com",
    },
  ],
  authors: [
    {
      name: "Alexander Worp",
      company: "Waternet",
      companyURL: "https://www.waternet.nl",
    },
    {
      name: "Lucas Verhelst",
      company: "lucasverhelst.nl",
      companyURL: "https://lucasverhelst.nl/",
    },
    {
      name: "Rik",
      company: "CROW",
      companyURL: "https://www.crow.nl",
    },
    {
      name: "Wouter Klein Wolterink",
      company: "Witteveen+Bos, digiGO",
      companyURL: "https://www.witteveenbos.com",
    },
    {
      name: "Wouter Lubbers",
      company: "Semmtech",
      companyURL: "https://www.semmtech.com",
    },
  ],
  github: "https://github.com/nl-digigo/modelleerrichtlijnen-ld-go",
  lint: { "no-unused-dfns": true },

  // If you need to include a one-off reference that isn't in the SpecRef database or
  // if you need to override an existing reference with specific content, then you can use this configuration option.
  localBiblio: {
    "NEN2660-2": {
      title: "NEN 2660-2:2022 - Regels voor informatiemodellering van de gebouwde omgeving - Deel 2: Praktische configuratie, extensie en implementatie",
      href: "https://www.nen.nl/nen-2660-2-2022-nl-296667",
      status: "Actueel",
      publisher: "NEN",
    },
    NPR4660: {
      title: "NPR 4660 - Semantische modellering van de gebouwde omgeving",
      href: "https://www.nen.nl/en/npr-4660/",
      status: "Actueel",
      publisher: "NEN",
    },
    EN17632: {
      title: "EN 17632:2022 - Building Information Modelling (BIM) - Semantic Modelling and Linking (SML) - Part 1: Generic modelling patterns and Part 2: Domain-specific modelling patterns",
      href: "https://standards.cencenelec.eu/",
      status: "Actueel",
      publisher: "CEN/CENELEC",
    },
    "NL-SBB": {
      title: "NL-SBB - Standaard voor het beschrijven van begrippen",
      href: "https://docs.geostandaarden.nl/nl-sbb/nl-sbb/",
      status: "Actueel",
      publisher: "Geonovum",
    },
    BCP47: {
      title: "BCP 47 - Tags for Identifying Languages",
      href: "https://www.rfc-editor.org/info/bcp47",
      status: "Actueel",
      publisher: "IETF",
    },
  },
};
