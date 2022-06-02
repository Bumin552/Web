const yeniGorev = document.querySelector('.input-gorev');
const yeniGorevbtnekle=document.querySelector('.btn-gorev-ekle')
const gorevListesi=document.querySelector('.gorev-listesi')

yeniGorevbtnekle.addEventListener('click', gorevekle);
gorevListesi.addEventListener('click',gorevSilTamamla);

function gorevSilTamamla(e)
{
    const tiklanilanEleman = e.target;

    if(tiklanilanEleman.classList.contains('btn-gorev-tamamlandi')){
          
         
    }
    if(tiklanilanEleman.classList.contains('btn-gorev-sil')){
        console.log('sil tiklandi')
        tiklanilanEleman.parentElement.remove();
  }
    
}

function gorevekle(e)
{
    
    e.preventDefault();
    //div oluşturma
    const gorevDiv = document.createElement('div');
    gorevDiv.classList.add('gorev-item');
    
    //li oluşturma
    const gorevLi =document.createElement('li')
    gorevLi.classList.add('gorev-tanim')
    gorevLi.innerText=yeniGorev.value;
    gorevDiv.appendChild(gorevLi);

    //tamamlandı butonu ekle
    const gorevTamamBtn = document.createElement('button')
    gorevTamamBtn.classList.add('gorev-btn');
    gorevTamamBtn.classList.add('btn-gorev-tamamlandi');
    gorevTamamBtn.innerHTML =  '<i class="fa-solid fa-check"></i>'
    gorevDiv.appendChild(gorevTamamBtn);

     //silindi butonu ekle
     const gorevSilBtn = document.createElement('button')
     gorevSilBtn.classList.add('gorev-btn');
     gorevSilBtn.classList.add('btn-gorev-sil');
     gorevSilBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
     gorevDiv.appendChild(gorevSilBtn);

     yeniGorev.value='';

    //ul'ye oluşturduğumuz divi ekleyelim
    gorevListesi.appendChild(gorevDiv)
}

