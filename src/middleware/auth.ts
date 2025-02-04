import jwt from 'jsonwebtoken';
import { Context, Next } from 'koa';
import dotenv from 'dotenv';
// Seures protected routes using JWT authentication.
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || 'default_secret';

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
};

export const authenticate = async (ctx: Context, next: Next) => {
  const authHeader = ctx.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    ctx.status = 401;
    ctx.body = { error: 'Unauthorized: No token provided' };
    return;
  }

  const token = authHeader.split(' ')[1];
  try {
    ctx.state.user = jwt.verify(token, SECRET_KEY);
    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = { error: 'Unauthorized: Invalid token' };
  }
};
