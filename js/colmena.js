window.addEventListener("load",(e)=> {
    let cordenadasiniciales = document.querySelector(".hexagono-base").getBoundingClientRect();
    let cordenadasinicialesc = document.querySelector("#containerDrop_a").getBoundingClientRect();
    const elements = document.querySelectorAll(".hexagono");
    // const containerDrop= document.getElementById("container_drop")
    const containerDrop= document.querySelectorAll(".container-drop")
    elements.forEach(element => {
        element.addEventListener('dragstart',e => {
            // console.log("dragstart")
            e.dataTransfer.setData('id',e.target.id)
        });
        element.addEventListener('dragend',e => {
            element.style.backgroundColor = ('#15CBB9');
            element.style.color=('white');
            var imgService=element.querySelector('.sevices')
            imgService.style.display = 'none';
            var containerDrop = document.getElementById("containerDrop_a");
            containerDrop.style.borderRadius="50px 50px 0px 0px";

        });

        element.addEventListener('drag',e => {
            // console.log('drag');
        });
        
    });
    containerDrop.forEach(container=>{
        
        container.addEventListener('dragenter', e =>{
        });
        container.addEventListener('dragleave', e =>{
            
        });
        container.addEventListener('dragover', e =>{
            
            e.preventDefault();
        });
        container.addEventListener('drop', e =>{
    
            
            let idElement = e.dataTransfer.getData('id')
            let idElementproces = e.dataTransfer.getData('id').split("_")[1]
            
            let idBox=container.id.split("_")[1]
            
				//idElementproces === idBox  ? container.appendChild(document.getElementById(idElement)) : alert("no puedes colocar esto aqui")
				container.appendChild(document.getElementById(idElement));
				window.idForm.classList.remove("hidden");
                window.containerForm.classList.remove("hidden");
                // window.containerForm.classList.remove("hidden")
            el= document.querySelector(".hexagono-base");
            let childs = document.querySelectorAll("#containerDrop_a .hexagono");
            let coords = el.getBoundingClientRect();
            let topcords= coords.top+window.scrollY 
            let rigthcord =coords.right
            let leftcord = coords.left+window.scrollX
				window.campoServicios.innerHTML = "";
            childs.forEach(child=>{	
					let service = document.createElement("span");
					service.textContent = child.textContent.trim();
					window.campoServicios.appendChild(service);
			})
            let tamañoPantalla = window.innerWidth;
            if(tamañoPantalla<=767){
                let [num1,num2] =ubicacionPanalMobile(childs.length);
                document.getElementById(idElement).style.position = "absolute";
                document.getElementById(idElement).style.top =`${Math.floor(topcords + parseInt(num2))}px`
                document.getElementById(idElement).style.left =`${Math.floor(rigthcord - parseInt(num1))}px`
                document.getElementById(idElement).style.right =`${Math.floor(leftcord + parseInt(num1))}px`
            }else{
            let [num1,num2] =ubicacionPanal(childs.length);
            document.getElementById(idElement).style.position = "absolute";
            document.getElementById(idElement).style.top =`${Math.floor(topcords + parseInt(num2))}px`
            document.getElementById(idElement).style.left =`${Math.floor(rigthcord - parseInt(num1))}px`
            document.getElementById(idElement).style.right =`${Math.floor(leftcord + parseInt(num1))}px`
            }
        });
        
    })
    function ubicacionPanal(numHexagonos){
        if(numHexagonos == 1){
            let num1 = 98
            let num2 = 226
            return [num1,num2] 
        }
        if(numHexagonos == 2){
            let num1 = 12
            let num2 =80
            return [num1,num2] 
        }
        if(numHexagonos == 3){
            let num1 = 96
            let num2 = -66
            return [num1,num2] 
        }
        if(numHexagonos == 4){
            let num1 = 266
            let num2 = -66
            return [num1,num2] 
        }
        if(numHexagonos == 5){
            let num1 = 350
            let num2 = 81
            return [num1,num2] 
        }
        if(numHexagonos == 6){
            let num1 = 266
            let num2 = 226
            return [num1,num2] 
        }
        
    }
    function ubicacionPanalMobile(numHexagonos){
        if(numHexagonos == 1){
            let num1 = 56
            let num2 = 136
            return [num1,num2] 
        }
        if(numHexagonos == 2){
            let num1 = 2
            let num2 =44
            return [num1,num2] 
        }
        if(numHexagonos == 3){
            let num1 = 54
            let num2 = -50
            return [num1,num2] 
        }
        if(numHexagonos == 4){
            let num1 = 162
            let num2 = -52
            return [num1,num2] 
        }
        if(numHexagonos == 5){
            let num1 = 218
            let num2 = 40
            return [num1,num2] 
        }
        if(numHexagonos == 6){
            let num1 = 165
            let num2 = 134
            return [num1,num2] 
        }
        
    }
});

