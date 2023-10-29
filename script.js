// Define your key-to-link mapping here
function getLinkForKey(key) {
    // Example key-to-link mapping
    var keyToLink = {
        "key1": "https://cutt.ly/all-viral-link-2023",
        "key2": "https://examndmdmvple.com/link2",
        "vvn": "https://fgbd.com/link2",
        "xnks": "https://exdbvxcample.com/link2",
        "skdk": "https://dg.com/link2",
        "mdmdk": "https://edggdgxample.com/link2",
        "mmm": "https://dgdg  dg.com/link2",
        "MMM": "https://dgdgdg.com/link2",
        "mdkdmKSKSS": "https://dgdg.com/link2",
        "S": "https://example.dgdgdgd/link2",
        "101": "https://exampdgdgle.com/link2",
        "#canva_pro": "https://ln.ki/mirandaelvis",


        
        // Add more key-to-link mappings as needed
    };

    return keyToLink[key] || null;
}

function generateLink() {
    var key = document.getElementById("keyInput").value;
    var link = getLinkForKey(key);
    document.getElementById("linkResult").innerHTML = link ? `<a class="button" href="${link}" target="_blank">${link}</a>` : "Invalid key.";
    
}

