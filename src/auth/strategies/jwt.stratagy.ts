import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportSerializer, PassportStrategy } from "@nestjs/passport";
import { Passport } from "passport";
import {ExtractJwt, Strategy} from 'passport-jwt'
import { UserModel } from "../auth.model/user.model";


@Injectable()
export class JwtStratagy extends PassportStrategy(Strategy){
    constructor(private readonly configService: ConfigService){
        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration: true,
                secretOrKey: configService.get('JWT_SECRET')
            }
        );
    }
    
    async validate({email}:Pick<UserModel, 'email'>){
        return email

    }
}