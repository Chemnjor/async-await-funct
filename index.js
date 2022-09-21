const images = []

async function imageUpload() {

let uploadStatus = new Promise( (resolve, reject) => { // connections status or upload servers
  setTimeout( () => {
      
    images.push("display picture")
resolve("Image uploaded")
  }, 4000)

})
result = await uploadStatus
console.log(result)
console.log(images.length)

}

imageUpload()