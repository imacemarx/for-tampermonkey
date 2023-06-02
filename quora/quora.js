// ==UserScript==
// @name     (2023)Quora: remove sponsored posts
// @namespace    acemarx
// @version      1.0.2
// @description  Remove sponsored posts that are shown as relevant answers even if they're not.
// @author       acemarx
// @grant    none
// @exclude https://*.quora.com/robots.txt?upapi=true
// @exclude http://*.quora.com/robots.txt?upapi=true
// @match        https://*.quora.com/*
// @match        http://*.quora.com/*
// @license MIT
// ==/UserScript==
const removeSponsor = () => {
    try {
        const ads = document.querySelectorAll(".dom_annotate_multifeed_bundle_AdBundle");
        ads.forEach((ad) => {
            ad?.parentNode?.removeChild(ad);
        });
    } catch (error) {
        console.error("An error occurred while removing sponsor:", error);
    }
};

if (typeof MutationObserver === 'undefined') {
    console.log('Browser does not support MutationObserver.');
} else {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                removeSponsor();
            }
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
