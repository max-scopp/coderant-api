/* tslint:disable */
/* eslint-disable */
/**
 * drant-community
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Credentials,
    CredentialsFromJSON,
    CredentialsToJSON,
    FeedDTO,
    FeedDTOFromJSON,
    FeedDTOToJSON,
    UserRegistration,
    UserRegistrationFromJSON,
    UserRegistrationToJSON,
} from '../models';

export interface AuthControllerLoginRequest {
    credentials: Credentials;
}

export interface FeedControllerGetAlgoFeedRequest {
    limit?: number;
    offset?: number;
    orderBy?: string;
    orderDir?: string;
}

export interface FeedControllerGetRecentFeedRequest {
    limit?: number;
    offset?: number;
    orderBy?: string;
    orderDir?: string;
}

export interface FeedControllerGetTopFeedRequest {
    limit?: number;
    offset?: number;
    orderBy?: string;
    orderDir?: string;
}

export interface SearchControllerSearchRequest {
    query: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
    orderDir?: string;
}

export interface UserControllerCreateUserRequest {
    userRegistration: UserRegistration;
}

export interface UserControllerGetUserRequest {
    uuid: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     */
    async authControllerLoginRaw(requestParameters: AuthControllerLoginRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.credentials === null || requestParameters.credentials === undefined) {
            throw new runtime.RequiredError('credentials','Required parameter requestParameters.credentials was null or undefined when calling authControllerLogin.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CredentialsToJSON(requestParameters.credentials),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async authControllerLogin(requestParameters: AuthControllerLoginRequest): Promise<void> {
        await this.authControllerLoginRaw(requestParameters);
    }

    /**
     */
    async feedControllerGetAlgoFeedRaw(requestParameters: FeedControllerGetAlgoFeedRequest): Promise<runtime.ApiResponse<FeedDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

        if (requestParameters.orderDir !== undefined) {
            queryParameters['orderDir'] = requestParameters.orderDir;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/feed/algo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FeedDTOFromJSON(jsonValue));
    }

    /**
     */
    async feedControllerGetAlgoFeed(requestParameters: FeedControllerGetAlgoFeedRequest): Promise<FeedDTO> {
        const response = await this.feedControllerGetAlgoFeedRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async feedControllerGetRecentFeedRaw(requestParameters: FeedControllerGetRecentFeedRequest): Promise<runtime.ApiResponse<FeedDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

        if (requestParameters.orderDir !== undefined) {
            queryParameters['orderDir'] = requestParameters.orderDir;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/feed/recent`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FeedDTOFromJSON(jsonValue));
    }

    /**
     */
    async feedControllerGetRecentFeed(requestParameters: FeedControllerGetRecentFeedRequest): Promise<FeedDTO> {
        const response = await this.feedControllerGetRecentFeedRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async feedControllerGetTopFeedRaw(requestParameters: FeedControllerGetTopFeedRequest): Promise<runtime.ApiResponse<FeedDTO>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

        if (requestParameters.orderDir !== undefined) {
            queryParameters['orderDir'] = requestParameters.orderDir;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/feed/top`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FeedDTOFromJSON(jsonValue));
    }

    /**
     */
    async feedControllerGetTopFeed(requestParameters: FeedControllerGetTopFeedRequest): Promise<FeedDTO> {
        const response = await this.feedControllerGetTopFeedRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async searchControllerSearchRaw(requestParameters: SearchControllerSearchRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.query === null || requestParameters.query === undefined) {
            throw new runtime.RequiredError('query','Required parameter requestParameters.query was null or undefined when calling searchControllerSearch.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

        if (requestParameters.orderDir !== undefined) {
            queryParameters['orderDir'] = requestParameters.orderDir;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async searchControllerSearch(requestParameters: SearchControllerSearchRequest): Promise<void> {
        await this.searchControllerSearchRaw(requestParameters);
    }

    /**
     */
    async userControllerCreateUserRaw(requestParameters: UserControllerCreateUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userRegistration === null || requestParameters.userRegistration === undefined) {
            throw new runtime.RequiredError('userRegistration','Required parameter requestParameters.userRegistration was null or undefined when calling userControllerCreateUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserRegistrationToJSON(requestParameters.userRegistration),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async userControllerCreateUser(requestParameters: UserControllerCreateUserRequest): Promise<void> {
        await this.userControllerCreateUserRaw(requestParameters);
    }

    /**
     */
    async userControllerGetUserRaw(requestParameters: UserControllerGetUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling userControllerGetUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async userControllerGetUser(requestParameters: UserControllerGetUserRequest): Promise<void> {
        await this.userControllerGetUserRaw(requestParameters);
    }

}
