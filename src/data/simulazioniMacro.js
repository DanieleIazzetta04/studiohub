// ═══════════════════════════════════════════════════════════════
// Simulazioni MACRO — testi degli esami passati di
// Macroeconomia e Politica Economica (Prof.) trascritti dai
// fogli d'esame. Ogni simulazione = 1 esame, 6 quesiti
// (4 domande aperte + 2 esercizi), 90 minuti, 5 pt a quesito.
// ═══════════════════════════════════════════════════════════════

export const SIMULAZIONI_MACRO = [
  // ────────────────────────────────────────────────────────────
  // ESAME 13 MAGGIO 2022
  // ────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Esame 13 Maggio 2022',
    subtitle: 'Macroeconomia e Politica Economica (A)',
    duration: 90,
    multipleChoice: [],
    teoriaApplicata: [
      {
        question: 'Si descriva dettagliatamente cosa accade al **saldo commerciale** e al **tasso di cambio reale** di una piccola economia aperta nel caso in cui il **governo decida di ridurre le tasse**.',
        points: 5,
        weeks: [],
        soluzione: `**Riduzione delle tasse (ΔT < 0) in piccola economia aperta:**

1. **Effetto sul risparmio nazionale:** la riduzione delle tasse aumenta il reddito disponibile (Y−T). Con propensione al consumo c, il consumo aumenta di c·|ΔT|. Il risparmio privato sale di (1−c)·|ΔT|, ma il risparmio pubblico (T−G) scende di |ΔT|. Risultato netto: **S nazionale = S^priv + S^pubb diminuisce** di c·|ΔT|.

2. **Mercato dei fondi mutuabili (S = I + NX):** in piccola economia aperta il tasso di interesse è esogeno (r = r*). Dato che I è funzione di r*, I non cambia. Quindi:

   *NX = S − I* diminuisce.

3. **Saldo commerciale → deficit** (NX < precedente). L'economia importa più di quanto esporta perché il consumo interno aumenta.

4. **Tasso di cambio reale ε:** con NX = NX(ε) decrescente, per avere NX più basso serve ε più alto → **apprezzamento reale della valuta domestica**. Le esportazioni diventano meno competitive, le importazioni più convenienti.

**Grafico:** mercato S−I: la curva S si sposta a sinistra → NX cala. Mercato del cambio: l'offerta netta di valuta domestica diminuisce → ε sale.

**Sintesi:** *riduzione tasse → ↓S → ↓NX (deficit commerciale) → ↑ε (apprezzamento reale)*. È il fenomeno dei **"twin deficits"**: deficit pubblico e deficit commerciale insieme (anni '80 USA, Reaganomics).`
      },
      {
        question: 'Si descrivano dettagliatamente le **cause, i costi e i benefici dell\'inflazione**.',
        points: 5,
        weeks: [],
        soluzione: `**Cause dell'inflazione:**

- **Teoria quantitativa (lungo periodo):** M·V = P·Y → π = ΔM/M − ΔY/Y (Friedman: *"l'inflazione è sempre e ovunque un fenomeno monetario"*).
- **Inflazione da domanda (demand-pull):** AD > AS di pieno impiego (boom, politiche fiscali/monetarie espansive).
- **Inflazione da costi (cost-push):** shock di offerta negativi (petrolio 1973, materie prime, salari).
- **Inflazione inerziale:** aspettative adattive, indicizzazione, contratti pluriennali.

**Costi dell'inflazione (attesa):**

- **Shoe-leather cost:** detenere meno moneta liquida (più visite in banca/ATM).
- **Menu cost:** costo di aggiornare prezzi, listini, distributori.
- **Distorsioni fiscali:** scaglioni IRPEF non indicizzati → fiscal drag; capital gains nominali tassati.
- **Variabilità dei prezzi relativi:** allocazione inefficiente delle risorse.

**Costi dell'inflazione (inattesa):**

- **Redistribuzione arbitraria** tra creditori (perdono) e debitori (guadagnano).
- **Confusione sui prezzi relativi**, perdita di funzione informativa.
- **Premio al rischio** sui tassi nominali.

**Benefici / argomenti a favore:**

- **Lubrificante salariale:** con salari nominali rigidi al ribasso, una bassa inflazione consente aggiustamenti reali (Tobin).
- **Riduzione del valore reale del debito pubblico** (signoraggio implicito).
- **Effetto Mundell-Tobin:** spinge a investire anziché detenere moneta.
- **Margine sullo zero lower bound:** obiettivo BCE 2% consente politica monetaria espansiva senza tassi nominali negativi.

**Conclusione:** il consenso è che inflazione **bassa, stabile e prevedibile** (~2%) sia ottimale; inflazione alta o erratica genera costi elevati.`
      },
      {
        question: 'Si descrivano dettagliatamente gli **effetti del progresso tecnologico nel modello di Solow** e si definiscano, in tale contesto, le **condizioni di equilibrio**. Si individuino altresì le **differenze con il modello di crescita endogena (modello AK)**.',
        points: 5,
        weeks: [],
        soluzione: `**Solow con progresso tecnologico (labor-augmenting, E):**

Funzione di produzione: *Y = F(K, L·E)*, con E che cresce al tasso g.

In termini di unità di lavoro effettivo (k̃ = K/(L·E), ỹ = Y/(L·E)):

**Equazione fondamentale:** Δk̃ = s·f(k̃) − (δ + n + g)·k̃

**Stato stazionario:** Δk̃ = 0 ⟹ *s·f(k̃*) = (δ + n + g)·k̃*\\*

In stato stazionario:
- *k̃, ỹ, c̃* costanti
- *K/L, Y/L, C/L* crescono al tasso **g** (progresso tecnologico)
- *K, Y, C totali* crescono al tasso **n + g**

**Regola aurea con progresso tecnologico:** *f'(k̃*) = δ + n + g*

Il progresso tecnologico è l'**unica fonte di crescita di lungo periodo del tenore di vita** (Y/L). Senza g, la crescita pro-capite si arresta in stato stazionario.

**Limite di Solow:** g è esogeno, "manna dal cielo". Il modello non spiega *perché* la tecnologia avanza.

**Modello AK (crescita endogena, Romer/Rebelo):**

Funzione di produzione lineare: *Y = A·K* (rendimenti costanti del capitale; K include capitale fisico + umano + conoscenza).

Equazione di accumulazione: Δk/k = s·A − (δ + n)

**Differenze chiave:**

| Aspetto | Solow | AK |
|---|---|---|
| Rendimenti di K | Decrescenti | Costanti |
| Crescita lungo periodo | Solo da g esogeno | Endogena: s·A − δ − n |
| Effetto del risparmio | Solo su livello, non su crescita | Aumenta la crescita stessa |
| Convergenza | Sì (paesi poveri crescono più rapidamente) | No (divergenza possibile) |
| Politiche | Solo livelli | Influenzano la crescita di lungo periodo |

Nel modello AK un aumento permanente di **s** o di **A** aumenta permanentemente il tasso di crescita; in Solow lo stesso aumento sposta solo lo stato stazionario.`
      },
      {
        question: 'Partendo dalla **curva di offerta aggregata**, si descriva in dettaglio la **curva di Phillips originaria**. Si chiarisca poi il **ruolo delle aspettative**.',
        points: 5,
        weeks: [],
        soluzione: `**Dalla AS alla Phillips:**

Curva di offerta aggregata di breve periodo (modello dei prezzi vischiosi o salari vischiosi):

*P = P^e + (1/α)·(Y − Ȳ)*

Riarrangiando e usando la legge di Okun (Y − Ȳ inversamente correlato a u − u_n):

*π = π^e − β·(u − u_n) + v*

dove:
- π = inflazione corrente
- π^e = inflazione attesa
- u = disoccupazione corrente
- u_n = tasso naturale di disoccupazione (NAIRU)
- β > 0 = pendenza
- v = shock di offerta

**Curva di Phillips originaria (Phillips 1958, Samuelson-Solow 1960):**

Versione semplice: π = − β·(u − u_n) + v

Rilevazione empirica nel Regno Unito (1861-1957): forte correlazione negativa tra inflazione e disoccupazione. Suggerisce un **trade-off stabile sfruttabile dalla politica economica**: si può ridurre u accettando più π.

**Critica e ruolo delle aspettative (Friedman-Phelps 1968):**

Il trade-off non è stabile se gli agenti adattano π^e. Distinguiamo:

- **Breve periodo:** π^e fisse → la curva di Phillips è inclinata negativamente, esiste un trade-off.
- **Lungo periodo:** π^e = π → la curva è **verticale** in u_n. La politica monetaria non può ridurre la disoccupazione sotto u_n, può solo aumentare l'inflazione.

**Tre tipologie di aspettative:**

1. **Adattive:** π^e_t = π_{t-1}. La curva si sposta lentamente.
2. **Razionali (Lucas):** π^e usa tutta l'informazione disponibile. Politica anticipata non ha effetti reali (neutralità).
3. **Ancorate:** π^e = π_target (es. 2% BCE). Conferiscono credibilità alla banca centrale.

**Implicazione di policy:** la disinflazione richiede un *sacrificio* (recessione) tanto minore quanto più rapidamente π^e si adatta verso il basso (ruolo della **credibilità** della banca centrale).`
      }
    ],
    esercizi: [
      {
        question: `**Esercizio IS-LM e moneta**

Si consideri un'economia con bilancio in pareggio, in cui:
- Consumo: C = 80 + 0.75(Y − T)
- Investimenti: I = 80 − 5r
- Spesa pubblica G = 280, imposte T = 280 (bilancio in pareggio)

**I)** Derivare l'equazione che definisce il **reddito di equilibrio sul mercato dei beni e servizi** in funzione del tasso d'interesse.

**II)** Assumiamo che l'ammontare complessivo di **depositi** sia pari a **300 mld €**, che il pubblico detenga **circolante** pari a **240 mld €**, e che le banche detengano **riserve pari al 10%** del totale dei depositi.
  a) Determinare l'**offerta di moneta**.
  b) Assumendo che il livello generale dei prezzi sia unitario e che la domanda di moneta sia *L = 0.2Y + 560 − 20r*, si derivi il **risparmio privato di equilibrio simultaneo** sul mercato dei beni e della moneta.`,
        points: 5,
        weeks: [],
        soluzione: `**I) Curva IS (mercato dei beni):**

Equilibrio: Y = C + I + G

Y = 80 + 0.75(Y − 280) + 80 − 5r + 280
Y = 80 + 0.75Y − 210 + 80 − 5r + 280
Y − 0.75Y = 230 − 5r
0.25Y = 230 − 5r

**IS: Y = 920 − 20r**

**II.a) Offerta di moneta:**

- Depositi D = 300
- Circolante CU = 240
- Riserve R = 0.10 × D = 30

Base monetaria: **B = CU + R = 240 + 30 = 270**

Offerta di moneta: **M = CU + D = 240 + 300 = 540**

Moltiplicatore monetario: m = M/B = 540/270 = **2**

**II.b) Equilibrio simultaneo IS-LM:**

LM: M/P = L ⟹ 540 = 0.2Y + 560 − 20r ⟹ 0.2Y − 20r = −20 ⟹ Y = 100r − 100

Sostituendo IS = LM:
920 − 20r = 100r − 100
1020 = 120r
**r* = 8.5**

Y* = 920 − 20·(8.5) = **750**

**Risparmio privato di equilibrio:**

S^priv = (Y − T) − C = Yd − C
Yd = 750 − 280 = 470
C = 80 + 0.75·(470) = 80 + 352.5 = 432.5

**S^priv = Yd − C = 470 − 432.5 = 37.5**

*Verifica:* S^pubb = T − G = 280 − 280 = 0; S^naz = S^priv + S^pubb = 37.5; I = 80 − 5·(8.5) = 37.5 ✓`
      },
      {
        question: `**Esercizio IS-LM-AD**

Si assuma la seguente economia:
- C = 120 + 0.75(Y − T)
- I = 180 − 25r
- L = Y − 100r
- Spesa pubblica e imposte: G = T = 200
- Offerta nominale di moneta: M = 1200

**I)** Determinare la **IS** e la **LM**, lasciando il livello dei prezzi indeterminato.

**II)** Determinare l'**equazione della domanda aggregata** (AD).

**III)** Determinare cosa accade alla curva di **AD** se il governo riduce la spesa pubblica da 200 a 150. Mostrarne graficamente gli effetti.`,
        points: 5,
        weeks: [],
        soluzione: `**I) Curve IS e LM:**

**IS:** Y = C + I + G
Y = 120 + 0.75(Y − 200) + 180 − 25r + 200
Y = 120 + 0.75Y − 150 + 180 − 25r + 200
0.25Y = 350 − 25r

**IS: Y = 1400 − 100r**

**LM:** M/P = L ⟹ 1200/P = Y − 100r

**LM: Y = 1200/P + 100r**

**II) Equazione della domanda aggregata (AD):**

Si elimina r ponendo IS = LM:

1400 − 100r = 1200/P + 100r
200r = 1400 − 1200/P
r = 7 − 6/P

Sostituendo in IS:
Y = 1400 − 100·(7 − 6/P) = 1400 − 700 + 600/P

**AD: Y = 700 + 600/P**

Verifica: P↑ ⟹ Y↓ (relazione inversa, come deve essere per la AD).

**III) Riduzione G da 200 a 150 (ΔG = −50):**

Nuova IS:
Y = 120 + 0.75(Y − 200) + 180 − 25r + 150
0.25Y = 300 − 25r ⟹ **IS': Y = 1200 − 100r**

Nuova AD (LM invariata):
1200 − 100r = 1200/P + 100r
200r = 1200 − 1200/P ⟹ r = 6 − 6/P
Y = 1200 − 100·(6 − 6/P) = 600 + 600/P

**AD': Y = 600 + 600/P**

**Effetto grafico:**

- La AD si sposta **a sinistra** (per ogni P, Y minore di 100).
- Moltiplicatore della spesa pubblica con prezzi fissi: ΔY/ΔG = 1/(1 − c) = 4 ⟹ ΔY = 4·(−50) = −200… ma con crowding-out parziale via tassi, lo spostamento orizzontale della AD a P fisso è **−100**.

*Spiegazione:* la riduzione di G riduce direttamente Y (effetto moltiplicatore), ma riduce anche la domanda di moneta, abbassando r, che a sua volta stimola I, attenuando l'effetto. Lo spostamento orizzontale di AD è quindi inferiore al moltiplicatore "puro".`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // ESAME 2023
  // ────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Esame 2023',
    subtitle: 'Macroeconomia e Politica Economica (A)',
    duration: 90,
    multipleChoice: [],
    teoriaApplicata: [
      {
        question: 'Si descriva dettagliatamente cosa accade al **saldo commerciale** e al **tasso di cambio reale** di una piccola economia aperta nel caso in cui il **governo decida di ridurre le tasse**.',
        points: 5,
        weeks: [],
        soluzione: `**Riduzione delle tasse (ΔT < 0) in piccola economia aperta:**

Vedi soluzione Esame 13/05/2022 quesito 1 (identica formulazione).

**Sintesi:**
- ΔT < 0 ⟹ Yd ↑ ⟹ C ↑
- S^priv ↑ di (1−c)·|ΔT|, ma S^pubb ↓ di |ΔT| ⟹ **S nazionale ↓** netto di c·|ΔT|
- In piccola economia aperta r = r* (esogeno), quindi I invariato
- Identità: NX = S − I ⟹ **NX ↓ (deficit commerciale)**
- Cambio reale ε: dato NX = NX(ε) decrescente, NX più basso richiede ε più alto ⟹ **apprezzamento reale**

**Conseguenze:** importazioni più convenienti, esportazioni meno competitive. Il deficit commerciale si finanzia con afflusso netto di capitali dall'estero (afflusso che apprezza la valuta). Fenomeno dei **twin deficits**.

**Grafico mercato S−I:**
- Asse vert: r (orizzontale a r* in PEA)
- S sposta a sinistra ⟹ S − I < 0 ⟹ NX < 0

**Grafico mercato del cambio:**
- Asse vert: ε
- Offerta di valuta domestica scende ⟹ ε* sale ⟹ apprezzamento`
      },
      {
        question: 'Si descrivano dettagliatamente le **cause, i costi e i benefici dell\'inflazione**.',
        points: 5,
        weeks: [],
        soluzione: `Vedi soluzione completa Esame 13/05/2022 quesito 3.

**Schema sintetico:**

**Cause:**
- Monetarie (M·V = P·Y, Friedman)
- Demand-pull (domanda eccessiva)
- Cost-push (shock offerta)
- Inerziale (aspettative, indicizzazione)

**Costi (attesa):**
- Shoe-leather, menu cost, distorsioni fiscali, variabilità prezzi relativi

**Costi (inattesa):**
- Redistribuzione creditori/debitori, confusione, premio al rischio

**Benefici:**
- Lubrificante salariale (Tobin)
- Erosione debito pubblico reale
- Margine dalla zero lower bound

**Conclusione:** ottimo ~2% (target BCE/FED).`
      },
      {
        question: 'Si descrivano dettagliatamente gli **effetti del progresso tecnologico nel modello di Solow** e si definiscano le **condizioni di equilibrio**. Si individuino le **differenze con il modello di crescita endogena (modello AK)**.',
        points: 5,
        weeks: [],
        soluzione: `Vedi soluzione completa Esame 13/05/2022 quesito 4.

**Schema sintetico:**

**Solow con g > 0 (labor-augmenting):**
- Δk̃ = s·f(k̃) − (δ + n + g)·k̃
- Stato stazionario: s·f(k̃*) = (δ + n + g)·k̃*
- In SS: k̃, ỹ, c̃ costanti; Y/L, K/L, C/L crescono al tasso g
- Regola aurea: f'(k̃*) = δ + n + g
- **g esogeno** ⟹ unica fonte di crescita pro-capite di lungo periodo

**AK (Rebelo 1991):**
- Y = A·K (rendimenti costanti di K, che include human capital + R&D)
- Δk/k = s·A − δ − n: **crescita endogena**

**Differenze chiave:**
- Solow: convergenza, politiche solo su livello
- AK: divergenza possibile, s e A influenzano la crescita di lungo periodo
- Solow: rendimenti decrescenti di K; AK: rendimenti costanti grazie alle esternalità (knowledge spillover)`
      },
      {
        question: 'Partendo dalla **curva di offerta aggregata**, si descriva in dettaglio il funzionamento della **curva di Phillips originaria**. Si chiarisca poi il **ruolo delle aspettative**.',
        points: 5,
        weeks: [],
        soluzione: `Vedi soluzione completa Esame 13/05/2022 quesito 6.

**Schema sintetico:**

**Da AS a Phillips:**
- AS breve periodo: P = P^e + (1/α)(Y − Ȳ)
- Legge di Okun: (Y − Ȳ) ∝ −(u − u_n)
- ⟹ **π = π^e − β(u − u_n) + v**

**Phillips originaria (1958):**
- Trade-off empirico tra π e u (Regno Unito 1861-1957)
- Samuelson & Solow (1960): "menu di scelta" per la policy

**Critica di Friedman-Phelps (1968):**
- Lungo periodo: π^e = π ⟹ curva **verticale** in u_n
- Non c'è trade-off di lungo periodo (NAIRU)

**Tipi di aspettative:**
1. Adattive: π^e_t = π_{t-1}
2. Razionali (Lucas): usano tutta l'informazione ⟹ neutralità della politica anticipata
3. Ancorate (credibilità BC): π^e = π_target

**Implicazione policy:** la disinflazione costa meno (sacrifice ratio basso) se la BC è credibile e le aspettative si adattano rapidamente al target.`
      }
    ],
    esercizi: [
      {
        question: `**Esercizio IS-LM e mercato della moneta**

Si consideri un'economia con bilancio in pareggio, in cui:
- C = 80 + 0.75(Y − T)
- I = 80 − 5r
- Spesa pubblica G = 280, imposte T = 280

**I)** Derivare l'equazione che definisce il **reddito di equilibrio sul mercato dei beni e servizi** in funzione del tasso d'interesse.

**II)** Assumiamo che i depositi siano pari a **300 mld €**, il circolante a **240 mld €**, e le banche detengano riserve pari al **10%** dei depositi.
  a) Determinare l'**offerta di moneta**.
  b) Assumendo P = 1 e domanda di moneta *L = 0.2Y + 560 − 20r*, derivare il **risparmio privato di equilibrio simultaneo** sul mercato dei beni e della moneta.`,
        points: 5,
        weeks: [],
        soluzione: `Identico testo dell'esame 2022 quesito 5 — vedi soluzione completa lì.

**Risultati:**
- IS: Y = 920 − 20r
- M = CU + D = 240 + 300 = 540
- Moltiplicatore: m = M/B = 540/270 = 2
- LM (con P = 1): Y = 100r − 100
- Equilibrio: r* = 8.5, Y* = 750
- S^priv = Yd − C = 470 − 432.5 = **37.5**`
      },
      {
        question: `**Esercizio IS-LM-AD**

Si assuma la seguente economia: spesa pubblica e imposte ammontano entrambe a 200. L'offerta nominale di moneta è pari a 1200.

(Le funzioni C, I, L sono quelle standard del corso, equivalenti a: C = 120 + 0.75(Y−T), I = 180 − 25r, L = Y − 100r.)

**I)** Determinare la **IS** e la **LM**, lasciando il livello dei prezzi indeterminato.

**II)** Determinare l'**equazione della domanda aggregata**.

**III)** Determinare cosa accade alla curva di domanda aggregata se il governo **riduce la spesa pubblica da 200 a 150**. Mostrarne graficamente gli effetti.`,
        points: 5,
        weeks: [],
        soluzione: `Identico testo dell'esame 2022 quesito 5 — vedi soluzione completa lì.

**Risultati:**
- IS: Y = 1400 − 100r
- LM: Y = 1200/P + 100r
- AD: **Y = 700 + 600/P**
- Dopo ΔG = −50: IS' = 1200 − 100r, AD': **Y = 600 + 600/P**
- AD si sposta a sinistra di 100 unità a P fissato. Crowding-in parziale: la caduta di r dovuta al calo di L attenua la contrazione di Y.`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // ESAME 10 MAGGIO 2024 (A)
  // ────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Esame 10 Maggio 2024',
    subtitle: 'Macroeconomia e Politica Economica (A)',
    duration: 90,
    multipleChoice: [],
    teoriaApplicata: [
      {
        question: 'Si descriva dettagliatamente il **modello dell\'offerta di moneta**, specificando l\'effetto delle differenti **variabili esogene**.',
        points: 5,
        weeks: [],
        soluzione: `**Modello dell'offerta di moneta (Mishkin, Mankiw):**

Punto di partenza: M = CU + D (circolante + depositi)

Le banche detengono riserve R = rr · D (rr = coefficiente di riserva).
Il pubblico decide il rapporto cr = CU/D (circolante/depositi).

**Base monetaria:** B = CU + R = (cr + rr) · D

**Quindi:** M = (cr + 1) · D

**Moltiplicatore monetario:** m = M/B = (cr + 1)/(cr + rr)

**Offerta di moneta:** *M = m · B = [(cr + 1)/(cr + rr)] · B*

**Variabili esogene e loro effetti:**

| Variabile | Controllata da | Effetto su m | Effetto su M |
|---|---|---|---|
| **B** (base monetaria) | Banca Centrale | — | Diretto: ↑B ⟹ ↑M |
| **rr** (riserve/depositi) | BC (riserva obbligatoria) + banche (riserve in eccesso) | ↑rr ⟹ ↓m | ↑rr ⟹ ↓M |
| **cr** (circolante/depositi) | Pubblico | ↑cr ⟹ ↓m | ↑cr ⟹ ↓M |

**Strumenti della Banca Centrale per controllare M:**

1. **Operazioni di mercato aperto (OMA):** acquisti/vendite di titoli ⟹ modificano B
2. **Coefficiente di riserva obbligatoria:** modifica rr ⟹ moltiplicatore
3. **Tasso di sconto / rifinanziamento principale:** influenza il costo per le banche di detenere riserve scarse
4. **Operazioni di rifinanziamento a più lungo termine (es. TLTRO BCE)**
5. **Quantitative easing:** acquisto di asset non convenzionali

**Limiti del controllo:**
- Le banche possono detenere riserve in eccesso (specie in trappola della liquidità)
- Il pubblico decide cr (preferenza per liquidità)
- ⟹ M non è perfettamente controllata: la BC controlla **B**, non **M**`
      },
      {
        question: 'Si descriva dettagliatamente, anche **usando grafici**, cosa accade al **saldo commerciale** e al **tasso di cambio reale** di una piccola economia aperta nel caso in cui il **governo decida di ridurre la spesa pubblica**.',
        points: 5,
        weeks: [],
        soluzione: `**Riduzione di G (ΔG < 0) in piccola economia aperta:**

1. **Effetto sul risparmio nazionale:** S^pubb = T − G ⟹ ↑G ⟹ **S^pubb aumenta** di |ΔG|. S^priv invariato (Y e T fissi). Risultato: **S nazionale ↑ di |ΔG|**.

2. **Mercato fondi mutuabili (PEA, r = r*):** I = I(r*) invariato. Identità NX = S − I ⟹ **NX ↑ (surplus commerciale)**.

3. **Tasso di cambio reale:** NX = NX(ε) decrescente. Per avere NX più alto serve ε più basso ⟹ **deprezzamento reale**.

**Grafici:**

**(a) Mercato dei fondi mutuabili (S−I, asse vert. r, orizz. fondi):**
- r = r* costante (orizzontale)
- Curva S verticale che si sposta **a destra** (S sale di |ΔG|)
- Distanza S − I = NX aumenta ⟹ NX > 0

**(b) Mercato del cambio (ε vs. quantità di valuta):**
- Asse vert: ε (cambio reale)
- Domanda di valuta domestica: NX (decrescente in ε)
- Offerta di valuta domestica: S − I (esogena, verticale)
- ΔS > 0 sposta l'offerta a destra ⟹ **ε* scende (deprezzamento)** ⟹ esportazioni più competitive, importazioni più care, NX sale

**Interpretazione economica:** la contrazione fiscale riduce la domanda interna, libera risorse per le esportazioni nette, il deprezzamento le rende competitive. Caso opposto ai "twin deficits": **twin surpluses**.

**Esempi storici:** Germania post-2003 (Hartz reforms + austerità) ha generato surplus commerciali persistenti.`
      },
      {
        question: 'Si presenti **analiticamente e graficamente** il **progresso tecnologico nel modello di Solow** e si definiscano, in tale contesto, le **condizioni di equilibrio** e le **condizioni di ottimo**. Si descrivano, altresì, le **implicazioni del modello sulla crescita** dell\'economia e le **differenze con il modello di crescita endogena**.',
        points: 5,
        weeks: [],
        soluzione: `**Solow con progresso tecnologico labor-augmenting:**

Y = F(K, L·E), con E che cresce a tasso g (esogeno).

In unità di lavoro effettivo (k̃ = K/(LE), ỹ = Y/(LE) = f(k̃)):

**Equazione fondamentale di accumulazione:**

*Δk̃ = s·f(k̃) − (δ + n + g)·k̃*

**Condizione di equilibrio (stato stazionario, Δk̃ = 0):**

*s·f(k̃*) = (δ + n + g)·k̃*\\*

In SS:
- k̃, ỹ, c̃ costanti
- K/L = k̃·E e Y/L = ỹ·E **crescono al tasso g**
- K, Y, C **crescono al tasso n + g**

**Condizione di ottimo (Regola Aurea — Phelps 1961):**

Massimizza c̃_SS = f(k̃*) − (δ + n + g)·k̃* rispetto a k̃*

*f'(k̃_gold) = δ + n + g*

Cioè: produttività marginale del capitale = tasso di "consumo" del capitale.

Tasso di risparmio di regola aurea: s_gold = α (quota del capitale, se f Cobb-Douglas).

**Grafico:**
- Asse: y = f(k̃) e (δ + n + g)·k̃ in funzione di k̃
- Curva s·f(k̃) concava
- Retta (δ + n + g)·k̃ lineare
- Intersezione = k̃*

**Implicazioni di lungo periodo:**

- **g è l'unica fonte di crescita di Y/L di lungo periodo**
- Risparmio: aumenta solo il livello di Y/L, non la sua crescita
- **Convergenza:** paesi con k̃ < k̃* crescono più rapidamente (catch-up)

**Differenze con AK (crescita endogena):**

| | Solow | AK |
|---|---|---|
| Funzione | Y = F(K, LE) | Y = AK |
| Rendimenti di K | Decrescenti | Costanti |
| g lungo periodo | Esogeno | Endogeno: sA − δ − n |
| Risparmio | Solo livello | Influenza la crescita |
| Convergenza | Sì | No |
| Policy fiscale | Effetti solo transitori | Effetti permanenti su crescita |

Nel modello AK il **risparmio diventa motore di crescita**: ↑s ⟹ ↑g permanente.`
      },
      {
        question: 'Si presenti **analiticamente e graficamente** il **modello dei salari vischiosi** e le implicazioni sull\'**offerta aggregata di breve periodo**. Partendo poi dall\'offerta aggregata si derivi **analiticamente la curva di Phillips**, illustrandone graficamente il funzionamento.',
        points: 5,
        weeks: [],
        soluzione: `**Modello dei salari vischiosi (sticky wages):**

Ipotesi: i salari nominali W sono fissati ex ante dai contratti, basati sul livello atteso di prezzi P^e.

Le imprese sono price-takers e fissano l'occupazione massimizzando i profitti, eguagliando salario reale al prodotto marginale del lavoro:

W/P = MPL(L)

Se P > P^e (sorpresa inflazionistica positiva):
- W/P scende (salari reali bassi rispetto all'atteso)
- Le imprese assumono più lavoratori ⟹ L sale ⟹ Y sale

Se P < P^e: W/P sale ⟹ L scende ⟹ Y scende.

**Curva AS di breve periodo:**

*Y = Ȳ + α·(P − P^e)*, con α > 0

oppure: P = P^e + (1/α)·(Y − Ȳ)

**Grafico AS-AD:**
- AS-SR inclinata positivamente (date P^e)
- AS-LR verticale in Ȳ
- Shock di domanda spostano AD lungo AS-SR ⟹ effetti reali nel breve periodo

**Derivazione della curva di Phillips:**

Dalla AS: P − P^e = (1/α)·(Y − Ȳ)

Definendo π = (P − P_{-1})/P_{-1} e usando la **legge di Okun** che lega (Y − Ȳ) negativamente a (u − u_n):

(Y − Ȳ) = −γ·(u − u_n)·Ȳ

Sostituendo e usando π^e = (P^e − P_{-1})/P_{-1}:

***π = π^e − β·(u − u_n) + v***

dove β = γ/(α·Ȳ) > 0 e v = shock di offerta.

**Interpretazione:**
- Disoccupazione sopra il naturale ⟹ inflazione sotto le attese
- Disoccupazione sotto il naturale (boom) ⟹ inflazione sopra le attese

**Grafico Phillips:**
- Asse orizz: u
- Asse vert: π
- Curva inclinata negativamente per ogni π^e
- Spostamenti verso l'alto quando π^e ↑

**Conclusione:** la curva di Phillips di breve periodo deriva direttamente dal modello dei salari vischiosi: la stessa rigidità che genera la AS positivamente inclinata genera anche il trade-off π-u.`
      }
    ],
    esercizi: [
      {
        question: `**Esercizio offerta di moneta**

Un'economia ha una **base monetaria di 3.000 €**. Calcolare l'offerta di moneta in ciascuna delle seguenti situazioni:

**a.** Tutta la moneta è detenuta sotto forma di **circolante**.

**b.** Tutta la moneta è detenuta in **depositi a vista** e il sistema bancario è in **riserva totale (100%)**.

**c.** Tutta la moneta è detenuta in **depositi a vista** e il sistema bancario è a **riserva frazionaria con riserve del 15%**.

**d.** La moneta è detenuta in **parti uguali** in depositi a vista e circolante, e il sistema bancario è a **riserva frazionaria con riserve del 10%**.`,
        points: 5,
        weeks: [],
        soluzione: `**Formula generale:** M = m·B con m = (cr + 1)/(cr + rr)

B = 3.000 € in tutti i casi.

**a) Tutto in circolante** ⟹ cr → ∞ (D = 0)

In questo caso non c'è creazione di moneta bancaria: M = CU = B = **3.000 €**

(Formalmente: m → 1 quando cr → ∞ ⟹ M = B)

**b) Tutto in depositi, riserva totale** ⟹ cr = 0, rr = 1

m = (0 + 1)/(0 + 1) = **1**

M = 1 × 3.000 = **3.000 €**

Le banche non possono creare moneta (devono tenere riserve pari ai depositi).

**c) Tutto in depositi, rr = 0.15** ⟹ cr = 0, rr = 0.15

m = (0 + 1)/(0 + 0.15) = 1/0.15 = 6.67

M = 6.67 × 3.000 = **20.000 €**

(Le banche moltiplicano la base monetaria perché possono prestare l'85% di ogni deposito.)

**d) Parti uguali CU = D** ⟹ cr = 1, rr = 0.10

m = (1 + 1)/(1 + 0.10) = 2/1.10 = 1.818

M = 1.818 × 3.000 = **5.454,5 €**

**Tabella sintetica:**

| Caso | cr | rr | m | M |
|---|---|---|---|---|
| a | ∞ | — | 1 | 3.000 |
| b | 0 | 1 | 1 | 3.000 |
| c | 0 | 0.15 | 6.67 | 20.000 |
| d | 1 | 0.10 | 1.818 | 5.454,5 |

**Osservazione:** m è massimo quando cr è basso (pubblico tiene moneta in banca) e rr è basso (banche prestano molto).`
      },
      {
        question: `**Esercizio IS-LM con politica fiscale e monetaria**

Si assuma:
- C = 140 + 0.6(Y − T)
- I = 200 − 25r
- L = Y − 100r
- G = T = 200
- M = 1300

**a)** Determinare la **IS** e la **LM**, lasciando il livello dei prezzi indeterminato.

**b)** Determinare il **reddito di equilibrio** e il **tasso di interesse di equilibrio** all'interno del mercato dei beni e della moneta, ponendo **P = 2**.

**c)** Cosa succede all'equilibrio dopo un **aumento della spesa pubblica di 100** (G = 300)? Derivare analiticamente, rappresentare graficamente e descrivere il nuovo equilibrio IS-LM.

**d)** All'interno di un **coordinamento di policy**, cosa dovrebbe fare la **Banca Centrale** affinché non avvenga il rialzo del tasso di interesse? Illustrare graficamente.`,
        points: 5,
        weeks: [],
        soluzione: `**a) IS e LM:**

**IS:** Y = C + I + G
Y = 140 + 0.6(Y − 200) + 200 − 25r + 200
Y = 140 + 0.6Y − 120 + 200 − 25r + 200
0.4Y = 420 − 25r

**IS: Y = 1050 − 62.5r**

**LM:** M/P = L ⟹ 1300/P = Y − 100r

**LM: Y = 1300/P + 100r**

**b) Equilibrio con P = 2:**

LM: Y = 650 + 100r

IS = LM:
1050 − 62.5r = 650 + 100r
400 = 162.5r
**r* = 2.46**

Y* = 1050 − 62.5·(2.46) = 1050 − 153.85 = **896.15**

**c) Aumento di G da 200 a 300 (ΔG = +100):**

Nuova IS:
Y = 140 + 0.6(Y − 200) + 200 − 25r + 300
0.4Y = 520 − 25r ⟹ **IS': Y = 1300 − 62.5r**

LM invariata: Y = 650 + 100r

Equilibrio:
1300 − 62.5r = 650 + 100r
650 = 162.5r
**r** = 4**

Y** = 650 + 100·(4) = **1050**

**Effetti:**
- ΔY = 1050 − 896.15 = **+153.85**
- Δr = 4 − 2.46 = **+1.54**

*Moltiplicatore della spesa con tassi fissi:* 1/(1 − 0.6) = 2.5 ⟹ ΔY_max = 250. Con crowding-out tramite r, ΔY effettivo = +153.85 ⟹ crowding-out ≈ 96.

**Grafico:**
- IS si sposta a destra di 250 (effetto orizzontale a r fisso)
- LM invariata
- Nuovo equilibrio: r sale, Y sale (meno del moltiplicatore puro)

**d) Politica monetaria di accomodamento (coordinamento di policy):**

Per mantenere r = 2.46 dopo lo shift IS', la LM deve spostarsi a destra fino a tagliare IS' nel punto (Y, r = 2.46):

Da IS': Y_new = 1300 − 62.5·(2.46) = 1300 − 153.85 = **1146.15**

LM' deve passare per (Y = 1146.15, r = 2.46):
M'/2 = 1146.15 − 100·(2.46) = 1146.15 − 246 = 900.15
⟹ M' = 1800.3

**La BC deve aumentare M da 1300 a ~1800** (ΔM ≈ +500).

**Risultati:**
- ΔY totale = 1146.15 − 896.15 = **+250** (= moltiplicatore puro, no crowding-out)
- r invariato a 2.46
- Politica fiscale e monetaria coordinate: massima espansione senza pressione sui tassi

**Grafico:** sia IS che LM si spostano a destra; nuovo equilibrio a Y più alto, r invariato.`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // ESAME 10 GIUGNO 2024 (A)
  // ────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Esame 10 Giugno 2024',
    subtitle: 'Macroeconomia e Politica Economica (A)',
    duration: 90,
    multipleChoice: [],
    teoriaApplicata: [
      {
        question: 'Si descrivano dettagliatamente le **cause, i costi e i benefici dell\'inflazione**.',
        points: 5,
        weeks: [],
        soluzione: `Vedi soluzione completa Esame 13/05/2022 quesito 3.

**Sintesi:**
- **Cause:** monetarie (M·V=P·Y), demand-pull, cost-push, inerziale (aspettative).
- **Costi attesa:** shoe-leather, menu cost, distorsioni fiscali, variabilità prezzi relativi.
- **Costi inattesa:** redistribuzione creditori/debitori, confusione informativa.
- **Benefici:** lubrificante salariale (Tobin), erosione debito reale, margine ZLB.
- **Target ottimale:** ~2% (BCE, FED).`
      },
      {
        question: 'Si descriva dettagliatamente cosa accade al **saldo commerciale** e al **tasso di cambio reale** di una piccola economia aperta nel caso in cui il **governo decida di aumentare le tasse**.',
        points: 5,
        weeks: [],
        soluzione: `**Aumento delle tasse (ΔT > 0) in piccola economia aperta:**

Caso opposto a quello dell'esame 2022 quesito 1.

1. **Risparmio nazionale:**
- Yd ↓, C ↓ di c·ΔT
- S^priv ↓ di (1−c)·ΔT
- S^pubb ↑ di ΔT
- **S nazionale ↑** netto di c·ΔT (aumenta del consumo non più realizzato)

2. **Mercato fondi mutuabili (r = r*):** I invariato. NX = S − I ⟹ **NX ↑ (surplus commerciale)**.

3. **Cambio reale:** NX = NX(ε) decrescente. NX più alto ⟹ **ε scende (deprezzamento reale)**.

**Conseguenze:** esportazioni più competitive, importazioni più care. Il surplus commerciale finanzia deflussi netti di capitale (l'apprezzamento si riduce).

**Grafici:**
- Mercato S−I: S si sposta a destra, distanza S−I = NX cresce
- Mercato del cambio: offerta di valuta domestica cresce ⟹ ε scende

**Sintesi:** *↑T ⟹ ↑S ⟹ ↑NX (surplus) ⟹ ↓ε (deprezzamento reale)*.

È l'esatto contrario della politica fiscale espansiva: l'austerità fiscale produce surplus commerciale e deprezzamento reale (es. Germania post-2003).`
      },
      {
        question: 'Dopo aver presentato **analiticamente e graficamente la costruzione della curva LM**, si affronti il caso di un **aumento delle imposte nel modello IS-LM**, chiarendo in dettaglio l\'ipotesi in cui la **banca centrale intenda mantenere costante il tasso di interesse**.',
        points: 5,
        weeks: [],
        soluzione: `**Costruzione della LM:**

Equilibrio sul mercato della moneta: M/P = L(r, Y) = a·Y − b·r

Da cui: r = (a·Y − M/P)/b ⟹ relazione positiva tra r e Y.

**Derivazione grafica:**
- Pannello sinistro: domanda L(r) a vari livelli di Y. Spostamenti di L verso destra al crescere di Y. Intersezione con offerta verticale M/P determina r di equilibrio per ogni Y.
- Pannello destro: coppie (Y, r) di equilibrio → **curva LM inclinata positivamente**.

**Determinanti dello slope della LM:**
- Elasticità domanda di moneta al reddito (a): più alta ⟹ LM più ripida
- Elasticità domanda di moneta al tasso (b): più alta ⟹ LM più piatta
- Casi estremi: b → ∞ ⟹ trappola della liquidità (LM orizzontale); b → 0 ⟹ LM verticale (caso classico)

**Spostamenti della LM:**
- ↑M/P ⟹ LM a destra (per ogni Y, r più basso)
- ↑P ⟹ M/P ↓ ⟹ LM a sinistra

**Aumento delle imposte (ΔT > 0) nel modello IS-LM:**

ΔT > 0 ⟹ C ↓ ⟹ AD ↓ ⟹ **IS si sposta a sinistra** di −c/(1−c) · ΔT.

Effetto sull'equilibrio (LM invariata):
- Y ↓ (recessione)
- r ↓ (perché Y ↓ ⟹ L ↓ ⟹ con M/P fisso, r scende)
- I ↑ (crowding-in parziale)

**Ipotesi: BC mantiene r costante (policy mix):**

Per evitare la caduta di r, la BC deve **contrarre** l'offerta di moneta affinché la LM si sposti a sinistra contemporaneamente a IS.

Procedimento analitico:
- Vecchio equilibrio: (Y₀, r₀)
- Nuova IS': Y' < Y₀ a r = r₀
- Vogliamo che il nuovo equilibrio sia (Y', r₀)
- La LM deve passare per (Y', r₀) ⟹ ΔM/P negativa

**Effetto finale:**
- Y cala dell'intero moltiplicatore della spesa: ΔY = −c/(1−c) · ΔT (no crowding-in)
- r invariato
- M ridotta (LM a sinistra)

**Grafico:** IS sposta a sinistra, LM sposta anch'essa a sinistra in modo che il nuovo equilibrio sia direttamente sotto al vecchio (stesso r, Y più basso).

**Interpretazione:** la BC, **mantenendo r costante**, **rinuncia all'effetto stabilizzatore della politica monetaria** (in regime r-fisso la fiscale ha effetto pieno). Questo è il caso di una BC con regola del tasso di interesse (Taylor rule senza reazione a Y).`
      },
      {
        question: 'Dopo aver presentato in dettaglio il **vincolo di bilancio pubblico**, si discuta, con strumenti grafici e analitici, la **dinamica di sostenibilità del debito pubblico** in un\'economia con **disavanzo primario** e **tasso di interesse superiore al tasso di crescita** dell\'economia (r > g).',
        points: 5,
        weeks: [],
        soluzione: `**Vincolo di bilancio pubblico:**

Forma stock-flusso: il debito di fine periodo è il debito iniziale, capitalizzato al tasso r, più il disavanzo primario:

*B_t = (1 + r)·B_{t−1} + (G_t − T_t)*

dove:
- B_t = debito pubblico in t
- (G_t − T_t) = **disavanzo primario** (spese al netto degli interessi sul debito)
- r = tasso reale d'interesse

In termini di rapporto debito/PIL (b = B/Y), dividendo per Y_t = (1+g)·Y_{t−1}:

***b_t = [(1+r)/(1+g)] · b_{t−1} + d_t***

dove d_t = disavanzo primario/PIL.

Approssimazione lineare (per r, g piccoli):

***Δb ≈ (r − g)·b + d***

**Implicazioni:**

- Se (r − g) > 0 e d > 0: **b cresce in modo cumulativo** (instabilità).
- Se (r − g) > 0 e d = 0: il debito cresce comunque per effetto interessi.
- Per **stabilizzare** b serve un **surplus primario** d < 0 sufficiente: d* = −(r − g)·b ⟹ surplus primario necessario per tenere b costante = (r − g)·b.

**Caso r > g con disavanzo primario d > 0:**

Δb > 0 sempre ⟹ il debito si **espande senza limite**.

Anche partendo da b basso, l'evoluzione è esplosiva:
b_t = b_0·[(1+r)/(1+g)]^t + somma scontata dei disavanzi primari

**Grafico (b sull'asse vert., tempo sull'asse orizz.):**
- Traiettoria divergente, concava in alto
- Più lungo il periodo, più rapida l'esplosione (effetto compound)

**Sostenibilità (condizione no-Ponzi):**

Il debito è sostenibile se: lim_{T→∞} b_T/(1+r)^T = 0

In regime r > g con d > 0 questa condizione è violata.

**Soluzioni per ripristinare la sostenibilità:**

1. **Avanzo primario** (consolidamento fiscale): aumentare T o ridurre G, ma con effetti recessivi (paradosso austerità).
2. **Inflazione/Repressione finanziaria:** monetizzazione (signoraggio) o tassi reali artificialmente bassi.
3. **Ristrutturazione del debito:** taglio nominale (haircut) o allungamento scadenze.
4. **Crescita:** aumentare g (riforme strutturali, investimenti pro-produttività) per ridurre (r−g).
5. **Default**

**Esempio storico:** Grecia 2010-2015: r-g molto alto, ristrutturazione PSI 2012, austerità prolungata.

**Implicazione di policy:** monitorare (r−g) è cruciale. Nel decennio 2010-2020 i tassi bassi (r < g) hanno reso sostenibili debiti elevati; il ritorno a r > g (post-2022) ripone il problema della sostenibilità in primo piano.`
      }
    ],
    esercizi: [
      {
        question: `**Esercizio PIL con metodo della spesa**

Si supponga che, in un'economia:
- Consumi finali: C = 1048
- Investimenti totali: I = 296
- Esportazioni: X = 53
- Importazioni: IM = 76
- Spesa pubblica: G = 103

Calcolare a quanto ammonta il **PIL** applicando il **metodo della spesa**.`,
        points: 5,
        weeks: [],
        soluzione: `**Metodo della spesa (identità contabile):**

*PIL = Y = C + I + G + NX*

dove NX = X − IM = esportazioni nette.

**Calcolo:**

NX = X − IM = 53 − 76 = **−23**

Y = C + I + G + NX
Y = 1048 + 296 + 103 + (−23)
Y = 1048 + 296 + 103 − 23

**Y = 1.424**

**Composizione percentuale del PIL:**

| Componente | Valore | % del PIL |
|---|---|---|
| C (consumi) | 1048 | 73.6% |
| I (investimenti) | 296 | 20.8% |
| G (spesa pubblica) | 103 | 7.2% |
| NX (saldo commerciale) | −23 | −1.6% |
| **PIL** | **1.424** | **100%** |

**Osservazioni:**

- L'economia presenta un **deficit commerciale** modesto (NX < 0): importa più di quanto esporti.
- I consumi privati pesano per ~74%, valore tipico delle economie sviluppate.
- La spesa pubblica al 7% è bassa rispetto al benchmark europeo (~20% in Italia/Francia).

**Verifica alternativa:**

PIL = somma dei valori aggiunti (metodo della produzione) = somma dei redditi (metodo del reddito) = Y stesso valore in tutti e tre i metodi (identità contabile).`
      },
      {
        question: `**Esercizio Solow con Cobb-Douglas**

Si supponga la funzione di produzione Cobb-Douglas:

*Y = K^a · L^(1−a)*

con parametri: **a = 1/3, s = 0.3, δ = 0.07, n = 0.01**

**a) Assumendo progresso tecnologico nullo (g = 0):**
  - Determinare lo **stock di capitale per occupato di stato stazionario** (k*).
  - Assumendo di partire da **k = 8**, determinare il corrispondente prodotto per occupato (y), risparmio per occupato (s·y), e **variazione di k** nel periodo successivo (Δk).
  - Determinare lo stock di capitale, tasso di risparmio e consumo di stato stazionario di **regola aurea**.

**b) Assumendo progresso tecnologico g = 0.02:**
  - Determinare il **capitale per occupato effettivo** di stato stazionario (k̃*).
  - Determinare lo stock di capitale, tasso di risparmio e consumo di stato stazionario di **regola aurea**.`,
        points: 5,
        weeks: [],
        soluzione: `**Funzione in unità di lavoro:** y = k^(1/3)

**a) Caso g = 0**

**Stato stazionario:** s·k^(1/3) = (δ + n)·k

⟹ k^(2/3) = s/(δ + n) = 0.3/(0.08) = 3.75
⟹ **k* = 3.75^(3/2) ≈ 7.26**

y* = k*^(1/3) = 7.26^(1/3) ≈ **1.94**

**Da k = 8 (sopra lo stato stazionario):**

y(8) = 8^(1/3) = **2**

s·y = 0.3 · 2 = **0.6**

Investimento di sostituzione: (δ + n)·k = 0.08 · 8 = 0.64

**Δk = s·y − (δ + n)·k = 0.6 − 0.64 = −0.04**

(k diminuisce perché k = 8 > k* = 7.26: l'economia si avvicina al SS dall'alto)

**Regola aurea (g = 0):**

f'(k_gold) = δ + n ⟹ (1/3)·k_gold^(−2/3) = 0.08
⟹ k_gold^(2/3) = (1/3)/0.08 = 4.17
⟹ **k_gold ≈ 8.52**

y_gold = 8.52^(1/3) ≈ 2.04
c_gold = y_gold − (δ + n)·k_gold = 2.04 − 0.08·8.52 = 2.04 − 0.68 = **1.36**

Tasso di risparmio gold: s_gold = (δ+n)·k_gold / y_gold = 0.68/2.04 = **0.333 = α**

(coincide con la quota del capitale α = 1/3, come previsto da Phelps per Cobb-Douglas)

**Confronto:** k* = 7.26 < k_gold = 8.52 ⟹ l'economia è **sotto la regola aurea** ⟹ aumentando s da 0.3 a 0.333 aumenterebbe il consumo di SS.

---

**b) Caso g = 0.02**

In unità di lavoro **effettivo** (k̃ = K/(LE)):

**Stato stazionario:** s·k̃^(1/3) = (δ + n + g)·k̃

⟹ k̃^(2/3) = 0.3/(0.07 + 0.01 + 0.02) = 0.3/0.10 = 3
⟹ **k̃* = 3^(3/2) ≈ 5.20**

ỹ* = 5.20^(1/3) ≈ **1.73**

**Regola aurea (g > 0):**

f'(k̃_gold) = δ + n + g ⟹ (1/3)·k̃_gold^(−2/3) = 0.10
⟹ k̃_gold^(2/3) = 10/3 = 3.33
⟹ **k̃_gold ≈ 6.08**

ỹ_gold = 6.08^(1/3) ≈ 1.83
c̃_gold = 1.83 − 0.10·6.08 = 1.83 − 0.608 = **1.22**

Tasso di risparmio gold: s_gold = (δ+n+g)·k̃_gold / ỹ_gold = 0.608/1.83 = **0.333 = α**

**Confronto:** k̃* = 5.20 < k̃_gold = 6.08 ⟹ ancora sotto la regola aurea.

**Crescita di lungo periodo:**
- Y/L cresce a g = 2% all'anno
- Y totale cresce a (n + g) = 3% all'anno

**Implicazione:** la regola aurea richiede s = α anche con progresso tecnologico; il vincolo (δ + n + g) sostituisce (δ + n) ma s_gold rimane = α per la Cobb-Douglas.`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // ESAME 12 MAGGIO 2025 (A)
  // ────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Esame 12 Maggio 2025',
    subtitle: 'Macroeconomia e Politica Economica (A)',
    duration: 90,
    multipleChoice: [],
    teoriaApplicata: [
      {
        question: 'Si descrivano dettagliatamente le **cause, i costi e i benefici dell\'inflazione**.',
        points: 5,
        weeks: [],
        soluzione: `Vedi soluzione completa Esame 13/05/2022 quesito 3.

**Sintesi:**

**Cause:** teoria quantitativa (Friedman), demand-pull, cost-push, inerziale.

**Costi attesa:** shoe-leather (gestione liquidità), menu cost, distorsioni fiscali (fiscal drag), variabilità prezzi relativi.

**Costi inattesa:** redistribuzione creditori-debitori, confusione informativa, premio al rischio sui tassi.

**Benefici:** lubrificante salariale (Tobin: aggiusta salari reali con W rigidi al ribasso), erosione del debito pubblico reale, margine dalla zero lower bound.

**Conclusione:** target 2% (BCE, FED) considerato ottimale: abbastanza basso da minimizzare costi, abbastanza alto da garantire margine di politica monetaria.`
      },
      {
        question: 'Si descriva dettagliatamente, anche **usando grafici**, cosa accade al **saldo commerciale** e al **tasso di cambio reale** di una piccola economia aperta nel caso in cui il **governo decida di ridurre la tassazione**.',
        points: 5,
        weeks: [],
        soluzione: `Vedi soluzione completa Esame 13/05/2022 quesito 1.

**Sintesi grafica:**

**(a) Mercato dei fondi mutuabili (PEA, r = r*):**
- Asse vert: r (orizzontale a r*)
- Curva S verticale; ΔT < 0 ⟹ S si sposta **a sinistra** di c·|ΔT|
- I = I(r*) invariato
- ⟹ S − I = NX **diminuisce** (deficit commerciale)

**(b) Mercato del cambio reale:**
- Asse vert: ε
- Curva NX = NX(ε) decrescente (domanda di valuta)
- Curva S − I verticale (offerta di valuta), si sposta a sinistra
- Nuovo equilibrio: **ε più alto (apprezzamento reale)**

**Catena causale:**
ΔT < 0 ⟹ ↑C ⟹ ↑Yd ⟹ ↓S^naz ⟹ ↓NX ⟹ ↑ε (apprezzamento) ⟹ esportazioni meno competitive, importazioni più convenienti

**Fenomeno dei "twin deficits":** deficit pubblico (ΔT<0 senza ΔG) e deficit commerciale insieme.`
      },
      {
        question: 'Si presenti **analiticamente e graficamente** il **progresso tecnologico nel modello di Solow** e si definiscano, in tale contesto, le **condizioni di equilibrio** e le **condizioni di ottimo**.',
        points: 5,
        weeks: [],
        soluzione: `Vedi soluzione completa Esame 10/05/2024 quesito 4.

**Schema:**

Funzione di produzione con E labor-augmenting: **Y = F(K, LE)**, con g = ΔE/E esogeno.

Variabili in unità di lavoro effettivo: **k̃ = K/(LE), ỹ = Y/(LE) = f(k̃)**.

**Equazione fondamentale:** *Δk̃ = s·f(k̃) − (δ + n + g)·k̃*

**Condizione di equilibrio (SS):** *s·f(k̃*) = (δ + n + g)·k̃*\\*

In SS: k̃, ỹ, c̃ costanti ⟹ K/L e Y/L crescono al tasso **g**; K, Y, C totali al tasso **n + g**.

**Condizione di ottimo (regola aurea):** *f'(k̃_gold) = δ + n + g*

Se Cobb-Douglas: s_gold = α (quota del capitale).

**Grafico:**
- Asse: y in funzione di k̃
- Curva s·f(k̃) concava
- Retta (δ + n + g)·k̃
- Intersezione = k̃*

**Implicazioni:** g è l'unica fonte di crescita di lungo periodo del tenore di vita Y/L. Il risparmio influenza solo il livello, non il tasso di crescita.`
      },
      {
        question: 'Si presentino in dettaglio i **modelli alla base dell\'offerta aggregata di breve periodo**. Partendo poi dall\'offerta aggregata si derivi **analiticamente la curva di Phillips**, illustrandone graficamente il funzionamento. Si chiarisca, infine, il **ruolo delle aspettative adattive** presentandone, in dettaglio, gli effetti sul modello.',
        points: 5,
        weeks: [],
        soluzione: `**Quattro modelli classici di offerta aggregata di breve periodo** (Mankiw):

**1. Salari vischiosi (sticky wages):**
- W fissati da contratti basati su P^e
- Se P > P^e ⟹ W/P ↓ ⟹ imprese assumono di più ⟹ Y ↑
- AS: Y = Ȳ + α(P − P^e)

**2. Errori percettivi dei lavoratori (Friedman):**
- Lavoratori confondono ΔW nominali con ΔW reali
- Se P sale e W sale proporzionalmente, i lavoratori credono che il W reale sia salito ⟹ offrono più lavoro
- Stessa equazione AS: Y = Ȳ + α(P − P^e)

**3. Informazione imperfetta (Lucas):**
- Produttori non distinguono variazioni del proprio prezzo da variazioni del livello generale
- Una P inattesa più alta viene scambiata per un aumento relativo ⟹ aumentano la produzione
- AS: Y = Ȳ + α(P − P^e)

**4. Prezzi vischiosi (sticky prices, neo-keynesiano):**
- Quote di imprese aggiornano prezzi in base a P^e
- AS: P = P^e + (1−s)/s · (Y − Ȳ) (s = quota imprese con prezzi flessibili)
- Equivalente: Y = Ȳ + α(P − P^e)

**Forma comune:** *Y = Ȳ + α·(P − P^e)*, oppure *P = P^e + (1/α)(Y − Ȳ)*

**Derivazione della curva di Phillips:**

Dalla AS: P − P^e = (1/α)(Y − Ȳ)

Sommando l'inflazione passata: π = (P − P_{-1})/P_{-1}, e usando la legge di Okun (Y − Ȳ) = −γ·(u − u_n)·Ȳ:

***π = π^e − β·(u − u_n) + v***

**Grafico Phillips:**
- Asse orizz: u
- Asse vert: π
- Curva inclinata negativamente per ogni π^e
- Spostamento verso l'alto se π^e ↑

**Aspettative adattive:**

*π^e_t = π_{t−1}* (le aspettative seguono il passato, con eventuale lag)

**Effetti sul modello:**

1. **Breve periodo:** la curva di Phillips esiste e c'è trade-off π/u sfruttabile.

2. **Aggiustamento dinamico:** se la BC sceglie inflazione costante π̄ > π^e_0, ogni periodo π^e si avvicina a π̄. Il trade-off si esaurisce gradualmente.

3. **Inerzia inflazionistica:** l'inflazione tende a persistere. Disinflazione richiede recessione (sacrifice ratio).

4. **Stagflazione (1970s):** shock di offerta + aspettative adattive ⟹ spirale prezzi-salari prolungata.

5. **Long run:** π = π^e (aspettative validate) ⟹ Phillips **verticale** in u_n ⟹ no trade-off.

**Esempio:** disinflazione Volcker (USA 1979-1982). Con aspettative adattive, ridurre π da 13% a 3% richiese 3 anni di alta disoccupazione (sacrifice ratio ≈ 2-3).

**Conclusione:** le aspettative adattive **rendono costosa la disinflazione** e generano persistenza inflazionistica. Aspettative razionali o ancorate (BC credibile) riducono il sacrifice ratio.`
      }
    ],
    esercizi: [
      {
        question: `**Esercizio offerta di moneta e teoria quantitativa**

Si supponga che la Banca Centrale immetta **base monetaria pari a B = 500**, che il **coefficiente di riserva** sia **rr = 0.3** e che il **rapporto tra circolante e depositi** sia **cr = 0.4**.

La **domanda di moneta** è definita da: *L = 0.7Y − 8i*

Si assuma inoltre:
- Reddito: Y = 1100
- Tasso di interesse **reale**: r = 9
- Aspettative di inflazione: π^e = 3

Calcolare:

**i)** il **moltiplicatore monetario**;
**ii)** la **quantità nominale di moneta M** e il **livello dei prezzi P** secondo la **teoria quantitativa**.`,
        points: 5,
        weeks: [],
        soluzione: `**i) Moltiplicatore monetario:**

*m = (cr + 1)/(cr + rr) = (0.4 + 1)/(0.4 + 0.3) = 1.4/0.7 = **2***

Offerta di moneta nominale: M^s = m · B = 2 · 500 = **M = 1.000**

---

**ii) Equilibrio sul mercato della moneta — quantità M:**

Tasso di interesse **nominale** (relazione di Fisher):

*i = r + π^e = 9 + 3 = **12***

Domanda di moneta reale (M/P):

*L = 0.7·Y − 8·i = 0.7·1100 − 8·12 = 770 − 96 = **674***

(Questa è M/P, ossia la moneta reale richiesta dal mercato.)

**Equilibrio mercato moneta:** M^s/P = L

1000/P = 674
**P = 1000/674 ≈ 1.484**

---

**Verifica via teoria quantitativa (M·V = P·Y):**

L'equazione quantitativa è MV = PY. Per derivarla dalla domanda L = kY (versione semplificata di Cambridge):

In SS della domanda di moneta: M/P = k·Y con k = 0.7 − 8·(i/Y). In questo esercizio, prendendo k ≈ L/Y = 674/1100 = 0.613, si ha velocità V = 1/k = 1.632.

Allora: M·V = P·Y ⟹ 1000 · 1.632 = P · 1100 ⟹ P ≈ 1.484 ✓

---

**Risultati finali:**

| Grandezza | Valore |
|---|---|
| Moltiplicatore m | 2 |
| Offerta di moneta nominale M | 1.000 |
| Tasso di interesse nominale i | 12 |
| Domanda di moneta reale L | 674 |
| Livello dei prezzi P | ≈ 1,484 |
| Velocità implicita V | ≈ 1,632 |

**Interpretazione:** dato il livello di moneta nominale e di reddito reale, la teoria quantitativa determina **endogenamente** il livello dei prezzi. Aumenti di B (e quindi di M) si trasferiscono proporzionalmente su P (neutralità di lungo periodo).`
      },
      {
        question: `**Esercizio IS-LM con politica fiscale e monetaria combinate**

Si consideri un'economia caratterizzata dalle seguenti quantità:
- C = 200 + 0.8(Y − T)
- I = 200 − 25r
- M = 1000
- P = 2
- L = 0.5Y − 100r
- T = 100
- G = 100

**a)** Determinare la **curva IS** e la **curva LM**.

**b)** Ricavare e rappresentare graficamente il **livello di equilibrio del reddito** e del **tasso di interesse**.

**c)** Si supponga che il governo persegua una **politica fiscale espansiva aumentando la spesa pubblica di 50**. Derivare le conseguenti variazioni del reddito e la **nuova curva IS**.

**d)** Allo stesso tempo, la banca centrale decide di **aumentare l'offerta di moneta di 200**. Derivare la **nuova curva LM**.

Rappresentare graficamente le manovre c) e d), e determinare i **nuovi livelli di equilibrio** del tasso di interesse e del reddito.`,
        points: 5,
        weeks: [],
        soluzione: `**a) Curve IS e LM:**

**IS:** Y = C + I + G
Y = 200 + 0.8(Y − 100) + 200 − 25r + 100
Y = 200 + 0.8Y − 80 + 200 − 25r + 100
0.2Y = 420 − 25r

**IS: Y = 2100 − 125r**

**LM:** M/P = L ⟹ 1000/2 = 0.5Y − 100r
500 = 0.5Y − 100r ⟹ 0.5Y = 500 + 100r

**LM: Y = 1000 + 200r**

---

**b) Equilibrio iniziale:**

IS = LM:
2100 − 125r = 1000 + 200r
1100 = 325r
**r* = 3.385 ≈ 3.38**

Y* = 1000 + 200·(3.385) = 1000 + 677 = **Y* ≈ 1677**

---

**c) Aumento di G di 50 (G nuovo = 150):**

Nuova IS:
Y = 200 + 0.8(Y − 100) + 200 − 25r + 150
0.2Y = 470 − 25r

**IS': Y = 2350 − 125r**

(spostamento orizzontale: ΔIS = 250 a r fisso, pari al moltiplicatore 5·ΔG = 5·50 = 250)

---

**d) Aumento di M di 200 (M nuovo = 1200), P invariato:**

Nuova LM:
1200/2 = 0.5Y − 100r
600 = 0.5Y − 100r ⟹ 0.5Y = 600 + 100r

**LM': Y = 1200 + 200r**

(spostamento orizzontale: ΔLM = 200 a r fisso)

---

**Nuovo equilibrio combinato (IS' = LM'):**

2350 − 125r = 1200 + 200r
1150 = 325r
**r** ≈ 3.538 ≈ 3.54**

Y** = 1200 + 200·(3.538) = 1200 + 707.7 = **Y** ≈ 1908**

---

**Confronto con l'equilibrio iniziale:**

| | Iniziale | Finale | Δ |
|---|---|---|---|
| Y | 1677 | 1908 | **+231** |
| r | 3.38 | 3.54 | +0.15 |

**Decomposizione dell'effetto su Y:**

- Solo ΔG = +50: IS' = 2350 − 125r, LM = 1000 + 200r ⟹ r = 4.15, Y ≈ 1830 (ΔY ≈ +153 da solo)
- Solo ΔM = +200: IS = 2100 − 125r, LM' = 1200 + 200r ⟹ r = 2.77, Y ≈ 1754 (ΔY ≈ +77 da solo)
- Combinato: ΔY = +231 ≈ +153 + +77 ✓ (approssimativamente additivi)

---

**Grafico:**
- IS si sposta a destra di 250 unità (politica fiscale)
- LM si sposta a destra di 200 unità (politica monetaria)
- Nuovo equilibrio in alto a destra: Y più alto, r leggermente più alto

**Interpretazione:** la coordinazione fiscale-monetaria espansiva genera la massima espansione di Y limitando l'aumento di r. Lo stimolo monetario assorbe gran parte del crowding-out che si sarebbe generato con la sola politica fiscale (r passa da 4.15 a 3.54).`
      }
    ]
  }
];
