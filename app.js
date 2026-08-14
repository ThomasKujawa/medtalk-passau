/*
  Grundidee:
  - contentItems enthält die Inhalte, jeweils mit zwei Varianten.
  - Für jedes Item wird eine Zahl vergeben.
  - Zu jeder Zahl werden zwei Buttons erzeugt (hell/dunkel) und zufällig im Spielfeld verteilt.
  - Klick auf einen Button öffnet das Modal mit einer Variante.
  - Zusätzlich wird bei jedem Öffnen ein zufälliges Icon aus dem Sprite gewählt.
*/

const contentItems = [
  {
    id: 1,
    sprite: "fall1",
    variants: [
      {
        label: "pAVK (Kurzversion)",
        author: "Autor: unbekannt",
        text: "58-jähriger Mann mit belastungsabhängigen Schmerzen im rechten Unterschenkel, die ihn nach ca. 150 Metern zum Stehenbleiben zwingen (Schaufensterkrankheit).",
        link: "case/fall1_kurz.pdf"
      },
      {
        label: "pAVK (Langversion)",
        author: "Autor: unbekannt",
        text: "58-jähriger Mann mit belastungsabhängigen Schmerzen im rechten Unterschenkel, die ihn nach ca. 150 Metern zum Stehenbleiben zwingen (Schaufensterkrankheit).",
        link: "case/fall1_lang.pdf"
      }
    ]
  },
  {
    id: 2,
    sprite: "fall2",
    variants: [
      {
        label: "Akute Appendizitis (Kurzversion)",
        author: "Autor: unbekannt",
        text: "24-jährige Frau mit seit 12 Stunden zunehmenden Bauchschmerzen im rechten Unterbauch, Übelkeit, Erbrechen und Fieber.",
        link: "case/fall2_kurz.pdf"
      },
      {
        label: "Akute Appendizitis (Langversion)",
        author: "Autor: unbekannt",
        text: "24-jährige Frau mit seit 12 Stunden zunehmenden Bauchschmerzen im rechten Unterbauch, Übelkeit, Erbrechen und Fieber.",
        link: "case/fall2_lang.pdf"
      }
    ]
  },
  {
    id: 3,
    sprite: "fall3",
    variants: [
      {
        label: "Pneumonie (Kurzversion)",
        author: "Autor: unbekannt",
        text: "45-jähriger Mann mit seit 5 Tagen produktivem Husten, Fieber, Schüttelfrost und stechenden Brustschmerzen rechts beim Einatmen.",
        link: "case/fall3_kurz.pdf"
      },
      {
        label: "Pneumonie (Langversion)",
        author: "Autor: unbekannt",
        text: "45-jähriger Mann mit seit 5 Tagen produktivem Husten, Fieber, Schüttelfrost und stechenden Brustschmerzen rechts beim Einatmen.",
        link: "case/fall3_lang.pdf"
      }
    ]
  },
  {
    id: 4,
    sprite: "fall4",
    variants: [
      {
        label: "Akute COPD-Exazerbation (Kurzversion)",
        author: "Autor: unbekannt",
        text: "68-jähriger Mann mit seit 4 Tagen verschlechterter Luftnot, pfeifender Atmung und gelblichem Auswurf bei bekannter COPD.",
        link: "case/fall4_kurz.pdf"
      },
      {
        label: "Akute COPD-Exazerbation (Langversion)",
        author: "Autor: unbekannt",
        text: "68-jähriger Mann mit seit 4 Tagen verschlechterter Luftnot, pfeifender Atmung und gelblichem Auswurf bei bekannter COPD.",
        link: "case/fall4_lang.pdf"
      }
    ]
  },
  {
    id: 5,
    sprite: "fall5",
    variants: [
      {
        label: "Dekompensierte Herzinsuffizienz (Kurzversion)",
        author: "Autor: unbekannt",
        text: "74-jährige Frau mit seit 2 Wochen zunehmender Atemnot in Ruhe, Beinödemen und einer Gewichtszunahme von 3 kg innerhalb einer Woche.",
        link: "case/fall5_kurz.pdf"
      },
      {
        label: "Dekompensierte Herzinsuffizienz (Langversion)",
        author: "Autor: unbekannt",
        text: "74-jährige Frau mit seit 2 Wochen zunehmender Atemnot in Ruhe, Beinödemen und einer Gewichtszunahme von 3 kg innerhalb einer Woche.",
        link: "case/fall5_lang.pdf"
      }
    ]
  },
  {
    id: 6,
    sprite: "fall6",
    variants: [
      {
        label: "Akute Cholezystitis / Gallenkolik (Kurzversion)",
        author: "Autor: unbekannt",
        text: "49-jährige Frau mit seit dem Vorabend starken, kolikartigen Oberbauchschmerzen mit Ausstrahlung in Rücken und rechte Schulter, Übelkeit und Fieber.",
        link: "case/fall6_kurz.pdf"
      },
      {
        label: "Akute Cholezystitis / Gallenkolik (Langversion)",
        author: "Autor: unbekannt",
        text: "49-jährige Frau mit seit dem Vorabend starken, kolikartigen Oberbauchschmerzen mit Ausstrahlung in Rücken und rechte Schulter, Übelkeit und Fieber.",
        link: "case/fall6_lang.pdf"
      }
    ]
  },
  {
    id: 7,
    sprite: "fall7",
    variants: [
      {
        label: "Urolithiasis / Nierenkolik (Kurzversion)",
        author: "Autor: unbekannt",
        text: "39-jähriger Mann mit plötzlich einsetzenden, wellenförmigen Flankenschmerzen rechts mit Ausstrahlung in die Leiste, Übelkeit und blutigem Urin.",
        link: "case/fall7_kurz.pdf"
      },
      {
        label: "Urolithiasis / Nierenkolik (Langversion)",
        author: "Autor: unbekannt",
        text: "39-jähriger Mann mit plötzlich einsetzenden, wellenförmigen Flankenschmerzen rechts mit Ausstrahlung in die Leiste, Übelkeit und blutigem Urin.",
        link: "case/fall7_lang.pdf"
      }
    ]
  },
  {
    id: 8,
    sprite: "fall8",
    variants: [
      {
        label: "Hyperglykämische Entgleisung bei Diabetes mellitus (Kurzversion)",
        author: "Autor: unbekannt",
        text: "56-jährige Frau mit seit mehreren Tagen starkem Durst, häufigem Wasserlassen, Müdigkeit und seit heute Schwindel und Benommenheit.",
        link: "case/fall8_kurz.pdf"
      },
      {
        label: "Hyperglykämische Entgleisung bei Diabetes mellitus (Langversion)",
        author: "Autor: unbekannt",
        text: "56-jährige Frau mit seit mehreren Tagen starkem Durst, häufigem Wasserlassen, Müdigkeit und seit heute Schwindel und Benommenheit.",
        link: "case/fall8_lang.pdf"
      }
    ]
  },
  {
    id: 9,
    sprite: "fall9",
    variants: [
      {
        label: "Depression mit Suizidgedanken (Kurzversion)",
        author: "Autor: unbekannt",
        text: "32-jähriger Mann mit seit Wochen anhaltender gedrückter Stimmung, Antriebslosigkeit, Schlafstörungen und aktuellen Suizidgedanken.",
        link: "case/fall9_kurz.pdf"
      },
      {
        label: "Depression mit Suizidgedanken (Langversion)",
        author: "Autor: unbekannt",
        text: "32-jähriger Mann mit seit Wochen anhaltender gedrückter Stimmung, Antriebslosigkeit, Schlafstörungen und aktuellen Suizidgedanken.",
        link: "case/fall9_lang.pdf"
      }
    ]
  },
  {
    id: 10,
    sprite: "fall10",
    variants: [
      {
        label: "Generalisierte Angststörung / Panikattacken (Kurzversion)",
        author: "Autor: unbekannt",
        text: "29-jährige Frau mit seit Monaten täglicher innerer Unruhe, wiederholten Panikattacken mit Herzrasen und Atemnot sowie zunehmender Vermeidung sozialer Situationen.",
        link: "case/fall10_kurz.pdf"
      },
      {
        label: "Generalisierte Angststörung / Panikattacken (Langversion)",
        author: "Autor: unbekannt",
        text: "29-jährige Frau mit seit Monaten täglicher innerer Unruhe, wiederholten Panikattacken mit Herzrasen und Atemnot sowie zunehmender Vermeidung sozialer Situationen.",
        link: "case/fall10_lang.pdf"
      }
    ]
  },
  {
    id: 11,
    sprite: "fall11",
    variants: [
      {
        label: "Schlaganfall / TIA (Kurzversion)",
        author: "Autor: unbekannt",
        text: "71-jähriger Mann mit plötzlich aufgetretener Schwäche und Taubheit in der rechten Körperhälfte, hängendem Mundwinkel und verwaschener Sprache.",
        link: "case/fall11_kurz.pdf"
      },
      {
        label: "Schlaganfall / TIA (Langversion)",
        author: "Autor: unbekannt",
        text: "71-jähriger Mann mit plötzlich aufgetretener Schwäche und Taubheit in der rechten Körperhälfte, hängendem Mundwinkel und verwaschener Sprache.",
        link: "case/fall11_lang.pdf"
      }
    ]
  },
  {
    id: 12,
    sprite: "fall12",
    variants: [
      {
        label: "Lumbale Radikulopathie / Bandscheibenvorfall (Kurzversion)",
        author: "Autor: unbekannt",
        text: "48-jährige Frau mit seit 2 Wochen starken Rückenschmerzen mit Ausstrahlung über das rechte Gesäß bis in den Fuß sowie Kribbelgefühl im rechten Bein.",
        link: "case/fall12_kurz.pdf"
      },
      {
        label: "Lumbale Radikulopathie / Bandscheibenvorfall (Langversion)",
        author: "Autor: unbekannt",
        text: "48-jährige Frau mit seit 2 Wochen starken Rückenschmerzen mit Ausstrahlung über das rechte Gesäß bis in den Fuß sowie Kribbelgefühl im rechten Bein.",
        link: "case/fall12_lang.pdf"
      }
    ]
  },
  {
    id: 13,
    sprite: "fall13",
    variants: [
      {
        label: "Gonarthrose mit Belastungsschmerz (Kurzversion)",
        author: "Autor: unbekannt",
        text: "67-jährige Frau mit seit Jahren zunehmenden Schmerzen im rechten Knie beim Gehen und Treppensteigen, morgendlicher Steifigkeit und gelegentlicher Schwellung.",
        link: "case/fall13_kurz.pdf"
      },
      {
        label: "Gonarthrose mit Belastungsschmerz (Langversion)",
        author: "Autor: unbekannt",
        text: "67-jährige Frau mit seit Jahren zunehmenden Schmerzen im rechten Knie beim Gehen und Treppensteigen, morgendlicher Steifigkeit und gelegentlicher Schwellung.",
        link: "case/fall13_lang.pdf"
      }
    ]
  },
  {
    id: 14,
    sprite: "fall14",
    variants: [
      {
        label: "Zystitis / Pyelonephritis (Kurzversion)",
        author: "Autor: unbekannt",
        text: "36-jährige Frau mit seit 2 Tagen Brennen beim Wasserlassen und Unterbauchschmerzen, seit heute zusätzlich Flankenschmerzen rechts und Fieber.",
        link: "case/fall14_kurz.pdf"
      },
      {
        label: "Zystitis / Pyelonephritis (Langversion)",
        author: "Autor: unbekannt",
        text: "36-jährige Frau mit seit 2 Tagen Brennen beim Wasserlassen und Unterbauchschmerzen, seit heute zusätzlich Flankenschmerzen rechts und Fieber.",
        link: "case/fall14_lang.pdf"
      }
    ]
  },
  {
    id: 15,
    sprite: "fall15",
    variants: [
      {
        label: "Hyperemesis gravidarum (Kurzversion)",
        author: "Autor: unbekannt",
        text: "27-jährige Schwangere (9. SSW) mit seit 2 Wochen starker Übelkeit, mehrmals täglichem Erbrechen, Gewichtsverlust und Schwäche.",
        link: "case/fall15_kurz.pdf"
      },
      {
        label: "Hyperemesis gravidarum (Langversion)",
        author: "Autor: unbekannt",
        text: "27-jährige Schwangere (9. SSW) mit seit 2 Wochen starker Übelkeit, mehrmals täglichem Erbrechen, Gewichtsverlust und Schwäche.",
        link: "case/fall15_lang.pdf"
      }
    ]
  },
  {
    id: 16,
    sprite: "fall16",
    variants: [
      {
        label: "Akuter Myokardinfarkt (Kurzversion)",
        author: "Autor: unbekannt",
        text: "63-jähriger Mann mit plötzlich einsetzenden, anhaltenden Brustschmerzen mit Ausstrahlung in den linken Arm, Atemnot, Schweißausbruch und Todesangst.",
        link: "case/fall16_kurz.pdf"
      },
      {
        label: "Akuter Myokardinfarkt (Langversion)",
        author: "Autor: unbekannt",
        text: "63-jähriger Mann mit plötzlich einsetzenden, anhaltenden Brustschmerzen mit Ausstrahlung in den linken Arm, Atemnot, Schweißausbruch und Todesangst.",
        link: "case/fall16_lang.pdf"
      }
    ]
  },
  {
    id: 17,
    sprite: "fall17",
    variants: [
      {
        label: "Ulcus ventriculi (Kurzversion)",
        author: "Autor: unbekannt",
        text: "57-jähriger Mann mit seit 3 Wochen starken Oberbauchschmerzen, kaffeesatzartigem Erbrechen, Teerstuhl und Gewichtsverlust bei langjährigem NSAR-Gebrauch.",
        link: "case/fall17_kurz.pdf"
      },
      {
        label: "Ulcus ventriculi (Langversion)",
        author: "Autor: unbekannt",
        text: "57-jähriger Mann mit seit 3 Wochen starken Oberbauchschmerzen, kaffeesatzartigem Erbrechen, Teerstuhl und Gewichtsverlust bei langjährigem NSAR-Gebrauch.",
        link: "case/fall17_lang.pdf"
      }
    ]
  },
  {
    id: 18,
    sprite: "fall18",
    variants: [
      {
        label: "Lumbale Radikulopathie / Bandscheibenvorfall L5 (Kurzversion)",
        author: "Autor: unbekannt",
        text: "49-jährige Frau mit seit gestern plötzlich einschießenden Rückenschmerzen nach Heben einer Last, Ausstrahlung in das rechte Bein bis zur kleinen Zehe und Kribbelgefühl.",
        link: "case/fall18_kurz.pdf"
      },
      {
        label: "Lumbale Radikulopathie / Bandscheibenvorfall L5 (Langversion)",
        author: "Autor: unbekannt",
        text: "49-jährige Frau mit seit gestern plötzlich einschießenden Rückenschmerzen nach Heben einer Last, Ausstrahlung in das rechte Bein bis zur kleinen Zehe und Kribbelgefühl.",
        link: "case/fall18_lang.pdf"
      }
    ]
  },
  {
    id: 19,
    sprite: "fall19",
    variants: [
      {
        label: "Hodgkin-Lymphom (Kurzversion)",
        author: "Autor: unbekannt",
        text: "78-jähriger Mann mit seit anderthalb Wochen schmerzlosen Halsschwellungen, Fieber bis 39,4 °C, starkem Nachtschweiß und ausgeprägter Abgeschlagenheit.",
        link: "case/fall19_kurz.pdf"
      },
      {
        label: "Hodgkin-Lymphom (Langversion)",
        author: "Autor: unbekannt",
        text: "78-jähriger Mann mit seit anderthalb Wochen schmerzlosen Halsschwellungen, Fieber bis 39,4 °C, starkem Nachtschweiß und ausgeprägter Abgeschlagenheit.",
        link: "case/fall19_lang.pdf"
      }
    ]
  },
  {
    id: 20,
    sprite: "fall20",
    variants: [
      {
        label: "Radiusfraktur (Kurzversion)",
        author: "Autor: unbekannt",
        text: "53-jähriger Mann nach Motorradsturz mit stark geschwollenem rechten Handgelenk, bewegungsabhängigen Handgelenkschmerzen und Brustschmerzen beim Einatmen.",
        link: "case/fall20_kurz.pdf"
      },
      {
        label: "Radiusfraktur (Langversion)",
        author: "Autor: unbekannt",
        text: "53-jähriger Mann nach Motorradsturz mit stark geschwollenem rechten Handgelenk, bewegungsabhängigen Handgelenkschmerzen und Brustschmerzen beim Einatmen.",
        link: "case/fall20_lang.pdf"
      }
    ]
  },
  {
    id: 21,
    sprite: "fall21",
    variants: [
      {
        label: "Polytrauma nach Fahrradunfall (Kurzversion)",
        author: "Autor: unbekannt",
        text: "27-jähriger Mann nach Fahrradunfall mit kurzer Bewusstlosigkeit, Schmerzen in rechter Schulter, Bauch und Kopf sowie Schwindel und Übelkeit.",
        link: "case/fall21_kurz.pdf"
      },
      {
        label: "Polytrauma nach Fahrradunfall (Langversion)",
        author: "Autor: unbekannt",
        text: "27-jähriger Mann nach Fahrradunfall mit kurzer Bewusstlosigkeit, Schmerzen in rechter Schulter, Bauch und Kopf sowie Schwindel und Übelkeit.",
        link: "case/fall21_lang.pdf"
      }
    ]
  },
  {
    id: 23,
    sprite: "fall23",
    variants: [
      {
        label: "Akutes Koronarsyndrom (Kurzversion)",
        author: "Autor: unbekannt",
        text: "76-jährige Frau mit seit anderthalb Stunden anhaltenden, drückenden Brustschmerzen mit Ausstrahlung in Kiefer und linken Arm, Übelkeit und Todesangst.",
        link: "case/fall23_kurz.pdf"
      },
      {
        label: "Akutes Koronarsyndrom (Langversion)",
        author: "Autor: unbekannt",
        text: "76-jährige Frau mit seit anderthalb Stunden anhaltenden, drückenden Brustschmerzen mit Ausstrahlung in Kiefer und linken Arm, Übelkeit und Todesangst.",
        link: "case/fall23_lang.pdf"
      }
    ]
  },
  {
    id: 24,
    sprite: "fall24",
    variants: [
      {
        label: "Pyelonephritis (Kurzversion)",
        author: "Autor: unbekannt",
        text: "32-jähriger Mann mit seit gestern starken stechenden Flankenschmerzen rechts, hohem Fieber (39,6 °C), Schüttelfrost, Übelkeit und blutigem Urin.",
        link: "case/fall24_kurz.pdf"
      },
      {
        label: "Pyelonephritis (Langversion)",
        author: "Autor: unbekannt",
        text: "32-jähriger Mann mit seit gestern starken stechenden Flankenschmerzen rechts, hohem Fieber (39,6 °C), Schüttelfrost, Übelkeit und blutigem Urin.",
        link: "case/fall24_lang.pdf"
      }
    ]
  }
];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function createButton(number, variantIndex, item) {
  const button = document.createElement("button");
  button.className = "number-button";
  const isLight = variantIndex === 0;
  button.classList.add(isLight ? "number-button--light" : "number-button--dark");
  button.type = "button";
  button.textContent = String(number);

  button.dataset.number = String(number);
  button.dataset.variantIndex = String(variantIndex);
  button.dataset.itemId = String(item.id);

  return button;
}

// NEU – mit Collision Detection
const GAP = 12;

function overlaps(a, b) {
  return !(
      a.x + a.w + GAP < b.x ||
      b.x + b.w + GAP < a.x ||
      a.y + a.h + GAP < b.y ||
      b.y + b.h + GAP < a.y
  );
}

function placeButtonRandomly(button, container, placedButtons) {
  const MAX_TRIES = 400;
  const pad = 16;

  // Button unsichtbar anhängen, um Größe messen zu können
  button.style.visibility = 'hidden';
  button.style.position = 'absolute';
  container.appendChild(button);

  const rect = button.getBoundingClientRect();
  const btnW = rect.width  || 56;
  const btnH = rect.height || 56;

  const maxX = container.clientWidth  - btnW - pad;
  const maxY = container.clientHeight - btnH - pad;

  let pos = null;

  for (let tries = 0; tries < MAX_TRIES; tries++) {
    const candidate = {
      x: pad + Math.random() * Math.max(0, maxX - pad),
      y: pad + Math.random() * Math.max(0, maxY - pad),
      w: btnW,
      h: btnH,
    };
    if (!placedButtons.some(p => overlaps(candidate, p))) {
      pos = candidate;
      break;
    }
  }

  // Fallback: Rasterplatz wenn kein freier Platz gefunden
  if (!pos) {
    const cols = Math.floor(container.clientWidth / (btnW + GAP)) || 1;
    const idx  = placedButtons.length;
    pos = {
      x: pad + (idx % cols) * (btnW + GAP),
      y: pad + Math.floor(idx / cols) * (btnH + GAP),
      w: btnW,
      h: btnH,
    };
  }

  placedButtons.push(pos);
  button.style.left       = `${pos.x}px`;
  button.style.top        = `${pos.y}px`;
  button.style.transform  = 'none';
  button.style.visibility = ''; // wieder sichtbar
}

function openModal({ number, variantLabel, author, text, link, iconIndex, spriteKey }) {
  const modal = document.getElementById("content-modal");
  const numberEl = document.getElementById("modal-number");
  const variantEl = document.getElementById("modal-variant");
  const authorEl = document.getElementById("modal-author");
  const textEl = document.getElementById("modal-text");
  const linkEl = document.getElementById("modal-link");
  const iconEl = document.getElementById("modal-icon");

  numberEl.textContent = number;
  variantEl.textContent = variantLabel;
  authorEl.textContent = author;
  textEl.textContent = text;
  linkEl.href = link;

  // Basis-Klassen setzen
  iconEl.className = "modal-icon icon-sprite";

  // Sprite nach Fall wählen, z. B. icon-sprite-fall1 oder icon-sprite-fall2
  if (spriteKey) {
    iconEl.classList.add(`icon-sprite-${spriteKey}`);
  }

  // Konkretes Icon im Sprite wählen
  if (typeof iconIndex === "number") {
    iconEl.classList.add(`icon-${iconIndex}`);
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}


function closeModal() {
  const modal = document.getElementById("content-modal");
  const iconEl = document.getElementById("modal-icon");

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");

  if (iconEl) {
    iconEl.className = "modal-icon icon-sprite";
  }
}


function initPlayfield() {
  const placedButtons = [];
  const playfield = document.getElementById("playfield");
  if (!playfield) return;

  // Sicherstellen, dass der Container gerendert ist bevor Buttons platziert werden
  requestAnimationFrame(() => {
    const shuffledItems = shuffle(contentItems);

    shuffledItems.forEach((item, idx) => {
      const number = idx + 1;

      [0, 1].forEach((variantIndex) => {
        const button = createButton(number, variantIndex, item);
        // placeButtonRandomly hängt den Button selbst an den Container
        placeButtonRandomly(button, playfield, placedButtons);

        button.addEventListener("click", () => {
          const variant = item.variants[variantIndex];
          const randomIconIndex = Math.floor(Math.random() * 8);
          const spriteKey = item.sprite;

          openModal({
            number,
            variantLabel: variant.label,
            author: variant.author,
            text: variant.text,
            link: variant.link,
            iconIndex: randomIconIndex,
            spriteKey
          });
        });
      });
    });
  });
}


function initModal() {
  const modal = document.getElementById("content-modal");
  if (!modal) return;

  modal.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.hasAttribute("data-close-modal")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initPlayfield();
  initModal();
});
