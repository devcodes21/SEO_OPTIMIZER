var any
var h1_count;
var h2_count;
var h2_count;
var h3_count;
var h4_count;
var h5_count;
$(function () {
    $(".content").not(".home-page").hide();
});
$(document).on("click", ".nav", function () {
    var page = $(this).attr("href").slice(1);
    $(".content").hide();
    $("#" + page).show();
});
document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.sendMessage({ message: "ask_for_heading" });
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.message === "heading_count") {
                document.getElementById("h1_count").innerHTML = request.h1_count;
                document.getElementById("h2_count").innerHTML = request.h2_count;
                document.getElementById("h3_count").innerHTML = request.h3_count;
                document.getElementById("h4_count").innerHTML = request.h4_count;
                document.getElementById("h5_count").innerHTML = request.h5_count;
            }
        });
});
var checker
document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.sendMessage({ message: "ask_for_homepage_detail" });
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            
            if (request.message === "homepage") {
                document.getElementById("abcd").innerHTML = (request.title_of_website_in_this);
                checker = request.url;
                document.getElementById("link").innerHTML = (request.url);
                document.getElementById("description").innerHTML = (request.description);
                document.getElementById("_canonical").innerHTML = (request.canonical);
                document.getElementById("count_of_word").innerHTML = (request.urgent);
                document.getElementById("robot_tag").innerHTML = (request.robot_tag);
                document.getElementById("total_link").innerHTML = (request.total_link);
                document.getElementById("internal_link").innerHTML = (request.internal_link);
                document.getElementById("external_link_").innerHTML = (request.external_link);
                document.getElementById("image").innerHTML = (request.photu);
            }
        });
});
document.addEventListener('DOMContentLoaded', function () {
    
    chrome.runtime.sendMessage({ message: "ask_for_generalinfo_detail" });
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            
            if (request.message === "generalinfo") {
                document.getElementById("hoster").innerHTML = (request.hoster);
                document.getElementById("lang").innerHTML = (request.lang);
                document.getElementById("hostnamer").innerHTML = (request.hostnamer);
                var roboter = 'https:' + '/' + '/' + request.hostnamer + '/robots.txt';
                document.getElementById("roboter").innerHTML = roboter;
                document.getElementById("protocol_followed_here").innerHTML = (request.protocol_followed_here);
                document.getElementById("pathname_of_this").innerHTML = (request.pathname_of_this)
            }
        });
});
document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.sendMessage({ message: "ask_for_h1headingstatments_detail" });
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.message === "h1headingstatementinthis") {
                for(var i=0;i<request.h1_count;i++)
                {
                $('#helperrr').append(`<pre>${request.h1_statement[i]}</pre>`);
                
                }
                for(var k=0;k<request.h2_count;k++)
                {
                    $('#h2_statement').append(`<pre>${request.h2_statement[k]}</pre>`)
                }
                for(var g=0;g<request.h3_count;g++)
                {
                    $('#h3_statement').append(`<pre>${request.h3_statement[g]}</pre>`)
                }
                for(var h=0;h<request.h4_count;h++)
                {
                    $('#h4_statement').append(`<pre>${request.h4_statement[h]}</pre>`)
                }
                for(var t=0;t<request.h5_count;t++)
                {
                    $('#h5_statement').append(`<pre>${request.h5_statement[t]}</pre>`)
                }
            }
        });
});
document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.sendMessage({ message: "ask_for_link_detail" });
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            if (request.message === "linkvaluesinthis") {
                for(var j=0;j<request.internal_counting;j++)
                {
                    
                    $('#internal_linkkkkk').append(`<pre>${request.internal_linkkk[j]}</pre>`)
                    $('#internal_linkkkkk').append(`<pre>${request.anchor_value_for_internal[j]}</pre>`)
                }
                for(var v=0;v<request.external_number;v++)
                {
                    $('#external_linkkkkk').append(`<pre>${request.externally_linked[v]}</pre>`)
                    $('#external_linkkkkk').append(`<pre>${request.a_val_external[v]}</pre>`)
                }
            }
        });
});

