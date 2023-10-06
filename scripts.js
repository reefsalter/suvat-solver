function validInput(val) {
    return !isNaN(val) && val !== "";
}

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
    } else {
        if (validInput(u) && validInput(a) && validInput(t)) {
            s = u * t + 0.5 * a * t * t;
            v = u + a * t;
            results += `<div class='equation'>Using: s = ut + 0.5 * a * t² and v = u + at</div>
                        Displacement, s = ${s.toFixed(2)} m<br>
                        Final velocity, v = ${v.toFixed(2)} m/s<br>`;
        } else if (validInput(u) && validInput(v) && validInput(t)) {
            s = 0.5 * (u + v) * t;
            a = (v - u) / t;
            results += `<div class='equation'>Using: s = 0.5 * (u + v) * t and a = (v - u) / t</div>
                        Displacement, s = ${s.toFixed(2)} m<br>
                        Acceleration, a = ${a.toFixed(2)} m/s²<br>`;
        } else if (validInput(s) && validInput(v) && validInput(t)) {
            u = (2 * s / t) - v;
            a = 2 * (v - u) / t;
            results += `<div class='equation'>Using the rearrangements of s = 0.5 * (u + v) * t and a = (v - u) / t</div>
                        Initial velocity, u = ${u.toFixed(2)} m/s<br>
                        Acceleration, a = ${a.toFixed(2)} m/s²<br>`;
        } else if (validInput(s) && validInput(u) && validInput(v)) {
            t = 2 * s / (u + v);
            a = (v * v - u * u) / (2 * s);
            results += `<div class='equation'>Using rearrangements of s = 0.5 * (u + v) * t and v² = u² + 2as</div>
                        Time, t = ${t.toFixed(2)} s<br>
                        Acceleration, a = ${a.toFixed(2)} m/s²<br>`;
        } else if (validInput(s) && validInput(u) && validInput(t)) {
            v = (2 * s / t) - u;
            a = 2 * (s - u * t) / (t * t);
            results += `<div class='equation'>Using rearrangements of v = u + at and s = ut + 0.5 * a * t²</div>
                        Final velocity, v = ${v.toFixed(2)} m/s<br>
                        Acceleration, a = ${a.toFixed(2)} m/s²<br>`;
        } else if (validInput(s) && validInput(v) && validInput(a)) {
            u = Math.sqrt(v * v - 2 * a * s);
            t = (v - u) / a;
            results += `<div class='equation'>Using rearrangements of v² = u² + 2as and v = u + at</div>
                        Initial velocity, u = ${u.toFixed(2)} m/s<br>
                        Time, t = ${t.toFixed(2)} s<br>`;
        } else if (validInput(u) && validInput(v) && validInput(a)) {
            s = (v * v - u * u) / (2 * a);
            t = (v - u) / a;
            results += `<div class='equation'>Using rearrangements of s = 0.5 * (u + v) * t and v = u + at</div>
                        Displacement, s = ${s.toFixed(2)} m<br>
                        Time, t = ${t.toFixed(2)} s<br>`;
        }
    }

    document.getElementById('results').innerHTML = results;
}

function exportToImage() {
    html2canvas(document.querySelector("#results")).then(canvas => {
        let link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'suvat-results.png';
        link.click();
    });
}
