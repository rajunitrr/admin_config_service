const express = require('express');
const platformConfigRoutes = require('./routes/platformConfigRoutes');
//nst table1Routes = require('./routes/table1Routes');
//nst errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

app.use('/v1/platform/configs', platformConfigRoutes);
//p.use('/v1/table1', table1Routes);

//p.use(errorHandler);
//
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port 3000`));
