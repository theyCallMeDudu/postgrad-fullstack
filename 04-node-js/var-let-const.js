var z = 'Original Z';

{
    let x = 'Original X';
    var y = 'Original Y';

    console.log(`-- x: ${x} -- y: ${y} -- z: ${z} --`);
    {
        // novo escopo ==> novo X
        const x = "novo --- X";
        console.log(`-- x: ${x} -- y: ${y} -- z: ${z} --`);
    }
    // retorno ao escopo anterior ==> original X
    console.log(`-- x: ${x} -- y: ${y} -- z: ${z} --`);
}
console.log(`${z}`); // z é global
console.log(`${y}`); // y é global
console.log(`${x}`); // x é local e linha gera erro