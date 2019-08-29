var dList = []; // variable yang digunakan untuk menyimpan data

// koneksi API
fetch('http://127.0.0.1:8080/data.json')
// fetch('https://swapi.co/api/planets/')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        dList = myJson.results
        showData(dList)
    })

// function mencari data / filtering berdasarkan value
function searchData(){
    var dd = dList
    var q = document.getElementById('filter').value;
    var data = dd.filter(function (thisData) {
        return thisData.name.toLowerCase().includes(q) ||
        thisData.rotation_period.includes(q) ||
        thisData.orbital_period.includes(q) || 
        thisData.diameter.includes(q) || 
        thisData.climate.includes(q) ||
        thisData.gravity.includes(q) || 
        thisData.terrain.includes(q) || 
        thisData.surface_water.includes (q) ||
        thisData.population.includes(q)
    });
    showData(data); // mengirim data ke function showData
}
        
// menampilkan data dan membuat body pada table
function showData(dList){
    var tr, td
    var tbody = document.getElementById('tBody') // tBody adalah id yang digunakan untuk set tbody yang berada diindex.html
    tbody.innerHTML = ''
    for(var i=0; i < dList.length; i++){ // melakukan perulangan data / loop
        tr = tbody.insertRow(tbody.rows.length);
        td = tr.insertCell(tr.cells.length);
        td.setAttribute("align","center");
        td.innerHTML = i+1
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = dList[i].name;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = dList[i].rotation_period;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = dList[i].orbital_period
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = dList[i].diameter
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = dList[i].climate
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = dList[i].gravity
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = dList[i].terrain
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = dList[i].surface_water
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = dList[i].population
    }
}
