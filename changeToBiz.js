var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replaced5 = text.replace('5', 'biz');

            if (replaced5 !== text) {
                element.replaceChild(document.createTextNode(replaced5), node);
            }
        }
    }
}
