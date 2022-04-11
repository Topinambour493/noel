function ouvreBoite(id){
    let image = document.querySelector("#"+id).nextElementSibling;
    image.style.margin="10px 0px 10px";
    image.style.height="160px";
}

function fermeBoite(id){
    let image = document.querySelector("#"+id).nextElementSibling;
    image.style.height="0px";
    image.style.margin="0px";
}

function créeCadeau(n) {
    let container = créeBalise(document.body,"div","container");
    for (i=1;i<=n;i++) {
        let cadeau = créeBalise(container,"div","cadeau");
        let boite = créeBalise(cadeau,"div","boite","a"+i.toString());
        let image = créeBalise(cadeau,"img","image");
        créeBalise(boite,"div","barre1");
        créeBalise(boite,"div","barre2");
        créeBalise(boite,"div","barre1");

        ajoutAtribut(image,"src","https://robohash.org/"+i*Math.random()+".png?size=180x160&set=set4&bgset=bg2");
        ajoutAtribut(boite,"onmouseover","ouvreBoite(this.id)");
        ajoutAtribut(boite,"onmouseover","ouvreBoite(this.id)");
        ajoutAtribut(boite,"onmouseleave","fermeBoite(this.id)" );
        créeBalise(cadeau,"div","couvercle");
    }
}

function ajoutAtribut(element,name,value) {
    element.setAttribute(name,value);
}

function créeBalise(parent,name,classe="",id="") {
    var newBalise = document.createElement(name);
    newBalise.classList.add(classe);
    newBalise.id=id
    parent.appendChild(newBalise);
    return newBalise;
}

créeCadeau(3);
