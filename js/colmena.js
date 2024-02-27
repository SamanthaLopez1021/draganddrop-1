window.addEventListener("load",(e)=> {
    let cordenadasiniciales = document.querySelector(".hexagono-base").getBoundingClientRect();
    let cordenadasinicialesc = document.querySelector("#containerDrop_a").getBoundingClientRect();
    console.log("cornedanada inicial",cordenadasiniciales);
    console.log("cornedanada cuadro",cordenadasinicialesc);
    console.log("cornedanada restante",cordenadasiniciales.right - cordenadasinicialesc.right);
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
            let leftcord = coords.left
            
            
            console.log("elemento",coords)
            console.log("rigthcord",rigthcord);
            
            
            let [num1,num2] =ubicacionPanal(childs.length) 
            document.getElementById(idElement).style.position = "absolute";
            document.getElementById(idElement).style.top =`${Math.floor(topcords + parseInt(num2))}px`
            document.getElementById(idElement).style.left =`${Math.floor(rigthcord - parseInt(num1))}px`
            document.getElementById(idElement).style.right =`${Math.floor(leftcord + parseInt(num1))}px`
            console.log("finalcord",document.getElementById(idElement).style.right =`${Math.floor(rigthcord - parseInt(num1))}px`);
        });
    })
    function ubicacionPanal(numHexagonos){
        if(numHexagonos == 1){
            let num1 = 74
            let num2 = 174
            return [num1,num2] 
        }
        if(numHexagonos == 2){
            let num1 = 20
            let num2 = 80
            return [num1,num2] 
        }
        if(numHexagonos == 3){
            let num1 = 74
            let num2 = -14
            return [num1,num2] 
        }
        if(numHexagonos == 4){
            let num1 = 186
            let num2 = -14
            return [num1,num2] 
        }
        if(numHexagonos == 5){
            let num1 = 244
            let num2 = 80
            return [num1,num2] 
        }
        if(numHexagonos == 6){
            let num1 = 186
            let num2 = 174
            return [num1,num2] 
        }
        
    }
});

