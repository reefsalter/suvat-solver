function solveSuvat() {
    const s = parseFloat(document.getElementById('s').value);
    const u = parseFloat(document.getElementById('u').value);
    const v = parseFloat(document.getElementById('v').value);
    const a = parseFloat(document.getElementById('a').value);
    const t = parseFloat(document.getElementById('t').value);

    let results = "";
    let hasError = false;

    if (isNaN(s) || isNaN(u) || isNaN(v) || isNaN(a) || isNaN(t)) {
        results += "<div class='error'>Error: Please enter valid numbers only!</div>";
        hasError = true;
    } else {
        if (!isNaN(u) && !isNaN(a) && !isNaN(t)) {
            results += "<div class='equation'>s = ut + ½at²</div>";
            results += "s = " + u + " × " + t + " + 0.5 × " + a + " × " + t + "²<br>";
            results += "= " + (u * t + 0.5 * a * Math.pow(t, 2)).toFixed(2) + "<br><br>";

            results += "<div class='equation'>v = u + at</div>";
            results += "v = " + u + " + " + a + " × " + t + "<br>";
            results += "= " + (u + a * t).toFixed(2) + "<br><br>";
        }

        if (!isNaN(u) && !isNaN(v) && !isNaN(a)) {
            results += "<div class='equation'>s = (v² - u²) / 2a</div>";
            results += "s = (" + v + "² - " + u + "²) / (2 × " + a + ")<br>";
            results += "= " + ((Math.pow(v, 2) - Math.pow(u, 2)) / (2 * a)).toFixed(2) + "<br><br>";
        }

        if (!isNaN(u) && !isNaN(v) && !isNaN(t)) {
            results += "<div class='equation'>s = ½(u + v)t</div>";
            results += "s = 0.5 × (" + u + " + " + v + ") × " + t + "<br>";
            results += "= " + (0.5 * (u + v) * t).toFixed(2) + "<br><br>";
        }
    }

    if (!hasError && results === "") {
        results += "<div class='error'>Insufficient data for any SUVAT equation!</div>";
    }

    document.getElementById('results').innerHTML = results;
}
