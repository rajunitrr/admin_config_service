require('dotenv').config();

const express = require('express');
const config = require('config');

const platformConfigRoutes = require('./routes/platformConfigRoutes');

//nst table1Routes = require('./routes/table1Routes');
//nst errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/v1/platform/configs', platformConfigRoutes);
//p.use('/v1/table1', table1Routes);

//p.use(errorHandler);
//
const PORT = process.env.PORT || 3000;
console.log(`Using port: ${PORT}`);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
