// Datos de ejemplo para la comunidad
const communityData = {
    id: 'm9aa3btj-zn6ka',
    name: 'Cumpleaños de María',
    members: [
        {
            id: 'm1',
            name: 'Laura Martínez',
            role: 'Padre/Madre',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            events: 3,
            contributions: 500
        },
        {
            id: 'm2',
            name: 'Juan Pérez',
            role: 'Miembro',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            events: 2,
            contributions: 300
        }
    ],
    events: [
        {
            id: 'e1',
            name: 'Cumpleaños de María',
            date: '15 Marzo 2024',
            target: 2000,
            collected: 1500,
            progress: 75
        },
        {
            id: 'e2',
            name: 'Graduación de Juan',
            date: '20 Abril 2024',
            target: 1000,
            collected: 300,
            progress: 30
        }
    ]
};

// Función para obtener los datos de la comunidad
function getCommunityData(communityId) {
    // En una implementación real, esto haría una llamada a una API
    return communityData;
}

// Función para actualizar el dashboard con los datos de la comunidad
function updateDashboard(communityId) {
    const data = getCommunityData(communityId);
    
    // Actualizar información de la comunidad
    document.getElementById('communityName').textContent = data.name;
    document.getElementById('communityId').textContent = data.id;
    
    // Actualizar estadísticas
    document.querySelector('.stat-number:nth-child(1)').textContent = data.members.length;
    document.querySelector('.stat-number:nth-child(2)').textContent = data.events.length;
    document.querySelector('.stat-number:nth-child(3)').textContent = `$${data.events.reduce((sum, event) => sum + event.collected, 0)}`;
    
    // Actualizar lista de eventos
    const eventsGrid = document.querySelector('.events-grid');
    eventsGrid.innerHTML = data.events.map(event => `
        <div class="event-card">
            <div class="event-header">
                <h3>${event.name}</h3>
                <span class="event-date">${event.date}</span>
            </div>
            <div class="event-progress">
                <div class="progress-bar">
                    <div class="progress" style="width: ${event.progress}%"></div>
                </div>
                <span class="progress-text">$${event.collected} / $${event.target}</span>
            </div>
            <div class="event-actions">
                <button class="btn btn-primary">Ver detalles</button>
                <button class="btn btn-secondary">Compartir</button>
            </div>
        </div>
    `).join('');
    
    // Actualizar lista de miembros
    const membersList = document.querySelector('.members-list');
    membersList.innerHTML = data.members.map(member => `
        <div class="member-card">
            <img src="${member.image}" alt="${member.name}">
            <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
            <div class="member-stats">
                <span>Eventos: ${member.events}</span>
                <span>Contribuciones: $${member.contributions}</span>
            </div>
        </div>
    `).join('');
}

// Exportar funciones para uso en otros archivos
window.communityData = {
    getCommunityData,
    updateDashboard
}; 