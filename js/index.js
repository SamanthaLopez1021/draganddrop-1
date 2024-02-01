window.addEventListener("load",(e)=> {
    console.log("cargo el documento")
    const elements = document.querySelectorAll(".hexagono");
    // const containerDrop= document.getElementById("container_drop")
    const containerDrop= document.querySelectorAll(".container-drop")
    elements.forEach(element => {
        element.addEventListener('dragstart',e => {
            console.log("dragstart")
            e.dataTransfer.setData('id',e.target.id)
        });
        element.addEventListener('dragend',e => {
            console.log('drag End');
        });
        element.addEventListener('drag',e => {
            console.log('drag');
        });
        
    });
    containerDrop.forEach(container=>{
        
        container.addEventListener('dragenter', e =>{
            console.log("dragenter")
        });
        container.addEventListener('dragleave', e =>{
            console.log("dragleave")
        });
        container.addEventListener('dragover', e =>{
            e.preventDefault();
        });
        container.addEventListener('drop', e =>{
            
            let idElement = e.dataTransfer.getData('id')
            let idElementproces = e.dataTransfer.getData('id').split("_")[1]
            
            let idBox=container.id.split("_")[1]
            idElementproces === idBox  ? container.appendChild(document.getElementById(idElement)) : alert("no puedes colocar esto aqui")
            // container.appendChild(document.getElementById(idElement))
            
        });
    })

    const container_images = document.getElementById("container_images");
    let imagesArray =['p1.png','p2.png','p3.png','p4.png','p5.png','p6.png','p7.png','p8.png','p9.png','p10.png','p11.png','p12.png']  
    imagesArray.forEach((img,index) =>{
        let imgen = document.createElement("img")
        imgen.id= "imagenx_"+index
        imgen.dataset.id="imageny_"+index;
        imgen.setAttribute("class","image-pieza");
        imgen.style.zIndex=(2+index)+" "
        imgen.src='/img/rompecabezas/'+imagesArray[index]
        imgen.draggable = true
        container_images.appendChild(imgen)
    })
    const imageElements = document.querySelectorAll(".image-pieza");
    // const containerDrop= document.getElementById("container_drop")
    imageElements.forEach(img => {
        img.addEventListener('dragstart',e => {
            e.dataTransfer.setData('id',e.target.id)
            console.log("id-image-data" ,e.target.id)
        });
        img.addEventListener('dragend',e => {
            
        });
        img.addEventListener('drag',e => {
        });
    });
    for (let index = 0; index < imagesArray.length; index++) {
        let containerbox = document.getElementById("box_2");
        let imgenbox = document.createElement("div")
        imgenbox.id= "imageny_"+index
        imgenbox.setAttribute("class","image-box container-drop");
        containerbox.appendChild(imgenbox)
        
    }
    let containerDropTwo= document.querySelectorAll("#box_2 .container-drop");
        containerDropTwo.forEach(containerTwo => {
            containerTwo.addEventListener('dragover', e =>{
                e.preventDefault();
            });
            containerTwo.addEventListener('drop',e=>{
                let idContainerImage = e.target.id
                let imagewhitoutprocess = e.dataTransfer.getData('id')
                let idImage = e.dataTransfer.getData('id').split("_")[1];
                let idContainerImageProcess = idContainerImage.split("_")[1]
                

                let prueba= document.getElementById(imagewhitoutprocess)
                
                console.log(prueba,"este es el idde la imagen",idImage);
                if(idContainerImageProcess === idImage ){
                    containerTwo.appendChild(document.getElementById(imagewhitoutprocess))
                    prueba.style.position="absolute"
                    prueba.style.transform="scale(1.49)"
                }else{
                    alert("no puedes colocar esto aqui")     
                }
            })
            
        });
});

