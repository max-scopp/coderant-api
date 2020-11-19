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
    CommentDTO,
    CommentDTOFromJSON,
    CommentDTOToJSON,
    CreateMessageDTO,
    CreateMessageDTOFromJSON,
    CreateMessageDTOToJSON,
    CreateRantDTO,
    CreateRantDTOFromJSON,
    CreateRantDTOToJSON,
    MakeVoteDTO,
    MakeVoteDTOFromJSON,
    MakeVoteDTOToJSON,
    RantDTO,
    RantDTOFromJSON,
    RantDTOToJSON,
} from '../models';

export interface RantControllerCommentOnRantRequest {
    uuid: string;
    content: string;
    asset?: Blob;
}

export interface RantControllerCreateRantRequest {
    content: string;
    tags: Array<string>;
    asset?: Blob;
}

export interface RantControllerGetRantRequest {
    uuid: string;
}

export interface RantControllerGetRantCommentsRequest {
    uuid: string;
}

export interface RantControllerRemoveCommentOnRantRequest {
    uuid: string;
}

export interface RantControllerRemoveRantRequest {
    uuid: string;
}

export interface RantControllerUpdateCommentOnRantRequest {
    uuid: string;
    createMessageDTO: CreateMessageDTO;
}

export interface RantControllerUpdateRantRequest {
    uuid: string;
    createRantDTO: CreateRantDTO;
}

export interface RantControllerVoteOnCommentRequest {
    uuid: string;
    commentUUID: string;
    makeVoteDTO: MakeVoteDTO;
}

export interface RantControllerVoteOnRantRequest {
    uuid: string;
    makeVoteDTO: MakeVoteDTO;
}

/**
 * 
 */
export class RantingApi extends runtime.BaseAPI {

    /**
     */
    async rantControllerCommentOnRantRaw(requestParameters: RantControllerCommentOnRantRequest): Promise<runtime.ApiResponse<RantDTO>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling rantControllerCommentOnRant.');
        }

        if (requestParameters.content === null || requestParameters.content === undefined) {
            throw new runtime.RequiredError('content','Required parameter requestParameters.content was null or undefined when calling rantControllerCommentOnRant.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
            { contentType: 'application/json' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.content !== undefined) {
            formParams.append('content', requestParameters.content as any);
        }

        if (requestParameters.asset !== undefined) {
            formParams.append('asset', requestParameters.asset as any);
        }

        const response = await this.request({
            path: `/rant/{uuid}/comment`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RantDTOFromJSON(jsonValue));
    }

    /**
     */
    async rantControllerCommentOnRant(requestParameters: RantControllerCommentOnRantRequest): Promise<RantDTO> {
        const response = await this.rantControllerCommentOnRantRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async rantControllerCreateRantRaw(requestParameters: RantControllerCreateRantRequest): Promise<runtime.ApiResponse<RantDTO>> {
        if (requestParameters.content === null || requestParameters.content === undefined) {
            throw new runtime.RequiredError('content','Required parameter requestParameters.content was null or undefined when calling rantControllerCreateRant.');
        }

        if (requestParameters.tags === null || requestParameters.tags === undefined) {
            throw new runtime.RequiredError('tags','Required parameter requestParameters.tags was null or undefined when calling rantControllerCreateRant.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
            { contentType: 'application/json' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.content !== undefined) {
            formParams.append('content', requestParameters.content as any);
        }

        if (requestParameters.asset !== undefined) {
            formParams.append('asset', requestParameters.asset as any);
        }

        if (requestParameters.tags) {
            formParams.append('tags', requestParameters.tags.join(runtime.COLLECTION_FORMATS["csv"]));
        }

        const response = await this.request({
            path: `/rant`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RantDTOFromJSON(jsonValue));
    }

    /**
     */
    async rantControllerCreateRant(requestParameters: RantControllerCreateRantRequest): Promise<RantDTO> {
        const response = await this.rantControllerCreateRantRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async rantControllerGetRantRaw(requestParameters: RantControllerGetRantRequest): Promise<runtime.ApiResponse<RantDTO>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling rantControllerGetRant.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/rant/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RantDTOFromJSON(jsonValue));
    }

    /**
     */
    async rantControllerGetRant(requestParameters: RantControllerGetRantRequest): Promise<RantDTO> {
        const response = await this.rantControllerGetRantRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async rantControllerGetRantCommentsRaw(requestParameters: RantControllerGetRantCommentsRequest): Promise<runtime.ApiResponse<Array<CommentDTO>>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling rantControllerGetRantComments.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/rant/{uuid}/comments`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentDTOFromJSON));
    }

    /**
     */
    async rantControllerGetRantComments(requestParameters: RantControllerGetRantCommentsRequest): Promise<Array<CommentDTO>> {
        const response = await this.rantControllerGetRantCommentsRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async rantControllerRemoveCommentOnRantRaw(requestParameters: RantControllerRemoveCommentOnRantRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling rantControllerRemoveCommentOnRant.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/rant/comment/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async rantControllerRemoveCommentOnRant(requestParameters: RantControllerRemoveCommentOnRantRequest): Promise<void> {
        await this.rantControllerRemoveCommentOnRantRaw(requestParameters);
    }

    /**
     */
    async rantControllerRemoveRantRaw(requestParameters: RantControllerRemoveRantRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling rantControllerRemoveRant.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/rant/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async rantControllerRemoveRant(requestParameters: RantControllerRemoveRantRequest): Promise<void> {
        await this.rantControllerRemoveRantRaw(requestParameters);
    }

    /**
     */
    async rantControllerUpdateCommentOnRantRaw(requestParameters: RantControllerUpdateCommentOnRantRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling rantControllerUpdateCommentOnRant.');
        }

        if (requestParameters.createMessageDTO === null || requestParameters.createMessageDTO === undefined) {
            throw new runtime.RequiredError('createMessageDTO','Required parameter requestParameters.createMessageDTO was null or undefined when calling rantControllerUpdateCommentOnRant.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/rant/comment/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateMessageDTOToJSON(requestParameters.createMessageDTO),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async rantControllerUpdateCommentOnRant(requestParameters: RantControllerUpdateCommentOnRantRequest): Promise<void> {
        await this.rantControllerUpdateCommentOnRantRaw(requestParameters);
    }

    /**
     */
    async rantControllerUpdateRantRaw(requestParameters: RantControllerUpdateRantRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling rantControllerUpdateRant.');
        }

        if (requestParameters.createRantDTO === null || requestParameters.createRantDTO === undefined) {
            throw new runtime.RequiredError('createRantDTO','Required parameter requestParameters.createRantDTO was null or undefined when calling rantControllerUpdateRant.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/rant/{uuid}`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateRantDTOToJSON(requestParameters.createRantDTO),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async rantControllerUpdateRant(requestParameters: RantControllerUpdateRantRequest): Promise<void> {
        await this.rantControllerUpdateRantRaw(requestParameters);
    }

    /**
     */
    async rantControllerVoteOnCommentRaw(requestParameters: RantControllerVoteOnCommentRequest): Promise<runtime.ApiResponse<RantDTO>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling rantControllerVoteOnComment.');
        }

        if (requestParameters.commentUUID === null || requestParameters.commentUUID === undefined) {
            throw new runtime.RequiredError('commentUUID','Required parameter requestParameters.commentUUID was null or undefined when calling rantControllerVoteOnComment.');
        }

        if (requestParameters.makeVoteDTO === null || requestParameters.makeVoteDTO === undefined) {
            throw new runtime.RequiredError('makeVoteDTO','Required parameter requestParameters.makeVoteDTO was null or undefined when calling rantControllerVoteOnComment.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/rant/{uuid}/comment/{commentUUID}/vote`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))).replace(`{${"commentUUID"}}`, encodeURIComponent(String(requestParameters.commentUUID))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MakeVoteDTOToJSON(requestParameters.makeVoteDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RantDTOFromJSON(jsonValue));
    }

    /**
     */
    async rantControllerVoteOnComment(requestParameters: RantControllerVoteOnCommentRequest): Promise<RantDTO> {
        const response = await this.rantControllerVoteOnCommentRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async rantControllerVoteOnRantRaw(requestParameters: RantControllerVoteOnRantRequest): Promise<runtime.ApiResponse<RantDTO>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling rantControllerVoteOnRant.');
        }

        if (requestParameters.makeVoteDTO === null || requestParameters.makeVoteDTO === undefined) {
            throw new runtime.RequiredError('makeVoteDTO','Required parameter requestParameters.makeVoteDTO was null or undefined when calling rantControllerVoteOnRant.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearer", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/rant/{uuid}/vote`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MakeVoteDTOToJSON(requestParameters.makeVoteDTO),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RantDTOFromJSON(jsonValue));
    }

    /**
     */
    async rantControllerVoteOnRant(requestParameters: RantControllerVoteOnRantRequest): Promise<RantDTO> {
        const response = await this.rantControllerVoteOnRantRaw(requestParameters);
        return await response.value();
    }

}
