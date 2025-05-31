function ifAnagram(str1, str2) {
    str1 = str1.replace(/\s/g, '')
    str2 = str2.replace(/\s/g, '')
    if (str1.length === str2.length) {
        let letters1 = str1.split("")
        let letters2 = str2.split("")

        let sort1 = letters1.sort()
        let sort2 = letters2.sort()

        return sort1.join("") === sort2.join("")


    }

}



console.log(ifAnagram("listen", "silent"))