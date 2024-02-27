const trigger=document.querySelector('[modalForm]');
const idModal=trigger?.getAttribute('modalForm');
const modal=document.getElementById(idModal);

modal?.addEventListener('click',(e)=>{
    if (e.target!==e.currentTarget) 
        return;
    conmutaModal(modal);
});
trigger?.addEventListener('click',()=>conmutaModal(modal));
const closers=document.querySelectorAll('[modalClose]');
closers?.forEach((c)=>{
    c.addEventListener('click',()=>conmutaModal(modal));
});

const fondo=document.createElement('div');
fondo.setAttribute('modalFondo', true);
fondo.classList.add('fondoModal','hidden');
document.body.appendChild(fondo);

document.addEventListener('keydown',(e)=>{
    if (e.key==='Escape' && !modal.classList.contains('hidden'))
        conmutaModal(modal);
});

function conmutaModal(mo){
    document.querySelector('[modalFondo]')?.classList.toggle('hidden');
    mo.classList.toggle('hidden');
}

