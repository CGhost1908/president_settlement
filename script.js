const catalog = {
	house: {
		id: 'house',
		name: 'Ev',
		image: 'src/house.png',
		description: 'Nufusu canlandirir ve mahalle hissi verir.',
		effects: { pollution: 1, crowd: 2, education: -1, crime: 1, economy: -2, health: -1, happiness: 0 },
		addable: true,
	},
	park: {
		id: 'park',
		name: 'Park',
		image: 'src/park.png',
		description: 'Nefes aldirir, kalabaligi yumusatir.',
		effects: { pollution: -6, crowd: -4, education: 0, crime: -2, economy: 0, health: 1, happiness: 2 },
		addable: true,
	},
	school: {
		id: 'school',
		name: 'Okul',
		image: 'src/school.png',
		description: 'Egitimi yukari ceker, sucu azaltir.',
		effects: { pollution: 0, crowd: 3, education: 11, crime: -4, economy: 0, health: 0, happiness: -2 },
		addable: true,
	},
	policestation: {
		id: 'policestation',
		name: 'Polis',
		image: 'src/policestation.png',
		description: 'Sokak guvenligini saglar.',
		effects: { pollution: 0, crowd: 0, education: 1, crime: -7 },
		addable: true,
	},
	hospital: {
		id: 'hospital',
		name: 'Hastane',
		image: 'src/hospital.png',
		description: 'Saglik hizmeti ile sehir nefes alir.',
		effects: { pollution: 0, crowd: 2, education: 1, crime: -3, economy: 0, health: 4, happiness: 0 },
		addable: true,
	},
	firestation: {
		id: 'firestation',
		name: 'Itfaiye',
		image: 'src/firestation.png',
		description: 'Acil durumlara hizla yanit verir.',
		effects: { pollution: -5, crowd: 0, education: 0, crime: -5, economy: 0, health: 0, happiness: 0 },
		addable: true,
	},
	trashstation: {
		id: 'trashstation',
		name: 'Atik',
		image: 'src/trashstation.png',
		description: 'Kirliligi toplar, sehirin agirligini azaltir.',
		effects: { pollution: -11, crowd: -1, education: 0, crime: 2 },
		addable: true,
	},
	shop: {
		id: 'shop',
		name: 'Market',
		image: 'src/shop.png',
		description: 'Ticaret ve hareket getirir.',
		effects: { pollution: 1, crowd: 3, education: 0, crime: 2 },
		addable: true,
	},
	airport: {
		id: 'airport',
		name: 'Havalimani',
		image: 'src/airport.png',
		description: 'Sehire ulasim ve hareketlilik katar.',
		effects: { pollution: 5, crowd: 8, education: 1, crime: 1, economy: 7, health: 0, happiness: 3 },
		addable: false,
	},
	factory: {
		id: 'factory',
		name: 'Fabrika',
		image: 'src/factory.png',
		description: 'Ekonomi getirir ama kirlilik de uretir.',
		effects: { pollution: 12, crowd: 0, education: -2, crime: 4, economy: 10, health: -3, happiness: -4 },
		addable: true,
	},
	santral: {
		id: 'santral',
		name: 'Santral',
		image: 'src/santral.png',
		description: 'Enerji saglar, yan etkileri vardir.',
		effects: { pollution: 8, crowd: 0, education: 0, crime: 3 },
		addable: true,
	},
};

const statOrder = ['pollution', 'crowd', 'education', 'crime', 'health', 'economy', 'happiness'];
const statMeta = {
	pollution: {
		label: 'Kirlilik',
		short: 'Kir',
		icon: 'IC1',
		min: 0,
		max: 99,
		lowText: 'Sehirin nabzi dustu, yasam sönmeye basladi.',
		highText: 'Sehir kul olup yandi.',
		color: '#f59e0b',
	},
	crowd: {
		label: 'Kalabalik',
		short: 'Kal',
		icon: 'IC2',
		min: 30,
		max: 99,
		lowText: 'Sokaklar bosaldi, sehir kan kaybetti.',
		highText: 'Sehir nefes alamadi, kalabalik baskin cikardi.',
		color: '#38bdf8',
	},
	education: {
		label: 'Egitim',
		short: 'Egt',
		icon: 'IC3',
		min: 10,
		max: 100,
		lowText: 'Sehir gelecegini kaybetti.',
		highText: 'Egitim dengesi fazla yukselip sehir hayatini kilitledi.',
		color: '#86efac',
	},
	crime: {
		label: 'Suc',
		short: 'Suc',
		icon: 'IC4',
		min: 0,
		max: 99,
		lowText: 'Sehir dogal akisini kaybetti.',
		highText: 'Sokaklar suca teslim oldu.',
		color: '#fb7185',
	},
	health: {
		label: 'Saglik',
		short: 'Sag',
		icon: 'IC5',
		min: 10,
		max: 100,
		lowText: 'Sehir saglik krizine girdi.',
		highText: 'Saglik yuklenmesi diger sistemleri kitledi.',
		color: '#34d399',
	},
	economy: {
		label: 'Ekonomi',
		short: 'Eko',
		icon: 'IC6',
		min: 10,
		max: 100,
		lowText: 'Ekonomi zayifladi, isler durdu.',
		highText: 'Ekonomi asiri sisip sehir dengesini bozdu.',
		color: '#fbbf24',
	},
	happiness: {
		label: 'Mutluluk',
		short: 'Mut',
		icon: 'IC7',
		min: 20,
		max: 100,
		lowText: 'Sehirde moral coktu.',
		highText: 'Yuksek beklenti dalgasi duzeni bozdu.',
		color: '#a78bfa',
	},
};

const BOARD_SIZE = 17;
const houseIndexes = [6 ,16, 8, 4, 5, 9];

function createInitialTiles() {
	const tiles = Array(BOARD_SIZE).fill(null);
	for (const index of houseIndexes) {
		if (index >= 0 && index < BOARD_SIZE) {
			tiles[index] = 'house';
		}
	}
	return tiles;
}

const lockedTiles = Array.from({ length: BOARD_SIZE }, (_, index) => houseIndexes.includes(index));

function isLockedTile(index) {
	return Boolean(lockedTiles[index]);
}

const state = {
    tiles: createInitialTiles(),
    selectedBuildingId: null,
    gameEnded: false,
    destroying: Array(BOARD_SIZE).fill(false),
    layoutMode: false,
    positions: [
	{
		"x": 49,
		"y": 9
	},
	{
		"x": 54,
		"y": 15
	},
	{
		"x": 59,
		"y": 21
	},
	{
		"x": 64,
		"y": 27
	},
	{
		"x": 69,
		"y": 33
	},
	{
		"x": 74,
		"y": 39
	},
	{
		"x": 42,
		"y": 23
	},
	{
		"x": 36,
		"y": 30
	},
	{
		"x": 48,
		"y": 30
	},
	{
		"x": 64,
		"y": 48
	},
	{
		"x": 29,
		"y": 35
	},
	{
		"x": 60,
		"y": 58
	},
	{
		"x": 35,
		"y": 43
	},
	{
		"x": 42,
		"y": 50
	},
	{
		"x": 48,
		"y": 57
	},
	{
		"x": 54,
		"y": 66
	},
	{
		"x": 54,
		"y": 37
	}
],
	isDragging: false,
	draggingBuildingId: null,
};

const baseStats = {
	pollution: 36,
	crowd: 38,
	education: 42,
	crime: 18,
	health: 55,
	economy: 45,
	happiness: 50,
};

let currentStats = { ...baseStats };

function getStats() {
	const cloned = { ...currentStats };
	for (const key of statOrder) cloned[key] = clamp(Math.round(cloned[key]), 0, 100);
	return cloned;
}

const palette = document.getElementById('palette');
const board = document.getElementById('board');
const statsContainer = document.getElementById('stats');
const boardStats = document.getElementById('boardStats');
const summary = document.getElementById('summary');
const startOverlay = document.getElementById('startOverlay');
const boardCount = document.getElementById('boardCount');
const endOverlay = document.getElementById('endOverlay');
const endKicker = document.getElementById('endKicker');
const endTitle = document.getElementById('endTitle');
const endMessage = document.getElementById('endMessage');
const endDetails = document.getElementById('endDetails');
const restartButton = document.getElementById('restartButton');
const startButton = document.getElementById('startButton');
const toggleLayoutModeButton = document.getElementById('toggleLayoutMode');
const exportLayoutButton = document.getElementById('exportLayout');
let destructionTimers = Array(BOARD_SIZE).fill(null);
let destructionStartedAt = Array(BOARD_SIZE).fill(null);
let constructionTimers = Array(BOARD_SIZE).fill(null);
let constructionStartedAt = Array(BOARD_SIZE).fill(null);
let constructionBuildingId = Array(BOARD_SIZE).fill(null);
let constructionSourceIndex = Array(BOARD_SIZE).fill(null);
let tickInterval = null;
let dayInterval = null;
let currentDay = 1;
let bestDay = Number(localStorage.getItem('bestDay') || '1');
const dayCountEl = document.getElementById('dayCount');
const endImage = document.getElementById('endImage');

let gameStarted = false;

function setDragging(isDragging) {
	state.isDragging = isDragging;
	if (!isDragging) {
		state.draggingBuildingId = null;
		document.querySelectorAll('.board-tile.hover-preview').forEach((n) => n.classList.remove('hover-preview'));
	}
	document.body.classList.toggle('dragging', isDragging);
}

function clamp(value, min, max) {
	return Math.min(max, Math.max(min, value));
}

function getBuildingList() {
	return Object.values(catalog);
}

function buildPalette() {
	palette.innerHTML = getBuildingList()
		.filter((building) => building.addable)
		.map((building) => {
			return `
				<article class="building-card icon-only${state.selectedBuildingId === building.id ? ' selected' : ''}" draggable="true" tabindex="0" data-building-id="${building.id}" aria-label="${building.name}" title="${building.name}">
					<img src="${building.image}" alt="${building.name}">
                    <span class="building-name">${building.name}</span>
				</article>
			`;
		})
		.join('');
}

function clearDestruction(index) {
	if (destructionTimers[index]) {
		clearTimeout(destructionTimers[index]);
		destructionTimers[index] = null;
	}

	destructionStartedAt[index] = null;

	state.destroying[index] = false;
}

function clearConstruction(index) {
	if (constructionTimers[index]) {
		clearTimeout(constructionTimers[index]);
		constructionTimers[index] = null;
	}

	constructionStartedAt[index] = null;
	constructionBuildingId[index] = null;
	constructionSourceIndex[index] = null;
}

function startDestruction(index) {
	if (state.gameEnded || !state.tiles[index] || state.destroying[index] || isLockedTile(index)) {
		return;
	}

	state.destroying[index] = true;
	destructionStartedAt[index] = Date.now();
	refresh();

	destructionTimers[index] = setTimeout(() => {
		state.tiles[index] = null;
		clearDestruction(index);
		refresh();
	}, 1000);
}

function getFailure(stats) {
	const issues = [];

	for (const key of statOrder) {
		const meta = statMeta[key];
		const value = stats[key];
		if (value < meta.min) {
			issues.push({ key, direction: 'low', distance: meta.min - value });
		} else if (value > meta.max) {
			issues.push({ key, direction: 'high', distance: value - meta.max });
		}
	}

	if (!issues.length) {
		return null;
	}

	issues.sort((a, b) => b.distance - a.distance);
	return issues[0];
}

function getFailureMessage(issue) {
	const meta = statMeta[issue.key];
	return issue.direction === 'low' ? meta.lowText : meta.highText;
}

function hexToRgb(hex) {
	const normalized = hex.replace('#', '');
	if (normalized.length !== 6) {
		return { r: 125, g: 211, b: 252 };
	}

	return {
		r: Number.parseInt(normalized.slice(0, 2), 16),
		g: Number.parseInt(normalized.slice(2, 4), 16),
		b: Number.parseInt(normalized.slice(4, 6), 16),
	};
}

function getDarkenedColor(hex, value) {
	const { r, g, b } = hexToRgb(hex);
	const distance = Math.abs(value - 50) / 50;
	const factor = 1 - distance * 0.55;
	const dr = Math.round(r * factor);
	const dg = Math.round(g * factor);
	const db = Math.round(b * factor);
	return `rgb(${dr}, ${dg}, ${db})`;
}

function renderStats(stats) {
	if (!boardStats) {
		return;
	}

	boardStats.innerHTML = statOrder
		.map((key) => {
			const meta = statMeta[key];
			const value = stats[key];
			const barColor = getDarkenedColor(meta.color, value);
			return `
				<div class="stat-line">
					<div class="stat-head">
						<span class="stat-name">${meta.label}</span>
						<span class="stat-value">${value}</span>
					</div>
					<div class="stat-track">
						<span class="stat-fill" style="width:${value}%; background:${barColor};"></span>
					</div>
				</div>
			`;
		})
		.join('');
}

function renderBoard() {
	board.innerHTML = state.tiles
		.map((buildingId, index) => {
			const building = buildingId ? catalog[buildingId] : null;
			const destroying = state.destroying[index];
			const destructionStarted = destructionStartedAt[index];
			const destructionElapsed = destroying && destructionStarted ? Math.max(0, Date.now() - destructionStarted) : 0;
			const constructing = Boolean(constructionTimers[index]);
			const constructionStarted = constructionStartedAt[index];
			const constructionElapsed = constructing && constructionStarted ? Math.max(0, Date.now() - constructionStarted) : 0;
			const locked = isLockedTile(index);
			const pos = state.positions && state.positions[index];
			const style = pos ? `style="left:${pos.x}%; top:${pos.y}%"` : '';
			const previewId = state.isDragging ? state.draggingBuildingId : state.selectedBuildingId;
			const previewImage = !building && constructing && constructionBuildingId[index] && catalog[constructionBuildingId[index]]
				? catalog[constructionBuildingId[index]].image
				: !building && previewId && catalog[previewId]
					? catalog[previewId].image
					: '';
			return `
				<div class="board-tile ${building ? 'occupied' : 'empty'}${destroying ? ' destroying' : ''}${constructing ? ' constructing' : ''}${locked ? ' locked' : ''}" data-index="${index}" tabindex="0" role="button" aria-label="${building ? building.name : 'Bos schema'}" ${style}>
					<img class="schema-icon" src="src/schema.png" alt="">
					${!building ? `<img class="preview-building" src="${previewImage}" alt="" aria-hidden="true">` : ''}
					${constructing ? `<div class="construction-progress" aria-hidden="true"><i style="animation-delay:-${constructionElapsed}ms;"></i></div>` : ''}
					${destroying ? `<div class="destruction-progress" aria-hidden="true"><i style="animation-delay:-${destructionElapsed}ms;"></i></div>` : ''}
					${building ? `<img class="placed-building" draggable="${locked ? 'false' : 'true'}" data-building-id="${building.id}" data-source-index="${index}" src="${building.image}" alt="${building.name}">` : ''}
					${building && !destroying && !locked ? `<button class="clear-button" type="button" data-action="clear" aria-label="${building.name} sil">x</button>` : ''}
				</div>
			`;
		})
		.join('');

	const emptyTiles = board.querySelectorAll('.board-tile.empty');
	emptyTiles.forEach((tile) => {
		tile.addEventListener('dragenter', () => {
			if (!state.isDragging) return;
			const preview = tile.querySelector('.preview-building');
			if (!preview || !catalog[state.draggingBuildingId]) return;
			preview.src = catalog[state.draggingBuildingId].image;
			preview.style.opacity = '0.45';
		});

		tile.addEventListener('dragleave', () => {
			const preview = tile.querySelector('.preview-building');
			if (!preview) return;
			preview.removeAttribute('src');
			preview.style.opacity = '0';
			preview.style.display = 'none';
			setTimeout(() => {
				preview.style.display = 'block';
			}, 300);
		});
	});
}

function findNearestSlotIndex(x, y) {
	if (!state.positions || !state.positions.length) return -1;
	let best = -1;
	let bestDist = Infinity;
	for (let i = 0; i < state.positions.length; i += 1) {
		const p = state.positions[i];
		if (!p) continue;
		const dx = p.x - x;
		const dy = p.y - y;
		const dist = Math.sqrt(dx * dx + dy * dy);
		if (dist < bestDist) {
			bestDist = dist;
			best = i;
		}
	}
	return best;
}

function updateSummary(stats) {
	const occupiedCount = state.tiles.filter(Boolean).length;
	boardCount.textContent = `${occupiedCount} / ${state.tiles.length} dolu`;

	const activeSelection = state.selectedBuildingId ? `Secili bina: ${catalog[state.selectedBuildingId].name}. ` : '';
	const failure = getFailure(stats);

	if (state.gameEnded) {
		return;
	}

	if (failure) {
		if (summary) {
			summary.textContent = `${activeSelection}${getFailureMessage(failure)}`;
		}
		return;
	}

	if (occupiedCount === state.tiles.length) {
		if (summary) {
			summary.textContent = `${activeSelection}Schema'lar dolu. Oyun sonsuz akista devam ediyor.`;
		}
		return;
	}

	if (summary) {
		summary.textContent = `${activeSelection}Sonsuz mod aktif. Gun arttikca tick hizi 2x katlaniyor.`;
	}
}

function getEndMessage(mode, issue, stats) {
	if (mode === 'win') {
		return 'Tum schema alanlari dengeli sekilde dolduruldu. AI raporu: Bu sehir yasiyor, nefes aliyor ve ayakta kalmayi basardi.';
	}

	const statName = statMeta[issue.key].label;
	const currentValue = stats[issue.key];
	const limit = issue.direction === 'low' ? statMeta[issue.key].min : statMeta[issue.key].max;
	return `AI raporu: ${getFailureMessage(issue)} ${statName} degeri ${currentValue} noktasinda kaldi, sinir ${limit} idi.`;
}

function showEnd(mode, issue, stats) {
	state.gameEnded = true;
	endOverlay.classList.remove('hidden');
	if (tickInterval) {
		clearInterval(tickInterval);
		tickInterval = null;
	}
	if (dayInterval) {
		clearInterval(dayInterval);
		dayInterval = null;
	}

	if (mode === 'win') {
		endKicker.textContent = 'Basari';
		endTitle.textContent = 'Sehir Dengede';
	} else {
		endKicker.textContent = 'Oyun Bitti';
		endTitle.textContent = 'AI Sonuclandi';
	}

	endMessage.textContent = getEndMessage(mode, issue, stats);
	endDetails.innerHTML = statOrder
		.map((key) => `<div class="end-line"><strong>${statMeta[key].label}</strong>: ${stats[key]}</div>`)
		.join('');

	if (endImage) {
		if (mode === 'lose') {
			endImage.src = 'src/schema.png';
			endImage.alt = 'AI failure image';
			endImage.classList.remove('hidden');
		} else if (mode === 'win') {
			endImage.src = 'src/plate.png';
			endImage.alt = 'AI success image';
			endImage.classList.remove('hidden');
		}
	}
}

function refresh() {
	const stats = getStats();
	buildPalette();
	renderBoard();
	renderStats(stats);
	updateSummary(stats);

	const failure = getFailure(stats);
	if (failure) {
		showEnd('lose', failure, stats);
	}
}

function tick() {
	if (state.gameEnded) return;
	const deltas = Object.fromEntries(statOrder.map((key) => [key, 0]));
	const buildingCounts = {};
	for (const b of state.tiles) {
		if (!b) continue;
		buildingCounts[b] = (buildingCounts[b] || 0) + 1;
		const building = catalog[b];
		for (const key of statOrder) {
			deltas[key] += building.effects[key] || 0;
		}
	}

	deltas.health += (buildingCounts.hospital || 0) * 1.5 + (buildingCounts.park || 0) * 0.8 - (buildingCounts.factory || 0) * 1.1;
	deltas.economy += (buildingCounts.shop || 0) * 1.4 + (buildingCounts.factory || 0) * 1.8 + (buildingCounts.santral || 0) * 0.6;
	deltas.happiness += (buildingCounts.park || 0) * 1.3 + (buildingCounts.house || 0) * 0.7 + (buildingCounts.school || 0) * 0.4;

	const daySpeedMultiplier = 1.3 ** Math.max(0, currentDay - 1);

	const driftByStat = {
		pollution: 1,
		crowd: 0.5,
		education: -0.2,
		crime: 0.3,
		health: -0.35,
		economy: 0.25,
		happiness: -0.2,
	};
	for (const key of statOrder) {
		const drift = driftByStat[key] || 0;
		currentStats[key] += (deltas[key] * 0.15 + drift) * daySpeedMultiplier;
	}

	for (const key of statOrder) currentStats[key] = clamp(currentStats[key], 0, 100);
	const stats = getStats();
	const failure = getFailure(stats);

	if (failure) {
		showEnd('lose', failure, stats);
		return;
	}

	refresh();
}

function advanceDay() {
	if (state.gameEnded) return;
	currentDay += 1;
	if (currentDay > bestDay) {
		bestDay = currentDay;
		localStorage.setItem('bestDay', String(bestDay));
	}
	if (dayCountEl) dayCountEl.textContent = `Gun: ${currentDay}`;
}

function setSelectedBuilding(buildingId) {
	state.selectedBuildingId = state.selectedBuildingId === buildingId ? null : buildingId;
	refresh();
}

function startConstruction(index, buildingId, sourceIndex = null) {
	if (state.layoutMode || state.gameEnded || isLockedTile(index) || state.destroying[index] || state.tiles[index] || constructionTimers[index]) {
		return;
	}

	constructionBuildingId[index] = buildingId;
	constructionSourceIndex[index] = sourceIndex;
	constructionStartedAt[index] = Date.now();
	constructionTimers[index] = 1;
	refresh();

	constructionTimers[index] = setTimeout(() => {
		state.tiles[index] = buildingId;
		if (sourceIndex !== null && sourceIndex !== index) {
			state.tiles[sourceIndex] = null;
		}
		clearConstruction(index);
		refresh();
	}, 1000);
}

function placeBuilding(index, buildingId, sourceIndex = null) {

	if (state.layoutMode) {
		return;
	}

	if (state.gameEnded) {
		return;
	}

	if (isLockedTile(index)) {
		return;
	}

	if (state.tiles[index] || state.destroying[index] || constructionTimers[index]) {
		return;
	}

	if (sourceIndex !== null && isLockedTile(sourceIndex)) {
		return;
	}

	startConstruction(index, buildingId, sourceIndex);
	setDragging(false);
}

function clearTile(index) {
	if (state.layoutMode) {
		return;
	}

	if (state.gameEnded) {
		return;
	}

	if (isLockedTile(index)) {
		return;
	}

	clearDestruction(index);
	state.tiles[index] = null;
	refresh();
}

function replaceBuilding(index, buildingId) {
	if (state.layoutMode || state.gameEnded || isLockedTile(index) || state.destroying[index] || state.tiles[index] || constructionTimers[index]) {
		return;
	}

	startConstruction(index, buildingId);
}

function getDragPayload(event) {
	const raw = event.dataTransfer.getData('application/json') || event.dataTransfer.getData('text/plain');
	if (!raw) {
		return null;
	}

	try {
		return JSON.parse(raw);
	} catch {
		return null;
	}
}

function clearBoardHover() {
	document.querySelectorAll('.board-tile.hover').forEach((tile) => tile.classList.remove('hover'));
	document.querySelectorAll('.board-tile.hover-preview').forEach((tile) => tile.classList.remove('hover-preview'));
}

palette.addEventListener('click', (event) => {
	const card = event.target.closest('.building-card');
	if (!card) {
		return;
	}

	setSelectedBuilding(card.dataset.buildingId);
});

palette.addEventListener('keydown', (event) => {
	if (event.key !== 'Enter' && event.key !== ' ') {
		return;
	}

	const card = event.target.closest('.building-card');
	if (!card) {
		return;
	}

	event.preventDefault();
	setSelectedBuilding(card.dataset.buildingId);
});

palette.addEventListener('dragstart', (event) => {
	const card = event.target.closest('.building-card');
	if (!card) {
		return;
	}

	const payload = { type: 'palette', buildingId: card.dataset.buildingId };
	event.dataTransfer.effectAllowed = 'copy';
	event.dataTransfer.setData('application/json', JSON.stringify(payload));
	event.dataTransfer.setData('text/plain', JSON.stringify(payload));
	state.draggingBuildingId = card.dataset.buildingId;
	setDragging(true);
});

palette.addEventListener('dragend', () => {
	setDragging(false);
});

board.addEventListener('dragstart', (event) => {
	const building = event.target.closest('.placed-building');
	if (!building) {
		return;
	}

	const sourceIndex = Number(building.dataset.sourceIndex);
	if (isLockedTile(sourceIndex)) {
		return;
	}

	const payload = {
		type: 'board',
		buildingId: building.dataset.buildingId,
		sourceIndex,
	};

	event.dataTransfer.effectAllowed = 'move';
	event.dataTransfer.setData('application/json', JSON.stringify(payload));
	event.dataTransfer.setData('text/plain', JSON.stringify(payload));
	state.draggingBuildingId = building.dataset.buildingId;
	setDragging(true);
});

board.addEventListener('dragend', () => {
	setDragging(false);
	clearBoardHover();
});

board.addEventListener('dragover', (event) => {
	if (state.gameEnded || state.layoutMode) {
		return;
	}

	event.preventDefault();
	// event.dataTransfer.dropEffect = 'move';
	const rect = board.getBoundingClientRect();
	const x = ((event.clientX - rect.left) / rect.width) * 100;
	const y = ((event.clientY - rect.top) / rect.height) * 100;
	const index = findNearestSlotIndex(x, y);
	clearBoardHover();
	if (index < 0) {
		return;
	}
});

board.addEventListener('dragleave', (event) => {
	if (!board.contains(event.relatedTarget)) {
		clearBoardHover();
	}
});

board.addEventListener('drop', (event) => {
	if (state.gameEnded) {
		return;
	}

	event.preventDefault();
	clearBoardHover();

	console.log(event);

	const rect = board.getBoundingClientRect();
	const x = ((event.clientX - rect.left) / rect.width) * 100;
	const y = ((event.clientY - rect.top) / rect.height) * 100;
	const index = findNearestSlotIndex(x, y);
	if (index < 0) {
		return;
	}

	if (state.destroying[index] || isLockedTile(index) || constructionTimers[index]) {
		setDragging(false);
		return;
	}

	const payload = getDragPayload(event) || (state.draggingBuildingId
		? { type: 'palette', buildingId: state.draggingBuildingId }
		: null);
	if (!payload) {
		setDragging(false);
		return;
	}

	if (payload.type === 'palette') {
		replaceBuilding(index, payload.buildingId);
		setDragging(false);
		return;
	}

	if (payload.type === 'board') {
		if (payload.sourceIndex === index) {
			setDragging(false);
			return;
		}

		if (isLockedTile(payload.sourceIndex) || state.destroying[payload.sourceIndex] || constructionTimers[payload.sourceIndex]) {
			setDragging(false);
			return;
		}

		startConstruction(index, payload.buildingId, payload.sourceIndex);
		setDragging(false);
	}
});

board.addEventListener('click', (event) => {
	if (state.layoutMode) {
		return;
	}

	const tile = event.target.closest('.board-tile');
	if (!tile || state.gameEnded) {
		return;
	}

	const actionButton = event.target.closest('[data-action="clear"]');
	if (actionButton) {
		event.stopPropagation();
		startDestruction(Number(tile.dataset.index));
		return;
	}

	if (!state.selectedBuildingId) {
		return;
	}

	replaceBuilding(Number(tile.dataset.index), state.selectedBuildingId);
});

board.addEventListener('keydown', (event) => {
	if (state.layoutMode) {
		return;
	}

	const tile = event.target.closest('.board-tile');
	if (!tile || state.gameEnded) {
		return;
	}

	if (event.key === 'Enter' || event.key === ' ') {
		event.preventDefault();
		if (state.selectedBuildingId) {
			replaceBuilding(Number(tile.dataset.index), state.selectedBuildingId);
		}
	}
});

if (restartButton) {
	restartButton.addEventListener('click', () => {
		for (let index = 0; index < destructionTimers.length; index += 1) {
			if (destructionTimers[index]) {
				clearTimeout(destructionTimers[index]);
				destructionTimers[index] = null;
			}
		}
		state.tiles = createInitialTiles();
		state.destroying = Array(BOARD_SIZE).fill(false);
		destructionTimers = Array(BOARD_SIZE).fill(null);
		destructionStartedAt = Array(BOARD_SIZE).fill(null);
		constructionTimers = Array(BOARD_SIZE).fill(null);
		constructionStartedAt = Array(BOARD_SIZE).fill(null);
		constructionBuildingId = Array(BOARD_SIZE).fill(null);
		constructionSourceIndex = Array(BOARD_SIZE).fill(null);
		state.selectedBuildingId = null;
		state.gameEnded = false;
		currentDay = 1;
		if (dayCountEl) dayCountEl.textContent = `Gun: ${currentDay}`;
		setDragging(false);
		endOverlay.classList.add('hidden');
		if (endImage) {
			endImage.src = '';
			endImage.classList.add('hidden');
		}
		currentStats = { ...baseStats };

		if (tickInterval) { clearInterval(tickInterval); tickInterval = null; }
		if (dayInterval) { clearInterval(dayInterval); dayInterval = null; }
		gameStarted = false;
		if (startOverlay) {
			startOverlay.classList.remove('hidden');
		}
		refresh();
	});
}

buildPalette();
renderBoard();
const initialStats = getStats();
renderStats(initialStats);
updateSummary(initialStats);

function startIntervals() {
	if (tickInterval) clearInterval(tickInterval);
	if (dayInterval) clearInterval(dayInterval);
	tickInterval = setInterval(tick, 800);
	dayInterval = setInterval(advanceDay, 10000);
}

if (startButton) {
	startButton.addEventListener('click', () => {
		if (gameStarted) return;
		gameStarted = true;
		state.gameEnded = false;
		currentStats = { ...baseStats };
		startIntervals();
		endOverlay.classList.add('hidden');
		if (endImage) { endImage.classList.add('hidden'); }
		if (startOverlay) { startOverlay.classList.add('hidden'); }
		refresh();
	});
}

function setTilePosition(i, x, y) {
    state.positions = state.positions || Array(BOARD_SIZE).fill(null);
    state.positions[i] = { x: clamp(Number(x), 5, 95), y: clamp(Number(y), 5, 95) };
    refresh();
}

function createDefaultTilePositions() {
	const points = [];
	const size = Math.sqrt(BOARD_SIZE);
	const step = 76 / Math.max(size - 1, 1);
	for (let row = 0; row < size; row += 1) {
		for (let col = 0; col < size; col += 1) {
			points.push({
				x: Math.round(12 + col * step),
				y: Math.round(12 + row * step),
			});
		}
	}
	return points;
}

function exportLayoutPositions() {
	const payload = state.positions.map((pos) => ({ x: Math.round(pos.x), y: Math.round(pos.y) }));
	const json = JSON.stringify(payload, null, 2);
	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(json).catch(() => {});
	}
	console.log('tilePositions =', payload);
	if (summary) {
		summary.textContent = 'Koordinatlar panoya kopyalandi. Konsolda da tilePositions olarak yazdirildi.';
	}
}

function setLayoutMode(enabled) {
	state.layoutMode = enabled;
	document.body.classList.toggle('layout-mode', enabled);
	if (toggleLayoutModeButton) {
		toggleLayoutModeButton.textContent = `Layout Modu: ${enabled ? 'Acik' : 'Kapali'}`;
	}
	refresh();
}

function initLayoutEditor() {
	if (!Array.isArray(state.positions) || state.positions.length !== BOARD_SIZE) {
		state.positions = createDefaultTilePositions();
	}

 	let activeIndex = null;

 	board.addEventListener('pointerdown', (event) => {
 		if (!state.layoutMode) return;
 		const tile = event.target.closest('.board-tile');
 		if (!tile) return;
 		activeIndex = Number(tile.dataset.index);
 		tile.classList.add('layout-dragging');
 		tile.setPointerCapture(event.pointerId);
 	});

 	board.addEventListener('pointermove', (event) => {
 		if (!state.layoutMode || activeIndex === null) return;
 		const rect = board.getBoundingClientRect();
 		const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 5, 95);
 		const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 5, 95);
 		state.positions[activeIndex] = { x: Math.round(x), y: Math.round(y) };
 		renderBoard();
 	});

 	board.addEventListener('pointerup', (event) => {
 		if (activeIndex === null) return;
 		const tile = board.querySelector(`.board-tile[data-index="${activeIndex}"]`);
 		if (tile) {
 			tile.classList.remove('layout-dragging');
 			if (tile.hasPointerCapture(event.pointerId)) {
 				tile.releasePointerCapture(event.pointerId);
 			}
 		}
 		activeIndex = null;
 	});

	if (toggleLayoutModeButton) {
		toggleLayoutModeButton.addEventListener('click', () => {
			setLayoutMode(!state.layoutMode);
		});
	}

	if (exportLayoutButton) {
		exportLayoutButton.addEventListener('click', () => {
			exportLayoutPositions();
		});
	}

	setLayoutMode(false);
}

initLayoutEditor();
