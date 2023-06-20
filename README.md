SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 1: Marionetta digitale  

# Touch-Screen
Autore: Matteo Bruno  
[MediaPipe demo-ES6](https://teomatt9000.github.io/Touch-screen/)


## Introduzione e tema

Secondo elaborato che abbiamo programmato. L'artefatto che mi ha anche divertito di più in termini di programmazione, ci ho dedicato più tempo rispetto agli altri in quanto ho trovato piacevole e sopratutto interessante imparare Html e Css.

Il mio tema era quello del "touch-screen", quindi ho creato una pagina web divisa in capitoli che racconta, tramite testo e immagini,
la storia della tecnologia del touch-screen.

Ho parlato di storia, prime tecnologie e le varie applicazioni e varie ramificazioni della teconologia stessa.



## Riferimenti progettuali


Ho preso ispirazione da vari siti, sia esistenti, che mockup presi da pinterest.
La particolarità del mio sito è quella di aver un indice che guida l'utente andando a mostrare i capitoli.






## Design dell’interfraccia e modalià di interazione

Per costruire il sito, ho disegnato tutto su figma. Poi ho sviluppato il progetto man mano che stavo scrivendo il sito.
Ho valutato cosa funzionasse meglio nelle varie occasioni. 
La particolarità del mio sito è quella di aver un indice che guida l'utente andando a mostrare i capitoli.
Presenta un header e un footer che rimandano a link esterni come la pagina del sito di git hub della supsi e il link delle fonti.




## Tecnologia usata

La tecnologia utilizzata i linguaggi di programmazione di HTML e CSS

```HTML
<!DOCTYPE html>
<html>

  <head>
    <title>Touch screen</title>
    <link rel="stylesheet" href="style.css">
  </head>

  

  <body>
    <script src="script.js"></script>
    



    <!--<script>    Fa diventare tecnicamente il mouse una pallina, ma non funziona
      const cursor = document.querySelector('.cursor');
      document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px'; 
  
      })

    </script> -->



    
    <header>

      <div class="grid_header">
      <div class="logo_margin">

      <section id="logo">
        <a href="#headline">Touch-screen</a>
      </section>
    </div>

      <div class="index">
      <a href="https://ixd-supsi.github.io/2023/progetti/2_antologia_a_due_mani/">Index</a>
    </div>

    
  </div>
      


    <!-- crea una GRIGLIA PER L'HEADER-->
      

    </header>      
     
    
 

    <div class="grid">  
      
      <div class="content">

        <nav id="indice">
          
          <a href="#Inz"> L’Inizio</a>
          <br><a href="#Ptr"> Il primo telefono touch</a>
          <br><a href="#Ui"> Ulteriori imput</a>
          <br><a href="#Pp"> Alcuni problemi</a>
          <br><a href="#Ei"> Tecnologia E-ink</a>
       </nav>

    <section id="headline">
    <h1>Il touch-screen ha rivoluzionato 
       l'interazione <br>uomo-computer, 
         rendendola più intuitiva <br>e immediata. Ha dato origine a nuovi orizzonti,<br>nuove opportunità e nuove occasioni alla società.</h1>

           <img class="freccia" src="images/freccia.png" alt="freccia">
    </section>


          <div class="cap1">
          
          <section id = "Inz">
              <h2>L'inizio</h2>
          </section>

            <p>La storia dell'interfaccia touch affonda le proprie radici nell'industria musicale degli anni Quaranta, e in particolare nei primi sintetizzatori dotati di tasti sensibili al tocco. Ma il primo vero touch screen fu realizzato tra il 1965 e il 1967 nei laboratori del Royal Radar Establishment di Malvern, in Gran Bretagna, da E. A. Johnson, che descrisse la propria invenzione in un paio di articoli scientifici. Lo schermo tattile di Johnson utilizzava una tecnologia definita capacitiva, ancora molto diffusa negli schermi degli smartphone. In un primo momento tale tecnologia viene però eclissata da quella resistiva, scoperta dal professor G. Samuel Hurst nei laboratori di fisica atomica dell’Università del Kentucky all'inizio degli anni Settanta. Il professor Nimish Metha dell’Università di Toronto è invece il primo a teorizzare e realizzare schermi capacitivi multitouch, nel 1982. Un anno dopo l'azienda Hewlett-Packard mette in commercio il computer HP-150, il primo dispositivo commerciale a montare uno schermo tattile, mentre nel 1993 IBM e BellSouth presentano il primo telefono cellulare dotato di schermo touch screen, il Simon Personal Communicator. 
            <br>La strada degli schermi tattili era ormai segnata.</p>


             
            
              <!--
            <div class="contenitore_overlay">
              <div class="Img_content1">
                <div class="text">Schermo elografico - Samuel Hurst</div>
              </div>
            </div>
            -->
            
            <img class="video_touch" src="video/Video_touch.gif" alt="GIF animata">             
            <div class="caption_schermo">
            <p>Samuel Hurst - Schermo elografico - 1960</p>
            </div>


          </div>
          
          
            

            


        
          <div class="cap2">

            <section id="Ptr">
              <h2>Il primo telefono touch</h2>
            </section>

          <p>È stato presentato al Comdex di Las Vegas nel novembre 1992: aveva lo schermo touch e pesava poco più di 500 grammi. E il nome? Viene da un popolare gioco americano.
            Nel novembre del 1992 la Ibm presentava al mondo Simon durante il Comdex di Las Vegas. No, non era il nuovo amministratore delegato, ma quello che ancora oggi è considerato il primo smartphone della storia: Ibm Simon Personal Communicator. All'epoca questo termine non era ancora utilizzato, ma sta di fatto che Simon era in grado di inviare e ricevere email e fax, aveva una rubrica di contatti, aveva la calcolatrice, il blocco note e addirittura un gioco già impostato. Oltre, ovviamente, a fare e ricevere telefonate. </p>
    
            <img class="simmons" src="images/simmons.png" alt="Simmons">
            <div class="caption_simmons">
              <p>IBM Simon personal communicator - 1992</p>
              </div>
            
          <p>

            La commercializzazione è iniziata però nel 1994 grazie all'azienda statunitense BellSouth (oggi AT&T) con un prezzo di lancio di 900 dollari. A sei mesi dal suo debutto ne furono vendute 50mila unità. Nel tempo il costo è leggermente diminuito fino ad arrivare a circa 600 dollari.
            Perché si chiamava Simon? Il nome si deve a «Simon says» (Simon dice), un gioco per bambini notissimo negli Stati Uniti in cui uno dei partecipanti deve ricoprire i panni di Simon dando degli ordini agli altri. Tutti i giocatori sono tenuti a seguire le sue indicazioni se la frase è preceduta da «Simon says», mentre non devono fare nulla se l'ordine viene impartito senza l'incipit che dà il titolo al gioco.
          </p>

        </div>
        

        

        <div class="cap3">

          <section id = "Ui">
            <h2>Ulteriori imput</h2>
        </section>
        
        <h3> Multi-touch</h3>
          <p>La tecnologia multitouch consente al touch screen di rilevare e interpretare più di un tocco simultaneo. Questa tecnologia ha rivoluzionato l'interazione con i dispositivi touch screen, consentendo agli utenti di utilizzare più di un dito per eseguire operazioni come lo zoom, la rotazione e la selezione. Il multitouch ha aperto la strada a nuove forme di interazione, come la rilevazione di gesti, che consente di controllare l'interfaccia utente attraverso movimenti delle mani. Il multitouch è oggi una tecnologia comune in dispositivi come smartphone, tablet, monitor interattivi e schermi di automobili. </p>
          <h3>Force-touch</h3>
          <p>L'evoluzione del multitouch ha portato anche all'introduzione di tecnologie come la "force touch", che consente di rilevare la pressione sullo schermo e di fornire un feedback aptico. Inoltre, il multitouch ha anche contribuito a creare nuovi tipi di applicazioni, come giochi e strumenti di disegno, che sfruttano le possibilità offerte dalla rilevazione simultanea di più tocchi. </p>
          <h3>Feedback aptico</h3>
          <p>Il feedback aptico è una tecnologia che consente ai dispositivi di comunicare con l'utente attraverso il senso del tatto. Questo tipo di feedback viene generato da motori lineari, vibrazioni o impulsi elettrici, che producono una sensazione tattile sul dispositivo.

            Il feedback aptico può migliorare l'esperienza dell'utente in molte situazioni, come ad esempio nella digitazione su uno smartphone o nella guida di un'auto. Inoltre, può essere utilizzato per fornire indicazioni di navigazione e feedback su giochi e applicazioni.
            
            Alcuni dispositivi utilizzano il feedback aptico per creare una risposta tattile realistica, come ad esempio negli joystick dei controller per videogiochi o nei controller per droni.
            
            Il feedback aptico può essere personalizzato per l'utente e può essere regolato in base all'intensità, alla frequenza e alla durata delle vibrazioni. 
            
            </p>
          
        </div>

        




        <div class="cap4">

          <section id = "Pp">
            <h2>Alcuni problemi</h2>
        </section>
        
        
          <p>Il mondo del touch screen è stato caratterizzato da una serie di innovazioni tecnologiche nel corso degli anni, ma non tutte hanno avuto successo. Diverse tecnologie correlate al touch screen sono state introdotte con grande entusiasmo, solo per fallire in seguito a causa di problemi di usabilità, costi elevati o semplicemente perché non erano in grado di competere con le soluzioni più avanzate.

            Ad esempio, il touch screen resistivo a quattro fili, comunemente utilizzato nei primi dispositivi touch screen, ha presentato problemi di usura e di diminuzione della sensibilità dopo un uso prolungato.
            <br><br> Anche il touch screen a ultrasuoni, che utilizza onde sonore per rilevare i tocchi, non ha avuto successo a causa dei costi elevati e della difficoltà di implementazione su larga scala.
            
            
            
            Anche il touch screen ottico, che utilizza una fotocamera per rilevare i tocchi, è stato considerato promettente ma è risultato poco pratico e costoso da implementare.
            
            <br><br>Infine, il touch screen capacitivo con pennino, che utilizza un pennino dedicato per rilevare i tocchi, è stato utilizzato in alcuni dispositivi ma ha presentato problemi di usabilità e di perdita del pennino stesso.
            
            In generale, il touch screen capacitivo a dita è emerso come la soluzione più avanzata e affidabile, con una maggiore sensibilità, precisione e facilità d'uso. Tuttavia, è importante notare che le tecnologie correlate al touch screen continuano ad evolversi, e ci sono sempre nuove innovazioni in arrivo che potrebbero cambiare il panorama delle tecnologie touch screen in futuro.</p>
          
        </div>



        <div class="cap5">

          <section id = "Ei">
            <h2>Tecnologia E-ink</h2>
        </section>
        
        
          <p>La tecnologia E-ink, o inchiostro elettronico, è stata sviluppata per fornire un'esperienza di lettura digitale simile a quella della carta stampata. La tecnologia utilizza particelle di inchiostro bianco e nero che possono essere disposte in modo da creare caratteri e immagini. Il risultato è un'immagine di alta qualità e ad alta definizione che può essere visualizzata anche sotto la luce solare diretta, senza affaticare gli occhi dell'utente.

            L'uso principale della tecnologia E-ink è la creazione di schermi per dispositivi di lettura digitale come il Kindle di Amazon, il Kobo e altri lettori di ebook. Questi dispositivi utilizzano la tecnologia E-ink per visualizzare il testo dei libri digitali in modo che sembri stampato su carta, con una resa del colore in bianco e nero. 
          </p>
            <img class="E-ink" src="images/eink.jpg" alt="E-ink">

            <div class="caption_eink">
              <p>Joseph Jacobson - Zoom su uno schermo "E-Ink" - 1996</p>
              </div>
          
          <p>
            <br>L'effetto visivo è molto simile alla carta stampata, ma con la capacità di contenere migliaia di libri in un singolo dispositivo portatile.
            
            La tecnologia E-ink ha anche trovato applicazioni in altri settori, come la segnaletica digitale e le etichette intelligenti. L'efficienza energetica della tecnologia E-ink la rende un'opzione ideale per queste applicazioni, in quanto richiede poca energia per funzionare e può essere alimentata da batterie a lunga durata.
            
            Inoltre, la tecnologia E-ink è ecologica poiché richiede meno energia per funzionare rispetto ai display tradizionali. Non produce radiazioni nocive come quelli degli schermi tradizionali, riducendo così l'affaticamento degli occhi degli utenti.
            
            In sintesi, la tecnologia E-ink è una tecnologia innovativa che ha rivoluzionato il modo in cui le persone leggono e interagiscono con i contenuti digitali. Grazie alla sua capacità di fornire un'esperienza di lettura simile a quella della carta stampata, ma con la portabilità e la convenienza dei dispositivi digitali, la tecnologia E-ink è destinata a continuare a crescere e ad evolversi in molteplici settori dell'industria tecnologica.
          </p>
          
        </div>
        
        </div>






      </div>

      

    





      <footer>
        <div class="footer"> 
          <div class="grid_footer"> 
        
        <h2 class="dati">Elaborato 2<br>Antologia a due mani / Gesti<br>CV2 - 427.01</h2>
        <h2 class="prof">CV2 - Supsi <br>Matteo Bruno<br>2023 Mendrisio  </h2>
        <h2 class="anno">CV 427.01<br> Andreas Gysin, <br>Giovanni Profeta </h2>
        <div class="sources">
    
          <a href="fonti.html">Fonti</a>
        </div>
    
        </div>
      </div>
      
      </footer>
      
      
      
      
    </body>
      </html>



      '''CSS

      @import url('https://fonts.googleapis.com/css2?family=Codystar&display=swap');



html{
  scroll-behavior: smooth;
}
body{
  font-family:  Helvetica, sans-serif
    
}


/*.cursor{
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  transition: 0.002s;
} */
  
  
  
  
header {
  position: fixed;
  
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 999;
  height: 60px;
  filter: drop-shadow(5px 20px 30px rgb(242, 242, 242));
}
header h1{
  
  margin-top: 9px;
  left:1,5%
}







a{                /* link!!!!!!*/
  text-decoration: none;
  color: #808080;
  
  font-size: 100px;
  font-size: medium;
  transition: all 0.4s linear;
  
}


a:hover{
  color:black
}



h1{
  font-size: 35px;
  padding-left: 0px;
  margin-top: 200px;

}


#logo a{

  font-size: 36px;
  
  margin-left: 20px;
  margin-top: 50px; 
  color: #808080;
}


.logo_margin{
  grid-column: 1/4;
}


.grid_header{
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(1, minmax(90px, auto));
  grid-gap: 10px;
  
}
.index {
  
  margin-top: -77px;
  margin-left: 30px;
  grid-column: 3/9;
}



.logo_margin{
  margin-top: 10px;
}


#logo a:hover{
  color:black
}

#Inz{
  font-size: 30px;
  padding-top: 90px;
  

}
#Ptr{
  font-size: 30px;
  padding-top: 60px;
  

}
#Ui{
  font-size: 30px;
  padding-top: 60px;

}
#Pp{
  font-size: 30px;
  padding-top: 60px;

}

#Ei {
  font-size: 35px;
  padding-top: 60px;

}



.h3{
  margin-top: 300px;
  margin-bottom: 5px;

}

.freccia{
  width: 40px;
  margin-top: 90px;
}




.content{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, minmax(700px, auto));
  grid-gap: 10px;
  padding-top: 40px;
}  


.grid_fonti{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  padding-top: 40px;
}


.content p{
  line-height: 22px;
}

#headline{
  grid-column: 2/6;
}

.cap1{
  grid-column: 2/5;
  margin-top: 10px;
}

.cap2{
  grid-column: 2/5;
  margin-top: 50px;
}

.cap3{
  grid-column: 2/5;
}

.cap4{
  grid-column: 2/5;
}
.cap5{
  grid-column: 2/5;
  margin-top: 20px;

}




.simmons{
  filter: drop-shadow(5px 20px 100px rgb(224, 224, 224));
  width: 60%;
  margin-top: 30px;
  grid-column: 4/5;

}

.caption_schermo{
  font-size: 12px;
  margin-top: 20px;
}

.caption_simmons{
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 40px;

}


.primo{
  
  width: 80%;
  height: auto;
  margin-top: 40px;
  
}
.img-schermo {
  width: 60%;
  height: auto;
  margin-top: 40px;
}

.video_touch{
  width: 90%;
  margin-top: 30px;
  filter: drop-shadow(5px 20px 100px rgb(224, 224, 224));

}

.E-ink{
  margin-top: 30px;
  margin-bottom: 10px;
  width: 100%;
  filter: drop-shadow(5px 20px 100px rgb(224, 224, 224));
}
.caption_eink{
  font-size: 12px;
  padding-top: -10px;
  
}



.grid-cap3{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, minmax(150px, auto));
  grid-gap: 10px;

}
.h2{
  grid-column: 2/4;
  font-size: 35px;
}
#indice {
  position: fixed;
  top: 250px;
  
  margin-left: 25px;
  text-decoration: none;
}





/*Footer*/

.footer{
  width: 100%;
  background-color: #ffffff;
  margin-top: 200px;
  height: 90px;
  width: 100%;
  position: absolute;
  left: -10px;
  
}
.grid_footer{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(1, minmax(90px, auto));
  grid-gap: 10px;
}

.sources{
  grid-column: 5/6;
  margin-top: -87px;
  font-size: 10px;
  font-weight: 500;
  padding-left: 15px;
}





.dati{
  grid-column: 2/6;
  grid-row: 1;
  font-size: 10px;
  font-weight: 500;
  padding-left: 15px;
  
  
}
.prof{
  grid-column: 3/6;
  grid-row: 1;
  font-size: 10px;
  font-weight: 500;
  padding-left: 15px;
  
}
.anno{
  grid-column: 4/6;
  grid-row: 1;
  font-size: 10px;
  font-weight: 500;
  padding-left: 15px;
}







/*overlay effect

.contenitore_overlay {
  position: relative;
  display: inline-block;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s;
}

.contenitore_overlay:hover {
  opacity: 0.7;
}

.video_touch {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.5s;
}

.Img_content1 {
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.5s;
}

.contenitore_overlay:hover .Img_content1 {
  opacity: 1;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 15px;
  font-weight:400 ;
  text-align: center;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s;
}

.contenitore_overlay:hover .text {
  opacity: 1;
}

*/

/*fonti*/

.fonti_titolo{
  grid-column: 2/6;
  margin-top: 20px;
  font-size: 35px;
}
.fonti_link{
  grid-column: 2/6;
  margin-top: -550px;
  margin-left: 0px;

}
.grid_fonti{
  grid-template-rows: repeat(1, minmax(800px, auto));
  
}

.footer_fonti{
  position: fixed;
  margin-bottom: 10px;
  bottom: 0;
  width: 100%;
}

