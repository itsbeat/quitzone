# quitzone
Repo Quitzz

## Installazione

1. Aggiungere questa riga nel file `/etc/hosts`:
```
127.0.0.1    quitzone.local
```

1. Spegnere l'istanza di Xampp/Lampp e liberare la porta 80

1. Tornare nella cartella di progetto e dare il seguente comando:
```
./start-dev.sh
```

1. Andare su browser all'indirizzo `http://quitzone.local`


## Descrizione
Applicazione realizzata in Laravel e VueJS con database SQL per la gestione, creazione, correzzione di questionari ed esami.

### Team di sviluppo BackEnd:
    - Michipase
    - MattiaElmoro
    - Acqua di Giò
    - FedeCrack
    - ScompaElGinger

### Team di sviluppo FrontEnd:
    - Erik
    - Macs
    - Bose
    - Galiotz
    - Zalzzillo

### Team di GraphicDesign Corporate Identity:
    - MatteoIndraccolo
    - Jellyfisha
    - DavideGaspa

### Team di GraphicDesign Mockups:
    - NicolaHu
    - EmaDamiano
    - AlbertoB

## Istruzioni:
### Primo download repo
- Digitare comando
    git clone git@github.com:itsbeat/quitzone.git
- Aggiungi file .env dentro alla cartella client con il comando:
    cp .env.example .env

### Check Docker/Compose
- Controllare la versione del Docker e del Docker Compose
    Da terminale lanciare il comando: $ docker -v
                                      Docker version 19.03.13
    Successivamente per il Compose: $ docker-compose --version
                                      docker-compose version 1.27.4
- Digitare comando 
    ./start-dev.sh per modificare gli host

### Per scaricare aggiornamenti
- Digitare comando:
    git pull
