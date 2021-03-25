

const display = document.getElementById("answer");
const button = document.getElementById("button");
function getNumDays()
{
    let d = 0;
    let mon = parseInt(document.getElementById("starting-cash").value);
    let per = parseFloat(document.getElementById("percentage").value);
    let g = parseFloat(document.getElementById("goal").value);

    while (mon < g)
    {
        console.log(`${d}: Money: ${mon}\t`);
        mon += (mon * (per/100));
        d++;
        
    }

    display.value = ""+d;
}
