console.log(document.mathOperation)
//alert('Jika ada notifikasi ini, js sudah berfungsi.') //alert itu notifikasi,
//let nama = prompt('Siapakah nama anda?') // prompt itu notifikasi tapi isi user input
//alert(`Nama anda adalah ${nama}`) // pake backslash `

// function fibonacci(n){
//     const fibo = [0,1]
//     for (let i = 2; i < n; i++ ){
//         fibo[1]= fibo[i - 1] + fibo [i - 2]
//     }
//     return fibo;
// }

document.getElementById('fiboForm');
document.addEventListener('submit', function (e){
    e.preventDefault();
    const n = parseInt(document.getElementById('fiboInput').value);
    document.getElementById('fiboResult').textContent = fibonacci(n);
});

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let prev = 0;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        const temp = current;
        current = current + prev;
        prev = temp;
    }

    return current;
}

document.getElementById('volForm');
document.addEventListener('submit', function (e) {
    e.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    document.getElementById('volResult').textContent = calcuVolume(length, width, height);
});

function calcuVolume(length, width, height) {
    return length * width * height;
}

document.getElementById('cubeForm');
document.addEventListener('submit', function (e) {
    e.preventDefault();
    const edge = parseFloat(document.getElementById('edge').value);
    document.getElementById('cubeResult').textContent = cube(edge);
});
function cube(edge) {
    let cube = 3 ** edge;
    return cube;
}



document.getElementById('tubeForm');
document.addEventListener('submit', function (e){
    e.preventDefault();
    const radius = parseFloat(document.getElementById('radius').value);
    const heightTube = parseFloat(document.getElementById('heightTube').value);
    document.getElementById('tubeResult').textContent = tube(radius, heightTube);
});
function tube(radius, heightTube){
    var PHI = 3.1415926535898;
    let tube = PHI * radius * radius * heightTube;
    return tube;
}

console.log('testing.')