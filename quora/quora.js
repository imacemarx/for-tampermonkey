// ==UserScript==
// @name     (2023)Quora: remove sponsored posts
// @namespace    acemarx
// @version      1.0.0
// @description  Remove sponsored posts that are shown as relevant answers even if they're not.
// @author       acemarx
// @grant    none
// @match        https://*.quora.com/*
// @match        http://*.quora.com/*
// @license MIT
// ==/UserScript==
(() => {
    const sponsorRemover = setInterval(removeSponsor, 1000);
})();

function removeSponsor() {
    try {
        const ads = document.querySelectorAll(".dom_annotate_multifeed_bundle_AdBundle");
        if (ads.length > 0) {
            ads.forEach((ad) => {
                ad.parentNode.removeChild(ad);
            });
        }
    } catch (err) {
        console.log(err);
    }
}