import { JwtPayload } from './strategies/JwtPayload';
import { Request } from 'express';

export interface JwtRequest extends Request {
  user?: JwtPayload;
}
