let tabla=[
    {nombre:'Raul', apellido:'Perez', edad:'20', cedula:'100', direccion:'calle 2', correo:'a@a', telefono:'420', ciudad:'sm'},
    {nombre:'Juan', apellido:'Camargo', edad:'21', cedula:'200', direccion:'calle 4', correo:'b@b', telefono:'430', ciudad:'bg'},
    {nombre:'Maria', apellido:'Salas', edad:'22', cedula:'300', direccion:'calle 5', correo:'c@c', telefono:'440', ciudad:'md'}
]

let i=3;
let cuerpotabla = document.getElementById('tabla-usuarios')

const listar=()=>{
    let usuarios = "";

    for(let i = 0; i < tabla.length; i++){
        usuarios += 
            `<tr>
                <th scope="row">${i+1}</th>
                <td>${tabla[i].nombre}</td>
                <td>${tabla[i].apellido}</td>
                <td>${tabla[i].edad}</td>
                <td>${tabla[i].cedula}</td>
                <td>${tabla[i].direccion}</td>
                <td>${tabla[i].correo}</td>
                <td>${tabla[i].telefono}</td>
                <td>${tabla[i].ciudad}</td>
            </tr>`            
    }

    cuerpotabla.innerHTML = usuarios;
}

const registrar=()=>{
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const cedula = document.getElementById('cedula').value;
    const direccion = document.getElementById('direccion').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const ciudad = document.getElementById('ciudad').value;

    if(tabla.some(usuario => usuario.cedula === cedula)){
        alert("Esta cedula ya existe")
        return
    }

    if(!nombre || !apellido || !edad || !cedula || !direccion || !correo || !correo.includes('@') || !telefono || !ciudad){
        document.getElementById('required').classList.add('was-validated');
        return
    }

    const parts = correo.split('@');

    if (!(parts.length === 2 && parts[0].trim() && parts[1].trim())) {
        alert("Debes poner texto antes y despues del @")
        return
    }

    const nuevo = {nombre, apellido, edad, cedula, direccion, correo, telefono, ciudad};

    tabla.push(nuevo);
    listar();
}