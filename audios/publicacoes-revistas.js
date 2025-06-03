document.addEventListener('DOMContentLoaded', function() {
    // Dados das revistas
    const journals = [
        {
            name: "Nature",
            area: "multidisciplinary",
            impact: "Fator de impacto: 42.778",
            url: "https://www.nature.com"
        },
        {
            name: "Science",
            area: "multidisciplinary",
            impact: "Fator de impacto: 41.845",
            url: "https://www.science.org"
        },
        {
            name: "The Lancet",
            area: "health",
            impact: "Fator de impacto: 59.102",
            url: "https://www.thelancet.com"
        },
        {
            name: "Journal of the American Chemical Society",
            area: "exact",
            impact: "Fator de impacto: 15.419",
            url: "https://pubs.acs.org/journal/jacsat"
        },
        {
            name: "Physical Review Letters",
            area: "exact",
            impact: "Fator de impacto: 9.161",
            url: "https://journals.aps.org/prl/"
        },
        {
            name: "Revista Brasileira de Ciências Sociais",
            area: "humanities",
            impact: "Qualis CAPES: A1",
            url: "http://anpocs.org/index.php/revista/rbcs"
        }
    ];

    // Dados das dicas
    const tips = [
        {
            title: "Conheça seu Público",
            content: "Adapte seu artigo ao perfil dos leitores da revista. Consulte artigos recentemente publicados para entender o estilo e nível esperado."
        },
        {
            title: "Seja Original",
            content: "Revistas valorizam pesquisas que trazem novas perspectivas ou abordagens inovadoras para problemas conhecidos."
        },
        {
            title: "Cuide da Metodologia",
            content: "Um desenho metodológico robusto é essencial para a aceitação do artigo. Justifique todas as escolhas metodológicas."
        },
        {
            title: "Escreva com Clareza",
            content: "Evite jargões excessivos e frases muito longas. Seu texto deve ser compreensível para pesquisadores da área, mas não necessariamente especialistas no tema específico."
        },
        {
            title: "Responda às Críticas",
            content: "Se seu artigo for rejeitado, leia cuidadosamente os comentários dos revisores e use-os para melhorar seu trabalho antes de submeter a outra revista."
        },
        {
            title: "Networking",
            content: "Participe de conferências e eventos científicos para construir relacionamentos com editores e pesquisadores da sua área."
        }
    ];

    // Dados dos recursos
    const resources = [
        {
            name: "Scimago Journal Rank - Ranking de revistas por área",
            url: "https://www.scimagojr.com"
        },
        {
            name: "Portal CAPES - Periódicos de acesso livre",
            url: "https://www.capes.gov.br"
        },
        {
            name: "SciELO - Biblioteca científica eletrônica",
            url: "https://www.scielo.org"
        },
        {
            name: "ResearchGate - Rede social acadêmica",
            url: "https://www.researchgate.net"
        },
        {
            name: "Academia.edu - Plataforma para compartilhamento de artigos",
            url: "https://www.academia.edu"
        }
    ];

    // Função para renderizar revistas
    function renderJournals(filteredJournals = journals) {
        const journalList = document.getElementById('journal-list');
        journalList.innerHTML = '';
        
        if (filteredJournals.length === 0) {
            journalList.innerHTML = '<p class="no-results">Nenhuma revista encontrada com esses critérios.</p>';
            return;
        }
        
        filteredJournals.forEach(journal => {
            const journalCard = document.createElement('div');
            journalCard.className = 'journal-card';
            journalCard.innerHTML = `
                <h3>${journal.name}</h3>
                <p>${journal.impact}</p>
                <a href="${journal.url}" target="_blank" rel="noopener noreferrer">Visite o site</a>
            `;
            journalList.appendChild(journalCard);
        });
    }

    // Função para renderizar dicas
    function renderTips() {
        const tipsGrid = document.getElementById('tips-grid');
        
        tips.forEach(tip => {
            const tipItem = document.createElement('div');
            tipItem.className = 'tip-item';
            tipItem.innerHTML = `
                <h3>${tip.title}</h3>
                <p>${tip.content}</p>
            `;
            tipsGrid.appendChild(tipItem);
        });
    }

    // Função para renderizar recursos
    function renderResources() {
        const resourcesList = document.getElementById('resources-list');
        
        resources.forEach(resource => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.name}</a>
            `;
            resourcesList.appendChild(listItem);
        });
    }

    // Filtros de revistas
    function setupFilters() {
        const journalSearch = document.getElementById('journal-search');
        const areaFilter = document.getElementById('area-filter');
        
        function applyFilters() {
            const searchTerm = journalSearch.value.toLowerCase();
            const selectedArea = areaFilter.value;
            
            const filtered = journals.filter(journal => {
                const matchesSearch = journal.name.toLowerCase().includes(searchTerm);
                const matchesArea = selectedArea === 'all' || journal.area === selectedArea;
                return matchesSearch && matchesArea;
            });
            
            renderJournals(filtered);
        }
        
        journalSearch.addEventListener('input', applyFilters);
        areaFilter.addEventListener('change', applyFilters);
    }

    // Mostrar/ocultar detalhes dos passos
    function setupStepDetails() {
        const showDetailsButtons = document.querySelectorAll('.show-details');
        
        showDetailsButtons.forEach(button => {
            button.addEventListener('click', function() {
                const content = this.nextElementSibling;
                this.classList.toggle('active');
                
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }

    // CTA Button
    function setupCTAButton() {
        const ctaButton = document.getElementById('cta-button');
        
        ctaButton.addEventListener('click', function() {
            alert('O guia completo será enviado para seu e-mail! Em breve você receberá uma cópia.');
            // Aqui você pode adicionar lógica para capturar e-mail ou redirecionar
        });
    }

    // Newsletter Form
    function setupNewsletter() {
        const form = document.getElementById('newsletter-form');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            alert(`Obrigado por assinar nossa newsletter! Um e-mail de confirmação foi enviado para ${email}`);
            this.reset();
        });
    }

    // Inicialização
    renderJournals();
    renderTips();
    renderResources();
    setupFilters();
    setupStepDetails();
    setupCTAButton();
    setupNewsletter();
});