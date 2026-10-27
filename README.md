# Site web d'Aspirine Cardio

Le site officiel d'**Aspirine Cardio**, groupe genevois de blues-pop-rock-fusion.

🌐 **Adresse du site : https://aspirinecardiomusic.ch**

---

## Qu'y a-t-il sur le site ?

Une seule page, qui contient :

- **L'accueil :** le logo du groupe et la phrase « Un remède contre le blues du cœur ! ».
- **Les concerts :** les prochaines dates, et les concerts passés repliés en dessous.
- **La bio :** la présentation du groupe et les instruments.
- **Les vidéos :** les 4 clips YouTube du groupe, plus un lien vers la chaîne.

La page s'affiche correctement sur ordinateur comme sur téléphone.

---

## Ajouter ou retirer une date de concert

C'est la seule chose à modifier régulièrement. Tout se passe dans le fichier **`concerts.js`**.

1. Sur GitHub, ouvrez le fichier `concerts.js`, puis cliquez sur le petit crayon ✏️ (« Edit »).
2. Ajoutez une ligne par concert, entre les crochets `[` et `]`, sur ce modèle :

   ```js
   { date: "2026-12-12", heure: "21:00", lieu: "L'Alhambra", ville: "Genève", lien: "" },
   ```

   - **date :** au format année-mois-jour (`2026-12-12` = 12 décembre 2026).
   - **heure :** facultative. Laissez `""` si vous ne la connaissez pas.
   - **lien :** facultatif. Une page de billetterie ou de l'événement, sinon `""`.
3. Cliquez sur **« Commit changes »** (le bouton vert).
4. Attendez environ une minute : le site se met à jour tout seul.

Bon à savoir :

- **L'ordre des lignes** n'a pas d'importance, le site trie les dates lui-même.
- **Les concerts passés** passent automatiquement dans « Concerts passés ».
- **Pour retirer une date,** il suffit d'effacer sa ligne.
- **S'il n'y a aucune date,** le site affiche « Prochaines dates bientôt annoncées ».

---

## Comment ça marche (en bref)

Il n'y a ni base de données, ni mot de passe, ni logiciel à installer : le site est un petit ensemble de fichiers, servis tels quels.

| Fichier | À quoi il sert |
|---|---|
| `index.html` | Le contenu de la page (textes, sections) |
| `style.css` | L'apparence (couleurs, polices, mise en page) |
| `main.js` | Affiche les concerts et lance les vidéos |
| `concerts.js` | **La liste des concerts** (le seul fichier à modifier) |
| `assets/logo.jpg` | Le logo |
| `CNAME` | Indique à GitHub le nom de domaine du site |

Pour les vidéos, seule la miniature est affichée au départ. Le lecteur YouTube ne se charge que lorsque le visiteur clique : la page reste rapide, et YouTube ne dépose pas de cookies tant qu'on ne lance pas de vidéo.

---

## Où est hébergé le site ?

Le site repose sur deux services :

### 1. GitHub Pages : l'hébergement (gratuit)

Les fichiers du site sont stockés sur GitHub, dans le dépôt **`pdechoudens/aspirine-cardio`**. GitHub les met en ligne gratuitement grâce à son service « GitHub Pages ».

- **Réglages :** dans le dépôt, **Settings → Pages**. Source : branche `main`, dossier racine `/`.
- **Mises à jour :** chaque modification enregistrée sur GitHub met le site à jour en une minute environ.
- **Ancienne adresse :** `pdechoudens.github.io/aspirine-cardio` redirige automatiquement vers `aspirinecardiomusic.ch`.

### 2. Infomaniak : le nom de domaine (payant, environ 10-15 CHF/an)

Le nom **`aspirinecardiomusic.ch`** a été acheté chez Infomaniak, valable jusqu'en octobre 2029.

On ne paie chez Infomaniak que le nom, pas d'hébergement. Infomaniak sert d'« annuaire » : quand quelqu'un tape `aspirinecardiomusic.ch`, Infomaniak lui indique d'aller chercher le site chez GitHub.

Concrètement, dans **manager.infomaniak.com → Domaines → aspirinecardiomusic.ch → Zone DNS**, ces enregistrements pointent vers GitHub :

| Type | Nom | Valeur |
|---|---|---|
| A | aspirinecardiomusic.ch | 185.199.108.153 |
| A | aspirinecardiomusic.ch | 185.199.109.153 |
| A | aspirinecardiomusic.ch | 185.199.110.153 |
| A | aspirinecardiomusic.ch | 185.199.111.153 |
| CNAME | www | pdechoudens.github.io |

⚠️ **Ne supprimez pas ces lignes**, sinon le site ne sera plus accessible à cette adresse.

Les autres lignes de la zone (MX, SPF, DKIM, SRV, etc.) servent aux e-mails. Il faut les laisser telles quelles : elles permettront d'avoir des adresses du type `contact@aspirinecardiomusic.ch` si vous le souhaitez un jour.

### Le cadenas (HTTPS)

Le HTTPS, c'est le petit cadenas dans la barre d'adresse : il rassure les visiteurs et évite le message « site non sécurisé ». GitHub le fournit gratuitement. Il s'active dans **Settings → Pages → « Enforce HTTPS »**, et se renouvelle ensuite tout seul.

---

## Pourquoi pas « aspirinecardio.ch » ?

Les noms `aspirinecardio.ch` et `aspirine-cardio.ch` sont déjà pris. Ils appartiennent très probablement au laboratoire Bayer, qui vend un médicament appelé « Aspirin Cardio » et protège ainsi sa marque. D'où le choix de **aspirinecardiomusic.ch**.

---

## À renouveler

- **Le nom de domaine,** chez Infomaniak, avant octobre 2029. Pensez à activer le renouvellement automatique.
- **Le reste** est gratuit et ne demande rien.
