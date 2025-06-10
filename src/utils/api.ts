import axios from 'axios'
import { Skill, User, Project } from './types'

const BACKEND_URL = 'http://localhost:3000'

export async function getSkills(): Promise<Skill[]> {
    const response = await axios.get(`${BACKEND_URL}/skills`)
    return response.data
}

export async function getProjects(): Promise<Project[]> {
    const response = await axios.get(`${BACKEND_URL}/projects`)
    return response.data
}

export async function getProjectById(id: number): Promise<Project> {
    const response = await axios.get(`${BACKEND_URL}/projects/${id}`)
    return response.data
}

export async function login(username: string, password: string): Promise<string> {
    const response = await axios.post(`${BACKEND_URL}/login`, { username, password})
    return response.data.token
}

export async function getUser(token: string): Promise<User> {
    const response = await axios.get(`${BACKEND_URL}/user`, { headers: { token }})
    return response.data
}