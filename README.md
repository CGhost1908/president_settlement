# 🏙️ President Settlement - Isometric City Planning & Survival Strategy Game

**President Settlement** is a browser-based, interactive city-building and urban survival strategy game. Manage a 5x5 isometric district (25 plots) as mayor. With each passing day, citizen demands increase and city stats fluctuate faster—test your planning skills to keep the settlement thriving and avoid collapse!

---

## 🎮 Gameplay & Mechanics

### 📅 Endless Survival Cycle
- **Day Progression System**: As days advance (`Gün Count`), stat decay accelerates, putting increasing pressure on municipal services.
- **5x5 Spatial Grid**: 25 constructible isometric plots. Every structure you place affects the neighboring city stats and population dynamics.
- **Game Over & Victory Conditions**: If public happiness plummets or pollution/crime surges past critical thresholds, the city collapses and the game ends.

---

### 🏛️ City Health Indicators & Stats
Every building constructed dynamically impacts 7 core city indicators:
- 👥 **Crowd / Population Density (`crowd`)**
- 😊 **Citizen Happiness (`happiness`)**
- 📚 **Education Level (`education`)**
- 🏥 **Public Health (`health`)**
- 💰 **Economic Vitality (`economy`)**
- 🛡️ **Crime Rate (`crime`)**
- 🏭 **Environmental Pollution (`pollution`)**

---

### 🏗️ Building Catalog & Effects

| Building | Role & Description | Stat Effects |
| :--- | :--- | :--- |
| **House (`house`)** | Expands residential quarters and population. | +Crowd, -Education, -Health, -Happiness, -Economy |
| **Park (`park`)** | Green spaces that relieve stress and congestion. | -Crowd, +Health, +Happiness |
| **School (`school`)** | Boosts intellect and significantly drives down crime. | +Education, -Crime, +Crowd |
| **Police Station (`policestation`)** | Enforces street security and public safety. | -Crime, +Education, -Crowd |
| **Hospital (`hospital`)** | Provides critical emergency medical care. | +Health |
| **Fire Station (`firestation`)** | Responds to industrial hazards and emergencies. | -Pollution, -Crime |
| **Waste Station (`trashstation`)** | Collects municipal garbage and reduces grime. | -Pollution, -Crowd, +Crime |
| **Market / Shop (`shop`)** | Generates commerce and boosts city revenue. | +Economy, +Crowd |
| **Factory / Power Plant** | Drives industry forward at environmental cost. | +Economy, +Pollution |

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES6+), Modern CSS3
- **Graphics & Icons**: Custom 2D isometric pixel-style sprites (`src/`), Font Awesome 7
- **Architecture**: Single-Page Web Application (SPA) with no dependencies or build steps required.

---

## 📁 Repository Structure

```text
president_settlement/
├── index.html          # Main game canvas, stats HUD, start/game-over dialogs
├── script.js           # Game engine: building catalog, day progression loop, stat calculations
├── style.css           # Isometric transformations, ambient background glow, stat pills
└── src/                # Isometric pixel art assets (house, park, hospital, roads, etc.)
```

---

## 🚀 How to Run & Play

No build step or Node.js environment is required.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CGhost1908/president_settlement.git
   cd president_settlement
   ```

2. **Open in Browser:**
   - Double-click `index.html` in your file explorer.
   - Or start a quick local server:
     ```bash
     python -m http.server 3000
     ```
     Navigate to `http://localhost:3000`.

3. **Controls:**
   - Click **Oyuna Başlat** (Start Game).
   - Select a building type from the bottom palette.
   - Click an available grid cell to construct the facility.
   - Balance your stats to survive as many days as possible!

---

## 📄 License

This project is licensed under the MIT License.
