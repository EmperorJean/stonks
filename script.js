

const display = document.getElementById("answer");
const button = document.getElementById("button");
function getNumDays()
{
    let d = 0;
    let mon = parseInt(document.getElementById("starting-cash").value);
    let per = parseFloat(document.getElementById("percentage").value);
    let g = parseFloat(document.getElementById("goal").value);
    let s = mon;
    while (mon < g)
    {
        console.log(`${d}: Money: ${mon}\t`);
        mon += (mon * (per/100));
        d++;
        
    }

    display.innerHTML = `Assuming you gain ${per}% per trade, it'll take ${d} trades to get to your goal of ${g} with a starting balance of ${s}`;
}
