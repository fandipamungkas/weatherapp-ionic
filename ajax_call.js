function reloadEvent() {
    $(".menu").on("click", function() {
        convertURL(this.hash);
    });
    $('.linkEditBarang').on('click', function() {
        var hashClean = this.hash.replace('#', '');
        console.log(hashClean);
        loadKonten('http://localhost/web-2/weblanjut/departmen/index.php/Barang/form_edit/' + hashClean)
    })
}


function loadKonten(link) {
    $.ajax(link, {
        type: "GET",
        success: function(data, status, xhr) {
            var objData = JSON.parse(data);

            $("#kontenHTML").html(objData.konten);
            $("title").html(objData.title);
            reloadEvent();
        },
        error: function(jqXHR, textStatus, errorMsg) {
            $("#kontenHTML").html("Error: " + errorMsg);
            $("title").html("Error");
        }
    });
}

function convertURL(hash) {
    var hashClean = hash.replace("#", "");
    var url = "";

    if (hashClean == "departmen") {
        url = "http://localhost/web-2/weblanjut/departmen/index.php/Department/";
    } else if (hashClean == "barang") {
        url = "http://localhost/web-2/weblanjut/departmen/index.php/Barang/";
    }

    loadKonten(url);
}

convertURL("#barang");