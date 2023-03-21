/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Api.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: Hashir <hashir@coinmode.com>               +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/20 22:38:56 by Hashir            #+#    #+#             */
/*   Updated: 2023/03/21 20:05:21 by Hashir           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import axios from 'axios'
import config from '../config'

class Api {
    constructor() {
        this.url = config.url
    }

    /**
     * Basic function to call the base API.
     */
    async request({ api, body, verb = 'get' }) {
        const url = this.url + api
        try {
            let response
            if (verb === 'get') {
                response = await axios.get(url, {params: body})
            }
            if (response.data.error) {
                return { error: String(response.data.userMessage), ok: false }
            }
            return { ok: response.data }
        } catch (err) {
            const { message, isBusinessError } = err
            return {
                ok: false,
                error: 'Network is down?',
                message,
                isBusinessError,
            }
        }
    }

    /**
     * This will get count of questions for each category and subcategories within too.
     * Optionally the count can be narrowed down to particular category too.
     */
    async categoryCount({ category }) {
        const response = await this.request({
            api: '/v1/category/count',
            body: { category }
        })
        return response
    }

    /**
     * This will get the questions for specified category including
     * any subcategories questions.
     */
    async categoryContent({ category }) {
        const response = await this.request({
            api: '/v1/category/content',
            body: { category }
        })
        return response
    }

    /**
     * It will get `question` search suggestions for the specified
     * search term while also insuring that `search` term must be specified.
     * How many suggestions to be returned can be specified via `limit` param.
     */
    async searchSuggestions({ search }) {
        const response = await this.request({
            api: '/v1/search/suggestions',
            body: { search }
        })
        return response
    }

    /**
     * It will get `question` search suggestions for the specified
     * search term while also insuring that `search` term must be specified.
     * How many suggestions to be returned can be specified via `limit` param.
     */
    async searchContent({ search }) {
        const response = await this.request({
            api: '/v1/search',
            body: { search }
        })
        return response
    }
}

const api = new Api()
export default api
