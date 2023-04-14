var defaultThreads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Aaron",
        date: Date.now(),
        content: "Thread super intéressant",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Je suis d'accord"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Moi aussi"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Un truc incroyable",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Bonjour"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Non"
            }
        ]
    },
    {
        id: 3,
        title: "Thread avec un titre HYPER long",
        author: "Aaron",
        date: Date.now(),
        content: "Bon titre?",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Oui"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Non t nul"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

function create_threads() {
    console.log(threads);
    var container = document.getElementById('threads')
    for (let thread of threads) {
        var html = `
        <div class="row">
            <a href="thread.html?${thread.id}">
                <h4 class="title">
                    ${thread.title}
                </h4>
                <div class="bottom">
                    <p class="timestamp">
                        ${new Date(thread.date).toLocaleString()}
                    </p>
                    <p class="comment-count">
                        ${thread.comments.length} comments
                    </p>
                </div>
            </a>
        </div>
        `
        container.insertAdjacentHTML('beforeend', html);
    }
}

var root = document.querySelector(':root');

if (localStorage.getItem("modeSombreActive") == "true") {
    var modeSombreActive = true;
    root.style.setProperty('--couleur-principale', '#303030');
    root.style.setProperty('--couleur-max', '#000000')
    root.style.setProperty('--couleur-oppose-principale', '#ffffff');
    root.style.setProperty('--couleur-tertiaire', '#202020');
    root.style.setProperty('--couleur-oppose-secondaire', '#aaaaaa');
    document.getElementById('modeSombre').innerHTML = "Mode Sombre";
}
if (localStorage.getItem("modeSombreActive") == "false") {
    var modeSombreActive = false;
    root.style.setProperty('--couleur-principale', '#eeeeee');
    root.style.setProperty('--couleur-max', '#ffffff')
    root.style.setProperty('--couleur-oppose-principale', '#000000');
    root.style.setProperty('--couleur-tertiaire', '#ffffff');
    root.style.setProperty('--couleur-oppose-secondaire', '#5e5e5e');
    document.getElementById('modeSombre').innerHTML = "Mode Clair";
}
else {
    localStorage.setItem("modeSombreActive", "true");
    var modeSombreActive = true;
}


function modeSombre() {
    if (modeSombreActive) {
        root.style.setProperty('--couleur-principale', '#eeeeee');
        root.style.setProperty('--couleur-max', '#ffffff')
        root.style.setProperty('--couleur-oppose-principale', '#000000');
        root.style.setProperty('--couleur-tertiaire', '#ffffff');
        root.style.setProperty('--couleur-oppose-secondaire', '#5e5e5e');    
        document.getElementById('modeSombre').innerHTML = "Mode Clair";
        modeSombreActive = false
        localStorage.setItem("modeSombreActive", "false");
    }
    else {
        root.style.setProperty('--couleur-principale', '#303030');
        root.style.setProperty('--couleur-max', '#000000')
        root.style.setProperty('--couleur-oppose-principale', '#ffffff');
        root.style.setProperty('--couleur-tertiaire', '#202020');
        root.style.setProperty('--couleur-oppose-secondaire', '#aaaaaa');    
        document.getElementById('modeSombre').innerHTML = "Mode Sombre";
        modeSombreActive = true
        localStorage.setItem("modeSombreActive", "true");
    }
};
