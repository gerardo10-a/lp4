const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://noimporta821:GPCy0sOF5Gyxu3z4@fotografias.p8cf2k8.mongodb.net/proyecto?retryWrites=true&w=majority&appName=fotografias', {
    useNewUrlParser: true,         // Usa el nuevo analizador de URL
    useUnifiedTopology: true,      // Utiliza el nuevo motor de administración de conexiones
})
.then(() => console.log('Base de datos conectada exitosamente'))
.catch(err => console.error('Error al conectar a la base de datos:', err));
