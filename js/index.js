$(function () {
    document.addEventListener('keydown', function (e) {
        if (e.altKey && e.shiftKey && e.ctrlKey) {
            selectionObj = window.getSelection();
            selectedText = selectionObj.toString();
            var card = {}
            if (selectedText.indexOf("?")) {
                card = parseText(selectedText.split("?"));
            }

            if (selectedText.indexOf("？")) {
                card = parseText(selectedText.split("？"));
            }

            console.info(card)

        }


        if (card) {
            chrome.runtime.sendMessage(JSON.stringify(card), function (response) {
               alert("添加成功")
            });
        }
    })

    function parseText(arr) {
        if (arr.length > 1) {
            console.info(arr[1])
            var split = arr[1].split('\n');
            var backP = ''
            for (let i = 0; i < split.length; i++) {
                var splitElement = split[i];
                if (splitElement){
                    let temp = `<p>${splitElement}</p>`
                    backP += temp
                }
            }
            let card = {
                front: arr[0],
                back: backP,
                type: "html990710"
            }
            return card
        }
    }
})
