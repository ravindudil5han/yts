const yts = require("./main.js");

yts.yts("extraction")
        .then((data) => {
            if (data.length === 0) {
                console.log('Error : sik ne')
            } else {
                console.log(data)
            }

        })
