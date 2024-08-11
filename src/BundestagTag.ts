/**
 * BundestagTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BundestagMemberTag} from "./BundestagMemberTag";

export class BundestagTag extends TagAbstract {
    public member(): BundestagMemberTag
    {
        return new BundestagMemberTag(
            this.httpClient,
            this.parser
        );
    }


}
