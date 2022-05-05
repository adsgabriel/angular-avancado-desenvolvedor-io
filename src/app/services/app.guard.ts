import { Injectable } from "@angular/core";
import { CanActivate, CanLoad } from "@angular/router";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate{

    user = {admin: true, logged: true}

    canLoad(): boolean {
        return this.user.admin;
    }

    canActivate(): boolean {
        return this.user.logged;
    }

}