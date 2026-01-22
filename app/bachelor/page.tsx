"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShaderHero from "@/components/bachelor/ShaderHero";

const memberAvatars: Record<string, string> = {
  "Simon Portillo": "/simon.jpg",
  "Martin Goberg": "/martin.jpg",
  "Jone Manneraak": "/jone.JPG",
  "Amund Mikalsen": "/amund.jpeg",
  "Anders Fløysvik": "/anders.png",
  "Petter Kløcker Nærum": "/petter.png",
};

export default function BachelorProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Back Navigation */}
      <div className="px-4 sm:px-6 md:px-8 pt-4 sm:pt-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="mb-4 gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Tilbake til forsiden
          </Button>
        </Link>
      </div>

      <ShaderHero />

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
              På vegne av{" "}
              <Link
                href="https://egde.no"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:underline hover:text-primary-muted transition-colors"
              >
                Egde
              </Link>{" "}
              skal vi i løpet av våren utvikle en
              Fullstack applikasjon for{" "}  
              <Link
                href="https://miljofyrtarn.no"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary hover:underline hover:text-primary-muted transition-colors"
              >
              Miljøfyrtårn 
              </Link>{" "}
              som demonstrerer hvordan man kan bruke store
              språkmodeller (LLM&apos;er) til å hente informasjon fra
              strukturerte data.
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
              {"Simon Portillo, Martin Goberg, Jone Manneraak, Amund Mikalsen, Anders Fløysvik, Petter Kløcker Nærum"
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
          {/* Veileder */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Veileder
            </h2>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mono">
              <Link
                href="https://www.uia.no/om-uia/ansatte/elih/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  variant="secondary"
                  className="text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 hover:underline hover:bg-popover transition-colors"
                >
                  <Avatar className="size-6 sm:size-7 lg:size-8">
                    <AvatarImage src="elih.jpg" />
                    <AvatarFallback>EH</AvatarFallback>
                  </Avatar>
                  Eli Hustad
                </Badge>
              </Link>
            </div>
          </section>

          {/* Quality aspects */}
          <section>
            <h2 className="serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Kvalitetsaspekter
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pb-4">
              For å måle hvorvidt prosjektet er tilfredsstillende har vi kommet
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
                          hvor mye språkmodellen hallusinerer, dette er svært
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
                      Sikkerhet og personvern
                    </span>
                    <ul className="ml-4 mt-1.5 space-y-1.5">
                      <li className="flex items-start text-sm sm:text-base">
                        <span className="mr-2 text-primary">-</span>
                        <span>
                          Et viktig kvalitetsaspekt er å ha et robust
                          autentisering og autoriseringssystem for å unngå å gi
                          språkmodellen for brede tilganger. Dette innebærer å
                          sikre at modellen kun har tilgang til data den er
                          autorisert til å se basert på{" "}
                          <b>brukerens rettigheter</b>, og at sensitive data
                          ikke blir eksponert i svarene.
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
              Mål og arbeidsoppgaver (utviklet i samarbeid med Egde)
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
                  <span className="font-semibold mono">Azure Dev Ops</span>
                  <ul className="ml-4 mt-1.5 space-y-1.5">
                    <li className="flex items-start text-sm sm:text-base">
                      <span className="mr-2 text-primary">-</span>
                      <span>Kilde og versjonskontroll</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start text-base sm:text-lg text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                <div className="flex-1">
                <span className="font-semibold mono">Fabric</span>
                <ul className="ml-4 mt-1.5 space-y-1.5">
                    <li className="flex items-start text-sm sm:text-base">
                      <span className="mr-2 text-primary">-</span>
                      <span><b>SQL Database</b> for strukturerte data</span>
                    </li>
                    <li className="flex items-start text-sm sm:text-base">
                      <span className="mr-2 text-primary">-</span>
                      <span>Potensielt <b>Cosmos DB</b> for ustrukturerte data</span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start text-base sm:text-lg text-muted-foreground">
                <span className="mr-2 text-primary">•</span>
                <div className="flex-1">
                  <span className="font-semibold mono">
                    Microsoft Foundry
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
