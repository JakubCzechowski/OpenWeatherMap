window.onload = function () {


    list = document.getElementById('list')
    loadData();
    function loadData() {
        $.ajax({ url: 'http://api.openweathermap.org/data/2.5/weather?q=Poland,krakow&APPID=1998e2006e7bb2361c6bbfdcac64b33c' })
            .done(resp => {


                var el = document.createElement('li');
                el.innerHTML = 'Temperature: ' + resp.main.temp;
                list.appendChild(el);








            }).done(() => { loadData(); })
    }



}