valores=[];
const add_t = document.querySelector('#add_t');
const tarefa_btn= document.querySelector('#tarefa_btn')
const tdas= document.querySelector('#tdas')
const concl= document.querySelector('#concl')
const pend= document.querySelector('#pend')
const cont= document.querySelector('#cont')

tarefa_btn.addEventListener("click", function(){
    valores.push(add_t.value)
    console.log(valores)
})

tdas.addEventListener("click", function(){
    cont.textContent='';
   for(let i = 0; i < valores.length; i++){
       const li = document.createElement('li')
       li.textContent=valores[i];
       cont.appendChild(li);
   }
});

// const  add_t=this.add_t;
// const  tarefa_btn=this.tarefa_btn;
// const tdas=this.tdas;
// const concl=this.concl;
// const pend=this.pend;


