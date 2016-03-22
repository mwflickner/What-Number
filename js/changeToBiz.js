//var elements = document.getElementsByTagName('*');
var $elements = $('*').not("script, style, link");

for (var i = 0; i < $elements.length; i++) {
    var element = $elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var bizifiedText = text.replace(/5/g, "Biz")
                                .replace(/Five/g, "Biz")
                                .replace(/five/g, "biz")
                                .replace(/FIVE/g, "BIZ");

            if (bizifiedText !== text) {
                element.replaceChild(document.createTextNode(bizifiedText), node);
            }
        }
    }
}
