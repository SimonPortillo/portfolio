import { GroupInformation } from '@/types/about';

export const groupInfo: GroupInformation = {
  name: "Studentgruppe 42",
  university: "Universitetet i Agder",
  department: "Fakultet for samfunnsvitenskap",
  program: "IT og Informasjonssystemer",
  founded: "August 2024",
  description: "Gruppen vår består av allsidige medlemmer som utfyller hverandre godt og bygger på hverandres styrker. Vi har et godt vennskap og mange felles interesser, noe som bidrar til et godt samhold både faglig og sosialt. Denne kombinasjonen gjør at vi samarbeider effektivt, støtter hverandre underveis og fungerer godt som et agilt team hvor vi kan tilpasse oss endringer og utnytte styrkene til hvert enkelt medlem.",
  members: [
    {
      name: "Simon Portillo",
      role: "Fullstack-utvikling",
      background: "Jeg er 21 år fra Porsgrunn. Jeg har vært interessert i teknologi, spesielt webutvikling. Jeg elsker å lære nye ting og jobbe med prosjekter som utfordrer meg til å vokse som utvikler. \n \nJeg har erfaring som Læringsassistent i Objekt-orientert programmering ved UiA og er for øyeblikket i praksis hos Egde som Fullstack-utvikler. \n \n På fritiden driver jeg med musikk, trener og diverse småprosjekter.",
      linkedin: "https://www.linkedin.com/in/simon-portillo/",
      image: "/simon.jpg"
    },
    {
      name: "Martin Goberg",
      role: "Fullstack-utvikling",
      background: "Jeg er 26 år og kommer fra Skien. Mine sterkeste erfaringer er innenfor webutvikling, særlig med React og Next.js, PostgreSQL og Supabase. Jeg har også sterke erfaringer innenfor diverse programmeringsspråk som C#, Java og Python. Innhar også sterke lederegenskaper fra arbeidet mitt hos Ryde Technology hvor jeg jobber som City Manager her i Kristiansand. Jeg er glad i planlegging og finner glede i en velfungerende utføringsplan som et agilt team. \n \nJeg har svennebrev som rørlegger, men bestemte meg for å utdanne meg innen det jeg brenner for, her har jeg opparbeidet meg en solid arbeidserfaring. På fritiden er jeg glad i å gå turer i skog og mark, gaming og trening.",
      linkedin: "https://www.linkedin.com/in/martin-goberg-678534248/",
      image: "/martin.jpg"
    },
    {
      name: "Jone Manneraak",
      role: "Design / Frontend",
      background: "Mitt navn er Jone (28), og jeg kommer fra Mandal. Jeg har alltid vært nysgjerrig på teknologi og hvordan det kombineres med kreativitet. Jeg begynte tidlig å leke med HTML og CSS, uten å helt forstå hva jeg drev med. På videregående gikk jeg Medier og Kommunikasjon på Noroff, med hovedfokus på grafisk design. Senere tok jeg en bachelorgrad i elektronisk musikk. \n\n Den siste tiden har jeg fått øynene opp for systemutvikling, særlig hvordan ting henger sammen og fungerer. Jeg vil beskrive meg selv som kreativ, reflektert og løsningsorientert. På fritiden driver jeg mye med musikkproduksjon og trening.",
      linkedin: "https://www.linkedin.com/in/jone-manner%C3%A5k-skribeland-33863937b/",
      image: "/jone.JPG"
    },
    {
      name: "Amund Mikalsen",
      role: "Team-lead / Scrum",
      background: "Jeg er 27 år gammel og kommer fra Mandal. På studiet har jeg utviklet en spesiell interesse for databaser, datastrukturer og algoritmer. Jeg har erfaring med Python, PostgreSQL, C# og JavaScript, og er opptatt av å utvikle løsninger som er både effektive og brukervennlige. Tidligere studerte jeg fire år ved lærerskolen med samfunnsfag, engelsk og musikk, noe som har gitt meg solide ferdigheter i formidling og samarbeid. \n\n På fritiden interesserer jeg meg for gaming og musikk, og ved siden av studiet jobber jeg innen habilitering for voksne med lettere utviklingsvariasjon – en erfaring som har styrket mine evner innen kommunikasjon, samarbeid og problemløsning.",
      linkedin: "https://www.linkedin.com/in/amund-mikalsen-0572b8290/",
      image: "/amund.jpeg"
    },
    {
      name: "Anders Fløysvik",
      role: "Backend-utvikling",
      background: "Jeg er 26 år og kommer fra Bryne. Interessen min for teknologi og systemutvikling har vokst gjennom studier og egne prosjekter, hvor jeg har opparbeidet erfaring med flere moderne utviklingsteknologier. Jeg har solid kjennskap til programmeringspråk som Java, C# og Javascript, og trives godt med å utforske hvordan teknologi kan brukes til å skape praktiske og effektive løsninger. \n\n Jeg har bakgrunn som rørlegger med svennebrev, men valgte å følge lidenskapen for IT og systemutvikling. Ved siden av studiene jobber jeg som terminal arbeider, noe som har gitt meg verdifull erfaring med struktur, ansvar og samarbeid. På fritiden har jeg interesse for motorsport og gaming.",
      linkedin: "https://www.linkedin.com/in/anders-fl%C3%B8ysvik-64620a2b5/",
      image: "/anders.png"
    },
    {
      name: "Petter Kløcker Nærum",
      role: "UX / ideutvikler",
      background: "Jeg er 23 år fra Skien, og er bosatt og studerer i Kristiansand. Jeg interesserer meg for hvordan teknologi kan videreutvikles og skape en verdi. Frontend design og ideutvikling er felt jeg trives godt med. Jeg er kreativ, nysgjerrig og opptatt av å stille spørsmål. \n\n Jeg liker å jobbe i team, og setter pris på en god diskusjon. Jeg jobber frivillig som aktivitetsleder for Kristiansand Studentidrettslag Fotball Herrer, hvor jeg har fått kompetanse innen organisering, ledelse og samarbeid.",
      linkedin: "https://www.linkedin.com/in/petter-kl%C3%B8cker-n%C3%A6rum-92b172293/",
      image: "/petter.png"
    }
  ],
  coursework: [
    {name: "IS-110 Objekt Orientert Programmering", link: "https://www.uia.no/studier/emner/2024/var/is-110.html"},
    {name: "IS-309 Videregående Databasesystemer", link: "https://www.uia.no/studier/emner/2024/var/is-309.html"},
    {name: "IS-218 Geografiske Informasjonssystemer og AI", link: "https://www.uia.no/studier/emner/2025/var/is-218.html"},
    {name: "IS-302 Praksisprosjekt", link: "https://www.uia.no/studier/emner/2025/host/is-302.html"},
    {name: "IS-202 Programmeringsprosjekt", link: "https://www.uia.no/studier/emner/2024/host/is-202.html"}
  ]
};