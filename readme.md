# webbserver intro

För att köra webbserver har vi installerat WSL och Node.

## Linux commandon
* pwd - visar aktiv mapp
* ls - listar alla filer i mappen
* ll - visar även dolda filer, är alias för ls -la
* cd - change directory
* history - visar en historik på utförda kommandon
* npm run dev - börjar köra igång hemsidan.

## Node
För att initiera ett nytt Node projekt kör jag "npm init -y" i en mapp. Detta skapar en package.json fil.

```bash
mkdir serverprojekt
cd serverprojekt
npm init -y
```
För node installerade vi express och nodemon.
För att avsluta node som körs med nodemon tryck "ctrl + c"

Vi skapade även en gitignpre fil med kommandot "echo node modules > -gitignore" för att ignorera node_modules mappen när vi pushar till github.

## Express

Vi skapade en express server och kopplade även html till våran server så att den nu kan visa information och innehåll på själva hemsidan.

## NJX och flera sidor
En del ändringar behövde göras i package.json filen för att säkerställa att nodemon fungerade med njx filer så man kunde spara allt lite smidigare.

Vi skapade med dessa njx filer olika sidor på servern så man kan navigera flera pages.