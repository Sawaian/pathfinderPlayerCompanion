

const abilityModifier = (()=> {

    function thisModifier(num){
       let modifier = ((num - 10) / 2);
       return modifier;
    }

    console.log(thisModifier(14));

})();