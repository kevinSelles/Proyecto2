const personajesMarvel = [
  {
    tipo: 'Héroe',
    nombre: 'Spider-Man',
    alterEgo: 'Peter Parker',
    poderes: ['Super fuerza', 'Sentido arácnido', 'Trepar paredes', 'Lanzar telarañas'],
    imagen: './assets/Spider-Man.webp'
  },
  {
    tipo: 'Héroe',
    nombre: 'Iron Man',
    alterEgo: 'Tony Stark',
    poderes: ['Inteligencia avanzada', 'Traje de alta tecnología'],
    imagen: './assets/iron-man.webp'
  },
  {
    tipo: 'Villano',
    nombre: 'Loki',
    alterEgo: 'Loki',
    poderes: ['Magia', 'Manipulación de la realidad', 'Cambio de forma', 'Control mental', 'Longevidad'],
    imagen: './assets/loki.webp'
  },
  {
    tipo: 'Héroe',
    nombre: 'Capitán América',
    alterEgo: 'Steve Rogers',
    poderes: ['Fuerza sobrehumana', 'Reflejos mejorados', 'Escudo indestructible'],
    imagen: './assets/Capitan-america.webp'
  },
  {
    tipo: 'Villano',
    nombre: 'Thanos',
    alterEgo: 'Thanos',
    poderes: ['Super fuerza', 'Invulnerabilidad', 'Manipulación de la energía'],
    imagen: './assets/thanos.webp'
  },
  {
    tipo: 'Arma',
    nombre: 'Mjolnir',
    alterEgo: 'N/A',
    poderes: ['Control de rayos', 'Volar', 'Solo puede ser levantado por quien sea digno'],
    imagen: './assets/Mjolnir.webp'
  },
  {
    tipo: 'Lugar',
    nombre: 'Wakanda',
    alterEgo: 'N/A',
    poderes: ['Tecnología avanzada', 'Vibranium'],
    imagen: './assets/wakanda.webp'
  },
  {
    tipo: 'Villano',
    nombre: 'Magneto',
    alterEgo: 'Erik Lehnsherr',
    poderes: ['Control de metales', 'Magnetismo', 'Vuelo', 'Campo de fuerza'],
    imagen: './assets/Magneto.webp'
  },
  {
    tipo: 'Héroe',
    nombre: 'Thor',
    alterEgo: 'Thor Odinson',
    poderes: ['Control de rayos', 'Super fuerza', 'Volar', 'Longevidad'],
    imagen: './assets/thor.webp'
  },
  {
    tipo: 'Arma',
    nombre: 'Escudo del Capitán América',
    alterEgo: 'N/A',
    poderes: ['Indestructible', 'Absorción de energía', 'Absorción de impactos'],
    imagen: './assets/escudo-captain-america.webp'
  },
  {
    tipo: 'Villano',
    nombre: 'Ultron',
    alterEgo: 'N/A',
    poderes: ['Control de máquinas', 'Super inteligencia', 'Manipulación de energía', 'Regeneración'],
    imagen: './assets/ultron.webp'
  },
  {
    tipo: 'Héroe',
    nombre: 'Black Panther',
    alterEgo: 'T’Challa',
    poderes: ['Reflejos mejorados', 'Fuerza sobrehumana', 'Agilidad mejorada', 'Tecnología avanzada'],
    imagen: './assets/black-panther.webp'
  },
  {
    tipo: 'Arma',
    nombre: 'Rayo de Zeus',
    alterEgo: 'N/A',
    poderes: ['Poder del rayo'],
    imagen: './assets/rayo-zeus.webp'
  },
  {
    tipo: 'Villano',
    nombre: 'Doctor Doom',
    alterEgo: 'Victor Von Doom',
    poderes: ['Magia', 'Super inteligencia', 'Tecnología avanzada', 'Manipulación de energía'],
    imagen: './assets/doctor-doom.webp'
  },
  {
    tipo: 'Lugar',
    nombre: 'Asgard',
    alterEgo: 'N/A',
    poderes: ['Magia', 'Tecnología avanzada'],
    imagen: './assets/asgard.webp'
  },
  {
    tipo: 'Héroe',
    nombre: 'Ant-Man',
    alterEgo: 'Scott Lang',
    poderes: ['Cambio de tamaño', 'Control de hormigas'],
    imagen: './assets/ant-man.webp'
  },
  {
    tipo: 'Héroe',
    nombre: 'Viuda Negra',
    alterEgo: 'Natasha Romanoff',
    poderes: ['Habilidad en combate cuerpo a cuerpo', 'Sigilo', 'Uso de armas'],
    imagen: './assets/viuda-negra.webp'
  },
  {
    tipo: 'Villano',
    nombre: 'Duende Verde',
    alterEgo: 'Norman Osborn',
    poderes: ['Fuerza sobrehumana', 'Armas avanzadas', 'Volar con el planeador'],
    imagen: './assets/duende-verde.webp'
  },
  {
    tipo: 'Lugar',
    nombre: 'Xandar',
    alterEgo: 'N/A',
    poderes: ['Tecnología avanzada', 'Escudos de energía'],
    imagen: './assets/xandar.webp'
  },
  {
    tipo: 'Villano',
    nombre: 'Craneo Rojo',
    alterEgo: 'Johann Schmidt',
    poderes: ['Super fuerza', 'Control de energía'],
    imagen: './assets/craneo-rojo.webp'
  }
];

console.log(personajesMarvel);

const main = document.createElement('main');
main.id = 'contenedorPersonajes';
document.body.insertBefore(main, document.querySelector('footer'));

const nav = document.createElement('nav');
document.body.insertBefore(nav, document.querySelector('main'));

const navButtons = [
  {id: 'botonFiltrar' , texto: 'Filtrar'},
  {id: 'botonHeroe' , texto: 'Héroe'},
  {id: 'botonVillano' , texto: 'Villano'},
  {id: 'botonLugar' , texto: 'Lugar'},
  {id: 'botonArma' , texto: 'Arma'}
];



navButtons.forEach(({id , texto}) => {
  const boton = document.createElement('button');
  boton.id = id;
  boton.textContent = texto;
  nav.appendChild(boton);
});

personajesMarvel.forEach(personaje => {
  const section = document.createElement('section');
  section.classList.add('personaje');

  const img = document.createElement('img');
  img.src = personaje.imagen;
  img.alt = `Imagen del personaje: ${personaje.nombre}`;

  const info = document.createElement('div');

  const nombre = document.createElement('h3');
  nombre.textContent = personaje.nombre;

  const alterEgo = document.createElement('p');
  alterEgo.textContent = `Alter ego: ${personaje.alterEgo}`;

  const poderesLista = document.createElement('p');
  poderesLista.textContent = 'Poderes:';
  const poderes = document.createElement('ul');

  personaje.poderes.forEach(poder => {
    const li = document.createElement('li');
    li.textContent = poder;
    poderes.appendChild(li);
  })

  info.appendChild(nombre);
  info.appendChild(alterEgo);
  info.appendChild(poderesLista)
  info.appendChild(poderes);

  section.appendChild(img);
  section.appendChild(info);

  main.appendChild(section);
})

