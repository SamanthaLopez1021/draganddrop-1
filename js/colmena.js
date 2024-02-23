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
            container.appendChild(document.getElementById(idElement))
            el= document.querySelector(".hexagono-base");
            let childs = document.querySelectorAll("#containerDrop_a .hexagono");
            let coords = el.getBoundingClientRect();
            let topcords= coords.top
            let rigthcord =coords.right
            
            
            console.log("elemento",coords)
            console.log("elemento",`${Math.floor(topcords + 50)}px`)
            console.log("elemento",document.getElementById(idElement))
            console.log("child",childs)
            let [num1,num2] =ubicacionPanal(childs.length) 
            document.getElementById(idElement).style.position = "absolute";
            document.getElementById(idElement).style.top =`${Math.floor(topcords + parseInt(num2))}px`
            document.getElementById(idElement).style.right =`${Math.floor(rigthcord - parseInt(num1))}px`
            
        });
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
        function ubicacionPanal(numHexagonos){
            if(numHexagonos == 1){
                let num1 = 154
                let num2 = 174
                return [num1,num2] 
            }
            if(numHexagonos == 2){
                let num1 = 210
                let num2 = 80
                return [num1,num2] 
            }
            if(numHexagonos == 3){
                let num1 = 152
                let num2 = -14
                return [num1,num2] 
            }
            if(numHexagonos == 4){
                let num1 = 40
                let num2 = -14
                return [num1,num2] 
            }
            if(numHexagonos == 5){
                let num1 = -14
                let num2 = 80
                return [num1,num2] 
            }
            if(numHexagonos == 6){
                let num1 = 42
                let num2 = 174
                return [num1,num2] 
            }
            
        }
});

