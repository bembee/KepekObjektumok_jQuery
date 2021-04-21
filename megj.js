var kep1 = {
    eleresiut: "images/1.jpg",
    cim: "1. kép címe",
    leiras: "1. kép leírása"
};

var kep2 = {
    eleresiut: "images/2.jpg",
    cim: "2. kép címe",
    leiras: "2. kép leírása"
};

var kep3 = {
    eleresiut: "images/3.jpg",
    cim: "3. kép címe",
    leiras: "3. kép leírása"
};

var kepTomb = [kep1, kep2, kep3];
var index = 0;

$(function () {
    nagyKepBetolt(index);
    //kiskép helyeinek elkészítése
    for (var i = 0; i < kepTomb.length; i++) {
        var elem = '<div><h3></h3><img id="' + i + '" src="" alt=""/><p></p></div>';
        $("article").eq(0).append(elem);
        kisKepBetolt(i);
    }
    
    $("article div img").click(kisKepBetolt);
    $("#bal").click(bal);
    $("#jobb").click(jobb);
});

function bal() {
    index--;
    if (index < 0) {
        index = kepTomb.length - 1;
    }
    nagyKepBetolt(index);
}

function jobb() {
    index++;
    if (index === kepTomb.length) {
        index = 0;
    }
    nagyKepBetolt(index);
}

function kisKepBetolt(index) {
    $("article div img").eq(index).attr("src", kepTomb[index].eleresiut);
    $("article div h3").eq(index).html(kepTomb[index].cim);
    $("article div p").eq(index).html(kepTomb[index].leiras);
}

function nagyKepBetolt(index) {
    $("section div img").eq(0).attr("src", kepTomb[index].eleresiut);
    $("section div h3").eq(0).html(kepTomb[index].cim);
    $("section div p").eq(0).html(kepTomb[index].leiras);
}