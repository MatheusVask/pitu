import app from './app';

import database from './database'
database.sync()
console.log('database running at 3306')

app.listen(3338);
console.log('run')