import { Module } from "@nestjs/common";
import { UserController } from "src/controller/user/user.controller";
import { UserService } from "src/service/user/user.service";

@Module({
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule {

}