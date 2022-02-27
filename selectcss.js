window.onload = function() {
    let selBg = document.querySelectorAll(`[class*="sel\:bg"]`)
    let selColor = document.querySelectorAll(`[class*="sel\:color"]`)
    let selDeco = document.querySelectorAll(`[class*="sel\:deco"]`)
    let selShadow = document.querySelectorAll(`[class*="sel\:shadow"]`)

    let style = `<style type="text/css" id="selectCSS-style">`
    for (let i = 0; i < selBg.length; i++) {
        let regex = /sel:bg\[(.*)\]/g
        let items = selBg[i]
        items = items.getAttribute("class").split(" ")

        for (let i = 0; i < items.length; i++) {
            let item = items[i]
            if (regex.test(item)) {
                item = item.replace(regex, "$1")

                let name = `.sel\\:bg\\[${item.replace("#", "\\#")}\\]`
                style += `${name}::selection,${name} *::selection{background:${item}}`
            }
        }
    }
    for (let i = 0; i < selColor.length; i++) {
        let regex = /sel:color\[(.*)\]/g
        let items = selColor[i]
        items = items.getAttribute("class").split(" ")

        for (let i = 0; i < items.length; i++) {
            let item = items[i]
            if (regex.test(item)) {
                item = item.replace(regex, "$1")

                let name = `.sel\\:color\\[${item.replace("#", "\\#")}\\]`
                style += `${name}::selection,${name} *::selection{color:${item}}`
            }
        }
    }
    for (let i = 0; i < selDeco.length; i++) {
        let regex1 = /sel:deco\[(.*)\]/g
        let regex2 = /sel:deco\[(.*)\]\[(.*)\]/g
        let regex3 = /sel:deco\[(.*)\]\[(.*)\]\[(.*)\]/g
        let items = selDeco[i]
        items = items.getAttribute("class").split(" ")

        for (let i = 0; i < items.length; i++) {
            let item = items[i]
            if (regex3.test(item)) {
                item = item.replace(regex3, "$1 $2 $3")
                itemArr = item.split(" ")
                
                for (let i = 0; i < itemArr.length; i++) {
                    var item1 = itemArr[0]
                    var item2 = itemArr[1]
                    var item3 = itemArr[2]
                }

                let name = `.sel\\:deco\\[${item1.replace("#", "\\#")}\\]\\[${item2.replace("#", "\\#")}\\]\\[${item3.replace("#", "\\#")}\\]`
                style += `${name}::selection,${name} *::selection{text-decoration:${item1} ${item2} ${item3}}`
            } else if (regex2.test(item)) {
                item = item.replace(regex2, "$1 $2")
                itemArr = item.split(" ")
                
                for (let i = 0; i < itemArr.length; i++) {
                    var item1 = itemArr[0]
                    var item2 = itemArr[1]
                }

                let name = `.sel\\:deco\\[${item1.replace("#", "\\#")}\\]\\[${item2.replace("#", "\\#")}\\]`
                style += `${name}::selection,${name} *::selection{text-decoration:${item1} ${item2}}`
            } else if (regex1.test(item)) {
                item = item.replace(regex1, "$1")

                let name = `.sel\\:deco\\[${item.replace("#", "\\#")}\\]`
                style += `${name}::selection,${name} *::selection{text-decoration:${item}}`
            }
        }
    }
    for (let i = 0; i < selShadow.length; i++) {
        let regex2 = /sel:shadow\[(.*)\]\[(.*)\]/g
        let regex3 = /sel:shadow\[(.*)\]\[(.*)\]\[(.*)\]/g
        let regex4 = /sel:shadow\[(.*)\]\[(.*)\]\[(.*)\]\[(.*)\]/g
        let items = selShadow[i]
        items = items.getAttribute("class").split(" ")

        for (let i = 0; i < items.length; i++) {
            let item = items[i]
            if (regex4.test(item)) {
                item = item.replace(regex4, "$1 $2 $3 $4")
                itemArr = item.split(" ")

                for (let i = 0; i < itemArr.length; i++) {
                    var item1 = itemArr[0]
                    var item2 = itemArr[1]
                    var item3 = itemArr[2]
                    var item4 = itemArr[3]
                }

                let name = `.sel\\:shadow\\[${item1.replace("#", "\\#")}\\]\\[${item2.replace("#", "\\#")}\\]\\[${item3.replace("#", "\\#")}\\]\\[${item4.replace("#", "\\#")}\\]`
                style += `${name}::selection,${name} *::selection{text-shadow:${item1} ${item2} ${item3} ${item4}}`
            } else if (regex3.test(item)) {
                item = item.replace(regex3, "$1 $2 $3")
                itemArr = item.split(" ")

                for (let i = 0; i < itemArr.length; i++) {
                    var item1 = itemArr[0]
                    var item2 = itemArr[1]
                    var item3 = itemArr[2]
                }

                let name = `.sel\\:shadow\\[${item1.replace("#", "\\#")}\\]\\[${item2.replace("#", "\\#")}\\]\\[${item3.replace("#", "\\#")}\\]`
                style += `${name}::selection,${name} *::selection{text-shadow:${item1} ${item2} ${item3}}`
            } else if (regex2.test(item)) {
                item = item.replace(regex2, "$1 $2")
                itemArr = item.split(" ")

                for (let i = 0; i < itemArr.length; i++) {
                    var item1 = itemArr[0]
                    var item2 = itemArr[1]
                }

                let name = `.sel\\:shadow\\[${item1.replace("#", "\\#")}\\]\\[${item2.replace("#", "\\#")}\\]`
                style += `${name}::selection,${name} *::selection{text-shadow:${item1} ${item2}}`
            }
        }
    }
    style += `</style>`
    document.head.insertAdjacentHTML("beforeend", style)
}
