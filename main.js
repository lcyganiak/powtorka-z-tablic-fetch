const arr = ['czereśnie', 'truskawki', 'maliny']

// map 
const arrAfterMap = arr.map((item, index, originArr) =>{
    console.log('item, pierwszy obowiązkowy', item)
    console.log('index, drugi parametr nieobowiązkowy ', index)
    console.log('originArr trzeci parametr nieobowiązkowy', originArr)
 // to jest błąd te 2 linie z if(item === 'truskawki')
 // map nie służy do filtrowania.

//  if(item === 'truskawki') {
//     return
//  }
    return item + ' bardzo je lubię'
    // map zwraca tablice z taką samą liczbą elementów w środku
})

console.log('wynik', arrAfterMap)

// filter 
// zwraca tablice równą bądzi mniejszą od orginalnej
// !!!!!!!! elementy są nie zminione !!!!!!!!!!!!!!!
const zakupy = [
    {
        key: 'Truskawki',
        type: 'owoc'
    },
    {
        key: 'Pietruszka',
        type: 'Warzywo'
    },
    {
        key: 'Wołowina',
        type: 'Mięso'

    },
    {
        key: 'Piwo',
        type: 'Alkohol'
    }
]


const zakupyWithOutAlkohol = zakupy.filter(item => {
    console.log('Czym jest item w tym przypadku ', item)
    if(item.type !== 'Alkohol') {
        return item
    }
})

console.log('po filtrowaniu', zakupyWithOutAlkohol)
 
// Operatory porównania

const number1 = 500

const number2 = '500'

// operator ==

console.log('number1 == number2', number1 == number2) // zwróci true

// operator === 

console.log('number1 === number2', number1 === number2) // zwróci false


// operator !=
console.log('number1 != number2',number1 != number2)  // zwróci false

// operator !==
console.log('number1 !== number2',number1 !== number2)  // zwróci true


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! operator =
// = przypisuje wartość z lewej strony zminnej po prawej 
// const prawaStrtona = warosciZLewej

// reduce 

const liczy = [5, 6, 80, 500, 7868] 

// sumowanie wartości 

let suma = 0
 // for
for(let i =0; i < liczy.length; i++) {
    // console.log('suma i bierzaca liczba z tablicy liczby ', suma, liczy[i])
    
    suma = suma + liczy[i]
    // krótszy zapis suma = suma + liczy[i] to suma += liczy[i]

}
console.log(suma)

let sumaForEach = 0

liczy.forEach(item => {

    sumaForEach += item
})

// reduce 


const sumaReduce = liczy.reduce((previousValue, currentValue, index, orginalArr)=> {
    console.log("wartośc previousValue - początkowa", previousValue)
    console.log('wartośc currentValue', currentValue)
    console.log('wartości index', index)
    console.log('wartośc orginalArr', orginalArr)
    return previousValue + currentValue

}, 0)

console.log('sumaReduce', sumaReduce)

// podaj sume za zakupy bez alkoholu
const zakupy2 = [
    {
        key: 'Truskawki',
        type: 'owoc',
        price: 10
    },
    {
        key: 'Pietruszka',
        type: 'Warzywo',
        price: 4
    },
    {
        key: 'Wołowina',
        type: 'Mięso',
        price: 55

    },
    {
        key: 'Piwo',
        type: 'Alkohol',
        price: 100
    }
]
let wartoscZapupowBezAlkoholu = 0
for(let i = 0; i < zakupy2.length; i++) {
    if(zakupy2[i].type !== 'Alkohol') {
        wartoscZapupowBezAlkoholu += zakupy2[i].price
    }
}

console.log(wartoscZapupowBezAlkoholu)

// uzywając map, filtra i for/foreach

let sumaBezAloholu = 0

const filterAbndMap = zakupy2.filter(item => {
    return item.type !== 'Alkohol'
}).map(item => item.price)  // zwróci tablice [10, 4, 55]
let sum = 0
console.log(filterAbndMap)

filterAbndMap.forEach(item => {
    sum += item
})
console.log(sum)

// suma z użyciem reduce

const sumaWithReduce = zakupy2.reduce((previousValue, currentValue)=> {
    if(currentValue.type !== 'Alkohol') {
        return previousValue + currentValue.price
    } else {
        return previousValue + 0
    }
    
}, 0)

console.log(sumaWithReduce)


// search w stringach 

const imie = "Łukasz"

console.log(imie.search("kasz")) // zwróci 2 
// działenie searcha string rozbija na tablicę ["Ł", 'u', 'k', 'a', 's','z']
// podaje na którym indeksie zaczyna się szukana fraza 
console.log(imie.search('yszek')) // zwróci -1 bo szukanej frazy nie ma


// find i findIndexOf

// ad find - wada zwraca tylko jeden elelemt , pierwszy znaleziony

const mnijeNiz20 = zakupy2.find(item => item.price > 20 )
// poprawne rozwiązanie daje filtr
// zwróci     {
//     key: 'Truskawki',
//     type: 'owoc',
//     price: 10
// },


const mnijeNiz20FindIndex = zakupy2.findIndex(item => item.price > 20 )

// zwróci  0


const post = 'poniższego kodu na początku skryptu, KACZKA co pozwala na użycie reduce z implementacjami, które nie wspierają tej funkcji.'

const brzydkieSłowa = ['kaczka', 'inflacja', 'morawiecki', 'ziobro']
// czy brzykie słowa są w tekście post 
brzydkieSłowa.forEach(item => {
    const zDuzejPost = post.toUpperCase()
  const xd =  zDuzejPost.search(item.toUpperCase())
  console.log(xd)
})

// get , set w constructor class 

const obj = {
    name: "Jan",
    age: 50
}

obj.age = 51 // to jeste pewien rodzaj seta

class Pracownika {
    constructor(name, age, pensja, premia) {
        this.name = name
        this.age = age
        this.pensja = pensja
        this.premia = premia
    }

    // get 
    get info() {
        return `Imię pracowanika to: ${this.name} i jest w wieku: ${this.age}`
    }
    get zarobi() {
        return `Pracowniek ${this.name} zarabia pensji : ${this.pensja} oraz premi ${this.premia}`
    }
    get laczneZarobki() {
        return this.pensja + this.premia
    }
    // to jest błąd tak nie mozna w get 
    // get zmien() {
    //     this.pensja = this.premia + this.pensja
    // }

    // set 
    set podwyzka(val) {
        this.pensja = val
    }
}

 const obj2 = new Pracownika('Adam', 50, 4000, 1000)

 Object.seal(obj2) // uszczelniamy objekt, żeby go zminić musimy używać set

console.log( obj2.zarobi)

obj2.podwyzka = 5000


console.log( obj2.zarobi)
// fetch 
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(res => {
    console.log(res)
})
function cos() {
    console.log(123)
}

// za pomocą Js tworzymy jakiś elemnt html, do którego przypisujemy event click
// oba rozwiązania mają zapobiec sytułacji że po wczytaniu strony od razy , 
//bez naszej ingerncji wykonajsię kilki na elemncie
// document.getElementById('exmp').onclick = () => cos()
// oba rozwiązanie są poprawne, z tym że pierwsze jest nowsze, co nie oznacza że lepsze. 
// 
// document.getElementById('exmp').onclick = function() {

// }