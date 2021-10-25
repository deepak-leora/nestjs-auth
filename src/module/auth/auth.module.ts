import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "src/controller/auth/auth.controller";
import { jwtConstants } from "src/contsants/constants";
import { AuthService } from "src/service/auth/auth.service";
import { JwtStrategy } from "src/strategy/jwt.strategy";
import { LocalStrategy } from "src/strategy/local.strategy";
import { UserModule } from "../user/user.module";

@Module({
    imports: [UserModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '120s' }
    }), PassportModule],
    providers: [AuthService, JwtStrategy, LocalStrategy],
    controllers: [AuthController]
})
export class AuthModule {

}