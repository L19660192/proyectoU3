document.addEventListener("DOMContentLoaded", function () {
    const projectsContainer = document.getElementById('projects');
    const aboutSection = document.getElementById('about');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalFrame = document.getElementById('modal-frame');
    const closeBtn = document.querySelector('.close-btn');

    const projects = [
        { 
            name: 'Actividad 1', 
            url: 'https://l19660192.github.io/Actividad1/', 
            image: 'https://via.placeholder.com/300x150/3498db/ffffff?text=Actividad+1' 
        },
        { 
            name: 'Cambiar de color de fondo', 
            url: 'https://l19660192.github.io/Actividad2/', 
            image: 'https://via.placeholder.com/300x150/f1c40f/ffffff?text=Cambiar+Color' 
        },
        { 
            name: 'Formulario de registro', 
            url: 'https://l19660192.github.io/Actividad3/', 
            image: 'https://imgs.search.brave.com/t02DxKLB9-R0HMrJPKNvij-N-xI8koqb2oHO65x0p4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rc3Rh/dGljLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9maWxlcy85ZjA0/ZmFhYzI0YWVkOGJm/OGZiMzgxMDI5ZGU5/NTExMjhkMWQzNjM3/M2Y4OTY3NTI2NWE2/NjU0ZDBjNDdiNzRi/MmQ4M2EyNmI2OGI4/MzRjZTJlZWEzYmZl/ODAwMTk2NmY3Njg5/NTg4ODEzOGYxMzVh/ODFkMDk5ZmMyMDdj/NzNiYg' 
        },
        { 
            name: 'Login', 
            url: 'https://l19660192.github.io/Login/', 
            image: 'https://imgs.search.brave.com/_sOMRtaVDFZ8LuCLYIOMUDJvNjakpeyZguIhhBsPWVc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODcx/OTY4MTU4L3ZlY3Rv/ci9sb2dpbi10ZW1w/bGF0ZS1iYWNrZ3Jv/dW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1xSEFSSThs/Z1g4ZGU3b2dudzJz/Qk82Wm1NR2pUSWh5/cFZFcjg1dlZYWmtB/PQ' 
        },
        { 
            name: 'Suma', 
            url: 'https://l19660192.github.io/Actividad4/', 
            image: 'https://imgs.search.brave.com/0WXTL7cwSxQF_z4hhW5B7qFyvmz6tpDBkkbvdRQCKig/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXRo/LWNlbnRlci5vcmcv/Y2RuL2RvL3NtYXJ0/LXByYWN0aWNlL2Fk/ZGl0aW9uL3R3by1k/aWdpdC1hZGRpdGlv/bi9hZGRpbmctb25l/LWRpZ2l0LW51bWJl/ci10by10d28tZGln/aXQtbnVtYmVycy10/aHVtYi5zdmc' 
        },
        { 
            name: 'Cambiar imagen', 
            url: 'https://l19660192.github.io/Actividad6/', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSo5-0nXhrsnTDEecdKmvgQZOYKhA1nOlAw&s' 
        },
        { 
            name: 'Temporizador', 
            url: 'https://l19660192.github.io/Actividad7/', 
            image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-temporizador-cronometro_138676-2420.jpg' 
        },
        { 
            name: 'Contador', 
            url: 'https://l19660192.github.io/Contador/', 
            image: 'https://i.pinimg.com/550x/2b/d8/9f/2bd89f0cb5be42d7f3b1c2190a700892.jpg' 
        },
        { 
            name: 'Lista de tareas', 
            url: 'https://l19660192.github.io/Actividad1Intermedio/', 
            image: 'https://w7.pngwing.com/pngs/338/556/png-transparent-task-list-thumbnail.png' 
        },
        { 
            name: 'Piedra, Papel o Tijeras', 
            url: 'https://l19660192.github.io/Actividad2Intermedio/', 
            image: 'https://hips.hearstapps.com/hmg-prod/images/people-playing-paper-rock-scissors-royalty-free-illustration-1583269312.jpg?crop=0.936xw:1.00xh;0.0337xw,0&resize=768:*' 
        },
        { 
            name: 'Galería de imágenes', 
            url: 'https://l19660192.github.io/Actividad4ntermedio/', 
            image: 'https://via.placeholder.com/300x150/8e44ad/ffffff?text=Galería' 
        },
        { 
            name: 'Convertidor de unidades', 
            url: 'https://l19660192.github.io/Actividad6Intermdio/', 
            image: 'https://play-lh.googleusercontent.com/R46vqH8qKkBTxEcTZJ3WzAfVaeG7xXHdKBCi6jnhoFadggWy8NoA3GfxnrSkpUYCxjE' 
        },
        { 
            name: 'Contador de palabras', 
            url: 'https://l19660192.github.io/Actividad7Intermedio/', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpshTwcNGZ9oTtyOdF168lJdIM4uDDN01LQ5Ca8U3TuaX9J00RprUExUUJUTm7TEYfcIY&usqp=CAU' 
        },
        { 
            name: 'Calculadora', 
            url: 'https://l19660192.github.io/calculadora/', 
            image: 'https://i.pinimg.com/originals/96/ee/cf/96eecf53d1ec129ea79aa2576067003b.png' 
        }
    ];

    // Generar las tarjetas dinámicamente
    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${project.image}" alt="${project.name}" class="card-image">
            <h3>${project.name}</h3>
            <p>Haz clic para ver más detalles</p>
        `;

        card.addEventListener('click', () => {
            openModal(project.name, project.url);
        });

        projectsContainer.appendChild(card);
    });

    // Función para abrir el modal
    function openModal(title, url) {
        modalTitle.textContent = title;
        modalFrame.src = url;
        modal.style.display = 'flex';
    }

    // Función para cerrar el modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalFrame.src = ''; // Limpiar el iframe
    });

    // Cerrar modal al hacer clic fuera de él
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalFrame.src = ''; // Limpiar el iframe
        }
    });

    // Mostrar la vista de "Proyectos"
    document.getElementById('view-projects').addEventListener('click', () => {
        document.getElementById('projects').style.display = 'flex';
        aboutSection.style.display = 'none';
    });

    // Mostrar la vista de "Sobre mí"
    document.getElementById('view-about').addEventListener('click', () => {
        aboutSection.style.display = 'block';
        document.getElementById('projects').style.display = 'none';
    });

    // Mostrar la vista inicial de "Proyectos"
    document.getElementById('view-projects').click();
});
