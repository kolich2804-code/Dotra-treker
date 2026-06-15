const heroesList = document.getElementById("heroesList");
const sortByNameBtn = document.getElementById("sortByName");
const sortByWinrateBtn = document.getElementById("sortByWinrate");
const searchInput = document.getElementById("searchInput");

const nameArrow = document.getElementById("nameArrow");
const winrateArrow = document.getElementById("winrateArrow");

let nameSortDirection = "asc";
let winrateSortDirection = "desc";

const heroes = [
  { name: "Spectre", winrate: 54.92 },
  { name: "Wraith King", winrate: 54.14 },
  { name: "Phantom Lancer", winrate: 53.43 },
  { name: "Axe", winrate: 53.33 },
  { name: "Legion Commander", winrate: 52.86 },
  { name: "Riki", winrate: 52.73 },
  { name: "Vengeful Spirit", winrate: 52.48 },
  { name: "Visage", winrate: 52.47 },
  { name: "Night Stalker", winrate: 52.40 },
  { name: "Necrophos", winrate: 52.31 },
  { name: "Nyx Assassin", winrate: 52.05 },
  { name: "Snapfire", winrate: 52.03 },
  { name: "Dawnbreaker", winrate: 52.01 },
  { name: "Undying", winrate: 51.91 },
  { name: "Lich", winrate: 51.90 },
  { name: "Bloodseeker", winrate: 51.86 },
  { name: "Shadow Shaman", winrate: 51.82 },
  { name: "Lifestealer", winrate: 51.75 },
  { name: "Grimstroke", winrate: 51.73 },
  { name: "Zeus", winrate: 51.55 },
  { name: "Juggernaut", winrate: 51.51 },
  { name: "Spirit Breaker", winrate: 51.49 },
  { name: "Bounty Hunter", winrate: 51.44 },
  { name: "Faceless Void", winrate: 51.38 },
  { name: "Witch Doctor", winrate: 51.30 },
  { name: "Crystal Maiden", winrate: 51.29 },
  { name: "Abaddon", winrate: 51.25 },
  { name: "Drow Ranger", winrate: 51.12 },
  { name: "Silencer", winrate: 51.12 },
  { name: "Phantom Assassin", winrate: 51.11 },
  { name: "Troll Warlord", winrate: 51.11 },
  { name: "Invoker", winrate: 51.11 },
  { name: "Dazzle", winrate: 51.10 },
  { name: "Techies", winrate: 51.08 },
  { name: "Sniper", winrate: 50.99 },
  { name: "Slardar", winrate: 50.96 },
  { name: "Phoenix", winrate: 50.94 },
  { name: "Earth Spirit", winrate: 50.94 },
  { name: "Keeper of the Light", winrate: 50.94 },
  { name: "Brewmaster", winrate: 50.79 },
  { name: "Mirana", winrate: 50.71 },
  { name: "Lone Druid", winrate: 50.69 },
  { name: "Bane", winrate: 50.69 },
  { name: "Pudge", winrate: 50.60 },
  { name: "Io", winrate: 50.59 },
  { name: "Ancient Apparition", winrate: 50.59 },
  { name: "Meepo", winrate: 50.52 },
  { name: "Elder Titan", winrate: 50.41 },
  { name: "Naga Siren", winrate: 50.40 },
  { name: "Tidehunter", winrate: 50.29 },
  { name: "Oracle", winrate: 50.26 },
  { name: "Ogre Magi", winrate: 50.25 },
  { name: "Omniknight", winrate: 50.24 },
  { name: "Chaos Knight", winrate: 50.22 },
  { name: "Centaur Warrunner", winrate: 50.22 },
  { name: "Arc Warden", winrate: 50.22 },
  { name: "Clockwerk", winrate: 50.21 },
  { name: "Skywrath Mage", winrate: 49.97 },
  { name: "Clinkz", winrate: 49.89 },
  { name: "Broodmother", winrate: 49.88 },
  { name: "Medusa", winrate: 49.86 },
  { name: "Earthshaker", winrate: 49.82 },
  { name: "Winter Wyvern", winrate: 49.82 },
  { name: "Enigma", winrate: 49.69 },
  { name: "Lion", winrate: 49.67 },
  { name: "Bristleback", winrate: 49.65 },
  { name: "Underlord", winrate: 49.58 },
  { name: "Rubick", winrate: 49.58 },
  { name: "Warlock", winrate: 49.49 },
  { name: "Treant Protector", winrate: 49.43 },
  { name: "Sven", winrate: 49.41 },
  { name: "Pugna", winrate: 49.40 },
  { name: "Slark", winrate: 49.35 },
  { name: "Luna", winrate: 49.29 },
  { name: "Disruptor", winrate: 49.28 },
  { name: "Void Spirit", winrate: 49.16 },
  { name: "Outworld Destroyer", winrate: 49.12 },
  { name: "Razor", winrate: 49.08 },
  { name: "Magnus", winrate: 49.06 },
  { name: "Kunkka", winrate: 49.04 },
  { name: "Dark Seer", winrate: 48.98 },
  { name: "Leshrac", winrate: 48.97 },
  { name: "Lycan", winrate: 48.90 },
  { name: "Anti-Mage", winrate: 48.84 },
  { name: "Dragon Knight", winrate: 48.79 },
  { name: "Enchantress", winrate: 48.79 },
  { name: "Ember Spirit", winrate: 48.75 },
  { name: "Shadow Fiend", winrate: 48.75 },
  { name: "Lina", winrate: 48.69 },
  { name: "Hoodwink", winrate: 48.56 },
  { name: "Marci", winrate: 48.50 },
  { name: "Primal Beast", winrate: 48.42 },
  { name: "Tusk", winrate: 48.28 },
  { name: "Viper", winrate: 48.22 },
  { name: "Ringmaster", winrate: 48.19 },
  { name: "Windranger", winrate: 48.11 },
  { name: "Largo", winrate: 47.99 },
  { name: "Terrorblade", winrate: 47.69 },
  { name: "Huskar", winrate: 47.64 },
  { name: "Dark Willow", winrate: 47.63 },
  { name: "Sand King", winrate: 47.57 },
  { name: "Morphling", winrate: 47.49 },
  { name: "Death Prophet", winrate: 47.48 },
  { name: "Alchemist", winrate: 47.44 },
  { name: "Puck", winrate: 47.38 },
  { name: "Tinker", winrate: 47.32 },
  { name: "Storm Spirit", winrate: 47.26 },
  { name: "Doom", winrate: 47.21 },
  { name: "Jakiro", winrate: 47.13 },
  { name: "Muerta", winrate: 47.06 },
  { name: "Chen", winrate: 46.94 },
  { name: "Venomancer", winrate: 46.77 },
  { name: "Ursa", winrate: 46.76 },
  { name: "Pangolier", winrate: 46.68 },
  { name: "Weaver", winrate: 46.61 },
  { name: "Kez", winrate: 46.16 },
  { name: "Queen of Pain", winrate: 46.07 },
  { name: "Templar Assassin", winrate: 45.97 },
  { name: "Mars", winrate: 45.34 },
  { name: "Shadow Demon", winrate: 45.32 },
  { name: "Tiny", winrate: 45.18 },
  { name: "Beastmaster", winrate: 45.15 },
  { name: "Monkey King", winrate: 44.89 },
  { name: "Timbersaw", winrate: 44.65 },
  { name: "Batrider", winrate: 44.11 },
  { name: "Nature's Prophet", winrate: 43.51 },
  { name: "Gyrocopter", winrate: 43.29 }
];

let currentHeroes = [...heroes];

function renderHeroes(list) {
  heroesList.innerHTML = "";

  if (list.length === 0) {
    heroesList.innerHTML = `<div class="no-result">Героя не знайдено</div>`;
    return;
  }

  list.forEach(hero => {
    const card = document.createElement("div");
    card.className = "hero-card";

    card.innerHTML = `
      <h3>${hero.name}</h3>
      <p>Winrate: <span>${hero.winrate.toFixed(2)}%</span></p>
    `;

    heroesList.appendChild(card);
  });
}

function searchHeroes() {
  const searchText = searchInput.value.toLowerCase().trim();

  currentHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(searchText)
  );

  renderHeroes(currentHeroes);
}

sortByNameBtn.addEventListener("click", () => {
  currentHeroes.sort((a, b) => {
    if (nameSortDirection === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  if (nameSortDirection === "asc") {
    nameSortDirection = "desc";
    nameArrow.textContent = "↓";
  } else {
    nameSortDirection = "asc";
    nameArrow.textContent = "↑";
  }

  renderHeroes(currentHeroes);
});

sortByWinrateBtn.addEventListener("click", () => {
  currentHeroes.sort((a, b) => {
    if (winrateSortDirection === "desc") {
      return b.winrate - a.winrate;
    } else {
      return a.winrate - b.winrate;
    }
  });

  if (winrateSortDirection === "desc") {
    winrateSortDirection = "asc";
    winrateArrow.textContent = "↑";
  } else {
    winrateSortDirection = "desc";
    winrateArrow.textContent = "↓";
  }

  renderHeroes(currentHeroes);
});

searchInput.addEventListener("input", searchHeroes);

renderHeroes(currentHeroes);