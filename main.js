function addImageProcess(src){
    return new Promise((resolve, reject) => {
        let img = new Image()
        img.src = src
        img.onload = () => resolve(img)
        img.onerror = reject
    })
}

addImageProcess("tree_1280_760.jpg")
.then(img=>{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.drawImage(img,0,0);
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.rect(625, 505, 30, 30);
    ctx.strokeStyle = "#0600d8";
    ctx.stroke();
})
.catch(err=>{
    console.error("An error occured: ". err);
});

