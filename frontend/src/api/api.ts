/* tslint:disable */
/* eslint-disable */
/**
 * nonebot-plugin-gocqhttp
 * go-cqhttp process manager API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AccountConfig
 */
export interface AccountConfig {
    /**
     * 
     * @type {number}
     * @memberof AccountConfig
     */
    'uin': number;
    /**
     * 
     * @type {string}
     * @memberof AccountConfig
     */
    'password'?: string;
    /**
     * 
     * @type {AccountProtocol}
     * @memberof AccountConfig
     */
    'protocol'?: AccountProtocol;
    /**
     * 
     * @type {object | string}
     * @memberof AccountConfig
     */
    'config_extra'?: object | string;
    /**
     * 
     * @type {object | string}
     * @memberof AccountConfig
     */
    'device_extra'?: object | string;
}
/**
 * 
 * @export
 * @interface AccountCreation
 */
export interface AccountCreation {
    /**
     * 
     * @type {string}
     * @memberof AccountCreation
     */
    'password'?: string;
    /**
     * 
     * @type {AccountProtocol}
     * @memberof AccountCreation
     */
    'protocol'?: AccountProtocol;
    /**
     * 
     * @type {object}
     * @memberof AccountCreation
     */
    'config_extra'?: object;
    /**
     * 
     * @type {object}
     * @memberof AccountCreation
     */
    'device_extra'?: object;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */

export enum AccountProtocol {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}

/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    'detail'?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface ProcessAccount
 */
export interface ProcessAccount {
    /**
     * 
     * @type {AccountConfig}
     * @memberof ProcessAccount
     */
    'source': AccountConfig;
    /**
     * 
     * @type {number}
     * @memberof ProcessAccount
     */
    'uin': number;
    /**
     * 
     * @type {string}
     * @memberof ProcessAccount
     */
    'password'?: string;
    /**
     * 
     * @type {object}
     * @memberof ProcessAccount
     */
    'config'?: object;
    /**
     * 
     * @type {object}
     * @memberof ProcessAccount
     */
    'device'?: object;
}
/**
 * 
 * @export
 * @interface ProcessInfo
 */
export interface ProcessInfo {
    /**
     * 
     * @type {ProcessStatus}
     * @memberof ProcessInfo
     */
    'status': ProcessStatus;
    /**
     * 
     * @type {number}
     * @memberof ProcessInfo
     */
    'total_logs': number;
    /**
     * 
     * @type {number}
     * @memberof ProcessInfo
     */
    'restarts': number;
    /**
     * 
     * @type {RunningProcessDetail | StoppedProcessDetail}
     * @memberof ProcessInfo
     */
    'details': RunningProcessDetail | StoppedProcessDetail;
}
/**
 * 
 * @export
 * @interface ProcessLog
 */
export interface ProcessLog {
    /**
     * 
     * @type {string}
     * @memberof ProcessLog
     */
    'time'?: string;
    /**
     * 
     * @type {ProcessLogLevel}
     * @memberof ProcessLog
     */
    'level'?: ProcessLogLevel;
    /**
     * 
     * @type {string}
     * @memberof ProcessLog
     */
    'message': string;
}
/**
 * An enumeration.
 * @export
 * @enum {string}
 */

export enum ProcessLogLevel {
    Stdout = 'STDOUT',
    Debug = 'DEBUG',
    Info = 'INFO',
    Warning = 'WARNING',
    Error = 'ERROR',
    Fatal = 'FATAL'
}

/**
 * An enumeration.
 * @export
 * @enum {string}
 */

export enum ProcessStatus {
    Running = 'running',
    Stopped = 'stopped'
}

/**
 * 
 * @export
 * @interface RunningProcessDetail
 */
export interface RunningProcessDetail {
    /**
     * 
     * @type {number}
     * @memberof RunningProcessDetail
     */
    'pid': number;
    /**
     * 
     * @type {string}
     * @memberof RunningProcessDetail
     */
    'status': string;
    /**
     * 
     * @type {number}
     * @memberof RunningProcessDetail
     */
    'memory_used': number;
    /**
     * 
     * @type {number}
     * @memberof RunningProcessDetail
     */
    'cpu_percent': number;
    /**
     * 
     * @type {number}
     * @memberof RunningProcessDetail
     */
    'start_time': number;
}
/**
 * 
 * @export
 * @interface StoppedProcessDetail
 */
export interface StoppedProcessDetail {
    /**
     * 
     * @type {number}
     * @memberof StoppedProcessDetail
     */
    'code': number;
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<string>}
     * @memberof ValidationError
     */
    'loc': Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'msg': string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'type': string;
}

/**
 * ApiApi - axios parameter creator
 * @export
 */
export const ApiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Account Api
         * @param {number} uin 
         * @param {string} name 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountApiApiUinApiPost: async (uin: number, name: string, body: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uin' is not null or undefined
            assertParamExists('accountApiApiUinApiPost', 'uin', uin)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('accountApiApiUinApiPost', 'name', name)
            // verify required parameter 'body' is not null or undefined
            assertParamExists('accountApiApiUinApiPost', 'body', body)
            const localVarPath = `/api/{uin}/api`
                .replace(`{${"uin"}}`, encodeURIComponent(String(uin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Account Device
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountDeviceApiUinDeviceGet: async (uin: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uin' is not null or undefined
            assertParamExists('accountDeviceApiUinDeviceGet', 'uin', uin)
            const localVarPath = `/api/{uin}/device`
                .replace(`{${"uin"}}`, encodeURIComponent(String(uin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary All Accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        allAccountsApiGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create Account
         * @param {number} uin 
         * @param {AccountCreation} [accountCreation] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAccountApiUinPut: async (uin: number, accountCreation?: AccountCreation, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uin' is not null or undefined
            assertParamExists('createAccountApiUinPut', 'uin', uin)
            const localVarPath = `/api/{uin}`
                .replace(`{${"uin"}}`, encodeURIComponent(String(uin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(accountCreation, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Account
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAccountApiUinDelete: async (uin: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uin' is not null or undefined
            assertParamExists('deleteAccountApiUinDelete', 'uin', uin)
            const localVarPath = `/api/{uin}`
                .replace(`{${"uin"}}`, encodeURIComponent(String(uin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Process Logs History
         * @param {number} uin 
         * @param {boolean} [reverse] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processLogsHistoryApiUinProcessLogsGet: async (uin: number, reverse?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uin' is not null or undefined
            assertParamExists('processLogsHistoryApiUinProcessLogsGet', 'uin', uin)
            const localVarPath = `/api/{uin}/process/logs`
                .replace(`{${"uin"}}`, encodeURIComponent(String(uin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (reverse !== undefined) {
                localVarQueryParameter['reverse'] = reverse;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Process Start
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processStartApiUinProcessPut: async (uin: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uin' is not null or undefined
            assertParamExists('processStartApiUinProcessPut', 'uin', uin)
            const localVarPath = `/api/{uin}/process`
                .replace(`{${"uin"}}`, encodeURIComponent(String(uin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Process Status
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processStatusApiUinProcessStatusGet: async (uin: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uin' is not null or undefined
            assertParamExists('processStatusApiUinProcessStatusGet', 'uin', uin)
            const localVarPath = `/api/{uin}/process/status`
                .replace(`{${"uin"}}`, encodeURIComponent(String(uin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Process Stop
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processStopApiUinProcessDelete: async (uin: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uin' is not null or undefined
            assertParamExists('processStopApiUinProcessDelete', 'uin', uin)
            const localVarPath = `/api/{uin}/process`
                .replace(`{${"uin"}}`, encodeURIComponent(String(uin)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ApiApi - functional programming interface
 * @export
 */
export const ApiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ApiApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Account Api
         * @param {number} uin 
         * @param {string} name 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountApiApiUinApiPost(uin: number, name: string, body: object, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountApiApiUinApiPost(uin, name, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Account Device
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountDeviceApiUinDeviceGet(uin: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountDeviceApiUinDeviceGet(uin, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary All Accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async allAccountsApiGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<number>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.allAccountsApiGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create Account
         * @param {number} uin 
         * @param {AccountCreation} [accountCreation] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAccountApiUinPut(uin: number, accountCreation?: AccountCreation, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProcessAccount>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAccountApiUinPut(uin, accountCreation, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Account
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAccountApiUinDelete(uin: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAccountApiUinDelete(uin, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Process Logs History
         * @param {number} uin 
         * @param {boolean} [reverse] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async processLogsHistoryApiUinProcessLogsGet(uin: number, reverse?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ProcessLog>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.processLogsHistoryApiUinProcessLogsGet(uin, reverse, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Process Start
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async processStartApiUinProcessPut(uin: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProcessInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.processStartApiUinProcessPut(uin, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Process Status
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async processStatusApiUinProcessStatusGet(uin: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProcessInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.processStatusApiUinProcessStatusGet(uin, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Process Stop
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async processStopApiUinProcessDelete(uin: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.processStopApiUinProcessDelete(uin, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ApiApi - factory interface
 * @export
 */
export const ApiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ApiApiFp(configuration)
    return {
        /**
         * 
         * @summary Account Api
         * @param {number} uin 
         * @param {string} name 
         * @param {object} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountApiApiUinApiPost(uin: number, name: string, body: object, options?: any): AxiosPromise<any> {
            return localVarFp.accountApiApiUinApiPost(uin, name, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Account Device
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountDeviceApiUinDeviceGet(uin: number, options?: any): AxiosPromise<any> {
            return localVarFp.accountDeviceApiUinDeviceGet(uin, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary All Accounts
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        allAccountsApiGet(options?: any): AxiosPromise<Array<number>> {
            return localVarFp.allAccountsApiGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Account
         * @param {number} uin 
         * @param {AccountCreation} [accountCreation] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAccountApiUinPut(uin: number, accountCreation?: AccountCreation, options?: any): AxiosPromise<ProcessAccount> {
            return localVarFp.createAccountApiUinPut(uin, accountCreation, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Account
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAccountApiUinDelete(uin: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteAccountApiUinDelete(uin, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Process Logs History
         * @param {number} uin 
         * @param {boolean} [reverse] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processLogsHistoryApiUinProcessLogsGet(uin: number, reverse?: boolean, options?: any): AxiosPromise<Array<ProcessLog>> {
            return localVarFp.processLogsHistoryApiUinProcessLogsGet(uin, reverse, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Process Start
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processStartApiUinProcessPut(uin: number, options?: any): AxiosPromise<ProcessInfo> {
            return localVarFp.processStartApiUinProcessPut(uin, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Process Status
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processStatusApiUinProcessStatusGet(uin: number, options?: any): AxiosPromise<ProcessInfo> {
            return localVarFp.processStatusApiUinProcessStatusGet(uin, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Process Stop
         * @param {number} uin 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        processStopApiUinProcessDelete(uin: number, options?: any): AxiosPromise<void> {
            return localVarFp.processStopApiUinProcessDelete(uin, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ApiApi - object-oriented interface
 * @export
 * @class ApiApi
 * @extends {BaseAPI}
 */
export class ApiApi extends BaseAPI {
    /**
     * 
     * @summary Account Api
     * @param {number} uin 
     * @param {string} name 
     * @param {object} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public accountApiApiUinApiPost(uin: number, name: string, body: object, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).accountApiApiUinApiPost(uin, name, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Account Device
     * @param {number} uin 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public accountDeviceApiUinDeviceGet(uin: number, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).accountDeviceApiUinDeviceGet(uin, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary All Accounts
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public allAccountsApiGet(options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).allAccountsApiGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Account
     * @param {number} uin 
     * @param {AccountCreation} [accountCreation] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public createAccountApiUinPut(uin: number, accountCreation?: AccountCreation, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).createAccountApiUinPut(uin, accountCreation, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Account
     * @param {number} uin 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public deleteAccountApiUinDelete(uin: number, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).deleteAccountApiUinDelete(uin, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Process Logs History
     * @param {number} uin 
     * @param {boolean} [reverse] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public processLogsHistoryApiUinProcessLogsGet(uin: number, reverse?: boolean, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).processLogsHistoryApiUinProcessLogsGet(uin, reverse, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Process Start
     * @param {number} uin 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public processStartApiUinProcessPut(uin: number, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).processStartApiUinProcessPut(uin, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Process Status
     * @param {number} uin 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public processStatusApiUinProcessStatusGet(uin: number, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).processStatusApiUinProcessStatusGet(uin, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Process Stop
     * @param {number} uin 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApiApi
     */
    public processStopApiUinProcessDelete(uin: number, options?: AxiosRequestConfig) {
        return ApiApiFp(this.configuration).processStopApiUinProcessDelete(uin, options).then((request) => request(this.axios, this.basePath));
    }
}


