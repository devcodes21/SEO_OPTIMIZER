var htmll = $('body').html();
console.log(htmll);
var html = $('html').html();
console.log(html);

chrome.runtime.sendMessage({ message: "extracted_html", html: htmll });
var h1Count = $('h1').length;
var h2Count = $('h2').length;
var h3Count = $('h3').length;
var h4Count = $('h4').length;
var h5Count = $('h5').length;
chrome.runtime.sendMessage({
    message: "header_data",
    h1Count: h1Count,
    h2Count: h2Count,
    h3Count: h3Count,
    h4Count: h4Count,
    h5Count: h5Count,
});
let h1Tags = document.getElementsByTagName("h1");
for (let i = 0; i < h1Tags.length; i++) {
    let h1Tag = h1Tags[i];
    let h1Data = h1Tag.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim(); 
    chrome.runtime.sendMessage({
        message: "header_dataaa",
        headerTag: "h1",
        headerData: h1Data
    });
}
let h2Tags = document.getElementsByTagName("h2");
for (let i = 0; i < h2Tags.length; i++) {
    let h2Tag = h2Tags[i];
    let h2Data = h2Tag.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
    chrome.runtime.sendMessage({
        message: "header_dataaa",
        headerTag: "h2",
        headerData: h2Data
    });
}
let h3Tags = document.getElementsByTagName("h3");
for (let i = 0; i < h3Tags.length; i++) {
    let h3Tag = h3Tags[i];
    let h3Data = h3Tag.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
    chrome.runtime.sendMessage({
        message: "header_dataaa",
        headerTag: "h3",
        headerData: h3Data
    });
}
let h4Tags = document.getElementsByTagName("h4");
for (let i = 0; i < h4Tags.length; i++) {
    let h4Tag = h4Tags[i];
    let h4Data = h4Tag.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
    chrome.runtime.sendMessage({
        message: "header_dataaa",
        headerTag: "h4",
        headerData: h4Data
    });
}
let h5Tags = document.getElementsByTagName("h5");
for (let i = 0; i < h5Tags.length; i++) {
    let h5Tag = h5Tags[i];
    let h5Data = h5Tag.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
    chrome.runtime.sendMessage({
        message: "header_dataaa",
        headerTag: "h5",
        headerData: h5Data
    });
}
var host = $(location).attr('host');
var hostname = $(location).attr('hostname');
var pathname = $(location).attr('pathname');
var href = $(location).attr('href');
var port = $(location).attr('port');
var protocol = $(location).attr('protocol');
var title_of_website_in_this = $('title').text();
var language = navigator.language || navigator.userLanguage;
var description_helper = document.querySelector('meta[name="description"]')
if (description_helper !== null) {
    description = description_helper.content;
}
else {
    description = "Description is not found";
}
var canonical_helper = document.querySelector('link[rel="canonical"]');
var canonical;
if (canonical_helper !== null) {
    canonical = canonical_helper.href;
}
else {
    canonical = "No canonical found"
}
chrome.runtime.sendMessage({
    message: "site_detail",
    host: host,
    canonical: canonical,
    hostname: hostname,
    pathname: pathname,
    href: href,
    port: port,
    protocol: protocol,
    title_of_website_in_this: title_of_website_in_this,
    description: description,
    language: language,
});
let parse = new DOMParser();
let helper = parse.parseFromString(html, 'text/html');
let content = helper.body.textContent;
let word_string = content.split(/\s+/);
let count_of_word = word_string.length;
let internal_link = [];
let external_link = [];

let count_of_link
count_of_link = $('a').length;
let first_array = [];
let second_array = [];
let internal_count;
let external_count
let present_position = document.location.href;
$('a').each(function () {
    let here = $(this).attr('href');
    let anchor_val = $(this).text().replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
    if (!here.startsWith("http")) {
        let url = new URL(here, present_position);
        if (url.origin === location.origin) {
            first_array.push(here);
            chrome.runtime.sendMessage({
                message: "link",
                push_element: here,
                anchor_val: anchor_val
            })
        }
        else {
            second_array.push(here);
            chrome.runtime.sendMessage({
                message: "linkk",
                push_element: here,
                anchor_val: anchor_val
            })
        }
    }
    else {
        if (here.startsWith(location.origin)) {
            first_array.push(here);
            chrome.runtime.sendMessage({
                message: "link",
                push_element: here,
                anchor_val: anchor_val
            })
        }
        else {
            second_array.push(here);
            chrome.runtime.sendMessage({
                message: "linkk",
                push_element: here,
                anchor_val: anchor_val
            })
        }
    }
});
internal_count = first_array.length;
external_count = second_array.length;
let image_helper
image_helper = document.querySelectorAll("img");
let image = image_helper.length
let robot_helper = document.querySelector('meta[name="robots"]')
let robot
if (robot_helper !== null) {
    robot = robot_helper.content;
}
else {
    robot = "No robots tags present"
}
chrome.runtime.sendMessage({
    message: "extra_information",
    count_of_word: count_of_word,
    robot: robot,
    count_of_link: count_of_link,
    internal_count: internal_count,
    external_count: external_count,
    image: image
})


