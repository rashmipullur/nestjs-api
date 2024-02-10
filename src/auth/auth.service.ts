import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable()
export class AuthService {
  signup() {
    return { msg: 'i have signed up' };
  }
  signin() {
    return { msg: 'i have signed up' };
  }
}
