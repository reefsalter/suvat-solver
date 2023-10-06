function solveSuvat() {
    let s = parseFloat(document.getElementById('s').value);
    let u = parseFloat(document.getElementById('u').value);
    let v = parseFloat(document.getElementById('v').value);
    let a = parseFloat(document.getElementById('a').value);
    let t = parseFloat(document.getElementById('t').value);

    let results = "";
    let knownValuesCount = [s, u, v, a, t].filter(val => !isNaN(val)).length;

    if (knownValuesCount !== 3) {
        results += "<div class='error'>Error: Please provide exactly 3 known values!</div>";
    } else if (document.getElementById('s').value.match(/[a-zA-Z]/g) || 
               document.getElementById('u').value.match(/[a-zA-Z]/g) || 
               document.getElementById('v').value.match(/[a-zA-Z]/g) || 
               document.getElementById('a').value.match(/[a-zA-Z]/g) || 
               document.getElementById('t').value.match(/[a-zA-Z]/g)) {
        results += "<div class='error'>Error: Please enter valid numbers only. No characters allowed!</div>";
    } else {
        if (!isNaN(s) && !isNaN(u) && !isNaN(v)) {
            t = (2 * s) / (u + v);
            results += "<div class='equation'>t = 2s / (u + v) = " + t.toFixed(2) + " s</div>";

            a = (Math.pow(v, 2) - Math.pow(u, 2)) / (2 * s);
            results += "<div class='equation'>a = (v² - u²) / 2s = " + a.toFixed(2) + " m/s²</div>";
        } 
        else if (!isNaN(s) && !isNaN(u) && !isNaN(a)) {
            t = (-u + Math.sqrt(Math.pow(u, 2) + 2 * a * s)) / a;
            results += "<div class='equation'>t = (-u + √(u² + 2as)) / a = " + t.toFixed(2) + " s</div>";

            v = u + a * t;
            results += "<div class='equation'>v = u + at = " + v.toFixed(2) + " m/s</div>";
        } 
        else if (!isNaN(s) && !isNaN(v) && !isNaN(a)) {
            t = (v - Math.sqrt(Math.pow(v, 2) - 2 * a * s)) / a;
            results += "<div class='equation'>t = (v - √(v² - 2as)) / a = " + t.toFixed(2) + " s</div>";

            u = v - a * t;
            results += "<div class='equation'>u = v - at = " + u.toFixed(2) + " m/s</div>";
        } 
        else if (!isNaN(u) && !isNaN(v) && !isNaN(t)) {
            s = (u + v) * t / 2;
            results += "<div class='equation'>s = (u + v)t / 2 = " + s.toFixed(2) + " m</div>";

            a = (v - u) / t;
            results += "<div class='equation'>a = (v - u) / t = " + a.toFixed(2) + " m/s²</div>";
        } 
        else if (!isNaN(u) && !isNaN(v) && !isNaN(a)) {
            s = (Math.pow(v, 2) - Math.pow(u, 2)) / (2 * a);
            results += "<div class='equation'>s = (v² - u²) / 2a = " + s.toFixed(2) + " m</div>";

            t = (v - u) / a;
            results += "<div class='equation'>t = (v - u) / a = " + t.toFixed(2) + " s</div>";
        } 
        else if (!isNaN(s) && !isNaN(u) && !isNaN(t)) {
            v = (2 * s / t) - u;
            results += "<div class='equation'>v = (2s / t) - u = " + v.toFixed(2) + " m/s</div>";

            a = 2 * (s - u * t) / Math.pow(t, 2);
            results += "<div class='equation'>a = 2(s - ut) / t² = " + a.toFixed(2) + " m/s²</div>";
        } 
        else if (!isNaN(s) && !isNaN(v) && !isNaN(t)) {
            u = (2 * s / t) - v;
            results += "<div class='equation'>u = (2s / t) - v = " + u.toFixed(2) + " m/s</div>";

            a = 2 * (s - v * t) / Math.pow(t, 2);
            results += "<div class='equation'>a = 2(s - vt) / t² = " + a.toFixed(2) + " m/s²</div>";
        }
    }

    document.getElementById('results').innerHTML = results;
}