import { config } from 'dotenv';
import fastify from 'fastify';
import cors from '@fastify/cors';
import { userRoutes } from './routes/users';

const app = fastify();
app.register(cors, { origin: process.env.CLIENT_URL });
// 
app.register(userRoutes);

app.listen({ port: parseInt(process.env.PORT!) || 3000 }, (err, address) => {
	console.log(`Server listening on http://localhost:3000`);
});
