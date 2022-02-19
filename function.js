document.getElementById('add-border').addEventListener('click', function () {
    const players = document.getElementById('players');
    players.style.border = '2px solid green';
});

function addBackground() {
    const players = document.getElementsByClassName('player');
    for (const player of players) {
        player.style.backgroundColor = 'pink';
    }
}

document.getElementById('add-player').addEventListener('click', function () {
    const addPlayer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    // console.log(player);
    player.innerHTML = `
    <h4 class="new-player">player-4</h4>
    <p>Repellendus aut sit laudantium illum iure in voluptate facilis corrupti!</p>
    `;
    addPlayer.appendChild(player);
})