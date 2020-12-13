

var data; // muuttujien määrittely'

//funktio, jolla teen asemahaun. Tämän muuntaminen perus JavaScriptistä vei minulta tosi paljon aikaa.
// kun this -käyttö oli epäselvää, mutta löytyi ratkaisu. Lisäksi aikaisemmassa minulla oli mukana ToUppercase(),
//mutta tässä ratkaisussa sitä ei tarvita, kun se tulee tuolta RegExp konstruktorilta tuolla i attribuutilla. 
$(document).ready(function(){
    $("#tStations").keyup(function() {
        //tekstikentän muuttujat
        var filter = $(this).val(); 
       

        //for loopin sijaan each() funktio, jolla käydä linkkilistaa läpi
        $("#stations li").each(function() {

            //aikaisemmassa määrittelin erikseen innerText ja textContent, mutta tässä riittää text().
            //Jos haussa ei ole merkkiä, se liukuu listassa näkymättömiin ja jäljelle jäävät ne, 
            //joista merkki löytyy
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).slideUp();
            } else {
                $(this).show();
               
            }
        });

        
    });
});

function trains(data) { //taulukkofunktio, jota käytän taulukon luomiseen hakufunktioissa

    var tableData = data; //taulukkodata json -oliosta
    
    //luon taulukon
    var table = "<table>";
    //header -rivi erikseen, koska json nimet eivät olleet hyviä taulukkoon
    table += "<tr><th>Number</th> <th>Operator</th> <th>Type</th> <th>Category</th> <th>ID</th> <th>Version</th></tr>";
    //looppi, jolla luodaan taulukko json -olion datasta, mietin pitkään käytänkö tässä each() -looppia, mutta jätin tällaiseksi
    for(var i = 0; i < tableData.length; i++) {
        table += "<tr>";
        table += "<td>" + tableData[i].trainNumber + "</td>";
        table += "<td>" + tableData[i].operatorShortCode + "</td>";
        table += "<td>" + tableData[i].trainType + "</td>";
        table += "<td>" + tableData[i].trainCategory + "</td>";
        table += "<td>" + tableData[i].commuterLineID+ "</td>";
        table += "<td>" + tableData[i].version + "</td>";
        table += "</tr>"
    }

    table += "</table>";
    $("#table").html(table); //tämä on oikeastaan ainoa varsinainen muutos taulukon luomisessa. 

}
//koska aika oli rajallinen, niin tein json -kutsut edelleen listana, enkä ehtinyt viimeistellä sitä ajatusta, joka minulla on
//AJAX-kutsut on kuitenkin todella paljon helpompi luoda tällä metodilla
$("#avp").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/AVP?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data); // funktio, jolla luon taulukon sivulle
    });
});P

$("#epo").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/EPO?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});


$("#hki").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/HKI?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});


$("#hkh").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/HKH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#hpl").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/HPL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});   

$("#ila").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/ILA?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#jrs").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/JRS?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#kan").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KAN?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#klh").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KLH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#kni").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KNI?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});


$("#kea").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KEA?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#ke").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KE?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#kil").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KIL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#kkn").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KKN?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#ktö").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KTÖ?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#kvh").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KVH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#kvy").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KVY?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});


$("#krs").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KRSS?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#käp").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/KÄP?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#lnä").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/LNÄ?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#len").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/LEN?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#lpv").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/LPV?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#loh").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/LOH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#ml").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/ML?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});


$("#mlo").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/MLO?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#mrl").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/MRL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#mas").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/MAS?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});


$("#myr").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/MYR?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#mäk").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/MÄK?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#olk").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/OLK?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#psl").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/PSL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#pjm").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/PJM?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#poh").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/POH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#pla").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/PLA?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#pmk").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/PMK?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#rkl").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/RKL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#sav").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/SAV?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#sti").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/STI?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#tna").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/TNA?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#tkl").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/TKL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#tol").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/TOL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});

$("#vmo").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/VMO?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});


$("#veh").click(function() {
    $.getJSON("https://rata.digitraffic.fi/api/v1/live-trains/station/VEH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0", function(data) {
        console.log(data);
        trains(data);
    });
});