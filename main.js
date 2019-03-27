window.onload = function () {


    var list = document.getElementById('list')
    loadData();
    function loadData() {
        $.ajax({ url: 'http://api.openweathermap.org/data/2.5/forecast?q=Krakow,pl&APPID=1998e2006e7bb2361c6bbfdcac64b33c' })
            .done(resp => {


                //var el = document.createElement('li');
                //el.innerHTML = 'Temperature: ' + Math.round(resp.list.main.temp  - 271) + '&#x2103';
                //list.appendChild(el);


                for (i = 0; i < resp.list.length; i++) {

                    var el = document.createElement('li');
                    el.innerHTML = resp.list[i].dt_txt +'\xa0\xa0\xa0'+ 'Temperature: ' + Math.round(resp.list[i].main.temp - 271) + '&#x2103';
                    list.appendChild(el);


                }

            })
    }



}


dupsko