import { GITHUB_REST_API_BASE_URL } from "../configs"
import httpClient from "./http-service"


const githubRestApiHttpClient = httpClient.create({
    baseURL: GITHUB_REST_API_BASE_URL,
})

const getAllRepos = () => githubRestApiHttpClient.get(`/all`)

const getReposByUsername = (username) =>
    githubRestApiHttpClient.get(`/users/${username}/repos`)

export const githubService = {
    getAllRepos,
    getReposByUsername,
}

export default githubService;