//
// ─── SERVER: INITIALISE ─────────────────────────────────────────────────────────
//

//
// ─── GLOBALS ────────────────────────────────────────────────────────────────────
//

const app = require('./server');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;

// ────────────────────────────────────────────────────────────────────────────────

dotenv.config();
app.listen(port, () => console.log(`Server listening on port ${port}`));