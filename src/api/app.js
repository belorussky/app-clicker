import supabase from '@/services/supabase'
import { useTelegram } from '@/services/telegram'

const { user } = useTelegram()

const MY_ID = user?.id ?? 4252

export async function fetchTasks() {
    const { data, error } = await supabase.from('tasks').select('*')

    if (error) {
        return new Error(error)
    }
    return data
}

export async function getOrCreateUser() {
    const pontentialUser = await supabase
        .from('users')
        .select()
        .eq('telegram', MY_ID)

    if (pontentialUser.data.length !== 0) {
        return pontentialUser.data[0]
    }

    const newUser = {
        telegram: MY_ID,
        friends: {},
        tasks: {},
        score: 0,
    }

    await supabase.from('users').insert(newUser)
    return newUser
}

export async function updateScore(score) {
    await supabase.from('users').update({ score }).eq('telegram', MY_ID)
}