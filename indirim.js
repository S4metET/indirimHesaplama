const urunler = [
    {
    id: 1,
    urunAdi: "Macbook Seri 1",
    fiyat: 1500
},
{
    id: 2,
    urunAdi: "Macbook Seri 1",
    fiyat: 3000
},
{
    id: 3,
    urunAdi: "Macbook Seri 1",
    fiyat: 4500
},
{
    id: 4,
    urunAdi: "Macbook Seri 1",
    fiyat: 6000
},
{
    id: 5,
    urunAdi: "Macbook Seri 1",
    fiyat: 7500
}
]

let indirimOrani = prompt("İstediğin indirim oranını yaz");

let urunİndirimOrani = 0;
for (let i = 0; i < indirimOrani.length; i++) {
    urunİndirimOrani = urunİndirimOrani * 10 + (indirimOrani[i] - `0`);
}

const indirimliUrunler = [];
for (let i = 0; i < urunler.length; i++) {
    const urun = urunler[i];
    const indirimTutari = (urun.fiyat * indirimOrani) / 100;
    const tamİndirimOrani = indirimTutari - (indirimTutari % 1);
    indirimliUrunler.push({
        id: urun.id,
        ad: urun.urunAdi,
        fiyat: urun.fiyat,
        indirimliFiyat: urun.fiyat - tamİndirimOrani
    });
}
console.log("İndirimli Fiyatlar: ", indirimliUrunler);
