/**
 * AutobahnChargingStationTag automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

import axios, {AxiosRequestConfig} from "axios";
import {TagAbstract} from "sdkgen-client"
import {ClientException, UnknownStatusCodeException} from "sdkgen-client";

import {AutobahnChargingStationCollection} from "./AutobahnChargingStationCollection";
import {ResponseException} from "./ResponseException";

export class AutobahnChargingStationTag extends TagAbstract {
    /**
     * Returns available charging stations for a specific autobahn
     *
     * @returns {Promise<AutobahnChargingStationCollection>}
     * @throws {ResponseExceptionException}
     * @throws {ClientException}
     */
    public async getAll(autobahnId: string): Promise<AutobahnChargingStationCollection> {
        const url = this.parser.url('/autobahn/:autobahn_id/charging_station', {
            'autobahn_id': autobahnId,
        });

        let params: AxiosRequestConfig = {
            url: url,
            method: 'GET',
            params: this.parser.query({
            }, [
            ]),
        };

        try {
            const response = await this.httpClient.request<AutobahnChargingStationCollection>(params);
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
