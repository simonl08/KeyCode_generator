const insert = document.getElementById('insert');

document.addEventListener('keydown', (e) => { /* (e) = event */
	insert.innerHTML = `
        <div class="keyMain">
            ${e.keyCode}
        </div>
		<div class="key">
			${e.key === ' ' ? 'Space' : e.key}
			<p>event.key</p>
		</div>
		<div class="key">
			${e.keyCode}
			<p>event.keyWhich</p>
		</div>
		<div class="key">
			${e.code}
			<p>event.code</p>
		</div>
	`
});