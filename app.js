function olustur() {
    const urunler = [
        { ad: "Bobatea", fiyat: 22000, resim: "img/bobatea.jpg" },
        { ad: "Cay", fiyat: 3000, resim: "img/cay.jpg" },
        { ad: "Cikolatali Kek", fiyat: 64000, resim: "img/cikolatalikek.jpg" },
        { ad: "Cilekli kek", fiyat: 9500, resim: "img/cileklikek.jpg" },
        { ad: "Gazoz", fiyat: 12500, resim: "img/gazoz.jpg" },
        { ad: "Kruvasan", fiyat: 9000, resim: "img/kruvasan.jpg" },
        { ad: "Matcha", fiyat: 15400, resim: "img/matcha.jpg" },
        { ad: "Milkshakeler", fiyat: 3700, resim: "img/milkshakeler.jpg" },
        { ad: "Tatlis Kurabiyeler", fiyat: 82000, resim: "img/tatliskurabiyeler.jpg" },
        { ad: "Tavsanli Tiramisu", fiyat: 2500, resim: "img/tavsanlitiramisu.jpg" }
    ];
    //Ürünlerin adedi için//
    let adet = document.getElementById("ad").value;
    //Eski kartları temizlemek için//
    document.getElementById("kartAlani").innerHTML = ""; 
       //Girilen sayı kadar kart göstermek için//
       for (let i = 0; i < adet; i++) { 
        let urun = urunler[i];
        let sinif = "kart";
        //Pahalı ürünleri ayırmak için ayrı bir sınıf//
        if (urun.fiyat > 10000) { 
            sinif = "kart pahali";
        }
        //HTML stringi//
        let kartHTML = "<div class='" + sinif + "'>" +
            "<img src='" + urun.resim + "' alt='" + urun.ad + "'>" +
            "<h3>" + urun.ad + "</h3>" +
            "<p>Fiyat: " + urun.fiyat + " TL</p>" +
            "</div>";
        document.getElementById("kartAlani").innerHTML += kartHTML;
    }
}
