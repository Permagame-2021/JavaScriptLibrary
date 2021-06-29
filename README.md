# Javascript

[![Github Repository](https://img.shields.io/badge/Repository-Github-f5f5f5.svg)](https://github.com/Permagame-2021/js-bot/)

Clonez la librairie disponible au-dessus ! En voici quelques exemple d'utilisation.

## Authentification

```js
const HOST = "permagame.app.norsys.io";
const TOKEN = "your token here";
```

<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/login.png" title="login" className="otherImages">

Halte, qui va la ?<br/>
Je sais que vous avez hate de jardiner, mais il faut vous connecter !<br/>
Pour vous connecter cliquez sur l'onglet "Login" en haut à droite de cette fenêtre<br/>
Une fois connecté, il vous faut récuperer le token en cliquant sur "COPY TOKEN"<br/>
Et enfin vous pourez placer ce token dans le code juste au dessus à l'endroit indiqué.

## Fetch the Game

```js
const game = await Library.fetchGameState();
```

<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/fetchedGarden.png" title="fetchedgarden" className="fetchedGarden">

Vous pouvez maintenant analyser le l'état du jeu

<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/fertilizedSoil.png" title="parcel" className="otherImages" />

Ceci est une parcelle, et comme vous pouvez le voir elle est vide... <br/>
C'est bien triste une parcelle vide, ne serait-il pas possible de l'égayer un peu ?

## Plant

```js
await Library.plant(line, column, plantType);
```

<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/actionPlant.png" title="actionPlant" className="otherImages">

Vous effectuez bien une action sur case !<br/>
Voyons voir le resultat...

<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/plantGrowing.png" title="plantGrowing" className="otherImages">

Votre plante est en pleine croissance,<br/>
Et je peux même vous dire qu'il s'agira d'un maïs.

## Harvest

```js
await Library.harvest(line, column);
```

<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/actionHarvest.png" title="plantGrowing" className="otherImages">

Toute les bonnes choses ont une fin<br/>
Celle-ci était la fin heureuse

<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/plantDead.png" title="actionHarvest" className="otherImages">

Si vous tardez à récolter en revanche,<br/>
une fin plus tragique attend votre plante...

## Fertilize

```js
await Library.fetilize(line, column);
```

<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/fertilizedSoil.png" title="fertilizedSoil" className="otherImages">
<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/lessQualitySoil.png" title="lessQualitySoil" className="otherImages">

Pour pousser, une plante à besoin de nutriments qu'elle recupère dans le sol.<br/>
Cela en réduit la qualité allant de 100 à 0.

<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/plantDeadNoQuality.png" title="actionHarvest" className="otherImages">

Une plante se trouvant sur un sol de qualité nulle meurt.<br/>
Pour éviter cela, pensez à fertiliser les parcelles de temps en temps.

<img src="https://raw.githubusercontent.com/Permagame-2021/js-bot/master/screenshots/actionFertilize.png" title="actionFertilize" className="otherImages">

## Plant Types

```js
const plants = await Library.fetchPlants();
```

<img src="https://raw.githubusercontent.com/Permagame-2021/java-bot/master/screenshots/plants.png" title="plants" className="otherImages">

Vous pouvez Récuperer des informations génerales sur les plantes afin d'étudier leurs rendements, ou encore leurs Familles.

## Plant Families

```js
const plantFamilies = await Library.fetchFamilies();
```

Vous pouvez également récupérer les familles de plante et les plantes qui en font parties.

## Action List

```js
const actionList = await Library.fetchActionList();
```

Enfin vous pouvez récupérer les actions demandées sur le potager durant ce tour.
