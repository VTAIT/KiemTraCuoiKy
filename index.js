// bài 1
const $soA = document.getElementById('soA');
const $soB = document.getElementById('soB');
const $kq = document.getElementById('kq');
const $btnSum = document.getElementById('btn-sum');

$kq.innerHTML = "";

$soA.onfocus = () => {
    $kq.innerHTML = "";
};

$soB.onfocus = () => {
    $kq.innerHTML = "";
};

$btnSum.onclick = () => {
    let soA = Number($soA.value);
    let soB = Number($soB.value);

    if (typeof soA != 'number'){
        $kq.innerHTML += ` ${$kq.innerHTML} Số A không phải là số`;
    }

    if (typeof soB != 'number'){
        $kq.innerHTML += ` ${$kq.innerHTML} Số B không phải là số`;
        return;
    }

    if (soA == 0 && soB == 0){
        $kq.innerHTML = "";
        return;
    }

    if (soA > soB){
        $kq.innerHTML = "Số A phải nhỏ hơn số B";
        return;
    }

    if (soA == soB){
        $kq.innerHTML += ` ${soA} + ${soB} = ${soA*2}`;
        return;
    }

    let sum = 0;
    for (let index = soA; index <= soB; index++) {
        if (kiem_tra_snt(index)){
            $kq.innerHTML += ` ${index} + `;
            sum += index;
        }
    }
    let str = $kq.innerHTML;
    str.slice(0, -1); 
    $kq.innerHTML = ` Kết quả = ${str} = ${sum}`;
};

function kiem_tra_snt(n)
{
    var flag = true;
 
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    return flag;
}

const $soN = document.getElementById('soN');
const $drawTriangle = document.getElementById('drawTriangle');

$soN.onfocus = () => {
    $drawTriangle.innerHTML = "";
};

$soN.onchange = () => {
    let soN = $soN.value;
    let draw = numberOneTriangle(soN);
    $drawTriangle.innerHTML = draw;
}
function numberOneTriangle(n) {
    let draw = '';
    for (let index = 0; index < n; index++) {
        draw += `<div>`;
        for (let y = 0; y <= index; y++) {
            draw += '*';
        }
        draw += `</div>`;
    }
    return draw;
}