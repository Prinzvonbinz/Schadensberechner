const mobs = [
  "Zombie", "Skelett", "Creeper", "Enderman", "Spinne", "Hexe", "Slime", "Magmacube", "Wither", "Enderdrache",
  "Eisengolem", "Schneegolem", "Drowned", "Husk", "Stray", "Blaze", "Piglin", "Zombified Piglin", "Warden", "Ravager",
  "Shulker", "Ghast", "Phantom", "Vindicator", "Evoker", "Pillager", "Guardian", "Elder Guardian"
];

const weapons = [
  "Holzschwert", "Steinschwert", "Eisenschwert", "Goldschwert", "Diamantschwert", "Netheritschwert",
  "Holzaxt", "Steinaxt", "Eisenaxt", "Goldaxt", "Diamantaxt", "Netheritaxt",
  "Bogen", "Armbrust", "Dreizack"
];

const weaponEnchantments = [
  "Keine", "Schärfe I", "Schärfe II", "Schärfe III", "Schärfe IV", "Schärfe V"
];

const armorTypes = ["Keine", "Leder", "Gold", "Kette", "Eisen", "Diamant", "Netherit"];
const armorEnchantments = ["Keine", "Schutz I", "Schutz II", "Schutz III", "Schutz IV"];

document.getElementById("attackerType").addEventListener("change", updateAttacker);
document.getElementById("defenderType").addEventListener("change", updateDefender);
document.getElementById("calculateBtn").addEventListener("click", calculateDamage);

function createSelect(labelText, id, options) {
  const label = document.createElement("label");
  label.innerText = labelText;
  const select = document.createElement("select");
  select.id = id;
  options.forEach(opt => {
    const o = document.createElement("option");
    o.text = opt;
    select.add(o);
  });
  label.appendChild(select);
  return label;
}

function updateAttacker() {
  const type = document.getElementById("attackerType").value;
  const container = document.getElementById("attackerOptions");
  container.innerHTML = "";
  if (type === "Spieler") {
    container.appendChild(createSelect("Waffe:", "attackerWeapon", weapons));
    container.appendChild(createSelect("Verzauberung:", "attackerEnchant", weaponEnchantments));
  } else {
    container.appendChild(createSelect("Mob:", "attackerMob", mobs));
  }
}

function updateDefender() {
  const type = document.getElementById("defenderType").value;
  const container = document.getElementById("defenderOptions");
  container.innerHTML = "";
  if (type === "Spieler") {
    container.appendChild(createSelect("Rüstung:", "defenderArmor", armorTypes));
    container.appendChild(createSelect("Verzauberung:", "defenderEnchant", armorEnchantments));
  } else {
    container.appendChild(createSelect("Mob:", "defenderMob", mobs));
  }
}

function calculateDamage() {
  const attackerType = document.getElementById("attackerType").value;
  const defenderType = document.getElementById("defenderType").value;

  let damage = 1;
  let defenderHP = defenderType === "Spieler" ? 20 : 40;

  if (attackerType === "Spieler") {
    const weapon = document.getElementById("attackerWeapon").value;
    const enchant = document.getElementById("attackerEnchant").value;
    damage = getWeaponBaseDamage(weapon) + getEnchantBonus(enchant);
  } else {
    damage = 3; // Standard Mob Schaden
  }

  if (defenderType === "Spieler") {
    const armor = document.getElementById("defenderArmor").value;
    const enchant = document.getElementById("defenderEnchant").value;
    const reduction = getArmorReduction(armor) + getEnchantReduction(enchant);
    damage = Math.max(0, damage - reduction);
  }

  const hitsToKill = Math.ceil(defenderHP / damage);

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("resultText").innerText =
    `Der Angreifer verursacht ca. ${damage.toFixed(1)} Schaden pro Treffer.\n` +
    `Der Verteidiger wird nach etwa ${hitsToKill} Treffer(n) besiegt.`;
}

function getWeaponBaseDamage(weapon) {
  const base = {
    "Holzschwert": 4, "Steinschwert": 5, "Eisenschwert": 6, "Goldschwert": 4,
    "Diamantschwert": 7, "Netheritschwert": 8,
    "Holzaxt": 7, "Steinaxt": 9, "Eisenaxt": 9, "Goldaxt": 7, "Diamantaxt": 9, "Netheritaxt": 10,
    "Bogen": 6, "Armbrust": 7, "Dreizack": 8
  };
  return base[weapon] || 1;
}

function getEnchantBonus(enchant) {
  if (enchant.startsWith("Schärfe")) {
    const level = parseInt(enchant.replace("Schärfe ", ""));
    return 1 + 0.5 * level;
  }
  return 0;
}

function getArmorReduction(armor) {
  const reduction = {
    "Keine": 0,
    "Leder": 2,
    "Gold": 2,
    "Kette": 3,
    "Eisen": 5,
    "Diamant": 7,
    "Netherit": 8
  };
  return reduction[armor] || 0;
}

function getEnchantReduction(enchant) {
  if (enchant.startsWith("Schutz")) {
    const level = parseInt(enchant.replace("Schutz ", ""));
    return level * 0.5;
  }
  return 0;
}

// Initialisierung
updateAttacker();
updateDefender();
