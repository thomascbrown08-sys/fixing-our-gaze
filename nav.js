// nav.js — Shared navigation for Fixing Our Gaze

const FOG_DAYS = [
  // Section I: The Eternal Son (1–15)
  { num: 1,  title: 'The Word Made Flesh',            available: true  },
  { num: 2,  title: 'Before the World Was',           available: true  },
  { num: 3,  title: 'The Radiance of His Glory',      available: true  },
  { num: 4,  title: 'Firstborn Over All Creation',    available: true  },
  { num: 5,  title: 'Behold the Lamb',                available: true  },
  { num: 6,  title: 'The Voice from Heaven',          available: true  },
  { num: 7,  title: 'His Face Shone Like the Sun',    available: true  },
  { num: 8,  title: 'I AM',                           available: true  },
  { num: 9,  title: 'Full of Grace and Truth',        available: true  },
  { num: 10, title: 'The Light of the Face of God',   available: true  },
  { num: 11, title: 'The Son the Father Loves',            available: true },
  { num: 12, title: 'The Ancient of Days',            available: true },
  { num: 13, title: 'He Was There in the Beginning',  available: true },
  { num: 14, title: 'The Anointed One',               available: true },
  { num: 15, title: 'The Stranger in Our Midst',      available: true },
  // Section II: The Servant Who Came (16–30)
  { num: 16, title: 'Born of a Woman',                available: true },
  { num: 17, title: "Simeon's Song",                  available: true },
  { num: 18, title: 'The Boy in the Temple',          available: true },
  { num: 19, title: 'Tempted in Every Way',           available: true },
  { num: 20, title: 'The Friend of Sinners',          available: true },
  { num: 21, title: 'He Touched the Leper',           available: true },
  { num: 22, title: 'The One Who Wept',               available: true },
  { num: 23, title: 'The Compassion of the King',     available: true },
  { num: 24, title: 'No Room in the Inn',             available: true },
  { num: 25, title: 'The Son of Man',                 available: true },
  { num: 26, title: 'Homeless in His Own World',      available: true },
  { num: 27, title: 'He Came to Seek and Save',       available: true },
  { num: 28, title: 'The Great Physician',            available: true },
  { num: 29, title: 'Lord of the Sabbath',            available: true },
  { num: 30, title: 'He Who Humbled Himself',         available: true },
  // Section III: Words of Life (31–45)
  { num: 31, title: 'The Sermon Begins',              available: true },
  { num: 32, title: 'Blessed Are the Poor in Spirit', available: true },
  { num: 33, title: "The Lord's Prayer",              available: true },
  { num: 34, title: 'The Prodigal and His Father',    available: true },
  { num: 35, title: 'The Good Samaritan',             available: true },
  { num: 36, title: 'The Lost Sheep',                 available: true },
  { num: 37, title: 'The Pearl of Great Price',       available: true },
  { num: 38, title: 'The Sower and the Soil',         available: true },
  { num: 39, title: 'The Mustard Seed',               available: true },
  { num: 40, title: 'New Wine, New Wineskins',        available: true },
  { num: 41, title: 'The Pharisee and the Tax Collector', available: true },
  { num: 42, title: 'Unless You Become Like a Child', available: true },
  { num: 43, title: 'The Narrow Door',                available: true },
  { num: 44, title: 'The Rich Young Ruler',           available: true },
  { num: 45, title: 'Come to Me, All Who Are Weary',  available: true },
  // Section IV: The Authority of the King (46–60)
  { num: 46, title: 'He Taught as One with Authority',available: true },
  { num: 47, title: 'Peace, Be Still',                available: true },
  { num: 48, title: 'Who Then Is This?',              available: true },
  { num: 49, title: 'The Keys of the Kingdom',        available: true },
  { num: 50, title: 'He Rebuked the Unclean Spirit',  available: true },
  { num: 51, title: 'Rise, Take Up Your Bed',         available: false },
  { num: 52, title: 'Lazarus, Come Out',              available: false },
  { num: 53, title: 'The Temple Cleansed',            available: false },
  { num: 54, title: 'No One Ever Spoke Like This Man',available: false },
  { num: 55, title: 'Your Sins Are Forgiven',         available: false },
  { num: 56, title: 'The Good Shepherd',              available: false },
  { num: 57, title: 'The Vine and the Branches',      available: false },
  { num: 58, title: 'I and the Father Are One',       available: false },
  { num: 59, title: 'All Authority Is Given to Me',   available: false },
  { num: 60, title: 'The Bread of Life',              available: false },
  // Section V: The Lamb Who Was Slain (61–75)
  { num: 61, title: 'The Anointing at Bethany',       available: false },
  { num: 62, title: 'The Upper Room',                 available: false },
  { num: 63, title: 'Gethsemane',                     available: false },
  { num: 64, title: 'The Betrayal',                   available: false },
  { num: 65, title: 'Tried and Condemned',            available: false },
  { num: 66, title: 'The Via Dolorosa',               available: false },
  { num: 67, title: 'It Is Finished',                 available: false },
  { num: 68, title: 'The Darkness and the Curtain',   available: false },
  { num: 69, title: 'Buried in a Borrowed Tomb',      available: false },
  { num: 70, title: 'Why Seek the Living Among the Dead?', available: false },
  { num: 71, title: 'He Appeared to Mary',            available: false },
  { num: 72, title: 'The Road to Emmaus',             available: false },
  { num: 73, title: 'Doubting Thomas',                available: false },
  { num: 74, title: 'Breakfast on the Shore',         available: false },
  { num: 75, title: 'The Ascension',                  available: false },
  // Section VI: The Risen Lord (76–90)
  { num: 76, title: 'Seated at the Right Hand',       available: false },
  { num: 77, title: 'The Lamb in the Midst of the Throne', available: false },
  { num: 78, title: 'Our Advocate',                   available: false },
  { num: 79, title: 'A Priest Forever',               available: false },
  { num: 80, title: 'Union with Christ',              available: false },
  { num: 81, title: 'Christ in You, the Hope of Glory', available: false },
  { num: 82, title: 'To Know Him',                    available: false },
  { num: 83, title: 'Nothing Can Separate Us',        available: false },
  { num: 84, title: 'He Is Able to Save Completely',  available: false },
  { num: 85, title: 'Beholding as in a Mirror',       available: false },
  { num: 86, title: 'He Who Calls You Is Faithful',   available: false },
  { num: 87, title: 'Come, Lord Jesus',               available: false },
  { num: 88, title: 'The Love That Will Not Let Go',  available: false },
  { num: 89, title: 'He Makes All Things New',        available: false },
  { num: 90, title: 'Alpha and Omega',                available: false },
];

const FOG_SECTIONS = [
  { label: 'I · The Eternal Son',           start: 1,  end: 15 },
  { label: 'II · The Servant Who Came',     start: 16, end: 30 },
  { label: 'III · Words of Life',           start: 31, end: 45 },
  { label: 'IV · The Authority of the King',start: 46, end: 60 },
  { label: 'V · The Lamb Who Was Slain',    start: 61, end: 75 },
  { label: 'VI · The Risen Lord',           start: 76, end: 90 },
];

function pad(n) { return String(n).padStart(2, '0'); }

function buildNav(activePage) {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  let activeNum = 0;
  if (activePage && activePage.startsWith('day-')) {
    activeNum = parseInt(activePage.replace('day-', ''), 10);
  }

  let html = `
    <div class="sidebar-brand">
      <a href="index.html" class="sidebar-brand-title">Fixing Our Gaze</a>
      <div class="sidebar-brand-sub">A 90-Day Devotional</div>
    </div>
    <a href="index.html" class="sidebar-home-link${activePage === 'index' ? ' active' : ''}">
      ☩&nbsp; Introduction &amp; Overview
    </a>`;

  FOG_SECTIONS.forEach(section => {
    const sectionDays = FOG_DAYS.filter(d => d.num >= section.start && d.num <= section.end);
    const isActive = activeNum >= section.start && activeNum <= section.end;
    html += `<div class="nav-section${isActive ? '' : ' collapsed'}">
      <div class="nav-section-toggle" onclick="toggleSection(this)">
        <span>${section.label}</span>
        <span class="chevron">▾</span>
      </div>
      <ul class="nav-days">`;
    sectionDays.forEach(day => {
      const id = 'day-' + pad(day.num);
      const isCurrentDay = activePage === id;
      let cls = isCurrentDay ? 'active' : (day.available ? '' : 'coming-soon');
      const href = day.available ? `${id}.html` : '#';
      html += `<li><a href="${href}" class="${cls}">
        <span class="nav-day-num">${pad(day.num)}</span>${day.title}
      </a></li>`;
    });
    html += `</ul></div>`;
  });

  sidebar.innerHTML = html;
}

function toggleSection(header) {
  header.closest('.nav-section').classList.toggle('collapsed');
}
