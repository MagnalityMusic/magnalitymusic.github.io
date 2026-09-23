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

    ${album.updates ? `
    <div class="album-updates">
        <h3>WHAT'S NEW — v${album.version}</h3>

       
            ${album.updates.map(update => `${update}`).join("")}
        
    </div>
` : ""}

  

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
        <li>Safe for YouTube & Twitch</li>
        <li>High-quality WAV format (44.1kHz / 16-bit)</li>
        <li>Free future updates</li>
        <li>No AI</li>

    </ul>

</section>

        </main>

    `;
}