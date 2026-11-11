/* Ziel-Werkstatt: läuft nur im Browser. Nichts wird gespeichert oder übertragen (kein localStorage, keine Netzwerkaufrufe). */
(function () {
  var Q = [
    { k: 'klar', q: 'Weißt Du konkret, woran Du merkst, dass Du das Ziel erreicht hast?', h: 'Formuliere das Ziel so, dass Du es messen oder beobachten kannst, und überlege, wie anspruchsvoll es sein soll.', a: 'ziele-formulieren-spezifisch-anspruchsvoll', t: 'Ziele formulieren: spezifisch und anspruchsvoll' },
    { k: 'eigen', q: 'Willst Du dieses Ziel wirklich selbst, oder erwartet es vor allem jemand anderes von Dir?', h: 'Prüfe, ob das Ziel zu Deinen Werten und Interessen passt. Sonst fehlt oft die Ausdauer.', a: 'passende-ziele-finden-selbstkonkordanz', t: 'Passende Ziele finden' },
    { k: 'wenig', q: 'Verfolgst Du gerade höchstens zwei bis drei Ziele gleichzeitig?', h: 'Viele parallele Ziele machen jedes einzelne schwerer. Wähle, was jetzt Platz bekommt.', a: 'zu-viele-ziele-weniger-ist-mehr', t: 'Zu viele Ziele: weniger ist mehr' },
    { k: 'plan', q: 'Hast Du festgelegt, wann und wo Du den nächsten Schritt tust?', h: 'Ein Wenn-dann-Plan bindet die Handlung an eine feste Situation. Probier den Planer weiter unten aus.', a: 'wenn-dann-plan-schreiben-anleitung', t: 'Wenn-dann-Plan schreiben' },
    { k: 'zeit', q: 'Hast Du für den Plan Zeit mit Puffer eingerechnet, auch anhand früherer ähnlicher Vorhaben?', h: 'Pläne sind oft zu optimistisch. Schau, wie lange ähnliche Dinge früher wirklich gedauert haben.', a: 'planungsfehlschluss-zeit-realistisch-planen', t: 'Planungsfehlschluss: realistisch planen' },
    { k: 'fortschritt', q: 'Hältst Du Deinen Fortschritt fest oder teilst ihn mit jemandem?', h: 'Fortschritt festzuhalten und mit anderen zu teilen kann das Dranbleiben unterstützen.', a: 'verbindlichkeit-rechenschaft-fortschritt-teilen', t: 'Verbindlichkeit und Rechenschaft' }
  ];
  var box = document.getElementById('zc-qs'); if (!box) return;
  box.innerHTML = Q.map(function (x, i) {
    return '<div class="q" role="group" aria-labelledby="zq' + i + '"><p id="zq' + i + '">' + (i + 1) + '. ' + x.q + '</p><div class="opts">' +
      [['ja', 'Ja'], ['teils', 'Teilweise'], ['nein', 'Nein']].map(function (o) { return '<label><input type="radio" name="zq' + i + '" value="' + o[0] + '"> ' + o[1] + '</label>'; }).join('') + '</div></div>';
  }).join('');
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var res = document.getElementById('zc-res');
  document.getElementById('zc-go').addEventListener('click', function () {
    var ziel = document.getElementById('zc-ziel').value.trim(), miss = [], todo = [], ok = 0, answered = 0;
    Q.forEach(function (x, i) {
      var v = document.querySelector('input[name="zq' + i + '"]:checked');
      if (!v) { miss.push(i + 1); return; }
      answered++;
      if (v.value === 'ja') ok++; else todo.push(x);
    });
    if (miss.length) { res.innerHTML = '<div class="res"><p>Bitte beantworte noch Frage ' + miss.join(', ') + '.</p></div>'; return; }
    var h = '<div class="res"><h3>' + (ziel ? 'Dein Ziel: ' + esc(ziel) : 'Dein Ergebnis') + '</h3><p>' + ok + ' von 6 Fragen mit Ja beantwortet.</p>';
    if (!todo.length) h += '<p>Dein Ziel ist gut aufgestellt. Wichtig bleibt, den nächsten kleinen Schritt wirklich zu tun.</p>';
    else h += '<p>Hier lohnt sich ein genauerer Blick:</p><ul>' + todo.map(function (x) { return '<li>' + esc(x.h) + ' <a href="/artikel/' + x.a + '/">' + esc(x.t) + '</a></li>'; }).join('') + '</ul>';
    h += '</div>';
    res.innerHTML = h;
  });
  document.getElementById('zc-reset').addEventListener('click', function () {
    document.getElementById('zc-ziel').value = ''; res.innerHTML = '';
    Array.prototype.forEach.call(document.querySelectorAll('#zc-qs input'), function (i) { i.checked = false; });
  });
  var plans = [], list = document.getElementById('wd-list');
  function sentence(p) {
    var s = 'Wenn ' + p.w.replace(/[.\s]+$/, '') + ', dann ' + p.d.replace(/[.\s]+$/, '') + '.';
    if (p.h && p.s) s += ' Und wenn ' + p.h.replace(/[.\s]+$/, '') + ', dann ' + p.s.replace(/[.\s]+$/, '') + '.';
    return s;
  }
  function render() {
    list.innerHTML = plans.map(function (p, i) { return '<div class="plan">' + esc(sentence(p)) + ' <button class="btn2" type="button" data-i="' + i + '" aria-label="Plan ' + (i + 1) + ' entfernen" style="padding:.2rem .6rem;font-size:.8rem;float:right">Entfernen</button></div>'; }).join('');
  }
  list.addEventListener('click', function (e) { var i = e.target.getAttribute && e.target.getAttribute('data-i'); if (i !== null && i !== undefined) { plans.splice(+i, 1); render(); } });
  document.getElementById('wd-add').addEventListener('click', function () {
    var w = document.getElementById('wd-w'), d = document.getElementById('wd-d'), h = document.getElementById('wd-h2'), s = document.getElementById('wd-h3');
    if (!w.value.trim() || !d.value.trim()) { list.insertAdjacentHTML('afterbegin', '<p class="small" id="wd-err">Bitte fülle „Wenn“ und „dann“ aus.</p>'); setTimeout(function () { var e = document.getElementById('wd-err'); if (e) e.remove(); }, 2500); return; }
    plans.push({ w: w.value.trim(), d: d.value.trim(), h: h.value.trim(), s: s.value.trim() });
    w.value = d.value = h.value = s.value = ''; render();
  });
  document.getElementById('wd-copy').addEventListener('click', function () {
    var t = plans.map(function (p, i) { return (i + 1) + '. ' + sentence(p); }).join('\n');
    if (!t) return;
    if (navigator.clipboard) navigator.clipboard.writeText(t).catch(function () {});
  });
  document.getElementById('wd-print').addEventListener('click', function () { window.print(); });
  document.getElementById('wd-clear').addEventListener('click', function () { plans = []; render(); });
})();
