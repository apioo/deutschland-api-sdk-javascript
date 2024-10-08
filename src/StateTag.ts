/**
 * StateTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {ResponseException} from "./ResponseException";
import {State} from "./State";
import {StateCollection} from "./StateCollection";

export class StateTag extends TagAbstract {
    /**
     * Returns a specific state
     *
     * @returns {Promise<State>}
     * @throws {ResponseException}
     * @throws {ClientException}
     */
    public async get(stateId: string): Promise<State> {
        const url = this.parser.url('/state/:state_id', {
            'state_id': stateId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<State>(params);
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

    /**
     * Returns all available states
     *
     * @returns {Promise<StateCollection>}
     * @throws {ResponseException}
     * @throws {ClientException}
     */
    public async getAll(startIndex?: number, name?: string): Promise<StateCollection> {
        const url = this.parser.url('/state', {
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
                'startIndex': startIndex,
                'name': name,
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<StateCollection>(params);
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
