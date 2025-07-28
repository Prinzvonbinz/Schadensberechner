// --- Datenbasis ---

const mobs = {
  spieler: {
    name: "Spieler",
    hp: 20,
    baseDamage: 1, // hängt von Waffe ab
    defaultWeapon: null,
    armorSlots: 4
  },
  zombie: {
    name: "Zombie",
    hp: 20,
    baseDamage: 3,
    defaultWeapon: "Holzschwert",
    armorSlots: 4
  },
  skelett: {
    name: "Skelett",
    hp: 20,
    baseDamage: 3,
    defaultWeapon: "Bogen",
    armorSlots: 4
  },
  creeper: {
    name: "Creeper",
    hp: 20,
    baseDamage: 49, // Explosion approx.
    defaultWeapon: null,
    armorSlots: 0
  },
  enderman: {
    name: "Enderman",
    hp: 40,
    baseDamage: 7,
    defaultWeapon: null,
    armorSlots: 4
  },
  spinne: {
    name: "Spinne",
    hp: 16,
    baseDamage: 2,
    defaultWeapon: null,
    armorSlots: 0
  },
  hexe: {
    name: "Hexe",
    hp: 26,
    baseDamage: 6,
    defaultWeapon: null,
    armorSlots: 0
  },
  slime: {
    name: "Slime",
    hp: 16,
    baseDamage: 2,
    defaultWeapon: null,
    armorSlots: 0
  },
  magmacube: {
    name: "Magmacube",
    hp: 16,
    baseDamage: 2,
    defaultWeapon: null,
    armorSlots: 0
  },
  wither: {
    name: "Wither",
    hp: 300,
    baseDamage: 15,
    defaultWeapon: null,
    armorSlots: 0
  },
  enderdrache: {
    name: "Enderdrache",
    hp: 200,
    baseDamage: 10,
    defaultWeapon: null,
    armorSlots: 0
  },
  eisengolem: {
    name: "Eisengolem",
    hp: 100,
    baseDamage: 7,
    defaultWeapon: null,
    armorSlots: 0
  },
  schneegolem: {
    name: "Schneegolem",
    hp: 4,
    baseDamage: 2,
    defaultWeapon: null,
    armorSlots: 0
  },
  drowned: {
    name: "Drowned",
    hp: 20,
    baseDamage: 3,
    defaultWeapon: "Steinschwert",
    armorSlots: 4
  },
  husk: {
    name: "Husk",
    hp: 20,
    baseDamage: 3,
    defaultWeapon: "Holzschwert",
    armorSlots: 4
  },
  stray: {
    name: "Stray",
    hp: 20,
    baseDamage: 3,
    defaultWeapon: "Bogen",
    armorSlots: 4
  },
  blaze: {
    name: "Blaze",
    hp: 20,
    baseDamage: 6,
    defaultWeapon: null,
    armorSlots: 0
  },
  piglin: {
    name: "Piglin",
    hp: 20,
    baseDamage: 4,
    defaultWeapon: "Goldschwert",
    armorSlots: 4
  },
  zombifiedPiglin: {
    name: "Zombified Piglin",
    hp: 20,
    baseDamage: 3,
    defaultWeapon: "Goldschwert",
    armorSlots: 4
  },
  warden: {
    name: "Warden",
    hp: 250,
    baseDamage: 30,
    defaultWeapon: null,
    armorSlots: 0
  },
  ravager: {
    name: "Ravager",
    hp: 100,
    baseDamage: 12,
    defaultWeapon: null,
    armorSlots: 0
  },
  shulker: {
    name: "Shulker",
    hp: 30,
    baseDamage: 4,
    defaultWeapon: null,
    armorSlots: 0
  },
  ghast: {
    name: "Ghast",
    hp: 10,
    baseDamage: 17,
    defaultWeapon: null,
    armorSlots: 0
  },
  phantom: {
    name: "Phantom",
    hp: 20,
    baseDamage: 5,
    defaultWeapon: null,
    armorSlots: 0
  },
  vindicator: {
    name: "Vindicator",
    hp: 24,
    baseDamage: 5,
    defaultWeapon: "Eisenschwert",
    armorSlots: 4
  },
  evoker: {
    name: "Evoker",
    hp: 24,
    baseDamage: 6,
    defaultWeapon: null,
    armorSlots: 0
  },
  pillager: {
    name: "Pillager",
    hp: 24,
    baseDamage: 5,
    defaultWeapon: "Steinschwert",
    armorSlots: 4
  },
  guardian: {
    name: "Guardian",
    hp: 30,
    baseDamage: 8,
    defaultWeapon: null,
    armorSlots: 0
  },
  elderGuardian: {
    name: "Elder Guardian",
    hp: 80,
    baseDamage: 10,
    defaultWeapon: null,
    armorSlots: 0
  }
};

// Waffen + Grundschaden
const weapons = {
  "Keine": 1,
  "Holzschwert": 4,
  "Steinschwert": 5,
  "Eisenschwert": 6,
  "Goldschwert": 4,
  "Diamantschwert": 7,
  "Netheritschwert": 8,
  "Holzaxt": 7,
  "Steinaxt": 9,
  "Eisenaxt": 9,
  "Goldaxt": 7,
  "Diamantaxt": 9,
  "Netheritaxt": 10,
  "Bogen": 5,
  "Armbrust": 6,
  "Dreizack": 8
};

// Waffenzauber und ihr Schadenbonus (nur Schärfe und Bann berechnet)
const weaponEnchantments = {
  "Keine": 0,
  "Schärfe I": 1.25,
  "Schärfe II": 2.5,
  "Schärfe III": 3.75,
  "Schärfe IV": 5,
  "Schärfe V": 6.25,
  "Bann I": 1,
  "Bann II": 2,
  "Bann III": 3,
  "Bann IV": 4,
  "Bann V": 5
};

// Rüstungen + Schutzpunkte (Punkte für Rüstungsschutz)
const armorTypes = {
  "Keine": 0,
  "Leder": 7,
  "Gold": 7,
  "Kette": 12,
  "Eisen": 15,
  "Diamant": 20,
  "Netherit": 20
};

// Rüstungsverzauberungen (Schutzzauber; nur Schutz I-IV, Feuerschutz etc. noch nicht berücksichtigt)
const armorEnchantments = {
  "Keine": 0,
  "Schutz I": 1,
  "Schutz II": 2,
  "Schutz III": 3,
  "Schutz IV": 4,
  "Feuerschutz I": 1,
  "Feuerschutz II": 2,
  "Feuerschutz III": 3,
  "Feuerschutz IV": 4,
  "Explosionsschutz I": 1,
  "Explosionsschutz II": 2,
  // --- Fortsetzung armorEnchantments ---
  "Explosionsschutz III": 3,
  "Explosionsschutz IV": 4,
  "Schusssicher I": 1,
  "Schusssicher II": 2,
  "Schusssicher III": 3,
  "Schusssicher IV": 4,
  "Dornen I": 1,
  "Dornen II": 2,
  "Dornen III": 3
};

// Tränke / Effekte (Modifier auf Schaden und Schutz)
const potionEffects = {
  "Keine": {damageMod: 1, armorMod: 1},
  "Stärke I": {damageMod: 1.3, armorMod: 1},
  "Stärke II": {damageMod: 1.6, armorMod: 1},
  "Resistenz I": {damageMod: 1, armorMod: 0.8},
  "Resistenz II": {damageMod: 1, armorMod: 0.6}
};

// Hilfsfunktionen

// Erzeuge Select mit Optionen
function createSelect(id, labelText, options) {
  const wrapper = document.createElement("label");
  wrapper.innerText = labelText;
  const select = document.createElement("select");
  select.id = id;
  select.style.marginTop = "4px";
  options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt;
    option.text = opt;
    select.appendChild(option);
  });
  wrapper.appendChild(select);
  return wrapper;
}

// Aktualisiere Angreifer-Optionen
function updateAttacker() {
  const type = document.getElementById("attackerType").value;
  const container = document.getElementById("attackerOptions");
  container.innerHTML = "";
  if (type === "spieler") {
    container.appendChild(createSelect("attackerMob", "Mob:", ["Spieler"]));
  } else {
    container.appendChild(createSelect("attackerMob", "Mob:", Object.keys(mobs).map(k => mobs[k].name)));
  }
  container.appendChild(createSelect("attackerWeapon", "Waffe:", Object.keys(weapons)));
  container.appendChild(createSelect("attackerWeaponEnchant", "Waffen-Verzauberung:", Object.keys(weaponEnchantments)));
  container.appendChild(createSelect("attackerArmor", "Rüstung:", Object.keys(armorTypes)));
  container.appendChild(createSelect("attackerArmorEnchant", "Rüstungs-Verzauberung:", Object.keys(armorEnchantments)));
  container.appendChild(createSelect("attackerPotion", "Trank-Effekt:", Object.keys(potionEffects)));
}

// Aktualisiere Verteidiger-Optionen
function updateDefender() {
  const type = document.getElementById("defenderType").value;
  const container = document.getElementById("defenderOptions");
  container.innerHTML = "";
  if (type === "spieler") {
    container.appendChild(createSelect("defenderMob", "Mob:", ["Spieler"]));
  } else {
    container.appendChild(createSelect("defenderMob", "Mob:", Object.keys(mobs).map(k => mobs[k].name)));
  }
  container.appendChild(createSelect("defenderWeapon", "Waffe:", Object.keys(weapons)));
  container.appendChild(createSelect("defenderWeaponEnchant", "Waffen-Verzauberung:", Object.keys(weaponEnchantments)));
  container.appendChild(createSelect("defenderArmor", "Rüstung:", Object.keys(armorTypes)));
  container.appendChild(createSelect("defenderArmorEnchant", "Rüstungs-Verzauberung:", Object.keys(armorEnchantments)));
  container.appendChild(createSelect("defenderPotion", "Trank-Effekt:", Object.keys(potionEffects)));
}

// Schaden berechnen
function calculateDamage() {
  // Angreifer-Daten
  const attackerMobName = document.getElementById("attackerMob").value;
  const attackerWeaponName = document.getElementById("attackerWeapon").value;
  const attackerWeaponEnchant = document.getElementById("attackerWeaponEnchant").value;
  const attackerArmorName = document.getElementById("attackerArmor").value;
  const attackerArmorEnchant = document.getElementById("attackerArmorEnchant").value;
  const attackerPotionName = document.getElementById("attackerPotion").value;

  // Verteidiger-Daten
  const defenderMobName = document.getElementById("defenderMob").value;
  const defenderWeaponName = document.getElementById("defenderWeapon").value;
  const defenderWeaponEnchant = document.getElementById("defenderWeaponEnchant").value;
  const defenderArmorName = document.getElementById("defenderArmor").value;
  const defenderArmorEnchant = document.getElementById("defenderArmorEnchant").value;
  const defenderPotionName = document.getElementById("defenderPotion").value;

  // Hole Mob-Objekte
  const attackerMob = getMobByName(attackerMobName);
  const defenderMob = getMobByName(defenderMobName);

  // Grundwerte
  let attackerBaseDamage = weapons[attackerWeaponName] || 1;
  attackerBaseDamage += weaponEnchantments[attackerWeaponEnchant] || 0;
  attackerBaseDamage *= potionEffects[attackerPotionName].damageMod;

  let defenderArmorPoints = armorTypes[defenderArmorName] || 0;
  defenderArmorPoints += armorEnchantments[defenderArmorEnchant] || 0;
  defenderArmorPoints *= potionEffects[defenderPotionName].armorMod;

  // Rüstungsschutz Formel Minecraft (vereinfacht):
  // Schadensreduktion = min(20, armor) / 25
  let armorProtectionRatio = Math.min(20, defenderArmorPoints) / 25;

  // Schaden nach Rüstung
  let damageAfterArmor = attackerBaseDamage * (1 - armorProtectionRatio);

  // Leben Verteidiger
  const defenderHP = defenderMob ? defenderMob.hp : 20;

  // Treffer bis Tod (aufrunden)
  const hitsToKill = Math.ceil(defenderHP / damageAfterArmor);

  // Ergebnis anzeigen
  const resultText = 
`Angreifer: ${attackerMobName}
- Waffe: ${attackerWeaponName} (+${weaponEnchantments[attackerWeaponEnchant]} Schaden)
- Trank-Effekt: ${attackerPotionName}
- Angriffsschade insgesamt: ${attackerBaseDamage.toFixed(2)}

Verteidiger: ${defenderMobName}
- Rüstung: ${defenderArmorName} (+${armorEnchantments[defenderArmorEnchant]} Rüstungspunkte)
- Trank-Effekt: ${defenderPotionName}
- Schadenreduktion durch Rüstung: ${(armorProtectionRatio*100).toFixed(1)}%
- Schaden nach Rüstungsschutz: ${damageAfterArmor.toFixed(2)}
- Leben: ${defenderHP}

Treffer bis Verteidiger besiegt: ${hitsToKill}`;

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("resultText").innerText = resultText;
}

// Hilfsfunktion: Mob-Objekt von Namen holen (mit Kleinbuchstaben)
function getMobByName(name) {
  name = name.toLowerCase();
  for (const key in mobs) {
    if (mobs[key].name.toLowerCase() === name) return mobs[key];
  }
  // Wenn nicht gefunden (z.B. Spieler), zurück Spieler
  if(name === "spieler") return mobs.spieler;
  return null;
}

// Initial setup
document.getElementById("attackerType").addEventListener("change", updateAttacker);
document.getElementById("defenderType").addEventListener("change", updateDefender);
document.getElementById("calculateBtn").addEventListener("click", calculateDamage);

updateAttacker();
updateDefender();
