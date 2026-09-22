const album = albums[albumName];

if (!album) {

    document.body.innerHTML = "<h1>Album not found</h1>";

} else {

    document.title = `${album.title} | Magnality`;

    document.body.innerHTML = `

        <header>

            <a href="../../">Magnality</a>

            <nav>
                <a href="../">Music</a>
                <a href="../../sound/">Sound</a>
                <a href="../../apps/">Apps</a>
            </nav>

        </header>


        <main class="album-page">

            <section class="album-header">

                <img
                    class="album-cover"
                    src="${album.image}"
                    alt="${album.title}"
                >

                <div class="album-info">

    <h1>${album.title}</h1>

    <p>${album.description}</p>

    <p class="album-meta">
        ${album.tracks} tracks · ${album.duration}
    </p>

    <div class="album-stores">

        <a href="${album.stores.itch}" target="_blank" aria-label="Itch.io">
            <i class="fa-brands fa-itch-io"></i>
        </a>

        <a href="${album.stores.unity}" target="_blank" aria-label="Unity Asset Store">
            <i class="fa-brands fa-unity"></i>
        </a>

        <a href="${album.stores.unreal}" target="_blank" aria-label="Fab">
            <i class="fa-brands fa-unreal-engine"></i>
        </a>

        <a href="${album.stores.bandcamp}" target="_blank" aria-label="Bandcamp">
            <i class="fa-brands fa-bandcamp"></i>
        </a>

    </div>

</div>

            </section>


            <section class="album-section">

                <h2>About</h2>

                <p>
                    ${album.about}
                </p>

            </section>


            <section class="album-section">

                <h2>Features</h2>

                <ul class="album-features">

                    <li>${album.tracks} seamlessly looping tracks</li>
                    <li>${album.duration} of music</li>
                    <li>Royalty-free for commercial & non-commercial use</li>

                </ul>

            </section>

        </main>

    `;
}