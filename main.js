const personajesMarvel = [
  {
    tipo: 'heroe',
    nombre: 'Spider-Man',
    alterEgo: 'Peter Parker',
    poderes: ['Super fuerza', 'Sentido arácnido', 'Trepar paredes', 'Lanzar telarañas'],
    imagen: './assets/Spider-Man.webp',
    descripcion: 'Peter Parker, un joven que adquiere poderes arácnidos tras ser mordido por una araña radiactiva. Usa sus habilidades para proteger la ciudad como Spider-Man.'
  },
  {
    tipo: 'heroe',
    nombre: 'Iron Man',
    alterEgo: 'Tony Stark',
    poderes: ['Inteligencia avanzada', 'Traje de alta tecnología'],
    imagen: './assets/iron-man.webp',
    descripcion: 'Tony Stark, un genio millonario e inventor, crea un traje tecnológico para salvar su vida y se convierte en Iron Man, miembro fundador de los Vengadores.'
  },
  {
    tipo: 'villano',
    nombre: 'Loki',
    alterEgo: 'Loki',
    poderes: ['Magia', 'Manipulación de la realidad', 'Cambio de forma', 'Control mental', 'Longevidad'],
    imagen: './assets/loki.webp',
    descripcion: 'Hermano adoptivo de Thor y dios del engaño, Loki alterna entre villano y antiheroe en su búsqueda de poder y reconocimiento.'
  },
  {
    tipo: 'heroe',
    nombre: 'Capitán América',
    alterEgo: 'Steve Rogers',
    poderes: ['Fuerza sobrehumana', 'Reflejos mejorados', 'Escudo indestructible'],
    imagen: './assets/Capitan-america.webp',
    descripcion: 'Steve Rogers fue transformado en un super soldado durante la Segunda Guerra Mundial. Es un símbolo de justicia, liderazgo y esperanza.'
  },
  {
    tipo: 'villano',
    nombre: 'Thanos',
    alterEgo: 'Thanos',
    poderes: ['Super fuerza', 'Invulnerabilidad', 'Manipulación de la energía'],
    imagen: './assets/thanos.webp',
    descripcion: 'El titán loco busca reunir las Gemas del Infinito para eliminar a la mitad del universo en un intento por restaurar el equilibrio.'
  },
  {
    tipo: 'arma',
    nombre: 'Mjolnir',
    alterEgo: 'N/A',
    poderes: ['Control de rayos', 'Volar', 'Solo puede ser levantado por quien sea digno'],
    imagen: './assets/Mjolnir.webp',
    descripcion: 'Arma mágica creada por Odin, rey de Asgard, pera entregarsela a su hijo, el dios Thor. Hecho de un metal casi indestructible, controla los rayos y está envuelto en un hechizo que permite empuñarlo solo a aquel que es digno.'
  },
  {
    tipo: 'lugar',
    nombre: 'Wakanda',
    alterEgo: 'N/A',
    poderes: ['Tecnología avanzada', 'Vibranium', 'Camuflaje para ocultarse'],
    imagen: './assets/wakanda.webp',
    descripcion: 'Es el país con la tecnología más avanzada del planeta. Cerrato al resto del mundo por un escudo reflector, es el unico país que produce vibranium, un metal extremadamente duro y valioso. Su protector es Black Panther.'
  },
  {
    tipo: 'villano',
    nombre: 'Magneto',
    alterEgo: 'Erik Lehnsherr',
    poderes: ['Control de metales', 'Magnetismo', 'Vuelo', 'Campo de fuerza'],
    imagen: './assets/Magneto.webp',
    descripcion:'Con su control del magnetismo, es capaz de manipular el metal a su antojo, lo que lo convierte en uno de los mutantes más poderosos. Su odio hacia los humanos, lo convierten en un villano temible.'
  },
  {
    tipo: 'heroe',
    nombre: 'Thor',
    alterEgo: 'Thor Odinson',
    poderes: ['Control de rayos', 'Super fuerza', 'Volar', 'Longevidad'],
    imagen: './assets/thor.webp',
    descripcion: 'Dios del trueno y príncipe de Asgard. Thor es un guerrero poderoso que protege los Nueve Reinos con su martillo Mjolnir.'
  },
  {
    tipo: 'arma',
    nombre: 'Escudo del Capitán América',
    alterEgo: 'N/A',
    poderes: ['Indestructible', 'Absorción de energía', 'Absorción de impactos'],
    imagen: './assets/escudo-captain-america.webp',
    descripcion: 'Escudo fabricado por Howard Stark, padre de Tony Stark, con vibranium de Wakanda y entregado al Capitán America durante la Segunda Guerra Mundial. No solo es casi indestructible, tambien es capaz de absorver la energia de grandes impactos, dandole a su portador la capacidad de resistir tras el.'
  },
  {
    tipo: 'villano',
    nombre: 'Ultron',
    alterEgo: 'N/A',
    poderes: ['Control de máquinas', 'Super inteligencia', 'Manipulación de energía', 'Regeneración'],
    imagen: './assets/ultron.webp',
    descripcion: 'Inteligencia Artificial Avanzada que ademas de absorver las información de cualquier base de datos de internet y de la Gema de la Mente, tambien posee parte de los conocimientos de las mentes de Tony Stark y Bruce Banner, además de absorver a Jarvis, la IA de Stark. Considera a los humanos una plaga a erradicar y consigue fabricarse un cuerpo robotico y una legión de androides para llevar a cabo su visión'
  },
  {
    tipo: 'heroe',
    nombre: 'Black Panther',
    alterEgo: 'T’Challa',
    poderes: ['Reflejos mejorados', 'Fuerza sobrehumana', 'Agilidad mejorada', 'Tecnología avanzada'],
    imagen: './assets/black-panther.webp',
    descripcion: 'T’Challa es el rey de Wakanda, una nación tecnológica oculta. Como Black Panther, defiende su reino y honra el legado de sus antepasados.'
  },
  {
    tipo: 'arma',
    nombre: 'Rayo de Zeus',
    alterEgo: 'N/A',
    poderes: ['Poder del rayo', 'Alcanza grandes velocidades', 'Efecto boomerang'],
    imagen: './assets/rayo-zeus.webp',
    descripcion: 'Junto a la Lanza de Odin, es considerada el arma más poderosa de los dioses. Controla los rayos y puede ser lanzadas a velocidades incalculables, atravesando todo a su paso'
  },
  {
    tipo: 'villano',
    nombre: 'Doctor Doom',
    alterEgo: 'Victor Von Doom',
    poderes: ['Magia', 'Super inteligencia', 'Tecnología avanzada', 'Manipulación de energía'],
    imagen: './assets/doctor-doom.webp',
    descripcion: 'Científico con una mente brillante y control sobre la magia, mezcla estos dos campos para crear inventos imposibles con los que robarle los poderes a otros seres con el anhelo de convertirse en más que un dios.'
  },
  {
    tipo: 'lugar',
    nombre: 'Asgard',
    alterEgo: 'N/A',
    poderes: ['Magia', 'Tecnología avanzada'],
    imagen: './assets/asgard.webp',
    descripcion: 'Reino de los conocidos como dioses nordicos, Thor, Odin, Loki, Freya, etc. Pequeño planeta con superficie plana lleno de poderes mágicos y seres imposibles.'
  },
  {
    tipo: 'heroe',
    nombre: 'Ant-Man',
    alterEgo: 'Scott Lang',
    poderes: ['Cambio de tamaño', 'Control de hormigas'],
    imagen: './assets/ant-man.webp',
     descripcion: 'Scott Lang, un ladrón reformado, hereda el traje de Ant-Man y se une a los Vengadores con su habilidad para cambiar de tamaño.'
  },
  {
    tipo: 'heroe',
    nombre: 'Viuda Negra',
    alterEgo: 'Natasha Romanoff',
    poderes: ['Habilidad en combate cuerpo a cuerpo', 'Sigilo', 'Uso de armas'],
    imagen: './assets/viuda-negra.webp',
    descripcion: 'Ex espía rusa entrenada desde pequeña, Natasha es una experta en combate y miembro clave de los Vengadores.'
  },
  {
    tipo: 'villano',
    nombre: 'Duende Verde',
    alterEgo: 'Norman Osborn',
    poderes: ['Fuerza sobrehumana', 'armas avanzadas', 'Volar con el planeador'],
    imagen: './assets/duende-verde.webp',
    descripcion: 'Empresario millonario que se dedica a crear armamento tecnológicamente avanzado que en ocasiones utiliza para sus propios fines como Duende Verde. Odia a Spider-Man sobre todas las cosas'
  },
  {
    tipo: 'lugar',
    nombre: 'Xandar',
    alterEgo: 'N/A',
    poderes: ['Tecnología avanzada', 'Escudos de energía'],
    imagen: './assets/xandar.webp',
    descripcion: 'Planeta similar a la tierra pero con tecnologia avanzada y abierto al comercio galáctico. Su policia, los Nova Corps, se encargan de mantener el orden de todo el planeta y de los sistemas que lo rodean'
  },
  {
    tipo: 'villano',
    nombre: 'Craneo Rojo',
    alterEgo: 'Johann Schmidt',
    poderes: ['Super fuerza', 'Control de energía'],
    imagen: './assets/craneo-rojo.webp',
    descripcion: 'Mano derecha de Hitler en la Segunda Guerra Mundial y miembro del grupo Hydra. Busca encontrar y manipular la energia del Teseracto (Gema del Espacio), con el cual, poder ganar la guerra, e incluso someter también a Hitler y conquistar el mundo'
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
  {id: 'botonHeroe' , texto: 'heroe'},
  {id: 'botonVillano' , texto: 'villano'},
  {id: 'botonLugar' , texto: 'lugar'},
  {id: 'botonArma' , texto: 'arma'},
  {id: 'botonTodos' , texto: 'todos'}
];



navButtons.forEach(({id , texto}) => {
  const boton = document.createElement('button');
  boton.id = id;
  boton.textContent = texto;
  nav.appendChild(boton);
});

const filtrarPersonajes = (tipo) => {
  const personajes = document.querySelectorAll('.personaje');

  personajes.forEach(personaje => {
    if (tipo === 'todos') {
      personaje.style.display = 'block';
    } else {
      if (personaje.classList.contains(tipo)) {
        personaje.style.display = 'block';
      } else {
        personaje.style.display = 'none';
      }
    }
  });
};

document.getElementById('botonHeroe').addEventListener('click', () => filtrarPersonajes('heroe'));
document.getElementById('botonVillano').addEventListener('click', () => filtrarPersonajes('villano'));
document.getElementById('botonLugar').addEventListener('click', () => filtrarPersonajes('lugar'));
document.getElementById('botonArma').addEventListener('click', () => filtrarPersonajes('arma'));
document.getElementById('botonTodos').addEventListener('click', () => filtrarPersonajes('todos'));

personajesMarvel.forEach(personaje => {
  const section = document.createElement('section');
  section.classList.add('personaje');
  section.classList.add(personaje.tipo);

  const img = document.createElement('img');
  img.src = personaje.imagen;
  img.alt = `Imagen del personaje: ${personaje.nombre}`;

  const info = document.createElement('div');

  const nombre = document.createElement('h3');
  nombre.textContent = personaje.nombre;
  info.appendChild(nombre);

  const alterEgo = document.createElement('p');
  if (personaje.alterEgo !== 'N/A' && personaje.alterEgo !== personaje.nombre) {
    alterEgo.textContent = personaje.alterEgo;
    info.appendChild(alterEgo);
  }

  const poderesLista = document.createElement('p');
  poderesLista.textContent = 'Poderes:';
  poderesLista.classList.add('titulo-poderes');

  const poderes = document.createElement('ul');
  poderes.classList.add('lista-poderes');
  info.appendChild(poderesLista);

  personaje.poderes.forEach(poder => {
    const li = document.createElement('li');
    li.textContent = poder;
    poderes.appendChild(li);
  })
  info.appendChild(poderes);

  const seguirLeyendo = document.createElement('button');
  seguirLeyendo.textContent = 'Seguir Leyendo';
  seguirLeyendo.classList.add('seguir-leyendo');
  info.appendChild(seguirLeyendo);

   seguirLeyendo.addEventListener('click', () => {
    const sectionClonada = section.cloneNode(true);
    sectionClonada.classList.add('section-clonada');

    const button = sectionClonada.querySelector('.seguir-leyendo');
    if (button) {
      button.remove();
    };

    descripcionDiv.innerHTML = '';
    descripcionDiv.appendChild(sectionClonada);

    modalSeguirLeyendo.classList.add('active');
  });

  const descripcion = document.createElement('p');
  descripcion.classList.add('descripcion-personaje');
  descripcion.textContent = personaje.descripcion;
  info.appendChild(descripcion);

  section.appendChild(img);
  section.appendChild(info);
  main.appendChild(section);

  
})

const modalSeguirLeyendo = document.createElement('div');
modalSeguirLeyendo.id = 'modal-seguir-leyendo';
modalSeguirLeyendo.classList.add('modal-seguir-leyendo');

const closeButton = document.createElement('span');
closeButton.classList.add('close');
closeButton.textContent = 'x';
modalSeguirLeyendo.appendChild(closeButton);

closeButton.addEventListener('click', () => {
  modalSeguirLeyendo.classList.remove('active');
})

const descripcionDiv = document.createElement('div');
descripcionDiv.classList.add('descripcion');
modalSeguirLeyendo.appendChild(descripcionDiv);

document.body.appendChild(modalSeguirLeyendo);

