/**
 * BundesratTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BundesratMemberTag} from "./BundesratMemberTag";

export class BundesratTag extends TagAbstract {
    public member(): BundesratMemberTag
    {
        return new BundesratMemberTag(
            this.httpClient,
            this.parser
        );
    }


}
