Ef satt reynist, er þetta lygi
==============================

:author: Rúnar Berg Baugsson Sigríðarson
:date: 2013-05-21 15:39:44
:slug: satt-ef-lygi
:lang: is
:category: Pælingar
:tags: Stærðfræði, Heimspeki

:summary: Ef næsta setning er sönn, og þess setning lygi, þá var seinasta
          setning sönn, en bara ef hún var lygi. Hér mun ég reyna að koma
          þessari þversögn í samt lag. Og með takmarkaðri stærðfræðilegri
          þekkingu geri ég hér tilraun til að gera það stærðfræðilega.


Þversögn lygarans er í einfaldri útfærslu svo:

Fullyrðing 1
  *„Þessi fulltyðing er lygi.“*

Ef við skoðum fullyrðinguna kemur í ljós að við vitum aldrei svarið við
henni. Til að meta hana verðum við að skoða báða möguleika.

Möguleiki 1
  *Fullyrðing 1 er sönn* (:math:`Q(S) = 1`): Þar sem fullyrðingin um að
  *‚þessi fullyrðing sé lygi‘*, er sönn, verður maður að trúa því að
  fullyrðingin *sé* lygi og þar af leiðandi ósönn (:math:`Q(S) = 0`).

  .. math::
     :name: eq1
     
     Q(S) = 1 \Longrightarrow Q(S) = 0

Möguleiki 2
  *Fullyrðing 1 er ósönn* (:math:`Q(S) = 0`): Þar sem fullyrðingin um að
  *‚þessi fullyrðing sé lygi‘*, er **ekki** sönn, getur maður ekki trúað því að
  fullyrðingin sé lygi og þar af leiðandi verður hún að vera sönn (:math:`Q(S)
  = 1`).

  .. math::
     :name: eq2
     
     Q(S) = 0 \Longrightarrow Q(S) = 1

Fullyrðingin er semsagt ósönn, sé hún sönn, og sönn sé hún ósönn. Með öðrum
orðum, sé það gefið að fullyrðingin sé sönn, þá verður hún ósönn
(skv. möguleka 1); og sé það, á hinn boginn gefið að fullyrðingin sé ósönn, þá
verður hún sönn (skv. möguleika 2).

.. math::
   :name: eq3
   
   Q(S) = 1 \Longleftrightarrow Q(S) = 0

Þar sem *fullyrðing 1* er táknuð með breytunni :math:`S` og :math:`Q(S)` er
sannleiksprófun á yrðingunni :math:`S`, og gefur eitt af tveimur gildum;
:math:`1` fyrir sannleik og :math:`0` fyrir ósannleik.

.. math::
   :name: eq4
   
   Q(S) = \begin{cases}
            1: & \mbox{ef $S$ er sönn}\\
            0: & \mbox{ef $S$ er ósönn}.
          \end{cases}

Þetta er ekkert nýtt. Þessi þversögn hefur verið til umræðu, allavega síðan á
fjórum öldum fyrir krist. Margar lausnir hafa verið lagðar til hennar, en
engin þeirra er víðtekin. Hér mun ég ekki reyna að leysa þessa þversögn,
heldur mun ég reyna að komast að því *hvers vegna* hún er svona vandræðaleg.

Tökum klassísku söguna um það hvernig. Bertrand Russell tókst að fella
mengjafræði síns tíma með svipaðri þversögn og *fullyrðing 1* veldur.

Russell skilgreindi mengi allra mengja sem ekki innahalda sjálft sig.

.. math::
   :name: eq5

   R = \left\{ {x \mid x \notin x}\right\}.

Hann spurði sig svo hvort mengi :math:`R` innihaldi sjálft sig eða ekki (það
er :math:`R \in R`, eða :math:`R \notin R`?) Líkt og ég gerði áðan prufaði
hann báða möguleika. Með því að gefa sér fyrri möguleikan, að mengi allra
mengja sem innihalda ekki sjálft sig, innihaldi sannanlega sjálft sig
(:math:`R \in R`) þá komst hann að því að hið gagnstæða hlyti að vera satt
(:math:`R \notin R`). Og þar af leiðandi

.. math::
   :name: eq6

   R \in R \Longleftrightarrow R \notin R

Afleiðingarnar af þessari uppgötvun Russells urðu gífurlegar. Fólk þurfti nú
að fara að hugsa mengjafræðina upp á nýtt. Það má ekki lengur skilgreina hvaða
mengi sem er. Þar sem þversögn Russells er fullkomlega sambærileg við þversögn
lygarans, þá ættu afleiðingarnar líka að vera svipaðar. *Það má ekki
skilgreina aðgerð sem er í mótsögn við sjálfa sig.* Sannleiksprófunun
:math:`Q(S)` sem ég skilgreindi í `jöfnu 4 <#eq4>`_ er því óskilgreinanleg.

Kennisetning 1
  Það er engin góð ástæða fyrir því að þessi fullyrðing sé til nokkurra
  vandræða.
