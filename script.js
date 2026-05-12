function atualizar(){

    const agora = new Date();

    let h = agora.getHours();
    let m = agora.getMinutes();
    let s = agora.getSeconds();

    if (h < 10){
        h = "0" + h;
    }
    else{
        h = h
    }

    if (m < 10){
        m = "0" + m;
    }
    else{
        m = m
    }

    if (s < 10){
        s = "0" + s;
    }
    else{
        s = s
    }

const HoraFinal = h + ":" + m + ":" + s;

document.getElementById("relogio").textContent = HoraFinal;
}

setInterval(atualizar,1000);
atualizar();

//horario japao//

function atualizarJ(){

    const agora = new Date();

    let h = agora.getHours();
    let m = agora.getMinutes();
    let s = agora.getSeconds();

    if (h < 10){
        h = "0" + h;
    }
    else{
        h = h;
    }

    if (m < 10){
        m = "0" + m;
    }
    else{
        m = m
    }

    if (s < 10){
        s = "0" + s;
    }
    else{
        s = s
    }

const HoraFinal = h + ":" + m + ":" + s;

document.getElementById("relogioJ").textContent = HoraFinal;
}

setInterval(atualizarJ,1000);
atualizarJ();