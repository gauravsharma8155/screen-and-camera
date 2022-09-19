console.log("This is Console for index js");


let scrren1 = document.getElementById("screen1").addEventListener("click", () => {
    console.log(scrren1);

    let block1 = document.getElementById("block1");
    console.log(block1)
    let block2 = document.getElementById("block2");
    console.log(block2)
    let block3 = document.getElementById("block3");
    console.log(block3)


    if (block1.style.display = 'block') {
        block2.style.display = 'none';
        block3.style.display = 'none'
    }



})

let scrren2 = document.getElementById("screen2").addEventListener("click", () => {
    console.log(scrren1);

    let block1 = document.getElementById("block1");
    let block2 = document.getElementById("block2");
    let block3 = document.getElementById("block3");


    if (block2.style.display = 'block') {
        block1.style.display = 'none';
        block3.style.display = 'none'
    }

})

let scrren3 = document.getElementById("screen3").addEventListener("click", () => {
    console.log(scrren1);

    let block1 = document.getElementById("block1");
    let block2 = document.getElementById("block2");
    let block3 = document.getElementById("block3");


    if (block3.style.display = 'block') {
        block1.style.display = 'none';
        block2.style.display = 'none'
    }

})


let btn_record1 = document.getElementById("btn_record1").addEventListener("click", async () => {
    console.log("this is console for btn_record1");


    let stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true

    })

    // audio = navigator.mediaDevices.getUserMedia({
    //     audio:true,
    //     echocancellation:true,
    // })



    const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
        ? "video/webm; codecs=vp9"
        : "video/webm"
    let mediaRecorder = new MediaRecorder(stream, {
        mimeType: mime
    })

    let chunks = []
    mediaRecorder.addEventListener('dataavailable', function (e) {
        chunks.push(e.data)
    })

    mediaRecorder.addEventListener('stop', function () {
        let blob = new Blob(chunks, {
            type: chunks[0].type
        })
        console.log(blob);
        let cross = document.getElementById("cross");

        cross.style.display = 'block'

        let data = document.getElementById("data");
        console.log(data);
        data.src = URL.createObjectURL(blob);
        data.style.display = 'block'

        let main = document.getElementById("main-container");
        console.log(main);
        main.style.display = 'none'


        console.log(cross)
        cross.addEventListener("click", () => {
            let main = document.getElementById("main-container");
            console.log(main); main.style.display = 'block'

            let data = document.getElementById("data");
            data.style.display = 'none'
            console.log(data);

            let download = document.getElementById('download');
            download.style.display = 'none';
        })

        let download = document.getElementById('download');
        download.style.display = 'block'
        download.href = URL.createObjectURL(blob);

         

        // cross.style.display = 'none'
    });

    mediaRecorder.start();
});




let btn_record2 = document.getElementById("btn_record2").addEventListener("click", async () => {

    const parts = [];

    navigator.mediaDevices.getUserMedia({ video: true, audio: true, echocancellation: true, noiseSuppression: true, sampleRate: 44100, echocancellation: true }).then(stream => {


        let main = document.getElementById("main-container");
        console.log(main);
        main.style.display = 'none';

        let data2 = document.getElementById("data2");
        data2.style.display = 'block'
        data2.srcObject = stream


        let download1 = document.getElementById("download1")
        download1.style.display = 'block'

        download1.addEventListener("click", () => {
            console.log("this is console", download1);

            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start(1000);


            mediaRecorder.ondataavailable = function (e) {

                parts.push(e.data)
            }

        });



        let download2 = document.getElementById("download2");
        download2.style.display = 'block'

        let cross = document.getElementById("cross");
        console.log(cross)
        cross.style.display = 'block'


        download2.addEventListener("click", () => {

            mediaRecorder.stop();

            const blob = new Blob(parts, {

                type: "video/webm"
            })
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");

            document.body.appendChild(a);;

            a.style = "display: none";

            a.href = url;

            a.download = "test.webm";

            a.click();
        });
    });
});


let btn_record3 = document.getElementById("btn_record3").addEventListener('click', async () => {
    console.log(btn_record3);

    let main = document.getElementById("main-container");
    console.log(main);
    main.style.display = 'none';


    let stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true

    })

    // audio = navigator.mediaDevices.getUserMedia({
    //     audio:true,
    //     echocancellation:true,
    // })



    const mime = MediaRecorder.isTypeSupported("video/webm; codecs=vp9")
        ? "video/webm; codecs=vp9"
        : "video/webm"
    let mediaRecorder = new MediaRecorder(stream, {
        mimeType: mime
    })

    let chunks = []
    mediaRecorder.addEventListener('dataavailable', function (e) {
        chunks.push(e.data)
    })

    mediaRecorder.addEventListener('stop', function () {
        let blob = new Blob(chunks, {
            type: chunks[0].type
        })
        console.log(blob);
        let body = document.querySelector("body");
        console.log(body)

        let data = document.getElementById("data");
        console.log(data);
        data.src = URL.createObjectURL(blob);
        data.style.display = 'block'

        let main = document.getElementById("main-container");
        console.log(main);
        main.style.display = 'none'

        let download = document.getElementById('download');
        download.style.display = 'block'
        download.href = URL.createObjectURL(blob);
    });

    mediaRecorder.start();




})
// let cross = document.getElementById("cross");
// let main = document.getElementById("main-container");

// if (main.style.display = 'none') {
//     cross.style.display = 'block';
// }
// else{
//     cross.style.display = 'none';

// }

// cross.addEventListener("click", () => {
//     let main = document.getElementById("main-container");
//     console.log(main);
//     main.style.display = 'block';

//     let data = document.getElementById("data");
//     console.log(data);
//     data.style.display = 'none'
// })



