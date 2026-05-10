// ═══════════════════════════════════════════════════════════════
// 5 Simulazioni "ESERCIZI" di Economia e Gestione delle Imprese
// Copertura di tutti i principali tipi di esercizio EGI:
//   E1 — Gestione scorte: EOQ, Reorder Point, BEP, curva esperienza
//   E2 — Marketing quantitativo: NPS, CLV, BCG matrix, pricing
//   E3 — Decisioni strategiche: Make or Buy, ABC Pareto, Payback, HHI
//   E4 — Analisi competitiva: VRIO, Porter 5 forze, scale economies, value chain
//   E5 — Avanzato: Rogers adoption, NPV, Matrice di Abell, brand equity
// ═══════════════════════════════════════════════════════════════

export const SIMULAZIONI_EGI_ESERCIZI = [
  // ────────────────────────────────────────────────────────────
  // ESERCIZI 1 — Gestione scorte, break-even, curva di esperienza
  // ────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Esercizi 1',
    subtitle: 'Gestione scorte, break-even e curva di esperienza',
    duration: 60,
    multipleChoice: [],
    teoriaApplicata: [],
    esercizi: [
      {
        question: `**EOQ — Lotto economico di acquisto (Wilson)**

Un'azienda di distribuzione ha i seguenti dati annuali per un articolo:

| Parametro | Valore |
|---|---|
| Domanda annua (D) | 18.000 unità |
| Costo per ogni ordine (S) | € 120 per ordine |
| Costo di mantenimento (H) | € 3 per unità / anno |
| Prezzo di acquisto | € 25 per unità |

**Calcola:**
a) La quantità ottimale di riordino (EOQ)
b) Il numero ottimale di ordini all'anno
c) Il costo totale di gestione delle scorte (ordinazione + mantenimento)
d) Verifica che nel punto ottimale i due costi siano uguali`,
        weeks: [10],
        soluzione: `**Formula di Wilson:** EOQ = √(2 × D × S / H)

**a) EOQ:**
EOQ = √(2 × 18.000 × 120 / 3) = √(4.320.000 / 3) = √1.440.000 = **1.200 unità**

**b) Numero di ordini all'anno:**
n = D / EOQ = 18.000 / 1.200 = **15 ordini/anno**
→ Frequenza: un ordine ogni 18.000/15 = 1.200 unità ≈ ogni 24,3 giorni lavorativi (su 365)

**c) Costo totale di gestione delle scorte:**
- Costo di ordinazione = n × S = 15 × €120 = **€ 1.800**
- Costo di mantenimento = (EOQ/2) × H = (1.200/2) × €3 = 600 × €3 = **€ 1.800**
- **Costo totale = € 1.800 + € 1.800 = € 3.600/anno**

**d) Verifica:** nel punto EOQ i due costi sono *sempre uguali* (proprietà matematica del minimo della curva del costo totale):
Costo ordinazione = Costo mantenimento = € 1.800 ✓

**Interpretazione:** acquistare 1.200 unità per volta minimizza la somma dei costi di gestione. Se si aumentasse il lotto (es. 2.000 unità), i costi di mantenimento supererebbero quelli di ordinazione; se si riducesse (es. 600 unità), accadrebbe il contrario.`
      },
      {
        question: `**Reorder Point e Safety Stock**

Un magazzino ha i seguenti parametri operativi per un articolo critico:

| Parametro | Valore |
|---|---|
| Domanda media giornaliera | 50 unità/giorno |
| Deviazione standard della domanda giornaliera (σ) | 8 unità/giorno |
| Lead time di fornitura | 9 giorni |
| Livello di servizio desiderato | 95% (z = 1,645) |
| Giorni lavorativi/anno | 250 |

**Calcola:**
a) La scorta di sicurezza (Safety Stock)
b) Il Reorder Point (ROP) — il livello di scorta a cui lanciare il riordino
c) La domanda media annua
d) Se l'EOQ è 1.500 unità, quanti ordini si fanno all'anno?`,
        weeks: [10],
        soluzione: `**a) Safety Stock:**
Formula: SS = z × σ_d × √(Lead Time)
SS = 1,645 × 8 × √9 = 1,645 × 8 × 3 = **39,48 ≈ 40 unità**

**b) Reorder Point (ROP):**
Formula: ROP = Domanda media durante il Lead Time + Safety Stock
- Domanda durante LT = 50 unità/giorno × 9 giorni = 450 unità
- ROP = 450 + 40 = **490 unità**

→ Quando la giacenza scende a 490 unità, si lancia il riordino. Le 490 unità "tengono" i 9 giorni di attesa fornitura con un buffer di 40 unità contro la variabilità.

**c) Domanda media annua:**
D = 50 unità/giorno × 250 giorni = **12.500 unità/anno**

**d) Numero di ordini all'anno con EOQ = 1.500:**
n = D / EOQ = 12.500 / 1.500 = **8,33 ordini ≈ 8-9 ordini/anno**
Frequenza: un ordine ogni 250/8,33 ≈ **30 giorni lavorativi** (≈ ogni mese)

**Interpretazione:** la safety stock di 40 unità protegge contro picchi di domanda o ritardi di fornitura con probabilità del 95%. Aumentare il livello di servizio al 99% (z=2,326) richiederebbe una SS = 2,326 × 8 × 3 ≈ 56 unità, ma con costi di mantenimento più alti.`
      },
      {
        question: `**Break-Even Point (BEP) e analisi costo-volume-profitto**

Un'azienda produce e vende un prodotto con la seguente struttura di costo:

| Parametro | Valore |
|---|---|
| Costi fissi totali (CF) | € 80.000/anno |
| Costo variabile unitario (cv) | € 25/unità |
| Prezzo di vendita unitario (p) | € 45/unità |
| Capacità produttiva massima | 10.000 unità/anno |

**Calcola:**
a) Il Margine di Contribuzione Unitario (MCU)
b) Il Break-Even Point in quantità (BEP unità)
c) Il Break-Even Point in ricavi (BEP €)
d) Le unità necessarie per raggiungere un utile target di € 20.000
e) Il Margine di Sicurezza se la produzione attuale è di 6.000 unità`,
        weeks: [10],
        soluzione: `**a) Margine di Contribuzione Unitario (MCU):**
MCU = Prezzo − Costo variabile = €45 − €25 = **€ 20/unità**
Il MCU è il contributo di ogni unità venduta alla copertura dei costi fissi e alla generazione di utile.

**b) Break-Even Point in quantità:**
BEP (unità) = CF / MCU = €80.000 / €20 = **4.000 unità**
→ Sotto le 4.000 unità l'azienda è in perdita; sopra, genera utile.

**c) Break-Even Point in ricavi:**
BEP (€) = BEP unità × Prezzo = 4.000 × €45 = **€ 180.000**
*Oppure:* BEP (€) = CF / (MCU/p) = 80.000 / (20/45) = 80.000 / 0,444 = €180.000

**d) Unità per utile target di € 20.000:**
Q_target = (CF + Utile target) / MCU = (€80.000 + €20.000) / €20 = **5.000 unità**
Verifica: Ricavi = 5.000 × 45 = €225.000; Costi = 80.000 + 5.000 × 25 = €205.000; Utile = €20.000 ✓

**e) Margine di Sicurezza (a 6.000 unità):**
MS (unità) = Produzione attuale − BEP = 6.000 − 4.000 = **2.000 unità**
MS (%) = 2.000 / 6.000 = **33,3%**
→ La produzione può calare del 33% prima che l'azienda entri in perdita.`
      },
      {
        question: `**Curva di Esperienza (Experience Curve)**

Un'azienda manifatturiera ha rilevato che il proprio settore presenta una **curva di esperienza con slope 0,80** (80%), ovvero ad ogni raddoppio del volume cumulato di produzione i costi unitari si riducono del 20%.

| Produzione cumulata | Costo unitario |
|---|---|
| 25.000 unità | € 200 (punto di partenza) |
| 50.000 unità | ? |
| 100.000 unità | ? |
| 200.000 unità | ? |
| 400.000 unità | ? |

**Calcola:**
a) Il costo unitario per ogni livello di produzione cumulata
b) La riduzione % di costo totale tra 25.000 e 400.000 unità
c) Se un concorrente è già a 400.000 unità e tu sei a 50.000, qual è il tuo svantaggio di costo? (in %)
d) Come può l'impresa sfruttare strategicamente la curva di esperienza?`,
        weeks: [2],
        soluzione: `**a) Calcolo del costo unitario per raddoppi successivi (slope 0,80):**

| Produzione cumulata | Raddoppi da 25k | Calcolo | Costo unitario |
|---|---|---|---|
| 25.000 | 0 | punto di partenza | **€ 200,00** |
| 50.000 | 1° raddoppio | €200 × 0,80 | **€ 160,00** |
| 100.000 | 2° raddoppio | €160 × 0,80 | **€ 128,00** |
| 200.000 | 3° raddoppio | €128 × 0,80 | **€ 102,40** |
| 400.000 | 4° raddoppio | €102,40 × 0,80 | **€ 81,92** |

**b) Riduzione percentuale totale:**
Riduzione = (€200 − €81,92) / €200 = €118,08 / €200 = **59,0%**
Il costo unitario si riduce di quasi il 60% passando da 25.000 a 400.000 unità cumulate.

**c) Svantaggio di costo vs. concorrente leader:**
- Tuo costo (a 50.000 unità): **€ 160**
- Costo concorrente (a 400.000 unità): **€ 81,92**
- Svantaggio = (160 − 81,92) / 81,92 = **+95,3%** — il tuo costo è quasi il doppio

**d) Implicazioni strategiche:**
- **Aggressività di volume:** investire in crescita rapida per scalare la curva prima dei rivali (pricing aggressivo, penetrazione di mercato)
- **First-mover advantage:** chi entra prima accumula esperienza e ha costi inferiori strutturalmente
- **Barriera all'entrata:** newcomer partono con costi alti; il leader può praticare prezzi insostenibili per loro
- **Attenzione:** la curva di esperienza richiede standardizzazione — non è compatibile con alta personalizzazione`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // ESERCIZI 2 — Marketing quantitativo e portafoglio prodotti
  // ────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Esercizi 2',
    subtitle: 'NPS, CLV, BCG matrix e analisi pricing',
    duration: 60,
    multipleChoice: [],
    teoriaApplicata: [],
    esercizi: [
      {
        question: `**Net Promoter Score (NPS)**

Un'azienda di e-commerce ha condotto un'indagine di customer satisfaction su **250 clienti**, chiedendo: *"Quanto è probabile che raccomandi la nostra azienda a un amico o collega?"* (scala 0–10).

I risultati sono i seguenti:

| Punteggio | N. rispondenti |
|---|---|
| 0 – 1 | 8 |
| 2 – 3 | 12 |
| 4 – 5 | 20 |
| 6 | 35 |
| 7 | 55 |
| 8 | 60 |
| 9 | 40 |
| 10 | 20 |

**Calcola:**
a) Il numero e la percentuale di Promotori, Passivi e Detrattori
b) Il Net Promoter Score (NPS)
c) Interpreta il risultato: è positivo, negativo, e come si confronta con un benchmark settoriale di NPS medio = +30?
d) Quali azioni suggeriresti per migliorare l'NPS?`,
        weeks: [12],
        soluzione: `**a) Classificazione dei rispondenti:**

| Categoria | Punteggi | N. persone | Percentuale |
|---|---|---|---|
| **Detrattori** | 0–6 | 8+12+20+35 = **75** | 75/250 = **30%** |
| **Passivi** | 7–8 | 55+60 = **115** | 115/250 = **46%** |
| **Promotori** | 9–10 | 40+20 = **60** | 60/250 = **24%** |
| **Totale** | | 250 | 100% |

**b) NPS:**
**NPS = % Promotori − % Detrattori = 24% − 30% = −6**

**c) Interpretazione:**
- NPS = −6 è **negativo** → i detrattori superano i promotori: il passaparola è mediamente dannoso per il brand
- Rispetto al benchmark settoriale (+30): **−36 punti sotto** la media → risultato critico
- La massa di Passivi (46%) rappresenta un'opportunità: convertirli in Promotori è più facile che cambiare i Detrattori

**d) Azioni di miglioramento:**
1. **Analisi dei Detrattori (0–6):** survey qualitativa per identificare i principali pain point (spedizioni, servizio clienti, prodotto)
2. **Azione prioritaria:** risolvere i problemi strutturali che generano valutazioni 0–5
3. **Convertire i Passivi (7–8):** programma fedeltà, promozioni personalizzate, follow-up post-acquisto per trasformarli in 9–10
4. **Amplificare i Promotori:** referral program (incentivo per chi porta nuovi clienti), user-generated content, testimonianze`
      },
      {
        question: `**Customer Lifetime Value (CLV) e rapporto CLV/CAC**

Un'azienda SaaS (software in abbonamento) ha i seguenti dati per il segmento di clienti "PMI":

| Parametro | Valore |
|---|---|
| Ricavo medio annuo per cliente (ARPU) | € 1.200/anno |
| Margine lordo % | 65% |
| Tasso di abbandono annuo (churn rate) | 20% |
| Tasso di sconto (WACC) | 10% |
| Costo di Acquisizione Cliente (CAC) | € 800 |

**Calcola:**
a) Il tasso di ritenzione annuo
b) Il CLV con la formula semplificata
c) Il rapporto CLV/CAC e interpretalo
d) Se la società vuole migliorare il CLV/CAC a 4,0 riducendo il churn al 10%, qual è il nuovo CLV?`,
        weeks: [12],
        soluzione: `**a) Tasso di ritenzione:**
Retention Rate = 1 − Churn Rate = 1 − 0,20 = **80%**

**b) CLV (formula semplificata):**
CLV = (ARPU × Margine lordo) / (1 + tasso sconto − tasso ritenzione)
CLV = (€1.200 × 0,65) / (1 + 0,10 − 0,80)
CLV = €780 / (1,10 − 0,80)
CLV = €780 / 0,30 = **€ 2.600**

*Interpretazione:* in media ogni cliente genera € 2.600 di valore attuale netto durante la sua relazione con l'azienda.

**c) Rapporto CLV/CAC:**
CLV/CAC = €2.600 / €800 = **3,25**

*Interpretazione:*
- < 1 → il business brucia cassa (acquisition non sostenibile)
- 1–3 → accettabile ma da migliorare
- **> 3 → sano** (3,25 è buono, anche se leggermente sopra la soglia)
- > 5 → eccellente, suggerisce potenziale di crescita con più investimento in marketing

**d) Nuovo CLV con churn ridotto al 10%:**
Retention = 1 − 0,10 = **90%**
Nuovo CLV = €780 / (1 + 0,10 − 0,90) = €780 / 0,20 = **€ 3.900**
Nuovo CLV/CAC = €3.900 / €800 = **4,875** ✓ (>4,0 obiettivo raggiunto)

→ Ridurre il churn dal 20% al 10% aumenta il CLV del **50%** e porta il ratio ben oltre il target.`
      },
      {
        question: `**Matrice BCG — Analisi del portafoglio business**

Un gruppo industriale gestisce quattro business unit (SBU). I dati di mercato sono i seguenti:

| SBU | Fatturato SBU | Fatturato leader di mercato | Tasso crescita mercato |
|---|---|---|---|
| Alpha | € 120 mln | € 80 mln | 18% |
| Beta | € 40 mln | € 160 mln | 22% |
| Gamma | € 200 mln | € 100 mln | 4% |
| Delta | € 60 mln | € 120 mln | 3% |

Soglia di discriminazione: tasso di crescita > 10% = mercato in crescita; quota relativa > 1,0 = leader.

**Calcola:**
a) La quota di mercato relativa per ciascuna SBU
b) Classifica ogni SBU nella matrice BCG (Star, Cash Cow, Question Mark, Dog)
c) Suggerisci la strategia ottimale per ciascuna SBU
d) Come alloca il cash flow tra le SBU?`,
        weeks: [8],
        soluzione: `**a) Quota di mercato relativa = Fatturato SBU / Fatturato leader:**

| SBU | Fatturato | Leader | Quota Relativa | Crescita | Classificazione |
|---|---|---|---|---|---|
| **Alpha** | €120 mln | €80 mln | 120/80 = **1,50** | 18% | **STAR ⭐** |
| **Beta** | €40 mln | €160 mln | 40/160 = **0,25** | 22% | **QUESTION MARK ❓** |
| **Gamma** | €200 mln | €100 mln | 200/100 = **2,00** | 4% | **CASH COW 🐄** |
| **Delta** | €60 mln | €120 mln | 60/120 = **0,50** | 3% | **DOG 🐕** |

**b) Classificazione:** vedi tabella sopra.

**c) Strategie per ciascuna SBU:**

- **Alpha (Star):** *Investire* per difendere la leadership nel mercato in crescita. Man mano che il mercato matura diventerà Cash Cow. Priorità massima di investimento.

- **Beta (Question Mark):** *Decidere*: investire selettivamente per diventare Star, oppure dismettere se il mercato è già troppo dominato dal leader. Alto cash assorbito, bassa quota — rischio elevato.

- **Gamma (Cash Cow):** *Mungere* i flussi di cassa con investimenti minimi. Finanzia Alpha e Beta. Non investire in crescita (mercato maturo).

- **Delta (Dog):** *Disinvestire o mantenere* solo se in break-even. Assente da mercati con futuro, bassa quota → candidata alla cessione o liquidazione.

**d) Flusso di cassa:**
Gamma (Cash Cow) genera cash → finanzia Alpha (Star) e la scommessa su Beta (Question Mark) → Delta si auto-sostiene o si vende.`
      },
      {
        question: `**Analisi Pricing — Prezzo, volume e margine**

Un'azienda produce un bene con costi fissi di **€ 60.000/anno** e costo variabile unitario di **€ 18**. Sta valutando quattro alternative di prezzo di vendita:

| Opzione | Prezzo (p) | Volume stimato (Q) |
|---|---|---|
| A | € 28 | 12.000 unità |
| B | € 32 | 9.000 unità |
| C | € 38 | 6.000 unità |
| D | € 45 | 3.500 unità |

**Calcola per ciascuna opzione:**
a) Il Margine di Contribuzione Unitario (MCU = p − cv)
b) Il Margine di Contribuzione Totale (MCT = MCU × Q)
c) L'utile operativo (MCT − CF)
d) Il Break-Even Point (BEP = CF / MCU)
e) Quale opzione massimizza l'utile? Quale massimizza il volume?`,
        weeks: [5],
        soluzione: `**Calcolo completo per ciascuna opzione:**

| Opzione | p | Q | MCU = p−18 | MCT = MCU×Q | Utile = MCT−CF | BEP = 60k/MCU |
|---|---|---|---|---|---|---|
| **A** | €28 | 12.000 | **€10** | €120.000 | **€60.000** | 6.000 u |
| **B** | €32 | 9.000 | **€14** | €126.000 | **€66.000** | 4.286 u |
| **C** | €38 | 6.000 | **€20** | €120.000 | **€60.000** | 3.000 u |
| **D** | €45 | 3.500 | **€27** | €94.500 | **€34.500** | 2.222 u |

**Analisi:**

- **Massimizzazione dell'utile: Opzione B (€32) → utile €66.000** ✓
  Buon bilanciamento tra MCU elevato e volume sufficiente.

- **Massimizzazione del volume: Opzione A (€28) → 12.000 unità**
  L'utile è pari all'opzione C, ma con volume doppio e MCU basso (rischio se i costi variabili aumentano).

- **BEP più sicuro: Opzione D (€45)** — bastano 2.222 unità per coprire i fissi; ma il volume stimato (3.500) è solo il 57% sopra il BEP, margine di sicurezza basso.

- **Raccomandazione strategica:** l'opzione B è ottimale in condizioni normali. Se l'obiettivo è la penetrazione di mercato (scalare curva di esperienza), A può essere scelta sacrificando margine nel breve periodo.`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // ESERCIZI 3 — Decisioni strategiche: Make or Buy, ABC, Payback, HHI
  // ────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Esercizi 3',
    subtitle: 'Make or Buy, ABC Pareto, Payback/ROI e concentrazione di mercato',
    duration: 60,
    multipleChoice: [],
    teoriaApplicata: [],
    esercizi: [
      {
        question: `**Make or Buy — Punto di indifferenza**

Un'impresa manifatturiera deve decidere se produrre internamente o acquistare da un fornitore esterno un componente semilavorato.

**Produzione interna (Make):**
- Costi fissi aggiuntivi (macchinari, personale dedicato): **€ 150.000/anno**
- Costo variabile di produzione: **€ 8 per unità**

**Acquisto esterno (Buy):**
- Prezzo di acquisto: **€ 14 per unità** (include consegna)
- Nessun costo fisso aggiuntivo

La domanda prevista per i prossimi tre scenari è: 15.000 / 25.000 / 35.000 unità/anno.

**Calcola:**
a) Il punto di indifferenza quantitativo (Q*)
b) Il costo totale Make e Buy per ciascuno scenario
c) La decisione ottimale per ciascuno scenario e il risparmio`,
        weeks: [8],
        soluzione: `**a) Punto di indifferenza (Q*):**
Nel punto di indifferenza: Costo_Make = Costo_Buy
CF + cv_make × Q = p_buy × Q
€150.000 + €8 × Q = €14 × Q
€150.000 = (€14 − €8) × Q = €6 × Q
**Q* = €150.000 / €6 = 25.000 unità**

→ Sotto le 25.000 unità conviene **BUY**; sopra le 25.000 unità conviene **MAKE**.

**b) e c) Confronto per i tre scenari:**

| Scenario | Q | Costo Make | Costo Buy | Decisione | Risparmio |
|---|---|---|---|---|---|
| **15.000** | 15.000 | €150.000 + €8×15.000 = **€270.000** | €14×15.000 = **€210.000** | **BUY** | €60.000 |
| **25.000** | 25.000 | €150.000 + €8×25.000 = **€350.000** | €14×25.000 = **€350.000** | Indiff. | € 0 |
| **35.000** | 35.000 | €150.000 + €8×35.000 = **€430.000** | €14×35.000 = **€490.000** | **MAKE** | €60.000 |

**Considerazioni qualitative oltre al costo:**
- **Make:** maggior controllo qualità, tutela know-how, riduzione dipendenza dal fornitore, ma rigidità se la domanda scende
- **Buy:** flessibilità, nessun investimento fisso, ma rischio di hold-up (Williamson) se il componente è specifico
- Con domanda incerta, il punto di indifferenza (25.000 unità) va integrato con un'analisi del rischio`
      },
      {
        question: `**Analisi ABC (Pareto) delle scorte**

Un magazzino gestisce 10 referenze (SKU). I dati di consumo annuo sono i seguenti:

| SKU | Volume annuo (pz) | Prezzo unitario (€) |
|---|---|---|
| SKU-01 | 2.000 | 180 |
| SKU-02 | 500 | 350 |
| SKU-03 | 8.000 | 12 |
| SKU-04 | 300 | 600 |
| SKU-05 | 1.500 | 40 |
| SKU-06 | 200 | 90 |
| SKU-07 | 5.000 | 8 |
| SKU-08 | 100 | 250 |
| SKU-09 | 3.000 | 15 |
| SKU-10 | 600 | 20 |

**Calcola:**
a) Il valore di consumo annuo per ciascuno SKU
b) Ordina le referenze per valore decrescente e calcola il valore cumulato percentuale
c) Classifica ogni SKU in categoria A (≈ 80% valore), B (≈ 15%) o C (≈ 5%)
d) Proponi una politica di gestione differenziata per ciascuna categoria`,
        weeks: [10],
        soluzione: `**a) e b) Calcolo e ordinamento per valore annuo:**

| SKU | Volume | Prezzo | Valore annuo | % sul totale | % cumulata | Classe |
|---|---|---|---|---|---|---|
| SKU-01 | 2.000 | €180 | **€360.000** | 37,7% | 37,7% | **A** |
| SKU-04 | 300 | €600 | **€180.000** | 18,9% | 56,6% | **A** |
| SKU-02 | 500 | €350 | **€175.000** | 18,3% | 74,9% | **A** |
| SKU-05 | 1.500 | €40 | **€60.000** | 6,3% | 81,2% | **B** |
| SKU-09 | 3.000 | €15 | **€45.000** | 4,7% | 85,9% | **B** |
| SKU-03 | 8.000 | €12 | **€96.000** | — | — | ... |

*Attenzione: riordino per valore decrescente:*

| Rango | SKU | Valore | % cumul. | Classe |
|---|---|---|---|---|
| 1 | SKU-01 | €360.000 | 37,7% | **A** |
| 2 | SKU-04 | €180.000 | 56,6% | **A** |
| 3 | SKU-02 | €175.000 | 74,9% | **A** |
| 4 | SKU-03 | €96.000 | 84,9% | **B** |
| 5 | SKU-05 | €60.000 | 91,2% | **B** |
| 6 | SKU-09 | €45.000 | 95,9% | **C** |
| 7 | SKU-10 | €12.000 | 97,2% | **C** |
| 8 | SKU-07 | €40.000 | — | **C** |
| 9 | SKU-06 | €18.000 | — | **C** |
| 10 | SKU-08 | €25.000 | — | **C** |

*Totale valore: ~€955.000*
**A = SKU-01, 04, 02** (3 referenze / 30%, ~75% del valore)
**B = SKU-03, 05** (2 referenze / 20%, ~16%)
**C = SKU-09, 10, 07, 06, 08** (5 referenze / 50%, ~9%)

**d) Politica differenziata:**
- **Classe A:** gestione con sistema continuo (Q-system), scorte di sicurezza calibrate, riesame frequente, fornitori certificati
- **Classe B:** sistema periodico (P-system) con revisione mensile, scorte di sicurezza moderate
- **Classe C:** regola semplice (riordino a vista o automatico quando il contenitore è vuoto), lotti grandi, meno controllo`
      },
      {
        question: `**Payback Period e ROI di un investimento**

Un'azienda valuta l'acquisto di un nuovo impianto automatizzato del valore di **€ 240.000** (anno 0). Si prevede che generi i seguenti flussi di cassa netti:

| Anno | Cash Flow netto |
|---|---|
| 1 | € 40.000 |
| 2 | € 60.000 |
| 3 | € 80.000 |
| 4 | € 90.000 |
| 5 | € 70.000 |

**Calcola:**
a) I flussi cumulati anno per anno
b) Il Payback Period (in anni e mesi)
c) Il ROI semplice al termine dei 5 anni
d) Se il costo del capitale è 8%, calcola il Net Present Value (NPV) e spiega se l'investimento è accettabile`,
        weeks: [8],
        soluzione: `**a) Flussi cumulati:**

| Anno | CF netto | CF cumulato |
|---|---|---|
| 0 | −€240.000 | −€240.000 |
| 1 | +€40.000 | −€200.000 |
| 2 | +€60.000 | −€140.000 |
| 3 | +€80.000 | −€60.000 |
| 4 | +€90.000 | **+€30.000** |
| 5 | +€70.000 | +€100.000 |

**b) Payback Period:**
Il break-even avviene tra l'anno 3 e l'anno 4.
Residuo dopo Anno 3: −€60.000
Mesi nell'Anno 4 per coprire €60.000 (con CF annuo €90.000):
= 60.000 / 90.000 × 12 = **8 mesi**
**Payback Period = 3 anni e 8 mesi**

**c) ROI semplice al termine dell'anno 5:**
Totale entrate = €40k + €60k + €80k + €90k + €70k = **€340.000**
Guadagno netto = €340.000 − €240.000 = €100.000
**ROI = €100.000 / €240.000 = 41,7%** (su 5 anni) oppure ≈ 8,3%/anno semplice

**d) Net Present Value (NPV) all'8%:**
NPV = −240.000 + 40.000/1,08 + 60.000/1,08² + 80.000/1,08³ + 90.000/1,08⁴ + 70.000/1,08⁵
= −240.000 + 37.037 + 51.440 + 63.508 + 66.153 + 47.654
= −240.000 + **265.792**
**NPV = +€ 25.792 > 0 → investimento accettabile** ✓

L'investimento crea valore: ogni euro investito genera €1,107 attualizzati. Se il NPV fosse negativo, il progetto distruggerebbe valore a questo costo del capitale.`
      },
      {
        question: `**Concentrazione di mercato: Indice C4 e HHI**

Nel mercato italiano del caffè in capsule operano le seguenti aziende:

| Azienda | Fatturato (€ mln) |
|---|---|
| NespressoIt | 420 |
| LavazzaCaps | 280 |
| IllySystem | 150 |
| CaffèVergnano | 90 |
| SegafreddoCap | 60 |
| PodaItalia | 40 |
| Altri (10 piccoli) | 60 |
| **TOTALE** | **1.100** |

**Calcola:**
a) La quota di mercato (%) di ciascuna azienda
b) L'indice di concentrazione C4 (somma delle quote dei primi 4 player)
c) L'Herfindahl-Hirschman Index (HHI = Σ quota²) in punti percentuali quadrati
d) Classifica la struttura di mercato (atomistico, oligopolio, monopolio) e le implicazioni per la profittabilità`,
        weeks: [2],
        soluzione: `**a) Quote di mercato (% = fatturato / 1.100):**

| Azienda | Fatturato | Quota % | Quota² |
|---|---|---|---|
| NespressoIt | €420 mln | **38,2%** | 14,59 |
| LavazzaCaps | €280 mln | **25,5%** | 6,50 |
| IllySystem | €150 mln | **13,6%** | 1,85 |
| CaffèVergnano | €90 mln | **8,2%** | 0,67 |
| SegafreddoCap | €60 mln | **5,5%** | 0,30 |
| PodaItalia | €40 mln | **3,6%** | 0,13 |
| Altri (10) | €60 mln | **5,5%** | 0,30 (≈ 0,03 ciascuno) |
| **TOTALE** | €1.100 mln | **100%** | |

**b) Indice di concentrazione C4:**
C4 = 38,2% + 25,5% + 13,6% + 8,2% = **C4 = 85,5%**
→ I primi 4 player controllano l'85,5% del mercato.

**c) HHI (Herfindahl-Hirschman Index):**
HHI = 38,2² + 25,5² + 13,6² + 8,2² + 5,5² + 3,6² + (10 × 0,55²)
HHI ≈ 1.459 + 650 + 185 + 67 + 30 + 13 + 30
**HHI ≈ 2.434**

**d) Classificazione e implicazioni:**
- **C4 = 85,5%** → mercato fortemente concentrato
- **HHI ≈ 2.434** → soglia DoJ: >2.500 = "altamente concentrato"; siamo vicini

*Struttura:* **oligopolio asimmetrico** con chiaro leader (NespressoIt, 38,2%) e uno sfidante principale (LavazzaCaps, 25,5%). I rimanenti sono follower.

*Implicazioni per la profittabilità:* alta concentrazione + differenziazione forte (capsule proprietarie, sistemi closed) → **profittabilità alta** per i leader; barriere all'entrata elevate (compatibilità, distribuzione, brand). Rischio di indagini antitrust se HHI supera 2.500 con operazioni M&A.`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // ESERCIZI 4 — Analisi competitiva: VRIO, Porter 5 forze, scala, value chain
  // ────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Esercizi 4',
    subtitle: 'VRIO, Porter 5 forze, economie di scala e value chain',
    duration: 60,
    multipleChoice: [],
    teoriaApplicata: [],
    esercizi: [
      {
        question: `**Analisi VRIO — Valutazione delle risorse strategiche**

**"ArteModa S.p.A."** è un'azienda italiana del settore moda di fascia medio-alta. Identifica le seguenti quattro risorse strategiche:

| Risorsa | Descrizione |
|---|---|
| **R1 — Brand Heritage** | 80 anni di storia, marchio riconosciuto, associato a qualità artigianale italiana |
| **R2 — Rete di artigiani certificati** | 120 botteghe artigiane in esclusiva, competenze trasmesse per generazioni |
| **R3 — Sistema ERP** | Software gestionale SAP standard, usato anche da competitor |
| **R4 — Archivio storico dei modelli** | Migliaia di disegni originali dal 1945, base per riedizioni limitate |

**Per ciascuna risorsa, valuta:**
a) Valuable (V) — crea valore per il cliente o riduce i costi?
b) Rare (R) — è posseduta da pochi concorrenti?
c) Inimitable (I) — è costosa da imitare (path-dependency, ambiguità causale, complessità sociale)?
d) Organized (O) — l'impresa è organizzata per sfruttarla?
e) Quale vantaggio competitivo genera ciascuna risorsa?`,
        weeks: [4],
        soluzione: `**Analisi VRIO per ArteModa S.p.A.:**

**R1 — Brand Heritage (80 anni):**
- **V ✓** Giustifica premium price, attrae clienti che valorizzano l'autenticità italiana
- **R ✓** Rari i brand con 80 anni di storia coerente nello stesso posizionamento
- **I ✓** Non replicabile in breve tempo; path-dependent (il brand si costruisce decennio per decennio); ambiguità causale (cosa esattamente lo rende autentico?)
- **O ✓** Comunicazione, distribuzione selettiva e pricing allineati al brand heritage
→ **Vantaggio Competitivo Sostenibile** 🏆

**R2 — Rete artigiani certificati:**
- **V ✓** Qualità artigianale superiore, differenziazione del prodotto
- **R ✓** 120 botteghe in esclusiva sono rare; costruire relazioni esclusive richiede anni
- **I ✓** Socialmente complessa (relazioni fiduciarie pluridecennali); difficile da contrattualizzare
- **O ✓** Processi di produzione e QC costruiti intorno a questa rete
→ **Vantaggio Competitivo Sostenibile** 🏆

**R3 — Sistema ERP (SAP standard):**
- **V ✓** Riduce inefficienze operative, migliora pianificazione
- **R ✗** SAP è disponibile per tutti; molti competitor lo usano
→ **Parità Competitiva** (condizione necessaria ma non sufficiente per competere)

**R4 — Archivio storico modelli:**
- **V ✓** Permette riedizioni limitate e storytelling autentico (alta marginalità)
- **R ✓** Pochissimi brand hanno archivi così ricchi e ben conservati
- **I ✓** Non riproducibile (gli originali non esistono altrove)
- **O ~** *Dipende:* se l'azienda ha una strategia di heritage marketing strutturata ✓; se l'archivio è solo "nel cassetto" → **Vantaggio inutilizzato** (O non ancora sfruttato appieno)
→ Se O✓: **Vantaggio Competitivo Sostenibile** | Se O✗: opportunità di valorizzazione strategica`
      },
      {
        question: `**Analisi Porter 5 Forze — Settore farmaceutico**

Analizza la struttura competitiva del **settore farmaceutico dei farmaci di marca (branded pharma)** europeo, valutando ciascuna delle 5 forze su una scala da 1 (molto bassa) a 5 (molto alta).

Per ciascuna forza, indica:
- Il livello (1–5) con motivazione
- L'impatto sulla profittabilità del settore

**Forze da analizzare:**
1. Rivalità tra concorrenti esistenti
2. Minaccia di nuovi entranti
3. Minaccia di prodotti sostituti
4. Potere contrattuale dei fornitori
5. Potere contrattuale dei clienti

**Conclusione:** valuta la profittabilità media del settore farmaceutico di marca e spiega come i brevetti alterano la struttura competitiva.`,
        weeks: [2],
        soluzione: `**Analisi Porter 5 Forze — Farmaceutico Branded Europeo:**

**1. Rivalità tra concorrenti (2/5 — BASSA-MEDIA)**
- I brevetti differenziano farmaci anche terapeuticamente equivalenti
- Pochi player (Big Pharma: Pfizer, Roche, Novartis, AstraZeneca) in sottosegmenti diversi
- Concorrenza non sul prezzo ma su R&D e pipeline
- *Impatto:* riduce la rivalità distruttiva → aumenta profittabilità ↑

**2. Minaccia nuovi entranti (1/5 — MOLTO BASSA)**
- Barriere enormi: R&D miliardario (costo medio farmaco: $1-2 mld), iter approvativo EMA/FDA (10-15 anni), brevetti, reputation scientifica
- Solo i generici entrano alla scadenza brevettuale, ma in un sotto-mercato separato
- *Impatto:* barriere elevatissime → profittabilità protetta ↑↑

**3. Minaccia sostituti (2/5 — BASSA-MEDIA)**
- Farmaci generici (alla scadenza brevetto) sono sostituti diretti
- Medicine alternative, prevenzione, stile di vita: sostituti parziali
- Per molte patologie non esistono alternative efficaci (farmaci orfani)
- *Impatto:* minaccia moderata, aumenta alla scadenza brevetti ↓

**4. Potere fornitori (2/5 — BASSO-MEDIO)**
- Principi attivi (API): pochi fornitori specializzati (concentrazione in India e Cina, rischio supply chain)
- Contract Manufacturing Organizations (CMO): limitati ma multiple alternative
- *Impatto:* moderato, ma con rischio geopolitico crescente

**5. Potere clienti (3/5 — MEDIO)**
- Medici prescrittori: influenzati da linee guida e aziende farmaceutiche
- Ospedali/SSN: enorme potere negoziale attraverso gare e HTA (Health Technology Assessment)
- Paziente finale: scarso potere ma voce crescente
- *Impatto:* il SSN/assicurazioni comprimono i prezzi negli acquisti pubblici ↓

**Conclusione:** profittabilità **ALTA** (farmaceutica tra i settori più profittevoli al mondo, margini EBITDA 25-40%). I brevetti creano monopoli temporanei che giustificano investimenti rischiosi in R&D. Alla scadenza brevettuale, i generici erodono rapidamente quota e prezzo.`
      },
      {
        question: `**Economie di scala — Impatto su costi e margini**

Un'azienda produce componenti elettronici. La struttura di costo varia con il volume produttivo come segue:

| Volume annuo | Costi fissi (€) | Costo variabile unitario (€) | Costi totali (€) | Costo unitario medio (€/u) |
|---|---|---|---|---|
| 10.000 | 200.000 | 15 | ? | ? |
| 20.000 | 200.000 | 13 | ? | ? |
| 40.000 | 200.000 | 11 | ? | ? |
| 80.000 | 220.000 | 9 | ? | ? |

Nota: i costi fissi aumentano leggermente a 80.000 unità per investimenti in automazione.

**Il prezzo di vendita è fisso a € 22/unità.**

**Calcola:**
a) Costi totali e costo unitario medio per ciascun volume
b) Il margine unitario e l'utile operativo per ciascun volume
c) Da quale volume l'impresa inizia a essere profittevole?
d) Spiega il meccanismo delle economie di scala e il concetto di Minimum Efficient Scale (MES)`,
        weeks: [2],
        soluzione: `**a) Calcolo costi totali e costo unitario medio:**

| Volume | CF | cv | CT = CF+cv×Q | CU medio = CT/Q |
|---|---|---|---|---|
| 10.000 | €200.000 | €15 | €200.000 + €150.000 = **€350.000** | €350.000/10.000 = **€35,00** |
| 20.000 | €200.000 | €13 | €200.000 + €260.000 = **€460.000** | €460.000/20.000 = **€23,00** |
| 40.000 | €200.000 | €11 | €200.000 + €440.000 = **€640.000** | €640.000/40.000 = **€16,00** |
| 80.000 | €220.000 | €9 | €220.000 + €720.000 = **€940.000** | €940.000/80.000 = **€11,75** |

**b) Margine unitario (p=€22) e utile operativo:**

| Volume | Prezzo | CU medio | Margine unit. | Utile = (p−CU)×Q |
|---|---|---|---|---|
| 10.000 | €22 | €35,00 | **−€13,00** | **−€130.000** (perdita) |
| 20.000 | €22 | €23,00 | **−€1,00** | **−€20.000** (perdita) |
| 40.000 | €22 | €16,00 | **+€6,00** | **+€240.000** (utile) |
| 80.000 | €22 | €11,75 | **+€10,25** | **+€820.000** (utile) |

**c) Punto di break-even:**
A 20.000 unità si è ancora in lieve perdita (−€20.000). Il BEP è tra 20.000 e 40.000 unità.
BEP esatto (a cv=€13): CF/(p−cv) = €200.000/(€22−€13) = 22.222 unità

**d) Economie di scala e MES:**
Le **economie di scala** si manifestano perché i costi fissi si spalano su un maggior numero di unità, riducendo il costo unitario medio. Anche il cv si riduce (da €15 a €9) per learning, potere d'acquisto e automazione.

La **Minimum Efficient Scale (MES)** è il volume minimo a cui si raggiungono i costi competitivi di settore. In questo caso, circa **40.000 unità** (dove il CU = €16 consente margine positivo). Produttori sotto la MES non sono competitivi a lungo termine.`
      },
      {
        question: `**Value Chain — Analisi dei margini per attività**

Un'azienda produttrice di mobili di design ha mappato la propria catena del valore con i seguenti dati economici:

| Attività della value chain | Costi annui (€) | Valore percepito dal cliente* |
|---|---|---|
| Logistica in entrata (approvv. legno pregiato) | 180.000 | Alto |
| Operations (lavorazione e finitura artigianale) | 350.000 | Molto Alto |
| Logistica in uscita (consegna e montaggio) | 80.000 | Medio |
| Marketing & Vendite (showroom, fiere, digital) | 200.000 | Alto |
| Servizi post-vendita (garanzia, assistenza) | 40.000 | Alto |
| **Attività di supporto (R&D design, HR, IT)** | 150.000 | — |
| **TOTALE COSTI** | 1.000.000 | |

Il fatturato annuo è **€ 1.600.000**.

**Calcola e analizza:**
a) Il margine operativo totale (€ e %)
b) Identifica le attività con il miglior e il peggior rapporto valore/costo
c) Suggerisci dove investire ulteriormente e dove ottimizzare i costi
d) Quali attività potrebbero essere esternalizzate senza perdere vantaggio competitivo?`,
        weeks: [5],
        soluzione: `**a) Margine operativo totale:**
Margine = Fatturato − Costi totali = €1.600.000 − €1.000.000 = **€ 600.000**
Margine % = 600.000 / 1.600.000 = **37,5%** — eccellente per il settore manifatturiero

**b) Rapporto valore/costo per attività primarie:**

| Attività | Costo | Valore cliente | Valutazione |
|---|---|---|---|
| **Operations** | €350.000 (35%) | Molto Alto | ✅ Core strategico — alto valore, giustifica il costo |
| **Logistica in entrata** | €180.000 (18%) | Alto | ✅ Materia prima pregiata = fonte di differenziazione |
| **Marketing & Vendite** | €200.000 (20%) | Alto | ✅ Showroom e fiere creano esperienza brand premium |
| **Servizi post-vendita** | €40.000 (4%) | Alto | ✅✅ Ottimo: costo basso, valore percepito alto (leva CX) |
| **Logistica in uscita** | €80.000 (8%) | Medio | ⚠️ Valore medio ma costo significativo |

**c) Dove investire e dove ottimizzare:**

**Investire:**
- **Servizi post-vendita:** rapporto valore/costo eccezionale; aumentare la dotazione (es. garanzia estesa, assistenza dedicata) fidelizza il cliente a basso costo
- **Operations:** la lavorazione artigianale è il cuore del vantaggio; continuare a investire in master artigiani e tecniche proprietarie

**Ottimizzare:**
- **Logistica in uscita:** costi medi con valore medio → valutare outsourcing a corrieri specializzati in arredamento; liberare risorse per attività più strategiche

**d) Esternalizzare senza perdere vantaggio:**
- **Logistica in uscita:** non è fonte di differenziazione; partner logistici specializzati possono fare meglio a costi inferiori
- **IT/supporto tecnologico:** commodity, nessun vantaggio interno
- **NON esternalizzare:** Operations (il cuore artigianale), Marketing (la voce del brand), R&D design (l'identità del prodotto)`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // ESERCIZI 5 — Avanzato: Rogers adoption, NPV, Abell, brand equity
  // ────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Esercizi 5',
    subtitle: 'Innovazione, NPV, Matrice di Abell e brand equity',
    duration: 60,
    multipleChoice: [],
    teoriaApplicata: [],
    esercizi: [
      {
        question: `**Curva di diffusione Rogers — Metriche di adozione**

Una startup ha lanciato un nuovo software di project management basato su AI. Il mercato potenziale è di **80.000 aziende** in Italia.

La diffusione segue la curva di Rogers con la distribuzione standard:

| Categoria | % | N. aziende | Anno di adozione previsto |
|---|---|---|---|
| Innovatori | 2,5% | ? | Anno 1 |
| Early Adopters | 13,5% | ? | Anno 2 |
| Early Majority | 34% | ? | Anni 3–4 |
| Late Majority | 34% | ? | Anni 5–6 |
| Laggards | 16% | ? | Anno 7+ |

Il ricavo medio per azienda è **€ 3.600/anno** (abbonamento).

**Calcola:**
a) Il numero di aziende per ciascuna categoria
b) Il ricavo annuo generato in ciascuna fase (solo dai nuovi adottanti di quella fase)
c) Il ricavo cumulativo al termine di ogni fase
d) In quale anno si raggiunge la "massa critica" (50% del mercato)?
e) Dove si trova il "chasm" di Moore e quali azioni suggeriresti per attraversarlo?`,
        weeks: [11],
        soluzione: `**a) Numero di aziende per categoria:**

| Categoria | % | N. aziende |
|---|---|---|
| Innovatori | 2,5% | 80.000 × 2,5% = **2.000** |
| Early Adopters | 13,5% | 80.000 × 13,5% = **10.800** |
| Early Majority | 34% | 80.000 × 34% = **27.200** |
| Late Majority | 34% | 80.000 × 34% = **27.200** |
| Laggards | 16% | 80.000 × 16% = **12.800** |

**b) Ricavo annuo dai nuovi adottanti per fase:**
(Ricavo = N. nuovi adottanti × €3.600)

| Fase | N. nuovi | Ricavo da nuovi | Anno |
|---|---|---|---|
| Innovatori | 2.000 | **€7.200.000** | 1 |
| Early Adopters | 10.800 | **€38.880.000** | 2 |
| Early Majority | 27.200 | **€97.920.000** | 3–4 |
| Late Majority | 27.200 | **€97.920.000** | 5–6 |
| Laggards | 12.800 | **€46.080.000** | 7+ |

**c) Clienti cumulativi e ricavo cumulato annuo (abbonamenti attivi):**
- Fine Anno 1: 2.000 clienti → ricavo annuo €7,2 mln
- Fine Anno 2: 12.800 clienti → ricavo annuo €46,1 mln
- Fine Anno 4: 40.000 clienti → ricavo annuo €144 mln (50% del mercato)
- Fine Anno 6: 67.200 clienti → ricavo annuo €242 mln

**d) Massa critica (50% = 40.000 aziende):**
2.000 + 10.800 + 27.200 = **40.000** = 50% → raggiunta **alla fine dell'Anno 4** ✓

**e) Il Chasm e come attraversarlo:**
Il chasm si trova tra Early Adopters (Anno 2, 12.800 aziende) e Early Majority (Anno 3–4).
- **Problema:** gli EA sono visionari, l'EM vuole "soluzioni che funzionano davvero"
- **Strategia Moore:** scegliere una nicchia verticale verticale specifica (es. agenzie di marketing con team 10-50 persone), dominare completamente quel segmento con soluzione end-to-end, usarla come "testa di ponte" per poi espandersi ad altri verticali`
      },
      {
        question: `**Net Present Value (NPV) di un progetto innovativo**

Un'impresa farmaceutica valuta l'investimento in un nuovo farmaco oncologico. I parametri progettuali sono:

| Voce | Importo |
|---|---|
| Investimento iniziale in R&D (Anno 0) | −€ 8.000.000 |
| Investimento in impianto produttivo (Anno 1) | −€ 2.000.000 |
| Cash flow operativo Anno 2 | +€ 1.500.000 |
| Cash flow operativo Anno 3 | +€ 3.000.000 |
| Cash flow operativo Anno 4 | +€ 4.500.000 |
| Cash flow operativo Anno 5 (incl. valore residuo €500.000) | +€ 5.000.000 |

Il costo medio ponderato del capitale (WACC) è **10%**.

**Calcola:**
a) Il valore attuale di ogni flusso di cassa (fattore di attualizzazione = 1 / (1+r)^n)
b) Il NPV totale del progetto
c) Il progetto è accettabile? Perché?
d) A quale WACC il progetto diventa marginalmente accettabile (NPV=0)? [Stima approssimativa]`,
        weeks: [11],
        soluzione: `**a) Valore attuale dei flussi (WACC = 10%):**

| Anno | Cash Flow | Fattore (1/1,10^n) | Valore Attuale |
|---|---|---|---|
| 0 | −€8.000.000 | 1,0000 | **−€8.000.000** |
| 1 | −€2.000.000 | 1/1,10 = 0,9091 | **−€1.818.200** |
| 2 | +€1.500.000 | 1/1,21 = 0,8264 | **+€1.239.600** |
| 3 | +€3.000.000 | 1/1,331 = 0,7513 | **+€2.253.900** |
| 4 | +€4.500.000 | 1/1,4641 = 0,6830 | **+€3.073.500** |
| 5 | +€5.000.000 | 1/1,6105 = 0,6209 | **+€3.104.500** |

**b) NPV totale:**
NPV = −8.000.000 − 1.818.200 + 1.239.600 + 2.253.900 + 3.073.500 + 3.104.500
NPV = −9.818.200 + 9.671.500
**NPV = −€ 146.700**

**c) Il progetto è accettabile?**
**No — NPV < 0** (−€146.700). Il progetto distrugge marginalmente valore al costo del capitale del 10%.

Tuttavia, la perdita è marginale (−1,5% dell'investimento totale). Fattori qualitativi da considerare: opzioni reali (possibilità di espansione se il farmaco ha successo), valore strategico del portafoglio pipeline, incentivi regolatori per farmaci orfani.

**d) IRR approssimativo (WACC a cui NPV = 0):**
Il NPV è leggermente negativo al 10%. Provando con WACC = 9%:
Fattori 9%: 0,9174; 0,8417; 0,7722; 0,7084; 0,6499
VA flussi positivi ≈ 1.262.550 + 2.316.600 + 3.187.800 + 3.249.500 = €10.016.450
NPV ≈ −9.818.200 + 10.016.450 = **+€198.250 > 0 al 9%**

**IRR ≈ 9,4%** (tra 9% e 10%). Il progetto è accettabile solo se il costo del capitale scende sotto ~9,4%.`
      },
      {
        question: `**Matrice di Abell — Definizione del Business**

La **Matrice di Abell** definisce il business dell'impresa lungo tre dimensioni:
- **COSA** — Funzioni d'uso soddisfatte (i benefici per il cliente)
- **CHI** — Gruppi di clienti serviti (segmenti)
- **COME** — Tecnologie/modalità usate per soddisfare i bisogni

**Esercizio:**
Costruisci la Matrice di Abell per i seguenti due casi, confrontandoli sulle tre dimensioni:

**Caso A — Spotify** (piattaforma streaming musicale)
**Caso B — Amazon** (e-commerce e cloud)

Per ciascun caso:
a) Identifica le principali funzioni d'uso (COSA)
b) Identifica i principali segmenti di clienti (CHI)
c) Identifica le tecnologie/modalità distintive (COME)
d) Confronta le due matrici e commenta la diversità dei modelli di business`,
        weeks: [6],
        soluzione: `**Matrice di Abell — Spotify:**

**COSA (funzioni d'uso):**
- Ascolto musicale on-demand (entertainment)
- Scoperta di nuova musica (discovery, algoritmo)
- Podcasting e audio content
- Sottofondo lavorativo / concentrazione
- Condivisione sociale (playlist collaborative)

**CHI (segmenti):**
- Individui (free con ads / Premium paid)
- Coppie e famiglie (Spotify Family)
- Artisti e creator (upload, analytics, monetization)
- Brand / Advertiser (inserzioni audio-video)
- Studenti (sconto Premium)

**COME (tecnologie):**
- Streaming cloud-based con CDN globale
- Algoritmo ML di recommendation (Discover Weekly, Daily Mix)
- App mobile-first + desktop + smart speaker
- Modello freemium

---

**Matrice di Abell — Amazon:**

**COSA (funzioni d'uso):**
- Acquisto beni (convenience, prezzo, selezione)
- Consegna veloce (Prime, same-day)
- Intrattenimento digitale (Prime Video, Music)
- Cloud computing / hosting (AWS)
- Logistica per terzi (FBA)

**CHI (segmenti):**
- Consumatori retail (B2C)
- PMI e marketplace seller (B2B)
- Enterprise e startup (AWS cloud)
- Editori e creator (Kindle, self-publishing)

**COME (tecnologie):**
- Piattaforma e-commerce con long tail
- Rete logistica proprietaria (Prime Air, magazzini robotizzati)
- Cloud IaaS/PaaS (AWS)
- Recommendation engine e personalizzazione

---

**d) Confronto:**
- **Spotify** ha un business *focalizzato* (audio/entertainment) ma con un ecosistema multi-sided (ascoltatori + artisti + brand)
- **Amazon** è radicalmente *diversificato* (retail + cloud + media + logistica): ogni business alimenta gli altri (AWS finanzia Prime; Prime crea lock-in; i dati retail alimentano AWS)
- La "funzione d'uso" di Amazon è quasi impossibile da definire in modo unitario: è una piattaforma di piattaforme (metabusiness)`
      },
      {
        question: `**Brand Equity — Modello di Aaker**

**"SportivaItalia"** è un brand italiano di abbigliamento sportivo che ha recentemente commissionato una ricerca di brand equity. I risultati della survey (campione: 1.200 consumatori target) sono:

| Dimensione Aaker | Metrica rilevata | Score grezzo |
|---|---|---|
| Brand Awareness | Top-of-mind (% che cita spontaneamente) | 42% |
| Brand Loyalty | NPS del brand | +35 |
| Perceived Quality | Valutazione media qualità percepita (1–10) | 7,4 / 10 |
| Brand Associations | % consumatori che associa: "italiano", "durevole", "sostenibile" | 68%, 54%, 31% |
| Other proprietary assets | Brevetti attivi + accordi esclusivi fiere | 18 brevetti, 3 accordi |

**Competitor benchmark:** brand leader del segmento ha NPS +52, top-of-mind 71%, qualità percepita 8,6/10.

**Analisi:**
a) Commenta il livello di ciascuna dimensione del brand equity rispetto al benchmark
b) Identifica i 2 punti di forza e i 2 punti di debolezza principali del brand
c) Proponi 3 azioni strategiche prioritarie per aumentare il brand equity
d) Spiega come un brand equity più forte si traduce in valore economico per l'impresa`,
        weeks: [12],
        soluzione: `**a) Analisi per dimensione vs. benchmark:**

| Dimensione | SportivaItalia | Leader | Gap | Valutazione |
|---|---|---|---|---|
| **Brand Awareness** (top-of-mind) | 42% | 71% | −29pp | ⚠️ Notorietà bassa: il brand non è la prima scelta spontanea |
| **Brand Loyalty** (NPS) | +35 | +52 | −17pp | ⚠️ Fedeltà discreta ma significativamente sotto il leader |
| **Perceived Quality** | 7,4/10 | 8,6/10 | −1,2pt | ⚠️ Gap di qualità percepita da colmare |
| **Brand Associations** | "italiano"68%, "durevole"54%, "sostenibile"31% | — | — | ✅ Italiana e durevolezza forti; sostenibilità ancora emergente |
| **Proprietary assets** | 18 brevetti, 3 accordi | — | — | ✅ Buona base IP, ma da comunicare meglio |

**b) Punti di forza:**
1. **Heritage italiano** (68% di associazione) — leva autentica e difficile da imitare
2. **IP solida** (18 brevetti) — protezione tecnologica, possibilità di licensing

**Punti di debolezza:**
1. **Bassa awareness** (42% vs 71%) — il brand non è conosciuto abbastanza nel target
2. **Sostenibilità debole** (31%) — in un mercato dove il 60% dei consumatori premia brand sostenibili

**c) Tre azioni strategiche prioritarie:**
1. **Campagna awareness digitale e influencer** — partnerships con atleti italiani emergenti su Instagram/YouTube per triplicare la share of voice; target: awareness al 60% in 18 mesi
2. **Certificazione B-Corp o GOTS (Global Organic Textile Standard)** — colmare il gap sostenibilità (31%→50%) in un segmento sempre più green-sensitive; comunicare con claim verificabili per evitare greenwashing
3. **Programma di loyalty** — trasformare clienti passivi in promotori (NPS target +45) con app dedicata, riparazioni gratuite, community di appassionati

**d) Brand equity → valore economico:**
- **Premium price:** brand forti giustificano prezzi 15-30% superiori a brand equivalenti
- **Minori costi di marketing** per acquisizione (i promotori portano nuovi clienti gratis)
- **Estensioni di brand** a basso rischio (es. accessori, equipaggiamento)
- **Potere negoziale** con retailer (scaffale preferenziale, termini migliori)`
      }
    ]
  }
];
