

    let date = document.getElementById('date');

    date.addEventListener('click', showDate, false);
 
    function showDate(e) {
        let x = e.target;
        alert('The data is ' + x.innerHTML);
        
    }
 
    ~function()
{
    let UL = document.getElementsByTagName('ul')[0],
        LI = UL.children,
        F;
    for (F = 0;F < LI.length;++F) LI[F].style.color = F % 2 ? 'green' : 'red'
}()