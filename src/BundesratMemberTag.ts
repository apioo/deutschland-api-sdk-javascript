/**
 * BundesratMemberTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {BundesratMemberCollection} from "./BundesratMemberCollection";
import {ResponseException} from "./ResponseException";

export class BundesratMemberTag extends TagAbstract {
    /**
     * Returns all current members of the Bundesrat
     *
     * @returns {Promise<BundesratMemberCollection>}
     * @throws {ResponseException}
     * @throws {ClientException}
     */
    public async getAll(): Promise<BundesratMemberCollection> {
        const url = this.parser.url('/bundesrat/member', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<BundesratMemberCollection>(params);
            return response.data;
        } catch (error) {
            if (error instanceof ClientException) {
                throw error;
            } else if (axios.isAxiosError(error) && error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new ResponseException(error.response.data);
                    case 404:
                        throw new ResponseException(error.response.data);
                    case 500:
                        throw new ResponseException(error.response.data);
                    default:
                        throw new UnknownStatusCodeException('The server returned an unknown status code');
                }
            } else {
                throw new ClientException('An unknown error occurred: ' + String(error));
            }
        }
    }


}
