/**
 * ResponseException automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import {KnownStatusCodeException} from "sdkgen-client"

import {Response} from "./Response";

export class ResponseException extends KnownStatusCodeException {

    public constructor(private payload: Response) {
        super('The server returned an error');
    }

    public getPayload(): Response {
        return this.payload;
    }

}
