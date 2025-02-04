import { Context } from 'koa';
import bcrypt from 'bcrypt';
import { generateToken } from '../middleware/auth';
import { LoginRequestBody } from '../interfaces/AuthInterfaces';
//Handle Login requests and validate credentials.
const userCredentials = {
  username: 'admin',
  passwordHash: bcrypt.hashSync('password', 10),
};

export const login = async (ctx: Context) => {
  const { username, password } = ctx.request.body as LoginRequestBody;
  if (username !== userCredentials.username || !bcrypt.compareSync(password, userCredentials.passwordHash)) {
    ctx.status = 401;
    ctx.body = { error: 'Invalid username or password' };
    return;
  }

  ctx.body = { token: generateToken({ username }) };
};
