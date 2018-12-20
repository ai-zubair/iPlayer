$(function () {
    var page=$('main').attr("class");
    console.log(page);
    $('li#'+page).toggleClass("active");
})