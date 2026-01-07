"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const memberAvatars: Record<string, string> = {
  "Simon Portillo": "/simon.JPG",
  "Martin Goberg": "/martin.JPG",
  "Jone Manneraak": "/jone.JPG",
  "Amund Mikalsen": "/amund.JPEG",
  "Anders Fløysvik": "/anders.PNG",
  "Petter Kløcker-Nærum": "/petter.PNG",
};

export default function BachelorProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Full-width Blurred Hero Section with Project Name and GitHub Link */}
      <div
        className="relative w-[100vw] h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[450px] overflow-hidden z-0 -mx-4 sm:ml-[calc(-50vw+50%)] sm:w-[100vw]"
        style={{ maxWidth: "none" }}
      >
        {/* Background blurred image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/placeholder.svg)`,
            filter: "blur(10px)",
            transform: "scale(1.1)",
            top: "0",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <motion.div
          className="relative h-full flex flex-col items-center justify-center text-primary-foreground p-4 sm:p-6 z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center text-white leading-tight">
            Bachelorprosjektet 2026
          </h1>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-6 sm:mb-8 px-2">
            <Badge
              variant="default"
              className="mono text-popover px-3 sm:px-4 py-1.5 sm:py-2 sm:text-lg lg:text-xl flex items-center gap-2"
            >
              &ldquo;Hvordan kan vi snakke med strukturerte data?&rdquo;
            </Badge>
          </div>
        </motion.div>
      </div>

      {/* Info Section */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          className="space-y-8 sm:space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Project Overview */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Prosjekt Oversikt
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              På vegne av <b>Egde Consulting</b> skal vi i løpet av våren
              utvikle en <i>Proof of Concept (PoC)</i> Fullstack applikasjon som
              demonstrerer hvordan man kan bruke store språkmodeller
              (LLM&apos;er) til å hente informasjon fra strukturerte data.
              <br></br> <br />
              Hovedmålet med prosjektet er å utforske{" "}
              <b>mulighetene og begrensningene</b> ved å bruke LLM&apos;er for å
              samhandle med databaser, samt å vurdere{" "}
              <b>nøyaktigheten og påliteligheten</b> til svarene generert av
              modellen.
            </p>
          </section>

          {/* Team Members */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Gruppemedlemmer
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mono">
              {"Simon Portillo, Martin Goberg, Jone Manneraak, Amund Mikalsen, Anders Fløysvik, Petter Kløcker-Nærum"
                .split(", ")
                .map((member) => (
                  <Badge
                    key={member}
                    variant="secondary"
                    className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2"
                  >
                    <Avatar className="size-6 sm:size-7 lg:size-8">
                      <AvatarImage src={memberAvatars[member]} alt={member} />
                      <AvatarFallback>
                        {member
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {member}
                  </Badge>
                ))}
            </div>
          </section>
          {/* Team Members */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Veileder
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mono">
              <Badge
                variant="secondary"
                className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2"
              >
                Ingen oppgitt
              </Badge>
            </div>
          </section>

          {/* Quality aspects */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Kvalitetsaspekter
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pb-4">
              For å måle hviorvidt prosjektet er tilfredstillende har vi kommet
              fram til noen kvalitetsaspekter som vi mener vil være viktige for
              å vurdere prosjektet:
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">Nøyaktighet</span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          hvor mye språkmodellen hallusinerer, Dette er svært
                          viktig da man ønsker at modellen skal gi samme svar
                          til samme prompt hver gang.
                        </span>
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Dette kan måles ved hjelp av enhetstester som spør
                          samme spørsmål flere ganger og sjekker for avvik i
                          svarene.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">
                      MVP (Minimum Viable Product) eller PoC (Proof of Concept)
                    </span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Et annet kvalitetsaspekt er at prosjektet i det minste
                          kan anses som en MVP eller POC. Dette innebærer at
                          resultatet bør kunne svare på spørsmålet slik at vi
                          kan dra en konklusjon om påstanden &ldquo;Kan vi
                          snakke med strukturerte data?&rdquo;.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">Brukervennlighet</span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Hele poenget med å bruke språkmodeller til å hente
                          informasjon fra strukturerte data er for å gjøre det
                          enklere for brukere å få tilgang til informasjonen,
                          altså at personer som ikke kan SQL skal kunne hente ut
                          informasjon på en enkel måte og kunne vite at de kan
                          stole på det.
                        </span>
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Løsningen i seg selv bør også være brukervennlig med
                          tanke på brukergrensesnitt. Dette betyr å lage et chat
                          grensesnitt som matcher den mentale modellen vi har
                          fra å bruke andre tjenester som ChatGPT eller
                          lignende.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* Plan */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Plan
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Vi planlegger å følge en smidig utviklingsmetodikk med{" "}
              <b>2-ukers sprinter</b>. Vi kommer til å bruke et{" "}
              <b>Jira-board</b> for å administrere oppgaver og fremdrift. Hver
              sprint vil inkludere planlegging, utvikling og gjennomgang. Etter
              hver sprint vil vi ha en <b>show-and-tell</b> for å demonstrere
              fremdriften til veileder og eventuelle andre interessenter fra
              Egde.
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-3">
              Mål og arbeidsoppgaver (utviklet i samerbeid med Egde)
            </h3>
            <ol className="space-y-3 sm:space-y-4">
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary font-semibold">1.</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">
                      Forstå eksisterende MVP
                    </span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Analysere eksisterende POC/MVP og dokumentere
                          arkitektur og flyt.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary font-semibold">2.</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">
                      Kritisk evaluering
                    </span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Identifisere styrker, svakheter og mangler ved bruk av
                          LLM mot strukturerte data.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary font-semibold">3.</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">
                      Autentisering og autorisering
                    </span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Undersøke ende-til-ende autentisering og bruk av
                          brukertoken.
                        </span>
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Vurdere risiko for å gi AI for brede tilganger.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary font-semibold">4.</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">
                      Sikker datatilgang
                    </span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Utforske hvordan AI får tilgang til data etter
                          prinsippet om minste privilegium.
                        </span>
                      </li>
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Vurdere RLS, views eller mellomliggende API-lag.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary font-semibold">5.</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">RAG-forberedelse</span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Forberede RAG-data som eksempelspørringer, svar og
                          domeneforklaringer.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary font-semibold">6.</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">
                      Semantiske modeller
                    </span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Undersøke bruk av semantiske modeller (Fabric) for
                          bedre datamodellforståelse.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary font-semibold">7.</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">
                      Agentisk tilnærming
                    </span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Vurdere agentisk arkitektur for tolkning av komplekse
                          datamodeller.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="text-base sm:text-lg text-muted-foreground">
                <div className="flex items-start">
                  <span className="mr-2 text-primary font-semibold">8.</span>
                  <div className="flex-1">
                    <span className="font-semibold mono">
                      Sammenlikning med eksisterende løsninger
                    </span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Sammenlikne egen løsning med Fabric Data Agents og
                          tilsvarende løsninger.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
          </section>

          {/* Ressursbruk */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ressursbruk
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pb-2">
              Prosjektet vil bruke en rekke tjenester og verktøy fra
              skyplattformen <b>Microsoft Azure</b>:
            </p>
            <ul className="space-y-1.5 sm:space-y-2 mt-2">
              <li className="flex items-start text-base sm:text-lg text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                <div className="flex-1">
                  <span className="font-semibold mono">Web Apps</span>
                  <ul className="ml-4 mt-1.5 space-y-1.5">
                    <li className="flex items-start text-sm sm:text-base">
                      <span className="mr-2 text-primary">-</span>
                      <span>Hosting av webapplikasjonen</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start text-base sm:text-lg text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                <div className="flex-1">
                  <span className="font-semibold mono">Cosmos DB</span>
                  <ul className="ml-4 mt-1.5 space-y-1.5">
                    <li className="flex items-start text-sm sm:text-base">
                      <span className="mr-2 text-primary">-</span>
                      <span>Lagring av strukturerte data</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start text-base sm:text-lg text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                <span className="font-semibold mono">Fabric?</span>
              </li>
              <li className="flex items-start text-base sm:text-lg text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                <div className="flex-1">
                  <span className="font-semibold mono">
                    Vercel AI SDK eller Microsoft ekvivalent
                  </span>
                  <ul className="ml-4 mt-1.5 space-y-1.5">
                    <li className="flex items-start text-sm sm:text-base">
                      <span className="mr-2 text-primary">-</span>
                      <span>API for å bruke språkmodeller i applikasjonen</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
              <b> Microsoft Azure </b> tjenester er <i>Pay-as-you-go</i>, som
              betyr at man må være forsiktig med forbruket. For å sikre at
              ressursene brukes effektivt, vil vi overvåke forbruket nøye og
              justere etter behov gjennom prosjektets varighet. Det er satt av
              et budsjett for skytjenestene på Azure som vi bør holde oss
              innenfor.
            </p>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
}
