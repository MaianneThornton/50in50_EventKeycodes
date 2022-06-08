const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  console.log(event);

  insert.innerHTML = `
  <div class="key">
  <!-- (ternary) if e.key is equal to an empty space then display the text space else display the value found in event.key object -->
  ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
      </div>

      <div class="key">
      <!-- crossed out because it's deprecated (if does not display in future find an alternative or remove) -->
        ${event.keyCode}
        <small>event.keyCode</small>
      </div>

      <div class="key">
        ${event.code}
        <small>event.code</small>
      </div>
  `
})