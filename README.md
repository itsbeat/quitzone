# quitzone
Repo Quitzz

Descrizione Progetto Quitzone
Applicazione realizzata in Laravel e VueJS con database SQL per la gestione, creazione, correzzione di questionari ed esami.

Team di sviluppo BackEnd:
- Michipase
- MattiaElmoro
- Acqua di Giò
- FedeCrack
- ScompaElGinger

Team di sviluppo FrontEnd:
- Erik
- Macs
- Bose
- Galiotz
- Zalzzillo

Team di GraphicDesign:
- Suddiviso in Corporate identity e Mockups
- Jellyfisha
- DavideGaspa
- EmaDamiano
- AlbertoB

Istruzioni:
Primo download repo
- Digitare comando: git clone git@github.com:itsbeat/quitzone.git
- Aggiungi file .env dentro alla cartella client con il comando:       cp .env.example .env

Per scaricare aggiornamenti
- Digitare comando: git pull


Spiegazione Tabelle Relazioni

La tabella User contiene tutti gli utenti che hanno un ruolo, la lista dei ruoli è indicato nella tabella roles.
Gli User hanno un infoid che è collegato alle info degli studenti o degli insegnanti a seconda del ruolo che hanno.
Nella tabella studentinfos ci sono le informazioni dello studente e l'ID della classe a cui appartengono.
La tabella classrooms contiene tutte le classi che sono collegate ad una riga della tabella corsi.
Gli insegnanti possono fare dei questionari che hanno delle domande a cui sono collegate delle opzioni. 
Il superadministrator può creare un nuovo esame inserendoci tutti i questionari che vuole creati dagli insegnanti.
Quando uno stundente farà un questionario in una tabella saranno segnate tutte le sue risposte che determineranno il risultato finale dell'esame di quello studente.
