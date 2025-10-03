
let hh1 = document.getElementById('hh1');
let hh2 = document.getElementById('hh2');

let W = document.getElementById('W');
let D1 = document.getElementById('D1');
let D2 = document.getElementById('D2');
let H = document.getElementById('H');
let S1 = document.getElementById('S1');
let S2 = document.getElementById('S2');
let but = document.getElementById('but');
let Delete = document.getElementById('Delete');
let Tention = document.getElementById('Tention');
let emee = document.getElementById('emee');

/////////////////Tantion///////////////////

but.onclick = function(){
    if(W.value && D2.value && D1.value && S2.value && S2.value && H.value !=''){
        ww = W.value * D2.value * S1.value;
        e =  H.value * (+D1.value + +D2.value);
        hh1.innerHTML ='TS1'+'<br>' + (ww/e).toFixed(3) + ' Ton';
        hh1.style.background = 'blue';
    
        www = W.value * D1.value * S2.value;
        ee =  H.value * (+D1.value + +D2.value);
        hh2.innerHTML ='TS2'+'<br>' + (www/ee).toFixed(3) + ' Ton';
        hh2.style.background = 'orange';
    }
}


Delete.onclick = function(){
    W.value = '';
    D1.value = '';
    D2.value = '';
    H.value = '';
    S1.value = '';
    S2.value = '';
    hh1.innerHTML ='';
    hh2.innerHTML ='';

}

Tention.onclick = function(){
    center.style.display = 'block';
    home.style.display = 'none';
    Masour.style.display = 'none';
    emee.style.display = 'none';
}

/////////////////Tantion///////////////////



////////////////////////////النسبة الماوية
        let butt = document.getElementById('butt');
        let but2 = document.getElementById('but2');
        let la = document.getElementById('la');
        let lb = document.getElementById('lb');
        let a = document.getElementById('a');
        let pppp = document.getElementById('pppp');
        let home = document.getElementById('home');
        let cccc = document.getElementById('cccc');



        butt.onclick = function(){
            let mans = lb.value / la.value * 100 ;
            if(mans <= 60){
                a.innerHTML = 'الحمل امن'  +"<br>" + mans.toFixed(2) + ' %';
                a.style.display = 'block';
                a.style.background = '#7FFF00';
            }else if(mans <= 80){
                a.innerHTML = ' توخي الحزر'  +"<br>" + mans.toFixed(2) + ' %';
                a.style.display = 'block';
                a.style.background = '#FFD700';
            }else if(mans >= 81  ){
                a.innerHTML = 'الحمل  ليس امن'  +"<br>" + mans.toFixed(2) + ' %';
                a.style.display = 'block';
                a.style.background = '#B22222';
            }
            
        }


        cccc.onclick =  function(){
            a.style.display = 'none';
            la.value = '';
            lb.value = '';
        }

        but2.onclick = function(){
            home.style.display = 'block';
            center.style.display = 'none';
            Masour.style.display = 'none';
            emee.style.display = 'none';
            clbs.style.display = 'none';
        }


////////////////////////////النسبة الماوية


// حمولة الواير ////////////////////////

        let lod1 = document.getElementById('lod1');
        let lod2 = document.getElementById('lod2');
        let but3 = document.getElementById('but3');
        let b3 = document.getElementById('b3');
        let a3 = document.getElementById('a3');
        let Masour = document.getElementById('Masour');



        but3.onclick = function(){
            let mans = lod1.value * 0.039 ;
            let man = lod2.value ;
            if(man == 45){
                b3.innerHTML = 'الحمل المسموح للعمل'  +"<br>" +( Math.pow(mans,2) * 45 / 5).toFixed(2) + ' Ton';
                a3.innerHTML = 'الحمل القطع للواير'  +"<br>" + (Math.pow(mans,2) * 45).toFixed(2)  + ' Ton';
                a3.style.display = 'block';
                a3.style.background = 'red';
                b3.style.display = 'block';
                b3.style.background = '#ffe600c2';
            }else if(man == 42){
                b3.innerHTML = 'الحمل المسموح للعمل'  +"<br>" + Math.pow(mans,2) * 42 / 5 + ' Ton' ;
                a3.innerHTML = 'الحمل القطع للواير'  +"<br>" + Math.pow(mans,2) * 42  + ' Ton';
                a3.style.display = 'block';
                a3.style.background = 'red';
                b3.style.display = 'block';
                b3.style.background = '#ffe600c2';
            }
            
        }

        function lll(){
            b3.style.display = 'none';
            a3.style.display = 'none';
            lod1.value = '';
            lod2.value = '';
        }
        


        but5.onclick = function(){
            home.style.display = 'none';
            Masour.style.display = 'block';
            center.style.display = 'none';
            emee.style.display = 'none';
            clbs.style.display = 'none';

        }


// حمولة الواير ////////////////////////



        // عدد الكلبسات لربط الواير

        let clbs = document.getElementById('clbs');
        let clabsat = document.getElementById('clabsat');
        let bt = document.getElementById('bt');
        let hclabs = document.getElementById('hclabs');



        bt.onclick = function(){
            let m = clabsat.value * 0.04;
            let mm = m * 4 +1;

            if( mm >= 1 && clabsat.value !=''){
                hclabs.innerHTML = Math.ceil(mm);
            }

        }

            but6.onclick = function(){
            home.style.display = 'none';
            Masour.style.display = 'none';
            center.style.display = 'none';
            emee.style.display = 'none';
            clbs.style.display = 'block';
        }

        // عدد الكلبسات لربط الواير



// but.onclick = function(){
//     mans = (lod1.value / lod2.value  * lod3.value / lod4.value);
//     hh1.innerHTML = mans + ' Ton';
// }



