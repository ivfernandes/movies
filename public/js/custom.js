function apagarFilme(id) {
    $.ajax({
    type: "GET",
    url: `/remove/${id}`
    })
    .done(function (msg) {
    console.log(msg);
    window.location.href = "/";
    })
    .fail(function (msg) {
    console.log(msg);
    })
}  