import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signUp(@Body() dto: AuthDto) {
    console.log(dto);
    return 'im signed up';
  }

  @Post('signIn')
  signIn() {
    return 'im signed in';
  }
}
