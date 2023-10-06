function solveSuvat() {
    const s = parseFloat(document.getElementById('s').value);
    const u = parseFloat(document.getElementById('u').value);
    const v = parseFloat(document.getElementById('v').value);
    const a = parseFloat(document.getElementById('a').value);
    const t = parseFloat(document.getElementById('t').value);

    let results = "";

    if (!isNaN(u) && !isNaN(a) && !isNaN(t)) {
        results += "<div class='equation'>s = ut + ½at²</div>";
        results += "s = " + (u * t + 0.5 * a * Math.pow(t, 2)).toFixed(2) + "<br>";

        results += "<div class='equation'>v = u + at</div>";
        results += "v = " + (u + a * t).toFixed(2) + "<br>";
    }

    if (!isNaN(u) && !isNaN(v) && !isNaN(a)) {
        results += "<div class='equation'>s = (v² - u²) / 2a</div>";
        results += "s = " + ((Math.pow(v, 2) - Math.pow(u, 2)) / (2 * a)).toFixed(2) + "<br>";
    }

    if (!isNaN(u) && !isNaN(v) && !isNaN(t)) {
        results += "<div class='equation'>s = ½(u + v)t</div>";
        results += "s = " + (0.5 * (u + v) * t).toFixed(2) + "<br>";
    }

    document.getElementById('results').innerHTML = results;
}
