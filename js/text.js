var loader = new THREE.FontLoader();
var font = loader.parse({
    "glyphs": {
        "X": {
            "ha": 1389,
            "x_min": 0,
            "x_max": 1389,
            "o": "m 571 669 l 741 669 l 624 483 l 571 483 l 571 354 l 336 354 l 336 483 l 0 483 l 0 662 l 278 1036 l 571 1036 l 571 853 q 571 669 571 692 m 346 669 l 346 831 l 229 669 l 288 669 q 346 669 339 669 m 1389 1036 l 1002 354 l 728 354 l 1005 817 l 728 817 l 728 1036 l 1059 1036 q 1389 1036 1348 1036 "
        }
    },
    "cssFontWeight": "normal",
    "ascender": 1189,
    "underlinePosition": -100,
    "cssFontStyle": "normal",
    "boundingBox": {"yMin": -334, "xMin": -111, "yMax": 1189, "xMax": 1672},
    "resolution": 1000,
    "original_font_information": {
        "postscript_name": "Helvetiker-Regular",
        "version_string": "Version 1.00 2004 initial release",
        "vendor_url": "http://www.magenta.gr/",
        "full_font_name": "Helvetiker",
        "font_family_name": "Helvetiker",
        "copyright": "Copyright (c) Μagenta ltd, 2004",
        "description": "",
        "trademark": "",
        "designer": "",
        "designer_url": "",
        "unique_font_identifier": "Μagenta ltd:Helvetiker:22-10-104",
        "license_url": "http://www.ellak.gr/fonts/MgOpen/license.html",
        "license_description": "Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license (\"Fonts\") and associated documentation files (the \"Font Software\"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r\n\r\nThe above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r\n\r\nThe Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word \"MgOpen\", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r\n\r\nThis License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the \"MgOpen\" name.\r\n\r\nThe Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r\n\r\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.",
        "manufacturer_name": "Μagenta ltd",
        "font_sub_family_name": "Regular"
    },
    "descender": -334,
    "familyName": "Helvetiker",
    "lineHeight": 1522,
    "underlineThickness": 50
});

var geometry = new THREE.TextGeometry('X', {
    font: font,
    size: 12,
    height: 6,

    // bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelSegments: 1
});

// Solid text
var materials = [
    new THREE.MeshBasicMaterial({color: 0xFFFFFF}),
    new THREE.MeshBasicMaterial({color: 0x000000})
];
var text = new THREE.Mesh(geometry, materials);

// Wire frame
// var lineMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
// var edges = new THREE.LineSegments(geometry, lineMaterial);
// text.add(edges);

// Approximately fit text to center of content.
text.position.x -= 8;
text.position.y -= 6;

var pivot = rotate(text);
// Center pivot point.
pivot.position.x -= 0;
pivot.position.y -= 2;

render(pivot);