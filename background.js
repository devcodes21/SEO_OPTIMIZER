chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "extracted_html") {
            console.log(request.html);
        }
    }
);
var h1_count;
var h2_count;
var h3_count;
var h4_count;
var h5_count;
var title_of_website_in_this;
var url;
var description;
var canonical;
var urgent;
var robot_tag;
var total_link;
var internal_link;
var external_link;
var photu;
var hoster;
var lang;
var hostnamer;
var protocol_followed_here;
var pathname_of_this;
var h1_statement = [];
var h2_statement = [];
var h3_statement = [];
var h4_statement = [];
var h5_statement = [];
var internal_linkkk = [];
var anchor_value_for_internal = [];
var internal_counting;
var externally_linked = [];
var a_val_external = [];
var external_number;
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "header_data") {
            h1_count = request.h1Count;
            h2_count = request.h2Count;
            h3_count = request.h3Count;
            h4_count = request.h4Count;
            h5_count = request.h5Count;
            console.log("Number of h1 tags: " + request.h1Count);
            console.log("Number of h2 tags: " + request.h2Count);
            console.log("Number of h3 tags: " + request.h3Count);
            console.log("Number of h4 tags: " + request.h4Count);
            console.log("Number of h5 tags: " + request.h5Count);
        }
    }
);
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "header_dataaa") {
            if (request.headerTag === 'h1') {
                h1_statement.push(request.headerData);
            }
            if (request.headerTag === 'h2') {
                h2_statement.push(request.headerData);
            }
            if (request.headerTag === 'h3') {
                h3_statement.push(request.headerData);
            }
            if (request.headerTag === 'h4') {
                h4_statement.push(request.headerData);
            }
            if (request.headerTag === 'h5') {
                h5_statement.push(request.headerData);
            }
            console.log(request.headerTag + " tag encountered: " + request.headerData);
        }
    }
);

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "site_detail") {
            title_of_website_in_this = request.title_of_website_in_this;
            console.log("Title of website is: " + request.title_of_website_in_this);
            description = request.description;
            console.log("Description of website is: " + request.description);
            url = request.href;
            console.log("Url of this website is: " + request.href);
            canonical = request.canonical;
            console.log("Canonical of this website is: " + request.canonical);
            hoster = request.host;
            console.log("Host is: " + request.host);
            hostnamer = request.hostname;
            console.log("HostName is: " + request.hostname);
            pathname_of_this = request.pathname;
            console.log("Pathname is: " + request.pathname);
            protocol_followed_here = request.protocol;
            console.log("Protocol followed is: " + request.protocol);
            lang = request.language;
            console.log("Language of this page is: " + request.language);
        }
    }
);
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "link") {
            internal_linkkk.push(request.push_element);
            console.log("Internal link is as follows: " + request.push_element)
            if (request.anchor_val !== "" || request.anchor_val !== "") {
                anchor_value_for_internal.push("Anchor value is:-" + request.anchor_val);
                console.log("Anchor value is as follows: " + request.anchor_val);
            }
            else {
                anchor_value_for_internal.push("No anchor value found");
            }
        }
    }
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "linkk") {
            externally_linked.push(request.push_element);
            console.log("External link is as follows: " + request.push_element);
            if (request.anchor_val !== "" || request.anchor_val !== "") {
                a_val_external.push("Anchor value is:-" + request.anchor_val);
                console.log("Anchor value is as follows: " + request.anchor_val);
            }
            else {
                a_val_external.push("No anchor value found");
            }
            console.log("Anchor value is as follows: " + request.anchor_val);
        }
    }
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "extra_information") {
            urgent = request.count_of_word;
            console.log("Number of words in website are: " + request.count_of_word);
            robot_tag = request.robot;
            console.log("Robot tags are as follows: " + request.robot);
            total_link = request.count_of_link;
            internal_counting = request.internal_count;
            console.log("Number of link are as follows: " + request.count_of_link);
            internal_counting = request.internal_count;
            internal_link = request.internal_count;
            console.log("Number of internal link are as follows: " + request.internal_count);
            external_number = request.external_count;
            external_link = request.external_count;
            console.log("Number of external link are as follows: " + request.external_count);
            photu = request.image;
            console.log("Number of images in website are as follows: " + request.image);
        }
    }
)
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "ask_for_heading") {
            console.log("Received request to send");
            chrome.runtime.sendMessage(
                {
                    message: "heading_count",
                    h1_count: h1_count,
                    h2_count: h2_count,
                    h3_count: h3_count,
                    h4_count: h4_count,
                    h5_count: h5_count
                });
        }
    });
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.message === "ask_for_homepage_detail") {
            console.log("Received request to send");
            chrome.runtime.sendMessage(
                {
                    message: "homepage",
                    title_of_website_in_this: title_of_website_in_this,
                    url: url,
                    description: description,
                    canonical: canonical,
                    urgent: urgent,
                    robot_tag: robot_tag,
                    total_link: total_link,
                    internal_link: internal_link,
                    external_link: external_link,
                    photu: photu
                });
        }
    });
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.message === "ask_for_generalinfo_detail") {
            console.log("Received request to send");
            chrome.runtime.sendMessage(
                {
                    message: "generalinfo",
                    hoster: hoster,
                    lang: lang,
                    hostnamer: hostnamer,
                    protocol_followed_here: protocol_followed_here,
                    pathname_of_this: pathname_of_this
                });
        }
    });
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.message === "ask_for_h1headingstatments_detail") {
            console.log("Received request to send");
            chrome.runtime.sendMessage(
                {
                    message: "h1headingstatementinthis",
                    h1_statement: h1_statement,
                    h1_count: h1_count,
                    h2_statement: h2_statement,
                    h2_count: h2_count,
                    h3_statement: h3_statement,
                    h3_count: h3_count,
                    h4_statement: h4_statement,
                    h4_count: h4_count,
                    h5_statement: h5_statement,
                    h5_count: h5_count
                });
            h1_statement = [];
            h2_statement = [];
            h3_statement = [];
            h4_statement = [];
            h5_statement = [];
        }
    });
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        if (request.message === "ask_for_link_detail") {
            console.log("Received request to send");
            chrome.runtime.sendMessage(
                {
                    message: "linkvaluesinthis",
                    internal_linkkk: internal_linkkk,
                    internal_counting: internal_counting,
                    anchor_value_for_internal: anchor_value_for_internal,
                    externally_linked: externally_linked,
                    external_number: external_number,
                    a_val_external: a_val_external
                });
            internal_linkkk = [];
            anchor_value_for_internal = [];
            externally_linked = [];
        }
    });
