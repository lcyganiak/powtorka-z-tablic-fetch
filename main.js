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

