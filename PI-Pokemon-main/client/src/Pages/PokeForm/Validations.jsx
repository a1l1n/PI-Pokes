
export default function Validations (input){
    let error = {required: false};
// NAME --------------------------------------------------------------------------------------------    
    if (!input){
        error.name = "Please, your Pokemon needs a name";
        error.required = true;
    };
    if (!/^[A-Z]/.test(input.name)){
        error.name = "First letter must be Uppercase";
        error.required = true;
    };
    if (!/^[a-zA-Z]+$/.test(input.name) ){
        error.name = "Only letters are accepted for your Pokemon";
        error.required = true;
    };
    if (!/\S{1,20}[^0-9]/.test(input.name)){
        error.name = "The PokeName must contain 2 to 20 characters, please try again";
        error.required = true;
    };
// HP ---------------------------------------------------------------------------------------------    
    if (!input.hp){
        error.hp = "Hp required";
        error.required = true;
    }
    if (input.hp <= 0 || input.hp > 200){
        error.hp = "Hp rate must be between 0 to 200, please try again";
        error.required = true;
    };
// ATTACK ----------------------------------------------------------------------------------------- 
    if (!input.attack){
        error.attack = "Attack rate required";
        error.required = true;
    }
    if (input.attack <= 0 || input.attack > 200){
        error.attack = "Attack rate must be between 0 to 200, please try again"
        error.required = true;
    };
// DEFENSE ---------------------------------------------------------------------------------------- 
    if (!input.defense){
        error.defense = "Defense rate required";
        error.required = true;
    }
    if (input.defense <= 0 || input.defense > 200){
        error.defense = "Defense rate must be between 0 to 200, please try again";
        error.required = true;
    };
// SPEED ------------------------------------------------------------------------------------------ 
    if (!input.speed){
        error.speed = "Speed rate required";
        error.required = true;
    }
    if (input.speed <= 0 || input.speed > 200){
        error.speed = "Speed rate must be between 0 to 200, please try again";
        error.required = true;
    };
// HEIGHT ----------------------------------------------------------------------------------------- 
    if (!input.height){
        error.height = "Height rate required";
        error.required = true;
    }
    if (input.height <= 0 || input.height > 200){
        error.height = "Height rate must be between 0 to 200, please try again";
        error.required = true;
    };
// WEIGHT ----------------------------------------------------------------------------------------- 
    if (!input.weight){
        error.weight = "Weight rate required";
        error.required = true;
    }
    if (input.weight <= 0 || input.weight > 200){
        error.weight = "Weight rate must be between 0 to 200, please try again";
        error.required = true;
    };
// TYPES- ----------------------------------------------------------------------------------------- 
    if (!input.types){
        error.types = "Type required";
        error.required = true;
    }
// IMG  --------------------------------------------------------------------------------------------
    if(!/([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|jpeg|avatars|png|svg|.jpeg|jpg|encrypted)(\?[^\s[",><]*)?/g.test(input.img)){
        error.img = "No valid Link, please try again";
        error.required = true;
    }
};
