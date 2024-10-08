/**
 * Client automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {ClientAbstract, CredentialsInterface, TokenStoreInterface} from "sdkgen-client"
import {OAuth2} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {JobTag} from "./JobTag";
import {HospitalTag} from "./HospitalTag";
import {WarningTag} from "./WarningTag";
import {CityTag} from "./CityTag";
import {DistrictTag} from "./DistrictTag";
import {StateTag} from "./StateTag";
import {BundestagTag} from "./BundestagTag";
import {BundesratTag} from "./BundesratTag";
import {AutobahnTag} from "./AutobahnTag";
import {AuthorizationTag} from "./AuthorizationTag";
import {MetaTag} from "./MetaTag";

export class Client extends ClientAbstract {
    public job(): JobTag
    {
        return new JobTag(
            this.httpClient,
            this.parser
        );
    }

    public hospital(): HospitalTag
    {
        return new HospitalTag(
            this.httpClient,
            this.parser
        );
    }

    public warning(): WarningTag
    {
        return new WarningTag(
            this.httpClient,
            this.parser
        );
    }

    public city(): CityTag
    {
        return new CityTag(
            this.httpClient,
            this.parser
        );
    }

    public district(): DistrictTag
    {
        return new DistrictTag(
            this.httpClient,
            this.parser
        );
    }

    public state(): StateTag
    {
        return new StateTag(
            this.httpClient,
            this.parser
        );
    }

    public bundestag(): BundestagTag
    {
        return new BundestagTag(
            this.httpClient,
            this.parser
        );
    }

    public bundesrat(): BundesratTag
    {
        return new BundesratTag(
            this.httpClient,
            this.parser
        );
    }

    public autobahn(): AutobahnTag
    {
        return new AutobahnTag(
            this.httpClient,
            this.parser
        );
    }

    public authorization(): AuthorizationTag
    {
        return new AuthorizationTag(
            this.httpClient,
            this.parser
        );
    }

    public meta(): MetaTag
    {
        return new MetaTag(
            this.httpClient,
            this.parser
        );
    }



    public static build(clientId: string, clientSecret: string, tokenStore: TokenStoreInterface|null, scopes: Array<string>|null): Client
    {
        return new Client('https://api.deutschland-api.dev/', new OAuth2(clientId, clientSecret, 'https://api.deutschland-api.dev/authorization/token', '', tokenStore, scopes));
    }

    public static buildAnonymous(): Client
    {
        return new Client('https://api.deutschland-api.dev/', new Anonymous());
    }
}
