function checkForm(el) {
    var nameOfGun = el.nameOfGun.value;
    var discription = el.discription.value;
    var cartridge = el.cartridge.value;
    var typeofgun = el.typeofgun.value;
    var damagerange = el.damagerange.value;

    console.log('All data: ' + nameOfGun, discription, cartridge, typeofgun, damagerange
    )
   
    return false;
}

